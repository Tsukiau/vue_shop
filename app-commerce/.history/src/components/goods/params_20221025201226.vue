<template>
  <div>
    <Breadcrumb name1="商品管理" name2="参数列表" />
    <el-card>
      <el-alert title="警告提示的文案" type="warning">
      </el-alert>
      <div class="cascaderBox">
        <span class="cascaderText">选择商品分类:</span>
        <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="动态参数" name="0">动态参数</el-tab-pane>
        <el-tab-pane label="静态属性" name="1">静态属性</el-tab-pane>
      </el-tabs>
    </el-card>

  </div>
</template>

<script>
import Breadcrumb from '@/common/Breadcrumb.vue'
export default {
  name: 'appParams',
  components: { Breadcrumb },
  data() {
    return {
      activeName: '0'
    }
  }
}
</script>

<style scoped>
.cascaderBox {
  margin: 20px 0;
}

.cascaderText {
  font-size: 14px;
  margin-right: 10px;
  margin-left: 3px;

}
</style>
