// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import {initContext} from './common/js/ApplicationContext.js'
import App from './App'
import router from './router'
import Directives from './directives'
import Filters from './filters'
import store from './vuex/store'
import Mock from './mock'
import Conf from './conf.js';
import 'element-ui/lib/theme-default/index.css'
import 'nprogress/nprogress.css'
import {getUserInfo} from './api/userService';

axios.defaults.baseURL = Conf.Api.baseUrl;
axios.defaults.withCredentials = true;

// Test
Mock.bootstrap();
// UI
Vue.use(ElementUI);
// Store
Vue.use(Vuex);

// 错误收集,生产环境开放
/*Raven
 .config('https://7b301788aa2d4868beeb1a28c8517627@sentry.io/166302')
 .addPlugin(RavenVue, Vue)
 .install();*/

// 进度
NProgress.configure({showSpinner: false});

Vue.prototype.__conf = Conf;

Vue.prototype.canMenuAccess = function (path) {
  // 用户权限...
  return true;
};

Vue.prototype.Confirm = function (title, message, type) {
  return this.$confirm(message, title, {
    type: 'warning'
  });
};

Vue.config.errorHandler = (err, vm)=> {
  console.log(err, vm);
};


let vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

//Vue.set(vm.session,'user',sessionStorage.getItem('user'));

initContext(vm);

