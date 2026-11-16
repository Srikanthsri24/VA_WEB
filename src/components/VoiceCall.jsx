import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AudioLines, MessageCircle, Phone, PhoneOff } from "lucide-react";
import { sendContactEmail } from "@/lib/contactEmail";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogTitle,
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
  if (call.audio) {
    call.audio.pause();
    call.audio.srcObject = null;
  }
}

export default function VoiceCall() {
  const current = useRef(null);
  const opener = useRef(null);
  const transcript = useRef(null);
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("voice");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const isChat = mode === "chat";
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
      await sendContactEmail({ ...draft, subject: isChat ? "AI chat follow-up" : "AI voice assistant follow-up" });
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

  useEffect(() => {
    if (transcript.current) transcript.current.scrollTop = transcript.current.scrollHeight;
  }, [messages, waiting]);

  function requestReply(session, instructions) {
    if (session.chat) {
      session.waiting = true;
      setWaiting(true);
    }
    session.events.send(JSON.stringify({
      type: "response.create",
      response: {
        ...(session.chat ? { output_modalities: ["text"] } : {}),
        ...(instructions ? { instructions } : {}),
      },
    }));
  }

  function sendMessage(event) {
    event.preventDefault();
    const session = current.current;
    const value = input.trim();
    if (!value || session?.events?.readyState !== "open" || session.waiting) return;
    session.events.send(JSON.stringify({
      type: "conversation.item.create",
      item: { type: "message", role: "user", content: [{ type: "input_text", text: value }] },
    }));
    setMessages((items) => [...items, { role: "user", text: value }]);
    setInput("");
    requestReply(session);
  }

  function openAssistant(nextMode, event) {
    opener.current = event.currentTarget;
    setMode(nextMode);
    setOpen(true);
    if (nextMode === "chat") void startCall(true);
  }

  function endCall(text = "") {
    const call = current.current;
    current.current = null;
    if (call) releaseCall(call);
    setWaiting(false);
    setStatus("idle");
    setMessage(text);
  }

  async function startCall(chat = false) {
    if (current.current) return;
    if (!window.RTCPeerConnection || (!chat && !navigator.mediaDevices?.getUserMedia)) {
      setMessage("The AI assistant needs a supported browser and a secure connection.");
      return;
    }

    if (chat) {
      setMessages([]);
      setInput("");
    }
    const call = { abort: new AbortController(), audio: chat ? null : new Audio(), chat };
    current.current = call;
    setStatus("connecting");
    setMessage(chat ? "Connecting to the AI assistant…" : "Waiting for microphone access…");

    try {
      if (!chat) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        if (current.current !== call) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        call.stream = stream;
      }

      setMessage("Connecting to the AI assistant. This may take up to a minute after inactivity.");
      call.timer = window.setTimeout(() => {
        endCall("Couldn’t connect to the assistant. Please try again.");
      }, 100_000);
      const peer = new RTCPeerConnection();
      call.peer = peer;

      if (chat) {
        // The shared Realtime endpoint expects an audio section in the offer.
        // A receive-only transceiver needs no microphone or audio playback.
        peer.addTransceiver("audio", { direction: "recvonly" });
      } else {
        call.audio.autoplay = true;
        peer.ontrack = ({ streams }) => {
          call.audio.srcObject = streams[0];
        };
        call.stream.getTracks().forEach((track) => peer.addTrack(track, call.stream));
      }

      const events = peer.createDataChannel("oai-events");
      call.events = events;
      events.onopen = () => {
        if (current.current !== call) return;
        window.clearTimeout(call.timer);
        call.timer = window.setTimeout(
          () => endCall(chat ? "This chat session ended. You can start another." : "The call ended after 5 minutes."),
          300_000,
        );
        setStatus("active");
        setMessage(chat ? "" : "Connected. You can speak now.");
        requestReply(call, chat
          ? "In English, briefly introduce yourself and ask which language the visitor would like to use in chat. Offer English as the default. Then wait for their response."
          : "In English, introduce yourself and ask which language the visitor would like to speak. Offer English as the default. Then wait for their response.");
      };

      events.onmessage = ({ data }) => {
        if (current.current !== call) return;
        const event = JSON.parse(data);
        if (chat && event.type === "error") {
          call.waiting = false;
          setWaiting(false);
          setMessage("The assistant couldn’t reply. Please try again.");
          return;
        }
        if (event.type !== "response.done") return;
        const output = event.response?.output || [];
        if (chat) {
          call.waiting = false;
          setWaiting(false);
          const reply = output.flatMap((item) => item.content || [])
            .filter((part) => part.type === "output_text")
            .map((part) => part.text)
            .join("\n");
          if (reply) {
            setMessage("");
            setMessages((items) => [...items, { role: "assistant", text: reply }]);
          } else if (event.response?.status !== "completed") {
            setMessage("The assistant couldn’t reply. Please try again.");
          }
        }
        if (event.response?.status !== "completed" || events.readyState !== "open") return;
        const requests = output.filter(
          (item) => item.type === "function_call" && item.name === "prepare_follow_up",
        );
        if (!requests.length) return;
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
        requestReply(call);
      };

      peer.onconnectionstatechange = () => {
        if (current.current === call && ["failed", "closed"].includes(peer.connectionState)) {
          endCall("The connection ended. You can start a new session.");
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
          : "The assistant is unavailable right now. Please try again later or contact us.";
        if (current.current === call) endCall(error);
        return;
      }

      const sdp = await response.text();
      await peer.setRemoteDescription({ type: "answer", sdp });
    } catch (error) {
      if (current.current !== call) return;
      endCall(error.name === "NotAllowedError"
        ? "Allow microphone access in your browser to start a call."
        : "Couldn’t connect to the assistant. Please try again or contact us.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => {
      setOpen(nextOpen);
      if (nextOpen) return;
      endCall();
      setMessages([]);
      setInput("");
      if (!sending.current) {
        setDraft(null);
        setMailStatus("");
      }
    }}>
      <div className="fixed bottom-24 left-4 z-40 flex gap-2 md:bottom-5">
        <Button
          aria-label="Talk to Visionaries AI"
          aria-haspopup="dialog"
          onClick={(event) => openAssistant("voice", event)}
          className="h-11 gap-2 rounded-full border border-white/20 bg-gradient-to-r from-blue-700 to-indigo-700 px-3 text-white shadow-lg shadow-blue-950/25 hover:from-blue-600 hover:to-indigo-600 sm:px-4"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Talk to AI
        </Button>
        <Button
          variant="outline"
          aria-haspopup="dialog"
          onClick={(event) => openAssistant("chat", event)}
          className="h-11 gap-2 rounded-full bg-background px-3 shadow-lg sm:px-4"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Chat with AI
        </Button>
      </div>
      <DialogContent
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          opener.current?.focus();
        }}
        className="z-[10001] max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-2xl p-5 sm:p-7"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {isChat ? <MessageCircle aria-hidden="true" className="h-6 w-6" /> : <AudioLines aria-hidden="true" className="h-6 w-6" />}
        </div>
        <DialogTitle>{isChat ? "Chat with Visionaries AI" : "Talk to Visionaries AI"}</DialogTitle>
        <DialogDescription>
          {isChat
            ? "Type in your preferred language. Your messages are processed by OpenAI."
            : "Choose a language when the assistant asks. English is the default. Your microphone audio is sent to OpenAI during the call."}
        </DialogDescription>
        {message && <p role="status" className="text-sm text-muted-foreground">{message}</p>}
        {isChat && (
          <>
            <div ref={transcript} role="log" aria-label="Chat messages" className="grid max-h-64 gap-3 overflow-y-auto rounded-xl bg-muted/50 p-3">
              {messages.map(({ role, text }, index) => (
                <p key={index} className={`max-w-[90%] whitespace-pre-wrap break-words rounded-xl px-3 py-2 text-sm ${role === "user" ? "justify-self-end bg-primary text-primary-foreground" : "justify-self-start border border-border bg-background"}`}>
                  <span className="sr-only">{role === "user" ? "You: " : "Visionaries AI: "}</span>{text}
                </p>
              ))}
              {waiting && <p className="text-sm text-muted-foreground">Visionaries AI is replying…</p>}
            </div>
            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                aria-label="Message"
                placeholder="Type a message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                disabled={status !== "active"}
                maxLength={1500}
                className="min-w-0 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <Button type="submit" disabled={status !== "active" || waiting || !input.trim()}>Send</Button>
            </form>
          </>
        )}
        <div className="flex flex-wrap items-center gap-4">
          {status === "idle" ? (
            <Button onClick={() => startCall(isChat)}>{isChat ? "Start chat" : <><Phone className="mr-2 h-4 w-4" />Start call</>}</Button>
          ) : (
            <Button variant={isChat ? "outline" : "destructive"} onClick={() => endCall(isChat ? "Chat ended." : "Call ended.")}>
              {isChat ? "End chat" : <><PhoneOff className="mr-2 h-4 w-4" />End call</>}
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
