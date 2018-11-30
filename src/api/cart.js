import dataFetch from '@/utils/request'

export default {
  // 获取订单列表
  async getCartList (params) {
    return dataFetch('/cart/activitiesList', params)
  },

  // 获取猜你喜欢列表
  async getRecommend (params) {
    return dataFetch('/cart/cartRecReason', params)
  },

  // 删除购物车
  async deleteCart (params) {
    return dataFetch('/cart/delete', params)
  },

  // 编辑购物车
  async editCart (params) {
    return dataFetch('/cart/edit', params)
  },

  // 购物车合并
  async mergerCart (params) {
    return dataFetch('/cart/merger', params)
  },

  // 购物车内某个商品总数
  async getOneCount (params) {
    return dataFetch('/cart/productCount', params)
  },

  // 删除失效商品
  async removeInvalid (params) {
    return dataFetch('/cart/removeInvalid', params)
  },

  // 提交购物车
  async submitCart (params) {
    return dataFetch('/cart/submit', params)
  },

  // 购物车商品总数
  async cartCount (params) {
    return dataFetch('/cart/count', params, {noGoLogin:true})
  }
}
