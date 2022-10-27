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
        <el-table
    </el-card>
  </div>
</template>

<script>
import { rightsApi } from '@/api/power'
export default {
  name: 'appPower',
  data() {
    return {
      RightsList: []
    }
  },
  created() {
    this.getRightsApi()
  },
  methods: {
    async getRightsApi() {
      try {
        const { data } = await rightsApi()
        this.RightsList = data.data
      } catch (err) {
        this.$message.error('获取失败')
      }
    }
  }
}
</script>
<style  scoped>

</style>
