const shop = r => require.ensure([], () => r(require('@/views/shop/index')), 'shop')
const compose = r => require.ensure([], () => r(require('@/views/shop/compose/zuhe')), 'shop')
const ranklist = r => require.ensure([], () => r(require('@/views/shop/ranklist'), ranklist))

export default [
  {
    path: '/shop',
    name: 'shop',
    component: shop,
    meta: {
      title: '商城',
      keepAlive: true,
      shareType : 9
    }
  },
  {
    path: '/compose',
    name: 'compose',
    component: compose,
    meta: {
      title: '组合',
      keepAlive: true,
      shareType : 2
    }
  },
  {
    path: '/ranklist',
    name: 'ranklist',
    component: ranklist
  }

]
