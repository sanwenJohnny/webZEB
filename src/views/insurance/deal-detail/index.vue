<style lang="less" scoped>
.deal-wrapper {
  font-family: "PingFangSC", "Noto Sans CJK SC", "Helvetica Neue", Helvetica, "Microsoft YaHei", Tahoma, Arial, sans-serif;
  .head {
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #fff;
    letter-spacing: 0;
    background: #1a1a1a;
  }
  .common {
    .content {
      background: #ffffff;
      .status-img {
        text-align: center;
        padding-top: 32px;
        img {
          width: 66px;
          height: 66px;
        }
      }
      .status-name {
        text-align: center;
        font-family: PingFangSC-Medium;
        font-weight: 900;
        font-size: 20px;
        color: #1a1a1a;
        letter-spacing: 0;
        margin-top: 10px;
      }
      .status-mark {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1a1a1a;
        letter-spacing: 0;
        margin-top: 2px;
        .time {
          color: #f1002d;
        }
      }
      .deal-info {
        margin-top: 30px;
        padding-bottom: 20px;
        .row {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #858585;
          letter-spacing: 0;
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          margin-bottom: 10px;
        }
        .row:last-child {
          margin-bottom: 0;
        }
      }
    }
    .success-back {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #ffffff;
      border-radius: 4px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #1a1a1a;
      letter-spacing: 0;
    }
  }
  .failed {
    .content {
      .deal-info {
        margin-top: 16px;
        .row {
          align-items: center;
          .price-icon {
            font-family: PingFangSC-Medium;
            font-weight: 900;
            font-size: 16px;
            color: #f1002d;
            letter-spacing: 0;
            line-height: 32px;
          }
          .number {
            font-family: PingFangSC-Medium;
            font-size: 28px;
            color: #f1002d;
            letter-spacing: 0;
            line-height: 32px;
          }
        }
      }
    }
    .operate {
      margin-top: 20px;
      display: flex;
      .back,
      .pay {
        width: 165px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 17px;
        letter-spacing: 0;
        margin-left: 15px;
      }
      .back {
        box-sizing: border-box;
        border: 1px solid #1a1a1a;
        color: #1a1a1a;
      }
      .pay {
        background: #f1002d;
        color: #fff;
      }
      .can-not-pay {
        width: 165px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 17px;
        letter-spacing: 0;
        margin-left: 15px;
        background: #858585;
        color: #fff;
      }
    }
  }
  .insurance-list {
    position: fixed;
    bottom: 40px;
    left: 20px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    background: #000;
    color: #fff;
    text-align: center;
    border-radius: 60px;
  }
}
</style>
<style lang="less">
.deal-wrapper {
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
  <div class="deal-wrapper">
    <div class="head">交易详情</div>
    <div class="common success" v-if="paySuccess">
      <div class="content">
        <div class="status-img"><img src="../../../assets/image/insurance/deal-success.png"></div>
        <div class="status-name">付款成功</div>
        <div class="deal-info">
          <div class="row"><span>订单编号：</span><span>{{info.orderNumber}}</span></div>
          <div class="row"><span>交易时间：</span><span>{{info.createdTime}}</span></div>
          <div class="row"><span>支付方式：</span><span>{{info.payChannelName}}</span></div>
          <div class="row"><span>支付金额：</span><span>￥{{info.realPrice}}</span></div>
        </div>
      </div>
      <div class="success-back" @click="toHome">回首页</div>
    </div>

    <div class="common failed" v-if="!paySuccess">
      <div class="content">
        <div class="status-img"><img src="../../../assets/image/insurance/deal-failed.png"></div>
        <div class="status-name">付款失败</div>
        <div class="status-mark">请在<span class="time">{{endTime}}</span>内完成付款</div>
        <div class="deal-info">
          <div class="row"><span>订单总计：</span><span>￥{{info.totalPrice}}</span></div>
          <div v-if="info.promotionDetailViews&&info.promotionDetailViews.length">
            <div class="row" v-for="(item, index) in info.promotionDetailViews" :key="index"><span>{{item.name}}：</span><span>-￥{{item.amount}}</span></div>
          </div>
          <!-- <div class="row"><span>G币抵扣：</span><span>-￥1.19</span></div> -->
          <div class="row"><div>应付金额(含邮费)：</div><div><span class="price-icon">￥</span><span class="number">{{info.realPrice}}</span></div></div>
        </div>
      </div>
      <div class="operate">
        <div class="back" @click="toHomePage">回首页</div>
        <div class="pay" @click="pay" v-if="canPay">去付款</div>
        <div class="can-not-pay" v-if="!canPay">去付款</div>
      </div>
    </div>
    <!-- <div class="insurance-list" @click="toInsuranceList">我的保单</div> -->
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import tools from "@/utils/tools";
import bridge from "@/utils/bridge";
import api from "@/api/insurance";

export default {
  data() {
    return {
      orderId: "",
      payResult: "",
      info: "",
      timer: null,
      restTime: "",
      endTime: "",
      canPay: 1,
      paySuccess: '',
      waiting: false
    };
  },
  created() {
    bridge.bridgeFun(function(){
      window.WebViewJavascriptBridge.callHandler(
        "controlNavigationBar",
        { isDisplayHead: 0 },
        function(res) {}
      );
    })
    this.orderId = this.$route.query.orderId;
    //this.payResult = this.$route.query.payResult;
    this.payDetail();
  },
  methods: {
    callback() {
      window.WebViewJavascriptBridge.callHandler(
        "controlNavigationBar",
        { isDisplayHead: 0 },
        function(res) {}
      );
    },
    async payDetail() {
      let params = {
        orderId: this.$route.query.orderId
      };
      let res = await api.payDetail(params);
      console.log(res, "交易详情结果");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      this.info = data;
      this.paySuccess = data.paySuccess;
      if (data.payLeftSeconds && Number(data.payLeftSeconds) > 0) {
        this.daojishi(Number(data.payLeftSeconds));
      }
    },
    daojishi(value) {
      let that = this;
      this.restTime = value;
      this.timer = setInterval(function() {
        that.restTime = that.restTime - 1;
        if (that.restTime === 0) {
          clearInterval(that.timer);
          // that.$emit("resetForChild");
        }
        that.endTime = that.handleEndTime(that.restTime);
      }, 1000);
    },
    handleEndTime(sec) {
      if (sec === 0) {
        this.canPay = 0;
        return false;
      }
      var hour = 0;
      var minute = 0;
      var second = 0;
      var countdownStr;
      if (sec >= 60) {
        minute = Math.floor(sec / 60);
        second = sec % 60;
        if (minute >= 60) {
          hour = Math.floor(minute / 60);
          minute = minute % 60;
        } else {
          hour = 0;
        }
      } else {
        second = sec;
        hour = 0;
        minute = 0;
      }

      hour = parseInt(hour) < 10 && parseInt(hour) > 0 ? "0" + hour : hour;
      minute =
        parseInt(minute) < 10 && parseInt(minute) > 0 ? "0" + minute : minute;
      second =
        parseInt(second) < 10 && parseInt(second) > 0 ? "0" + second : second;
      countdownStr = hour + ":" + minute + ":" + second;
      return countdownStr;
    },
    pay() {
      
      if(this.waiting){
        return false
      }
      this.waiting = true
      let self = this;
      bridge.appPayCenter(
        self.orderId,
        11,
        3,
        function() {
          
          self.payDetail()
          // self.$router.push({
          //   path: "/insurance/deal/detail",
          //   query: {
          //     payResult: 1,
          //     orderId: value,
          //     isHide: 1
          //   }
          // });
          
        },
        function() {
          //self.waiting = false
          self.payDetail()
          // self.$router.push({
          //   path: "/insurance/deal/detail",
          //   query: {
          //     payResult: 0,
          //     orderId: value,
          //     isHide: 1
          //   }
          // });
          
        }
      );
      self.waiting = false
    },
    toHomePage() {
      let self = this;
      if (!this.paySuccess) {
        MessageBox.confirm("", {
          title: "确认放弃支付吗？",
          message: "超过订单支付时效后，订单将被取消，请尽快完成支付?",
          showCancelButton: true,
          confirmButtonText: "继续支付",
          cancelButtonText: "放弃"
        })
          .then(action => {
            if (action == "confirm") {
              self.pay();
            }
          })
          .catch(err => {
            if (err == "cancel") {
              self.toHome();
            }
          });
      } else {
        this.toHome();
      }
    },
    toHome() {
      window.WebViewJavascriptBridge.callHandler("controlNavigationBar", { isDisplayHead: 1 },function(res) {});
      window.WebViewJavascriptBridge.callHandler("backForwardToFirst");
      let href = window.location.href;
      if (href.indexOf("h5test") != -1) {
        window.location.href = "http://wxxtest.jbx188.com:8394/goodsList?pcode=bxmall-yildx-h5-all&uid=0&shopId=1&isShowClose=1";
      }else if(href.indexOf("h5preview") != -1){
        window.location.href = "http://wxxtest.jbx188.com:8394/goodsList?pcode=bxmall-yildx-h5-all&uid=0&shopId=1&isShowClose=1";
      } else {
        alert("未检测到测试环境");
      }
    },
    toInsuranceList() {
      this.$router.push({
        path: "/insurance"
      });
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>
