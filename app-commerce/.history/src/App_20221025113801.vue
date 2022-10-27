<template>
  <div>
    <router-view></router-view>
    <div>
      <input ref="myInp" type="text" placeholder="这是一个输入框" v-if="isShow">
      <button v-else @click="btn">点击我进行搜索</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  }

  methods: {
    async abc() {
      const data = await this.axios.get('https://lianghj.top:8888/api/private/v1/categories'
      )
      console.log(data)
    }
  } *
}

</script>
<style  scoped>

</style>
