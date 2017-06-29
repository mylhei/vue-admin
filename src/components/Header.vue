<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler hidden-lg-up" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" ></a>
      <el-menu :default-active="$route.path" class="nav navbar-nav hidden-md-down">
        <li class="nav-item">
          <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarToggle">&#9776;</a>
        </li>
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <li class="nav-item px-1">
            <router-link :to="item.path" class="nav-link">{{item.title}}</router-link>
          </li>
        </template>

      </el-menu>
    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item hidden-md-down">
        <a class="nav-link" ><i class="icon-bell"></i><span class="badge badge-pill badge-danger">5</span></a>
      </li>
      <li class="nav-item hidden-md-down">
        <a class="nav-link" ><i class="icon-list"></i></a>
      </li>
      <li class="nav-item hidden-md-down">
        <a class="nav-link" ><i class="icon-location-pin"></i></a>
      </li>
      <dropdown size="nav" class="nav-item">
        <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
          <span class="hidden-md-down">{{userInfo.user.name}}</span>
        </span>
        <div slot="dropdown-menu"class="dropdown-menu dropdown-menu-right">

          <div class="dropdown-header text-center"><strong>Account</strong></div>

          <a class="dropdown-item" @click="noMethod"><i class="fa fa-bell-o"></i> Updates<span class="badge badge-info">42</span></a>
          <a class="dropdown-item" @click="noMethod"><i class="fa fa-envelope-o"></i> Messages<span class="badge badge-success">42</span></a>
          <a class="dropdown-item" @click="noMethod"><i class="fa fa-tasks"></i> Tasks<span class="badge badge-danger">42</span></a>
          <a class="dropdown-item" @click="noMethod"><i class="fa fa-comments"></i> Comments<span class="badge badge-warning">42</span></a>

          <div class="dropdown-header text-center"><strong>Settings</strong></div>

          <a class="dropdown-item" @click="noMethod"><i class="fa fa-user"></i> Profile</a>
          <a class="dropdown-item" @click="noMethod"><i class="fa fa-wrench"></i> Settings</a>
          <a class="dropdown-item" @click="noMethod"><i class="fa fa-usd"></i> Payments<span class="badge badge-default">42</span></a>
          <a class="dropdown-item" @click="noMethod"><i class="fa fa-file"></i> Projects<span class="badge badge-primary">42</span></a>
          <div class="divider"></div>
          <a class="dropdown-item" @click="noMethod"><i class="fa fa-shield"></i> Lock Account</a>
          <a class="dropdown-item" @click="logout"><i class="fa fa-lock"></i> Logout</a>
        </div>
      </dropdown>
      <li class="nav-item hidden-md-down">
        <!--<a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle">&#9776;</a>-->
      </li>
    </ul>
  </navbar>
</template>

<script type="text/ecmascript-6">

import navbar from './Navbar'
import { dropdown } from 'vue-strap'
import { mapState } from 'vuex'

export default {
  name: 'header',
  components: {
    navbar,
    dropdown
  },
  data(){
    return {
    }
  },
  computed:mapState({
    userInfo:state => {
      if (state.user == null || state.user.user == null){
        return {
          user:{
            name:'unknown'
          },
          permission:[]
        }
      }
      return state.user;
    }
  }),
  methods: {
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    },
    // 退出登录
    logout: function () {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('user');
      _this.$router.push('/login');
    }).catch(() => {

      });
    },
    noMethod:function(){
      this.$notify({
        title: '提示',
        message: '该方法还未实现',
        duration: 3000
      });
    }
  }
}
</script>

<style lang="css" scoped>

.dropdown-toggle::after {
  /*display: none !important;*/
}
  ul.el-menu{
    background: #fff;
  }
</style>
