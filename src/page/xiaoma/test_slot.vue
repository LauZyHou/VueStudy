<template>
  <div>
    你好，<strong>{{pname}}</strong>！
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "test_slot",
    props: ['pname'],
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
