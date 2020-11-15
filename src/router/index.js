import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/all',
    name: 'All',
    component: () => import('@/views/All.vue')
  },
  {
    path: '/active',
    name: 'Active',
    component: () => import('@/views/Active.vue')
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import('@/views/Completed.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
