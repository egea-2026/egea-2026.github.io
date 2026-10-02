import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        ["index", "about", "program", "speakers", "information"].map((page) => [
          page,
          resolve(import.meta.dirname, `${page}.html`),
        ]),
      ),
    },
  },
});
