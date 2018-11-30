const tel = r => require.ensure([], () => r(require('@/views/tel/index')), 'tel')

export default [
  {
    path: '/tel',
    name: 'tel',
    component: tel,
    meta: {
      title: '话费充值'
    }
  }
]
