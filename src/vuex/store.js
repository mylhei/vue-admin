import Vuex from 'vuex'
import Vue from 'vue'
import {state} from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import  moduleA from './modules/moduleA'
import  moduleB from './modules/moduleB'
import userModule from './modules/UserInfoModule.js'

Vue.use(Vuex);

Vue.config.debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA,
    b: moduleB,
    user: userModule
  }
})
