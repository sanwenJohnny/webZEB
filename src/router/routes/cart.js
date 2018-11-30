const index = r => require.ensure([], () => r(require('@/views/cart/index')), 'cart')

export default [
  {
    path: '/cart',
    name: 'cart',
    component: index,
    meta: {
      title: '购物车'
      // keepAlive: true
    },
    children: []
  }
]
