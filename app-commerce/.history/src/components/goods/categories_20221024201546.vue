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
    this.loadCategoriesApi()
  },
  methods: {
    async loadCategoriesApi() {
      try {
        const { data } = await categoriesApi()
        console.log(data.data.goods)
        this.goodsList = data.data.goods
      } catch (err) {
        this.$message.error('获取商品分类数据列表失败')
        console.log('获取商品分类数据列表失败')
      }
    }
  }
}
</script>
<style  scoped>

</style>
