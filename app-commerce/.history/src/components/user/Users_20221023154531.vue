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

      <!-- 用户列表 -->
      <el-table :data="userList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="username"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <el-table-column label="状态" prop="mg_state">
          <template slot-scope="scope">
            <el-switch
             v-model="scope.row."
             active-color="#13ce66"
             inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
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
      usersInfo: {
        query: '', // 查询参数
        pagenum: '1', // 当前页码
        pagesize: '3' // 每页显示条数
      },
      userList: [],
      total: 0
    }
  },
  created() {
    this.loadUsersApi()
  },
  methods: {
    async loadUsersApi() {
      try {
        const { data } = await usersApi(this.usersInfo)
        this.userList = data.data.users
      } catch (err) {
        this.$message.error('获取用户数据失败')
        console.log('获取失败用户数据列表参数', err)
      }
    }
  }

}
</script>
<style  scoped lang="less">

</style>
