<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>

    </el-card>
  </div>
</template>

<script>
import { list } from '@/api/power'
export default {
  name: 'appPower',
  data() {
    return {
      Rights: []
    }
  },
  created() {
    this.getRightsApi()
  },
  methods: {
    async getRightsApi() {
      try {
        const { data } = await getRightsApi()
        console.log(data)
        this.Rights = data
      } catch (err) {
        this.$message.error('获取失败')
      }
    }
  }
}
</script>
<style  scoped>

</style>
