import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    selectObj: []
  },
  mutations: {
    selectObjFun (state, b) {
      state.selectObj.push(b)
    },
  },
  actions: {
    selectObjFun (context, b) {
      context.commit('selectObjFun', b)
    },
  }
})

export default store
