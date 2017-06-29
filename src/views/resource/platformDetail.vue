<!--Created by leiyao on 2017/5/14.-->
<template>
  <section>
    <el-form :rules="rules" :model="order" ref="form" label-width="100px" class="form">
      <el-form-item label="ID">{{order.id}}</el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="order.name"></el-input>
      </el-form-item>
      <el-form-item label="广告内容">
        <el-input
          type="textarea"
          autosize
          v-model="order.form"></el-input>
      </el-form-item>
      <el-form-item label="剧集" prop="video">
        <el-autocomplete
          class="inline-input"
          v-model="order.video"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doSubmit()">保存</el-button>
      </el-form-item>
    </el-form>
    <p>{{order}}</p>
  </section>
</template>
<script>
  import { getOrderDetail, getFuzzyVideo } from '../../api/testApi';
  export default {
    data(){
      return {
        order: {},
        rules: {
          name: [{
            required: true,
            message: '名称不可为空',
            trigger: 'blur'
          }, {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}],
          video: [{required: true, message: '请选择剧集', trigger: 'change'}]
        }
      }
    },
    methods: {
      fetchData(){
        // /xxx/xxx/32
        // /xxx/xxx?id=1&ame=2   $route.query.id
        getOrderDetail({id: this.$route.params.id}).then(res => {
          this.order = res.body[0];
        });
      },
      querySearch(queryString, cb) {
        if (queryString.length <= 2) {
          cb([]);
          return;
        }
        getFuzzyVideo({name: queryString}).then(res => {
          let result = res.body.map(elem => {
            return {
              value: elem.name,
              id: elem.id
            }
          });
          cb(result);
        })
      }, handleSelect(item) {
        console.log(item);
      }, doSubmit(){
        this.$refs['form'].validate(valid => {
          if (valid) {
            alert('do submit');
          } else {
            return false;
          }
        })
      }
    },
    watch: {
      '$route': function () {
        console.log(arguments);
        this.fetchData();
      }
    },
    created(){
      this.fetchData();
    }
  }
</script>
<style scoped>
  .form {
    width: 600px;
  }
</style>
