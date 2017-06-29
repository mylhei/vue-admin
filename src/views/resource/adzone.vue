<template>
  <div class="my_test">
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="24">
            {{'2aa' | upper}}
            {{'2AA' | lower | currency}}
            {{'2AA' | currency}}
            {{'2.3' | currency(9) }}
            {{'2' | currency}}
            {{new Date()|formatDate('yyyy/MM/dd hh:mm:ss')}}

            <multiselect v-model="value" label="title" track-by="title" :options="options" :custom-label="customLabel"
                         :show-labels="false"
                         :multiple="true"
                         :close-on-select="false"
                         :hide-selected="false"
                         placeholder="点击多选"
                         :limit="3"
                         :select-label="'Enter选中'"
                         :searchable="false"
            >


            </multiselect>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <multiselect v-model="value2" :options="options2" track-by="title" :custom-label="customLabel" label="title"
                         :searchable="false" :close-on-select="true" :show-labels="true"
                         placeholder="Pick a value"
                         deselect-label="✘"
                         select-label="回车选中"
                         selected-label="✔️"
            ></multiselect>
          </el-col>
        </el-row>

      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
    <el-row>
    </el-row>
    <el-row>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  import Multiselect from '../../components/customComs/MultiSelect/Multiselect.vue';
//  import Pagination from '../../components/customComs/Pagination/Pagination.vue';
  export default {
    data(){
      return {
        value: {title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png'},
        value2: '',
        options: [
          {title: 'Space Pirate', desc: 'More space battles!', img: 'static/posters/fleet.png'},
          {title: 'Merchant', desc: 'PROFIT!', img: 'static/posters/trading_post.png'},
          {title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png'},
          {title: 'Miner', desc: 'We need to go deeper!', img: 'static/posters/resource_lab.png'},
          {title: 'Vue.js', desc: 'JavaScript'},
          {title: 'Adonis', desc: 'JavaScript'},
          {title: 'Rails', desc: 'Ruby'},
          {title: 'Sinatra', desc: 'Ruby'},
          {title: 'Laravel', desc: 'PHP'},
          {title: 'Phoenix', desc: 'Elixir'}

        ],
        options2: [
          {title: 'Space Pirate', desc: 'More space battles!', img: 'static/posters/fleet.png'},
          {title: 'Merchant', desc: 'PROFIT!', img: 'static/posters/trading_post.png'},
          {title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png'},
          {title: 'Miner', desc: 'We need to go deeper!', img: 'static/posters/resource_lab.png'},
          ...
      [
        {title: 'Vue.js', desc: 'JavaScript'},
        {title: 'Adonis', desc: 'JavaScript'},
        {title: 'Rails', desc: 'Ruby'},
        {title: 'Sinatra', desc: 'Ruby'},
        {title: 'Laravel', desc: 'PHP'},
        {title: 'Phoenix', desc: 'Elixir'}
      ]
    ]
    }
  },
  components:{
    Multiselect
  },
    created(){
      let a = async function (){
        console.log('start');
        await (function(time){
          return new Promise((res,rej) =>{
            setTimeout(function(){
              res();
            },time)
          })
        })(3000);
        console.log('end');
      };
      a();

    }

  ,
  methods: {
    customLabel({title, desc})
    {
      return `${title}`
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    }
  }
  }

</script>

<style>
  .my_test {
    padding: 20px;
  }

  .my_test .el-row {
    margin-bottom: 20px;;
  }
</style>
