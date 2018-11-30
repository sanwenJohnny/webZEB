const classify = r => require.ensure([], () => r(require('@/views/shop/classify/fl')), 'classify') // 分类主页面
const classifyBd = r => require.ensure([], () => r(require('@/views/shop/classify/bd')), 'classify') // 热门品牌
const classifySc = r => require.ensure([], () => r(require('@/views/shop/classify/sc')), 'classify') // 热门分类

export default [
  {
    path: '/shop/classify',
    name: 'classify',
    component: classify,
    meta:{
      keepAlive : true,
      title: '分类',
      shareType: 10
    }
  },
  {
    path: '/shop/classify/bd',
    name: 'classifyBd',
    component: classifyBd,
    meta:{
      keepAlive : true,
      title: '品牌',
      shareType: 4
    }
  },
  {
    path: '/shop/classify/sc',
    name: 'classifySc',
    component: classifySc,
    meta:{
      keepAlive : true,
      title: '分类',
      shareType: 11
    }
  }
]
