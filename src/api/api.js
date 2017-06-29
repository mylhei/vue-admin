import { doGet, doPost, doDelete, doPut } from '../common/js/ApiUtils.js'

/**
 * 使用公共处理方法,请使用以下2个函数的写法
 * @param params
 */
export const requestLogin = params => {
  return doPost('/afp/user/login',params);
};

export const getUserListPage = (params) => {
  return doGet('/user/listpage', params)
}

export const getUserList = params => {
  return doGet(`/user/list`, params)
}

export const removeUser = params => {
  return doGet(`/user/remove`, {params: params})
}

export const batchRemoveUser = params => {
  return doGet(`/user/batchremove`, {params: params})
}

export const editUser = params => {
  return doGet(`/user/edit`, {params: params})
}

export const addUser = params => {
  return doGet(`/user/add`, {params: params})
}

export const getUserRights = params => {
  return doGet(`/user/rights`, {params: params})
}
//广告主分类
export const getAdvertiserCategoryList = params => {
  return doGet('/advertiserCategory/list', params)
}
// export const addAdvertiserCategory = params => {
//   return doGet('/advertiserCategory/list', params)
// };
// export const editAdvertiserCategory = params => {
//   return doGet('/advertiserCategory/list', params)
// };

