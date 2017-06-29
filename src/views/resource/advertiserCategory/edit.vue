<!--Created by liuzhenxing on 17/5/18.-->
<template>
  <el-form :model="domain" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-input type="hidden" v-model="domain.id"></el-input>
    <el-form-item label="分类名称" prop="name">
      <el-input v-model="domain.name"></el-input>
    </el-form-item>
    <el-form-item label="优先级" prop="region">
      <el-select v-model="domain.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('domain')">立即创建</el-button>
      <el-button @click="resetForm('domain')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {}
    },
    methods: {},
    // 组件属性
    props: [],
    // 引入组件
    components: {},
    created(){
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
