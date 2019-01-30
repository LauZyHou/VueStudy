<template>
  <div>
    <p>{{msg}}</p>
    <!--使用过滤器-->
    <p>{{msg | toUpper}}</p>
    <p>{{num | toPercentage}}</p>
  </div>
</template>

<script>
  export default {
    name: "filter",
    data() {
      return {
        msg: "hello vue",
        num: 0.3
      }
    },
    //定义过滤器
    filters: {
      toUpper(value) {
        //转大写字母
        return value.toUpperCase();
      },
      toPercentage(value) {
        //数字变成百分比字符串
        return value * 100 + '%';
      }
    }
  }
</script>

<style scoped>

</style>
