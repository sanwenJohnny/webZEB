const personal = r => require.ensure([], () => r(require('@/views/personal/index')), 'order')
const collection = r => require.ensure([], () => r(require('@/views/personal/collection/index')), 'collection')
const similar = r => require.ensure([], () => r(require('@/views/personal/similar/index')), 'similar')
const discount = r => require.ensure([], () => r(require('@/views/personal/discount/index')), 'discount')
const gcoin = r => require.ensure([], () => r(require('@/views/personal/gcoin/index')), 'gcoin')
const explain = r => require.ensure([], () => r(require('@/views/personal/gcoin/explain/index')), 'explain')
const detail = r => require.ensure([], () => r(require('@/views/personal/gcoin/detail/index')), 'detail')
const redPocket = r => require.ensure([], () => r(require('@/views/personal/gcoin/redPocket/index')), 'redPocket')

export default [
  {
    path: '/personal',
    name: 'personal',
    component: personal,
    meta: {
      title: '斑马会员'
    }
  },
  {
    path: '/personal/collection',
    name: 'collection',
    component: collection,
    meta: {
      title: '我的收藏'
    }
  },
  {
    path: '/personal/similar',
    name: 'similar',
    component: similar,
    meta: {
      title: '找相似'
    }
  },
  {
    path: '/personal/discount',
    name: 'discount',
    component: discount,
    meta: {
      title: '我的优惠券'
    }
  },
  {
    path: '/personal/gcoin',
    name: 'gcoin',
    component: gcoin,
    meta: {
      title: 'G币'
    }
  },
  {
    path: '/personal/gcoin/explain',
    name: 'explain',
    component: explain,
    meta: {
      title: 'G币Q&A'
    }
  },
  {
    path: '/personal/gcoin/detail',
    name: 'detail',
    component: detail,
    meta: {
      title: 'G币明细'
    }
  },
  {
    path: '/personal/gcoin/redPocket',
    name: 'redPocket',
    component: redPocket,
    meta: {
      title: '斑马红包',
      shareType:40
    }
  }
]
