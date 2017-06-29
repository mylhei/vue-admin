# 公共方法
## 全局变量
vue中可以在任意位置定义、使用全局变量。
* 定义:使用关键字global，例如定义a变量=1，则`global.a=1`
* 使用，直接使用变量即可.
* 也可以定义到`Vue.prototype`上，在任意View中直接`this.xxx`即可
> 不要轻易定义全局变量
> 框架中已经公开AppContext变量，为Vue实例，可以在任意位置使用。
> 也可`imprort {getContext} from '@/src/common/js/ApplicatonContext.js'` ,然后`getContext()`获取



## Router组件

在任意路由Views中，都可以使用`this.$route`及`this.$router`。$route用于取路由参数，$router用于View间跳转

## Element组件

因框架引入了Element组件，所以在任意View下都可以直接调用Element方法

例如：

```javascript
this.$notify.info({
title: '消息',
message: '这是一条消息的提示消息'
});
```

## 页面加载进度

引入`import NProgress from 'nprogress'`

开始时执行`NProgress.start();`

结束时执行`NProgress.done();`

## 状态管理

### 父子组件使用

见[父子组件通信](./componentSteps.md)

### 事件总线

引入`@/src/common/js/EventBus.js`

使用方监听`EventBus.$on('event_name',(payload)=>{});`

调用方调用`EventBus.$emit('event_name',payload);`

### Filters

过滤器，用于绑定数据，或者使用数据时进行数据格式化。所有filter方法可以直接在管道符后使用，如下描述。也可以直接当做公共方法使用，使用时请 `import whichMethod from '@/src/filters'`

### 字符串过滤

- upper 转大写 `{{'aaa'|upper}}` => `{{'AAA'}}`
- lower 转小写`{{'AAA'|lower}}` => `{{'aaa'}}`
- capitalize 首字母大写 `{{'aaa'|capitalize}}` => `{{'Aaa'}}`

### 数字过滤

- currency 转换为货币格式
  @params fixed 保留小数点个数
  @eg `{{'2.3' | currency(9) }}` => `2.300000000`

### 日期过滤

- formatDate 格式化日期格式
  @params pattern 日期格式 
  @eg `{{new Date()|formatDate('yyyy/MM/dd hh:mm:ss')}}`

### 权限验证指令
只需要在需要权限验证位置增加`v-permit=权限名称`即可，例如：

`<el-button id="ads" v-permit="'order.create'" type="danger">错误</el-button>`