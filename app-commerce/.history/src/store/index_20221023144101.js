import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('tokenUser')),
    activePath: JSON.parse(localStorage.getItem('activePath'))
  },
  getters: {
  },
  mutations: {
    // token
    setUser (state, user) {
      state.user = user
      localStorage.setItem('tokenUser', JSON.stringify(user))
    },
    // 保存链接激活状态
    setActive (state, activePath) {
      state.activePath = activePath
      localStorage.setItem('activePath', JSON.stringify(activePath))
    }
  },
  actions: {
  },
  modules: {
  }
})
