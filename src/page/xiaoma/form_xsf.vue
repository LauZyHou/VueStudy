<template>
  <div>
    <input type="text" v-model.lazy="username" placeholder="用户名">
    <p>username={{username}}</p>
    <input type="number" v-model.number="age" placeholder="年龄">
    <p>age={{age}}</p>
    <textarea v-model.trim="address" placeholder="地址"></textarea>
    <p>address={{address}}</p>
  </div>
</template>

<script>
  export default {
    name: "form_xsf",
    data() {
      return {
        username: "",
        age: 0,
        address: ""
      }
    }
  }
</script>

<style scoped>

</style>
