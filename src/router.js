import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Scopecast from './views/Scopecast'
import Blog from './views/Blog'
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
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/arcance-event',
      name: 'arcance-event',
      component: Arcance
    }
  ]
})
