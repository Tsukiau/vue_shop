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
      <el-table :data="RightsList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.level === '0'">一级</el-tag>
            <el-tag type="warning" v-else-if="scope.row.level === '1'">二级</el-tag>
            <el-tag type="" v-else>三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import Breadcrumb from '../../common/Breadcrumb.vue'
import { rightsApi } from '@/api/power'
export default {
  name: 'appPower',
  components: {Breadcrumb},
  data() {
    return {
      RightsList: []
    }
  },
  created() {
    this.getRightsApi()
  },
  methods: {
    async getRightsApi() {
      try {
        const { data } = await rightsApi()
        this.RightsList = data.data
      } catch (err) {
        this.$message.error('获取失败')
      }
    }
  }
}
</script>
<style  scoped>

</style>
