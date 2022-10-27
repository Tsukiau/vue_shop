<template>
  <el-container>
    <!-- 头部 -->
  <el-header>Header
    <el-button type="info" round @click="loginOut">退出</el-button>
  </el-header>
  <!-- 主体 -->
  <el-container>
    <!-- 侧边 -->
    <el-aside width="200px">Aside</el-aside>
    
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
<style  scoped>

</style>
