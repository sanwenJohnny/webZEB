<template>
<div class="box" :class="{'pt-55':navType==1 && isShowBar}" v-infinite-scroll="scrollFun" infinite-scroll-disabled="isLoad" infinite-scroll-distance="10">
	<div class="topic-header" v-if="topData">
		<div class="topic-tlt" v-lazy:background-image="topData.image">
			<h1>{{topData.title}}<span>{{topData.dynamicNum}}条动态</span></h1>
			<p class="mask"></p>
		</div>
        <div class="topic-abstract-wrap" v-if="topData.desc">
		    <p class="topic-abstract" :class="{'topic-abstract-hidden':abstractMore}"><span v-if="topData.icon">活动</span>{{topData.desc}}</p>
		    <p class="abstract-more" v-show="isabstractMore" @click="abstractMoreFun()">查看更多</p>
        </div>
	</div>
	<div class="topic-nav">
		<p class="sort" @click="sortListShow($event)" v-if="navType==1">{{selectSortCon}}<em></em></p>
        <p class="sort" v-if="navType==2">综合排序</p>
		<div class="nav-list">
        	<p @click="selectNav(1)"><span :class="{selected:navType==1}">动态</span></p>
        	<p @click="selectNav(2)"><span :class="{selected:navType==2}">商品</span></p>
    	</div>
    	<ul class="sort-list" v-show="navType==1&&isShowSortList">
			<li @click="selectList(1,'综合排序')">综合排序</li>
			<li @click="selectList(2,'最新排序')">最新排序</li>
			<li @click="selectList(3,'热门排序')">热门排序</li>
    	</ul>
	</div>
  <fxList :list-data="topicList" v-show="topicList.length&&navType==1"></fxList>
  <div class="product-list" v-show="choiceList.productList.length&&navType==2">
    <proList :list-data="choiceList.productList" ></proList>
  </div>
  <div class="nodata" v-if="choiceList.topicList.length==0 && dtpage == 1 && !isLoad && navType==1">
      <p class="nodata-img"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAC0CAMAAACdQlHaAAABFFBMVEUAAAAAAAAAAACpqakAAAAAAAAAAABkZGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs7OwAAAAQEBCxsbEeHh4AAAAAAAAAAAAAAAD29vbd3d0HBwfKysqTk5M1NTVRUVEAAAAAAAAAAAAAAAAAAAAAAACWlpa0tLR8fHxzc3NxcXFQUFAAAAD///8AAADg4OD7+/u6urrm5ubs7Oz9/f3u7u709PQLCwv29vbo6Ojj4+NFRUUyMjLp6en19fWAgIB0dHQ/Pz+Li4vFxcVlZWU3NzeHh4eCgoJLS0s7Ozv4+Pjw8PChoaEXFxe5ublqampdXV0jIyMGBgYCMRFJAAAANnRSTlMAuszMvwuLv4DF++Tx6fbd1UMV+u3DdTEB7l3Sz8m5JA0F9uTc2sbBv7GjmmtUH+XQwsHAv6RU1xVFAAADJElEQVR42u3a6VIaQRSG4QOiUXBFXLOZfd8TDhhGxahJ3EhQjMv930empYABWYaWLnr6fO9f4MdTzNTXUzWEEEIIIdtiCxujRgADHHVwAmCABwDOWtIdgAEGGGCAAQY4bAADDDDAAAMMMMCDARe+m+3ENvBezmxFgAH2AxhggAEGGGCA/dwH5w3n2QbWKspPSyECGGCAAQYYYIABBlgL7OkUZbDO01IBYIABBhhggAEGGGCAb1b40X8bUQZrBTDAAAMMMMAAAwwwwHY0VHBxcxD1B/7Leo3a89qSBzDAAAPsLviAeZ/5dzZ8WwADDDDAQsGnhUEUIfCAAhhgyeAS8zHz+XbXCg6B/1yDj3Jd2wYYYIABtiSAXQeXqgePfNc8h8DiTloAAwwwwAC3A4+0byXbuY8jIftQUlXWw3TEXGY+3+ja5u3A3RrpyF25z4Yqa5y0zIPvpbhn9oLj7ct0BOdfJtXPQpZi1dluyI6H9g/HO4Gf3GXmTJwNZR34+aT6cIp7Zic41r5MJ/DjF8ycTKhrOhEL1QyrLndCtl8ul7TB+sU6gJ89ZebULDNPzVG4xln1Kxuygk+yB/x5mpkn1DX9IE1mwCc/e1U0Dw6O7/QCM88vLpMG2EAGwdXxnVW35MwSkfPg6vgm5pn52xq5D74e3yk1vpOrRO6DG+Mbf0jugwPjO/aI3Ac3j6/74C/B8TUDLvbTiUmwxvhqgL1coKGetFrH13lw/mt9fF+vkfvgT03jKwCcDIyvCLAaX66OrxBwfXyFgDXGV2+HN/rp1BS47fg6fNJK1MZXCpir4ysJrMZXEtgfX1Fgf3wlgdX4SgIvpkkWmAhggAHuBr5Y1+rQawGetnzhylawbjt7zeBDbsk1MJ/9EwZWbxMLA/NuThiYtypRAq/GtEska6KLzSbwZKw5q8C3aS5VE18eBsET5GrpVzXx1YEnAUz0dro+ydsiwLQ025hkEWAafROYZAlgoneZ+iRXRIDp/QLXkgGm5fGkLLCaZGFgf5KFgdUkCwP7kywM7E+yMLCaZGFgf5KFgdUkywKrSRYGpvQiIYQQQpHqP8KIlWbKrTC7AAAAAElFTkSuQmCC" alt=""></p>
      <p>暂无内容</p>
  </div>
  <div class="nodata" v-if="choiceList.productList.length==0 && productpage == 1 && !isLoad && navType==2">
      <p class="nodata-img"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAC0CAMAAACdQlHaAAABFFBMVEUAAAAAAAAAAACpqakAAAAAAAAAAABkZGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs7OwAAAAQEBCxsbEeHh4AAAAAAAAAAAAAAAD29vbd3d0HBwfKysqTk5M1NTVRUVEAAAAAAAAAAAAAAAAAAAAAAACWlpa0tLR8fHxzc3NxcXFQUFAAAAD///8AAADg4OD7+/u6urrm5ubs7Oz9/f3u7u709PQLCwv29vbo6Ojj4+NFRUUyMjLp6en19fWAgIB0dHQ/Pz+Li4vFxcVlZWU3NzeHh4eCgoJLS0s7Ozv4+Pjw8PChoaEXFxe5ublqampdXV0jIyMGBgYCMRFJAAAANnRSTlMAuszMvwuLv4DF++Tx6fbd1UMV+u3DdTEB7l3Sz8m5JA0F9uTc2sbBv7GjmmtUH+XQwsHAv6RU1xVFAAADJElEQVR42u3a6VIaQRSG4QOiUXBFXLOZfd8TDhhGxahJ3EhQjMv930empYABWYaWLnr6fO9f4MdTzNTXUzWEEEIIIdtiCxujRgADHHVwAmCABwDOWtIdgAEGGGCAAQY4bAADDDDAAAMMMMCDARe+m+3ENvBezmxFgAH2AxhggAEGGGCA/dwH5w3n2QbWKspPSyECGGCAAQYYYIABBlgL7OkUZbDO01IBYIABBhhggAEGGGCAb1b40X8bUQZrBTDAAAMMMMAAAwwwwHY0VHBxcxD1B/7Leo3a89qSBzDAAAPsLviAeZ/5dzZ8WwADDDDAQsGnhUEUIfCAAhhgyeAS8zHz+XbXCg6B/1yDj3Jd2wYYYIABtiSAXQeXqgePfNc8h8DiTloAAwwwwAC3A4+0byXbuY8jIftQUlXWw3TEXGY+3+ja5u3A3RrpyF25z4Yqa5y0zIPvpbhn9oLj7ct0BOdfJtXPQpZi1dluyI6H9g/HO4Gf3GXmTJwNZR34+aT6cIp7Zic41r5MJ/DjF8ycTKhrOhEL1QyrLndCtl8ul7TB+sU6gJ89ZebULDNPzVG4xln1Kxuygk+yB/x5mpkn1DX9IE1mwCc/e1U0Dw6O7/QCM88vLpMG2EAGwdXxnVW35MwSkfPg6vgm5pn52xq5D74e3yk1vpOrRO6DG+Mbf0jugwPjO/aI3Ac3j6/74C/B8TUDLvbTiUmwxvhqgL1coKGetFrH13lw/mt9fF+vkfvgT03jKwCcDIyvCLAaX66OrxBwfXyFgDXGV2+HN/rp1BS47fg6fNJK1MZXCpir4ysJrMZXEtgfX1Fgf3wlgdX4SgIvpkkWmAhggAHuBr5Y1+rQawGetnzhylawbjt7zeBDbsk1MJ/9EwZWbxMLA/NuThiYtypRAq/GtEska6KLzSbwZKw5q8C3aS5VE18eBsET5GrpVzXx1YEnAUz0dro+ydsiwLQ025hkEWAafROYZAlgoneZ+iRXRIDp/QLXkgGm5fGkLLCaZGFgf5KFgdUkCwP7kywM7E+yMLCaZGFgf5KFgdUkywKrSRYGpvQiIYQQQpHqP8KIlWbKrTC7AAAAAElFTkSuQmCC" alt=""></p>
      <p>暂无内容</p>
  </div>
  <p class="load" v-show="isLoad">正在加载中...</p>
  <p class="showall" v-if="dtIsmore && choiceList.topicList.length !=0 && navType==1">已显示全部内容</p>
  <p class="showall" v-if="productIsmore && choiceList.productList.length !=0&& navType==2">已显示全部内容</p>
  <div class="bottom-bar" v-show="isShowBar" @click="goUrl('http://a.app.qq.com/o/simple.jsp?pkgname=com.globalscanner')">参与话题</div>
</div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui'
import api from '@/api/fx'
// import auth from '@/utils/auth'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import '@/assets/css/fx.css'
import fxList from './blocks/fxList'
import proList from '../blocks/flowProList'
export default {
  name: 'box',
  data () {
    return {
      choiceList: {
        accountId: '',
        isSelf: false,
        topicList: [],
        productList: [],
        navType: 1
      },
      // isMember: "", //0 普通，1会员
      topData: '',
      dtpage: 0,
      productpage: 0,
      isLoad: false,
      ismore: 0,
      dtIsmore: 0,
      productIsmore: 0,
      abstractMore: false,
      isabstractMore: false,
      isShowSortList: false,
      navType: 1,
      productType: 1,
      dtType: 1,
      sortListType: 1,
      selectSortCon: '综合排序',
      shareData: '',
      topicId: this.$route.query.id,
      isShowBar:true
    }
  },
  components: {
    fxList,
    proList
  },
  methods: {
    // 替换json中\n
    replaceBr (str) {
      var jsonStr = JSON.stringify(str).replace(/\\n/gi, '<br>')
      jsonStr = JSON.parse(jsonStr)
      return jsonStr
    },
    goUrl: function (url) {
      window.location.href = url
    },
    selectNav: function (type) {
      if (this.navType == type) {
        return false
      }
      this.navType = type
      this.isShowSortList = false
      if (this.navType == 1) {
        if (this.choiceList.topicList.length == 0) {
          this.isLoad = true
          this.getChoiceData()
        }
      } else {
        if (this.choiceList.productList.length == 0) {
          this.isLoad = true
          this.getChoiceData()
        }
      }
    },
    selectList: function (type, con) {
      this.selectSortCon = con
      this.isShowSortList = false
      if (this.navType == 1) {
        this.dtpage = 1
        this.dtType = type
      } else {
        this.productpage = 1
        this.productType = type
      }
      this.isLoad = true
      this.ismore = 0
      this.choiceList.topicList = []
      this.getChoiceData()
    },
    abstractMoreFun: function () {
      var oDiv = document.querySelector('.abstract-more')
      if (this.abstractMore) {
        this.abstractMore = false
        oDiv.innerHTML = '收起'
      } else {
        this.abstractMore = true
        oDiv.innerHTML = '查看全文'
      }
    },
    sortListShow: function (e) {
      e.stopPropagation()
      this.isShowSortList = !this.isShowSortList
    },
    scrollFun: function () {
      // 滚动加载分页数据
      let ismore = 1
      if (this.navType == 1) {
        ismore = this.dtIsmore
      } else {
        ismore = this.productIsmore
      }
      if (ismore == 0 && !this.isLoad) {
        if (this.navType == 1) {
          this.dtpage += 1
        } else {
          this.productpage += 1
        }
        this.isLoad = true
        setTimeout(() => {
          this.getChoiceData()
        }, 500)
      }
    },
    gettopData: function (callback) {
      let data = {
        topicId: this.topicId
      }
      api.topic(data).then(res => {
        // if (!res.status) return false;
        let data = res.data
        this.topData = data
        this.shareData = data.shareData
        document.title = data.title
        callback && callback()
      })
    },
    getChoiceData () {
      let page, sortType
      if (this.navType == 1) {
        page = this.dtpage
        sortType = this.dtType
      } else {
        page = this.productpage
        sortType = this.productType
      }
      let data = {
        page: page,
        pageCount: 10,
        type: this.navType,
        sort: sortType,
        topicId: this.topicId
      }
      api.topicList(data).then(res => {
        // console.log(this.isLoad)
        if (res.status != 1) return false
        this.isLoad = false
        let data = res.data
        // this.isMember = data.isMember;
        this.choiceList.accountId = data.accountId
        if (data.productList && data.productList.length > 0) {
          this.choiceList.productList = this.choiceList.productList.concat(
            data.productList
          )
        }
        if (data.dynamicList && data.dynamicList.length) {
          this.choiceList.topicList = this.choiceList.topicList.concat(
            this.replaceBr(data.dynamicList)
          )
          // this.getRestData
          // this.getlikenum
        }
        if (this.navType == 1) {
          let totalPgae = Math.ceil(data.topicTotalCount / 10)
          if (page >= totalPgae) {
            this.dtIsmore = 1
          } else {
            this.dtIsmore = 0
          }
        } else {
          let totalPgae = Math.ceil(data.productTotalCount / 10)
          if (page >= totalPgae) {
            this.productIsmore = 1
          } else {
            this.productIsmore = 0
          }
        }
      })
    },
    getCompare: function (num, str, index, name) {
      var result
      if (num >= 10000) {
        result =
          num % 1000 < 100
            ? parseInt(num / 1000) + 'k'
            : (num / 1000).toFixed(1) + 'k'
      } else {
        result = num == 0 ? str : num
      }
      this.$set(this.choiceList.topicList[index], name, result)
    }
  },
  mounted: function () {
    this.scrollFun()
    let startY, endY, swipeY
    let self = this
    document.addEventListener('touchstart', function (e) {
      startY = e.touches[0].pageY
      swipeY = true
    })
    document.addEventListener('touchmove', function (e) {
      endY = e.touches[0].pageY
      if (!swipeY) return false
      // 下滑
      if (endY - startY < 0) {
        self.isShowBar = false
        //document.querySelector('.bottom-bar').style.display = 'none'
      }
      if (endY - startY > 0) {
        self.isShowBar = true
        //document.querySelector('.bottom-bar').style.display = 'block'
      }
      swipeY = false
    })
    var _this = this
    document.onclick = function () {
      _this.isShowSortList = false
    }
  },
  updated: function () {

  },
  created: function () {
    this.gettopData(() => {
      this.$nextTick(() => {
        if (!document.querySelector('.topic-abstract')) {
          return false
        }
        // let h = document.querySelector('.topic-abstract').offsetHeight
        if (document.querySelector('.topic-abstract').offsetHeight > 61) {
          this.abstractMore = true
          this.isabstractMore = true
        }
      })
      // brandShareFun(_this.shareData);
    })
    // this.getChoiceData();
  },
  computed: {
    topicList () {
      // let list = this.choiceList.eidtList
      this.choiceList.topicList.forEach((el, index) => {
        //console.log(el)
        if (index >= (this.dtpage - 1) * 10 && index < this.dtpage * 10) {
          el.hotTopicList.forEach((em, index) => {
            let url = 'ggj://redirect/typeCommon/{"type":"26","id":' + em.id + '}'
            if (el.desc.indexOf(em.title) > -1) {
              if (this.isApp) {
                el.desc = el.desc.replaceAll(
                  em.title,
                  `<a href="${url}">${em.title}</a>`
                )
              } else {
                el.desc = el.desc.replaceAll(em.title, `<a href="/fx/topic?id=${em.id}">${em.title}</a>`)
              }
            }
          })
        }
        let nCommentnum = el.commentNum
        let nLikenum = el.likeNum
        let nSharenum = el.shareNum
        this.getCompare(nCommentnum, '评论', index, 'commentNumThs')
        this.getCompare(nSharenum, '分享', index, 'shareNumThs')
        this.getCompare(nLikenum, '点赞', index, 'likeNumThs')
      })
      return this.choiceList.topicList
    }
    // getRestData () {
    //   var _this = this
    //   this.choiceList.topicList.forEach(function (el, index) {
    //     if (index >= (_this.dtpage - 1) * 10 && index < _this.dtpage * 10) {
    //       el.hotTopicList.forEach(function (em, index) {
    //         if (el.desc.indexOf(em.title) > -1) {
    //           el.desc = el.desc.replaceAll(em.title, `<a href="/fx/topic?id=${em.id}">${em.title}</a>`)
    //         }
    //       })
    //     }
    //     if (_this.choiceList.accountId == parseInt(el.accountId)) {
    //       _this.choiceList.topicList[index].isSelf = 1
    //     } else {
    //       _this.choiceList.topicList[index].isSelf = 0
    //     }
    //     var nCommentnum = el.commentNum,
    //       nSharenum = el.shareNum
    //     _this.getCompare(nCommentnum, '评论', index, 'commentNumThs')
    //     _this.getCompare(nSharenum, '分享', index, 'shareNumThs')
    //   })
    // },
    // getlikenum () {
    //   var _this = this,
    //     reg = /^\+?[1-9][0-9]*$/
    //   this.choiceList.topicList.forEach(function (el, index) {
    //     var nLikenum = el.likeNum
    //     _this.getCompare(nLikenum, '点赞', index, 'likeNumThs')
    //   })
    // }
  }
}
</script>
