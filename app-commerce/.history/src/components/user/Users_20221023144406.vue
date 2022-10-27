<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/users">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'appUser',
  data() {
    return {}
  }

}
</script>
<style  scoped lang="less">

</style>
