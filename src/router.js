import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Scopecast from './views/Scopecast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/scopecast',
      name: 'scopecast',
      component: Scopecast
      // route level code-splitting
      // this generates a separate chunk (scopecast.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "scopecast" */ './views/Scopecast.vue'),
      // component: function () {
      //   import lalal from 'lalala'
      // }
    }
  ]
})
