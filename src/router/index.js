import Vue from 'vue'
import Router from 'vue-router'
import HamburgerMenuArrowSet from '@/components/HamburgerMenuArrowSet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HamburgerMenuArrowSet',
      component: HamburgerMenuArrowSet
    }
  ]
})