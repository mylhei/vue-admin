# 路由拦截及权限设计
## 路由拦截
主要目的:根据app存储的用户权限，进行用户跳转拦截。
实施方法:在路由定义处，增加beforeEach方法
代码示例:
```
router.beforeEach((to, from, next) => {
  if (to.name=='notitle'){
    next({ name: '403',params:{path:to.path} });
  }else {
    next();
  }
});
```

## 登录状态验证设计

监测方法：在每次用户加载路由时，判断是否有登录状态

登录状态保存在`sessionStorage`里

## 登录回跳设计

取到未登录信息时，跳转到登录页`/login`且带上当前页面地址

```javascript
if (to.path.indexOf('/login') == -1) {
    // 登录验证,未登录调到登录页
    if (!sessionStorage.getItem('user')) {
      next({name: 'login', query: {url: to.path}});
    }
  }
```

登录成功后则跳转回回调页

```javascript
sessionStorage.setItem('user', JSON.stringify(user));
if (this.$route.query.url){
  this.$router.push({path: this.$route.query.url});
}else {
  this.$router.push({path: '/'});
}
```



