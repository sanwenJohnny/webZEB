import types from './types'

export default {
  [types.GET_DETAIL] (state, payload) {
    state.productDetail = payload.data
  },
  [types.CART_COUNT] (state, payload) {
    state.cartCount = payload.data
  },
  [types.COLLECT] (state, payload) {
    state.productDetail.isCollect = payload.data
  },
  [types.UNCOLLECT] (state, payload) {
    state.productDetail.isCollect = payload.data
  },
  [types.ADDR_LOCATION] (state, payload) {
    state.addrLocation = payload.data
  },
  [types.ADDR_LIST] (state, payload) {
    state.addrList = payload.data
  },
  [types.DELIVERY_INFO] (state, payload) {
    state.deliveryInfo = payload.data
  },
  [types.GET_COUPONS] (state, payload) {
    state.couponList = payload.data
  },

  [types.EDIT_COUPON] (state, payload) {
    for (let i = 0; i < state.couponList.length; i++) {
      if (state.couponList[i].couponId == payload.data) {
        state.couponList[i].couponReceiveStatus = 2
        break
      }
    }
  }
}
