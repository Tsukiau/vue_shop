import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

import '@/style/index.css'

import TreeTable from 'vue-table-with-tree-grid'

import axios form 'axios'

// vue 2
Vue.prototype.$axios = axios
// vue 3
Vue.config.globalProperties.$axios = axios

// 拿
this.$axios

Vue.use(ElementUI)

Vue.component('tree-table', TreeTable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
