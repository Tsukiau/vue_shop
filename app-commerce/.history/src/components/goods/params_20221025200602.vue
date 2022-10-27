<template>
  <div>
    <Breadcrumb name1="商品管理" name2="参数列表" />
    <el-card>
      <el-alert title="警告提示的文案" type="warning">
      </el-alert>
      <div>
        <span class="cascaderText">选择商品分类</span>
        <el-cascader
        v-model="value"
        :options="options"
         @change="handleChange"></el-cascader>
      </div>

    </el-card>

  </div>
</template>

<script>
import Breadcrumb from '@/common/Breadcrumb.vue'
export default {
  name: 'appParams',
  components: { Breadcrumb }
}
</script>

<style>

</style>
