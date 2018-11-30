const index = r => require.ensure([], () => r(require('@/views/product/detail/index')), 'product')
const zizhi = r => require.ensure([], () => r(require('@/views/qualification/qualification')), 'product')

export default [
  {
    path: '/product/detail',
    name: 'productInfo',
    component: index,
    meta: {
      title: '商品详情页',
      shareType : 1
    }
  },
  {
    path: '/qualification',
    name: 'qualification',
    component: zizhi,
    meta: {
      title: '工商资质'
    }
  }
]
