import { SKUPROPKEY } from '@/utils/constants'

export default {
  skuInfo: state => {
    return state.productDetail && state.productDetail.skuInfo
  },
  skuMap: state => {
    let map = new Map()
    if (state.productDetail && state.productDetail.skuInfo) {
      const products = state.productDetail.skuInfo.productList
      products.map(item => {
        map.set(item.propValueList.join(SKUPROPKEY), item)
      })
    }
    return map
  },
  bsData: state => {
    if (state.productDetail) {
      const data = { list: state.productDetail.bsSayList, count: state.productDetail.bsSayCount, isMore: state.productDetail.bsSayMore }
      return data
    } else {
      return null
    }
  },
  brandData: state => {
    if (state.productDetail) {
      const data = { list: state.productDetail.brandRecommendProducts, tip: state.productDetail.brandTip }
      return data
    } else {
      return null
    }
  },
  selectedPropStr: state => {
    if (state.productDetail && state.productDetail.skuInfo) {
      const list = state.productDetail.skuInfo.productList
      for (var i = 0; i < list.length; i++) {
        const item = list[i]
        if (item.saleUnitId + '' == state.productDetail.skuInfo.defaultId) {
          return item.propValueList.join('，')
        }
      }
      return ''
    } else {
      return ''
    }
  },
  promotionPro: state => {
    if (state.productDetail) {
      const _p = state.productDetail
      let pro = {
        lowPrice: _p.lowPrice,
        shareProfit: _p.shareProfit,
        highPrice: _p.highPrice,
        isMb: _p.isMb,
        isNewMember: _p.isNewMember,
        sellCountInfo: _p.sellCountInfo,
        //memberPrice: _p.memberPrice,
        memberProductType: _p.memberProductType
      }
      return pro
    }
    return undefined
  }
}
