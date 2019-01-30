<template>
  <!--在组件模板中定义多个slot-->
  <div>
    <h2>{{tit}}</h2>
    <div>
      苹果：
      <slot name="apple"></slot>
    </div>
    <div>
      香蕉：
      <slot name="banana"></slot>
    </div>
    <div>
      橘子：
      <slot name="orange"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "many_slot",
    props: ['tit']
  }
</script>

<style scoped>

</style>
