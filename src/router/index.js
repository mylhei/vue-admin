import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from 'containers/Full'
import FullWithRightBar from 'containers/FullWithRightBar'

// Views
import Dashboard from 'views/Dashboard'
import Login from '../views/Login.vue'
import NotFound from '../views/404.vue'
import Forbidden from '../views/403.vue'
import Main from '../views/Main.vue'
import Table from '../views/nav1/Table.vue'
import Form from '../views/nav1/Form.vue'
import user from '../views/nav1/user.vue'
import Page4 from '../views/nav2/Page4.vue'
import Page5 from '../views/nav2/Page5.vue'
import Page6 from '../views/nav3/Page6.vue'
import Test from '../views/test.vue'
import Test1 from '../views/test1.vue'
import Test2 from '../views/test2.vue'
import MyOrder from '../views/orders/MyOrder.vue'
import Calendar from '../views/nav1/calendar.vue'
import Charts from '../views/charts/echarts.vue'

import store from '../vuex/store'

//import AdZone from '../views/resource/adzone.vue'
//import jQuery from '../views/resource/jquery.vue'
//const jQuery  = resolve => require(['../views/resource/jquery.vue'],resolve);
const AdZone = resolve => require.ensure([], () => resolve(require('../views/resource/adzone.vue')), 'ad-resource')
const jQuery = resolve => require.ensure([], () => resolve(require('../views/resource/jquery.vue')), 'ad-resource')
const Platform = resolve => require.ensure([], () => resolve(require('../views/resource/platform.vue')), 'ad-resource')
const PlatformDetail = resolve => require.ensure([], () => resolve(require('../views/resource/platformDetail.vue')), 'ad-resource')
const AdvertiserCategoryList = resolve => require.ensure([], () => resolve(require('../views/resource/advertiserCategory/list.vue')), 'ad-resource')
const AdvertiserCategoryDetail = resolve => require.ensure([], () => resolve(require('../views/resource/advertiserCategory/edit.vue')), 'ad-resource')

/*
 const Foo = resolve => require.ensure([], () => resolve(require('./Foo.vue')), 'group-foo')
 const Bar = resolve => require.ensure([], () => resolve(require('./Bar.vue')), 'group-foo')
 const Baz = resolve => require.ensure([], () => resolve(require('./Baz.vue')), 'group-foo')
 */


//import jQuery from '../views/resource/jquery.vue'

//import echarts from '../views/charts/echarts.vue'

Vue.use(Router)

var router = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      redirect: re=> {
        //console.log(re);
        return {name: 'adzone'}
      },
      hidden: true
    },
    {
      path: '/resource',
      redirect: {name: 'adzone'},
      name: 'resource',
      title: '资源管理',

      component: Full,
      children: [
        {
          path: '/resource/adzone',
          name: 'adzone',
          title: '广告位',
          components: {default: AdZone, right_bar: {template: '<h1>33</h1>'}},
          meta: {requiresAuth: true}
        },
        {
          path: '/resource/adTemplate',
          name: 'adTemplate',
          title: '广告模板(jQuery)',
          component: jQuery,
          meta: {requiresAuth: true}
        },
        {
          path: '/resource/platform',
          name: 'platform',
          redirect: {name: 'platformList'},
          title: '平台管理 from network',
          component: {template: '<router-view></router-view>'},
          meta: {requiresAuth: true},
          children: [
            {
              path: '/resource/platform/list',
              name: 'platformList',
              title: '平台管理',
              component: Platform,
              hidden: true,
              meta: {requiresAuth: true}
            },
            {
              path: '/resource/platform/:id',
              name: 'platformDetail',
              title: '平台管理详情',
              component: PlatformDetail,
              hidden: true,
              meta: {requiresAuth: true}
            }
          ]
        },
        {
          path: '/resource/advertiserCategory',
          name: 'advertiserCategory',
          redirect: {name: 'advertiserCategoryList'},
          title: '广告主分类管理',
          component: {template: '<router-view></router-view>'},
          meta: {requiresAuth: true},
          children: [
            {
              path: '/resource/advertiserCategory/list',
              name: 'advertiserCategoryList',
              title: '广告主分类管理',
              component: AdvertiserCategoryList,
              hidden: true,
              meta: {requiresAuth: true}
            },
            {
              path: '/resource/advertiserCategory/edit:id',
              name: 'advertiserCategoryDetail',
              title: '广告主分类详情',
              component: AdvertiserCategoryDetail,
              hidden: true,
              meta: {requiresAuth: true}
            },
            {
              path: '/resource/advertiserCategory/create',
              name: 'createAdvertiserCategory',
              title: '新建广告主分类',
              component: AdvertiserCategoryDetail,
              hidden: true,
              meta: {requiresAuth: true}
            }
          ]
        },
      ]
    },
    {
      path: '/orders',
      redirect: {name: 'myorder'},
      name: 'orders',
      title: '订单管理',
      component: Full,
      children: [
        {
          path: '/orders/myorder',
          name: 'myorder',
          title: '我的订单',
          component: MyOrder,
          meta: {requiresAuth: true}
        },
        {
          path: '/orders/order',
          name: 'order',
          title: '上线订单',
          component: Page4,
          meta: {requiresAuth: true,
          label:'上线订单'}
        },
        {
          path: '/orders/detail/:id',
          name: 'orderDetail',
          title: '订单详情',
          hidden: true,
          component: {
            template: '<p>{{$route.params.id}}<br/><el-button @click=\'$router.go(-1)\'>返回</el-button></p>'
          },
          meta: {requiresAuth: true}
        }
      ]
    },
    {
      path: '/others',
      redirect: {name: 'myorder1'},
      name: 'others',
      title: '其他管理',
      component: Full,
      children: [
        {
          path: '/others/myorder',
          name: 'myorder1',
          title: '我的订单1',
          component: MyOrder,
          meta: {requiresAuth: true}
        },
        {
          path: '/others/order',
          name: 'myorder2',
          title: '上线订单1',
          component: MyOrder,
          meta: {requiresAuth: true}
        },
        {
          path: '/others/table',
          name: 'table',
          title: '表格',
          component: Table
        },
        {
          path: '/others/form',
          name: 'forms',
          title: '表单',
          component: Form
        },
        {
          path: '/others/list',
          name: 'user',
          title: '用户',
          component: user
        },
        {
          path: '/others/calendar',
          name: 'calendar',
          title: '日历',
          component: Calendar
        },
        {
          path: '/others/charts',
          name: 'charts',
          title: '报表',
          component: Charts
        },
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      hidden: true
    }, {
      path: '/notitle',
      component: Login,
      name: 'notitle',
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '404',
      hidden: true
    }, {
      path: '/403/:path',
      component: Forbidden,
      name: '403',
      hidden: true
    },
    /*
     {
     path: '/',
     component: Full,
     name: '导航一',
     iconCls: 'el-icon-message',//图标样式class
     children: [
     {path: '/main', component: Main, name: '主页', hidden: true},
     {path: '/table', component: Table, name: 'Table'},
     {path: '/form', component: Form, name: 'Form'},
     {path: '/user', component: user, name: '列表'},
     ]
     },
     {
     path: '/',
     component: Full,
     name: '导航二',
     iconCls: 'fa fa-id-card-o',
     children: [
     {path: '/page4', component: Page4, name: '页面4'},
     {path: '/page5', component: Page5, name: '页面5'}
     ]
     },
     {
     path: '/',
     component: Full,
     name: '',
     iconCls: 'fa fa-address-card',
     leaf: true,//只有一个节点
     children: [
     {path: '/page6', component: Page6, name: '导航三'}
     ]
     },
     //{
     //  path: '/',
     //  component: Home,
     //  name: 'Charts',
     //  iconCls: 'fa fa-bar-chart',
     //  children: [
     //    { path: '/echarts', component: echarts, name: 'echarts' }
     //  ]
     //},
     {
     path: '/test/:id(\\d+)',
     component: Test,
     children: [
     {
     path: '',
     component: {
     default: Test2,
     a:Test2,
     b:Test2
     }
     },
     {
     // 当 /user/:id/profile 匹配成功，
     // UserProfile 会被渲染在 User 的 <router-view> 中
     path: 'profile',
     component: Test1
     },
     {
     // 当 /user/:id/posts 匹配成功
     // UserPosts 会被渲染在 User 的 <router-view> 中
     path: 'posts',
     component: Test2
     }
     ]
     },*/
    {
      path: '*',
      hidden: true,
      redirect: {path: '/404'}
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch(store.state.types.CHECK_USER_INFO, function (user, crossServer) {
    if (to.path.indexOf('/login') == -1) {
      // 登录验证,未登录调到登录页
      if (!sessionStorage.getItem('user')) {
        next({name: 'login', query: {url: to.path}});
      }


    }
    // 测试路由
    if (to.name == 'notitle') {
      next({name: '403', params: {path: to.path}});
    } else {
      next();
    }
  });
});

export default router;
