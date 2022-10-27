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
      <el-row>
        <el-col>
          <el-button type="primary">添加角色</el-button>
        </el-col>
      </el-row>
      <el-table border stripe>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { rolesApi } from '@/api/power'
export default {
  name: 'appRoles',
  data() {
    return {
      // 所有权限角色数据
      Roles
    }
  },
  created() {
    this.getRolesApi()
  },
  methods: {
    async getRolesApi() {
      try {
        const { data } = await rolesApi()
        console.log(data)
      } catch (err) {

      }
    }
  }
}
</script>
<style  scoped>

</style>
