import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Category from '../views/Category.vue'
import Categories from '../views/Categories.vue'
import Deals from '../views/Deals.vue'
import Market from '../views/Market.vue'
import TermsConditions from '../views/TermsConditions.vue'
import Privacy from '../views/Privacy.vue'
import test from '@/views/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/market',
    name: 'Market',
    component: Market
  },
  {
    path: '/deals',
    name: 'Deals',
    component: Deals
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/category/1',
    name: 'Category',
    component: Category
  },
  {
    path: '/products/1',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/about/term',
    name: 'TermsConditions',
    component: TermsConditions
  },
  {
    path: '/about/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
