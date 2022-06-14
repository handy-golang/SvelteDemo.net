<script type="ts">
  let Email = '';
  let Password = '';

  function Submit(e) {
    const Elm = e.target;
    Elm.disabled = true;

    setTimeout(() => {
      Elm.disabled = false;
    }, 1000);
  }
</script>

<div class="login">
  登录页面
  <br />
  <input type="text" bind:value={Email} name="Email" placeholder="请输入邮箱" autoComplete="new-password" />
  <input type="password" bind:value={Password} name="Password" placeholder="请输入密码" autoComplete="new-password" />
  <br />
  Email: {Email}
  <br />
  Password: {Password}
  <br />
  <button on:click={Submit}>提交</button>
</div>
