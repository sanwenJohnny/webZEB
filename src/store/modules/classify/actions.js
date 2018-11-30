import types from './types'
import service from '@/service/service-sm'

export default {
  firstCategoryListAction ({commit}, options) {
    return service.getFirstCategoryList(options).then((data) => {
      commit(types.GET_FIRST_CATEGORY_LIST, { data: data })
    })
  },
  firstCategoryDetailAction ({commit}, options) {
    return service.getFirstCategoryDetail(options).then((data) => {
      commit(types.GET_FIRST_CATEGORY_DETAIL, { data: data })
    })
  },
  brandDetailAction ({commit}, options) {
    return service.getBrandDetail(options).then((data) => {
      commit(types.GET_BRAND_DETAIL, { data: data })
    })
  },
  secondCategoryListAction ({commit}, options) {
    return service.getSecondCategoryList(options).then((data) => {
      commit(types.GET_SECOND_CATEGORY_LIST, { data: data })
    })
  },
  productListAction ({commit}, options) {
    return service.getProductList(options).then((data) => {
      commit(types.GET_PRODUCT_LIST_OBJ, { data: data })
    })
  },
  // moreProductListAction ({commit}, options) {
  //   return service.getProductList(options).then((data) => {
  //     commit(types.GET_MORE_PRODUCT, { data: data })
  //   })
  // },
}
