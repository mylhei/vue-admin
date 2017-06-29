<template>
  <div>
    <el-form ref="form">
      <el-form-item label="名字">
        <el-input v-model="myName" placeholder="name from child"></el-input>
        {{name}}
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="myAge" placeholder="age from child"></el-input>
        {{age}}
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    methods:{
      doSubmit(){
        this.$emit('childSubmit',this.myName,this.myAge);
      }
    },
    data(){
      return {
        myName:this.name,
        myAge:this.age
      }
    },
    props:['name','age']
  }
</script>
