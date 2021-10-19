import { resolve } from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

const SRC_DIR = resolve(__dirname, "./src");
const PUBLIC_DIR = resolve(__dirname, "./public");
const BUILD_DIR = resolve(__dirname, "./www");

export default defineConfig({
  plugins: [reactRefresh()],
  root: SRC_DIR,
  base: "",
  publicDir: PUBLIC_DIR,
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": SRC_DIR,
    },
  },
  server: {
    host: true,
  },
});
