<template>
  <div>
    <h1>vuex 测试</h1>
    Clicked: {{ getCount }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    SubClicked: {{ doubleCount }} times
    <button @click="incrementx">+</button>
    <button @click="decrementx">-</button>
    <router-link :to="{name:'notitle'}">无权限路径</router-link>

    <div v-permit="'no_permit'">
      无权限
      <div>
        <div>
          <div>asdfjasldjfl</div>
        </div>
      </div>
      <div>
        asdflll
      </div>
    </div>
    <hr>
    <el-button id="ads" v-permit="'order.create'" type="danger">错误</el-button>
    <el-button id="ads1" v-permit="'asdfa'" type="danger">错误</el-button>
    <el-button id="ads2" v-permit="'asdfa'" type="danger">错误</el-button>
    <el-button id="ads3" v-permit="'asdfa'" type="danger">错误</el-button>
    <div v-permit="'adf'">1
    <div>2 <div>3 <div>4</div></div></div></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    computed: {
    // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'getCount', 'doubleCount'
        // ...
      ])
  }
  ,
  methods: {
  ...
    mapActions([
      'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
      'decrement',
      'decrementx',
      'incrementx'
    ])
    //...mapActions({
    //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
    //})
  }
  }

</script>
