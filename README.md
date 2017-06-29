# 项目使用说明

## 项目搭建

### 环境要求

+ Node ~ 6.3.1
+ Vue ~ 2.0
+ Webpack
+ IDE(JetBrains出品) 或 [Sublimt Text 3配置](http://www.cnblogs.com/kongxianghai/p/6732429.html)

### 安装步骤

1. 安装依赖
   `npm install`
2. 运行开发版本
   `npm run dev`

### IDE设置
1.                安装vue插件
                  `设置->Plugins—>输入Vue->搜索->重启IDE`
                  ![](http://i0.letvimg.com/lc05_js/201703/21/17/50/1.png)

2.                修改ES6语法高亮
                  `设置->Language & Frameworks—>Javascripts->Javascript language version->EMCAScript 6.0`
                  ![](http://i0.letvimg.com/lc04_gugwl/201703/21/17/51/2.png)

3.                创建.vue模板

`设置->Editor->File and Code Template -> `

自定`.vue`文件模板如下：
```
<!--Created by ${USER} on ${DATE}.-->
<template>
  <section>
  </section>
</template>
<script type="text/ecmascript-6">
  import xx from 'xx';
  export default {
    data(){
      return {}
    },
    methods: {},
    // 组件属性
    props: [],
    // 引入组件
    components:{},
    created(){
    },
    mounted(){
    },
    // 监听变量
    watch: {},
    /**
     * 路由进入前
     * @param to
     * @param from
     * @param next
     */
    beforeRouteEnter(to, from, next){
        next();
    }
  }
</script>
<style scoped>
</style>

```





# jQuery与Vue混编

Webpack中已引入jQuery模块，需要在view的created生命周期后执行jQuery方法
引入第三方CDN的JS文件，也可以使用src/components/CustomComs/CustomScript.vue引入

# 代码结构
![代码结构](http://i3.letvimg.com/lc06_img/201705/03/18/20/code_structure.jpg)
# 其他资料
[代码规范](doc/CodeStandards.md)
[公共方法](doc/PublicMethods.md)
[APIUtil使用说明.md](doc/APIUtil使用说明.md)

## 学习资料

[Vue.js教程](https://cn.vuejs.org/v2/guide/)

[路由教程](http://router.vuejs.org/zh-cn/)

[Webpack教程](http://www.w2bc.com/Article/50764)

[ElementUI教程](http://element.eleme.io/#/zh-CN/component/installation)
