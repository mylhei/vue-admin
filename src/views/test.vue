<template>
  <div style="color: #fff4c5">
    <h2>User {{ $route.params.id }}</h2>
    <button @click="jump">Jump</button>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      jump:function(){
        this.$router.push({path:'/login',query:{a:1,b:2}});
//        $route.push('login');
      }
    }
  }
</script>
