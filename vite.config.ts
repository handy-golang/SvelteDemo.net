import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

const PwaConfig = {
  workbox: {
    sourcemap: true,
  },
  manifest: {
    name: 'SvelteDemo',
    short_name: 'SvelteDemo',
    theme_color: '#F0B90B',
    description: 'SvelteDemo, golang serve',
    lang: 'zh',
    icons: [
      {
        src: '//file.mo7.cc/static/lxh_png/2.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '//file.mo7.cc/static/lxh_png/2.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '//file.mo7.cc/static/lxh_png/2.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '//file.mo7.cc/static/lxh_png/2.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    start_url: './?mode=pwa',
    display: 'standalone',
    background_color: '#333333',
  },
};

import AppPackage from './package.json';

// const ProxyUrl = 'https://api.mo7.cc';
const ProxyUrl = `http://localhost:${AppPackage.Port}`;
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({}),
    }),
    VitePWA(PwaConfig),
    eslintPlugin(),
  ],
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
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  build: {
    outDir: './dist',
    sourcemap: true,
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 在此处设置，也可以设置直角、边框色、字体大小等
          'primary-color': '#f0b90b',
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
      '/api': {
        // 设置你调用的接口域名和端口号 别忘了加http
        target: ProxyUrl,
        changeOrigin: true, // 允许跨域
      },
    },
  },
});
