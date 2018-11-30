const list = r => require.ensure([], () => r(require('@/views/certificate/list/index')), 'certificate')
const edit = r => require.ensure([], () => r(require('@/views/certificate/edit/index')), 'certificate')

export default [
  {
    path: '/certificate/manage',
    name: 'certificateManage',
    component: list,
    meta: {
      title: '实名认证管理'
    }
  },
  {
    path: '/certificate/list',
    name: 'certificateList',
    component: list,
    meta: {
      title: '选择实名认证'
    }
  },
  {
    path: '/certificate/edit',
    name: 'certificateEdit',
    component: edit,
    meta: {
      title: '修改实名信息'
    }
  },
  {
    path: '/certificate/add',
    name: 'certificateAdd',
    component: edit,
    meta: {
      title: '新增实名信息'
    }
  },


]
