const list = r => require.ensure([], () => r(require('@/views/address/list/index')), 'addresss')
const edit = r => require.ensure([], () => r(require('@/views/address/edit/index')), 'addresss')

export default [
  {
    path: '/address/manage',
    name: 'addressManage',
    component: list,
    meta: {
      title: '收货地址管理'
    }
  },
  {
    path: '/address/list',
    name: 'addressList',
    component: list,
    meta: {
      title: '选择收货地址'
      // keepAlive: true
    },
    children: []
  },
  {
    path: '/address/edit',
    name: 'addressEdit',
    component: edit,
    meta: {
      title: '修改收货地址'
      // keepAlive: true
    },
    children: []
  },
  {
    path: '/address/add',
    name: 'addressAdd',
    component: edit,
    meta: {
      title: '新增收货地址'
    }
  },


]
