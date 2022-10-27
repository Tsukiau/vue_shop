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
    loginOut(){
        this.$store.commit('setUser', '')
        
    }
  }

}
</script>
<style  scoped>
</style>
