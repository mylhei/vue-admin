export default {
  state: { county: 100 },
  mutations: {
    incrementy (state) {
      // state 模块的局部状态
      state.county--
    },
     decrementy (state) {
      // state 模块的局部状态
      state.county++
    }
  },
  actions:{
    incrementy (context) {
      context.commit('incrementy')
    },
    decrementy (context) {
      context.commit('decrementy')
    }
  },
  getters: {
    doubleCountt (state) {
      return state.county * 2
    }
  }
}