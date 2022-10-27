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
      <!-- 角色列表 -->
      <el-table border stripe :data="rolesList">
        <!-- 展开 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row :class="['bbottom',index === 0 ? 'btop' : '']" v-for="(item,index) in scope.row.children" :key="item.id">
              <!-- 一级 -->
              <el-col :span="5">
                <el-tag>{{item.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 二级和三级 -->
              <el-col :span="19">
                 <el-row v-for="(item2) in item.children" :key="item2.id">
                  <!-- 二级 -->
                  <el-col>
                    <el-tag type="s">{{item2.authName}}</el-tag>
                     <i class="el-icon-caret-right"></i>
                  </el-col>
                   <!-- 三级 -->
                  <el-col></el-col>
                 </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!--  -->
        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作" width="300px">
          <template>
            <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            <el-button type="warning" icon="el-icon-setting" size="mini">分配权限 </el-button>
          </template>
        </el-table-column>
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
      rolesList: []
    }
  },
  created() {
    this.getRolesApi()
  },
  methods: {
    // 获取所有权限角色数据
    async getRolesApi() {
      try {
        const { data } = await rolesApi()
        this.rolesList = data.data
        console.log(this.rolesList)
      } catch (err) {
        this.$message.error('获取角色数据失败')
        console.log('获取失败所有权限角色数据')
      }
    }
  }
}
</script>
<style  scoped lang="less">
.el-tag{
     margin: 7px;
}
.btop{
   border-top: 1px solid #eee;
}
.bbottom{
   border-bottom: 1px solid #eee;
}
</style>
