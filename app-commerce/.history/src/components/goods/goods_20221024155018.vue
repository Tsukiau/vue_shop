<template>
  <div></div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    show() {
      console.log('执行了show方法')
    }
  },
  beforeCreate() {
    console.log('Call Vue beforeCreate')
    console.log(this)
    this.show()
  },
  des

}
</script>
<style  scoped>

</style>
