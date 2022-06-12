<script lang="ts">
  let count = 0;
  const increment = (e: any) => {
    count += 1;
    console.info(`当前计数:${count}次`);
  };
</script>

<div class="button-wrapper">
  <button on:click={increment}>
    Clicks: {count}
  </button>
</div>

<style lang="less">
  .button-wrapper {
    border: 1px solid red;
    button {
      font-family: inherit;
      font-size: inherit;
      padding: 1em 2em;
      color: #ff3e00;
      background-color: rgba(255, 62, 0, 0.1);
      border-radius: 2em;
      border: 2px solid rgba(255, 62, 0, 0);
      outline: none;
      width: 200px;
      font-variant-numeric: tabular-nums;
      cursor: pointer;
    }

    button:focus {
      border: 2px solid #ff3e00;
    }

    button:active {
      background-color: rgba(255, 62, 0, 0.2);
    }
  }
</style>
