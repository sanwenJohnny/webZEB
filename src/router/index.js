import Vue from 'vue'
import Router from 'vue-router'
import home from './routes/home'
import search from './routes/search'
import cart from './routes/cart'
import order from './routes/order'
import product from './routes/product'
import login from './routes/login'
import pay from './routes/pay'
import tel from './routes/tel'
import session from '@/utils/session-lite'
// import auth from '@/utils/auth'
import tools from '@/utils/tools'
import personal from './routes/personal'
import shop from './routes/shop'
import classify from './routes/classify'
import insurance from './routes/insurance'
import fx from './routes/fx'
import certificate from './routes/certificate'
import coupon from './routes/coupon'
import address from './routes/address'
import refund from './routes/refund'
import recruit from './routes/recruit'

const WxPayAuth = r => require.ensure([], () => r(require('@/views/wxpayauth')), 'wxauth')
const NotFound = resolve => require(['@/views/404'], resolve)
const WxAuth = resolve => require(['@/views/wxauth'], resolve)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ '@/views/home')
    },
    {
      path: '/wxpayauth',
      component: WxPayAuth,
      name: 'WxPayAuth'
    },
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue'),
      children: [
        ...home,
        ...cart,
        ...search,
        ...order,
        ...product,
        ...login,
        ...pay,
        ...tel,
        ...personal,
        ...shop,
        ...classify,
        ...insurance,
        ...fx,
        ...certificate,
        ...coupon,
        ...address,
        ...refund,
        ...recruit
      ]
    },
    {
      path: '*',
      component: NotFound,
      name: 'notfound'
    },
    {
      path: '/wxauth',
      component: WxAuth,
      name: 'wxAuth'
    }
  ]
})

let _loadAppType = false
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title && document) {
    document.title = to.meta.title
  }
  if (to.query.accountid) { // 记录accountid 拉粉
    session.set('accountId', to.query.accountid)
  }
  if (to.query.isApp && to.query.sign && !_loadAppType) { // h5在app里的登录
  //   auth.getAppToken(to.query)
     session.set('appAccountId', to.query.accountId)
     _loadAppType = true
   }

  // if(location.href.indexOf("localhost") >=0){
  //   if (!tools.getCookie('_ggj_token_')) {
  //     tools.setCookie('_ggj_token_', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJhY2NvdW50SWRcIjoxMjc1MDY1ODAxLFwiYXR0cmlidXRlc1wiOntcImxvZ2luU3RhdHVzXCI6XCIxXCJ9LFwiaXNBcHBcIjpmYWxzZSxcIm9zXCI6MCxcInZlcnNpb25cIjpcIjEuMFwifSIsImV4cCI6MTU0MjMxMjg1NX0.0cV0x_OgKX2ECbI841YWdPYOjyjhJTZwIhxKgeZhzhQ', 100)
  //     tools.setCookie('_ggj_aid_', '1275065801', 100)
  //   }
  // }
  
  if(location.href.indexOf("localhost") >=0){
    if (!tools.getCookie('_ggj_token_')) {
      tools.setCookie('_ggj_token_', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJhY2NvdW50SWRcIjoxMjU4OTU5MzUxLFwiYXR0cmlidXRlc1wiOntcImxvZ2luU3RhdHVzXCI6XCIxXCJ9LFwiaXNBcHBcIjpmYWxzZSxcIm9zXCI6MCxcInZlcnNpb25cIjpcIjEuMFwifSIsImV4cCI6MTU0MjQ4NTI4NX0.rwP0EbVDCP89mx7fomDW_qNs7zG6JSCeAYIF5MHf7OM', 100)
      tools.setCookie('_ggj_aid_', '1258959351', 100)
    }
  }
  

  next()
})

export default router
