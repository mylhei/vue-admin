/**
 * Created by leiyao on 2017/5/14.
 */

import {
  CHECK_USER_INFO,
  SET_USER_INFO,
  GET_USER_PERMISSION,
  SET_USER_PERMISSION
} from '../mutation-types.js';

import * as UserService from '../../api/userService.js';

export default {
  state: {
    user: null,
    permissions: null
  },
  mutations: {
    [SET_USER_INFO](state, user){
      sessionStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },
    [SET_USER_PERMISSION](state, permission){
      state.permissions = permission;
    }
  },
  actions: {
    async [CHECK_USER_INFO]({state,commit}, cb){
      if (state.user == null) {
        commit(SET_USER_INFO, await UserService.getUserInfo().then(res=>res.body));
        cb && cb(state.user, true);
      } else {
        //commit(SET_USER_INFO,state.user);
        cb && cb(state.user, false);
      }
    },
    [SET_USER_INFO]({state,commit}, user){
      commit(SET_USER_INFO, user);
    },
    [GET_USER_PERMISSION]({state,commit}){
      if (state.user != null && state.permissions == null) {
        UserService.getUserRights({uid: state.user.id}).then(res=> {
          commit(SET_USER_PERMISSION, res);
        })
      }
    }
  }

}
