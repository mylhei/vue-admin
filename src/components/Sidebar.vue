<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
       <!-- <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="icon-speedometer"></i> Dashboard &lt;!&ndash;<span class="badge badge-info">NEW</span>&ndash;&gt;</router-link>
        </li>-->
        <!--{{$route.matched[0].path}}-->
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
                 theme="dark" router>
          <!--item.path.indexOf($route.matched[0].path)==0-->
          <template v-for="(item,index) in routes" v-if="!item.hidden">
            <!--{{item.path.indexOf($route.matched[0].path)==0}}-->
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title"><i :class="item.iconCls"></i>{{item.title}}</template>
              <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path" :class="{'is-active':sideBarNavActive(child)}" v-if="!child.hidden">{{child.title}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].title}}</el-menu-item>
          </template>
        </el-menu>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    },
    onSubmit() {
      console.log('submit!');
    },
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function (a, b) {
    },
    //退出登录
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
    sideBarNavActive:function(item){
      return this.$route.path == item.path;
    }
  },
  computed:{
    routes:function(){
        let map = this.$router.options.routes.filter(item=>{
            return item.path.indexOf(this.$route.matched[0].path) == 0;
          });
      return map;
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
