/**
 * Created by leiyao on 2017/5/13.
 */

let conf = {
  Env:{
    env:process.env.NODE_ENV,
    isTest:()=>{
      return process.env.NODE_ENV == 'development';
    }
  },
  Api:{
    baseUrl:'http://127.0.0.1:3000' // Api服务前缀
    //baseUrl:'http://127.0.0.1:3000/afp' // Api服务前缀
  },
  StatusCode:{
    "OK":0,
    "NotOk":1,
    "NOT_LOGIN":101,
    "NO_PERMISSION":102
  }
};
global.__conf = conf;
export const Api = conf.Api;

export default conf;
