const zebraSay = r => require.ensure([], () => r(require('@/views/shop/fx/zebraSay')), 'fx')
const topicList = r => require.ensure([], () => r(require('@/views/shop/fx/topicList')), 'fx')
const person = r => require.ensure([], () => r(require('@/views/shop/fx/person')), 'fx')
const info = r => require.ensure([], () => r(require('@/views/shop/fx/info')), 'fx')
const hotList = r => require.ensure([], () => r(require('@/views/shop/fx/hotList')), 'fx')

export default [
  {
    path: '/fx/say',
    name: 'zebraSay',
    component: zebraSay,
    meta: {
      title: '斑马说',
      keepAlive: true
    }
  },
  {
    path: '/fx/topic',
    name: 'topicList',
    component: topicList,
    meta: {
      title: '斑马话题',
      //keepAlive: true,
      shareType: 21
    }
  },
  {
    path: '/fx/person',
    name: 'person',
    component: person,
    meta: {
      title: '个人主页',
      //keepAlive: true,
      shareType: 5
    }
  },
  {
    path: '/fx/info',
    name: 'info',
    component: info,
    meta: {
      title: '动态详情',
      //keepAlive: true,
      shareType: 0
    }
  },
  {
    path: '/fx/hotList',
    name: 'hotList',
    component: hotList,
    meta: {
      title: '热门话题',
      keepAlive: true,
      shareType: 21
    }
  }
]
