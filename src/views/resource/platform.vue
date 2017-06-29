<!--Created by leiyao on 2017/5/14.-->
<template>
  <section>
    <el-col :span="24" class="toolbar">
      <TableFilter :defaultFilterText="'搜索平台'" @doSearch="doFilter"></TableFilter>
    </el-col>
    <el-col :span="24">
      <el-table :data="data" v-loading="listLoading">
        <el-table-column prop="id" label="ID" sortable></el-table-column>
        <el-table-column label="平台">
          <template scope="scope">
            <div v-show="!scope.row.editMode">{{scope.row.name}}</div>
            <!--@input="saveChange(scope.row)-->
            <input class="el-input__inner" v-show="scope.row.editMode" v-model="scope.row.name"
                   @keyup.enter="saveChange(scope)"/>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="primary" @click="delPlatform(scope)">删除</el-button>
            <el-button type="warning" @click="editPlatform(scope)">编辑</el-button>
            <!--<router-link :to="{name:'platformDetail',params:{id:scope.row.id}}">详情</router-link>-->
            <el-button type="error" @click="$router.push({name:'platformDetail',params:{id:scope.row.id}})">详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </section>
</template>
<script type="text/ecmascript-6">
//  import '../../common/js/ApplicationContext.js'
  import NProgress from 'nprogress'
  import { requestTestApi } from '../../api/testApi';
  import TableFilter from '../../components/CustomComs/TableFilter.vue'
  export default {
    data(){
      return {
        filters: {
          name: ''
        },
        data: [],
        dataMutation: [],
        total: 0,
        pageSize: 5,
        listLoading: false,
        editMode: false
      }
    },
    methods: {
      fetchData(){
        this.listLoading = true;
        requestTestApi().then(res=> {
          this.data = res.body.map(item=> {
            item.editMode = false;
            return item;
          });
          this.dataMutation = res.body;
          this.listLoading = false;
        }).catch(err=> {
          console.log(err);
        })
      },
      delPlatform(item){
//        debugger;
      },
      editPlatform(item){
        item.row.editMode = true;
      }, handleAdd(){
      }, getPlatform(){
      },
      saveChange(item){
        item.row.editMode = false;
        this.$notify({
          title: '提示',
          message: item.row
        })
      }, doFilter(txt){
        this.data = this.dataMutation.filter(item => {
          return item.name.indexOf(txt) > -1
        });
      }
    },
    created(){

    },
    mounted: function () {
      this.fetchData();
    },
    watch: {},
    components: {TableFilter}
  }
</script>
<style scoped>
</style>
