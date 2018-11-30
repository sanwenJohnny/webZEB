import dataFetch from '@/utils/request'

export default {
  //  商品详情
  async productInfo (params) {
    return dataFetch('/goods/productInfo', params)
  },
  // 编辑购物车数量
  async editCart (params) {
    return dataFetch('/cart/edit', params)
  },
  /// 商品配送信息
  async deliveryInfo (params) {
    return dataFetch('/goods/productDelivery', params)
  },
  /// 定位
  async getLocation (params) {
    return dataFetch('/address/location', params)
  },
  /// 获取优惠券
  async getCoupon (params) {
    return dataFetch('/goods/productCoupon', params, {noGoLogin:true})
  },
  /// 获取购物车数量
  async showproductCount (params) {
    return dataFetch('/cart/productCount', params)
  },
  /// 获取购物车数量
  async showcartcount (params) {
    return dataFetch('/cart/count', params)
  },
  /// 获取收货地址
  async getAddress (params) {
    return dataFetch('/address/list', params)
  },
  /// 收藏
  async addCollect (params) {
    return dataFetch('/collect/add', params)
  },
  // 取消收藏
  async cancleCollect (params) {
    return dataFetch('/collect/cancel', params)
  },
  /// 领取优惠券
  async receiveCoupon (params) {
    return dataFetch('/goods/receiveCoupon', params)
  },
  /// collect/addSubscription
  async addSubscription (params) {
    return dataFetch('/collect/addSubscription', params)
  },
  async getSubscription (params) {
    return dataFetch('/collect/getSubscription', params)
  },
  /// 客服
  async huanxin (params) {
    return dataFetch('/account/getHuanXinInfo', params)
  },
  // 工商资质
  async zizhi (params) {
    return dataFetch('/goods/qualificationImageList', params)
  }
}
