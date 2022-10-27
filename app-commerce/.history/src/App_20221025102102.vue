<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/goods'
import { log } from 'console'
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
     const {data} = await categoriesApi()
     logdata
    }
  }

}
</script>
<style  scoped>

</style>
