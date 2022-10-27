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
          <el-input placeholder="请输入内容" v-model="usersInfo.query" clearable @clear="loadUsersApi">
            <el-button slot="append" icon="el-icon-search" @click="loadUsersApi"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
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
