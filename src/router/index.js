import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Catalog from '../views/catalog'
import Orders from '../views/orders'
import CardProduct from '../views/card-product'
import Addresses from '../views/addresses'
import CardAddress from '../views/card-address'
import Settings from "../views/settings"

import Library from '../views/library'
import test from '../views/test'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
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
    path: '/addresses',
    name: 'addresses',
    component: Addresses,
  },
  {
    path: '/card-address',
    name: 'card-address',
    component: CardAddress
  },
  {
    path: '/card-address/:id',
    name: 'card-address-id',
    component: CardAddress,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
  },
  {
    path: '/company',
    name: 'company',
  },
  {
    path: '/actions',
    name: 'actions',
  },
  {
    path: '/news',
    name: 'news',
  },
  {
    path: '/maps',
    name: 'maps',
  },
  {
    path: '/push',
    name: 'push',
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/card-product',
    name: 'card-product',
    component: CardProduct
  },
  {
    path: '/card-product/:id',
    name: 'card-product-id',
    component: CardProduct,
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
  routes,
  scrollBehavior () {
    return { x: 0, y: 0, behavior: 'smooth' }
  }
})


const noRemoveLastCategoryName = ['catalog', 'card-product', 'card-product-id']
router.beforeEach((to, from, next) => {
  if (!noRemoveLastCategoryName.includes(to.name)) localStorage.removeItem('lastSelCategoryId')
  next()
})

export default router
