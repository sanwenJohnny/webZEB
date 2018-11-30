import dataFetch from '@/utils/request'

export default {
  //  斑马说
  async bsSayList (params) {
    return dataFetch('/dynamic/bsSayList', params)
  },
  // 点赞
  async like (params) {
    return dataFetch('/dynamic/like', params)
  },
  /// 话题列表
  async topicList (params) {
    return dataFetch('/dynamic/topicList', params)
  },
  /// 话题
  async topic (params) {
    return dataFetch('/dynamic/topic', params)
  },
  /// 举报
  async report (params) {
    return dataFetch('/dynamic/report', params)
  },
  /// 举报原因列表
  async reportReason (params) {
    return dataFetch('/dynamic/reportReason', params)
  },
  /// 关注
  async sb (params) {
    return dataFetch('/dynamic/sb', params)
  },
  /// 删除动态
  async delete (params) {
    return dataFetch('/dynamic/delete', params)
  },
  // 修改用户描述
  async updateUserDesc (params) {
    return dataFetch('/dynamic/updateUserDesc', params)
  },
  /// 动态详情
  async dynamicDetail (params) {
    return dataFetch('/dynamic/detail', params)
  },
  /// 个人信息
  async userInfo (params) {
    return dataFetch('/dynamic/userInfo', params)
  },
  // 个人中心动态
  async userDynamic (params) {
    return dataFetch('/dynamic/userDynamic', params)
  },
  // 用户点赞列表
  async likeUsers (params) {
    return dataFetch('/dynamic/likeUsers', params)
  },
  // 热门话题
  async hotTopic (params) {
    return dataFetch('/dynamic/hotTopic', params)
  }
}
