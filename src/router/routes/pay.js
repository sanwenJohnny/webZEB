const index = r => require.ensure([], () => r(require('@/views/pay/index')), 'index')
const compList = r => require.ensure([], () => r(require('@/views/pay/compList')), 'compList')
const applyList = r => require.ensure([], () => r(require('@/views/pay/applyList')), 'applyList')
const compProList = r => require.ensure([], () => r(require('@/views/pay/compProList')), 'compProList')
const exShare =  r => require.ensure([], () => r(require('@/views/pay/exShare')), 'exShare')
const exProduct =  r => require.ensure([], () => r(require('@/views/pay/exProduct')), 'exProduct')
const exSettle =  r => require.ensure([], () => r(require('@/views/pay/exSettle')), 'exSettle')
export default [
  {
    path: '/pay/index',
    name: 'payIndex',
    component: index,
    meta: {
      title: '服务说明'
    },
    children: []
  },
  {
    path: '/compList',
    name: 'compList',
    component: compList,
    meta: {
      title: '赔付列表'
    },
    children: []
  },
  {
    path: '/applyList',
    name: 'applyList',
    component: applyList,
    meta: {
      title: '申请赔付',
      keepAlive: true
    },
    children: []
  },
  {
    path: '/compProList',
    name: 'compProList',
    component: compProList,
    meta: {
      title: '选择商品'
    },
    children: []
  },
  {
    path: '/exShare',
    name: 'exShare',
    component: exShare,
    meta: {
      title: '申请赔付'
    },
    children: []
  },
  {
    path: '/exProduct',
    name: 'exProduct',
    component: exProduct,
    meta: {
      title: '商品页面截图示例'
    },
    children: []
  },
  {
    path: '/exSettle',
    name: 'exSettle',
    component: exSettle,
    meta: {
      title: '商品页面截图示例'
    },
    children: []
  }
]
