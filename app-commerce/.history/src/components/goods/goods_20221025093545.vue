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
          <el-button type="primary" @click="isAdd">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table border stripe :data="goodsList">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="商品名称" prop="goods_name"></el-table-column>
        <el-table-column label="价格(元)" prop="goods_price"></el-table-column>
        <el-table-column label="商品重量" prop="goods_weight"></el-table-column>
        <el-table-column label="创建时间">
          <template slot-scope="scope">
            {{ scope.row.add_time | time }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <el-button type="danger" @click="delId(scope.row.goods_id)"
             icon="el-icon-delete" size="mini"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { goodsApi } from '@/api/goods'
import moment from 'moment'
export default {
  name: 'app',
  data() {
    return {
      // 商品分类的数据列表
      goodsList: [],
      // 请求参数
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 5
      }
    }
  },
  created() {
    this.loadCategoriesApi()
  },
  methods: {
    async loadCategoriesApi() {
      try {
        const { data } = await goodsApi(this.queryInfo)
        console.log(data.data.goods)
        this.goodsList = data.data.goods
      } catch (err) {
        this.$message.error('获取商品分类数据列表失败')
        console.log('获取商品分类数据列表失败')
      }
    },

    // 添加页面
    isAdd() {
      this.$router.push('goods/add')
    },

    // 删除
    async delId(id) {
     const res = await this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)

      if(res !== 'confirm')
    }
  },
  filters: {
    time(val) {
      return moment(val).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
<style  scoped>

</style>
