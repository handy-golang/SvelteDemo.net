<script type="ts">
  import { login } from '@/api/Account';
  import type { resDataType } from '@/utils/utils.d';
  import { setToken } from '@/utils/tools';
  import { goto } from '@roxi/routify';

  let Email = '';
  let Password = '';
  let resMsg: resDataType;

  async function Submit(e) {
    const Elm = e.target;
    Elm.disabled = true;

    setTimeout(() => {
      Elm.disabled = false;
    }, 1000);
    const res = await login({
      Email,
      Password,
    });
    resMsg = res;

    if (res.Code > 0) {
      await setToken(res.Data.Token);
      $goto('/');
    }
  }
</script>

<div class="login">
  登录页面
  <br />
  <input type="text" bind:value={Email} name="Email" placeholder="请输入邮箱" autoComplete="new-password" />
  <input type="password" bind:value={Password} name="Password" placeholder="请输入密码" autoComplete="new-password" />
  <br />
  <br />
  Email: {Email}
  <br />
  <br />
  Password: {Password}
  <br />
  <br />
  <button on:click={Submit}>提交</button>

  返回信息：
  {#if resMsg}
    <div class="resMsg" class:success={resMsg.Code > 0} class:fail={resMsg.Code < 0}>{JSON.stringify(resMsg)}</div>
  {/if}
</div>

<style lang="less">
  .resMsg {
    margin: 12px;
    border: 10px solid gray;
    padding: 15px;
    &.success {
      border-color: green;
    }
    &.fail {
      border-color: red;
    }
  }
</style>
