<!--Created by liuzhenxing on 17/5/18.-->
<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="分类名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getAdvertiserCategory">查询</el-button>
          <el-button type="primary" v-on:click="createAdvertiserCategory">新建</el-button>

        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <template>
      <el-table :data="advertiserCategoryList" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column type="index" width="120">
        </el-table-column>
        <el-table-column prop="name" label="分类名称" width="220" sortable>
        </el-table-column>
        <el-table-column prop="priority" label="优先级" width="220" sortable>
        </el-table-column>
        <el-table-column prop="lastUpdated" label="最后更新时间" width="220" sortable>
        </el-table-column>

      </el-table>
    </template>
    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <!--<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>-->
      <el-pagination layout="total, sizes, prev, pager, next, jumper"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange" :page-size="max" :total="total" style="float:right;">
      </el-pagination>
    </el-col>
  </section>
</template>
<script type="text/ecmascript-6">
  import { getAdvertiserCategoryList } from "../../../api/api";
  import NProgress from 'nprogress'

  export default {
    data(){
      return {
        filters: {
          name: ''
        },
        loading: false,
        message: 'Hello Vue!',
        advertiserCategoryList: [],
        offset: 0,
        total: 0,
        page: 1,
        max: 10
      }
    },
    methods: {
      getAdvertiserCategory: function () {
        let para = {
          name: this.filters.name,
          max: this.max,
          offset: this.offset
        };
        this.loading = true;
        NProgress.start();
        getAdvertiserCategoryList(para).then((res) => {
          this.advertiserCategoryList = res.body.list;
          this.offset = res.body.offset;
          this.max = res.body.max
          this.page = parseInt(res.body.offset / 10) + 1
          this.total = res.body.total
          this.loading = false;
          NProgress.done();
        });
      },
      handleCurrentChange: function (val) {
        this.page = val
        this.offset = (this.page - 1) * 10
        this.getAdvertiserCategory();
      },
      handleSizeChange: function (val) {
        this.max = val;
        this.getAdvertiserCategory();
      },
      createAdvertiserCategory: function () {
        this.$router.push({path: '/resource/advertiserCategory/create'});
      }

    },
    // 组件属性
    props: [],
    // 引入组件
    components: {},
    created(){
    },
    mounted(){
      this.getAdvertiserCategory()
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
