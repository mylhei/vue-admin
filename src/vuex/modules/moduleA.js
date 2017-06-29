export default {
  state: { count: 100 },
  mutations: {
    incrementx (state) {
      // state 模块的局部状态
      state.count--
    },
     decrementx (state) {
      // state 模块的局部状态
      state.count++
    }
  },
  actions:{
    incrementx (context) {
      context.commit('incrementx')
    },
    decrementx (context) {
      context.commit('decrementx')
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 3
    }
  }
}