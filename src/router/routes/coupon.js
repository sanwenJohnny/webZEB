const list = r => require.ensure([], () => r(require('@/views/coupon/list/index')), 'coupon')

export default [
  {
    path: '/coupon/list',
    name: 'couponList',
    component: list,
    meta: {
      title: '选择优惠券'
      // keepAlive: true
    },
    children: []
  }
]
