const insurance = r => require.ensure([], () => r(require('@/views/insurance/index')), 'insurance')
const detail = r => require.ensure([], () => r(require('@/views/insurance/detail/index')), 'detail')
const submit = r => require.ensure([], () => r(require('@/views/insurance/submit/index')), 'submit')
const dealDetail = r => require.ensure([], () => r(require('@/views/insurance/deal-detail/index')), 'dealDetail')
const discount = r => require.ensure([], () => r(require('@/views/insurance/discount/index')), 'discount')

export default [
  {
    path: '/insurance',
    name: 'insurance',
    component: insurance,
    meta: {
      title: '我的保单',
      keepAlive: true
    }
  },
  {
    path: '/insurance/detail',
    name: 'detail',
    component: detail,
    meta: {
      title: '保单详情'
    }
  },
  {
    path: '/insurance/submit',
    name: 'submit',
    component: submit,
    meta: {
      title: '提交订单'
    }
  },
  {
    path: '/insurance/deal/detail',
    name: 'dealDetail',
    component: dealDetail,
    meta: {
      title: '交易详情'
    }
  },
  {
    path: '/insurance/discount',
    name: 'discount',
    component: discount,
    meta: {
      title: '选择优惠券'
    }
  }
]
