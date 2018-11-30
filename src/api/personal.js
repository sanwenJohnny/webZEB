import dataFetch from '@/utils/request'

export default {
  // 获取个人中心信息
  async getInfo (params) {
    return dataFetch('/account/getInfo', params)
  },
  // 个人中心猜你喜欢
  getHomeLikeData (params) {
    return dataFetch('/recommend/index', params)
  },
  // 获取订单数量
  async getOrderCount (params) {
    return dataFetch('/order/count', params)
  },
  // 获取优惠券列表
  async getCoupon (params) {
    return dataFetch('/account/getCoupon', params)
  },
  // 兑换优惠券
  async codeChangeCoupon (params) {
    return dataFetch('/account/codeChangeCoupon', params)
  },
  // 获取我的收藏列表
  async getCollectList (params) {
    return dataFetch('/collect/list', params)
  },
  // 取消收藏
  async cancleCollect (params) {
    return dataFetch('/collect/cancel', params)
  },
  // 获取找相似列表数据
  async getGoodsAlike (params) {
    return dataFetch('/homePage/goodsAlike', params)
  },
  // 获取我的G币
  async getCoin (params) {
    return dataFetch('/coin/getInfo', params)
  },
  // 获取G币明细列表
  async getCoinRecord (params) {
    return dataFetch('/coin/record', params)
  },
  // 获取G币红包详情
  async getRedPacketsDetail (params) {
    return dataFetch('/redPackets/detail', params)
  },
  // G币红包领取
  async redPacketsDraw (params) {
    return dataFetch('/redPackets/draw', params)
  },
  // G币红包领取记录
  async redPacketsRecord (params) {
    return dataFetch('/redPackets/record', params)
  },
  // 获取购物车数量
  async getCartCount (params) {
    return dataFetch('/cart/count', params)
  }
}
