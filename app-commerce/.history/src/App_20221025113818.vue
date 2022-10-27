<template>
  <div>
    <router-view></router-view>
    <div>
      <input ref="myInp" type="text" placeholder="这是一个输入框" >
      <button  @click="btn">点击我进行搜索</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    btn(){
       
    }
  } 
}

</script>
<style  scoped>

</style>
