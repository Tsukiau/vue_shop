<template>
  <div>
    <el-button type="info" round @click="loginOut">退出</el-button>
  </div>
  <el-container>
  <el-header>Header</el-header>
  <el-container>
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
