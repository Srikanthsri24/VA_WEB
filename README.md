
## AI voice calls

Use Node.js 22 or newer for the voice server. For local testing, put a fresh
`OPENAI_API_KEY` in the ignored `.env.local` file and run `npm run dev`.
Open the Vite URL, select **Talk to Visionaries AI**, and start a call.

GitHub Pages serves the frontend. For production, run `node server/voice.mjs`
on a Node host behind HTTPS. Store `OPENAI_API_KEY` in that host's secret
settings and set `VOICE_ALLOWED_ORIGIN=https://visionariesai.com`. Build the
frontend with `VITE_VOICE_API_URL` set to the public HTTPS endpoint, including
the `/api/voice` path. This URL is public. Never add an OpenAI key to a
`VITE_` variable.

The endpoint caps new calls at 10 per minute per server process and attempts
to end each call after five minutes. For a public deployment, configure
request limits at the hosting edge and monitor usage in the OpenAI project.
Update `server/voice-catalog.json` when the public service or product details change.
