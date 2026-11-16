import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, PhoneOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";

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
    setMessage("Connecting to the AI assistant…");
    call.timer = window.setTimeout(() => {
      endCall("The call couldn’t connect. Please try again.");
    }, 30_000);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (current.current !== call) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }

      call.stream = stream;
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
            instructions: "Briefly greet the visitor as Visionaries AI’s AI assistant and ask how you can help.",
          },
        }));
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
    <Dialog onOpenChange={(open) => { if (!open) endCall(); }}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-24 left-4 z-40 gap-2 rounded-full shadow-lg md:bottom-5">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Talk to Visionaries AI
        </Button>
      </DialogTrigger>
      <DialogContent className="z-[10001]">
        <DialogTitle>Talk to Visionaries AI</DialogTitle>
        <DialogDescription>
          Ask our AI voice assistant about our services or products. Your microphone audio is sent to OpenAI during the call.
        </DialogDescription>
        <p role="status" className="text-sm">{message}</p>
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
      </DialogContent>
    </Dialog>
  );
}
