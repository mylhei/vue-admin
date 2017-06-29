<!--Created by leiyao on 2017/5/14.-->
<template>
    <section>
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" @input="doFilter" :placeholder="defaultFilterText"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getPlatform">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </section>
</template>
<script>
  import {EventBus} from '../../common/js/EventBus';

  export default {
        data(){
          return {
            filters:{name:''}
          }
        },
        methods: {
          doFilter(){
            this.$emit('doSearch',this.filters.name)
            EventBus.$emit('doSearch',this.filters.name);
          },getPlatform(){

          }
          ,handleAdd(){

          }
        },
    created(){
//      EventBus.$on('doSearch',function(txt){
//        console.log(txt);
//      })
    },
        props:['defaultFilterText']
    }
</script>
<style scoped>
</style>
