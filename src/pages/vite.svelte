<script lang="ts">
  let count = 0;
  const increment = (e: any) => {
    count += 1;
    console.info(`当前计数:${count}次`, e);
  };
</script>

<div class="login">
  vite 页面
  <button on:click={increment}>
    Clicks: {count}
  </button>
</div>

<style lang="less">
  .login {
    background-color: red;
  }
</style>
