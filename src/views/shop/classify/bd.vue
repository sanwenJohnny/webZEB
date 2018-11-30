<style scoped lang="less">
.brand-info-box {
  .bg-f0 {
    background-color: #fff;
    //margin-bottom: 0.2rem;
    padding-bottom: 0.2rem;
    > img {
      width: 100%;
      height: 4.8rem;
    }
    .title {
      display: flex;
      align-items: flex-end;
      margin-top: -1.33333rem;
      padding: 0 0.5rem;
      > img {
        width: 2.666667rem;
        height: 2.666667rem;
        margin-right: 0.4rem;
      }
      .name {
        flex: 1;
        font-size: 16px;
        padding-bottom: 0.3rem;
      }
      .national {
        display: flex;
        align-items: center;
        padding-bottom: 0.34rem;
        font-size: 13px;
        > img {
          width: 0.533333rem;
        }
      }
    }
    .desc {
      padding: 0 0.5rem;
      margin-top: 0.2rem;
      > p {
        height: 1.5rem;
        color: #888;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 0.33rem;
        font-size: 14px;
      }
      .showAll {
        display: block;
        height: auto;
      }
      > span {
        display: block;
        width: 100%;
        color: #333;
        text-align: right;
        font-size: 13px;
      }
    }
  }
}
</style>
<template>
  <div class="body-auto brand-info-box">
    <div class="bg-f0">
      <img :src="sBrandDetail.adImage" />
      <div class="title">
        <img :src="sBrandDetail.logoImage" />
        <span class="name">{{sBrandDetail.name}}</span>
        <span class="national">
          <img :src="sBrandDetail.countryImage" />{{sBrandDetail.chineseName}}
        </span>
      </div>
      <div class="desc">
        <p :class="{'showAll':showAll}">{{sBrandDetail.desc}}</p>
        <span @click="showAll=!showAll;">{{showAll?'收起':'查看更多'}}</span>
      </div>
    </div>
    <!-- <filter-bar @filterCb="handleFilter" /> -->
    <product-list :params="productListParams" />
	</div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
// import filterBar from '@/components/filterBar'
import productList from './blocks/productList'
import api from '@/api/shop-classify'
export default {
  name: 'bd',
  components: {
    // filterBar,
    productList
  },
  computed: {
    // ...mapState('modSm', ['sBrandDetail', 'sProductList'])
  },
  data () {
    return {
      showAll: false,
      productListParams: {
        id: null,
        type: 8,
        sequence: 1,
        sequenceType: 1,
        page: 1,
        pageCount: 10
      },
      sBrandDetail: {}
    }
  },
  mounted () {
    this.productListParams.id = this.$route.query.id
    api.getBrandDetail({
      id: this.productListParams.id
    }).then((res) => {
      this.sBrandDetail = res.data
      // this.getProductList(this.productListParams)
    })
  },
  methods: {
    // ...mapActions('modSm', ['brandDetailAction', 'productListAction'])
  }
}
</script>
