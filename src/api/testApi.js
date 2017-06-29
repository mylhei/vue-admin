/**
 * Created by leiyao on 2017/5/12.
 */

import {doGet,doPost,doDelete,doPut} from '../common/js/ApiUtils.js';


export const requestTestApi = ()=>{
  return doGet('/api/get_ads');
}

export const getOrderDetail = (params)=>{
  return doGet(`/api/get_ad/${params.id}`,params);
}

export const getFuzzyVideo = (params)=>{
  return doGet(`/api/get_albums/${params.name}`,params);
}


