<template>
  <pre>{{content}}</pre>
</template>

<script>
  export default {
    name: "test_axios",
    data() {
      return {
        content: ""
      }
    },
    mounted() {
      //用axios发送请求
      this.axios.post("http://api.komavideo.com/news/list").then(body => {
        this.content = body.data;//将得到的结果写进data中
      });
    }
  }
</script>

<style scoped>

</style>
