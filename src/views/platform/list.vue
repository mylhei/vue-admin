<!--Created by leiyao on 2017/5/15.-->
<template>
  <div>

    <el-input v-model="filters" @input="onSeach" placeholder="过滤平台"></el-input>
    <el-table
      :data="list"
      border
      style="width: 100%"

    >
      <!--:default-sort = "{prop: 'date', order: 'descending'}"-->
      <el-table-column
        prop="id"
        label="ID"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>

    </el-table>
    <!--<ul>-->
      <!--<li v-for="item in list">{{item.name}}</li>-->
    <!--</ul>-->
  </div>
</template>
<script type="text/ecmascript-6">

//  import * as PlatformService from '../../api/PlatformService'
  import {getPlatformList} from '../../api/PlatformService'
  export default {
    data(){
      return {
        parms:{},
        filters:'',
        list:[],
        listMutation:[]
      }
    },
    methods: {
      onSeach(){
//        this.parms.keyword = this.filters;
//        this.fetchData();
        this.list = this.listMutation.filter(item=>{
          return item.name.indexOf(this.filters) > -1;
        })
      },
      fetchData(){
        this.parms = {
          pagesize:1,
          keyword:'',
          sort:''
        };
        getPlatformList().then(res=>{
          if (res instanceof Error){
//            todo
          }else{
            let body = res.body;
            this.list = res.body;
            this.listMutation = res.body;
//            if (body.code == __conf.StatusCode.OK){
//
//            }else if ()
          }
//          res.body
          console.log(res);
        });
      }
    },
    // 组件属性
    props: [],
    // 引入组件
    components:{},
    created(){
      this.fetchData();
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
