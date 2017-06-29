# API Util使用说明
项目使用axios进行HTTP请求

## 开发环境数据接口使用办法

因开发过程中需要开启本地的多个端口，所以数据会存在跨域问题。如果自测不需要真实测试数据，可以使用mock，则需在main.js中开启`mock.bootstrap()`方法

*跨域方案一*：请在Server端添加response header。接口路径可以在@/conf.js中配置

举例：

```javascript
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// res.header("X-Powered-By",' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
res.header("Access-Control-Allow-Credentials","true");
```

*跨域方案二*：在Webpack配置文件中设置请求转发，配置文件路径`@/config/index.js`，配置举例如下：

```javascript
proxyTable: {
  '/api':{
    target:'http://le.com:8080',
      pathRewrite:{
        '^/api':'/xxx/api/'
      }
  }
}
```



文档见:<https://github.com/mzabriskie/axios>
本框架在axios接口上进行了简单的封装，使用时请引用
`@/src/common/js/ApiUtils.js`

## 该文件公开接口如下:
###  doGet
@decription
> 执行http Get方法，并自动捕捉HTTP状态错误。

@params

 ```
    1.  url 请求接口的path部分
    2.  params 请求接口的query部分
 ```
@return or callback
.then = `res =>{}` res 结构见下节中Response
.catch = `err=>{}` Error为JS通用Error
@example

 ```
调用:
 doGet('/user/listpage',{
	page: this.page,
	name: this.filters.name,
    pageSize:this.pageSize
}).then(res=>{
    if (res instanceof Error){
        // 说明Server方返回了错误的http 状态码，此时该方法已经自动给予提示，如果想继续处理，请参考下节数据结构的`HttpError`
    }else{
        // 服务端有了数据返回，数据结构见下节`Response `
        if (res.data && res.data.code == xxx.ok){
            // 说明处理成功，接下来继续处理
    }
})
 ```
### doPost doPut doDelete doHead 同doGet完全一致
注意POST参数放置位置为http的  `Request Payload`
### CheckResponse
@description 监测API返回结果,出现异常结果直接抛出异常提示
@params
```
1.  res axios请求返回的结果
```
@return or callback
该处理为promise.then方法，处理通过后，业务方依然可以继续`.then` ；
 若处理不通过，则会throw Error,业务方可以`.catch`捕获
## 数据结构
### HttpError
@description
> 当服务端返回错误状态码(status_code)时(>=400)，抛出的异常.
>  服务器端返回的body中的code错误，不在此范围内

@structure
*                     config 请求的配置信息，一般不用关注
*                     response 该情况，有可能服务端已经接到了请求，如下例，可以给出response的data；也可能直接请求失败，则无response。
                                  - status http状态吗
          - data 服务端返回的body内容
          - config 同外侧config一致
*         message 继承Error message
*         stack 继承Error stack 错误堆栈
                          @eg.
```
{
	"config": {
		"adapter": null,
		"transformRequest": {},
		"transformResponse": {},
		"timeout": 0,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"maxContentLength": -1,
		"headers": {
			"Accept": "application/json, text/plain, */*"
		},
		"method": "get",
		"params": {
			"page": 1,
			"name": "",
			"pageSize": 10
		},
		"url": "/user/listpage"
	},
	"response": {
		"status": 400,
		"data": {
			"code": 300,
			"total": 186,
			"users": [{
				"id": "d5f8d47b-C06A-85dC-D31B-97bEF7F8EEf6",
				"name": "卢磊",
				"addr": "湖北省 黄冈市 红安县",
				"age": 55,
				"birth": "2004-02-27",
				"sex": 0
			}]
		},
		"config": {
			"adapter": null,
			"transformRequest": {},
			"transformResponse": {},
			"timeout": 0,
			"xsrfCookieName": "XSRF-TOKEN",
			"xsrfHeaderName": "X-XSRF-TOKEN",
			"maxContentLength": -1,
			"headers": {
				"Accept": "application/json, text/plain, */*"
			},
			"method": "get",
			"params": {
				"page": 1,
				"name": "",
				"pageSize": 10
			},
			"url": "/user/listpage"
		}
	},
	"message":"xxx",
	"stack":"xxx",
	...
}
```
## Response
***@description***
数据请求成功时，返回的数据结构

***@structure***

*                     config 请求的配置信息，一般不用关注
*                     data Server端响应的body 。 body均为json格式。最好统一定义
                                  - 参见 [前后端API接口定义](./前后端API接口定义.md)
          -  使用该接口发起的http请求，返回数据仅为`data`字段
*         headers 响应头，一般无值
*         status 返回的http状态码
                  ***@eg***

```javascript
{
	"status": 200,
	"data": {
		"code": 300,
		"total": 186,
		"users": [{
			"id": "A3cBA3Eb-1b7b-1848-8f8a-182e6dA0cD2E",
			"name": "程秀英",
			"addr": "湖北省 宜昌市 宜都市",
			"age": 39,
			"birth": "1983-08-25",
			"sex": 0
		},
		...]
	},
	"config": {
		"adapter": null,
		"transformRequest": {},
		"transformResponse": {},
		"timeout": 0,
		"xsrfCookieName": "XSRF-TOKEN",
		"xsrfHeaderName": "X-XSRF-TOKEN",
		"maxContentLength": -1,
		"headers": {
			"Accept": "application/json, text/plain, */*"
		},
		"method": "get",
		"params": {
			"page": 1,
			"name": "",
			"pageSize": 10
		},
		"url": "/user/listpage"
	}
```
