import dataFetch from '@/utils/request'

export default {
  /**
   * getHomeData 首页数据
   */
  async getHomeData (params) {
    return dataFetch('/homePage/homeList', params)
  },
  /**
   * getHomeData 首页超值热卖
   */
  getHomeHotData (params) {
    return dataFetch('/homePage/homeDetail', params)
  },
  /**
   * getHomeData 首页猜你喜欢
   */
  getHomeLikeData (params) {
    return dataFetch('/recommend/index', params)
  },
  /**
   * getHomeData 首页秒杀
   */
  getHotList (params) {
    return dataFetch('/hot/list', params)
  },
  /**
   * getHomeData 首页秒杀场次
   */
  getHot (params) {
    return dataFetch('/hot/index', params)
  },
  // 首页弹窗
  homeBullet (params) {
    return dataFetch('/resource/homeBullet', params)
  }
}
