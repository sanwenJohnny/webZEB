import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'
import product from './modules/product'
import login from './modules/login'
import { createSessionPlugin } from './plugins'

Vue.use(Vuex)

const SS_KEY = '@GGJHQBSFE'
const syncData = JSON.parse(window.sessionStorage.getItem(SS_KEY))
// 需要存储的state
let mapping = {
  login: ['addrData', 'userInfo']
}
// 白名单中mutation数据进sessionStorage
// console.log(modLogin)
let mWhiteList = [
  `login/${login.types.GET_ADDRS}`,
  `login/${login.types.GET_USERINFO}`
]
if (syncData) {
  Object.assign(login.state, syncData.login)// login数据还原
}
const plugin = createSessionPlugin(SS_KEY, mapping, mWhiteList)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [plugin],
  modules: {
    test,
    product,
    login
  },
  state: {
    customerTitle: '斑马'
  },
  mutations: {
    setTitle (state, data) {
      state.customerTitle = data
    }
  },
  actions: {
    setTitle ({ commit }, str) {
      commit('setTitle', str)
    }
  },
  getters: {}
})
