import dataFetch from '@/utils/request'

export default {
  async getProducts (params) {
    return dataFetch('/recharge/products', params)
  },
  async getRecords () {
    return dataFetch('/recharge/records')
  },
  async getValidateBeforeAdd (params) {
    return dataFetch('/recharge/validateBeforeAdd', params)
  },
  async getAddChargeOrderAjax (params) {
    return dataFetch('/order/addChargeOrder', params)
  }
}
