import dataFetch from '@/utils/request'

export default {
  // 导航
  async rankIndex () {
    return dataFetch('/saleRank/index')
  },
  // 列表
  async salesRanking (params) {
    return dataFetch('/saleRank/salesRanking', params)
  }
}
