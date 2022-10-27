<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/goods'
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
      const { data } = await categoriesApi()
      console.log(data)
    }
  }

}
// https://lianghj.top:8888/api/private/v1/categories
</script>
<style  scoped>

</style>
