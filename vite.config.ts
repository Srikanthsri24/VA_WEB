import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

import { createVoiceHandler } from "./server/voice.mjs";

export default defineConfig(({ mode }) => ({
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    {
      name: "local-voice-endpoint",
      configureServer(server) {
        const { OPENAI_API_KEY } = loadEnv(mode, server.config.envDir, "OPENAI_");
        const handleVoice = createVoiceHandler({ apiKey: OPENAI_API_KEY });
        server.middlewares.use((request, response, next) => {
          if (request.url !== "/api/voice") return next();
          void handleVoice(request, response);
        });
      },
    },
    ...(mode === "development" ? [componentTagger()] : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));