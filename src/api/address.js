import dataFetch from '@/utils/request'

export default {
  // 获取地址列表
  async getAddressList (params) {
    return dataFetch('/address/list', params)
  },

  // 获取地址详情
  async getAddressDetail (params) {
    return dataFetch('/address/detail', params)
  },

  // 编辑地址
  async editAddress (params) {
    return dataFetch('/address/modify', params)
  },

  // 删除地址
  async removeAddress (params) {
    return dataFetch('/address/remove', params)
  },

  // 更改订单地址
  async changeOrderAddress (params) {
    return dataFetch('/order/changeOrderAddress', params)
  },
  //获取省份
  async getProvince(){
    return dataFetch('/address/province');
  },
  //获取city
  async getCity (params) {
    return dataFetch('/address/city',params);
  },
  //获取所有区
  async getDistricts(params) {
    return dataFetch('/address/districts',params)
  }
}
