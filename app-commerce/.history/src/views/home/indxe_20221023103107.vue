<template>
  <div>
    <el-button type="info" round @click="loginOut">退出</el-button>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {}
  },
  methods : {
    //退出
    loginOut(){
        this.$store.commit('setUser', '')
        this.$router.push('/login')
    }
  }

}
</script>
<style  scoped>
</style>
