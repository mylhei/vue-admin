<script>
  export default {
    components: {
      'custom-script':{
        render(createElement){
          return createElement('script',{attrs:{type:'text/javascript',src:this.src}})
        },
        props: {
          type: String,
          required: true
        }
      }

    }
  }
</script>
