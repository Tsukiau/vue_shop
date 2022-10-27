<template>
  <div class="login">
    <div class="login_box">
      <div class="avatar_box">
        <img src="@/assets/logo.png" alt="" />
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {};
  },

}
</script>
<style scoped lang="less">
 .login {
  background-color: #2b4b6b;
  height: 100vh;

  .login_box {
    width: 450px;
    height: 300px;
    background-color: aliceblue;
    border-radius: 10px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
      img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;

      }
    }
  }


}
</style>
