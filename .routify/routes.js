/**
 * @roxi/routify 2.18.7
 * File generated Sun Jun 12 2022 10:52:52 GMT+0800 (China Standard Time)
 */

export const __version = '2.18.7';
export const __timestamp = '2022-06-12T02:52:52.045Z';

//buildRoutes
import { buildClientTree } from '@roxi/routify/runtime/buildRoutes';

//imports

//options
export const options = {};

//tree
export const _tree = {
  root: true,
  children: [
    {
      isIndex: true,
      isPage: true,
      path: '/index',
      id: '_index',
      component: () => import('../src/pages/index.svelte').then((m) => m.default),
    },
    {
      isPage: true,
      path: '/Login',
      id: '_Login',
      component: () => import('../src/pages/login.svelte').then((m) => m.default),
    },
  ],
  path: '/',
};

export const { tree, routes } = buildClientTree(_tree);
