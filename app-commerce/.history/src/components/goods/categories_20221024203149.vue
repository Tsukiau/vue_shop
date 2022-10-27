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
      <tree-table :data="categoriesList" :columns="columns" selection-type="false">
      </tree-table>
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
      // 商品分类的数据列表
      categoriesList: [],
      // 请求参数
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5
      },
      columns: [{
        label
      }]
    }
  },
  created() {
    this.loadCategoriesApi()
  },
  methods: {
    async loadCategoriesApi() {
      try {
        const { data } = await categoriesApi(this.queryInfo)
        console.log(data.data.result)
        this.categoriesList = data.data.result
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
