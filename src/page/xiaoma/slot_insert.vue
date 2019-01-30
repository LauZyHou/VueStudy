<template>
  <!--在使用组件时为多个slot插值-->
  <many-slot>
    <!--用slot属性指定相应slot的名称-->
    <span slot="apple">我是苹果</span>
    <span slot="orange">我是橘子</span>
    <span slot="banana">我是香蕉</span>
  </many-slot>
</template>

<script>
  import many_slot from './many_slot'

  export default {
    name: "slot_insert",
    components: {
      'many-slot': many_slot
    }
  }
</script>

<style scoped>

</style>
