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
          <el-button type="primary" @click="addRoles">添加角色</el-button>
        </el-col>
      </el-row>
      <!-- 角色列表 -->
      <el-table border stripe :data="rolesList">
        <!-- 展开 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row :class="['bbottom', index === 0 ? 'btop' : '']" v-for="(item, index) in scope.row.children"
              :key="item.id" class="flex_center">
              <!-- 一级 -->
              <el-col :span="5">
                <el-tag @close="delTagId(scope.row, item.id)" closable>{{ item.authName }}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 二级和三级 -->
              <el-col :span="19">
                <el-row :class="[index2 === 0 ? '' : 'btop']" v-for="(item2, index2) in item.children" :key="item2.id"
                  class="flex_center">
                  <!-- 二级 -->
                  <el-col :span="6">
                    <el-tag @close="delTagId(scope.row, item2.id)" closable type="success">{{ item2.authName }}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <!-- 三级 -->
                  <el-col :span="18">
                    <el-tag @close="delTagId(scope.row, item3.id)" closable type="warning"
                      v-for="(item3) in item2.children" :key="item3.id">{{ item3.authName }}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 展开结束 -->
        <el-table-column type="index"></el-table-column>
        <el-table-column label="角色名称" prop="roleName"></el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
        <el-table-column label="操作" width="300px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
            <el-button type="warning" icon="el-icon-setting" size="mini" @click="showSetDialog(scope.row)">分配权限 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 分配权限对话框 -->
    <el-dialog title="分配权限"
    :visible.sync="showSetDialogVisible"
    width="50%" @close="SetRightDialogVisibleClosed">
      <el-tree :data="rightList"
      :props="treeAuthName" show-checkbox
      node-key="id"
      :default-expand-all="true"
       :default-checked-keys="defKeys"
       ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showSetDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="showSetDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

        <!-- 添加角色 -->
      <el-dialog
        title="提示"
        :visible.sync="addDialogVisible"
        width="30%"
        >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import { rolesApi, delRightsApi, rightListApi } from '@/api/power'
export default {
  name: 'appRoles',
  data() {
    return {
      // 所有权限角色数据
      rolesList: [],
      // 所有权限
      rightList: [],
      // 控制权限显示
      showSetDialogVisible: false,
      //  添加角色显示
      addDialogVisible: false,
      // 树形控件
      treeAuthName: {
        label: 'authName',
        children: 'children'
      },
      // 默认选中的id值
      defKeys: []
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
        // console.log(this.rolesList)
      } catch (err) {
        this.$message.error('获取角色数据失败')
        console.log('获取失败所有权限角色数据')
      }
    },

    // 删除权限
    async delTagId(role, id) {
      const res = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (res !== 'confirm') {
        return this.$message.info('已经取消删除')
      }
      // 删除权限请求
      try {
        const { data } = await delRightsApi(role, id)
        // 把最新的数据直接给role.children 显示出来
        role.children = data.data
      } catch (err) {
        this.$message.error('删除权限数据失败')
        console.log('删除权限失败')
      }
    },

    // 显示分配权限
    async showSetDialog(roles) {
      // 获取所有数据
      try {
        const { data } = await rightListApi('tree')
        this.rightList = data.data
      } catch (err) {
        this.$message.error('获取权限数据失败')
        console.log('获取权限数据失败')
      }
      // 递归获取三级节点
      this.getLeafKeys(roles, this.defKeys)
      this.showSetDialogVisible = true
    },

    // 递归的形式,获取角色下所有的三级权限的id,并保存到 defKeys数组中
    getLeafKeys(node, arr) {
      // 如果当前node没有children属性则是三级节点
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach(item => this.getLeafKeys(item, arr))
    },

    // 监听分配权限对话框的关闭事件
    SetRightDialogVisibleClosed() {
      // 清空 defkeys 数组  避免累积
      this.defKeys = []
    },

    // 添加角色
    addRoles() {
      
    }

  }
}
</script>
<style  scoped lang="less">
.el-tag {
  margin: 7px;
}

.btop {
  border-top: 1px solid #eee;
}

.bbottom {
  border-bottom: 1px solid #eee;
}

.flex_center {
  display: flex;
  align-items: center;
}
</style>
