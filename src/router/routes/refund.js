const refund = r => require.ensure([], () => r(require('@/views/refund/refundList')), 'refund')
const refundDetail = r => require.ensure([], () => r(require('@/views/refund/refundDetail')), 'refundDetail')
const returnApply = r => require.ensure([], () => r(require('@/views/refund/returnApply')), 'returnApply')
const editRefundProducts = r => require.ensure([], () => r(require('@/views/refund/editRefundProducts')), 'editRefundProducts')
const delivery = r => require.ensure([], () => r(require('@/views/refund/delivery')), 'delivery')
const logistics = r => require.ensure([], () => r(require('@/views/refund/logistics')), 'logistics')
const selfHelpRefundList = r => require.ensure([], () => r(require('@/views/refund/selfHelpRefundList')), 'selfHelpRefundList')
const refundProgress = r => require.ensure([], () => r(require('@/views/refund/refundProgress')), 'refundProgress')
const complainApply = r => require.ensure([], () => r(require('@/views/refund/complainApply')), 'complainApply')
const complainDetail = r => require.ensure([], () => r(require('@/views/refund/complainDetail')), 'complainDetail')

export default [
  {
    path: '/refund',
    name: 'refund',
    component: refund,
    meta: {
      title: '退款售后'
    }
  },
  {
    path: '/refund/detail',
    name: 'refundDetail',
    component: refundDetail,
    meta: {
      title: '退款详情'
    }
  },
  {
    path: '/refund/apply',
    name: 'returnApply',
    component: returnApply,
    meta: {
      title: '退款申请'
    }
  },
  {
    path: '/refund/editRefundProducts',
    name: 'editRefundProducts',
    component: editRefundProducts,
    meta: {
      title: '批量编辑'
    }
  },
  {
    path: '/refund/delivery',
    name: 'delivery',
    component: delivery,
    meta: {
      title: '填写物流信息'
    }
  },
  {
    path: '/refund/logistics',
    name: 'logistics',
    component: logistics,
    meta: {
      title: '物流详情'
    }
  },
  {
    path: '/refund/self',
    name: 'selfHelpRefundList',
    component: selfHelpRefundList,
    meta: {
      title: '自助退款'
    }
  },
  {
    path: '/refund/progress',
    name: 'refundProgress',
    component: refundProgress,
    meta: {
      title: '退款进度'
    }
  },
  {
    path: '/complain/apply',
    name: 'complainApply',
    component: complainApply,
    meta: {
      title: '投诉申请'
    }
  },
  {
    path: '/complain/detail/:id',
    name: 'complainDetail',
    component: complainDetail,
    meta: {
      title: '投诉详情'
    }
  }
]
