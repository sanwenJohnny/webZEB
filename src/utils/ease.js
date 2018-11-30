// import config from '@/service/config'
import api from '@/api/product'

const ease = {
  // config huanxin
  config (id, im) {
    window.easemobim = window.easemobim || {}
    easemobim.config = {
      // tenantId: '20414',
      tenantId: id,
      // orgName#appName
      appKey: 'globalscanner#globalscannerh5',
      // 手机App绑定的IM号
      // to: 'globalscanner00',
      to: im,
      // 是否隐藏小的悬浮按钮
      hide: true,
      // 自动连接
      autoConnect: true,
      eventCollector: true,
      ticket: false,
      // 下班后，不展示留言页面，不允许访客发送消息
      offDutyType: 'none'
    }
    if (window.location.hostname.startsWith('h5test')) {
      easemobim.config['appKey'] = 'globalscanner#globalscannertest'
      // easemobim.config['to'] = 'globalscannerTest';
      easemobim.config['to'] = im
    }
  },
  // bind huanxin
  bindEase (e, id) {
    api.huanxin().then(data => {
      if (data.status == '1') {
        window.event = e
        console.log('wine:', window.easemobim)
        window.easemobim.config.user = {
          // 指定用户名，集成时必填
          username: data.data.huanxinAccountName,
          // password验证方式
          password: data.data.huanxinPassword
        }
        window.easemobim.config.visitor = {
          userNickname: data.data.huanxinAccountName,
          trueName: data.data.huanxinAccountName
        }
        window.easemobim.bind({ tenantId: id })
      }
    })
  }
}

export default ease
