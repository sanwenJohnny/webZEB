import types from './types'
import api from '@/api/product'

export default {

  async getDetailAction ({ commit }, params) {
    const res = await api.productInfo(params)
    // if (res.status == 1) {
    if (res.data.skuInfo) res.data.skuInfo.defaultId = res.data.saleUnitId
    // test data
    // res.data.promotion.activityStatus = 2
    // res.data.promotion.type = 3
    // res.data.salesRanking = {
    //   title: '1111'
    // }
    // res.data.serviceInfo = {
    //   desc: 'aaa啊啊啊啊'
    // }

    commit(types.GET_DETAIL, { data: res.data })
    // }
    return Promise.resolve(res.data)
  },

  // editCartAction ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/ygg-hqbs/spcart/editscbsp`
  //   return new request(conf).POST()
  // },
  async collectAction ({ commit }, params) {
    const res = await api.addCollect(params)
    // api.addCollect(params).then((data) => {
    if (res.status == '1') commit(types.COLLECT, { data: '1' })
    return Promise.resolve(res.data)
    // })
  },
  async unCollectAction ({ commit }, params) {
    const res = await api.cancleCollect(params)
    // api.cancleCollect(params).then((data) => {
    if (res.status == '1') commit(types.UNCOLLECT, { data: '0' })
    return Promise.resolve(res.data)
    // })
  },

  // subscriptionAction ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/ygg-hqbs/collect/addSubscription`
  //   return new request(conf).POST()
  // },

  // getsubsAction ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/ygg-hqbs/collect/getSubscription`
  //   return new request(conf).POST()
  // },

  async showCartCountAction ({ commit }, params) {
    const res = await api.showcartcount(params)
    // api.showcartcount(params).then((data) => {
    commit(types.CART_COUNT, { data: res.data })
    // })
  },

  async getLocationAction ({ commit }, params) {
    const res = await api.getLocation(params)
    commit(types.ADDR_LOCATION, { data: res.data })
    return Promise.resolve(res.data)
  },

  async getAddrListAction ({ commit }, params) {
    const res = await api.getAddress(params)
    // console.log(res)
    commit(types.ADDR_LIST, { data: res.data.addressList })
    return Promise.resolve(res.data)
  },

  async getDeliveryInfoAction ({ commit }, params) {
    const res = await api.deliveryInfo(params)
    // api.deliveryInfo(params).then((data) => {
    commit(types.DELIVERY_INFO, { data: res.data.deliveryInfo })
    return Promise.resolve(res.data)
    // })
  },

  async getCouponAction ({ commit }, params) {
    const res = await api.getCoupon(params)
    // api.getCoupon(params).then((data) => {
    commit(types.GET_COUPONS, { data: res.data.couponList })
    // })
  }

  // drawCouponAction ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/ygg-hqbs/coupon/receiveCoupon`
  //   return new request(conf).POST()
  // }
}
