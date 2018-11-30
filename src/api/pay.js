import dataFetch from '@/utils/request'

export default {
  // 服务说明
  async getServeInfo (params) {
    return dataFetch('/goods/serviceDetail', params)
  },
  // 赔付列表
  async getApplyList (params) {
    return dataFetch('/reparation/applyList', params)
  },
  // 申请赔付
  async getCheckUnusedOp () {
    return dataFetch('/reparation/checkUnusedOp')
  },
  // 获取比价平台
  async getPlatformList () {
    return dataFetch('/reparation/platformList')
  },
  // 获取赔付商品列表
  async getOrderProductList (params) {
    return dataFetch('/reparation/orderProductList', params)
  },
  // 赔付商品
  async getOrderProduct (params) {
    return dataFetch('/reparation/orderProduct', params)
  },
  // 上传图片
  async getUploadImg (params) {
    return dataFetch('/reparation/uploadImg', params)
  },
  // 提交申请
  async getAddApply (params) {
    return dataFetch('/reparation/addApply', params)
  }
}
