import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

const base = "/dt193g-laboration1/";

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        tailwind: resolve(__dirname, "tailwind/index.html"),
        bootstrap: resolve(__dirname, "bootstrap/index.html"),
      },
    },
  },
  plugins: [tailwindcss()],
  server: {
    open: true,
  },
});
