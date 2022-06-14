<script>
  import { getToken, mStorage } from '@/utils/tools';
  import { outLogin } from '@/api/Account';
  const token = getToken();
  const UserInfo = mStorage.get('user_info');

  const handleOutLogin = () => {
    outLogin();
  };
</script>

<div class="index">
  {#if token}
    <br />
    <img class="Avatar" src={UserInfo.Avatar} alt="" srcset="" />
    <br />
    欢迎访问,{UserInfo.NickName}
    <br />
    <button on:click={handleOutLogin}>退出登录</button>
  {/if}

  {#if !token}
    <br />
    <a href="/login"> <button>请登录</button></a>
    <br />
  {/if}
</div>

<style lang="less">
  .Avatar {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
</style>
