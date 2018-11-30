<template>
  <div class="sc-wrap">
    <!-- <swiper-nav :nav-data="sSecondCateGoryList" /> -->
    <product-list :params="productListParams" :categoryList="sSecondCateGoryList" />
  </div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
// import swiperNav from './blocks/swiperNav'
import productList from './blocks/productList'
import api from '@/api/shop-classify'
export default {
  name: 'sc',
  components: {
    // filterBar,
    productList
    // swiperNav
  },
  computed: {
    // ...mapState('modSm', ['sSecondCateGoryList', 'sProductList'])
  },
  data () {
    return {
      fId: null,
      dProductList: [],
      sSecondCateGoryList: [],
      productListParams: {
        id: null,
        type: null,
        sequence: 1,
        sequenceType: 1,
        page: 1,
        pageCount: 10
      }
    }
  },
  mounted () {
    this.productListParams.id = this.$route.query.id
    this.productListParams.type = this.$route.query.type
    this.fId = this.$route.query.firstCatgoryId
    api.getSecondCategoryList({
      // id: this.productListParams.id
      // type: this.productListParams.type,
      id: this.fId
    }).then((res) => {
      this.sSecondCateGoryList = res.data.secondCategoryList
      // this.getProductList()
    })
  },
  methods: {
    // ...mapActions('modSm', ['secondCategoryListAction', 'productListAction']),
    // getProductList($state) {
    //   let params = this.productListParams
    //   let page = this.productListParams.page
    //   this.productListAction({params}).then(()=>{
    //     if(this.sProductList.length === 0){
    //       $state.complete()
    //     }else{
    //       this.dProductList = this.dProductList.concat(this.sProductList)
    //       Object.assign(params,{
    //         page: ++page
    //       })
    //       $state.loaded()
    //     }
    //   })
    // },
    handleFilter (type, direction) {
      this.productListParams.sequence = type
      this.productListParams.sequenceType = direction
      this.productListParams.page = 1
      this.dProductList = []
    }
  }
}
</script>
