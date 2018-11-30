<style lang="less" scoped>
.pay-info-wrapper {
  .center-notice {
    background: #FFF;
    position: relative;
    padding: 0 15px 0 33px;
    margin-bottom: 10px;
    .notice-left {
      position: absolute;
      top: 5px;
      left: 15px;
      width: 14px;
      height: 14px;
      background: url(~images/order/icon-notice.png) no-repeat;  
      background-size: 100%;    
    }
    .notice-right {
      display: inline-block;
      padding: 6px 0;
      line-height: 16px;      
      font-size: 12px;
      color: #333;
      .notice-time {
        color: #F1002D;
      }
    }
  }
  .center-info {
    background: #FFF;
    border-radius: 4px;
    padding: 20px 0;
    text-align: center;
    margin: 0 15px 10px;
    .center-expalin {
      font-size: 14px;
      color: #333;
      margin-bottom: 4px;
    }
    .center-money {
      font-size: 16px;
      color: #F1002D;
      margin-bottom: 16px;
      font-family: PingFangSC-Medium;      
      .unit {
        font-size: 14px;
        height: 14px;
      }
      .money-number {
        font-size: 24px;
      }
    }
    .center-price {
      font-size: 12px;
      color: #666
    }

  }
  .pay-sucess {
    background: #FFF;
    height: 50px;
    padding: 14px 0;
    box-sizing: border-box;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #1A1A1A;
    text-align: center;
    margin-top: 10px;
    .sucess-left,.sucess-right,{
      width: 48%;
    }
    .sucess-left {
      border-right: 1px solid #E0E0E0;
    }
  }
  .payment-platforms-box {
    margin: 0 15px;
  }
  
}
</style>
<template>
  <div class="pay-info-wrapper">
    <!-- 计算中心通告 -->
    <div class="center-notice">
        <span class="notice-left"></span>
        <div class="notice-right">请在<i class="notice-time">{{endTime}}</i>内完成结算，时间结束后部分订单将会被取消。</div>
    </div>
    <!-- 订单信息 -->
    <!-- <countDown :status="status" :leftTime="endSecond" v-if="status===1"></countDown> -->
    <div class="center-info">
      <p class="center-expalin">订单应付金额（含邮）</p>
      <div class="center-money">
          <span class="unit">￥</span> <span class="money-number">{{realPrice}}</span>
      </div>
      <p class="center-price">订单总计：¥{{totalPrice}}</p>
      <p class="center-price" v-if="payInfo.optionalPartDeratePrice>0">N元任选：-¥{{payInfo.optionalPartDeratePrice}}</p>      
      <p class="center-price" v-if="payInfo.activitiesDeratePrice>0">满减活动：-¥{{payInfo.activitiesDeratePrice}}</p>      
      <p class="center-price" v-if="payInfo.couponDeratePrice>0">优惠券减免：-¥{{payInfo.couponDeratePrice}}</p>      
      <p class="center-price" v-if="payInfo.usedCoin>0">G币抵扣：-¥{{(Number(payInfo.usedCoin/100)).toFixed(2)}}</p>      
      <p class="center-price" v-if="payInfo.memberDeratePrice>0">会员减免：-¥{{payInfo.memberDeratePrice}}</p>      
    </div>

    <!-- 支付方式 -->
    <div class="payment-platforms-box" v-if="payChannelList.length>0">
      <payChannel :payChannelInfo="payChannelList" :foldingList="foldingList" @set-paychannel="changePayChannel"></payChannel>
    </div>

    <payBar :isSuccess="0" :orderIds="orderIds" :payChannel="payChannel"></payBar>
  </div>
</template>

<script>
import storage from '@/utils/storage-lite'
import api from '@/api/order'
import Bridge from '@/utils/bridge'
import Tools from '@/utils/tools'
import session from '@/utils/session-lite'

import payChannel from '@/components/payType'
import payBar from '@/components/payBar'

export default {
  components: {
    payChannel,
    payBar
  },
  name:'payCenter',
  data () {
    return {
      couponPrice: '',
      endSecond: '',
      orderIds: [],
      realPrice: '',
      status: 0,
      payChannel: '',    // 支付类型
      payChannelList:'', // 展开支付列表数据
      foldingList:'',    // 折叠支付
      
      realPrice: '',     // 真实价格
      totalPrice: '',    // 订单总计
      memberDeratePrice: '',     // 优惠减

      payInfo: {
        "activitiesDeratePrice": "",
        "couponDeratePrice": "",
        "endSecond": 0,
        "fqNum": 0,
        "freightPrice": "",
        "installmentDetail": "",
        "memberDeratePrice": "",
        "optionalPartDeratePrice": "",
        "payChannelInfo": {
          "foldingList": [],
          "spreadList": []
        },
        "realPrice": "",
        "totalPrice": "",
        "usedCoin": 0
      },

      timer: null,
      restTime: '',
      endTime: ''

    }
  },
  created () {
  },
  mounted () {
    this.initData()
  },
  destroyed() {
    // 关闭页面清除定时器
    clearInterval(this.timer)
  },
  methods: {
    // 倒计时
    downTime(endSecond){
      let that = this
      if (endSecond&&endSecond>0) {
        this.restTime = Number(endSecond)
        this.timer = setInterval(function () {
          that.restTime = that.restTime - 1
          if (that.restTime === 0) {
            clearInterval(that.timer)
          }
          that.endTime = that.handleEndTime(that.restTime)
        }, 1000)
      }
    },
    
    handleEndTime (sec) {
      if (sec === 0) {
        return false
      }
      let hour = 0
      let minute = 0
      let second = 0

      if (sec >= 60) {
        minute = Math.floor(sec / 60)
        second = sec % 60
        if (minute >= 60) {
          hour = Math.floor(minute / 60)
          minute = minute % 60
        } else {
          hour = 0
        }
      } else {
        second = sec
        hour = 0
        minute = 0
      }

      hour = parseInt(hour) < 10 && parseInt(hour) > 0 ? '0' + hour : hour
      minute =
        parseInt(minute) < 10 && parseInt(minute) > 0 ? '0' + minute : minute
      second =
        parseInt(second) < 10 && parseInt(second) > 0 ? '0' + second : second

      
      return minute + ':' + second
    },
    initData () {
      const orderIds = this.$route.query.orderIds
      
      this.orderIds = orderIds
      this.getPayInfo()
    },

    async getPayInfo () {
      
      let res = await api.getPayMerge({orderIds: this.orderIds})
      
      if (res) {
        const { status, data, message } = res      
        if (status == 1) {
          const {
            endSecond,
            realPrice,
            totalPrice,
            payChannelInfo
          } = data

          // 支付方式默认选中第一个
          payChannelInfo.spreadList[0].checked = true
          this.payChannel = payChannelInfo.spreadList[0].type

          this.payInfo = data
          this.payChannelList = payChannelInfo.spreadList
          this.foldingList = payChannelInfo.foldingList

          this.downTime(endSecond)
         
          this.realPrice = realPrice
          this.totalPrice = totalPrice


        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }

    },
    changePayChannel (type) {
      this.payChannel = type
    },

  }
}
</script>
