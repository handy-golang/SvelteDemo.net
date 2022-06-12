/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare global {
  interface Window {
    mo7Encrypt: (msg: string) => string;
    Md5: (msg: string) => string;
    deferredPrompt: any;
    ViteConst: {
      AppVersion: string;
      AppName: string;
      ProxyUrl: string;
      rmAgin: string;
    };
  }
}

declare module '@roxi/routify/runtime/buildRoutes';

export {};
