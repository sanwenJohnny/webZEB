<style lang="less" scoped>
.order-detail-wrapper {
  padding-bottom: 62px;
  .order-remind {
    width: 100%;
    //height: 36px;
    //display: flex;
    //align-items: center;
    background-color: #fff;
    .content {
      height: 36px;
      display: flex;
      align-items: center;
      .order-remind-img {
        height: 12px;
        margin-left: 18px;
      }
      .order-remind-words {
        margin-left: 5px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        letter-spacing: 0;
        .order-remind-time {
          color: #f1002d;
        }
      }
    }
    .tips{
      margin-left: 30px;
      width: 315px;
      padding-bottom: 12px;
      .tip{
        margin-left: 5px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        letter-spacing: 0;
      }
    }
  }
  .order-info {
    width: 345px;
    height: 100px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 4px;
    .order-info-status {
      font-family: PingFangSC-Medium;
      font-size: 15px;
      color: #1a1a1a;
      letter-spacing: 0;
      margin-left: 10px;
      padding-top: 12px;
      font-weight: 900;
    }
    .order-info-number-time {
      margin: 18px 0 0 10px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #1a1a1a;
      letter-spacing: 0;
    }
    .order-info-number {
      .copyBtn {
        font-size: 10px;
        color: #f1002d;
        padding: 0 10px 0 10px;
        display: inline-block;
      }
    }
    .order-info-time {
      margin-top: 8px;
    }
  }
  .phone-number {
    width: 345px;
    height: 52px;
    line-height: 52px;
    background: #ffffff;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 10px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #1a1a1a;
    letter-spacing: 0;
    text-indent: 10px;
  }
  .order-express {
    width: 345px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 4px;
    .order-express-info {
      .order-tabs {
        height: 40px;
        display: flex;
        padding: 0 15px;
        background-color: #fff;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        border-bottom: 0.5px solid #e6e6e6;
        white-space: nowrap;
        overflow-x: auto;
        border-top-left-radius: 4px;
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
      }
      .title {
        margin-left: 10px;
        padding: 15px 0;
        span {
          font-family: PingFangSC-Medium;
          font-size: 15px;
          color: #1a1a1a;
          letter-spacing: 0;
          font-weight: 900;
        }
        .title-number {
          margin-left: 10px;
        }
      }
    }
    .order-express-detail {
      font-family: PingFangSC-Regular;
      letter-spacing: 0;
      margin-left: 10px;
      border-bottom: 0.5px solid #e6e6e6;
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      .left {
        padding-left: 20px;
        border-left: 0.5px solid #e6e6e6;
        margin-left: 10px;
        position: relative;
        .left-words {
          width: 259px;
          font-size: 14px;
          color: #2c82fc;
        }
        .left-time {
          width: 259px;
          font-size: 13px;
          color: #858585;
          margin-top: 6px;
        }
        .left-img {
          position: absolute;
          top: 0;
          left: -9px;
          width: 18px;
          height: 18px;
        }
      }
      .right {
        margin-left: 29px;
        img {
          width: 6px;
        }
      }
    }
    .detail-empty {
      height: 40px;
      line-height: 40px;
      margin: 0 10px;
      border-bottom: 0.5px solid #e6e6e6;
      font-size: 12px;
      color: #000000;
      letter-spacing: 0;
    }
    .empty-style{
      height: 128px;
      line-height: 128px;
      text-align: center;
      font-family: PingFangSC-Medium;
      border-top: 0.5px solid #e6e6e6;
    }
    .order-address {
      padding-top: 15px;
      font-family: PingFangSC-Regular;
      letter-spacing: 0;
      font-size: 14px;
      color: #1a1a1a;
      padding-bottom: 15px;
      .order-address-detail {
        margin-left: 20px;
        position: relative;
        .person-info {
          width: 294px;
          margin-left: 20px;
          .person-info-name {
            position: relative;
            .name {
              font-family: PingFangSC-Semibold;
              font-weight: 900;
              font-size: 16px;
              color: #1a1a1a;
              margin-right: 8px;
            }
            .edit-address {
              position: absolute;
              right: 0;
              top: 0;
              border: 0.5px solid #f1002d;
              border-radius: 4px;
              width: 88px;
              height: 22px;
              line-height: 22px;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #f1002d;
              letter-spacing: 0;
              text-align: center;
            }
          }
          .person-info-address {
            margin: 6px 0;
          }
        }
        .order-address-img {
          position: absolute;
          width: 16px;
          height: 18px;
          top: 0;
          left: -8px;
        }
      }
    }
    .order-envelope {
      width: 100%;
      height: 3px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .order-goods-detail {
    width: 345px;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 4px;
    margin-top: 10px;
    .goods-detail-content {
      margin: 0 10px;
      .title {
        box-sizing: border-box;
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        font-weight: 900;
        border-bottom: 0.5px solid #e6e6e6;
      }
      .goods-list {
        padding-bottom: 15px;
        border-bottom: 0.5px solid #e6e6e6;
        .single-good {
          width: 100%;
          padding-top: 15px;
          display: flex;
          justify-content: space-between;
          font-family: PingFangSC-Regular;
          letter-spacing: 0;
          .left {
            display: flex;
            .good-img {
              width: 78px;
              height: 78px;
            }
            .good-info {
              margin-left: 10px;
              width: 154px;
              height: 77px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .good-info-name {
                height: 35px;
                overflow: hidden;
                text-overflow: ellipsis; //文本溢出显示省略号
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 13px;
                color: #333333;
              }
              .good-info-intro {
                height: 34px;
                overflow: hidden;
                text-overflow: ellipsis; //文本溢出显示省略号
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 11px;
                color: #999999;
                margin-top: 6px;
              }
            }
          }
          .right {
            position: relative;
            .good-price {
              text-align: right;
              font-size: 10px;
              .good-price-total {
                font-size: 14px;
              }
            }
            .good-number {
              font-size: 11px;
              color: #999999;
              text-align: right;
            }
            .good-operate {
              margin-top: 38px;
              // position: absolute;
              // bottom: 0;
              // right: 0;
              .operate {
                padding: 0 8px;
                height: 22px;
                line-height: 22px;
                border: 0.5px solid #858585;
                border-radius: 4px;
                font-size: 12px;
                color: #4d4d4d;
              }
            }
          }
        }
      }
      .goods-price-content {
        padding: 15px 0;
        .cost {
          display: flex;
          justify-content: space-between;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #666666;
          letter-spacing: 0;
          margin-top: 10px;
        }
        .cost:first-child {
          margin-top: 0;
        }
      }
    }
  }
  .complain {
    width: 345px;
    height: 52px;
    background: #ffffff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 10px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    div {
      margin-left: 10px;
    }
    img {
      height: 14px;
      margin-right: 10px;
    }
  }
  .contact {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 52px;
    line-height: 52px;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    background-color: #fff;
  }
}
</style>

<template>
  <div class="order-detail-wrapper">
    <div class="order-remind" v-if="info.endSecond&&info.deliverStatus==='待收货'">
      <div class="content">
        <img class="order-remind-img" src="../../assets/image/order/remind.png" alt="">
        <div class="order-remind-words">订单将在<span class="order-remind-time">{{endTime}}</span>后自动确认收货。</div>
      </div>
      <div class="tips">
        <div class="tip" v-if="info.tips" v-for="(item, index) in info.tips" :key="index">
          {{item}}
        </div>
      </div>
    </div>

    <div class="order-remind" v-if="info.endSecond&&info.deliverStatus==='待付款'">
      <div class="content">
        <img class="order-remind-img" src="../../assets/image/order/remind.png" alt="">
        <div class="order-remind-words">请在<span class="order-remind-time">{{endTime}}</span>内付款，时间结束后订单将会被取消。</div>
      </div>
    </div>

    <div class="order-remind" v-if="info.deliverStatus==='超时取消'">
      <div class="content">
        <img class="order-remind-img" src="../../assets/image/order/remind.png" alt="">
        <div class="order-remind-words">提交订单后<span class="order-remind-time">30:00</span>内未付款，订单已取消。</div>
      </div>
    </div>

    <div class="order-info">
      <p class="order-info-status">{{info.deliverStatus}}</p>
      <div class="order-info-number-time">
        <div class="order-info-number">订单编号：<span ref="order_number">{{info.orderNumber}}</span><span class="copyBtn" @click="copyBtn(info.orderNumber)">复制</span></div>
        <div class="order-info-time">{{info.orderStatus != '1'&&info.orderStatus != '5'&&info.orderStatus != '6'&&info.orderStatus != '10'?'付款时间：':'下单时间：'}}{{info.operateTime}}</div>
      </div>
    </div>

    <div class="phone-number" v-if="orderType == ('5'||'6')">充值号码：{{info.chargeAccount}}</div>

    <div class="order-express" v-if="orderType == ('1'||'2'||'3'||'4')">
      <div class="order-express-info">
        <div class="order-tabs" v-if="info.logisticsInfo&&info.logisticsInfo.length>1">
          <div class="tab" @click="tabChange(index)" v-for="(item, index) in info.logisticsInfo" :key="index"><span>包裹{{index+1}}</span><div class="tab-active" v-show="tabValue === index"><div class="tab-active-white"></div></div></div>
          <!-- <div class="tab" @click="tabChange(1)"><span>包裹2</span><div class="tab-active" v-show="tabValue === 1"><div class="tab-active-white"></div></div></div> -->
          <!-- <div class="tab" @click="tabChange('2')"><span>包裹3</span><div class="tab-active" v-show="tabValue === '2'"><div class="tab-active-white"></div></div></div>
          <div class="tab" @click="tabChange('3')"><span>包裹4</span><div class="tab-active" v-show="tabValue === '3'"><div class="tab-active-white"></div></div></div>
          <div class="tab" @click="tabChange('4')"><span>包裹5</span><div class="tab-active" v-show="tabValue === '4'"><div class="tab-active-white"></div></div></div>
          <div class="tab" @click="tabChange('5')"><span>包裹6</span><div class="tab-active" v-show="tabValue === '5'"><div class="tab-active-white"></div></div></div>
          <div class="tab" @click="tabChange('6')"><span>包裹7</span><div class="tab-active" v-show="tabValue === '6'"><div class="tab-active-white"></div></div></div>
          <div class="tab" @click="tabChange('7')"><span>包裹8</span><div class="tab-active" v-show="tabValue === '7'"><div class="tab-active-white"></div></div></div> -->
        </div>
        <div class="logistics-list" v-if="info.logisticsInfo&&info.logisticsInfo.length">
          <div v-for="(l, d) in info.logisticsInfo" :key="d" v-show="tabValue === d">
            <div class="single-content" v-if="!l.packageTip">
              <div class="title">
                <span>{{l.logisticsChannel}}</span><span class="title-number">{{l.logisticsNumber}}</span>
              </div>
              <div class="order-express-detail" @click="toLogisticsDetails(l.logisticsUrl)">
                <div class="left" v-for="(m,i) in l.logisticsDetails" :key="i">
                  <div class="left-words">{{m.content}}</div>
                  <div class="left-time">{{m.operateTime}}</div>
                  <img class="left-img" src="../../assets/image/order/express.png" alt="">
                </div>
                <div class="right">
                  <img src="../../assets/image/order/right.png" alt="">
                </div>
              </div>
            </div>
            <div class="detail-empty" :class="{'empty-style':info.logisticsInfo.length>1}" v-if="l.packageTip">{{l.packageTip}}</div>
          </div>  
               
        </div>
        
      </div>
      <div class="order-address">
        <div class="order-address-detail">
          <div class="person-info">
            <div class="person-info-name"><span class="name">{{info.receiveName}}</span><span>{{info.receivePhone}}</span><div class="edit-address" v-if="info.canChangeAddress === '1'" @click="editAddress(info.changeAddressUrl,info)">修改收货地址</div></div>
            <p class="person-info-address">{{info.nationwide}}{{info.receiveAddress}}</p>
            <!-- <p class="person-info-id" v-if="info.idCard">身份证号：{{info.idCard}}</p> -->
          </div>
          <img class="order-address-img" src="../../assets/image/order/address.png" alt="">
        </div>
      </div>
      <div class="order-envelope"><img src="../../assets/image/order/envelope.png" alt=""></div>
    </div>

    <div class="order-goods-detail">
      <div class="goods-detail-content">
        <div class="title" v-if="orderType != 7">{{info.sellerName}}{{info.sendAddress}}发货 <span v-if="info.freightPrice === '0'">(包邮)</span></div>
        <div class="goods-list">
          <div class="single-good" v-for="(m, i) in info.orderProductList" :key="i">
            <div class="left" @click="toGoodDetail(m.clickAction)">
              <img class="good-img" :src="m.image">
              <div class="good-info">
                <div class="good-info-name">{{m.shortName}}</div>
                <div class="good-info-intro">{{m.skuDesc}}</div>
              </div>
            </div>
            <div class="right">
              <div class="good-price">¥<span class="good-price-total">{{m.salesPrice}}</span></div>
              <div class="good-number" v-if="m.count">x{{m.count}}</div>
              <div class="good-operate">
                <div class="operate" v-if="m.refundUrl" @click="refund(m.refundUrl)">{{handleOrderProductStatus(m.orderProductStatus)}}</div>
              </div>
            </div>
          </div>
          <!-- <div class="single-good">
            <div class="left">
              <img class="good-img" src="http://sc.jb51.net/uploads/allimg/150516/11-150516144125152.jpg" alt="">
              <div class="good-info">
                <div class="good-info-name">【预售9.13发货】【30瓶】日本FANCL胶原蛋白口服液口服补水滋润白皙</div>
                <div class="good-info-intro">礼盒一；奶油黄加巧克力口味[预售10天发货]</div>
              </div>
            </div>
            <div class="right">
              <div class="good-price">¥<span class="good-price-total">129</span></div>
              <div class="good-number">x1</div>
              <div class="good-operate">
                <div class="operate">退款成功</div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="goods-price-content">
          <div class="cost" v-if="orderType == ('1'||'2'||'3'||'4')"><div>运费</div><div>¥{{info.freightPrice}}</div></div>
          <div class="cost"><div>订单总计</div><div>¥{{info.totalPrice}}</div></div>
          <div class="cost" v-if="info.optionalPartDeratePrice != '0'"><div>N元任选</div><div>¥{{info.optionalPartDeratePrice}}</div></div>
          <div class="cost" v-if="info.activitiesDeratePrice !== '0'"><div>满减活动</div><div>-¥{{info.activitiesDeratePrice}}</div></div>
          <div class="cost" v-if="info.couponDeratePrice !== '0'"><div>优惠券减免</div><div>-¥{{info.couponDeratePrice}}</div></div>
          <div class="cost" v-if="info.memberDeratePrice !== '0'"><div>会员减免</div><div>-¥{{info.memberDeratePrice}}</div></div>
          <div class="cost" v-if="info.cutPriceDeratePrice !== '0'"><div>砍价减免</div><div>-¥{{info.cutPriceDeratePrice}}</div></div>
          <div class="cost" v-if="info.usedCoin"><div>G币抵现</div><div>-¥{{handleUseCoin(info.usedCoin)}}</div></div>
          <div class="cost"><div>{{info.orderStatus == '1'?'待付金额':'实付金额'}}</div><div>¥{{info.realPrice}}</div></div>
          <div class="cost" v-if="info.orderStatus != '1'&&info.orderStatus != '5'&&info.orderStatus != '6'"><div>支付方式</div><div>{{info.payChannelDesc}}</div></div>
          <div class="cost" v-if="info.installmentDetail"><div>总分期详情</div><div>{{info.installmentDetail}}</div></div>
        </div>
      </div>
    </div>

    <div class="complain" v-if="info.complainUrl" @click="toComplain">
      <div>投诉商家</div>
      <img src="../../assets/image/order/right.png" alt="">
    </div>

    <div class="contact" @click="kefu">联系客服</div>
  </div>
</template>

<script>
import api from "@/api/order";
import ease from "@/utils/ease";

export default {
  data() {
    return {
      tabValue: 0,
      info: "",
      imInfo: "",
      timer: null,
      restTime: "",
      endTime: "",
      orderType: ""
    };
  },
  created() {
    this.getOrderDetail();
    this.orderType = this.$route.query.orderType;
    console.log(this.orderType, "this.orderType");
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  },
  methods: {
    tabChange(value) {
      this.tabValue = value;
    },
    async getOrderDetail() {
      let orderId = this.$route.query.orderId;
      let params = {
        orderId: orderId
      };
      let res = await api.getOrderDetail(params);
      console.log(res, "获取订单详情");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      this.info = data;
      if (this.info.endSecond && Number(this.info.endSecond) > 0) {
        if (this.info.deliverStatus === "待收货") {
          this.timeCtrl(Number(this.info.endSecond));
        } else if (this.info.deliverStatus === "待付款") {
          this.timeCtrlTwo(Number(this.info.endSecond));
        }
      }
      this.imInfo = data.imserviceInfo;
      console.log(data.imserviceInfo.tenantId,'data.imserviceInfo.tenantId')
      console.log(data.imserviceInfo.imNum,'data.imserviceInfo.imNum')
      ease.config(data.imserviceInfo.tenantId, data.imserviceInfo.imNum);
    },
    toLogisticsDetails(value) {
      location.href = value;
    },
    handleOrderProductStatus(value) {
      let status = "";
      switch (value) {
        case "1":
          status = "待付款";
          break;
        case "2":
          status = "退款成功";
          break;
        case "3":
          status = "退款成功";
          break;
        case "4":
          status = "申请退款";
          break;
        case "5":
          status = "申请中";
          break;
        case "6":
          status = "待退货";
          break;
        case "7":
          status = "待退款";
          break;
        case "8":
          status = "拼团失败";
          break;
        case "9":
          status = "拼团失败";
          break;
        default:
          break;
      }
      return status;
    },
    toGoodDetail(value){
      if(value.type == 14){
        location.href = value.webUrl
      }else if(value.type == 16){
        this.$router.push({
          path: '/personal/gcoin'
        })
      }else{
        this.$router.push({
          path: '/product/detail',
          query: {
            saleGoodsId: value.id
          }
        })
      }
    },
    refund(value) {
      location.href = value;
    },
    toComplain() {
      //location.href = value;
      this.$router.push({
        path: "/complain/apply",
        query: {
          orderId: this.$route.query.orderId
        }
      });
    },
    kefu(e) {
      console.log(e,'e')
      console.log(this.imInfo.tenantId,'this.imInfo.tenantId')
      ease.bindEase(e, this.imInfo.tenantId);
    },
    timeCtrl(value) {
      let that = this;
      this.restTime = value;
      this.timer = setInterval(function() {
        that.restTime = that.restTime - 1;
        if (that.restTime === 0) {
          clearInterval(that.timer);
          // that.$emit("resetForChild");
        }
        that.endTime = that.ShowCountDown(that.restTime);
      }, 1000);
    },
    timeCtrlTwo(value) {
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
        //this.$emit('resetOrderList')
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
      countdownStr = minute + ":" + second;
      //console.log(countdownStr, "2222");
      return countdownStr;
    },
    ShowCountDown(value) {
      var countdownStr;
      var dd = parseInt(value / 60 / 60 / 24); //计算剩余的天数
      var hh = parseInt((value / 60 / 60) % 24); //计算剩余的小时数
      var mm = parseInt((value / 60) % 60); //计算剩余的分钟数
      var ss = parseInt(value % 60); //计算剩余的秒数
      dd = this.checkTime(dd);
      hh = this.checkTime(hh);
      mm = this.checkTime(mm);
      ss = this.checkTime(ss); //小于10的话加0
      countdownStr = dd + "天" + hh + ":" + mm + ":" + ss;
      //console.log(countdownStr, "countdownStr");
      return countdownStr;
    },
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    copy(con) {
      let range;
      let _this = this;
      let save = function(e) {
        e.clipboardData.setData("text/plain", con);
        e.preventDefault();
      };
      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        //ios设备
        window.getSelection().removeAllRanges();
        range = document.createRange();
        range.selectNode(this.$refs.order_number);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
      } else {
        // 安卓设备
        document.addEventListener("copy", save);
        document.execCommand("copy");
        document.removeEventListener("copy", save);
      }
      setTimeout(function() {
        _this.$toast("复制成功");
      }, 200);
    },
    copyBtn(orderNum) {
      console.log(orderNum);
      try {
        this.copy(orderNum);
      } catch (e) {
        this.$toast("请手动选中订单编号进行复制");
      }
    },
    editAddress(value, data) {
      // this.$router.push({
      //   path: '/address/list',
      //   query:{
      //     orderId: this.$route.query.orderId,   
      //     isOrderDetail: 1
      //   }
      // })

      // ios和app也会跳转修改地址
      let url = value + "&isOrderDetail=1"
      window.location.href = url;
    },
    handleUseCoin(value){
      let coin = parseInt(value) / 100
      return coin
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>
