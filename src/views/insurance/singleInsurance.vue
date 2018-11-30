<template>
  <div>
    <div class="single-insurance">
      <div class="left" @click="toInsuranceDetail(info.orderNo)" :style="'background-image:url('+info.productImgUrl+')'">
        <!-- <img :src="info.productImgUrl" alt=""> -->
        <div class="shadow"></div>
        <div class="words">{{info.statusDesc}}</div>
      </div>
      <div class="right">
        <div class="name" @click="toInsuranceDetail(info.orderNo)">{{info.insuranceName}}</div>
        <div class="info" @click="toInsuranceDetail(info.orderNo)">保额{{info.insuredAmountDesc}}</div>
        <div class="time" @click="toInsuranceDetail(info.orderNo)" v-if="!info.canOperate">保障期限 {{info.effectStartDate}}～{{info.effectEndDate}}</div>
        <div class="operate" v-if="info.canOperate">
          <div class="btn-common cancel" @click="cancelOrder(info.orderId)">取消</div>
          <div class="btn-common pay" @click="pay(info.orderId)">去付款{{endTime}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/insurance'
import bridge from '@/utils/bridge'

export default {
  props: ["info","cancelInsuranceOrder","resetInsuranceList"],
  data() {
    return {
      timer: null,
      restTime: '',
      endTime: '',
      waiting: false
    }
  },
  created () {
    bridge.bridgeFun()
    let that = this
    if (this.info.payCountDown&&this.info.payCountDown>0) {
      this.restTime = Number(this.info.payCountDown)
      this.timer = setInterval(function () {
        that.restTime = that.restTime - 1
        if (that.restTime === 0) {
          clearInterval(that.timer)
          // that.$emit("resetForChild");
        }
        that.endTime = that.handleEndTime(that.restTime)
      }, 1000)
    }
  },
  methods: {
    cancelOrder(value){
      this.$emit('cancelInsuranceOrder',value)
    },
    toInsuranceDetail(value){
      console.log(1)
      this.$router.push({
        path: '/insurance/detail',
        query: {
          orderNo: value,
          isApp: 1,
          from: 'insuranceList'
        }
      })
    },
    handleEndTime (sec) {
      if (sec === 0) {
        this.$emit('resetInsuranceList')
        return false
      }
      var hour = 0
      var minute = 0
      var second = 0
      var countdownStr
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
      countdownStr = hour + ':' + minute + ':' + second
      return countdownStr
    },
    pay(value){
      if(this.waiting){
        return false
      }
      this.waiting = true
      let self = this
      bridge.appPayCenter(value,11, 3, function () {
        self.$router.push({
          path: '/insurance/deal/detail',
          query: {
            payResult: 1,
            orderId: value,
            isHide: 1
          }
        })
      },function(){
        self.$router.push({
          path: '/insurance/deal/detail',
          query: {
            payResult: 0,
            orderId: value,
            isHide: 1
          }
        })
      })
      self.waiting = false
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
};
</script>

<style lang="less" scoped>
.single-insurance {
  width: 345px;
  height: 110px;
  background: #ffffff;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  margin-bottom: 10px;
  .left {
    width: 110px;
    height: 110px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    img {
      //width: 100%;
      // height: 100%;
      // border-top-left-radius: 4px;
      // border-bottom-left-radius: 4px;
      width: auto;  
      height: auto;  
      max-width: 100%;  
      max-height: 100%;
    }
    .shadow {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 110px;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 0;
      position: absolute;
      left: 0;
      top: 0;
      filter: alpha(opacity=30);
      -moz-opacity: 0.3;
      -khtml-opacity: 0.3;
      opacity: 0.3;
      background: #000000;
    }
    .words{
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 110px;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 0;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
    }
  }
  .right {
    margin-left: 10px;
    width: 225px;
    position: relative;
    .name {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      line-height: 18px;
      margin-top: 12px;
      margin-bottom: 8px;
    }
    .info {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #666666;
      letter-spacing: 0;
      line-height: 14px;
    }
    .time {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      letter-spacing: 0;
      line-height: 14px;
      margin-top: 32px;
    }
    .operate {
      display: flex;
      //padding-right: 10px;
      justify-content: flex-end;
      //margin-top: 18px;
      position: absolute;
      bottom: 10px;
      right: 10px;
      .btn-common {
        padding: 0 15px;
        height: 30px;
        line-height: 30px;
        font-family: PingFangSC-Regular;
        letter-spacing: 0;
        font-size: 14px;
        margin-left: 10px;
        display: flex;
        align-items: center;
      }
      .cancel {
        color: #666666;
        box-sizing: border-box;
        border: 1px solid #b2b2b2;
        border-radius: 4px;
      }
      .pay {
        color: #ffffff;
        background: #f1002d;
        border-radius: 4px;
      }
    }
  }
}
</style>