import dataFetch from '@/utils/request'

export default {
  //分享回调
  async shareCallback (params) {
    return dataFetch('/share/shareCallback', params, {noGoLogin:true})
  },
  // 分享
  getJssdk (params) {
    return dataFetch('/share/getJssdk', params, {noGoLogin:true})
  },
  // 分享数据
  shareInfo (params) {
    return dataFetch('/share/shareInfo', params, {noGoLogin:true})
  },
  // 分享通知
  getShareNotice (params) {
    return dataFetch('/share/getShareNotice', params, {noGoLogin:true})
  }
}
