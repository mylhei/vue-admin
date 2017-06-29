/**
 * Created by leiyao on 2017/5/4.
 */

import axios from 'axios'
import CustomError from './CustomError.js'
import { getContext } from './ApplicationContext.js'
import qs from 'qs';

export const doGet = (url, params) => {
  return axios.get(`${url}`, {params: params}).then(res => {
    CheckResponse(res)
    return res.data
  }, err => {
    CheckResponse(err)
    return err
  })

}

export const doPost = (url, params) => {
  //{id:1,name:'aa'} => id=1&name=aa
  return axios.post(`${url}`, qs.stringify(params), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    CheckResponse(res)
    return res.data
  }).catch(err => {
    CheckResponse(err)
  })
}

export const doHead = (url, params) => {
  return axios.head(`${url}`, {params: params}).then(res => {
    CheckResponse(res);
    return res
  }).catch(err => {
    CheckResponse(err)
  })
}

/**
 * 监测API返回结果,出现异常结果直接抛出异常提示
 * 成功不提示
 * @param res
 * @constructor
 */
export const CheckResponse = function (res) {
  if (res instanceof CustomError) {
    return res
  }
  if (res instanceof Error) {
    AppContext.$notify({
      title: '提示',
      message: `服务端接口${res.config.url}请求失败!状态码${res.response.status} Message:${res.message}`,
      type: 'error',
      //duration: 0
    })
  }
  /*else if (res.status != 200) {
   //TODO: switch
   AppContext.$notify({
   title: '提示',
   message: '接口请求失败',
   type: 'warning'
   });
   throw new CustomError(CustomError.codes.Error,null);
   }*/
  return res
}
