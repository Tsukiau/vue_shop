<template>
  <div>
    <Breadcrumb name1="商品管理" name2="参数列表" />
    <el-card>
      <el-alert title="警告提示的文案" type="warning">
      </el-alert>
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
