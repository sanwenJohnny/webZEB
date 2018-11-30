const index =  r => require.ensure([], () => r(require('@/views/recruit/index')), 'recruitIndex')
const recruitList = r => require.ensure([], () => r(require('@/views/recruit/list')), 'recruitList')
const recruitDetail = r => require.ensure([], () => r(require('@/views/recruit/detail')), 'recruitDetail')
const recruitResult = r => require.ensure([], () => r(require('@/views/recruit/recruitResult')), 'recruitResult')
export default [
  {
    path: '/recruit/index',
    name: 'recruitIndex',
    component: index,
    meta: {
      title: '斑马会员招募'
    }
  },
  {
    path: '/recruit/list', 
    name: 'recruitList',
    component: recruitList,
    meta: {
      title:'斑马会员招募',
      // keepAlive: true
    }           
  },
  {
    path: '/recruit/detail/:saleGoodsId',
    name: 'recruitDetail',
    component: recruitDetail,
    meta: {
      title:'斑马会员招募',
    }
  },
  {
    path: '/recruit/result',
    name: 'recruitResult',
    component: recruitResult,
    meta: {
      title:'斑马会员招募',
    }
  }
]