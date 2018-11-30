import types from './types'

export default {
  [types.GET_FIRST_CATEGORY_LIST] (state, payload) {
    state.sFirstCateGoryList = payload.data.firstCategoryList
  },
  [types.GET_FIRST_CATEGORY_DETAIL] (state, payload) {
    state.sFirstCateGoryDetail = payload.data
  },
  [types.GET_BRAND_DETAIL] (state, payload) {
    state.sBrandDetail = payload.data.brandDetail
  },
  [types.GET_SECOND_CATEGORY_LIST] (state, payload) {
    state.sSecondCateGoryList = payload.data.secondCategoryList
  },
  [types.GET_PRODUCT_LIST_OBJ] (state, payload) {
    state.sProductListObj = payload.data
  },
  // [types.GET_MORE_PRODUCT] (state, payload) {
  //   state.sMoreProduct = payload.data.productMallList
  // },
}
