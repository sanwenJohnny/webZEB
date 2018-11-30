import dataFetch from '@/utils/request'

export default {
  //商品列表
  async getRecruitList (params) {
    return dataFetch('/cpsAccount/getRecruitList', params)
  },
  //商品详情页
  async getDetail(params){
    return dataFetch('/recruit/goods/productDetail',params);
  },
  //获取推荐人
  async getRecommendInfo(params){
    return dataFetch('/cpsAccount/getRecommendInfo',params);
  },
  //更改推荐人
  async editRecommend(params){
    return dataFetch('/cpsAccount/editRecommend',params)
  },
  //确认订单
  async confirmOrder (params){
    return dataFetch('/cpsAccount/confirm',params)
  },
  //下单
  async getAddOrder(params){
    return dataFetch('/cpsAccount/addOrder',params)
  },
  //落地页商品列表
  async getFallList(){
    return dataFetch('/cpsAccount/getFallList');
  },
  //落地页二维码
  async getWxInfo() {
    return dataFetch('/cpsAccount/getWxInfo')
  }  
}
