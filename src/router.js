import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Scopecast from './views/Scopecast'
import U2achtung from './views/U2achtung'
import Arcance from './views/Arcance'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/u2achtung',
      name: 'u2achtung',
      component: U2achtung
    },
    {
      path: '/arcance-event',
      name: 'arcance-event',
      component: Arcance
    }
  ]
})
