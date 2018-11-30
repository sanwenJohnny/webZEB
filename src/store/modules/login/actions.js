import types from './types'
import api from '@/api/login'

export default {
  /**
   * getAddress 获取区号信息
   * @param  {Function} options.commit [description]
   * @param  {Object} options        [description]
   * @return {Promise}                [description]
   */
  getAddress ({ commit }, params) {
    api.countryCode(params).then((res) => {
      commit(types.GET_ADDRS, { data: res.data })
    })
  },
  /**
   * 获取验证码
   * @param  {[type]} options.commit [description]
   * @param  {Object} options        [description]
   * @return {[type]}                [description]
   */
  // getCode ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/sms/send`
  //   return new request(conf).POST()
  // },
  /**
   * 登录
   * @param  {[type]} options.commit [description]
   * @param  {Object} options        [description]
   * @return {[type]}                [description]
   */
  // goLogin ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/account/loginAjax`
  //   return new request(conf).POST()
  // },

  changeAddr ({ commit }, addrNo = '86') {
    commit(types.CHANGE_ADDRNO, { addrNo: addrNo })
  },
  /**
   * 获取用户信息
   * @param  {[type]} options.commit [description]
   * @param  {Object} options        [description]
   * @return {[type]}                [description]
   */
  async getUserInfo ({ commit }, params) {
    const res = await api.check(params)
    commit(types.GET_USERINFO, { data: res.data })
    return Promise.resolve(res)
    // api.check(params).then((data) => {
    //   commit(types.GET_USERINFO, { data: data.data })
    //   console.log(data)
    //   return Promise.resolve(data)
    // })
  }
  /**
   * 设置推荐人
   * @param {[type]} options.commit [description]
   * @param {Object} options        [description]
   */
  // setTid ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/account/recommender`
  //   return new request(conf).POST()
  // },
  // boundMobile ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/account/bindingMobile`
  //   return new request(conf).POST()
  // },
  // getAccount ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/ygg-hqbs/account/bindAccount`
  //   return new request(conf).POST().then(data => {
  //     if (data.status == 1) {
  //       commit(types.GET_ACCOUNT, { data: data.accountInfo })
  //     }
  //   })
  // }
  /**
   * 账户校验
   * @param  {[type]} options.commit [description]
   * @param  {Object} options        [description]
   * @return {[type]}                [description]
   */
  // checkAccount ({ commit }, options = {}) {
  //   const { data = null } = options
  //   let conf = new config()
  //   conf.data = data
  //   conf.url = `/ygg-hqbs/account/checkAccount`
  //   return new request(conf).POST()
  // }
}
