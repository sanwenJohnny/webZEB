const index = r => require.ensure([], () => r(require('@/views/search/index')), 'search')

export default [
  {
    path: '/search',
    name: 'search',
    component: index,
    meta: {
      title: '搜索',
      keepAlive: true
    }
  }
]
