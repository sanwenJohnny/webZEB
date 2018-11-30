import dataFetch from '@/utils/request'

export default {
  // 获取秒杀列表
  async getHotList () {
    return dataFetch('/member/home/hot')
  },

  // 会员首页信息
  async getUserInfoAndRights () {
    return dataFetch('/member/home/userInfoAndRights')
  },
  // 弹窗
  async getHomeBullet () {
    return dataFetch('/resource/homeBullet')
  }
}
