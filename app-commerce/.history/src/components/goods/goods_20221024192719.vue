<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="17">
          <el-input placeholder="请输入内容" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table  border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="商品名称" ></el-table-column>
        <el-table-column label="价格(元)" ></el-table-column>
        <el-table-column label="电话" ></el-table-column>
        <el-table-column label="角色" ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  mounted() { },
  destroyed() { }
}
</script>
<style  scoped>

</style>
