import dataFetch from '@/utils/request'

export default {
  // 微信授权登录
  async wxLogin (params) {
    return dataFetch('/login/loginH5ByWx', params)
  },
  // 获取区号
  async countryCode (params) {
    return dataFetch('/address/countryCode', params)
  },
  // 校验用户信息
  async check (params) {
    return dataFetch('/account/check', params)
  },
  // 获取当前用户信息
  async userInfo (params) {
    return dataFetch('/account/userInfo', params)
  },
  // 手机号登录
  async telLogin (params) {
    return dataFetch('/login/loginH5ByMobile', params)
  },
  // 邦定手机号
  async bindingMobile (params) {
    return dataFetch('/login/bindingMobile', params)
  },
  // 推荐人
  async recommender (params) {
    return dataFetch('/login/recommender', params)
  },
  // 短信
  async sendCode (params) {
    return dataFetch('/sms/send', params)
  },
  /// App登录接口（包括微信和手机登录）
  async loginApp (params) {
    return dataFetch('login/loginApp', params)
  }
}
