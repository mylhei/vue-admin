<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar/>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <div class="content-wrapper el-col el-col-18">
            <router-view></router-view>
          </div>
          <div class="content-wrapper el-col el-col-6">
            <router-view name="right_bar"></router-view>
          </div>
        </div>
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '../components/Header'
import Sidebar from '../components/Sidebar'
import AppFooter from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppFooter,
    Breadcrumb
  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>

<style>
  .app-body{
    background: #f1f2f7;
  }
  .content-wrapper {
    /*background-color: #fff;*/
    box-sizing: border-box;
  }
</style>
