# Svelte + TS + Vite + golang + routify

在 vite Svelte 模板之上配置了 TS 和 routify 以及 go serve 的文件组织

内部包含登录等模块

This template should help get you started developing with Svelte and TypeScript in Vite.

## 感言

Svelte 的理念非常新颖，但是深入思考过后发现了很多的问题。对于js来说 编译型的框架在后期升级和维护的难度会非常大，相反的 Vue 跟 React 这种包含运行时的框架相对更加灵活，虽然会存在一定程度的性能损失，但是这种损失是可以接受的。

关于 Vue3 和 React 我这里也写了两份 Demo ，我个人更加看好 Vue 将来的发展，它的写作方式对将来的标准 `Web Components` 兼容起来会更加方便。

## UI 库

https://sveltematerialui.com/

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.
  `vite dev` and `vite build` wouldn't work in a SvelteKit environment, for example.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store';
export default writable(0);
```

---

以下为 go serve 提供支持

## app_env.yaml

```yaml
Port: 8975
```

## sys_env.yaml

```yaml
# IP
LocalIP: 'xx.xx.xx.xx'
# Mongodb
MongoAddress: '158.125.11.11:5689'
MongoUserName: 'root'
MongoPassword: '123456'

# 运行模式
RunMod: 1
```

## go.work

```
go 1.18

use (
	./
)

replace (
	github.com/EasyGolang/goTools => /root/EasyGolang/goTools
)

```
