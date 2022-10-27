<template>
  <div class="login">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <!-- 表单 -->
      <el-form ref="loginForm" label-width="0px" class="login_from" :model="form" :rules="formRules">

        <el-form-item prop="username">
          <el-input v-model="form.name" prefix-icon="el-icon-s-custom" type="text"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" prefix-icon="el-icon-s-cooperation"></el-input>
        </el-form-item>

        <el-form-item class="btn">
          <el-button type="primary" round>登录</el-button>
          <el-button type="primary" round>退出</el-button>
          <el-button type="primary" round @click="reset">重置</el-button>

        </el-form-item>

      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        name: 'zs',
        password: '123'
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户名',  },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符',  }],
        password: [
          { required: true, message: '请输入密码', },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', }],
        }
    };
  },
  methods: {
    //重置表单
    reset() {
      this.$refs.loginForm.resetFields()
    }
  }

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
      box-shadow: 0 0 100px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }

  .login_from {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 35px;
    box-sizing: border-box;
  }

  .btn {
    display: flex;
    justify-content: center;

  }

}
</style>
