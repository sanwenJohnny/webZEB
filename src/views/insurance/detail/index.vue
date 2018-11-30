<style lang="less" scoped>
.insurance-detail-wrapper {
  padding-bottom: 70px;
  .app-bar {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    /*border-bottom:1PX solid #e0e0e0;*/
    box-sizing: border-box;
    background: #000;

    .bar-back {
      width: 30px;
      height: 45px;
      line-height: 48px;
      background: url(~images/refund/arrow-left-white.png) no-repeat 6px center;
      background-size: 12px auto;
    }

    b {
      position: absolute;
      z-index: 5;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      letter-spacing: 1px;
      font-size: 18px;
      color: #fff;
    }

    .share-top-tb {
      width: 30px;
      height: 30px;
      background: url(~images/refund/share-icon.png) no-repeat center;
      background-size: 20px auto;
      margin-top: 8px;
    }
  }
  .insurance-content {
    padding-top: 15px;
    .insurance-info {
      position: relative;
      width: 345px;
      background: #ffffff;
      border-radius: 4px;
      padding-bottom: 20px;
      margin: 0 auto;
      .top {
        //width: 228px;
        margin-bottom: 22px;
        margin-left: 10px;
        .name {
          font-family: PingFangSC-Medium;
          font-weight: 900;
          font-size: 18px;
          color: #1a1a1a;
          letter-spacing: 0;
          line-height: 22px;
          padding-top: 22px;
          margin-bottom: 6px;
        }
        .number {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #666666;
          letter-spacing: 0;
          line-height: 14px;
        }
      }
      .bottom {
        margin-left: 10px;
        .row {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #b2b2b2;
          letter-spacing: 0;
          line-height: 14px;
          margin-bottom: 10px;
          .left {
            width: 58px;
            text-align: justify;
            text-align-last: justify;
          }
          .right {
            margin-left: 4px;
            color: #333333;
          }
        }
        .row:last-child {
          margin-bottom: 0;
        }
      }
      .status {
        position: absolute;
        top: 15px;
        right: 15px;
        img {
          width: 62px;
          height: 62px;
        }
      }
    }
  }
  .person-content {
    width: 345px;
    margin: 0 auto;
    padding: 15px 0 20px 0;
    background: #ffffff;
    border-radius: 4px;
    margin-top: 10px;
    .title {
      padding-left: 8px;
      font-family: PingFangSC-Medium;
      font-weight: 900;
      font-size: 14px;
      color: #1a1a1a;
      letter-spacing: 0;
      line-height: 14px;
      border-left: 2px solid #4CA8FF;
      margin-bottom: 15px;
    }
    .info {
      margin-left: 10px;
      .row {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #b2b2b2;
        letter-spacing: 0;
        line-height: 14px;
        margin-bottom: 10px;
        .left {
          width: 58px;
          text-align: justify;
          text-align-last: justify;
        }
        .right {
          margin-left: 4px;
          color: #333333;
        }
      }
      .row:last-child {
        margin-bottom: 0;
      }
    }
  }
  .order-info {
    width: 345px;
    margin: 0 auto;
    padding: 15px 0 20px 0;
    background: #ffffff;
    border-radius: 4px;
    margin-top: 10px;
    .title {
      padding-left: 10px;
      font-family: PingFangSC-Medium;
      font-weight: 900;
      font-size: 14px;
      color: #1a1a1a;
      letter-spacing: 0;
      line-height: 14px;
      margin-bottom: 15px;
    }
    .info {
      margin-left: 10px;
      .row {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #b2b2b2;
        letter-spacing: 0;
        line-height: 14px;
        margin-bottom: 10px;
        .left {
          //width: 58px;
          text-align: justify;
          text-align-last: justify;
        }
        .right {
          margin-left: 4px;
          color: #333333;
        }
      }
      .row:last-child {
        margin-bottom: 0;
      }
    }
  }
  .operate {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #fff;
    .common {
      flex: 1;
      .cancel {
        width: 165px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border: 1px solid #666666;
        border-radius: 4px;
        margin: 0 auto;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #666666;
        letter-spacing: 0;
        text-align: center;
        box-sizing: border-box;
      }
      .pay {
        width: 165px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-radius: 4px;
        margin: 0 auto;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
        background: #F1002D;
        border-radius: 4px; 
      }
    }
  }
}
.pt-45{
  padding-top: 45px;
}
</style>

<style lang="less">
.insurance-detail-wrapper {
  .mint-msgbox-wrapper {
    .mint-msgbox {
      background: #ffffff;
      border-radius: 4px;
      width: 270px;
      height: 156px;
      .mint-msgbox-header {
        .mint-msgbox-title {
          margin-top: 5px;
          font-family: PingFangSC-Medium;
          font-weight: 900;
          font-size: 18px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 22px;
        }
      }
      .mint-msgbox-content {
        padding-bottom: 19px;
        .mint-msgbox-message {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 18px;
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
  <div class="insurance-detail-wrapper" :class="{'pt-45':isApp == 1}">
    <div class="app-bar" ref="nav" v-if="isApp == 1">
      <div class="bar-back f-14" @click="back"></div>
      <b class="fw-n">保单详情</b>
    </div>
    <div class="insurance-content">
      <div class="insurance-info">
        <div class="top">
          <div class="name">{{insuranceDetailView.insuranceName}}</div>
          <div class="number" v-if="insuranceDetailView.policyNo">NO.{{insuranceDetailView.policyNo}}</div>
        </div>
        <div class="bottom">
          <div class="row"><span class="left">保险公司</span>:&nbsp;<span class="right">{{insuranceDetailView.insuranceCompanyName}}</span></div>
          <div class="row"><span class="left">生效日期</span>:&nbsp;<span class="right">{{insuranceDetailView.effectStartDate}}</span></div>
          <div class="row"><span class="left">截止日期</span>:&nbsp;<span class="right">{{insuranceDetailView.effectEndDate}}</span></div>
          <div class="row"><span class="left">保费</span>:&nbsp;<span class="right">¥{{insuranceDetailView.premium}}</span></div>
          <div class="row"><span class="left">保额</span>:&nbsp;<span class="right">{{insuranceDetailView.insuredAmountDesc}}</span></div>
          <!-- <div class="row"><span class="left">订单编号</span>:&nbsp;<span class="right">{{insuranceDetailView.orderNo}}</span></div> -->
        </div>
        <div class="status" v-if="insuranceDetailView.insuranceOrderStatus === 4"><img src="../../../assets/image/insurance/ensure.png" alt=""></div>
        <div class="status" v-if="insuranceDetailView.insuranceOrderStatus === 3"><img src="../../../assets/image/insurance/cancel.png" alt=""></div>
        <div class="status" v-if="insuranceDetailView.insuranceOrderStatus === 2"><img src="../../../assets/image/insurance/paid.png" alt=""></div>
        <div class="status" v-if="insuranceDetailView.insuranceOrderStatus === 1"><img src="../../../assets/image/insurance/will-pay.png" alt=""></div>
        <div class="status" v-if="insuranceDetailView.insuranceOrderStatus === 5"><img src="../../../assets/image/insurance/invalid.png" alt=""></div>
        <div class="status" v-if="insuranceDetailView.insuranceOrderStatus === 6"><img src="../../../assets/image/insurance/failed.png" alt=""></div>
      </div>
    </div>
    <div class="person-content" v-for="(item, index) in insuranceDetailView.insurantViewList" :key="index">
      <div class="title">被保人信息{{insuranceDetailView.insurantViewList.length>1?(index+1):''}}</div>
      <div class="info">
        <div class="row"><span class="left">姓名</span>:&nbsp;<span class="right">{{item.name}}</span></div>
        <div class="row"><span class="left">证件类型</span>:&nbsp;<span class="right">{{item.cerTypeDesc}}</span></div>
        <div class="row"><span class="left">证件号码</span>:&nbsp;<span class="right">{{item.cerId}}</span></div>
        <div class="row"><span class="left">手机号码</span>:&nbsp;<span class="right">{{item.insurePhone}}</span></div>
      </div>
    </div>
    <div class="person-content">
      <div class="title">投保人信息</div>
      <div class="info">
        <div class="row"><span class="left">姓名</span>:&nbsp;<span class="right">{{insuranceDetailView.applicantView.name}}</span></div>
        <div class="row"><span class="left">证件类型</span>:&nbsp;<span class="right">{{insuranceDetailView.applicantView.cerTypeDesc}}</span></div>
        <div class="row"><span class="left">证件号码</span>:&nbsp;<span class="right">{{insuranceDetailView.applicantView.cerId}}</span></div>
        <div class="row"><span class="left">手机号码</span>:&nbsp;<span class="right">{{insuranceDetailView.applicantView.insurePhone}}</span></div>
      </div>
    </div>
    <div class="order-info">
      <div class="title">订单信息</div>
      <div class="info">
        <div class="row"><span class="left">订单编号</span>:&nbsp;<span class="right">{{insuranceOrderPayInfoView.orderNo}}</span></div>
        <div class="row" v-if="insuranceOrderPayInfoView.usedCoinDesc != '0'"><span class="left">G币抵现</span>:&nbsp;<span class="right">-¥{{insuranceOrderPayInfoView.usedCoinDesc}}</span></div>
        <div class="row" v-if="insuranceOrderPayInfoView.couponDeratePriceDesc != '0'"><span class="left">优惠券减免</span>:&nbsp;<span class="right">-¥{{insuranceOrderPayInfoView.couponDeratePriceDesc}}</span></div>
        <div class="row" v-if="insuranceOrderPayInfoView.memberDeratePriceDesc != '0'"><span class="left">会员减免</span>:&nbsp;<span class="right">-¥{{insuranceOrderPayInfoView.memberDeratePriceDesc}}</span></div>
        <div class="row" v-if="insuranceOrderPayInfoView.realPrice"><span class="left">实付金额</span>:&nbsp;<span class="right">¥{{insuranceOrderPayInfoView.realPriceDesc}}</span></div>
        <div class="row" v-if="insuranceDetailView.insuranceOrderStatus != 1&&insuranceDetailView.insuranceOrderStatus != 3&&insuranceOrderPayInfoView.payChannelDesc"><span class="left">支付方式</span>:&nbsp;<span class="right">{{insuranceOrderPayInfoView.payChannelDesc}}</span></div>
      </div>
    </div>
    <div class="operate" v-if="insuranceDetailView.insuranceOrderStatus === 1">
      <div class="common"><div class="cancel" @click="toCancle(insuranceDetailView.orderId)">取消</div></div>
      <div class="common"><div class="pay" @click="pay(insuranceDetailView.orderId)">去付款{{endTime}}</div></div>
    </div>
  </div>
</template>

<script>
import api from "@/api/insurance"
import bridge from '@/utils/bridge'
import { MessageBox } from "mint-ui"

export default {
  data() {
    return {
      info: "",
      insuranceDetailView: "",
      insuranceOrderPayInfoView: "",
      timer: null,
      restTime: '',
      endTime: '',
      isApp: 0,
      from: '',
      waiting: false
    };
  },
  created() {
    this.isApp = this.$route.query.isApp || 0
    this.from = this.$route.query.from
    if(this.isApp){
      bridge.bridgeFun(function(){
        window.WebViewJavascriptBridge.callHandler('controlNavigationBar', { 'isDisplayHead': 0 }, function (res) {})
      })
      // if(this.from == 'insuranceList'){
      //   bridge.bridgeFun(function(){
      //     window.WebViewJavascriptBridge.callHandler('controlNavigationBar', { 'isDisplayHead': 0 }, function (res) {})
      //   })
      // }
    }
    //window.WebViewJavascriptBridge.callHandler('controlNavigationBar', { 'isDisplayHead': 0 }, function (res) {})
    this.getInsuranceDetail();
  },
  methods: {
    async getInsuranceDetail() {
      let params = {
        orderNo: this.$route.query.orderNo
      };
      let res = await api.getInsuranceDetail(params);
      console.log(res, "123123123");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      this.info = data;
      this.insuranceDetailView = data.insuranceDetailView;
      if(data.insuranceDetailView.payCountDown){

      }
      let that = this
      if (data.insuranceDetailView.payCountDown&&Number(data.insuranceDetailView.payCountDown)>0) {
        this.restTime = Number(data.insuranceDetailView.payCountDown)
        this.timer = setInterval(function () {
          that.restTime = that.restTime - 1
          if (that.restTime === 0) {
            clearInterval(that.timer)
            // that.$emit("resetForChild");
          }
          that.endTime = that.handleEndTime(that.restTime)
        }, 1000)
      }
      this.insuranceOrderPayInfoView = data.insuranceOrderPayInfoView;
    },
    toCancle(value){
      let self = this
      MessageBox.confirm("", {
        title: "是否取消订单？",
        message: "订单取消后再次购买需重新下单",
        showCancelButton: true,
        confirmButtonText: "是",
        cancelButtonText: "否"
      })
        .then(action => {
          if (action == "confirm") {
            //console.log(value,'嗯嗯嗯对')
            self.cancel(value);
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //self.toHome();
          }
        });
    },
    async cancel(value){
      console.log(value)
      let params = {
        orderId: value
      }
      let res = await api.cancelInsuranceOrder(params)
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.$toast('取消保单成功')
      this.getInsuranceDetail()
    },
    pay(value){
      if(this.isApp){
        if(this.waiting){
          return false
        }
        this.waiting = true
        let self = this
        bridge.appPayCenter(value, 11, 3, function () {
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
      }else{
        this.$toast('请在斑马会员APP内支付')
      }
      
    },
    handleEndTime (sec) {
      if (sec === 0) {
        this.getInsuranceDetail()
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
    back(){
      if(this.isApp){
        if(this.from == 'insuranceList'){
          history.back()
        }else{
          window.location.href = 'ggj://redirect';
        }
      }else{
        history.back()
      }
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
};
</script>
