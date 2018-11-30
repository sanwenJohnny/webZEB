import types from './types'

export default {
  [types.GET_ADDRS] (state, payload) {
    state.addrData = payload.data
  },
  [types.CHANGE_ADDRNO] (state, payload) {
    state.addrNo = payload.addrNo
  },
  [types.GET_USERINFO] (state, payload) {
    state.userInfo = payload.data
  },
  [types.GET_ACCOUNT] (state, payload) {
    state.account = payload.data
  }
}
