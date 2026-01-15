import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
// import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin()];

export default defineConfig({
  base: '/',
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, "client/index.html"),
        about: path.resolve(import.meta.dirname, "client/about.html"),
        services: path.resolve(import.meta.dirname, "client/services.html"),
        team: path.resolve(import.meta.dirname, "client/team.html"),
        contact: path.resolve(import.meta.dirname, "client/contact.html"),
        caseStudies: path.resolve(import.meta.dirname, "client/case-studies.html"),
        videos: path.resolve(import.meta.dirname, "client/videos.html"),
        advisorDevelopment: path.resolve(import.meta.dirname, "client/advisor-development.html"),
        strategicPlanning: path.resolve(import.meta.dirname, "client/strategic-planning.html"),
        businessConsulting: path.resolve(import.meta.dirname, "client/business-consulting.html"),
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
