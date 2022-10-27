<template>
  <div>
    <!-- 面包屑 -->
    <Breadcrumb name1="商品管理" name2="添加商品" />
    <!--    卡片视图-->
    <el-card>
      <!--  提示区-->
      <el-alert title="添加商品信息" type="info" align-center center :closable="false" show-icon>
      </el-alert>
      <el-steps :space="200" :active="stepsActive - 0" align-center finish-status="success">
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>

      <el-form :model="addForm" :rules="addRules" ref="ruleForm" label-width="100px" label-position="top">
        <el-tabs :tab-position="'left'" style="height: 600px;" v-model="stepsActive">
          <!-- 基本信息 -->
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="商品名称" prop="goods_name">
              <el-input v-model="addForm.goods_name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price" type="number">
              <el-input v-model="addForm.goods_price"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="goods_weight">
              <el-input v-model="addForm.goods_weight"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="goods_number" type="number">
              <el-input v-model="addForm.goods_number"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="goods_cat">
              <el-cascader
              v-model="addForm.goods_cat"
               :options="addForm.goods_cat"
                :props="cateProps" @change="handleChange">
              </el-cascader>
            </el-form-item>
          </el-tab-pane>
          <!-- 商品参数 -->
          <el-tab-pane label="商品参数" name="1"></el-tab-pane>
          <el-tab-pane label="商品属性" name="2">商品属性</el-tab-pane>
          <el-tab-pane label="商品图片" name="3">商品图片</el-tab-pane>
          <el-tab-pane label="商品内容" name="4">商品内容</el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { goodsAddFormRulesMixin } from '@/common/mixin'
import Breadcrumb from '../../common/Breadcrumb.vue'
import { categoriesApi } from '@/api/goods'
export default {
  name: 'appAdd',
  mixins: [goodsAddFormRulesMixin],
  components: { Breadcrumb },
  data() {
    return {
      stepsActive: '0',
      // 添加表单数据对象
      addForm: {
        goods_name: '',
        goods_price: '',
        goods_weight: '',
        goods_number: '',
        // 分类列表
        goods_cat: []
      },
      addRules: {},
      cateList: [],
      cateProps: {
        label: 'cat_name',
        value: 'cat_id',
        children: 'children'
      }
    }
  },
  created() {
    this.loadCategoriesApi()
  },
  methods: {
    async loadCategoriesApi() {
      const { data } = await categoriesApi()
      console.log(data.data)
      this.cateList = data.data
    },

    handleChange() {
      console.log(this.addForm.goods_cat)
    }
  }
}
</script>
<style  scoped lang="less">
.el-steps {
  margin: 20px 0;
}

.el-step__title {
  font-size: 13px;
}
</style>
