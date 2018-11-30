<style lang="less" scoped>
.discount-wrapper {
  .discount-tabs {
    height: 40px;
    display: flex;
    padding: 0 15px;
    background-color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    white-space: nowrap;
    overflow-x: auto;
    border-top-left-radius: 4px;
    .single-tab {
      flex: 1;
      display: flex;
      justify-content: center;
      .tab {
        height: 100%;
        line-height: 40px;
        margin: 0 16px;
        position: relative;
        .tab-active {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #f1002d;
          transform: skew(-30deg);
          .tab-active-white {
            position: absolute;
            bottom: 0;
            right: 4px;
            width: 2px;
            height: 3px;
            background-color: #ffffff;
          }
        }
      }
      .tab:first-child {
        margin-left: 0;
      }
      .tab:last-child {
        margin-right: 0;
      }
      .word-color {
        font-family: PingFangSC-Medium;
        font-weight: 900;
        font-size: 16px;
        color: #1a1a1a;
        font-weight: 900;
      }
    }
  }
  .exchange-content {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    letter-spacing: 0;
    background-color: #fff;
    position: relative;
    input {
      width: 288px;
      height: 32px;
      text-indent: 10px;
      background: #f5f5f5;
      border-radius: 4px;
      margin-left: 15px;
      font-size: 14px;
      color: #1a1a1a;
    }
    input::placeholder {
      font-size: 14px;
      color: #b2b2b2;
    }
    .close {
      position: absolute;
      left: 274px;
      bottom: 12px;
      width: 14px;
      height: 14px;
      padding: 7px;
      .close-btn {
        width: 100%;
        height: 100%;
      }
    }
    .exchange {
      width: 70px;
      text-align: center;
      height: 100%;
      line-height: 52px;
      font-size: 16px;
      color: #1a1a1a;
    }
  }
  .discount-mark {
    padding: 0 15px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #1a1a1a;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 14px;
      height: 14px;
    }
    .words {
      margin-left: 4px;
      span {
        font-size: 12px;
        color: #ff0000;
        margin: 0 2px;
      }
    }
  }
  .ticket-list {
    padding: 10px 15px 0 15px;
  }
  .all {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    padding: 10px 0;
  }
  .empty {
    width: 100%;
    text-align: center;
    background-color: #f8f8f8;
    img {
      margin-top: 99px;
    }
    .empty-word {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #b2b2b2;
      letter-spacing: 0;
      margin-top: 10px;
    }
  }
}
</style>
<style lang="less">
.discount-wrapper {
  .mint-msgbox-wrapper {
    .mint-msgbox {
      background: #ffffff;
      border-radius: 4px;
      width: 270px;
      height: 156px;
      .mint-msgbox-content {
        padding-bottom: 19px;
        .mint-msgbox-message {
          padding-top: 10px;
          font-family: PingFangSC-Medium;
          font-size: 18px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 22px;
        }
        .mint-msgbox-input {
          margin: 0 auto;
          display: flex;
          input {
            width: 240px;
            height: 24px;
            background: #f5f5f5;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #333333;
            letter-spacing: 0;
            border: 0;
            border-radius: 0;
          }
          .mint-msgbox-errormsg {
            display: none;
          }
        }
      }
      .mint-msgbox-btns {
        height: 50px;
        font-family: PingFangSC-Regular;
        .mint-msgbox-btn {
          font-size: 18px;
          color: #999999;
          letter-spacing: 0;
          text-align: center;
          line-height: 22px;
        }
        .mint-msgbox-confirm {
          color: #1a1a1a;
        }
      }
    }
  }
}
</style>

<template>
  <div class="discount-wrapper">
    <div class="discount-tabs">
      <div class="single-tab">
        <div class="tab" @click="tabChange('1')" :class="{'word-color': tabValue === '1'}"><span>未使用</span><div class="tab-active" v-show="tabValue === '1'"><div class="tab-active-white"></div></div></div>
      </div>
      <div class="single-tab">
        <div class="tab" @click="tabChange('2')" :class="{'word-color': tabValue === '2'}"><span>已使用</span><div class="tab-active" v-show="tabValue === '2'"><div class="tab-active-white"></div></div></div>
      </div>
      <div class="single-tab">
        <div class="tab" @click="tabChange('3')" :class="{'word-color': tabValue === '3'}"><span>已过期</span><div class="tab-active" v-show="tabValue === '3'"><div class="tab-active-white"></div></div></div>
      </div>
    </div>
    <div class="exchange-content" v-if="tabValue === '1'">
      <input type="text" v-model="couponNum" placeholder="输入兑换码区域">
      <div class="close" @click="clearKeyWords" v-if="closeBtnVisible">
        <img src="~images/personal/close.png" class="close-btn" alt="">
      </div>
      <div class="exchange" @click="exchange">兑换</div>
    </div>
    <div class="discount-mark" v-if="tabValue === '1'&&totalCount!=0">
      <img src="../../../assets/image/personal/discount-mark.png" alt="">
      <div class="words" v-if="tabValue === '1'">您共有<span>{{totalCount}}</span>张优惠券，快去使用吧！</div>
    </div>
    <div class="discount-mark" v-if="tabValue === '2'&&totalReducePriceTip&&totalReducePriceTip.colors[0].field !== '0'">
      <img src="../../../assets/image/personal/discount-mark.png" alt="">
      <div class="words">您已使用{{totalReducePriceTip.colors[0].field}}张优惠券，共节省<span>{{totalReducePriceTip.colors[1].field}}</span>元</div>
    </div>
    <div class="ticket-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
      <Ticket v-for="(item, index) in couponDetails" :key="index" :coupon="item" :tabValue="tabValue"></Ticket>
      <!-- <Ticket></Ticket>
      <Ticket></Ticket> -->
      <div class="all" v-if="!empty&&allLoaded">已显示全部内容</div>
      <div class="empty" v-if="empty">
        <img src="~images/personal/no-discount.png" alt="">
        <div class="empty-word">您暂时没有优惠券哦</div>
      </div>
    </div>

  </div>
</template>

<script>
import Ticket from './ticket'
import api from '@/api/personal'
export default {
  data () {
    return {
      tabValue: '1',
      page: 1,
      couponNum: '',
      totalCount: '',
      totalReducePriceTip: '',
      couponDetails: [],
      allLoaded: false,
      loading: false,
      empty: false,
      closeBtnVisible: false
    }
  },
  components: {
    Ticket
  },
  created () {},
  mounted () {},
  methods: {
    tabChange (value) {
      this.tabValue = value
      this.allLoaded = false
      this.empty = false
      this.page = 1
      this.couponDetails = []
      // let self = this
      // setTimeout(function(){
      //   self.getCoupon()
      // },300)
      this.getCoupon()
    },
    async getCoupon () {
      let params = {
        type: this.tabValue,
        page: this.page,
        pageCount: '10'
      }
      let res = await api.getCoupon(params)
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.couponDetails = this.couponDetails.concat(data.couponDetails)
      this.totalCount = data.totalCount
      this.totalReducePriceTip = data.totalReducePriceTip
      if (this.totalCount === 0) {
        this.empty = true
      }
      if (this.couponDetails.length === this.totalCount) {
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
      this.getCoupon()
    },
    async exchange () {
      if (!this.couponNum.trim()) {
        this.$toast('请填写兑换码')
        return false
      }
      let params = {
        code: this.couponNum.trim()
      }
      let res = await api.codeChangeCoupon(params)
      const { status, message } = res
      if (status === 1) {
        this.$toast('兑换成功')
        this.page = 1
        this.couponDetails = []
        this.getCoupon()
      } else {
        this.$toast(message)
      }
    },
    clearKeyWords() {
      this.couponNum = "";
      this.closeBtnVisible = false
    }
  },
  watch: {
    couponNum: function(newVal, oldVal){
      this.keywords = newVal;
      if(this.keywords.trim() != ''){
        this.closeBtnVisible = true
      }else{
        this.closeBtnVisible = false
      }
    }
  }
}
</script>
