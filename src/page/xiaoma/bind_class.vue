<template>
  <div>
    <div v-bind:class="myClass">文本</div>
    <button @click="btnClick">改变class</button>
  </div>
</template>

<script>
  export default {
    name: "bind_class",
    data() {
      return {
        myClass: {
          red: true,
          big: true
        }
      }
    },
    methods: {
      btnClick() {
        this.myClass.big = !this.myClass.big;
      }
    }
  }
</script>

<style scoped>
  .red {
    color: red;
  }

  .big {
    font-weight: bolder;
    font-size: 64px;
  }
</style>
