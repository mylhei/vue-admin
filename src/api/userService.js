/**
 * Created by leiyao on 2017/5/14.
 */

import {doGet,doPost,doDelete,doPut} from '../common/js/ApiUtils.js';

export const getUserRights = params => {
  return doGet(`/afp/user/rights`, {params: params});
};

export const getUserInfo = params => {
  return doGet(`/afp/user/getinfo`,params);
};
