<style lang="less" scoped>
.sun-list {
  overflow: hidden;
  background: #fff;
}
.praise-comment {
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: 750px;
  background: #fff;
  transform: translate(-50%, 0);
}
.zan-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  height: 32px;
  //line-height: 32px;
  padding: 10px;
  background: #fff;
}
.zan-info .zan-avatar {
  width: 0.8533333333rem;
  height: 0.8533333333rem;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  margin-right: -10px;
  background: url("https://yangege.b0.upaiyun.com/1794a971b4043.png") no-repeat
    center;
  background-size: cover;
}
.zan-info span {
  //height: 0.8533333333rem;
  padding-right: 10px;
}
.zan-info .zan-more {
  width: 0.8533333333rem;
  height: 0.8533333333rem;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  background: url("https://img.gegejia.com/product/c38d34bc99e7.png") no-repeat
    center;
  background-size: cover;
  margin-left: 10px;
}
.share-mask {
  position: fixed;
  z-index: 98;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1.6rem 0.64rem 0;
  box-sizing: border-box;
  background: url(~images/shop/arrow-line.png) no-repeat 92% 10px
    rgba(0, 0, 0, 0.5);
  background-size: auto 36px;
  text-align: right;
  color: #fff;
  font-size: 18px;
}
</style>

<template>
<div class="box body-auto info-box">
    <div class="sun-list" v-if="infoData">
        <div class="sun-product">
            <div class="padding-wrap">
                <div class="sun-single">
                    <span class="person-img" v-lazy:background-image="infoData.image" @click="goUrl('/fx/person?authorAccountId='+infoData.accountId)"></span>
                    <!-- <img v-lazy="infoData.image" src="../hp/images/imgplace01.png" alt="" @click="goUrl('person.html?authorAccountId='+infoData.accountId)"> -->
                    <p>
                        <span class="name">{{infoData.nickname}}</span>
                        <span class="time">{{infoData.createTime}}</span>
                    </p>
                    <div class="sun-single-right">
                        <span class="isornot-concern" v-show="infoData.subscribe == 0" @click="getConcern(infoData.accountId,1)"><b></b> 关注</span>
                        <span class="isornot-concern have-concern" v-show="infoData.subscribe == 1" @click="getConcern(infoData.accountId,0)">已关注</span>
                        <span class="report-icon" @click="showWindow(infoData.isSelf,infoData.id)"></span>
                    </div>
                </div>
                <h2>
                    {{infoData.title}}
                </h2>
                <p  class="recommended-reason" v-html="infoData.desc"></p>
                <detailVideo :index="1" :url="infoData.video.videoUrl" :poster="infoData.video.videoImg" v-if="infoData.video"></detailVideo>
                <div class="show-img one-img" v-else-if="infoData.imageList && infoData.imageList.length == 1">
                    <img v-lazy="infoData.imageList[0].minUrl" v-if="Number(infoData.imageList[0].width) > Number(infoData.imageList[0].height)" @click="showLargeImg(0,infoData.imageList)">
                    <img v-lazy="infoData.imageList[0].minUrl"  :style="{maxWidth: Number(infoData.imageList[0].width)/Number(infoData.imageList[0].height)*320+'px',maxHeight:'320px'}" v-else @click="showLargeImg(0)">
                </div>

                <div class="show-img more-img two-img" v-else-if="infoData.imageList.length == 2 || infoData.imageList.length == 4">
                    <span v-for="(imgdata,index) in infoData.imageList" :key="index" v-lazy:background-image="imgdata.minUrl" @click="showLargeImg(index,infoData.imageList)"></span>
                </div>

                <div class="show-img more-img" v-else>
                    <span v-for="(imgdata,index) in infoData.imageList" v-lazy:background-image="imgdata.minUrl" @click="showLargeImg(index,infoData.imageList)"></span>
                </div>

                <div class="summary summary-bg" v-if="infoData.displayList && infoData.displayList.length == 1">
                    <a :href="infoData.displayList[0].displayURL">
                        <span class="summary-img" v-lazy:background-image="infoData.displayList[0].displayImage"></span>
                        <p><span>{{infoData.displayList[0].displayName}}</span></p>
                    </a>
                </div>

                <div class="summary summary-swiper" v-if="infoData.displayList && infoData.displayList.length > 1">
                    <!-- <div class="swiper-wrapper">
                        <div class="swiper-slide summary-bg" v-for="data in infoData.displayList">
                            <a :href="data.displayURL">
                                <span class="summary-img" v-lazy:background-image="data.displayImage"></span>
                                <p><span>{{data.displayName}}</span></p>
                            </a>
                        </div>
                    </div> -->
                    <swiper :options="swiperProOption" ref="myProSwiper">
                        <swiper-slide v-for="(data,index) in infoData.displayList" :key="index" class="summary-bg">
                            <a :href="data.displayURL">
                                <span class="summary-img" v-lazy:background-image="data.displayImage"></span>
                                <p><span>{{data.displayName}}</span></p>
                            </a>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>

            <div class="praise-comment display-flex">
                <p class="praise">
                    <span class="praise-num" @click="praiseClick(infoData.id)"><b :class="[{'active': infoData.isLike==1},'praise-icon']"></b>{{infoData.likeNumThs}}</span>
                    <!-- <span class="praise-num" v-else  @click="praiseClick(infoData.id)">点赞</span> -->
                </p>
                <!--<p class="comment">-->
                    <!--<span class="comment-num" @click="commentTurn">-->
                        <!--<b class="comment-icon"></b>-->
                        <!--{{infoData.commentNumThs}}-->
                    <!--</span>-->
                <!--</p>-->
                <p class="share">
                    <span class="share-num" @click="isShareMask=true"><b class="share-icon"></b>{{infoData.shareNumThs}}</span>
                </p>
            </div>

        </div>

    </div>

    <!--相关商品-->
    <!-- <aside class="atricle-aside bg-000 col-fff t_c" @click="isShowProductFun()" v-if="productCount > 0">{{productCount}}个相关商品</aside> -->
    <!-- <div class="correlation-product bg-fff" v-if="isShowProduct">
        <h4 class="fw-n f-14">{{productCount}}个相关商品</h4>
        <div class="correlation-product-list">
            <ul class="product-box" v-for = "list in productList">
                <li class="clearfix" @click="goUrl('/ygg-hqbs/goods/'+list.productId+'?productSourceType='+list.productSourceType)">
                    <span class="product-tu left" v-lazy:background-image = "list.image" :class="{'status-mask':list.status != 1}">
                        <i v-if="list.status == 3">即将开始</i>
                        <i class="product-end" v-if="list.status == 2">还有机会</i>
                        <i class="product-end" v-if="list.status == 4">已抢完</i>
                    </span>
                    <div class="product-info">
                        <h2>{{list.name}}</h2>
                        <span class="product-price">
                            ￥{{list.lowPrice}}
                            <del class="col-888">￥{{list.marketPrice}}</del>
                        </span>
                    </div>
                </li>
                <li class="product-add t_c" v-bind:data-id="list.id" @click="addCart(list.id)" v-if="list.stockStatus == 1 && list.isSkuOrMember != 1">加入购物袋</li>
            </ul>
        </div>
    </div> -->

    <!-- <div class="mask-full" @click="isHideProductFun()" v-if="isShowProduct"></div> -->
    <div class="share-mask t_r f-18 col-fff" v-show="isShareMask" @click="isShareMask=false">
        点击此处，可通过微信进行分享
    </div>
    <div class="mask" v-show="isMask"></div>
    <div class="report-window" v-show="isShowWin">
        <p @click="isShowReportWin = true" v-if="!isSelf">举报</p>
        <p @click="sureDeleteFun()" v-if="isSelf">删除</p>
        <p @click="cancle()">取消</p>
    </div>
    <div class="report-window" v-show="isShowReportWin">
        <p @click="goReport(data.id)" v-for="data in reasonList" v-if="!isSelf">{{data.reason}}</p>
        <p @click="cancle()">取消</p>
    </div>
    <ul class="dialog-box" v-if="isSureDelete">
        <li class="dialog-info">
            {{dialogTxt}}
        </li>
        <li class="dialog-btn">
            <i class="col-888 dialog-cancel" @click="cancle()">取消</i>
            <i class="dialog-turn" @click="sureFun(funType)">确定</i>
        </li>
    </ul>
    <!-- <div class="protips" v-show="isShowTip"></div> -->

    <p class="zan-info">
        <span>{{infoData.likeNum}}人点赞</span>
        <!--<em class="zan-more right" v-if="infoData.likeNum > 6"></em>-->
        <span class="zan-right right t-r">
            <i class="zan-avatar right" v-for="(list,index) in zanData" v-lazy:background-image="list.image" title="list.nickname" v-if="index <=6"></i>
        </span>
    </p>
    <!--看大图-->
    <!-- <div class="swiper-container silde-large-img" v-show="isLargeImg" @click="isLargeImg = false">
        <ul class="swiper-wrapper">
            <li class="swiper-slide t_c vertical-center-outer " v-for="list in infoData.imageList">
                <span class="vertical-center">
                    <img  class="swiper-lazy" :data-src="list.maxUrl" src="https://yangege.b0.upaiyun.com/1794a971b4043.png">
                </span>
            </li>
        </ul>
    </div> -->
    <div class="silde-large-img">
    <swiper  :options="swiperOption" ref="mySwiper" v-show="isLargeImg" @click="hideLargeImg">
        <swiper-slide v-for="(slide,index) in infoData.imageList" :key="index">
            <span>
                <img  class="swiper-lazy position-middle" :src="slide.maxUrl">
            </span>
        </swiper-slide>
        <!-- <div class=" f-0 swiper-pagination" slot="pagination" v-if="largeImg.length > 1"></div> -->
    </swiper>
    </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
import detailVideo from '@/components/video'
import api from '@/api/fx'
import auth from '@/utils/auth'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/css/fx.css'

export default {
  name: 'info',
  data () {
    return {
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
      swiperProOption: {
        slidesPerView: 1.5,
        spaceBetween: 8,
        freeMode: true
      },
      accountId: '',
      isSelf: false,
      infoData: '',
      hotTopicList: [],
      reasonList: [],
      productList: [],
      productCount: 0,
      shareData: '',
      desc: '',
      isShow: [],
      ismore: 0,
      nIndex: 0,
      isMask: false,
      isShowWin: false,
      isShowReportWin: false,
      isSureDelete: false,
      isClick: false,
      // isShowProduct: false,
      likeNumThs: 0,
      dynamicId: 0,
      sNavTop: 0,
      dialogTxt: '确认删除',
      funType: 0,
      zanData: [],
      listData: [],
      page: 1,
      totalCount: 0,
      loading: false,
      isShareMask: false,
      isLargeImg: false,
      infoId: this.$route.query.did
    }
  },
  components: {
    swiper,
    swiperSlide,
    detailVideo
  },
  methods: {
    goUrl: function (url) {
      window.location.href = url
    },
    // 替换json中\n
    replaceBr (str) {
      var jsonStr = JSON.stringify(str).replace(/\\n/gi, '<br>')
      jsonStr = JSON.parse(jsonStr)
      return jsonStr
    },
    showTip (msg) {
      Toast({
        message: msg,
        position: 'center',
        duration: 3000
      })
    },
    praiseClick: function (id) {
      // 点赞
      if (this.infoData.isLike == '1') {
        this.isGtePraise(id, 2)
      } else {
        this.isGtePraise(id, 1)
      }
    },
    sureFun: function (type) {
      // 删除动态 type = 1,跳转对话框 type = 2 删除
      if (type == 1) {
        this.goUrl(
          'http://a.app.qq.com/o/simple.jsp?pkgname=com.globalscanner'
        )
      } else if (type == 2) {
        this.isSureDelete = false
        this.isMask = false
        let data = {
          dynamicId: this.dynamicId
        }
        api.delete(data).then(res => {
          if (res.status == 1) {
            this.showTip('删除成功')
            this.listData.splice(this.dynamicIndex, 1)
          } else {
            this.showTip('删除失败')
          }
        })
        // $.ajax({
        //   url: _linkHeader + "/dynamic/delete",
        //   data: { dynamicId: _this.dynamicId },
        //   type: "post",
        //   success: function(data) {
        //     if (data.status == 1) {
        //       showTipMsg("删除成功");
        //       window.history.back();
        //     } else {
        //       showTipMsg("删除失败");
        //     }
        //   }
        // });
      }
    },
    sureDeleteFun () {
      this.dialogTxt = '确认删除'
      this.isShowWin = false
      this.isSureDelete = true
      this.isMask = true
      this.funType = 2
    },
    showWindow (isSelf, id) {
      this.isShowWin = true
      this.isMask = true
      this.dynamicId = id
      if (isSelf == 1) {
        this.isSelf = true
      } else {
        this.getReason()
      }
    },
    cancle () {
      this.isShowWin = false
      this.isShowReportWin = false
      this.isSureDelete = false
      this.isMask = false
    },
    getConcern (id, type) {
      // 关注
      // var _this = this,
      //   _type = type;
      if (!auth.isLoggedIn()) {
        auth.login(this.$route.fullpath)
        return false
      }
      let data = { beAccountId: id, type: type }
      api.sb(data).then(res => {
        if (res.status == 1) {
          if (type == 0) {
            this.infoData.subscribe = 0
          } else {
            this.infoData.subscribe = 1
          }
        } else {
          this.showTip('关注失败')
        }
      })
    },
    getReason: function () {
      // 获取举报原因列表
      api.reportReason().then(res => {
        if (res.status == 1) {
          this.reasonList = res.data.reasonList
        }
      })
    },
    goReport (reasonid) {
      // 举报
      this.isShowReportWin = false
      this.isShowWin = false
      this.isMask = false

      let data = {
        dynamicId: this.dynamicId,
        reasonId: reasonid
      }
      api.report(data).then(res => {
        if (res.status == 1) {
          this.showTip('举报成功')
        } else {
          this.showTip('举报失败')
        }
      })
    },
    isGtePraise (id, type) {
      if (!auth.isLoggedIn()) {
        auth.login(this.$route.fullpath)
        return false
      }
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
            this.infoData.isLike = false
            this.infoData.likeNum--
          } else {
            this.infoData.isLike = true
            this.infoData.likeNum++
          }
          this.getlikenum()
          this.getZan()
        } else {
          this.showTip('点赞失败,请稍后再试')
        }
      })
    },
    testReplace () {
      this.hotTopicList.forEach((em, index) => {
        if (this.desc.indexOf(em.title) > -1) {
          this.desc = this.desc.replaceAll(
            em.title,
            `<a href="/fx/topic?id=${em.id}">${em.title}</a>`
          )
        }
      })
      this.infoData.desc = this.desc
      let nCommentnum = this.infoData.commentNum
      let nSharenum = this.infoData.shareNum
      this.getCompare(nCommentnum, '评论', 'commentNumThs')
      this.getCompare(nSharenum, '分享', 'shareNumThs')
    },
    getChoiceData (callback) {
      // var _this = this;
      let data = {
        did: this.infoId
      }
      api.dynamicDetail(data).then(res => {
        this.isLoad = false
        let data = res.data
        this.accountId = data.dynamicDetail.accountId
        if (res.status == 1) {
          this.infoData = data.dynamicDetail
          this.hotTopicList = data.dynamicDetail.hotTopicList
          this.desc = this.replaceBr(data.dynamicDetail.desc)

          if (data.dynamicDetail.productList) {
            this.productList = data.dynamicDetail.productList
            this.productCount = this.productList.length
          }
          this.shareData = data.shareData
          // this.zanData = data.dynamicDetail.likeUserList.reverse();
          this.testReplace()
          this.getlikenum()
        }
        this.getZan()
        callback && callback(data)
      })
    },
    commentTurn: function () {
      this.dialogTxt = '请打开或下载APP发表评论'
      this.isSureDelete = true
      this.isMask = true
      this.funType = 1
    },
    getZan () {
      let data = {
        dynamicId: this.infoId,
        page: 1,
        pageCount: 7
      }
      api.likeUsers(data).then(res => {
        this.zanData = res.data.likeUsers.reverse()
      })
      // var _this = this;
      // $.ajax({
      //   url: _zanUrl,
      //   type: "post",
      //   data: {
      //     dynamicId: _infoId,
      //     page: 1,
      //     pageCount: 6
      //   },
      //   success: function(data) {
      //     _this.zanData = data.likeUsers.reverse();
      //   }
      // });
    },
    getCompare: function (num, str, name) {
      var result
      if (num >= 10000) {
        result =
          num % 1000 < 100
            ? parseInt(num / 1000) + 'k'
            : (num / 1000).toFixed(1) + 'k'
      } else {
        result = num == 0 ? str : num
      }
      this.$set(this.infoData, name, result)
    },
    showLargeImg (index, imgArr) {
      // 点击放大图
      this.isLargeImg = true
      this.largeImg = imgArr
      this.$refs.mySwiper.swiper.activeIndex = index
    },
    hideLargeImg () {
      this.isLargeImg = false
      this.largeImg = []
    },
    getlikenum () {
      let nLikenum = this.infoData.likeNum
      this.getCompare(nLikenum, '点赞', 'likeNumThs')
    }
  },
  mounted: function () {
    if (this.$route.query.isShare) {
      this.isShareMask = true
    }
  },
  updated: function () {},
  created: function () {
    this.getChoiceData(() => {
      // brandShareFun(_this.shareData);
    })
  },
  computed: {
    // testReplace () {
    //   this.hotTopicList.forEach((em, index) => {
    //     if (this.desc.indexOf(em.title) > -1) {
    //       this.desc = this.desc.replaceAll(
    //         em.title,
    //         `<a href="/fx/topic?id=${em.id}">${em.title}</a>`
    //       )
    //     }
    //   })
    //   this.infoData.desc = this.desc
    //   let nCommentnum = this.infoData.commentNum,
    //     nSharenum = this.infoData.shareNum
    //   this.getCompare(nCommentnum, '评论', 'commentNumThs')
    //   this.getCompare(nSharenum, '分享', 'shareNumThs')
    // }
  }
}
</script>
