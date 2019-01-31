import Vue from 'vue'
import Router from 'vue-router'

import Header from '../page/xiaoma/Header'
import SideBar from '../page/xiaoma/SideBar'
import Detail from '../page/xiaoma/Detail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      //这里改用components,指定多个要使用的组件
      components: {
        myHeader: Header,
        mySideBar: SideBar,
        myDetail: Detail
      }
    }
  ]
})
