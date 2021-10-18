import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Table from '../views/table'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Index
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
