<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
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
      const data = await this.get('https://lianghj.top:8888/api/private/v1/categories'
      )
      console.log(data)

    }
  }

}
// https://lianghj.top:8888/api/private/v1/categories
</script>
<style  scoped>

</style>
