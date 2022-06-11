declare const ViteConst: any;

if (ViteConst) {
  window.ViteConst = {
    ...ViteConst,
    rmAgin: 'mo777',
  };
}

const a = '123';
const str = 'xxx' + a;
let str3 = 'asdasd';

import { registerSW } from 'virtual:pwa-register';
registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

import App from '@/App.svelte';

document.getElementById('SvelteApp').innerHTML = '';
const app = new App({
  target: document.getElementById('SvelteApp'),
});

export default app;
