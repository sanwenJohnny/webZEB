//import '@babel/polyfill'
import 'core-js/es6/set'
import 'core-js/es6/promise'
import 'core-js/es6/map'
import 'core-js/es6/array'
import 'core-js/es6/object'
import 'core-js/es6/string'

import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/utils/ext'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import '@/assets/css/styles.css'
import '@/assets/css/LArea.css'
import '@/assets/css/my-mint.less'

//import '@/assets/js/brandShare'

//import '@/assets/js/tasks'
import $ from '@/assets/js/zepto.min.js'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://img.gegejia.com/img/82f081e46d0bb59c6108cf32316c9c2e.png',
  loading: 'https://img.gegejia.com/img/82f081e46d0bb59c6108cf32316c9c2e.png'
})

Vue.use(Mint)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
