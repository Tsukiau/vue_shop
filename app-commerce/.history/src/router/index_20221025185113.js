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
    component: () => import('../views/home/indxe.vue'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: () => import('../views/welcome')
      },
      {
        path: '/users',
        component: () => import('../components/user/Users')
      },
      {
        path: '/rights',
        component: () => import('../components/power/Rights')
      },
      {
        path: '/roles',
        component: () => import('../components/power/Roles')
      },
      {
        path: '/categories',
        component: () => import('../components/goods/categories')
      },
      {
        path: '/goods',
        component: () => import('../components/goods/goods')
      },
      {
        path: '/goods/add',
        component: () => import('../components/goods/add')
      },
      {
        path: '/params',
        component: () => import('../components/goods/add')
      }


    ]
  }
]

const router = new VueRouter({
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const { user } = store.state
  if (!user) return next('/login')
  next()
})

export default router
