const index = r => require.ensure([], () => r(require('@/views/home/index')), 'home')

export default [
  {
    path: '/home',
    name: 'home',
    component: index,
    meta: {
      title: '斑马主页'
    },
    children: []
  }
]
