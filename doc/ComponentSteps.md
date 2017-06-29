# View创建过程
## 组件系统是Vue.js其中一个重要的概念，它提供了一种抽象，让我们可以使用独立可复用的小组件来构建大型应用，任意类型的应用界面都可以抽象为一个组件树：
![](http://cn.vuejs.org/images/components.png?_=5634034)
## 本框架使用[单文件](https://cn.vuejs.org/v2/guide/single-file-components.html)方式创建组件，即需创建.vue文件，无需在JS创建。
## 创建view
1. 在views中创建view组件
    组件的基本结构

    ```

    <template>
    </template>
    <script>
     import xxx from 'xxx';
     ...
     export default {
        data() {
          return {
            logining: false,
            ...
        },
        methods: {
            ...
        }
        ...
    </script>
    <style scoped>
    </style>

    ```

2. 在routes/index.js中创建路由规则
    路由的基本结构:

    ```

        {
          path: '/resource',  //路径
          redirect: {name: 'adzone'}, //默认动作
          name: 'resource',
          title: '资源管理',          //标题，用于显示在菜单上

          component: Full,        //容器组件
          children: [                   //子模块
            {
              path: '/resource/adzone',
              name: 'adzone',
              title: '广告位',
              components: {
                  default:AdZone,
                  right_bar:{template:'<h1>33</h1>'
              }},
              meta: {requiresAuth: true}
            },
            {
              path: '/resource/adTemplate',
              name: 'adTemplate',
              title: '广告模板(jQuery)',
              component: jQuery,
              meta: {requiresAuth: true}
            }
          ]
        }

    ​```

## 创建公用组件
请将所有公用组件创建者在`@/src/components/CustomComs`中
基本结构和view一致，但要注意需要传参时，需要指定props属性，数据变化时，需要 向外`$emit`[事件](https://cn.vuejs.org/v2/guide/components.html#自定义事件)
结构如下:
![](https://cn.vuejs.org/images/props-events.png)

## 注意事项

1.  HTML 特性是不区分大小写的。所以，组件命名和组件属性命名时，请使用camelCase，使用时，请使用kebab-case. 例如:定义,myComp ；使用,my-comp

2. 调用组件时，请使用v-bind传值，以保证数据类型。尽量不要直接使用属性，例如`<comp some-prop="1"></comp> `请使用:`<comp v-bind:some-prop="1"></comp>`或`<comp :some-prop="1"></comp>`

3.  组件内部使用prop时，需使用局部变量，尽量不要更改传参的值

4. 组件内的data，必须是function，但注意不要return同一个对象。


