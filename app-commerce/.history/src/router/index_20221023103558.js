import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
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
    component: () => import('../views/home/indxe.vue')
  }
]



const router = new VueRouter({
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const { user } = store.state
  console.log(user);
  if (!user) return next('/login')
  next()

})

export default router
