<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    btn() {
      console.log(this.$refs.myInp)
    }
  }
}

</script>
<style  scoped>

</style>
