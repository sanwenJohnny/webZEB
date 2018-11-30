const login = r => require.ensure([], () => r(require('@/views/login/login')), 'login')
const AddrSelector = r => require.ensure([], () => r(require('@/views/login/addrSelector')), 'login')
const Introducer = r => require.ensure([], () => r(require('@/views/login/introducer')), 'login')
const Bound = r => require.ensure([], () => r(require('@/views/login/bound')), 'login')
// const login = r => require.ensure([], () => r(require('@/views/login/merge')), 'login')

export default [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '手机号登录'
    }
  },
  {
    path: '/login/selector',
    name: 'addrSelector',
    component: AddrSelector,
    meta: {
      keepAlive: true,
      title: '选择国家/地区'
    }
  },
  {
    path: '/login/introducer',
    name: 'introducer',
    component: Introducer,
    meta: {
      title: '请输入推荐人ID'
    }
  },
  {
    path: '/login/bound',
    name: 'bound',
    component: Bound,
    meta: {
      title: '绑定手机号'
    }
  }
]
