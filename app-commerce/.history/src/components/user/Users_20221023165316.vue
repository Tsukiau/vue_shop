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
          <el-input placeholder="请输入内容" v-model="usersInfo.query" clearable @clear="loadUsersApi">
            <el-button slot="append" icon="el-icon-search" @click="loadUsersApi"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogVisible=true">添加用户</el-button>
        </el-col>
      </el-row>

      <!-- 用户列表 -->
      <el-table :data="userList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="username"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch @change="changeUserState(scope.row)" v-model="scope.row.mg_state" active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="170px">
          <template>
            <!-- 修改按钮 -->
            <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
            <!-- 分配按钮 -->
            <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" circle size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="usersInfo.pagenum" :page-sizes="['2', '5', '10', '20']" :page-size="usersInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>
    <!-- 添加用户  -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="45%">
      <!-- 内容主体 -->
      <el-form :model="addRuleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>

      <!-- 底部 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { usersApi, usersStateApi } from '@/api/home'
export default {
  name: 'appUser',
  data() {
    return {
      //  用户数据列表参数
      usersInfo: {
        query: '', // 查询参数
        pagenum: 1, // 当前页码
        pagesize: 2 // 每页显示条数
      },
      userList: [],
      total: 0,
      dialogVisible: false, // 控制对话的显示
      addRuleForm: ''
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
        console.log(this.userList)
        this.total = data.data.total
      } catch (err) {
        this.$message.error('获取用户数据失败')
        console.log('获取失败用户数据列表参数', err)
      }
    },

    // 监听 pagesize 改变的事件
    handleSizeChange(newSize) {
      this.usersInfo.pagesize = newSize
      this.loadUsersApi()
    },

    // 监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.usersInfo.pagenum = newPage
      this.loadUsersApi()
    },

    // 监听 switch 开关状态的改变
    async changeUserState(row) {
      try {
        const { data } = await usersStateApi(row)
        console.log(data)
      } catch (err) {
        this.$message.error('修改失败')
        row.mg_state = !row.mg_state
        console.log('修改失败')
      }
    }
  }

}
</script>
<style  scoped lang="less">

</style>
