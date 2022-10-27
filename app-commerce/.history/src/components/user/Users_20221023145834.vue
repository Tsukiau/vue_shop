<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="17">
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { usersApi } from '@/api/home'
export default {
  name: 'appUser',
  data() {
    return {
      //  用户数据列表参数
      usersInfo:{
        query: '',  // 参数
        pagenum: '',
        pagesize:''

      }
    }
  },
  created() {
    this.loadUsersApi()
  },
  methods: {
    async loadUsersApi() {
      const { data } = await usersApi({
        query:
      })
      console.log(data)
    }
  }

}
</script>
<style  scoped lang="less">

</style>
