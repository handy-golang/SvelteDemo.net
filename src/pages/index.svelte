<script>
  // https://github.com/sveltejs/kit/issues/981
  export let scoped;
  export let scopedSync;
</script>

<div class="index">
  首页
  <div class="none">
    {scoped}{scopedSync}
    <slot />
  </div>
</div>

<style>
  .none {
    display: none;
  }
</style>
