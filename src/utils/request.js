
/**
 * Created by VsCode.
 * @author Evan Chan
 * @date 2018/8/7
 */

import axios from 'axios'
import Qs from 'qs'
import auth from '../utils/auth'
import { config } from '../config'
import storage from '@/utils/storage-lite'
import { Toast } from 'mint-ui'
import router from '../router'

const env = process.env.NODE_ENV || 'development'
// alert(process.env.NODE_ENV)
let instance = axios.create({
  method: 'post',
  withCredentials: true,
  timeout: 10000,
  headers: Object.assign({
    'Accept': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }, config.httpHeaders || {}),
  transformRequest: [function (data) {
    data = Qs.stringify(data)
    return data
  }]
})

instance.interceptors.request.use(req => {
  return req
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  // tools.isRequest = false
  return res
}, err => {
  return Promise.reject(err)
})

const normalHandler = (resolve, res, option) => {
  // debugger;
  let r = res.data
  if (r && typeof r === 'string') { // 处理安卓4.4.4以下 返回数据
    r = JSON.parse(r)
  }
  if (r) {
    if (r.status == 1) {
      resolve(r)
    } else {
      // if (r.errorCode === 10010) {
      //   // auth.login(window.location.href)
      // }
      const noGoLogin = option.noGoLogin || ''
      const c = r.code
      const _redirectUrl = storage.get('HQBSREDIRECT') || router.currentRoute.query.redirect_url || location.href
      storage.remove('HQBSREDIRECT')

      if (c) {
        if (c === 3090310001) {
          Toast({
            message: '服务器开小差，请稍后再试',
            position: 'center',
            duration: 3000
          })
          //return false
        } else if (c === 3090320000) {
          Toast({
            message: r.message,
            position: 'center',
            duration: 3000
          })
        } else if (c === 3090310006) {
          // 用户未登录 跳转登录
          if(noGoLogin) return false 
          //alert(_redirectUrl);       
          auth.login(_redirectUrl)       
        } else if (c === 3090320002) {
          if (r.data && r.data.token) {
            storage.set('authData', r.data)
          }
          // 绑定手机号
          router.push(
            {
              path: '/login/bound?redirect_url=' + encodeURIComponent(_redirectUrl)
            }
          )
        } else if (c === 3090320003) {
          if (r.data && r.data.token) {
            storage.set('authData', r.data)
          }
          // 绑定推荐人
          router.push(
            {
              path: '/login/introducer?redirect_url=' + encodeURIComponent(_redirectUrl)
            }
          )
        } else if (c === 3090320004) {
          // 异常返回首页列表
          router.push({ path: '/' })
        }
      }
      r && c >= 3090320004 && resolve(r)
      // resolve(r)
    }
  } else {
    res && resolve({
      status: 0,
      code: 500,
      error: '未知错误'
    })
  }
}

const errorHandler = (reject, err) => {
  console.error(err)
  reject({
    status: 0,
    code: 500,
    error: err.message || err
  })
}

export default async (url = '', params = {}, option = {}) => {
  if (!url) {
    return Promise.reject(new Error(`params 'url' not exist！`))
  }
  let method = option.method || 'post'
  // prefixName 用于请求分发，非必要
  let prefixName = option.prefixName || 'default'
  if (url.indexOf('http') !== 0) {
    let prefix = config.apiPath[prefixName]
    if (typeof prefix === 'string') {
      url = prefix + url
    } else if (typeof prefix === 'object') {
      url = prefix[env] + url
    }
  }
  switch (method) {
    case 'get':
      return new Promise((resolve, reject) => {
        instance.get(url, params, option).then(res => {
          normalHandler(resolve, res, option)
        }).catch(err => {
          errorHandler(reject, err)
        })
      })
    case 'post':
    case 'put':
    case 'patch':
      return new Promise((resolve, reject) => {
        instance.post(url, params, option).then(res => {
          normalHandler(resolve, res, option)
        }).catch(err => {
          errorHandler(reject, err)
        })
      })
    default:
      return Promise.reject(new Error(`unknown request method '${method}'`))
  }
}

// 业务级错误码
// 响应码
// 说明
// 3090320000	前端直接提示文案
// 3090310006	用户未登录
// 3090320002	用户需要绑定手机号
// 3090320003	用户需要输入推荐人
// 3090320004	异常返回首页列表`
// 3090320005	只支持App操作,提示或者跳转下载App
// 3090320006	错误码，不做任何操作和提示
// 3090320007	前端提示文案,然后刷新页面
