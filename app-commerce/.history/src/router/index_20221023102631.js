import Vue from 'vue'
import VueRouter from 'vue-router'
import store from'@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
     path: '/home',
     component: ()=> import('../views/home/indxe.vue')
  }
]



const router = new VueRouter({
  routes
})


export default router
