import Qs from 'qs'
import auth from './auth'
import storage from '@/utils/storage-lite'
export default {
  name: 'tools',
  isApp: navigator.userAgent.toLowerCase().indexOf('zebra') > -1,
  isWx: (/MicroMessenger/i).test(window.navigator.userAgent.toLowerCase()),
  appType: 0,
  ua: navigator.userAgent.toLowerCase(),
  isBsApp: window.location.href.indexOf('isApp') > -1,
  /**
   * setTitle
   * @param {String} title [description]
   */
  setTitle (title) {
    title = title || ''
    window.document.title = title
  },

  /**
   * isEmpty
   * @param  {String}  value [description]
   * @return {Boolean}       [description]
   */
  isEmpty (value) {
    return value === null || value === undefined || value.trim() === ''
  },

  /**
   * getHeader
   * @return {Object} [description]
   */
  getHeader () {
    const {
      userName,
      accessToken,
      refreshToken
    } = auth.getAuthData()
    return {
      auth: window.btoa(`${userName}\n${accessToken}\n${refreshToken}`)
    }
  },

  /**
   * [queryStringToObject description]
   */
  queryStringToObject () {
    var queryString = (location.search.length > 0 ? location.search.substring(1) : '')
    const urlParams = Qs.parse(queryString)
    return urlParams
  },

  /**
   * [objectToQueryString description]
   * @param  {Object} obj [description]
   * @return {string}     [description]
   */
  objectToQueryString (obj) {
    if (!obj || !Object.keys(obj).length) {
      return ''
    }
    return '?' + Object.keys(obj).map((key) => {
      return `${key}=${encodeURIComponent(obj[key])}`
    }).join('&')
  },

  /**
   * setKeyToValue
   * @param  {Object} obj [description]
   * @return {Object}     [description]
   */
  setKeyToValue (obj) {
    let newObj = {}
    let key
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue
      }
      newObj[key] = key
    }
    return newObj
  },

  /**
   * loadScript
   * @param  {string} url [description]
   */
  loadScript (url) {
    const httpReq = new XMLHttpRequest()
    httpReq.open('GET', url, true)
    httpReq.send(null)
  },
  /**
   * showLoading
   * @param  {Boolean} show [description]
   */
  showLoading (show) {
    var loading = document.getElementById('loading')
    if (!loading) {
      loading = document.createElement('img')
      loading.id = 'loading'
      loading.className = 'loading'
      loading.src = '/static/image/loading.gif'
      document.body.appendChild(loading)
    }

    var isVisible = loading.offsetWidth > 0 || loading.offsetHeight > 0
    if (show && !isVisible) {
      loading.style.display = 'block'
    } else {
      loading.style.display = 'none'
    }
  },

  /**
   * [processingData description]
   * @param  {[type]} res [description]
   * @return {[type]}     [description]
   */
  processingData (res) {
    if (res.status && res.status == 1) {
      if (!!res.result && !!res.result.data) {
        return res.result
      } else {
        return null
      }
    } else {
      return null
    }
  },
  /**
   * [htmlEncode description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  htmlEncode (str) {
    str = str.replace(/\n/g, '<br>')
    str = str.replace(/&/g, '&amp;')
    str = str.replace(/"/g, '&quot;')
    str = str.replace(/'/g, '&#39;')
    str = str.replace(/\+/g, ' &#43;')
    str = str.replace(/ /g, '&nbsp;')
    str = str.replace(/</g, '&lt;')
    str = str.replace(/>/g, '&gt;')
    str = str.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
    return str
  },
  /**
   * [htmlDecode description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  htmlDecode (str) {
    str = str.replace(/&lt;/gi, '<')
    str = str.replace(/&gt;/gi, '>')
    str = str.replace(/<br>/gi, '\n')
    str = str.replace(/&amp;/gi, '&')
    str = str.replace(/&quot;/gi, '"')
    str = str.replace(/&#39;/g, "'")
    str = str.replace(/&#43;/g, '+')
    str = str.replace(/&nbsp;/gi, ' ')
    return str
  },
  /**
   * [htmlEncoding description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  htmlEncoding (str) {
    // str = str.replace(/\n/g,'<br>');
    str = str.replace(/\+/g, '&#43;')
    return str
  },
  /**
   * [htmlDecoding description]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  htmlDecoding (str) {
    // str = str.replace(/<br>/gi, '\n');
    str = str.replace(/&#43;/g, '+')
    return str
  },
  appParam (to) { // 存app6个参数
    let _param = ''
    _param = {
      accountId: to.query.accountId,
      sign: to.query.sign,
      version: to.query.version,
      channel: to.query.channel,
      isApp: to.query.isApp,
      os: to.query.os
    }
    storage.set('appParam', _param)
    storage.set('isBsApp', true)
    this.isBsApp = true
  },
  getParam () { // 取app6个参数
    return storage.get('appParam')
  },
  /**
   * 数据简单复制
   * @param {*} source
   * @param {*} keys
   */
  copy (source, keys = []) {
    if (!source) {
      return source
    }
    let d = Object.create(null)
    keys.forEach(k => {
      d[k] = source[k]
    })
    return d
  },
  bottomVisible () {
    const scrollY = window.scrollY
    const visible = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight
    const bottomOfPage = visible + scrollY >= pageHeight - 20
    return bottomOfPage || pageHeight < visible
  },
  GetQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return (r[2])
    return null
  },
  timeCount (counter, fn, done) {
    if (window.HqbsWorkers) {
      HqbsWorkers.timeCounter(counter, fn, done)
    } else {
      let timer = setInterval(() => {
        counter--
        if (counter <= 0) {
          clearInterval(timer)
          done && done.call(null)
        } else {
          fn && fn.call(null, counter)
        }
      }, 1000)
    }
  },
  setCookie (key, val, exp) {
    var cookieString = key + '=' + val
    if (exp > 0) { // 判断是否设置过期时间
      var date = new Date()
      date.setTime(date.getTime + exp * 3600 * 1000 * 24)
      cookieString = cookieString + '; expires=' + date.toGMTString() + ';path=/'
    }
    document.cookie = cookieString
  },
  getCookie (key) {
    var strCookie = document.cookie
    var arrCookie = strCookie.split('; ')

    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split('=')
      if (arr[0] == key) return arr[1]
    }
    return ''
  },
  toast: function (msg) {
    let _t = document.createElement('div')
    _t.className = 'toasting'
    _t.innerHTML = msg
    document.body.appendChild(_t)
    setTimeout(() => {
      document.body.removeChild(_t)
    }, 2000)
  },
  bridgeFun () {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.indexOf('zebra') > -1) {
      function setupWebViewJavascriptBridge (callback) {
        if (ua.indexOf('android') > -1) {
          if (window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge)
          } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function () {
              callback(WebViewJavascriptBridge)
            }, false)
          }
        } else {
          if (window.WebViewJavascriptBridge) {
            return callback(WebViewJavascriptBridge)
          }
          if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback)
          }
          window.WVJBCallbacks = [callback]
          var WVJBIframe = document.createElement('iframe')
          WVJBIframe.style.display = 'none'
          WVJBIframe.src = 'ggjBridge://__BRIDGE_LOADED__'
          document.documentElement.appendChild(WVJBIframe)
          setTimeout(function () {
            document.documentElement.removeChild(WVJBIframe)
          }, 0)
        }
      }
      setupWebViewJavascriptBridge(function (bridge) {
        //callback && callback()
      })
      //console.log('注册成功')
    }
  }
}
