/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare global {
  interface Window {
    mo7Encrypt: (msg: string) => string;
    mo7Md5: (msg: string) => string;
    mo7SecretKey: string;
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
