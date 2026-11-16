import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const catalog = JSON.parse(readFileSync(new URL("./voice-catalog.json", import.meta.url), "utf8"));
const instructions = [
  "You are the Visionaries AI voice assistant. Introduce yourself as an AI assistant.",
  "Ask what the visitor is looking to accomplish, then explain relevant offerings in conversational language. Keep answers brief unless asked for detail.",
  "Use the public catalog below. Never invent prices, timelines, guarantees, availability, or company facts. For quotes, demos, or questions you cannot answer, direct the caller to the Contact page on visionariesai.com. Do not request sensitive information.",
  JSON.stringify(catalog),
].join("\n");

export function createVoiceHandler({ apiKey, allowedOrigin } = {}) {
  const windowMs = 60_000;
  const maxOfferBytes = 16_384;
  const apiUrl = "https://api.openai.com/v1/realtime/calls";
  const recent = [];
  const authorization = `Bearer ${apiKey}`;

  return async (request, response) => {
    const origin = request.headers.origin;
    const expectedOrigin = allowedOrigin || `http://${request.headers.host}`;
    const reply = (status, body = "") => {
      response.writeHead(status, { "Content-Type": "text/plain", "Cache-Control": "no-store" });
      response.end(body);
    };

    if (request.url === "/healthz" && request.method === "GET") return reply(apiKey ? 200 : 503);
    if (request.url !== "/api/voice") return reply(404);
    if (origin !== expectedOrigin) return reply(403);
    response.setHeader("Access-Control-Allow-Origin", expectedOrigin);
    response.setHeader("Vary", "Origin");
    if (request.method === "OPTIONS") {
      response.setHeader("Access-Control-Allow-Methods", "POST");
      response.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return reply(204);
    }
    if (request.method !== "POST") return reply(405);
    if (!request.headers["content-type"]?.startsWith("application/sdp")) return reply(415);
    if (!apiKey) return reply(503);

    let sdp = "";
    try {
      request.setEncoding("utf8");
      for await (const chunk of request.iterator({ destroyOnReturn: false })) {
        sdp += chunk;
        if (Buffer.byteLength(sdp) > maxOfferBytes) return reply(413);
      }
      if (!sdp.startsWith("v=0") || !sdp.includes("m=audio")) return reply(400);

      const now = Date.now();
      while (recent.length && now - recent[0] >= windowMs) recent.shift();
      if (recent.length >= 10) return reply(429);
      recent.push(now);

      const form = new FormData();
      form.set("sdp", sdp);
      form.set("session", JSON.stringify({
        type: "realtime",
        model: "gpt-realtime",
        instructions,
        audio: { output: { voice: "marin" } },
      }));

      const upstream = await fetch(apiUrl, {
        method: "POST",
        headers: { Authorization: authorization },
        body: form,
        signal: AbortSignal.timeout(15_000),
      });
      if (!upstream.ok) {
        console.warn("OpenAI voice session failed with status", upstream.status);
        response.setHeader("X-Voice-Upstream-Status", String(upstream.status));
        await upstream.body?.cancel();
        return reply(502);
      }

      const callId = upstream.headers.get("location")?.split("/").pop();
      if (callId && /^rtc_[\w-]+$/.test(callId)) {
        setTimeout(() => {
          fetch(`${apiUrl}/${callId}/hangup`, {
            method: "POST",
            headers: { Authorization: authorization },
            signal: AbortSignal.timeout(5000),
          }).then((result) => result.body?.cancel()).catch(() => {});
        }, 5 * windowMs).unref();
      }
      reply(200, await upstream.text());
    } catch {
      reply(502);
    }
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { OPENAI_API_KEY, VOICE_ALLOWED_ORIGIN, PORT = "8787" } = process.env;
  if (!OPENAI_API_KEY || !VOICE_ALLOWED_ORIGIN) {
    throw new Error("Set OPENAI_API_KEY and VOICE_ALLOWED_ORIGIN before starting the voice server.");
  }
  createServer(createVoiceHandler({ apiKey: OPENAI_API_KEY, allowedOrigin: VOICE_ALLOWED_ORIGIN }))
    .listen(Number(PORT), () => console.log(`Voice server listening on port ${PORT}`));
}
