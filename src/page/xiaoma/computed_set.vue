<template>
  <div>
    <p>价格{{price}},含税价{{priceInTax}},折合人民币{{priceChinaRMB}}</p>
    <button @click="btnClick(10000)">将含税价格改为10000</button>
  </div>
</template>

<script>
  export default {
    name: "computed_set",
    data() {
      return {
        price: 29980
      }
    },
    computed: {
      //这种方式可以设置计算属性的get和set
      priceInTax: {
        get() {//获取计算属性的值
          return this.price * 1.08;
        },
        set(value) {//设置计算属性的值,然后设置后的值将被作为参数传入该方法中
          //通过新设置的值来反向计算元数据的值将其写入
          this.price = value / 1.08;
        }
      },
      //这种设置计算属性的方式相当于只有get的功能
      priceChinaRMB() {
        return Math.round(this.priceInTax / 16.75);
      }
    },
    methods: {
      btnClick(newPrice) {
        this.priceInTax = newPrice;
      }
    }
  }
</script>

<style scoped>

</style>
