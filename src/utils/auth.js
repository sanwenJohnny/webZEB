import { TESTAPPID, APPID } from './constants'
import storage from './storage-lite'
import session from './session-lite'
import router from '../router'
import Tools from './tools'
import api from '@/api/login'
import Bridge from '@/utils/bridge'

const AUTH_DATA = 'authData'

export default {
  name: 'auth',
  isWx: (/MicroMessenger/i).test(window.navigator.userAgent.toLowerCase()),
  /**
   *
   * @return {[type]} [description]
   */
  getAuthData () {
    return storage.get(AUTH_DATA)
  },
  /**
   * isLoggedIn
   * @return {Boolean} [description]
   */
  isLoggedIn () {
    return this.checkToken() 
    //if (Tools.isApp && session.get('appAccountId') == 0) return false   
  },
  /**
   * 微信授权
   * @return {[type]} [description]
   */
  wxLogin () {
    const appid = location.hostname.startsWith('h5test') ? TESTAPPID : APPID
    // const appid = APPID
    storage.set('HQBSREDIRECT', location.href)
    const url = encodeURIComponent(`${location.origin}/wxauth`)
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
  },
  /**
   * 登录
   * @return {[type]} [description]
   */
  login (redirectUrl) {
    // if (Tools.isApp && session.get('appAccountId') == 0) {
    //   window.location.href = 'ggj://redirect/typeCommon/{"type":6}'
    //   return false
    // }
    //if (!this.isLoggedIn()) {
    if (this.isWx) {
      this.wxLogin()
    } else if (Tools.isApp) {
      Bridge.appLogin(redirectUrl,res=>{
        if(res == 'success'){
         // window.location.href = redirectUrl || '/'
        }else{
          Tools.toast('登录失败，请稍后重试')
        }
      })
      //window.location.href = 'ggj://redirect/typeCommon/{"type":6}'
    } else {
      window.location.href = '/login?redirect_url=' + encodeURIComponent(redirectUrl) || ''
    }
    //}
  },

  loginByCode (code) {
    const _accountId = session.get('accountId') || 0
    let data = {
      code: code,
      referrerId: _accountId
    }
    api.wxLogin(data).then((res) => {
      const _redirect = storage.get('HQBSREDIRECT')
      const _r = res
      storage.remove('HQBSREDIRECT')
      if (_r.status === 1) {
        storage.set('authData', _r.data)
        //router.replace({ path: _redirect })
        location.href = _redirect
      } else {
        router.push({path: '/'})
        // if (_r.codeMsg) {
        //   const _c = _r.codeMsg
        //   if (_c.code === 3090320002) {
        //     storage.set('authData', _r.data)
        //     // 绑定手机号
        //     router.push(
        //       {
        //         path: '/login/bound?redirect_url=' + _redirect
        //       }
        //     )
        //   } else if (_c.code === 3090320003) {
        //     storage.set('authData', _r.data)
        //     // 绑定推荐人
        //     router.push(
        //       {
        //         path: '/login/introducer?redirect_url=' + _redirect
        //       }
        //     )
        //   }
        // }
      }
    })
  },
  /*
  * 判断token是否失效
  * _expiredTime <= 5 获取新的token
  * 新token失效后 后端会返回跳转登录的错误代码
  */
  checkToken () {
    if (Tools.getCookie('_ggj_aid_')) {
      // const _currentTime = new Date().getTime()
      // const _expiredTime = storage.get('authData').expired
      // const _val = _expiredTime - _currentTime
      // if (_val > 300000) {
      //   return 1// 有效
      // } else {
      //   return 0// 失效或即将失效 重新获取token
      // }
      return true
    }else{
      return false
    }
  },
  // getNewToken () {
  //   let conf = new Config()
  //   conf.data = {
  //     refreshToken: storage.get('authData').refreshToken
  //   }
  //   conf.url = '/auth/refreshToken'
  //   new Request(conf).POST().then((res) => {
  //     console.log(res)
  //     storage.set('authData', res.data)
  //     window.location.reload()
  //   })
  // },
  getAppToken (obj) {
    // let conf = new Config()
    // conf.url = '/auth/loginByApp'
    let data = {
      accountId: obj.accountId,
      sign: obj.sign,
      version: obj.version,
      os: obj.os
    }
    api.loginApp(data).POST().then((res) => {
      storage.set('authData', res.data)
      // window.location.reload()
    })
  }
}
