<style scoped lang="less">
#nav {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  #navLeft {
    float: left;
    width: 22%;
    li {
      text-align: center;
      height: 1.44rem;
      line-height: 1.44rem;
      word-break: break-all;
      color: #858585;
      font-size: 14px;
      overflow: hidden;
    }
    .cread {
      font-weight: bold;
      color: #000;
      background-color: #fff;
    }
  }
  #navRight {
    float: right;
    width: 78%;
    height: 100%;
    background-color: #fff;
    padding-top: 0.4rem;
    overflow: scroll;
    box-sizing: border-box;
    .wrap {
      width: 100%;
      .two {
        overflow: hidden;
        margin-bottom: 1.333rem;
      }
      .three {
        overflow: hidden;
        margin-bottom: 0.6777rem;
      }
      p {
        height: 0.72rem;
        line-height: 0.72rem;
        width: 100%;
        text-align: center;
        > span {
          display: inline-block;
          width: 8px;
          height: 1PX;
          background: #858585;
          vertical-align: middle;
        }
        > i {
          margin: 0 0.4rem;
          color: #858585;
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
        }
      }
      ul {
        width: 100%;
        padding: 0 4.7%;
        box-sizing: border-box;
        > li {
          width: 25%;
          float: left;
          padding: 0.3rem 4% 0;
          overflow: hidden;
          font-size: 13px;
          > a {
            color: #000;
            text-align: center;
            > span {
              min-height: 36px;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="nav" id="nav">
		<search />
  	<div class="navLeft" id="navLeft">
      <ul id="classify1">
	      <li :class="{'cread': selectedFirstCategoryIndex === index}" v-for="(item,index) in dFirstCateGoryList" :key="index" @click="handleIndexChange(index)">{{item.name}}</li>
	    </ul>
  	</div>
  	<div class="navRight" id="navRight">
  		<div class="wrap">
	      <div class="three" v-if="dFirstCateGoryDetail.secondCategoryList.length>0">
	      	<p><span></span><i>分类</i><span></span></p>
      		<ul class="secondCategory">
      			<li v-for="(item,index) in dFirstCateGoryDetail.secondCategoryList" :key="index">
      				<!-- <a href="" :style="{'backgroundImage: url('+item.image+')'}"></a> -->
      				<router-link :to="{ name: 'classifySc', query: { id: item.id,type: item.type,firstCatgoryId: item.firstCatgoryId }}">
	      				<img :src="item.image" />
	      				<span>{{item.name}}</span>
	      			</router-link>
      			</li>
      		</ul>
	      </div>
        <div class="two" v-if="dFirstCateGoryDetail.firstCategoryBrandList.length>0">
		      <p><span></span><i>热门品牌</i><span></span></p>
	      	<ul class="CategoryBrand">
	      		<li v-for="(item,index) in dFirstCateGoryDetail.firstCategoryBrandList" :key="index">
	      			<!-- <a href="" :style="{'backgroundImage: url('+item.image+')'}"></a> -->
	      			<router-link :to="{ name: 'classifyBd', query: { id: item.id }}">
		      			<img :src="item.image" />
		      			<span>{{item.name}}</span>
		      		</router-link>
	      		</li>
	      	</ul>
		    </div>
  		</div>
		</div>
  </div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
// import localstorage from '@/utils/storage-lite'
import search from './blocks/search'
import api from '@/api/shop-classify'
// import { Ganalytics } from '@/utils/ga'
export default {
  name: 'fl',
  computed: {
    // ...mapState('modSm', ['sFirstCateGoryList', 'sFirstCateGoryDetail'])
  },
  components: {
    search
  },
  data () {
    return {
      sFirstCateGoryList: [],
      sFirstCateGoryDetail: {},
      dFirstCateGoryList: [],
      selectedFirstCategoryIndex: 0,
      dFirstCateGoryDetail: {
        firstCategoryBrandList: [],
        secondCategoryList: []
      },
      ga: undefined
    }
  },
  mounted () {
    // this.ga = new Ganalytics({ targetType: '140', gpm: '140' })
    api.getFirstCategoryList().then(
      (res) => {
        this.dFirstCateGoryList = res.data.firstCategoryList
        this.firstCategoryDetail()
      },
      () => {
        console.log('服务器出错了')
      }
    )
  },
  methods: {
    // ...mapActions('modSm', [
    //   'firstCategoryListAction',
    //   'firstCategoryDetailAction'
    // ]),
    firstCategoryDetail () {
      const _category = this.dFirstCateGoryList[this.selectedFirstCategoryIndex]
     // console.log(_category.id)
      api.getFirstCategoryDetail({ id: _category.id }).then((res) => {
        this.dFirstCateGoryDetail = res.data
      })
    },
    handleIndexChange (index) {
      if (index != this.selectedFirstCategoryIndex) {
        this.selectedFirstCategoryIndex = index
        this.firstCategoryDetail()
      }
    }
  }
}
</script>
