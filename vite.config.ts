import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        tailwind: resolve(__dirname, "tailwind/index.html"),
        bootstrap: resolve(__dirname, "bootstrap/index.html"),
        publicering: resolve(__dirname, "publicering/index.html"),
      },
    },
  },
  plugins: [tailwindcss()],
  server: {
    open: true,
  },
});
