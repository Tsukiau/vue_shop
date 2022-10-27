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
  created() {
    this.adv()
  },
  methods: {
    async adv() {
      axios({
        method: 'get',
        url: 'https://lianghj.top:8888/api/private/v1/categories',
      })
        .then((response) =>{
         log
        })
    }
  }

}
// https://lianghj.top:8888/api/private/v1/categories
</script>
<style  scoped>

</style>
