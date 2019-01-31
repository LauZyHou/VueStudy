<template>
  <div id="app">
    <table width="100%">
      <tr>
        <td colspan="2" style="background-color: darkseagreen">
          <!--使用多组件拼图时,指明其name即可关联到相应的组件上-->
          <router-view name="myHeader"></router-view>
        </td>
      </tr>
      <tr>
        <td width="20%" style="background-color: thistle">
          <router-view name="mySideBar"></router-view>
        </td>
        <td width="80%" style="background-color: lightgray">
          <router-view name="myDetail"></router-view>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
</style>
