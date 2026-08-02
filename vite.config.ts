import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    cssCodeSplit: true,
    // manualChunks groups react/react-dom into a client vendor chunk — invalid
    // for the SSR build, where those deps are externalized instead.
    rollupOptions: isSsrBuild ? undefined : {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react", "@radix-ui/react-toast", "@radix-ui/react-dialog", "@radix-ui/react-tooltip"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
}));
