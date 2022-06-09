import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from "@rollup/plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // {
    //   ...eslint(),
    //   enforce: "pre",
    //   apply: "build",
    // },
  ],
  server: { port: 3001 },
});
