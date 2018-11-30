
export default {
  name: 'bridge',
  /*
  * 注册桥接
  */
  bridgeFun (callback) {
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
          if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge) }
          if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
          window.WVJBCallbacks = [callback]
          var WVJBIframe = document.createElement('iframe')
          WVJBIframe.style.display = 'none'
          WVJBIframe.src = 'ggjBridge://__BRIDGE_LOADED__'
          document.documentElement.appendChild(WVJBIframe)
          setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
        }
      }
      setupWebViewJavascriptBridge(function (bridge) {
        callback && callback()
      })
      //alert('注册成功')
    }
  },
  /*
  * 关闭webView
  */
  appViewClose () {
    window.WebViewJavascriptBridge.callHandler(
      'closeWebView',
      {},
      () => { }
    )
  },
  /*
  * app中拼团分享桥接
  * type 分享类型 app拼团类型是15
  * id 排期id
  * num 还差几人
  * status（区分多次分享）例（=1 第一次  =2 第二次分享）
  */
  appShare (id, num, status, cb) {
    window.WebViewJavascriptBridge.callHandler(
      'shareGroup',
      {
        type: 15,
        shareId: id,
        number: num,
        shareGroupStatus: status
      },
      res => {
        if (res === 'success') {
          cb && cb()
        }
      }
    )
  },
  /*
  * 支付
  * str 支付串
  * type 支付方式   1银联 2支付宝 3微信
  */
  appPay (str, type, cb) {
    window.WebViewJavascriptBridge.callHandler(
      'goPay',
      {
        payStr: str,
        payType: type
      },
      res => {
        // if (res === 'success') {
        cb && cb(res)
        // }
      }
    )
  },
  /*
  * 登录
  */
  appLogin (url, cb) {
    window.WebViewJavascriptBridge.callHandler(
    'presentLoginVC',
    {refreshUrl:url||""},
    res => {
      cb && cb(res)
    }
  )
  },
  /*
  * 点击直接分享（砍价团分享）
  */
  doShare (shareInfo, shareType) {
    let info
    if (shareType === 1) {
      info = {
        pengyouShare: shareInfo
      }
    } else if (shareType === 4) {
      info = {
        pengyouquanShare: shareInfo
      }
    }
    window.WebViewJavascriptBridge.callHandler(
      'goShare',
      {shareInfo: info, shareType},
      () => {}
    )
  },
  addOrder (id) {
    let strId = id + ''
    window.WebViewJavascriptBridge.callHandler(
      'pushToOtherController',
      {productId: strId, orderType: 3, type: 22, productCount: 1},
      () => {}
    )
  },
  appPayCenter (orderIds, channel, subChannel, cb, fb, cl) {
    //alert(orderIds,'获取的订单id')
    window.WebViewJavascriptBridge.callHandler(
      'showPayPlatforms',
      {
        orderIds: [orderIds],
        channel,
        subChannel
      },
      res => {
        //alert(res)
        if (res === 'success') {
          cb && cb()
        }else if(res === 'cancel'){
          cl && cl()
        } else {
          fb && fb()
        }
      }
    )
  },
  changeReceiveAddress() {
    window.WebViewJavascriptBridge.callHandler('changeReceiveAddress')
  },
  concat(type, IMNum, IMName) {
    window.WebViewJavascriptBridge.callHandler(
      "pushToOtherController",
      { type: 8, IMServiceNum: this.IMNum, IMServiceName: this.IMName },
      function(res) {}
    )
  }
}
