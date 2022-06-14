<script>
  import { layout, isActive, url } from '@roxi/routify';
</script>

<div class="router">
  {#each $layout.children as node}
    <a class:active={$isActive(node.path)} href={node.path}>{node.title}</a>
  {/each}
</div>

<div class="page">
  <slot />
</div>

<style lang="less">
  .router {
    padding: 15px;
    a {
      display: inline-block;
      margin: 15px;
    }
  }
  .active {
    font-weight: bold;
  }
</style>
