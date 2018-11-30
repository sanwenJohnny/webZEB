import dataFetch from '@/utils/request'

export default {
  // 获取订单列表
  async orderList (params) {
    return dataFetch('/order/list', params)
  },
  // 渲染订单提交页面
  async orderConfirm (params) {
    return dataFetch('/order/confirm', params)
  },
  // 生成订单
  async orderAdd (params) {
    return dataFetch('/order/add', params)
  },
  // 获取支付微信支付参数
  async payment (params) {
    return dataFetch('/pay/payment', params, {prefixName: 'pay'})
  },
  // 获取订单详情信息
  async getOrderDetail (params) {
    return dataFetch('/order/detail', params)
  },
  // 确认收货或者取消订单
  async orderModify (params) {
    return dataFetch('/order/modify', params)
  },
  // 查看物流详情
  async getLogisticsInfo (params) {
    return dataFetch('/order/logisticsInfo', params)
  },
  // 获取选择优惠券列表
  async getCouponList (params) {
    return dataFetch('/order/getCoupon', params)
  },

  // 获取待付款订单支付信息 结算中心调用
  async getPayMerge (params) {
    return dataFetch('/order/merge', params)
  },

  // 订单的支付结果信息查询 交易详情调用
  async getPayDetail (params) {
    return dataFetch('/order/payDetail', params)
  },
  // 微信支付授权接口
  async payAuthorize (params) {
    return await dataFetch('/weChat/payAuthorize', params, {prefixName: 'pay'})
  },
  // 微信授权接口
  async baseOauth (params) {
    return await dataFetch('/weChat/baseOauth', params, {prefixName: 'pay'})
  },
}
