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
          <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
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
        <el-table-column label="操作" width="150px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary" @click="showEdit(scope.row.id)" icon="el-icon-edit" circle size="mini">
            </el-button>
            <!-- 删除按钮 -->
            <el-button type="danger" icon="el-icon-delete"
            circle size="mini" @click="delUserId(scope.row.id)"></el-button>
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

    <!-- 添加用户对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="45%" @close="addDialog">
      <el-form :model="addForm" :rules="addRules" ref="addForm" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改用户对话框 -->
    <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%" @close="editDialog">
      <el-form :model="editFrom" :rules="addRules" ref="editFromRef" label-width="70px">
        <el-form-item label="用户名">
          <el-input v-model="editFrom.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editFrom.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="editFrom.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { usersApi, usersStateApi, addUsersApi, examineUsersApi, editUsersStateApi } from '@/api/home'
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
      // 控制对话的显示
      dialogVisible: false,
      // 控制修改对话的显示
      editDialogVisible: false,
      // 查询到的用户信息
      editFrom: {},
      // 添加用户
      addForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      // 添加用户验证
      addRules: {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符' }
        ],
        email: [
          { required: true, message: '请输入邮箱' },
          { pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/, message: '请输入合法的邮箱' }
        ],
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/, message: '手机号格式错误' }
        ]

      }
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
    },
    // 添加用户的对话框关闭重置表单
    addDialog() {
      this.$refs.addForm.resetFields()
    },

    // 添加用户
    addUser() {
      this.$refs.addForm.validate(async valid => {
        if (!valid) return
        try {
          const { data } = await addUsersApi(this.addForm)
          console.log(data)
          this.dialogVisible = false
          this.loadUsersApi()
        } catch (err) {
          this.$message.error('添加失败')
          console.log('添加失败')
        }
      })
    },

    // 编辑对话框
    async showEdit(id) {
      console.log(id)
      this.editDialogVisible = true
      try {
        const { data } = await examineUsersApi(id)
        this.editFrom = data.data
        console.log(this.editFrom)
      } catch (err) {
        this.$message.error('查询数据失败')
        console.log('查询数据失败')
      }
    },

    //  修改用户的对话框关闭重置表单
    editDialog() {
      this.$refs.editFromRef.resetFields()
    },

    // 修改用户信息提交验证
    editUser() {
      this.$refs.editFromRef.validate(async valid => {
        if (!valid) return
        try {
          await editUsersStateApi({
            id: this.editFrom.id,
            email: this.editFrom.email,
            mobile: this.editFrom.mobile
          })
        } catch (err) {
          this.$message.error('修改数据失败')
          console.log('修改数据失败')
        }
        // 关闭对话框
        this.editDialogVisible = false
        // 刷新数据
        this.loadUsersApi()
        // 提是成功
        this.$message.success('修改成功')
      })
    },

    // 删除用户
    async delUserId(id) {
        const res =  await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    }
  }

}

</script>
<style  scoped lang="less">

</style>
