<template>
  <div>
    <!--文本框-->
    <input type="text" v-model="name" placeholder="请输入name">
    <p>name={{name}}</p>
    <hr>
    <!--复选框-->
    <label>苹果
      <input type="checkbox" value="apple" v-model="fruit">
    </label>
    <label>香蕉
      <input type="checkbox" value="banana" v-model="fruit">
    </label>
    <label>橘子
      <input type="checkbox" value="orange" v-model="fruit">
    </label>
    <p>fruit={{fruit}}</p>
    <hr>
    <!--单选框-->
    <label>男
      <input type="radio" value="1" v-model="gender">
    </label>
    <label>女
      <input type="radio" value="0" v-model="gender">
    </label>
    <p>gender={{gender}}</p>
    <hr>
    <!--下拉框-->
    <label>城市
      <select v-model="city">
        <option value="HZ">杭州</option>
        <option value="NJ">南京</option>
        <option value="SH">上海</option>
      </select>
    </label>
    <p>city={{city}}</p>
  </div>
</template>

<script>
  export default {
    name: "bind_form",
    data() {
      return {
        name: "flora",
        fruit: [],//绑定给了复选框,所以要用数组
        gender: "",
        city: ""
      }
    }
  }
</script>

<style scoped>

</style>
