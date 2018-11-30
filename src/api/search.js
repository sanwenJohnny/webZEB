import dataFetch from '@/utils/request'

export default {
  // 搜索列表
  async searchList (params) {
    return dataFetch('/search/do', params)
  },
  // 热门搜索
  async hotSearch (params) {
    return dataFetch('/search/hot', params)
  },
  // 获取输入匹配下拉列表
  async macthList (params) {
    return dataFetch('/search/associateWord', params)
  }
}
