<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!--      提示区-->
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

      <el-form :model="addForm"
       :rules="addRules"
        ref="ruleForm"
         label-width="100px" label-position="">
        <el-tabs :tab-position="'left'" style="height: 200px;" v-model="stepsActive">
          <el-tab-pane label="基本信息" name="0">
            <el-form-item label="" prop="">
              <el-i
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="商品参数" name="1">商品参数</el-tab-pane>
          <el-tab-pane label="商品属性" name="2">商品属性</el-tab-pane>
          <el-tab-pane label="商品图片" name="3">商品图片</el-tab-pane>
          <el-tab-pane label="商品内容" name="4">商品内容</el-tab-pane>
        </el-tabs>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'appAdd',
  data() {
    return {
      stepsActive: '0',
      // 添加表单数据对象
      addForm: {
      },
      addRules: {}
    }
  },
  created() {

  },
  methods: {

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
