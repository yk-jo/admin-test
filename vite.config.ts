import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  envDir: ".env",
  base: "/",
  plugins: [
    react(),
    svgr(), // NOTE:: 4버전부터 exportAsDefault값 사라짐. *.svg?react 형태로 사용해야함
    createHtmlPlugin({
      inject: {
        data: { title: "관리자 페이지", favicon: "/vite.svg" },
      },
      viteNext: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
