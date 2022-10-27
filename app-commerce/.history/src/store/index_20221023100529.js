import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:
  },
  getters: {
  },
  mutations: {
    setUser(state,user){
      state.user = user
      localStorage.setItem('tokenUser',JSON.stringify(user))
    }
  },
  actions: {
  },
  modules: {
  }
})
