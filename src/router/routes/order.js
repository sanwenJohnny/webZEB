const order = r => require.ensure([], () => r(require('@/views/order/index')), 'order')
const orderDetail = r => require.ensure([], () => r(require('@/views/order/orderDetail')), 'order')
const orderSubmit = r => require.ensure([], () => r(require('@/views/order/submit/index')), 'order')
const logisticInfo = r => require.ensure([], () => r(require('@/views/order/logisticInfo')), 'logisticInfo')
const payCenter = r => require.ensure([], () => r(require('@/views/order/pay/payCenter')), 'order')
const payDetail = r => require.ensure([], () => r(require('@/views/order/pay/payDetail')), 'order')

// 调支付宝支付
const alipay = r => require.ensure([], () => r(require('@/views/order/pay/alipay')), 'order')

export default [
  {
    path: '/order',
    name: 'order',
    component: order,
    meta: {
      title: '我的订单',
      keepAlive: true
    }
  },
  {
    path: '/order/detail',
    name: 'orderDetail',
    component: orderDetail,
    meta: {
      title: '订单详情'
    }
  },
  {
    path: '/order/submit',
    name: 'orderSubmit',
    component: orderSubmit,
    meta: {
      title: '提交订单'
    }
  },
  {
    path: '/order/logisticInfo',
    name: 'logisticInfo',
    component: logisticInfo,
    meta: {
      title: '物流详情'
    }
  },
  {
    path: '/order/tradeCenter',
    name: 'payCenter',
    component: payCenter,
    meta: {
      title: '结算中心'
    }
  },
  {
    path: '/order/tradeDetail',
    name: 'payDetail',
    component: payDetail,
    meta: {
      title: '交易详情'
    }
  },
  {
    path: '/order/alipay',
    name: 'alipay',
    component: alipay,
  },
]
