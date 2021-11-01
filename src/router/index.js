import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Catalog from '../views/catalog'
import Orders from '../views/orders'
import CardProduct from '../views/card_product'

import Library from '../views/library'
import test from '../views/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Index
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/card-product',
    name: 'card-product',
    component: CardProduct
  },
  {
    path: '/dev/library',
    name: 'library',
    component: Library
  },
  {
    path: '/dev/test',
    name: 'test',
    component: test
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
