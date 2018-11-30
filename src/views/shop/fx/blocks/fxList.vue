<template>
<div>
    <div class="sun-list">
      <div class="sun-product" v-for="(data,index) in listData">
            <div class="padding-wrap">
                <div class="sun-single">
                    <span class="person-img" v-lazy:background-image="data.image" @click="goUrl('/fx/person?authorAccountId='+data.accountId)"></span>
                    <!-- <img v-lazy="data.image" src="../hp/images/imgplace01.png" alt="" @click="goUrl('person.html?authorAccountId='+data.accountId)"> -->
                    <p>
                        <span class="name">{{data.nickname}}</span>
                        <span class="time">{{data.createTime}}</span>
                    </p>
                    <div class="sun-single-right">
                        <!--<span class="isornot-concern" v-if="choiceList.navType!=3&&data.subscribe==0" @click="getConcern(index,data.accountId)"><b></b> 关注</span>-->
                        <!--<span class="isornot-concern have-concern" v-if="choiceList.navType!=3&&data.subscribe==1">已关注</span>-->
                        <span class="report-icon" @click="showWindow(data.isSelf,data.id,index,data.subscribe,data.accountId)"></span>
                    </div>
                </div>
                <h2><span class="notice-tip" v-show="data.isTop==1">置顶</span>{{data.title}}</h2>
                <p  ref="reason" :class="[{'text-overflow':textOverflow[index]},'recommended-reason']" v-html="data.desc" @click="goUrl('/fx/info?did='+data.id)"></p>
                <!--<p class="look-all"  v-show="isShow[index]" @click="goUrl('/fx/info?did='+data.id)">{{lookallText}}</p>-->
                <div class="show-img one-img" v-if="data.imageList.length==1">
                    <img v-lazy="data.imageList[0].minUrl" alt="" style="max-width:100%" v-if="Number(data.imageList[0].width) > Number(data.imageList[0].height)" @click="showLargeImg(0,data.imageList)">
                    <img v-lazy="data.imageList[0].minUrl" alt="" :style="{maxWidth: Number(data.imageList[0].width)/Number(data.imageList[0].height)*320+'px',maxHeight:'320px'}" @click="showLargeImg(0,data.imageList)" v-else>
                </div>
                <div class="show-img more-img" v-if="data.imageList.length>1">
                    <span v-for="(imgdata,index) in data.imageList" v-lazy:background-image="imgdata.minUrl" @click="showLargeImg(index,data.imageList)"></span>
                    <!-- <img v-for="imgdata in data.imageList" v-lazy="imgdata.minUrl" src="images/imgplace01.png" alt="">     -->
                </div>
               <div class="summary summary-bg" v-if="data.displayList&&data.displayList.length==1">
                    <a :href="data.displayList[0].displayURL">
                        <span class="summary-img" v-lazy:background-image="data.displayList[0].displayImage"></span>
                        <p><span>{{data.displayList[0].displayName}}</span></p>
                    </a>
                </div>
                <div class="summary summary-swiper" v-if="data.displayList&&data.displayList.length>1">
                    <!-- <div class="swiper-wrapper">
                        <div class="swiper-slide summary-bg" v-for="data in data.displayList">
                            <a :href="data.displayURL">
                                <span class="summary-img" v-lazy:background-image="data.displayImage"></span>
                                <p><span>{{data.displayName}}</span></p>
                            </a>
                        </div>
                    </div> -->
                    <swiper :options="swiperProOption" ref="myProSwiper">
                      <swiper-slide v-for="(data,index) in data.displayList" :key="index" class="summary-bg">
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
                <div v-for="(data,index) in data.commentList" v-if="index<3">
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
    <div class="mask" v-show="isMask"></div>
    <div class="report-window" v-show="isShowWin">
        <p v-if="choiceList.navType!=3&&subscribe==0" @click="cancle(),getConcern(1,concernAccountId)">关注</p>
        <!--<p v-if="choiceList.navType!=3&&subscribe==1" >已关注</p>-->
        <p @click="suregoReportFun()" v-if="!choiceList.isSelf">举报</p>
        <p @click="sureDeleteFun()" v-if="choiceList.isSelf">删除</p>
        <p @click="cancle()">取消</p>
    </div>
    <ul class="dialog-box" v-if="isSureDelete">
        <li class="dialog-info">
            确认删除
        </li>
        <li class="dialog-btn">
            <i class="col-888 dialog-cancel" @click="cancle()">取消</i>
            <i class="dialog-turn" @click="deleteDynamic()">确定</i>
        </li>
    </ul>
    <div class="report-window" v-show="isShowReportWin">
        <p @click="goReport(reason.id)" v-for="reason in choiceList.reasonList" v-if="!choiceList.isSelf">{{reason.reason}}</p>
        <p @click="cancle()">取消</p>
    </div>
  <!--看大图-->
  <div class="silde-large-img">
  <swiper :options="swiperOption" ref="mySwiper" v-show="isLargeImg" @click="hideLargeImg">
      <swiper-slide v-for="(slide,index) in largeImg" :key="index">
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
import api from '@/api/fx'
import auth from '@/utils/auth'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/css/fx.css'

export default {
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
      choiceList: {
        accountId: '',
        isSelf: false,
        reasonList: [],
        navType: 1
      },
      textOverflow: [],
      isShow: [],
      lookallText: '查看全文',
      nIndex: 0,
      isMask: false,
      isShowWin: false,
      isSureDelete: false,
      isShowTip: false,
      isClick: false,
      dynamicId: 0,
      isShowReportWin: false,
      subscribe: '',
      isLargeImg: false,
      largeImg: [],
      largeSwiper: ''
    }
  },
  props: ['listData'],
  components: {
    swiper,
    swiperSlide
  },
  computed: {

  },
  methods: {
    getlikenum () {
      // var _this = this,
      // let reg = /^\+?[1-9][0-9]*$/
      this.listData.forEach((el, index) => {
        var nLikenum = el.likeNum
        this.getCompare(nLikenum, '点赞', index, 'likeNumThs')
      })
    },
    goUrl (url) {
      this.$router.push({ path: url })
      // window.location.href = url;
    },
    lookall (index) {
      var oDiv = document.querySelector('.look-all')[index]
      if (this.textOverflow[index]) {
        this.$set(this.textOverflow, index, false)
        oDiv.innerHTML = '收起'
      } else {
        this.$set(this.textOverflow, index, true)
        oDiv.innerHTML = '查看全文'
      }
    },
    praiseClick (index, id) {
      // 点赞
      if (!auth.isLoggedIn()) {
        auth.login(this.$route.fullpath)
        return false
      }
      this.nIndex = index
      if (this.listData[index].isLike == '1') {
        this.isGtePraise(id, 2)
      } else {
        this.isGtePraise(id, 1)
      }
    },
    deleteDynamic () {
      // 删除动态
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
    },
    sureDeleteFun () {
      this.isShowWin = false
      this.isSureDelete = true
      this.isMask = true
    },
    showTip (msg) {
      Toast({
        message: msg,
        position: 'center',
        duration: 3000
      })
    },
    showWindow (isSelf, id, index, subscribe, accountId) {
      this.isShowWin = true
      this.isMask = true
      this.dynamicId = id
      this.dynamicIndex = index
      this.subscribe = subscribe
      this.concernAccountId = accountId

      if (isSelf == 1) {
        this.choiceList.isSelf = true
      } else {
        this.choiceList.isSelf = false
      }
    },
    suregoReportFun () {
      this.isShowWin = false
      this.isShowReportWin = true
      this.isMask = true
    },
    cancle () {
      this.isShowWin = false
      this.isSureDelete = false
      this.isShowReportWin = false
      this.isMask = false
    },
    getConcern (index, id) {
      // 去关注
      if (!auth.isLoggedIn()) {
        auth.login(this.$route.fullpath)
        return false
      }
      let _list = this.listData
      let data = { beAccountId: id, type: 1 }
      api.sb(data).then(res => {
        if (res.status == 1) {
          this.showTip('关注成功')
          for (var i = 0; i < _list.length; i++) {
            if ((_list[i].accountId = id)) {
              _list[i].subscribe = 1
            }
          }
        } else {
          this.showTip('关注失败')
        }
      })
    },
    getReason () {
      // 获取举报原因列表
      api.reportReason().then(res => {
        if (res.status == 1) {
          this.choiceList.reasonList = res.data.reasonList
        }
      })
    },
    goReport (reasonid) {
      // 举报
      this.isShowReportWin = false
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
            this.listData[this.nIndex].isLike = false
            this.listData[this.nIndex].likeNum--
          } else {
            this.listData[this.nIndex].isLike = true
            this.listData[this.nIndex].likeNum++
          }
          this.getlikenum()
        }
      })
    },
    getCompare (num, str, index, name) {
      var result
      if (num >= 10000) {
        result =
          num % 1000 < 100
            ? parseInt(num / 1000) + 'k'
            : (num / 1000).toFixed(1) + 'k'
      } else {
        result = num == 0 ? str : num
      }
      this.$set(this.listData[index], name, result)
    },
    showLargeImg (index, imgArr) {
      // 点击放大图
      // var _this = this;
      //console.log(imgArr)
      this.isLargeImg = true
      this.largeImg = imgArr
      this.$refs.mySwiper.swiper.activeIndex = index
    },
    hideLargeImg () {
      this.isLargeImg = false
      this.largeImg = []
    }
  },
  mounted () {
    var startY, endY, swipeY
    document.addEventListener('touchstart', function (e) {
      startY = e.touches[0].pageY
      swipeY = true
    })
    document.addEventListener('touchmove', function (e) {
      endY = e.touches[0].pageY
      if (!swipeY) return false
      // 下滑
      if (endY - startY < 0) {
        document.querySelector('.bottom-bar').style.display = 'none'
      }
      if (endY - startY > 0) {
        document.querySelector('.bottom-bar').style.display = 'block'
      }
      swipeY = false
    })
  },
  wtach: {
    listData () {
      this.$nextTick(function () {
        var oReason = this.$refs.reason
        if (!oReason) return false
        oReason.forEach(function (el, index) {
          var lingH = 22
          if (el.getBoundingClientRect().height > lingH * 6) {
            this.$set(this.textOverflow, index, true)
            this.isShow[index] = true
          }
        })
        let reasonDiv = this.$refs.reason
        //console.log(reasonDiv)
        reasonDiv.onclick = function (e) {
          e.stopPropagation()
        }
      })
    }
  },
  created () {
    this.getReason()
  },
  updated () {
    let aTag = document.querySelectorAll('.recommended-reason a')
    // let reasonDiv = this.$refs.reason
    aTag.forEach((el, index) => {
      el.onclick = function (e) {
        e.stopPropagation()
      }
    })
  }
}
</script>
