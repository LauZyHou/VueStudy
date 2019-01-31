<template>
  <div>
    <h5>这里是第{{page}}页</h5>
    <p>我是{{detail.name}},我的年龄是{{detail.age}}</p>
    <router-link v-bind:to="profileURL">去简介页</router-link>
    <router-link v-bind:to="statusURL">去状态页</router-link>
    <hr>
    <!--这里再嵌套一个router-view以展示这个组件的子组件-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Player",
    data() {
      return {
        page: 0,
        detail: {},
        //添加简介页和状态页的URL,这里是变量(因为是动态页面,这个组件是复用的)
        profileURL: "",
        statusURL: ""
      }
    },
    mounted() {
      this.page = this.$route.params.uid;
      this.detail = this.getDetail(this.page);
      //动态URL的确定
      this.profileURL = "/player/" + this.page + "/profile";
      this.statusURL = "/player/" + this.page + "/status";
    },
    beforeRouteUpdate(to, from, next) {
      this.page = to.params.uid;
      this.detail = this.getDetail(this.page);
      //动态URL的确定
      this.profileURL = "/player/" + this.page + "/profile";
      this.statusURL = "/player/" + this.page + "/status";
      next();
    },
    methods: {
      getDetail(i) {
        //这里应该向服务器请求对应的资源,这里直接简单的模拟成switch返回
        switch (i.toString()) {
          case '1':
            return {uid: 1, name: "唐僧", age: 25};
          case '2':
            return {uid: 2, name: "孙悟空", age: 19};
          default:
            return {uid: -1};
        }
      }
    }
  }
</script>

<style scoped>

</style>
