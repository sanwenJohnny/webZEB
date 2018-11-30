import dataFetch from '@/utils/request'

export default {
  /**
   * getHomeData 组合头部数据
   */
  async commonActivitiesList (params) {
    return dataFetch('/resource/commonActivitiesList', params)
  },
  // 组合列表
  composeList (params) {
    return dataFetch('/resource/commonActivitiesDetail', params)
  },
  // 用户信息
  accountInfo (params) {
    return dataFetch('/account/check', params)
  }
}
