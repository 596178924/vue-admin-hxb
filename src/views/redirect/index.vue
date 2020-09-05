<script>
/*主要的作用是重定向路由的时候能够传递参数*/
export default {
  name: "Redirect",
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    console.log('path:',path,params,query)
    this.$router.replace({ path: '/' + path, query });
  },
  render: function (h) {
    return h();
  },
};
</script>
