import Vue from 'vue'
import VueRouter from 'vue-router'
import 
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

//路由守卫
 router.beforeEach((to,from,next)=> {
       
 })

const router = new VueRouter({
  routes
})

export default router
