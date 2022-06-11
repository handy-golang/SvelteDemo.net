import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

const PwaConfig = {
  workbox: {
    sourcemap: true,
  },
  manifest: {
    name: "Hunter",
    short_name: "Hunter",
    theme_color: "#F0B90B",
    description: "Hunter, 像猎手一样去做交易",
    lang: "zh",
    icons: [
      {
        src: "https://file.mo7.cc/hunter/logo/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://file.mo7.cc/hunter/logo/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "https://file.mo7.cc/hunter/logo/android-chrome-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "https://file.mo7.cc/hunter/logo/android-chrome-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    start_url: "./?mode=pwa",
    display: "standalone",
    background_color: "#333333",
  },
};

// import AppPackage from './package.json';

var AppPackage: any = {};

// const ProxyUrl = 'https://api.mo7.cc';
const ProxyUrl = `http://localhost:${AppPackage.Port}`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), VitePWA(PwaConfig)],
  define: {
    ViteConst: JSON.stringify({
      AppVersion: AppPackage.version,
      AppName: AppPackage.name,
      ProxyUrl,
    }),
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  root: "./",
  build: {
    outDir: "./dist",
    sourcemap: true,
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 在此处设置，也可以设置直角、边框色、字体大小等
          "primary-color": "#f0b90b",
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: true,
    port: AppPackage.Port + 1,
    strictPort: true, // 端口已被占用则会直接退出
    proxy: {
      "/api": {
        // 设置你调用的接口域名和端口号 别忘了加http
        target: ProxyUrl,
        changeOrigin: true, // 允许跨域
      },
    },
  },
});
