import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      nameApp: '#Todo-list',
      tareas: [],
      count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
