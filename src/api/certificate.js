import dataFetch from '@/utils/request'

export default {
  // 获取实名认证列表
  async getCertificateList (params) {
    return dataFetch('/account/rnList', params)
  },

  // 实名认证新增修改删除
  async editCertificate (params) {
    return dataFetch('/account/rn', params)
  },

}
