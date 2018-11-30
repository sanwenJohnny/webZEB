<template>
<div class="box" :class="{'bs-say-box':isShowtopBar}" v-cloak>
    <div class="summary bs-say-activity" v-if="oData.activitiesTip">
        <a :href="`/compose?id=${oData.activitiesTip.id}`">
            <span class="summary-img" v-lazy:background-image="oData.productImg"></span>
            <p><span style="width:90%">{{oData.activitiesTip.text}}<b>{{oData.activitiesTip.desc}}</b></span><i class="arrow"></i></p>
        </a>
    </div>
    <div class="summary bs-say-activity bs-say-product" v-if="!isLoad && !oData.activitiesTip">
        <a href="javascript:;">
            <span class="summary-img" v-lazy:background-image="oData.productImg"></span>
            <p><span>{{oData.productName}}</span><b>￥{{oData.salesPrice}}</b></p>
        </a>
    </div>
    <div class="sun-list" v-if="sayList.length" v-infinite-scroll="scrollpage" infinite-scroll-disabled="isLoad" infinite-scroll-distance="10">
        <div class="sun-product" v-for="(data,index) in sayList" :data-id="data.id" :key="index" ref="list">
            <div class="padding-wrap">
                <div class="sun-single">
                    <!--<img v-lazy="data.image" src="../hp/images/imgplace01.png" alt="" @click="goUrl('person.html?authorAccountId='+data.accountId)">-->
                    <span class="person-img" v-lazy:background-image="data.image" @click="goUrl('/fx/person?authorAccountId='+data.accountId)"></span>
                    <p style="width:80%;margin-top: 0.25rem;">
                        <span class="name">{{data.nickname}}</span>
                        <!-- <span class="time">{{data.createTime}}</span> -->
                    </p>
                </div>
                <!--  <h2><span class="notice-tip" v-show="data.isTop==1">置顶</span><span class="notice-tip" v-show="data.sourceType==2">小编推荐</span>{{data.title}}</h2> -->
                <p ref="reason" :class="[{'text-overflow':textOverflow[index]},'recommended-reason']" v-html="data.desc"
                    @click="goUrl('/fx/info?did='+data.id)"></p>
                <p class="look-all" v-show="isShow[index]" @click="lookall(index)">{{lookallText}}</p>
                <detailVideo :index="index" :poster="data.video.videoImg" :url="data.video.videoUrl" v-if="data.video"></detailVideo>
                <!-- <c-video :index="index" :url="data.video.videoUrl" :poster="data.video.videoImg" v-if="data.video!=null"></c-video> -->
                <div class="show-img one-img" v-else-if="data.imageList.length==1">
                    <img v-lazy="data.imageList[0].minUrl" alt="" style="max-width:100%"
                        v-if="Number(data.imageList[0].width) > Number(data.imageList[0].height)" @click="showLargeImg(0,data.imageList,data.desc,data.id)">
                    <img v-lazy="data.imageList[0].minUrl" alt="" :style="{maxWidth: Number(data.imageList[0].width)/Number(data.imageList[0].height)*320+'px',maxHeight:'320px'}"
                        @click="showLargeImg(0,data.imageList,data.desc,data.id)" v-else>
                </div>
                <div class="show-img more-img" v-else-if="data.imageList.length>1">
                    <span v-for="(imgdata,index) in data.imageList" :key="index" v-lazy:background-image="imgdata.minUrl" @click="showLargeImg(index,data.imageList,data.desc,data.id)"></span>
                    <!-- <img v-for="imgdata in data.imageList" v-lazy="imgdata.minUrl" src="images/imgplace01.png" alt="">     -->
                </div>
            </div>
            <div class="praise-comment display-flex">
                <p class="praise">
                    <span class="praise-num" @click="praiseClick(index,data.id)"><b :class="[{'active': data.isLike==1},'praise-icon']"></b>{{data.likeNumThs}}</span>
                </p>
                <!--<p class="comment">                    -->
                <!--<span class="comment-num" @click="goUrl('/fx/info?did='+data.id)"><b class="comment-icon"></b>{{data.commentNumThs}}</span>-->
                <!--</p>-->
                <p class="share">
                    <span class="share-num" @click="goUrl('/fx/info?did='+data.id+'&isShare=1')"><b class="share-icon"></b>{{data.shareNumThs}}</span>
                </p>
            </div>
            <div class="comment-list" v-if="data.commentNum!=0" @click="goUrl('/fx/info?did='+data.id+'&infotype=3')">
                <div v-for="(data,index) in data.commentList" :key="index"  v-if="index<3">
                    <p v-if="data.replyComment">
                        <b>{{data.nickname}}</b>
                        回复
                        <b>{{data.replyComment.nickname}}:</b>
                        <em v-html="data.desc"></em>
                    </p>
                    <p v-else>
                        <b>{{data.nickname}}:</b>
                        <em v-html="data.desc"></em>
                    </p>
                </div>
                <span v-if="data.commentNum>3" @click="goUrl('/fx/info?did='+data.id+'&infotype=3')">查看全部{{data.commentNumThs}}条评论</span>
            </div>
        </div>
    </div>
    <div class="nodata" v-if="choiceList.eidtList.length==0 && page == 1 && !isLoad">
        <p class="nodata-img"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAC0CAMAAACdQlHaAAABFFBMVEUAAAAAAAAAAACpqakAAAAAAAAAAABkZGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs7OwAAAAQEBCxsbEeHh4AAAAAAAAAAAAAAAD29vbd3d0HBwfKysqTk5M1NTVRUVEAAAAAAAAAAAAAAAAAAAAAAACWlpa0tLR8fHxzc3NxcXFQUFAAAAD///8AAADg4OD7+/u6urrm5ubs7Oz9/f3u7u709PQLCwv29vbo6Ojj4+NFRUUyMjLp6en19fWAgIB0dHQ/Pz+Li4vFxcVlZWU3NzeHh4eCgoJLS0s7Ozv4+Pjw8PChoaEXFxe5ublqampdXV0jIyMGBgYCMRFJAAAANnRSTlMAuszMvwuLv4DF++Tx6fbd1UMV+u3DdTEB7l3Sz8m5JA0F9uTc2sbBv7GjmmtUH+XQwsHAv6RU1xVFAAADJElEQVR42u3a6VIaQRSG4QOiUXBFXLOZfd8TDhhGxahJ3EhQjMv930empYABWYaWLnr6fO9f4MdTzNTXUzWEEEIIIdtiCxujRgADHHVwAmCABwDOWtIdgAEGGGCAAQY4bAADDDDAAAMMMMCDARe+m+3ENvBezmxFgAH2AxhggAEGGGCA/dwH5w3n2QbWKspPSyECGGCAAQYYYIABBlgL7OkUZbDO01IBYIABBhhggAEGGGCAb1b40X8bUQZrBTDAAAMMMMAAAwwwwHY0VHBxcxD1B/7Leo3a89qSBzDAAAPsLviAeZ/5dzZ8WwADDDDAQsGnhUEUIfCAAhhgyeAS8zHz+XbXCg6B/1yDj3Jd2wYYYIABtiSAXQeXqgePfNc8h8DiTloAAwwwwAC3A4+0byXbuY8jIftQUlXWw3TEXGY+3+ja5u3A3RrpyF25z4Yqa5y0zIPvpbhn9oLj7ct0BOdfJtXPQpZi1dluyI6H9g/HO4Gf3GXmTJwNZR34+aT6cIp7Zic41r5MJ/DjF8ycTKhrOhEL1QyrLndCtl8ul7TB+sU6gJ89ZebULDNPzVG4xln1Kxuygk+yB/x5mpkn1DX9IE1mwCc/e1U0Dw6O7/QCM88vLpMG2EAGwdXxnVW35MwSkfPg6vgm5pn52xq5D74e3yk1vpOrRO6DG+Mbf0jugwPjO/aI3Ac3j6/74C/B8TUDLvbTiUmwxvhqgL1coKGetFrH13lw/mt9fF+vkfvgT03jKwCcDIyvCLAaX66OrxBwfXyFgDXGV2+HN/rp1BS47fg6fNJK1MZXCpir4ysJrMZXEtgfX1Fgf3wlgdX4SgIvpkkWmAhggAHuBr5Y1+rQawGetnzhylawbjt7zeBDbsk1MJ/9EwZWbxMLA/NuThiYtypRAq/GtEska6KLzSbwZKw5q8C3aS5VE18eBsET5GrpVzXx1YEnAUz0dro+ydsiwLQ025hkEWAafROYZAlgoneZ+iRXRIDp/QLXkgGm5fGkLLCaZGFgf5KFgdUkCwP7kywM7E+yMLCaZGFgf5KFgdUkywKrSRYGpvQiIYQQQpHqP8KIlWbKrTC7AAAAAElFTkSuQmCC"
                alt=""></p>
        <p>暂无内容</p>
    </div>
    <!-- <p class="load" v-show="isLoad">正在加载中...</p> -->
    <p class="showall" v-if="!ismore && choiceList.eidtList.length !=0">已显示全部内容</p>
    <div class="mask" v-show="isMask"></div>
    <div class="protips" v-show="isShowTip"></div>
    <div class="mask-loading" v-if="loading"></div>

    <!--看大图-->
    <!-- <div class="swiper-container silde-large-img" v-show="isLargeImg" @click="hideLargeImg">
        <ul class="swiper-wrapper">
            <li class="swiper-slide t_c vertical-center-outer " v-for="list in largeImg">
                <span class="vertical-center">
                    <img class="swiper-lazy" :src="list.maxUrl">
                </span>
            </li>
        </ul>
        <div class="swiper-pagination img-fraction f-16"></div>
    </div> -->
    <div class="silde-large-img" v-show="isLargeImg" @click="hideLargeImg">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(slide,index) in largeImg" :key="index">
        <span>
          <img class="swiper-lazy position-middle" :src="slide.maxUrl">
        </span>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination img-fraction f-16"></div>
    </div>
    <div class="large-desc-mask" v-show="isLargeImg">
        <p class="large-img-desc mb-10 f-14" v-text="largeImgDesc"></p>
        <i class="ask-btn t_c f-12" @click="goUrl('/fx/info?did='+largeDid)">问口碑</i>
    </div>

</div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui'
import detailVideo from '@/components/video'
import api from '@/api/fx'
import auth from '@/utils/auth'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/css/fx.css'
export default {
  name: 'say',
  data () {
    return {
      choiceList: {
        accountId: '',
        isSelf: false,
        eidtList: [],
        // subscribeList:[],
        // subscribeTotalCount:0,
        reasonList: []
        // navType:1,
        // navHtml:'推荐'
      },
      imgIndex: 0,
      swiperOption: {
        loop: true,
        direction: 'horizontal',
        // initialSlide: this.imgIndex,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
          // clickable: true
        },
        observer: true,
        observeParents: true
      },
      oData: '',
      textOverflow: [],
      isShow: [],
      lookallText: '查看全文',
      page: 1,
      isLoad: true,
      ismore: 1,
      nIndex: 0,
      // beforePage: $('#turnpage').val(),
      i: 1,
      initScroll: true,
      isMask: false,
      isShowWin: false,
      isSureDelete: false,
      isShowTip: false,
      isClick: false,
      dynamicId: 0,
      sNavTop: 0,
      shareData: '',
      dynamicIndex: 0,
      isShowReportWin: false,
      cartCount: 0,
      // isShowTip: false,
      addLoading: false,
      loading: true,
      isLargeImg: false,
      largeImg: [],
      largeSwiper: '',
      largeImgDesc: '',
      largeDid: '',
      isShowtopBar: true,
      isScrollPosition: true
      // loading:false
    }
  },
  components: {
    swiper,
    swiperSlide,
    detailVideo
  },
  methods: {
    // 替换json中\n
    replaceBr (str) {
      var jsonStr = JSON.stringify(str).replace(/\\n/gi, '<br>')
      jsonStr = JSON.parse(jsonStr)
      return jsonStr
    },
    goUrl: function (url) {
      // e.preventDefault();
      // window.localStorage.setItem('data',JSON.stringify(this.choiceList));
      window.location.href = url
    },
    lookall: function (index) {
      if (this.textOverflow[index]) {
        this.$set(this.textOverflow, index, false)
        document.querySelector('.look-all')[index].innerHTML = '收起'
        // $(".look-all")
        //   .eq(index)
        //   .html("收起");
      } else {
        this.$set(this.textOverflow, index, true)
        document.querySelector('.look-all')[index].innerHTML = '查看全文'
        // $(".look-all")
        //   .eq(index)
        //   .html("查看全文");
      }
    },
    praiseClick: function (index, id) {
      // 点赞
      if (!auth.isLoggedIn()) {
        auth.login(this.$route.fullpath)
        return false
      }
      this.nIndex = index
      if (this.choiceList.eidtList[index].isLike == '1') {
        this.isGtePraise(id, 2)
      } else {
        this.isGtePraise(id, 1)
      }
    },
    showTip: function (html) {
      var _this = this
      this.isShowTip = true
      document.querySelector('.protips').innerHTML = html
      setTimeout(function () {
        _this.isShowTip = false
      }, 2000)
    },
    getlikenum () {
      // var _this = this,
      // let reg = /^\+?[1-9][0-9]*$/
      this.sayList.forEach((el, index) => {
        var nLikenum = el.likeNum
        this.getCompare(nLikenum, '点赞', index, 'likeNumThs')
      })
    },
    isGtePraise: function (id, type) {
      // 点赞
      // var _this = this
      if (this.isClick) return false
      this.isClick = true
      let data = {
        id: id,
        modelType: 1,
        opType: type
      }
      api.like(data).then(res => {
        if (res.status == '1') {
          this.isClick = false
          if (type == 2) {
            this.choiceList.eidtList[this.nIndex].isLike = false
            this.choiceList.eidtList[this.nIndex].likeNum--
          } else {
            this.choiceList.eidtList[this.nIndex].isLike = true
            this.choiceList.eidtList[this.nIndex].likeNum++
          }
          this.getlikenum()
        }
      })
    },
    scrollpage () {
      // 滚动加载分页数据
      if (this.ismore == 1) {
        this.isLoad = true
        this.page++
        setTimeout(() => {
          this.getChoiceData()
        }, 500)
      }
    },
    getChoiceData () {
      // 获取页面动态列表
      let data = {
        page: this.page,
        pageCount: 10,
        source: 2,
        saleGoodsId: this.$route.query.productId
      }
      api.bsSayList(data).then(res => {
        this.isLoad = false
        // this.loading = false;
        // this.status = data.status;
        if (res.status != 1) {
          return false
        }
        this.oData = res.data
        // this.choiceList.accountId=data.accountId;
        if (res.data.dynamicList && res.data.dynamicList.length) {
          this.choiceList.eidtList = this.choiceList.eidtList.concat(
            this.replaceBr(res.data.dynamicList)
          )
          // this.getRestData
          // this.getlikenum
          this.$nextTick(function () {
            var oReason = this.$refs.reason
            if (!oReason) return false
            oReason.forEach(function (el, index) {
              // console.log(el.style)
              let lingH = 22
              if (el.getBoundingClientRect().height > lingH * 6) {
                // this.textOverflow[index]=true;
                this.$set(this.textOverflow, index, true)
                this.isShow[index] = true
              }
            })
          })
        }
        let totalPgae = Math.ceil(res.data.totalCount / 10)
        if (this.page >= totalPgae) {
          this.ismore = 0
        } else {
          this.ismore = 1
        }
        // callback && callback(data);
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
      this.$set(this.choiceList.eidtList[index], name, result)
    },
    showLargeImg: function (index, imgArr, desc, did) {
      // 点击放大图
      this.imgIndex = index
      this.$refs.mySwiper.swiper.activeIndex = index
      // console.log(this.$refs.mySwiper.swiper)
      this.isLargeImg = true
      this.largeImg = imgArr
      this.largeImgDesc = desc
      this.largeDid = did
    },
    hideLargeImg: function () {
      var _this = this
      _this.isLargeImg = false
      _this.largeImg = []
      _this.largeImgDesc = ''
      _this.largeDid = ''
      // _this.largeSwiper.destroy(false);
    }
  },
  mounted: function () {
    // this.scrollFun();
    let startY, endY, swipeY
    let _this = this
    document.addEventListener('touchstart', function (e) {
      startY = e.touches[0].pageY
      swipeY = true
    })
    document.addEventListener('touchmove', function (e) {
      endY = e.touches[0].pageY
      if (!swipeY) return false
      // 上滑
      if (endY - startY < 0) {
        document.querySelector('.bs-say-activity').style.display = 'none'
        _this.isShowtopBar = false
      }
      if (endY - startY > 0) {
        document.querySelector('.bs-say-activity').style.display = 'block'
        _this.isShowtopBar = true
      }
      swipeY = false
    })
  },
  updated: function () {},
  watch: {
    oData () {
      // this.$nextTick(()=> {
      var oDiv = document.querySelector('.sun-product')
      // _this = this;
      console.log(oDiv)
      if (oDiv && oDiv.length > 0 && this.isScrollPosition) {
        let id = this.$route.query.id
        let bsList = this.choiceList.eidtList
        bsList.forEach(function (em, index) {
          if (em.id == id) {
            window.scroll(
              0,
              oDiv[index].offsetTop -
                  document.querySelector('.summary').offsetHeight
            )
            this.isScrollPosition = false
            return false
          }
        })
      }
      // });
    }
  },
  created: function () {
    // this.getCartNum();
    this.getChoiceData()
  },
  computed: {
    sayList () {
      // let list = this.choiceList.eidtList
      this.choiceList.eidtList.forEach((el, index) => {
        if (index >= (this.page - 1) * 10 && index < this.page * 10) {
          el.hotTopicList.forEach((em, index) => {
            var url = 'ggj://redirect/typeCommon/{"type":"26","id":' + em.id + '}'
            if (el.desc.indexOf(em.title) > -1) {
              if (this.isApp) {
                el.desc = el.desc.replaceAll(
                  em.title,
                  `<a href="${url}">${em.title}</a>`
                )
              } else {
                el.desc = el.desc.replaceAll(em.title, `<a href="/fx/topic?id=${em.id}">${em.title}</a>`)
                console.log(el.desc)
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
      return this.choiceList.eidtList
    }
    // getRestData: function () {
    //   var _this = this
    //   this.choiceList.eidtList.forEach(function (el, index) {
    //     el.desc = el.desc
    //     if (index >= (_this.page - 1) * 10 && index < _this.page * 10) {
    //       el.hotTopicList.forEach(function (em, index) {
    //         if (el.desc.indexOf(em.title) > -1) {
    //           el.desc = el.desc.replaceAll(
    //             em.title,
    //             '<a href="topicList.html?id=' + em.id + '">' + em.title + '</a>'
    //           )
    //         }
    //       })
    //     }

    //     var nCommentnum = el.commentNum,
    //       nSharenum = el.shareNum
    //     _this.getCompare(nCommentnum, '评论', index, 'commentNumThs')
    //     _this.getCompare(nSharenum, '分享', index, 'shareNumThs')
    //   })
    // },
    // getlikenum: function () {
    //   var _this = this,
    //     reg = /^\+?[1-9][0-9]*$/
    //   this.choiceList.eidtList.forEach(function (el, index) {
    //     var nLikenum = el.likeNum
    //     _this.getCompare(nLikenum, '点赞', index, 'likeNumThs')
    //   })
    // }
  }
}
</script>
