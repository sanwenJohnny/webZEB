<style lang="less" scoped>
.personal-wrapper {
  padding-bottom: 50px;
  font-family: "PingFangSC", "Noto Sans CJK SC", "Helvetica Neue", Helvetica, "Microsoft YaHei", Tahoma, Arial, sans-serif;
  .person-content {
    width: 100%;
    height: 322px;
    background-color: aqua;
    background-image: url("../../assets/image/personal/personal-bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    .avater {
      width: 98px;
      margin: 0 auto;
      padding-top: 17px;
      position: relative;
      .avater-img {
        width: 90px;
        height: 90px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
        border-radius: 90px;
      }
      .avater-vip-img {
        position: absolute;
        bottom: -3px;
        left: 50%;
        margin-left: -15px;
        width: 30px;
        height: 12px;
      }
    }
    .middle {
      margin-top: 20px;
      text-align: center;
      height: 46px;
      .middle-name {
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #ffffff;
        letter-spacing: 1px;
      }
      .middle-discount {
        opacity: 0.8;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #ffffff;
      }
    }
    .rights {
      margin-top: 40px;
      color: #ffffff;
      letter-spacing: 0;
      display: flex;
      .rights-item {
        .number {
          display: flex;
          justify-content: center;
          .number-detail {
            font-family: PingFangSC-Medium;
            font-weight: 900;
            font-size: 22px;
            color: #ffffff;
            padding: 0 6px;
            position: relative;
            .mark {
              text-align: center;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: row;
              //min-width: 24px;
              margin-top: 4px;
              //margin-left: 6px;
              height: 14px;
              line-height: 14px;
              padding: 0 5px;
              font-family: PingFangSC-Regular;
              font-size: 10px;
              color: #1a1a1a;
              letter-spacing: 0;
              background-color: #feff00;
              border-radius: 7px;
              position: absolute;
              top: 2px;
              left: 0;
              white-space:nowrap;
            }
          }
        }
        .type {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 6px;
          .type-name{
            position: relative;
            .arrow {
              width: 10px;
              height: 10px;
              position: absolute;
              top: 3px;
              right: -16px;
              //float: right;
            }
          }
        }
      }
      .rights-item:first-child {
        margin-left: 36px;
      }
      .rights-item:nth-child(2) {
        position: absolute;
        left: 168px;
      }
      .rights-item:last-child {
        position: absolute;
        right: 31px;
      }
    }
  }
  .order-content {
    width: 100%;
    height: 142px;
    position: relative;
    .all-order {
      width: 345px;
      height: 131px;
      background: #ffffff;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      position: absolute;
      top: -20px;
      left: 15px;
      font-family: PingFangSC-Regular;
      letter-spacing: 0;
      .order-list {
        display: flex;
        padding-top: 22px;
        .order-type {
          display: flex;
          flex-direction: column;
          align-items: center;
          .single-img {
            width: 30px;
            height: 30px;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            .number {
              position: absolute;
              left: 22px;
              top: -3px;
              padding: 0 5px;
              height: 14px;
              text-align: center;
              background: #ff0000;
              border-radius: 7px;
              font-family: PingFangSC-Regular;
              font-size: 9px;
              color: #ffffff;
              letter-spacing: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          .order-type-name {
            margin-top: 7px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #333333;
            letter-spacing: 0;
          }
        }
        .order-type1 {
          margin-left: 19px;
        }
        .order-type2 {
          margin-left: 32px;
          margin-right: 32px;
        }
        .order-type4 {
          margin-left: 25px;
          margin-right: 17px;
        }
      }
      .look-all-order {
        width: 100%;
        height: 19px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1a1a1a;
        letter-spacing: 0;
        color: #1a1a1a;
        display: flex;
        justify-content: center;
        padding-bottom: 15px;
        padding-top: 20px;
        img {
          margin-left: 4px;
          margin-top: 1px;
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  .banner-content {
    width: 100%;
    text-align: center;
    img {
      width: 345px;
      height: 124px;
    }
  }
  .may-like {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    font-size: 18px;
  }
  .may-like img {
    width: 6px;
  }
  .may-like span {
    margin: 0 8px;
  }
  .all {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    padding: 10px 0;
  }
}
</style>

<template>
  <div class="personal-wrapper">
    <div class="person-content">
      <div class="avater">
        <img class="avater-img" :src="headImageUrl" alt="">
        <img v-if="isMember" class="avater-vip-img" src="../../assets/image/personal/vip-mark.png" alt="">
      </div>
      <div class="middle">
        <div class="middle-name">{{nickname}}</div>
        <div class="middle-discount" v-if="isMember">{{economize}}</div>
      </div>
      <div class="rights">
        <div class="rights-item" v-for="(item, index) in headModuleList" :key="index" @click="toPage(item.type)">
          <div class="number"><div class="number-detail" :ref="'detail'+index">{{item.num}}<div class="mark" :ref="'mark'+index" v-if="item.tip">{{item.tip}}</div></div></div>
          <div class="type"><div class="type-name">{{item.name}}<img class="arrow" src="../../assets/image/personal/rights-arrow.png" alt=""></div></div>
        </div>
        <!-- <div class="rights-item g-coin">
          <div class="number"><div class="number-detail">5.9</div><div class="mark">仅限今日</div></div>
          <div class="type"><span>G币</span><img class="arrow" src="../../assets/image/personal/rights-arrow.png" alt=""></div>
        </div>
        <div class="rights-item collection">
          <div class="number"><div class="number-detail">12</div><div class="mark">666</div></div>
          <div class="type"><span>商品收藏</span><img class="arrow" src="../../assets/image/personal/rights-arrow.png" alt=""></div>
        </div> -->
      </div>
    </div>

    <div class="order-content">
      <div class="all-order">
        <div class="order-list">
          <div class="order-type order-type1" @click="toOrder('1')">
            <div class="single-img">
              <img src="../../assets/image/personal/order-type1.png" alt="">
              <div class="number" v-if="countData.notPayCount">{{countData.notPayCount}}</div>
            </div>
            <div class="order-type-name">待付款</div>
          </div>
          <div class="order-type order-type2" @click="toOrder('2')">
            <div class="single-img">
              <img src="../../assets/image/personal/order-type2.png" alt="">
              <div class="number" v-if="countData.notDeliveryCount">{{countData.notDeliveryCount}}</div>
            </div>
            <div class="order-type-name">待发货</div>
          </div>
          <div class="order-type order-type3" @click="toOrder('3')">
            <div class="single-img">
              <img src="../../assets/image/personal/order-type3.png" alt="">
              <div class="number" v-if="countData.yesDeliveryCount">{{countData.yesDeliveryCount}}</div>
            </div>
            <div class="order-type-name">待收货</div>
          </div>
          <div class="order-type order-type4" @click="toOrder('4')">
            <div class="single-img">
              <img src="../../assets/image/personal/order-type4.png" alt="">
              <div class="number" v-if="countData.successCount">{{countData.successCount}}</div>
            </div>
            <div class="order-type-name">交易成功</div>
          </div>
          <div class="order-type order-type5" @click="toRefund">
            <div class="single-img">
              <img src="../../assets/image/personal/order-type5.png" alt="">
              <div class="number" v-if="countData.refundCount">{{countData.refundCount}}</div>
            </div>
            <div class="order-type-name">退款/售后</div>
          </div>
        </div>
        <div class="look-all-order" @click="toOrder('0')"><span>查看所有订单</span><img src="../../assets/image/personal/order-arrow-right.png" alt=""></div>
      </div>
    </div>

    <!-- <div class="banner-content">
      <img src="http://sc.jb51.net/uploads/allimg/150516/11-150516144125152.jpg" alt="">
    </div> -->

    <div class="like-box mt-10 pb-10" v-if="likeData && likeData.length > 0" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
      <h1 class="f-18 fw-n t-c may-like"><img src="~images/shop/tlt-icon.png" alt=""><span>猜你喜欢</span><img src="~images/shop/tlt-icon.png" alt=""></h1>
      <PList :list-data="likeData"></PList>
      <div class="all" v-if="allLoaded">已显示全部内容</div>
    </div>
    <footBar bar-tag='personal'></footBar>
  </div>
</template>

<script>
import api from '@/api/personal'
import auth from '@/utils/auth'
import PList from '../shop/blocks/guessLike'
import footBar from '@/components/footBar'

export default {
  data () {
    return {
      economize: '',
      headImageUrl: '',
      headModuleList: [],
      isMember: '',
      nickname: '',
      refundUrl: '',
      countData: '',
      page: 1,
      likeData: [],
      allLoaded: false
    }
  },
  components: {
    PList,
    footBar
  },
  created () {
    if (!auth.isLoggedIn()) {
      auth.login(this.$route.fullPath)
      return false
    }else{
      this.getInfo()
      this.getOrderCount()
      this.getHomeLikeData()
    }
  },
  mounted () {},
  methods: {
    handleStyle(){
      if(this.$refs.mark0){
        this.$refs.mark0[0].style.left = this.$refs.detail0[0].clientWidth + 'px'
      }
      if(this.$refs.mark1){
        this.$refs.mark1[0].style.left = this.$refs.detail1[0].clientWidth + 'px'
      }
      if(this.$refs.mark2){
        this.$refs.mark2[0].style.left = this.$refs.detail2[0].clientWidth + 'px'
      }
    },
    async getInfo () {
      let res = await api.getInfo()
      console.log(res, '===========')
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      const {
        economize,
        headImageUrl,
        headModuleList,
        isMember,
        nickname,
        refundUrl
      } = data
      this.economize = economize
      this.headImageUrl = headImageUrl
      this.headModuleList = headModuleList
      this.isMember = Number(isMember)
      this.nickname = nickname
      this.refundUrl = refundUrl
      let self = this
      this.$nextTick(()=>{
        self.handleStyle()
      })
    },
    async getOrderCount () {
      let params = {
        type: '1236'
      }
      let res = await api.getOrderCount(params)
      console.log(res, '===========count')
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.countData = data
    },
    async getHomeLikeData () {
      let params = {
        page: this.page
      }
      let res = await api.getHomeLikeData(params)
      const { status, message, data } = res
      console.log(res, '获取猜你喜欢列表')
      if (status !== 1) {
        this.$toast(message)
      }
      this.likeData = this.likeData.concat(data.recommendList)
      this.totalCount = data.totalCount
      if (this.likeData.length === this.totalCount) {
        this.loading = true
        this.allLoaded = true
      } else {
        this.page++
        this.loading = false
      }
    },
    loadMore () {
      if (this.loading) {
        return false
      }
      this.getHomeLikeData()
    },
    toPage (value) {
      if (value === 1) {
        this.$router.push('/personal/discount')
      } else if (value === 2) {
        this.$router.push('/personal/gcoin')
      } else {
        this.$router.push('/personal/collection')
      }
    },
    toOrder (value) {
      this.$router.push({
        path: '/order',
        query: {
          type: value
        }
      })
    },
    toRefund () {
      this.$router.push({
        path: '/refund',
        query: {
          isHide: 1
        }
      })
      //location.href = this.refundUrl
    }
  }
}
</script>
