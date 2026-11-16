import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AudioLines, Phone, PhoneOff } from "lucide-react";
import { sendContactEmail } from "@/lib/contactEmail";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";

const followUpFields = [
  { name: "name", label: "Name", maxLength: 120, required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", maxLength: 254, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", maxLength: 40, autoComplete: "tel" },
  { name: "company", label: "Company (optional)", maxLength: 160, autoComplete: "organization" },
  { name: "message", label: "How can we help?", maxLength: 1500, required: true },
];

function readFollowUp(argumentsJson) {
  const data = JSON.parse(argumentsJson);
  if (!data || typeof data !== "object") throw new Error("Invalid follow-up details");
  return Object.fromEntries(followUpFields.map(({ name, maxLength }) => [
    name,
    typeof data[name] === "string" ? data[name].trim().slice(0, maxLength) : "",
  ]));
}

const endpoint = import.meta.env.VITE_VOICE_API_URL || "/api/voice";

function releaseCall(call) {
  call.abort.abort();
  window.clearTimeout(call.timer);
  call.peer?.close();
  call.stream?.getTracks().forEach((track) => track.stop());
  call.audio.pause();
  call.audio.srcObject = null;
}

export default function VoiceCall() {
  const current = useRef(null);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState(null);
  const [mailStatus, setMailStatus] = useState("");
  const sending = useRef(false);

  async function submitFollowUp(event) {
    event.preventDefault();
    if (sending.current) return;
    if (!draft.name.trim() || !draft.message.trim() || (!draft.email.trim() && !draft.phone.trim())) {
      setMailStatus("Enter your name, a short description, and an email address or phone number.");
      return;
    }
    sending.current = true;
    setMailStatus("Sending…");
    try {
      await sendContactEmail({ ...draft, subject: "AI voice assistant follow-up" });
      setDraft(null);
      setMailStatus("Request sent to the Visionaries AI team.");
    } catch {
      setMailStatus("Your request couldn’t be sent. Please try again or use Contact us.");
    } finally {
      sending.current = false;
    }
  }

  useEffect(() => () => {
    if (current.current) releaseCall(current.current);
    current.current = null;
  }, []);

  function endCall(text = "") {
    const call = current.current;
    current.current = null;
    if (call) releaseCall(call);
    setStatus("idle");
    setMessage(text);
  }

  async function startCall() {
    if (current.current) return;
    if (!navigator.mediaDevices?.getUserMedia || !window.RTCPeerConnection) {
      setMessage("Voice calls need a supported browser and a secure connection.");
      return;
    }

    const call = { abort: new AbortController(), audio: new Audio() };
    current.current = call;
    setStatus("connecting");
    setMessage("Waiting for microphone access…");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (current.current !== call) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }

      call.stream = stream;
      setMessage("Connecting to the AI assistant. This may take up to a minute after inactivity.");
      call.timer = window.setTimeout(() => {
        endCall("The call couldn’t connect. Please try again.");
      }, 100_000);
      const peer = new RTCPeerConnection();
      call.peer = peer;
      call.audio.autoplay = true;
      peer.ontrack = ({ streams }) => {
        call.audio.srcObject = streams[0];
      };
      stream.getTracks().forEach((track) => peer.addTrack(track, stream));

      const events = peer.createDataChannel("oai-events");
      events.onopen = () => {
        if (current.current !== call) return;
        window.clearTimeout(call.timer);
        call.timer = window.setTimeout(() => endCall("The call ended after 5 minutes."), 300_000);
        setStatus("active");
        setMessage("Connected. You can speak now.");
        events.send(JSON.stringify({
          type: "response.create",
          response: {
            instructions: "In English, introduce yourself and ask which language the visitor would like to speak. Offer English as the default. Then wait for their response.",
          },
        }));
      };

      events.onmessage = ({ data }) => {
        if (current.current !== call) return;
        const event = JSON.parse(data);
        if (event.type !== "response.done" || event.response?.status !== "completed") return;
        const requests = (event.response.output || []).filter(
          (item) => item.type === "function_call" && item.name === "prepare_follow_up",
        );
        if (!requests.length || events.readyState !== "open") return;
        for (const request of requests) {
          let output;
          try {
            const details = readFollowUp(request.arguments);
            if (sending.current) {
              output = "A request is currently sending. No draft changes were made.";
            } else {
              setDraft(details);
              setMailStatus("");
              output = "Follow-up draft is visible. It has not been sent. Ask the caller to review and send it.";
            }
          } catch {
            output = "The details could not be prepared. Ask the caller to enter them in the form.";
          }
          events.send(JSON.stringify({
            type: "conversation.item.create",
            item: { type: "function_call_output", call_id: request.call_id, output },
          }));
        }
        events.send(JSON.stringify({ type: "response.create" }));
      };

      peer.onconnectionstatechange = () => {
        if (current.current === call && ["failed", "closed"].includes(peer.connectionState)) {
          endCall("The connection ended. You can start a new call.");
        }
      };

      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/sdp" },
        body: offer.sdp,
        signal: call.abort.signal,
      });
      if (!response.ok) {
        const error = response.status === 429
          ? "The assistant is busy. Please try again in a minute."
          : "Voice calls are unavailable right now. Please try again later or contact us.";
        if (current.current === call) endCall(error);
        return;
      }

      const sdp = await response.text();
      await peer.setRemoteDescription({ type: "answer", sdp });
    } catch (error) {
      if (current.current !== call) return;
      endCall(error.name === "NotAllowedError"
        ? "Allow microphone access in your browser to start a call."
        : "The call couldn’t connect. Please try again or contact us.");
    }
  }

  return (
    <Dialog onOpenChange={(open) => {
      if (open) return;
      endCall();
      if (!sending.current) {
        setDraft(null);
        setMailStatus("");
      }
    }}>
      <DialogTrigger asChild>
        <Button
          aria-label="Talk to Visionaries AI"
          className="fixed bottom-24 left-4 z-40 h-12 gap-2 rounded-full border border-white/20 bg-gradient-to-r from-blue-700 to-indigo-700 px-4 text-white shadow-lg shadow-blue-950/25 hover:from-blue-600 hover:to-indigo-600 md:bottom-5"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Talk to AI
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-2xl p-5 sm:p-7 z-[10001]">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <AudioLines aria-hidden="true" className="h-6 w-6" />
        </div>
        <DialogTitle>Talk to Visionaries AI</DialogTitle>
        <DialogDescription>
          Choose a language when the assistant asks. English is the default. Your microphone audio is sent to OpenAI during the call.
        </DialogDescription>
        <p role="status" className="text-sm text-muted-foreground">{message}</p>
        <div className="flex flex-wrap items-center gap-4">
          {status === "idle" ? (
            <Button onClick={startCall}><Phone className="mr-2 h-4 w-4" />Start call</Button>
          ) : (
            <Button variant="destructive" onClick={() => endCall("Call ended.")}>
              <PhoneOff className="mr-2 h-4 w-4" />End call
            </Button>
          )}
          <Link to="/contact" onClick={() => endCall()} className="text-sm underline underline-offset-4">Contact us</Link>
        </div>
        {status === "active" && !draft && (
          <Button variant="outline" size="sm" className="justify-self-start" onClick={() => setDraft(readFollowUp("{}"))}>
            Request a follow-up
          </Button>
        )}
        {draft && (
          <form onSubmit={submitFollowUp} className="grid gap-3 border-t border-border pt-4">
            <h3 className="font-semibold">Review your follow-up request</h3>
            <p className="text-sm text-muted-foreground">Share your name, email or phone, and what you need help with. These details will go to our team when you send.</p>
            <fieldset disabled={mailStatus === "Sending…"} className="grid gap-3 sm:grid-cols-2">
              {followUpFields.map(({ name, label, type, ...attributes }) => {
                const Field = name === "message" ? "textarea" : "input";
                return (
                  <label key={name} className={name === "message" ? "grid gap-1 text-sm sm:col-span-2" : "grid gap-1 text-sm"}>
                    {label}
                    <Field
                      name={name}
                      type={Field === "input" ? type || "text" : undefined}
                      {...attributes}
                      value={draft[name]}
                      onChange={(event) => setDraft({ ...draft, [name]: event.target.value })}
                      className="min-w-0 rounded-md border border-input bg-background px-3 py-2"
                    />
                  </label>
                );
              })}
              <Button type="submit" className="justify-self-start sm:col-span-2">Send to our team</Button>
            </fieldset>
          </form>
        )}
        {mailStatus && <p role="status" className="text-sm">{mailStatus}</p>}
      </DialogContent>
    </Dialog>
  );
}
