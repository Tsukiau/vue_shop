import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
      {
         path: '/',
         redirect: '/login'
      },
      {
        path: '/login',
        redirect: '/login'
      }
]

const router = new VueRouter({
  routes
})

export default router
