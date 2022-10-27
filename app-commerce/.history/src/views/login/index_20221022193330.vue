<template>
  <div class="login">
    <div class="login_box">
      <div class="avatar_box"></div>
        <img src="@/assets/logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
   name: 'login',
   data () {
   return {}; 
   },

}
</script>
<style scoped lang="less">
.login{
  background-color: #2b4b6b;
  height: 100vh;
  .login_box{
     width: 450px;
     height: 300px;
     background-color: aliceblue;
     border-radius: 10px;
     position: relative;
     top: 50%;
     left: 50%;
     transform:translate(-50%, -50%);
  }
}

</style>
