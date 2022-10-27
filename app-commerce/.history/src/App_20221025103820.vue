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
  }

/*   created() {
    this.abc()
  },
  methods: {
    async abc() {
      const data = await this.axios.get('https://lianghj.top:8888/api/private/v1/categories'
      )
      console.log(data)
    }
  } */
}

</script>
<style  scoped>

</style>
