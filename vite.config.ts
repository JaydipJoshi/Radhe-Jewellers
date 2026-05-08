import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    // Target modern browsers — smaller output, no legacy polyfills
    target: "es2020",
    // Raise warning limit slightly — shadcn/radix bundles are intentionally large
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Manual chunk splitting keeps each vendor chunk small and individually cacheable
        manualChunks: {
          // React core — changes least often → long cache lifetime
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
          // Router — small, rarely changes
          "vendor-router": ["react-router-dom"],
          // Animation — framer-motion is the biggest dep; isolated so pages load without it
          "vendor-motion": ["framer-motion"],
          // Radix UI primitives — large, stable
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-accordion",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-popover",
          ],
          // Icons — tree-shaken but still benefits from isolation
          "vendor-lucide": ["lucide-react"],
          // Data / query layer
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
    // Inline assets smaller than 4 KB to save round trips on slow connections
    assetsInlineLimit: 4096,
  },
}));
