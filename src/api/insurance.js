import dataFetch from '@/utils/request'

export default {
  // 获取保险订单列表
  async getInsuranceList (params) {
    console.log(params)
    return dataFetch('/insurance/myInsuranceList', params,{prefixName:'benefit'})
  },
  // 获取保险订单详情
  async getInsuranceDetail (params) {
    return dataFetch('/insurance/insuranceDetail', params,{prefixName:'benefit'})
  },
  // 获取保险订单表单
  async getInsuranceOrderForm (params) {
    return dataFetch('/insurance/insuranceOrderForm', params,{prefixName:'benefit'})
  },
  // 更新保险订单表单
  async updateInsuranceConfirmOrder (params) {
    return dataFetch('/insurance/updateInsuranceConfirmOrder', params,{prefixName:'benefit'})
  },
  // 更新保险订单表单
  async addInsuranceOrder (params) {
    return dataFetch('/insurance/addInsuranceOrder', params,{prefixName:'benefit'})
  },
  // 获取优惠券列表
  async getCouponList (params) {
    let url = '/common/coupon/couponList?confirmNumber=' + params.confirmNumber + '&totalPrice=' + params.totalPrice
    return dataFetch(url, params, { method: 'get',prefixName:'benefit' })
  },
  // 支付唤起收银台
  async checkStand (params) {
    return dataFetch('/common/checkStand', params,{prefixName:'benefit'})
  },
  // 支付详情
  async payDetail (params) {
    return dataFetch('/common/payDetail', params,{prefixName:'benefit'})
  },
  // 取消保险订单详情
  async cancelInsuranceOrder (params) {
    return dataFetch('/insurance/cancelInsuranceOrder', params,{prefixName:'benefit'})
  }
  
}
