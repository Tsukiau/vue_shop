<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <el-row>
        <el-col>
          <el-button type="primary">添加分类</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->

      <!-- 分页 -->
    </el-card>
  </div>
</template>

<script>
import { categoriesApi } from '@/api/goods'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  created() {
    this.lodaCategoriesApi()
  }
}
</script>
<style  scoped>

</style>
