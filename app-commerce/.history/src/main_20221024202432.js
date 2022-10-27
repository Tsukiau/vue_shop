import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

import '@/style/index.css'

import ZKTable from 'vue-table-with-tree-grid'
Vue.use(ElementUI)
Vue.use(ZKTable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
