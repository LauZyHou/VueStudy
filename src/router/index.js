import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Filter from '../page/xiaoma/filter'
import Watch from '../page/xiaoma/watch'
import computed_set from '../page/xiaoma/computed_set'
import bind_class from '../page/xiaoma/bind_class'
import bind_form from '../page/xiaoma/bind_form'
import form_xsf from '../page/xiaoma/form_xsf'
import slot_insert from '../page/xiaoma/slot_insert'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      // component: Filter
      // component: computed_set
      // component: form_xsf
      component: slot_insert
    }
  ]
})
