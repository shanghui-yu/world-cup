import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    selectObj: [],
    // 提交的球队投注信息
    indexs: [],
    MatchRes: ["", "", ""]
  },
  mutations: {
    selectObjFun (state, b) {
      state.selectObj.push(b)
    },
    setSelectIndex(state, b) {
      state.indexs.push(b)
    },
    setMatchRes(state, json) {
      state.MatchRes[json.index] = json.val
    },
    initState(state){
      state.MatchRes = ["", "", ""]
      state.selectObj=[]
      state.selectObj = []
    }
  },
  actions: {
    selectObjFun (context, b) {
      context.commit('selectObjFun', b)
    },
    setSelectIndex(context, b) {
      context.commit('setSelectIndex', b)
    },
    setMatchRes(context, json) {
      context.commit('setMatchRes', json)
    },
    initState(context) {
      context.commit('initState')
    }
  }
})

export default store
