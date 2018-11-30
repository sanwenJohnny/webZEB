<style lang="less" scoped>
.pay-info-wrapper {
  height: 100%;
  margin-bottom: 40px;
  .detail-info {
    .info-head {
      height: 160px;
      text-align: center;
      background: #FFF;
      padding-top: 32px;
      box-sizing: border-box;
      .success-icon {
        width: 64px;
        height: 64px;
        background: url(~images/order/icon-success.png) no-repeat;
        background-size: 100%;
        margin: 0 auto;              
      }
      .fail-icon {
        width: 64px;
        height: 64px;
        background: url(~images/order/icon-fail.png) no-repeat;
        background-size: 100%;
        margin: 0 auto;              
      }
      .head-message {
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #1A1A1A;
        margin-top: 12px;
      }
      .head-state {
        margin-top: 2px;        
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1A1A1A;
      }
      .notice-time {
        color: #F1002D;;
      }
    }
    .info-list {
      padding: 20px;
      background: #FFF;      
      .list-content {
        display: flex;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666;
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0;          
        }
        .content-left {
          flex: 1;
        }
      }
      .price-content {
        margin-top: 15px;
        .pay-price {
          font-family: PingFangSC-Medium;   
          font-size: 16px;
          color: #F1002D;
          position: relative;
          top: -8px;
          .price-number {
            font-family: PingFangSC-Medium;   
            font-size: 28px;
          }
        }
      }
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

    <!-- 交易详情信息 -->
    <div class="detail-info">
        <div class="info-head">
          <div class="success-icon" :class="{'fail-icon': isSuccess!==1}"></div>
          <div class="head-message">{{isSuccess==1 ? '付款成功':'付款失败'}}</div>
          <div class="head-state" v-if="isSuccess==1">努力配货中</div>       
          <div class="head-state notice-time" v-else>请在{{endTime}}内完成付款</div>            
               
        </div>
        <div class="info-list">
          <div v-if="isSuccess==1">
            <div class="list-content">
              <span class="content-left">订单编号：</span>
              <span class="content-right">{{orderNumber}}</span>
            </div>
            <div class="list-content">
              <span class="content-left">交易时间：</span>
              <span class="content-right">{{operateTime}}</span>
            </div><div class="list-content">
              <span class="content-left">支付方式：</span>
              <span class="content-right">{{payChannelName[payChannel]}}</span>
            </div>
            <div class="list-content">
              <span class="content-left">支付金额：</span>
              <span class="content-right">￥{{realPrice}}</span>
            </div>
          </div>

          <div v-else>
            <div class="list-content">
              <span class="content-left">订单总计：</span>
              <span class="content-right">￥{{totalPrice}}</span>
            </div>
            <div class="list-content" v-if="payInfo.optionalPartDeratePrice>0">
              <span class="content-left">N元任选：</span>
              <span class="content-right">-￥{{payInfo.optionalPartDeratePrice}}</span>
            </div>
            <div class="list-content" v-if="payInfo.activitiesDeratePrice>0">
              <span class="content-left">满减活动：</span>
              <span class="content-right">-￥{{payInfo.activitiesDeratePrice}}</span>
            </div>
            <div class="list-content" v-if="payInfo.couponDeratePrice>0">
              <span class="content-left">优惠券减免：</span>
              <span class="content-right">-￥{{payInfo.couponDeratePrice}}</span>
            </div>
            <div class="list-content" v-if="payInfo.usedCoin>0">
              <span class="content-left">G币抵扣：</span>
              <span class="content-right">-￥{{(Number(payInfo.usedCoin/100)).toFixed(2)}}</span>
            </div>
            <div class="list-content" v-if="payInfo.memberDeratePrice>0">
              <span class="content-left">会员减免：</span>
              <span class="content-right">-￥{{payInfo.memberDeratePrice}}</span>
            </div>
            <div class="list-content price-content">
              <span class="content-left price-left">应付金额(含邮费)：</span>
              <span class="content-right pay-price">￥<em class="price-number">{{realPrice}}</em></span>
            </div>
          </div>

        </div>
    </div>
    <!-- 付款成功查看 -->
    <div class="pay-sucess">
        <span class="sucess-left" @click="goOrderDetail">查看订单</span>
        <span class="sucess-right" @click="goHome">回到商城</span>
    </div>

  </div>
</template>

<script>
// import {payDetail} from '@/mock'
import storage from '@/utils/storage-lite'
import api from '@/api/order'
import Bridge from '@/utils/bridge'
import Tools from '@/utils/tools'
import session from '@/utils/session-lite'

export default {
  components: {
  },
  name:'payDetail',
  data () {
    return {
      isSuccess: 1,
      couponPrice: '',
      orderId:'',
      orderIds: [],
      status: 0,
      payChannel: '',    // 支付类型
      payChannelList:'', // 支付列表数据
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

      orderNumber: '', // 订单编号
      operateTime: '',   // 交易时间
      payChannelName: ['','银联支付','支付宝支付','微信支付',
      '','','','','','','',
      '米么贷支付','','花呗支付','花呗分期支付'],
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
      this.getPayDetail()
    },

    // 获取交易详情信息
    async getPayDetail () {
      let res = await api.getPayDetail({orderIds: this.orderIds})
      // let res = payDetail
      if (res) {
        const { status, data, message } = res      
        if (status == 1) {
          const {
            endSecond,
            realPrice,
            totalPrice,
            payChannelInfo,
            isSuccees,
            orderNumber,
            operateTime,
            payChannel
          } = data

          // 支付方式默认选中第一个
          payChannelInfo.spreadList[0].checked = true
          this.payChannel = payChannelInfo.spreadList[0].type

          this.payInfo = data
          this.payChannelList = payChannelInfo.spreadList
          this.foldingList = payChannelInfo.foldingList
          this.realPrice = realPrice
          this.totalPrice = totalPrice

          this.isSuccess = isSuccees
          this.orderNumber = orderNumber
          this.operateTime = operateTime
          this.payChannel = payChannel

          this.downTime(endSecond)

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

    // 去订单列表页
    goOrderDetail(){
      let type = this.isSuccess ? '2' : '1'
      this.$router.push({
        path: '/order',
        query: {type: type}
      })
    },
    
    // 返回商城首页
    goHome(){
      this.$router.push({
        path: '/shop',
        query: {}
      })
    }

  }
}
</script>
