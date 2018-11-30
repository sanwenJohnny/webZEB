<template>
	<div class="search-box">
		<div class="search-top">
      <span>
        <i class="search-tb"></i>
        <input type="search" placeholder="搜索喜欢的宝贝" id="search" v-model.trim="inputTxt" @keyup="getkeywordList($event)" @keyup.13="goSearch()">
        <span class="clearTxt" v-if="isClear" @click="clearTxt()"><img src="~images/clear.png" alt=""></span>
      </span>
      <em @click="goUrl('/shop')">取消</em>
	    </div>
	    <div class="dropdown-match" v-if="matchDropList && matchListData.length>0">
        <ul class="match-list">
          <li v-for="(data,index) in matchListData" :key="index" @click="btnSearch(data)">{{data}}</li>
        </ul>
	    </div>
	    <div class="search-label-box" v-if="searchLabel">
        <ul class="search-record mt-20 search-history" v-if="searchHistory">
            <li class="search-tit mb-15" v-if="storageInfo">搜索历史<span class="search-change history-del" v-if="storageInfo.length>0" @click="clearHistory()"><img src="~images/del.png" alt="">清空</span></li>
            <li class="search-label">
              <i v-for="(name,index) in storageInfo" :key="index" @click="btnSearch(name)">{{name}}</i>
            </li>
            <!-- <li class="search-clear t_c" v-if="storageInfo.length>0" @click="clearHistory()">清空历史记录</li> -->
        </ul>
        <p class="history-none" v-if="searchHistory&& storageInfo.length==0">搜索历史记录为空</p>
        <ul class="search-record">
            <li class="search-tit">热门推荐<span class="search-change" @click="batchClick()"><img src="~images/search_change.png" alt="">换一批</span></li>
            <li class="search-label search-hot">
              <template v-for="hot in hotWordData">
                <i v-if="hot.url" :class="{'redfont':hot.isHighlight==1}" @click="goUrl(hot.url)">{{hot.hotWord}}</i>
                <i v-else :class="{'redfont':hot.isHighlight==1}" @click="btnSearch(hot.searchWord)">{{hot.hotWord}}</i>
              </template>
            </li>
        </ul>
      </div>
      <div class="list-wrap" v-if="showList">
        <!-- <div class="associationTip" v-if="searchData.associationTip&&searchData.associationWords">
          <p>{{searchData.associationTip}}</p>
          <ul>
          <li v-for="data in searchData.associationWords">{{data}}</li>
          </ul>
          <p v-if="searchData.headTitle">为您推荐“<span>{{searchData.headWord}}</span>”的搜索结果：</p>
        </div> -->
        <div class="list-top" v-if="isShowNav">
          <i v-for="(navdata,index) in navCon" :key="index" :class="{'on':type==index,'search-price':index==2}" @click="navClick(index)">
            {{navdata}}
            <em v-if="index==2" :class="{'order':sort==2}"></em>
          </i>
        </div>
	    <div class="search-none" v-if="searchData.resultList.length==0 && searchData.recommendProducts && searchData.recommendProducts.length>0">
        <img src="~images/shop/nosearch.png" alt="">
        <p>抱歉，未找到“{{inputTxt}}”相关的商品</p>
        <h1><img src="~images/shop/tlt-icon.png" alt=""><span>为你推荐</span><img src="~images/shop/tlt-icon.png" alt=""></h1>
      </div>
      <div class="list-box" :class="{'pt-35':searchData.resultList.length>0}">
        <List :listData="dataList" v-if="dataList.length>0"></List>
			</div>
      <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading" v-if="searchData.totalCount>10">
        <span slot="no-more" class="nodata">已显示全部内容</span>
        <div slot="no-results" class="nodata list-empty">暂无数据</div>
      </infinite-loading>
		</div>
    <floatIcon v-if="showList"></floatIcon>
		<!-- <p class="loading" v-if="isLoading">努力加载中…</p> -->
		<!-- <p class="loading" v-if="!isLoading && page==totalPage">已加载全部相关商品</p> -->
	</div>
</template>
<script>
import List from '../shop/blocks/flowProList'
import InfiniteLoading from 'vue-infinite-loading'
import floatIcon from '@/components/floatIcon'
import '@/utils/ext'
import api from '@/api/search'
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      inputTxt: '',
      isClear: false,
      matchDropList: false,
      searchLabel: true,
      dataList: [],
      data: '',
      isMember: '',
      page: 1,
      type: 0,
      sequenceCondition: 0,
      sort: 1,
      navCon: ['默认', '销量', '价格'],
      searchHistory: true,
      storageInfo: [],
      showList: false,
      // matchListData:'',
      batchPage: 1,
      // batchData:'',
      isBottom: false,
      totalPage: 0,
      isShowNav: false,
      isLoading: false,
      hotWordData: '',
      matchListData: [],
      searchData: {
        resultList: [],
        recommendProducts: [],
        searchList: []
      },
      state: null
    }
  },
  computed: {
    // ...mapState('modSearch', [
    //   'searchData',
    //   'hotWordData',
    //   'matchListData',
    //   'isLoading'
    // ])
  },
  mounted () {
    // this.ga = new Ganalytics({ targetType: '193', gpm: '193' })
    this.localSearchInfo()
  },
  methods: {
    // ...mapActions('modSearch', ['getSearchList', 'getHotWord', 'getMatchList']),
    // ...mapMutations('modSearch', ['SearchList']),
    goUrl (url) {
      window.location.href = url
    },
    goSearch () {
      if (!this.inputTxt) return false
      this.searchLabel = false
      this.matchDropList = false
      if (this.storageInfo.indexOf(this.inputTxt) > -1) {
        this.storageInfo.remove(this.inputTxt)
      }
      this.storageInfo.unshift(this.inputTxt)
      localStorage.searchinfo = JSON.stringify(this.storageInfo)
      this.dataList = []
      let data = {
        resultList: [],
        recommendProducts: [],
        searchList: []
      }
      Object.assign(this.searchData, data)
      // this.SearchList(data)
      this.page = 1
      this.sequenceCondition = 0
      this.sort = 1
      this.type = 0
      // this.state.reset()
      // this.infiniteHandler($state)
      this.sendAjax()
    },
    sendAjax ($state) {
      let data = {
        page: this.page,
        pageCount: 10,
        sequenceCondition: this.sequenceCondition,
        sequenceType: this.sort,
        word: this.inputTxt
      }
      this.isLoading = true
      this.state = $state
      api.searchList(data).then((data) => {
        let res = data.data
        this.isLoading = false
        if (res.type == 3) {
          window.location.href = res.url
          return false
        }
        // if (res.status == 1) {
        Object.assign(this.searchData, res)
        console.log(this.searchData)
        if (res.resultList && res.resultList.length > 0) {
          this.searchData.searchList = this.searchData.searchList.concat(res.resultList)
        } else {
          this.searchData.searchList = this.searchData.searchList.concat(res.recommendProducts)
        }
        // }
        this.showList = true
        this.searchData.searchList.forEach((em, index) => {
          if (em.name.indexOf(this.inputTxt) > -1) {
            em.name = em.name.replaceAll(
              this.inputTxt,
              '<span rel="mark" style="color:red;">' + this.inputTxt + '</span>'
            )
          }
        })
        if (this.searchData.resultList.length > 0) {
          this.isShowNav = true
        } else {
          this.isShowNav = false
        }
        this.dataList = this.searchData.searchList
        this.isMember = this.searchData.isMember
        // this.totalPage = Math.ceil(this.searchData.totalCount / 10)

        if (this.page == 1) {
          this.totalPage = Math.ceil(this.searchData.totalCount / 10)
        }
        if (this.searchData.searchList) {
          this.page++
         // console.log($state)
          // this.orderList = this.orderList.concat(oData.orderList)
          $state && $state.loaded()
        } else {
          $state && $state.complete()
        }
        if (this.searchData.searchList.length >= res.totalCount) {
          $state && $state.complete()
        }
      })
    },
    infiniteHandler ($state) {
      this.sendAjax($state)
    },
    getkeywordList (event) {
      if (event.keyCode == 13) {
        return false
      }
      // if(this.inputTxt == '') {
      //   return false
      // }
      let data = {
        word: this.inputTxt
      }
      api.macthList(data).then((res) => {
        if (res.status == 1) {
          this.matchListData = res.data.associateWords
          this.matchDropList = true
        }
      })
    },
    async hotlist () {
      let data = {
        page: this.batchPage
      }
      const res = await api.hotSearch(data)
      if (res.status == 1) {
        this.hotWordData = res.data.hotList
      }
    },
    batchClick: function () {
      // 换一批
      this.batchPage++
      this.hotlist()
    },
    btnSearch (val) {
      this.inputTxt = val
      this.goSearch()
    },
    navClick (index) {
      if(index == this.type && index !=2) return false
      this.type = index
      this.sequenceCondition = index + 1
      if (index == 2) {
        this.sequenceCondition = index + 2
        this.sort = this.sort == 1 ? 2 : 1
      } else {
        this.sort = 1
      }
      this.page = 1
      this.dataList = []
      let data = {
        resultList: [],
        recommendProducts: [],
        searchList: []
      }
      Object.assign(this.searchData, data)
      // this.SearchList(data)
      // this.sendAjax()
    },
    localSearchInfo () {
      if (localStorage.searchinfo) {
        let storageInt = localStorage.searchinfo
        if (storageInt != '') {
          this.storageInfo = JSON.parse(localStorage.searchinfo)
        }
      }
    },
    clearHistory () {
      this.storageInfo = []
      localStorage.searchinfo = []
    },
    clearTxt () {
      this.matchDropList = false
      this.inputTxt = ''
    }
  },
  watch: {
    inputTxt: function (val) {
      if (val) {
        this.isClear = true
        this.searchLabel = false
        // this.getkeywordList();
      } else {
        this.searchLabel = true
        this.showList = false
        this.isClear = false
        this.matchDropList = false
      }
    },
    type (oldval, val) {
      // this.orderList = []
      if (this.state) {
        this.state.reset()
      } else {
        this.sendAjax()
      }
      // this.state && this.state.reset()
    },
    sort () {
      if (this.state) {
        this.state.reset()
      } else {
        this.sendAjax()
      }
      // this.state && this.state.reset()
    }
  },
  components: {
    List,
    InfiniteLoading,
    floatIcon
  },
  created () {
    this.hotlist()
  }
}
</script>
<style lang="less" scoped>
.pt-35 {
  padding-top: 35px;
}
.mt-20 {
  margin-top: 20px;
}
.loading {
  padding: 50px 0 20px 0;
  text-align:center;
}
.search-box {
  padding-top: 44px;
}
.search-top {
  position: fixed;
  left: 50%;
  top: 0;
  z-index: 101;
  transform: translate(-50%, 0);
  width: 100%;
  //max-width: 750px;
  padding: 8px 0;
  background: #fff;
  text-align:center;
  color:#1A1A1A;
  span {
    position: relative;
    width: 80%;
    height: 28px;
    background: #f5f5f5;
    border-radius: 4px;
  }
  .search-tb {
    width: 16px;
    height: 16px;
    background: url(~images/search_tb.png) no-repeat;
    background-size: contain;
    vertical-align: middle;
  }
  input {
    width: 85%;
    height: 28px;
    padding-left:8px;
    border: none;
    vertical-align: middle;
    -webkit-appearance: none;
    font-size: 14px;
    background:#f5f5f5;
  }
  .clearTxt {
    width: 14px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    position: absolute;
    top: 7px;
    right: 5px;
  }
  em {
    font-size:16px;
    color:#1a1a1a;
    margin-left: 15px;
    vertical-align: middle;
  }
}

.search-label-box {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 44px;
  width: 100%;
  height: 100%;
  padding-top: 4.8%;
  //background: #fff;
  .history-none {
    color: #858585;
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
  }
}
.search-record {
  padding: 0 2.67%;
}
.search-record + .search-record {
  padding-top: 4.8%;
  //border-top: 1px solid #e0e0e0;
}
.search-tit {
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #1E1E1E;
  font-size:16px;
  .search-change {
    display:flex;
    align-items: center;
    font-size: 14px;
    color: #999;
    img {
      width: 10px;
      height: 10px;
      margin-right: 3px;
    }
  }
  .history-del img{
    width:16px;
    height:16px;
  }
}
.search-label {
  font-size: 0;
  max-height: 104px;
  overflow: hidden;
  i {
    //min-width: 53px;
    //max-width: 100%;
    height: 28px;
    line-height: 28px;
    padding: 0 10px;
    box-sizing: border-box;
    background: #fff;
    color: #333;
    margin: 0 10px 10px 0;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
  }
  .history-none {
    color: #858585;
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
  }
}
.search-clear {
  width: 30%;
  height: 30px;
  line-height: 30px;
  margin: 30px auto;
}
.search-label .redfont {
  color: #F42B52;
}
.dropdown-match {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 44px;
  z-index: 10;
  background: #fff;
  overflow-y:auto;
  .match-list {
    //margin-left: 5.34%;
    padding:0 15px;
    li {
      padding: 15px 0;
      border-bottom: 1px solid #e0e0e0;
    }
  }
}
// .no-result,
// .search-none {
//   background: #fff;
//   padding: 0 0 3.733% 5.33%;
//   overflow: hidden;
//   margin-bottom: 5px;
// }
// .no-result {
//   p {
//     font-size: 14px;
//     color: #858585;
//     margin-top: 4.8%;
//     span {
//       color: #000;
//     }
//   }
//   .search-label {
//     margin-top: 3.467%;
//     i {
//       border: 1px solid #e0e0e0;
//     }
//   }
// }
.search-none {
  text-align:center;
  //padding-top: 6.4%;
  p {
    margin-top:8px;
    padding:0 15px;
    font-size: 14px;
    color: #b2b2b2;
    //text-align:center;
  }
  > img{
    width:202px;
    margin-top:30px;
    //margin: 0 auto;
  }
  h1{
    margin:30px 0 10px 0;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size:17px;
    color:#1a1a1a;
    img{
      width:4px;
      height:6px;
    }
    span{
      margin:0 5px;
    }
  }
  
}
.search-list-box {
  padding-top: 44px;
  overflow: hidden;
}
.list-top {
  position: fixed;
  z-index: 6;
  left: 0;
  top: 44px;
  width: 100%;
  max-width: 375px;
  height: 34px;
  line-height: 34px;
  background: #fff;
  font-size: 0;
  border-bottom: 1px solid #e0e0e0;
  color: #B2B2B2;
  text-align:center;
}
.list-top i {
  width: 33%;
  box-sizing: border-box;
  font-size: 14px;
  vertical-align: top;
}
.list-top i + i:before {
  content: "";
  float: left;
  width: 1px;
  height: 18px;
  margin-top: 8px;
  //border-left: 1px solid #e0e0e0;
}
.list-top .on {
  font-weight: bold;
  color: #000;
}
.search-price {
  em {
    vertical-align: middle;
    &:before,
    &:after {
      content: "";
      display: block;
      width: 0;
      border: 4px solid transparent;
      border-bottom-color: #999;
    }
    &:after {
      border-top-color: #999;
      border-bottom-color: transparent;
      margin-top: 2px;
    }
  }
  .order:before {
    border-bottom-color: #333;
  }
}
.search-price.on em:after {
  border-top-color: #333;
}
.search-price.on .order:after {
  border-top-color: #999;
  border-bottom-color: transparent;
}
.list-box{
  margin-top:10px;
}
.nodata{
  padding:10px 0;
}
</style>
