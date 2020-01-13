import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Stock from './views/stock.vue'
import Ttly from  './views/ttly.vue'
import Table2 from  './views/table2.vue'
import Tbl3 from  './views/tbl3.vue'
import Tbl4 from  './views/tbl4.vue'
import Crud from  './views/crud.vue'
import register from './views/register'
import login from './views/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/stock',
      name: 'stock',
      component: Stock
//      component: () => import('./views/stock.vue')
    },
    {
      path: '/ttly',
      name: 'ttly',
      component: Ttly
//      component: () => import('./views/stock.vue')
    },
    {
      path: '/desert',
      name: 'table2',
      component:Table2 
//      component: () => import('./views/stock.vue')
    },
    {
      path: '/tbl3',
      name: 'tbl3',
      component:Tbl3
//      component: () => import('./views/stock.vue')
    },
    {
      path: '/tbl4',
      name: 'tbl4',
      component:Tbl4
//      component: () => import('./views/stock.vue')
    },
    {
      path: '/crud',
      name: 'crud',
      component:Crud
//      component: () => import('./views/stock.vue')
    } ,
    {
      path: '/login',
      name: 'login',
      component: login 
//      component: () => import('./views/stock.vue')
    } ,
    {
      path: '/register',
      name: 'register',
      component: register
//      component: () => import('./views/stock.vue')
    }





  ]
})
