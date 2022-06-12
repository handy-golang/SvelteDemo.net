/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module '@roxi/routify/runtime/buildRoutes';

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

export {};
