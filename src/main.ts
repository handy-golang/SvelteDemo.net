import '@/assets/js/SvelteDemo.net';

declare const ViteConst: any;
if (ViteConst) {
  window.ViteConst = {
    ...ViteConst,
    rmAgin: 'mo777',
  };
}
import { registerSW } from 'virtual:pwa-register';
registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

import Router from '@/Router.svelte';
window.document.getElementById('SvelteApp').innerHTML = '';
const App = new Router({
  target: document.getElementById('SvelteApp'),
});

export default App;
