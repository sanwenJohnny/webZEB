const privacy = r => require.ensure([], () => r(require('@/views/doc/privacy')), 'privacy')
const service = r => require.ensure([], () => r(require('@/views/doc/service')), 'service')

export default [
  {
    path: '/doc/privacy',
    name: 'privacy',
    component: privacy
  },
  {
    path: '/doc/service',
    name: 'service',
    component: service
  }
]
