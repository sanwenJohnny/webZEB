<style lang="less" scoped>
.product-list {
  padding-top: 0.2rem;
  .wrap {
    overflow: hidden;
    .item {
      float: left;
      width: 47%;
      min-height: 7.8rem;
      margin: 0 0 2% 2%;
      background: #fff;
      > div {
        width: 100%;
        padding-top: 100%;
        font-size: 0;
        position: relative;
        > img {
          position: absolute;
          top: 0;
          width: 100%;
        }
        .mask {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
          position: absolute;
          top: 0;
          left: 0;
        }
        span {
          position: absolute;
          bottom: 0px;
          width: 100%;
          text-align: center;
          height: 0.45rem;
          line-height: 0.45rem;
          color: #fff;
          font-size: 13px;
          background: #797979;
        }
        .out {
          width: auto;
          font-size: 13px;
          padding: 4px;
          background-color: #000;
          font-weight: 800;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          -webkit-transform: translate3d(-50%, -50%, 0);
        }
        &:after {
          content: "";
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.03);
        }
      }
      > dl {
        > dt {
          padding: 0.3rem 0.2rem;
          min-height: 1rem;
          > p {
            > i {
              display: inline-block;
              min-width: 0.8rem;
              height: 0.4rem;
              line-height: 0.4rem;
              padding: 0 2px;
              border: 1px solid #f93939;
              vertical-align: middle;
              box-sizing: border-box;
              font-size: 8px;
              margin-right: 0.2rem;
              background-color: #fff0f0;
              color: #f93939;
            }
            height: 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 0.38rem;
          }
        }
        > dd {
          padding: 0 0.2rem;
          font-size: 0;
          display: flex;
          align-items: flex-end;
          > strong {
            color: #000;
            font-size: 16px;
            margin-right: 4px;
          }
          > del {
            color: #c2c2c2;
            font-size: 14px;
          }
        }
        .vip {
          > strong {
            color: #c59f51;
            font-size: 14px;
            line-height: 14px;
            margin: 0 2px 0 4px;
          }
          > span {
            color: #000;
            font-size: 16px;
            line-height: 16px;
          }
          > img {
            width: 28px;
          }
        }
      }
      .tags {
        padding: 0.2rem;
        > span {
          font-size: 10px;
          margin-right: 6px;
        }
        .type-1 {
          color: #f93939;
          border: 1px solid currentColor;
        }
        .type-2 {
          color: #fff;
          background-color: #f93939;
          border: 1px solid #f93939;
        }
      }
    }
  }
  > p {
    width: 100%;
    text-align: center;
    color: #000;
    padding: 0.2rem 0;
    font-size: 13px;
  }
  .nodata{
    padding:8px 0;
  }
}
</style>

<template>
	<div>
		<swiper-nav :nav-data="categoryList" :nav-fixed="false" :show-type="showType" :another-type="true" v-if="categoryList.length>0" />
		<filter-bar @filterCb="handleFilter" v-if="filter" />
	  <div class="product-list">
	  	<div class="wrap">
        <plist :list-data="list"></plist>
	  		<!-- <div class="item" v-for="(item,index) in list" :key="index" @click="handleLink(item.url)">
		  		<div>
		  			<img v-lazy="item.image" />
		  			<div class="mask" v-if="item.type==2 || item.type==3 || item.type==4"></div>
						<span v-if="item.type==2">还有机会</span>
						<span v-if="item.type==3">即将开抢</span>
						<span class="out" v-if="item.type==4">已抢完</span>
		  		</div>
		  		<dl>
		  			<dt>
		  				<p>
		  					<i v-for="(tag,i) in item.saleGoodsTagList" :key="i" :class="{'bg-FFF0F0':tag.type==2,'col-red':tag.type==1}">{{tag.tag}}</i>{{item.name}}
		  				</p>
		  			</dt>
		  			<dd v-if="isMember" class="vip">
		  				<span>&yen{{item.highPrice}}</span>
		  				<strong>&yen{{item.lowPrice}}</strong>
		  				<img :src="~images/vip-redicon.png" />
		  			</dd>
		  			<dd v-else>
		  				<strong>&yen{{item.lowPrice}}</strong>
		  				<del class="col-C2C2C2">&yen{{item.highPrice}}</del>
		  			</dd>
		  		</dl>
		  		<p class="tags" v-if="item.activityTagList.length>0">
		  			<span :key="i" :class="{'type-2':tag.type==2,'type-1':tag.type==1}" v-for="(tag,i) in item.activityTagList">{{tag.tag}}</span>
		  		</p>
		  	</div> -->
		  	<infinite-loading @infinite="infiniteHandler">
		  		<span slot="no-results" class="nodata">已显示全部内容</span>
		  		<span slot="no-more" class="nodata">已显示全部内容</span>
		  	</infinite-loading>
	  	</div>
	  </div>
	</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import filterBar from './filterBar'
import swiperNav from './swiperNav'
import api from '@/api/shop-classify'
import plist from '../../blocks/flowProList'
// import { mapState, mapActions } from 'vuex'
export default {
  name: 'product-list',
  components: {
    InfiniteLoading,
    filterBar,
    swiperNav,
    plist
  },
  data () {
    return {
      // vipIcon: require('~images/vip-redicon.png'),
      isMember: false,
      list: [],
      state: null,
      showType: 0,
      sProductListObj: {}
    }
  },
  computed: {
    // ...mapState('modSm', ['sProductListObj']),
    filterChange () {
      const { id, type, sequence, sequenceType } = this.params
      //console.log(id, type, sequence, sequenceType)
      return {
        id,
        type,
        sequence,
        sequenceType
      }
    }
  },
  props: {
    categoryList: {
      type: Array,
      default: () => []
    },
    params: {
      type: Object
    },
    filter: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // ...mapActions('modSm', ['productListAction']),
    infiniteHandler ($state) {
      // this.moreCb($state)
      let params = this.params
      let page = this.params.page
      this.state = $state
      api.getProductList(params).then((res) => {
        this.sProductListObj = res.data
        this.isMember = this.sProductListObj.isMember == 1
        // if(this.sProductListObj.productMallList.length === 0){
        this.list = this.list.concat(this.sProductListObj.productMallList)
        if (this.sProductListObj.totalCount === this.list.length) {
          $state.complete()
        } else {
          Object.assign(params, {
            page: ++page
          })
          $state.loaded()
        }
      })
    },
    handleFilter (type, direction) {
      this.params.sequence = type
      this.params.sequenceType = direction
      this.params.page = 1
    },
    handleLink (url) {
      location.href = url
    }
  },
  watch: {
    filterChange: {
      handler: function (newVal, oldVal) {
        if (oldVal.id !== null) {
          this.list = []
          this.infiniteHandler(this.state)
        }
      },
      deep: true
    },
    categoryList: {
      handler: function (newVal, oldVal) {
        if (newVal.length > 0) {
          const id = this.params.id
          let _index = newVal.findIndex(function (currentValue, index, arr) {
            return currentValue.id == id
          })
          this.showType = _index
        }
      }
    }
  },
  mounted () {}
}
</script>
