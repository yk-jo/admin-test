import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { viteVConsole } from "vite-plugin-vconsole";
import { createHtmlPlugin } from "vite-plugin-html";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, ".env") };

  return defineConfig({
    envDir: ".env",
    base: "/",
    plugins: [
      react(),
      svgr(), // NOTE:: 4버전부터 exportAsDefault값 사라짐. 파일 임포트 시, *.svg?react 형태로 불러와야함
      createHtmlPlugin({
        inject: {
          data: {
            title: "관리자 페이지",
            favicon: "/vite.svg",
            naverClientId: process.env.VITE_NAVER_MAP_CLIENT_ID,
          },
        },
        viteNext: true,
      }),
      viteVConsole({
        entry: path.resolve("src/main.tsx"),
        enabled: mode === "dev",
        config: {
          maxLogNumber: 1000,
          theme: "dark",
        },
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
};
