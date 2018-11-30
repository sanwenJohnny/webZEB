import dataFetch from '@/utils/request'

export default {
  async getFirstCategoryList (params) {
    return dataFetch('/mall/firstCategory', params)
  },
  async getFirstCategoryDetail (params) {
    return dataFetch('/mall/firstCategoryDetail', params)
  },
  async getBrandDetail (params) {
    return dataFetch('/mall/firstCategoryBrandDetail', params)
  },
  async getSecondCategoryList (params) {
    return dataFetch('/mall/secondCategory', params)
  },
  async getProductList (params) {
    return dataFetch('/mall/productMallList', params)
  }
}
