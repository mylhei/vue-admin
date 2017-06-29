<!--Created by leiyao on 2017/3/24.-->
<template>
  <div>
    Vuex测试
    <el-button @click="c">测试全局方法</el-button>
    <el-button @click="doAjax">请求网络数据</el-button>
    <br>

    <tc :name="childName" :age="childAge" @childSubmit="onChildSubmit"></tc>
    <br>
    {{childMsg}}
  </div>
</template>
<script>
  import {requestTestApi} from '../../api/testApi.js'
//  import tc from '../../components/test.vue';
  export default {
    data(){
      return {
        a:'hello',
        childName:'',
        childAge:''
      }
    },
    computed:{
      childMsg(){
        return this.childName+","+this.childAge;
      }
    },
    methods: {
      c(){
        this.a = 'hello world';
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
//        this.Confirm('确认有权限么','提示'+this.canMenuAccess());
      },
      doAjax(){
        var _self = this;
        requestTestApi().then(function(reply){
          _self.$notify({
            title: '成功',
            message: reply,
            type: 'success'
          });
        })
      },
      onChildSubmit(name,age){
        this.childName=name;
        this.childAge = age;
      }
    },
    components:{tc:require('../../components/test.vue')}
  }
</script>
<style scoped>

</style>
