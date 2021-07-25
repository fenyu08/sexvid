import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuItem:0,
  },
  mutations: {
    setItem(state,v){
      state.menuItem=v
    }
  },
  actions: {
  },
  modules: {
  }
})
