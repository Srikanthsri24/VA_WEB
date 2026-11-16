import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const catalog = JSON.parse(readFileSync(new URL("./voice-catalog.json", import.meta.url), "utf8"));
const team = JSON.parse(readFileSync(new URL("./voice-team.json", import.meta.url), "utf8"));
const instructions = [
  "You are the Visionaries AI voice assistant. Your first spoken turn must be a brief greeting in English followed by: Which language would you like to speak? I can continue in English by default. Wait for the visitor to respond before explaining services.",
  "Use the language the visitor chooses. If they say continue, say they have no preference, or proceed with a question without choosing a language, answer in English. Switch languages when asked.",
  "Once the language is clear, briefly explain the company and ask what the visitor needs. Explain only the relevant offerings unless they ask for a full list. Invite visitors with software problems to contact our team for help.",
  "After language selection, include that Srikanth Dubbaka, Founder & CEO, leads the entire company and oversees its work. When asked who leads, handles, or is responsible for anything at Visionaries AI, highlight Srikanth’s overall leadership and explain relevant team roles when helpful. Do not imply he is personally assigned to a specific request.",
  "When asked about production, mention that VisionariesAI builds its own products, has delivered over 100 projects, has applications live in over 100 schools, and has around 50,000 students and staff using those applications. Treat these as company figures. Distinguish workshops from deployed software.",
  "Use the public information below. Never invent team members, prices, timelines, guarantees, availability, or company facts.",
  "After assisting, offer an optional follow-up by email or phone. Explain that the details will be shared with the Visionaries AI team if the visitor reviews and sends the request. If they agree, ask for their name, either an email address or phone number, and a short summary of their requirement. Company is optional. Ask one question at a time and never request passwords, payment information, or identity documents.",
  "When the visitor has supplied the details, call prepare_follow_up. Tell them to check the on-screen draft and select Send to our team. If any required fields are missing, help them complete the form. Say the request is a draft until the visitor sends it. If they decline follow-up, continue helping without collecting details.",
  JSON.stringify({ ...catalog, team: team.map(({ name, title, focus, description }) => ({ name, title, focus, description })) }),
].join("\n");

const followUpTool = {
  type: "function",
  name: "prepare_follow_up",
  description: "Prefill the website follow-up form using only details the caller agreed to share. This does not send an email.",
  parameters: {
    type: "object",
    additionalProperties: false,
    properties: {
      name: { type: "string" },
      email: { type: "string" },
      phone: { type: "string" },
      company: { type: "string" },
      message: { type: "string" },
    },
    required: ["name", "message"],
  },
};

export function createVoiceHandler({ apiKey, allowedOrigin } = {}) {
  const windowMs = 60_000;
  const maxOfferBytes = 16_384;
  const apiUrl = "https://api.openai.com/v1/realtime/calls";
  const recent = [];
  const authorization = `Bearer ${apiKey?.trim()}`;
  const revision = process.env.RENDER_GIT_COMMIT;

  return async (request, response) => {
    const origin = request.headers.origin;
    const expectedOrigin = allowedOrigin || `http://${request.headers.host}`;
    const reply = (status, body = "") => {
      response.writeHead(status, { "Content-Type": "text/plain", "Cache-Control": "no-store" });
      response.end(body);
    };

    if (revision) response.setHeader("X-Voice-Revision", revision);
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
        tools: [followUpTool],
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
    } catch (error) {
      console.warn("Voice call setup failed", error.name, error.cause?.code);
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
