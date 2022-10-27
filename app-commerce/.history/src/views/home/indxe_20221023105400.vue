<template>
  <el-container class="home_container">
    <!-- 头部 -->
  <el-header>
    <div>
      <img src="../../assets/t.jpg" alt="">
      <span>后台管理系统</span>
    </div>
    <el-button type="info" round @click="loginOut">退出</el-button>
  </el-header>
  <!-- 主体 -->
  <el-container>
    <!-- 侧边 -->
    <el-aside width="200px">Aside</el-aside>
    <!-- 右边主体 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>

export default {
  name: 'appHome',
  data () {
    return {}
  },
  methods: {
    // 退出
    loginOut () {
      this.$store.commit('setUser', '')
      this.$router.push('/login')
    }
  }

}

</script>

<style  scoped lang="less">
.home_container{
   height: 100vh;
}
.el-header{
   background-color: #363d40;
   display: flex;
   justify-content: space-between;
   img {
     width: 60px;
     h60px
   }
}
.el-aside{
  background-color: #313743;
}
.el-main{
   background-color: #e9edf1;
}
</style>
