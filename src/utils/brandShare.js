function brandShareFun (shareData, params, cb) {
  var params = params || {}
  var _appId = shareData.appId,
    _timestamp = shareData.timestamp,
    _noncestr = shareData.noncestr,
    _signature = shareData.signature,
    _shareImage = shareData.shareImage,
    _shareTitle = shareData.shareTitle,
    _shareContent = shareData.shareContent,
    _sharePath = params.sharePath || shareData.sharePath,
    _shareKey = shareData.shareKey,
    _shareParameter = shareData.shareParameter,
    _moduleId = shareData.moduleId
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: _appId, // 必填，公众号的唯一标识
    timestamp: _timestamp, // 必填，生成签名的时间戳
    nonceStr: _noncestr, // 必填，生成签名的随机串
    signature: _signature, // 必填，签名，见附录1
    jsApiList: [
      'onMenuShareAppMessage',
      'onMenuShareTimeline',
      'hideMenuItems',
      'previewImage'
    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })

  function shareCallback (type) {
    var callBackHttp = new XMLHttpRequest()
    var formData = new FormData()
    formData.append('shareKey', _shareKey)
    formData.append('shareUrl', _sharePath)
    formData.append('shareParameter', _shareParameter)
    formData.append('moduleId', _moduleId)
    formData.append('shareType', type)

    callBackHttp.onreadystatechange = state_Change
    callBackHttp.open('post', '/share/shareCallback', true)
    callBackHttp.send(formData)

    function state_Change () {
      if (callBackHttp.readyState == 4) { // 4 = "loaded"
        if (callBackHttp.status == 200) { // 200 = "OK"
          console.log('分享回调成功')
          params.cb && params.cb.call(this)
        } else {
          console.log(callBackHttp.statusText)
        }
      }
    }
  }

  wx.ready(function () {
    wx.hideMenuItems({
      menuList: ['menuItem:copyUrl', 'menuItem:share:qq', 'menuItem:share:email', 'menuItem:favorite', 'menuItem:readMode', 'menuItem:share:QZone'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    })
    wx.onMenuShareAppMessage({
      title: _shareTitle, // 分享标题
      desc: _shareContent, // 分享描述
      link: _sharePath, // 分享链接
      imgUrl: _shareImage, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        shareCallback(1)
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      },
      fail: function (res) {}
    })
    wx.onMenuShareTimeline({
      title: _shareTitle, // 分享标题
      link: _sharePath, // 分享链接
      imgUrl: _shareImage, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
        shareCallback(4)
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      },
      fail: function (res) {}
    })
  })

  wx.error(function (res) {})
}
export default {
  brandShareFun
}
