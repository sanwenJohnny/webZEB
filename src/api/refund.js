import dataFetch from '@/utils/request'

export default {
  // 获取投诉列表
  async getcomplainList (params) {
    return dataFetch('/complain/pageQuery', params)
  },
  // 获取退款列表
  async getRefundList (params) {
    return dataFetch('/refund/list', params)
  },
  // 获取可以退款商品列表
  async getCanRefundList (params) {
    return dataFetch('/refund/canRefundList', params)
  },
  // 获取投诉详情
  async complainDetail (params) {
    return dataFetch('/complain/getDetail', params)
  },
  /**
  * @huogunahui
  * */
  // 获取退款详情
  async getRefundDetail (params) {
    return dataFetch('/refund/getRefundDetail', params)
  },
  // 催一催
  async refundUrge (params) {
    return dataFetch('/refund/urge', params)
  },
  // 拒签
  async refuseSign (params) {
    return dataFetch('/refund/refuseSign', params)
  },
  // 获取商品退款申请
  async preSubmit (params) {
    return dataFetch('/refund/preSubmit', params)
  },
  // 获取修改商品退款申请
  async getApplyInfoForUpdate (params) {
    return dataFetch('/refund/getApplyInfoForUpdate', params)
  },
  // 首次申请退款
  async submitApply (params) {
    return dataFetch('/refund/submitApply', params)
  },
  // 修改申请退款
  async updateApply (params) {
    return dataFetch('/refund/updateApply', params)
  },
  // 获取订单商品
  async getProductList (params) {
    return dataFetch('/refund/getProductList', params)
  },
  // 获取仓库收货人信息
  async getStoreInfo (params) {
    return dataFetch('/refund/preAddLogisticsInfo', params)
  },
  // 提交物流信息
  async addLogisticsInfo (params) {
    return dataFetch('/refund/addLogisticsInfo', params)
  },
  // 获取物流信息
  async getLogisticsList (params) {
    return dataFetch('/refund/getLogisticsList', params)
  },


  // 取消申请
  async cancelApply (params) {
    return dataFetch('/refund/cancelApply', params)
  },
  // 获取投诉原因
  async getReason (params) {
    return dataFetch('/complain/getAllReason', params)
  },
  // 上传图片
  async uploadImg (params) {
    return dataFetch('/reparation/uploadImg', params)
  },
  // 提交投诉
  async complainSubmit (params) {
    return dataFetch('/complain/submit', params)
  }
}
