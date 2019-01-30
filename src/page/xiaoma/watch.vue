<template>
  <div>
    <p>价格{{price}},含税价{{priceInTax}},折合人民币{{priceChinaRMB}}</p>
    <button @click="btnClick(10000)">加价10000</button>
  </div>
</template>

<script>
  export default {
    name: "test_watch",
    data() {
      return {
        price: 0,//这里设置为0,在组件加载时通过赋值让它发生一次变化
        priceInTax: 0,//和计算属性相比,观察属性要在data里定义一下
        // priceChinaRMB: 0
      }
    },
    //定义观察属性
    watch: {
      //这里函数名即是要监视的data,当它发生变化时调用这个函数
      price(newVal, oldVal) {
        console.log(newVal, oldVal);//输出变化后和变化前的值
        //当它的值发生变化时,重新计算衍生的两个属性的值
        this.priceInTax = Math.round(this.price * 1.08);
        // this.priceChinaRMB = Math.round(this.priceInTax / 16.75);
      }
    },
    methods: {
      btnClick(plus) {
        //按钮按下时加价
        this.price += plus;
      }
    },
    //定义计算属性
    computed: {
      priceChinaRMB() {
        return Math.round(this.priceInTax / 16.75);
      }
    },
    //组件加载时为其赋值以触发watch和computed
    created() {
      this.price = 29980;
    }
  };
</script>

<style scoped>

</style>
