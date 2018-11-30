<style lang="less" scoped>
.single-order-wrapper {
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 4px;
  .order-head {
    width: 325px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: PingFangSC-Regular;
    letter-spacing: 0;
    font-size: 14px;
    .order-head-time {
      color: #999999;
      display: flex;
      align-items: center;
      .time-detail {
        display: flex;
        align-items: center;
        height: 16px;
        line-height: 16px;
      }
      .mark {
        height: 16px;
        line-height: 16px;
        padding: 0 4px;
        font-size: 10px;
        display: flex;
        align-items: center;
        border-radius: 2px;
        margin-left: 4px;
        color: #fff;
      }
      .mark-one {
        background: #1a1a1a;
      }
      .mark-two {
        background: #e1b962;
      }
      .mark-three {
        background: #4a90e2;
      }
      .mark-four {
        background: #71bc1f;
      }
    }
    .order-head-status {
      font-family: PingFangSC-Medium;
      color: #1a1a1a;
    }
  }
  .products-list {
    border-top: 0.5px solid #e6e6e6;
    border-bottom: 0.5px solid #e6e6e6;
    .product {
      width: 325px;
      margin: 0 auto;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.5px solid #e6e6e6;
      .product-left {
        display: flex;
        .product-left-img {
          width: 78px;
          height: 78px;
          border-radius: 4px;
        }
        .product-left-middle {
          width: 154px;
          margin-left: 10px;
          font-family: PingFangSC-Regular;
          letter-spacing: 0;
          .middle-name {
            width: 154px;
            //height: 35px;
            overflow: hidden;
            text-overflow: ellipsis; //文本溢出显示省略号
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 13px;
            color: #333333;
            //width:130px;
            //background-color:cornflowerblue;
          }
          .middle-info {
            font-size: 11px;
            color: #999999;
            margin-top: 7px;
          }
        }
      }
      .product-right {
        position: relative;
        text-align: right;
        font-family: PingFangSC-Regular;
        letter-spacing: 0;
        .product-right-price {
          font-size: 14px;
          color: #151515;
          .rmb {
            font-size: 10px;
          }
        }
        .product-right-number {
          margin-top: 1px;
          font-size: 11px;
          color: #999999;
        }
        .product-right-status {
          width: 100px;
          font-size: 11px;
          color: #f1002d;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
    .some-product:last-child>.product{
      border-bottom: 0;
    }
  }
  .order-bottom {
    width: 325px;
    margin: 0 auto;
    font-family: PingFangSC-Regular;
    letter-spacing: 0;
    .order-bottom-price {
      width: 100%;
      height: 46px;
      display: flex;
      justify-content: flex-end;
      .price-discount {
        margin-right: 10px;
        height: 100%;
        line-height: 46px;
        .price-discount-num {
          font-size: 14px;
        }
      }
      .price-total {
        height: 100%;
        line-height: 46px;
        .price-total-num {
          font-size: 16px;
        }
      }
    }
    .order-bottom-operate {
      display: flex;
      justify-content: flex-end;
      font-family: PingFangSC-Regular;
      letter-spacing: 0;
      .operate-common {
        box-sizing: border-box;
        height: 30px;
        line-height: 30px;
        display: flex;
        align-items: center;
        margin-left: 10px;
        font-size: 14px;
        padding: 0 15px;
        border: 1px solid #b2b2b2;
        border-radius: 4px;
        margin-bottom: 15px;
      }
      .operate-type-one {
        color: #666666;
      }
      .operate-type-two {
        color: #ffffff;
        background-color: #f1002d;
        border: 0;
      }
      .operate-type-three {
        border: 1px solid #b2b2b2;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        text-align: left;
      }
    }
  }
}
</style>
<style lang="less">
.single-order-wrapper {
  .mint-msgbox-wrapper {
    .mint-msgbox {
      background: #ffffff;
      border-radius: 4px;
      width: 270px;
      height: 100px;
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
          padding-bottom: 10px;
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
        border-top: 1px solid #ccc;
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
  <div class="single-order-wrapper">
    <div class="order-head">
      <div class="order-head-time">
        <div class="time-detail">{{orderData.operateTime}}</div>
        <div class="mark mark-one" v-if="orderData.deliverStatus">{{orderData.deliverStatus}}</div>
        <div class="mark mark-two" v-if="orderData.orderType === 9">机票</div>
        <!-- <div class="mark mark-three" v-if="orderData.orderType === 9">酒店</div> -->
        <div class="mark mark-four" v-if="orderData.orderType === 10">保险</div>
      </div>
      <div class="order-head-status">{{orderData.statusDesc}}</div>
    </div>

    <div class="products-list" v-if="orderData.orderDetailList.length">
      <div class="some-product" v-for="(item, index) in orderData.orderDetailList" :key="index" >
        <div class="product" v-for="(m, i) in item.orderProductList" :key="i" @click="toOrderDetail(item.orderId,orderData.orderType,orderData)">
          <div class="product-left">
            <img class="product-left-img" :src="m.image">
            <!-- <img class="product-left-img" src="../../assets/image/order/ticket.png">
            <img class="product-left-img" src="../../assets/image/order/hotel.png">
            <img class="product-left-img" src="../../assets/image/order/insurance.png">
            <img class="product-left-img" src="../../assets/image/order/phone-rate.png"> -->
            <div class="product-left-middle">
              <div class="middle-name">{{m.shortName}}</div>
              <div class="middle-info">{{m.skuDesc}}</div>
            </div>
          </div>
          <div class="product-right">
            <div class="product-right-price"><span class="rmb">¥</span>{{m.salesPrice}}</div>
            <div class="product-right-number" v-if="m.count">x{{m.count}}</div>
            <!-- <div class="product-right-status">退款中</div> -->
            <div class="product-right-status" v-if="m.orderProductStatus === '2'||'3'||'6'||'7'">{{handleOrderProductStatus(m.orderProductStatus)}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="order-bottom">
      <div class="order-bottom-price">
        <div class="price-discount" v-if="orderData.reducePrice !== '0'">优惠: -¥<span class="price-discount-num">{{orderData.reducePrice}}</span></div>
        <div class="price-total">总计: ¥<span class="price-total-num">{{orderData.totalPrice}}</span></div>
      </div>
      <div class="order-bottom-operate">
        <div class="operate-common operate-type-one" v-if="orderData.status === 3" @click="toOrderDetail(orderData.orderDetailList[0].orderId,orderData.orderType,orderData)">查看物流</div>
        <div class="operate-common operate-type-two" v-if="orderData.status === 3" @click="confirmReceive(orderData.orderDetailList[0].orderId, 2)">确认收货</div>
        <!-- <div class="operate-common operate-type-two" v-if="orderData.canShare">晒单</div> -->
        <div class="operate-common operate-type-three" v-if="orderData.status === 1&&orderData.endSecond!=-1" @click="cancel(orderData.orderDetailList, 1)">取消</div>
        <div class="operate-common operate-type-two" v-if="orderData.status === 1&&orderData.endSecond!=-1" @click="toPay(orderData)">去付款{{endTime}}</div>
        <!-- <div class="operate-common operate-type-three">退票</div>
        <div class="operate-common operate-type-three">改签</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/order'
import { MessageBox } from "mint-ui";

export default {
  props: ['orderData', 'resetOrderList'],
  data () {
    return {
      timer: null,
      restTime: '',
      endTime: ''
    }
  },
  created () {
    let that = this
    if (this.orderData.endSecond&&this.orderData.endSecond>0) {
      this.restTime = Number(this.orderData.endSecond)
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
    handleStatus (value) {
      let status = ''
      switch (value) {
        case 1:
          status = '待付款'
          break
        case 2:
          status = '待发货'
          break
        case 3:
          status = '待收获'
          break
        case 4:
          status = '交易成功'
          break
        case 5:
          status = '已取消'
          break
        case 6:
          status = '已取消'
          break
        case 7:
          status = '开团成功'
          break
        case 8:
          status = '拼团失败'
          break
        case 9:
          status = '拼团失败'
          break
        case 10:
          status = '系统取消'
          break
        default:
          break
      }
      return status
    },
    handleOrderProductStatus (value) {
      let status = ''
      switch (value) {
        case '2':
          status = '退款成功'
          break
        case '3':
          status = '退款成功'
          break
        case '5':
          status = '申请中'
          break
        case '6':
          status = '待退货'
          break
        case '7':
          status = '待退款'
          break
        default:
          break
      }
      return status
    },
    toOrderDetail (value,type,data) {
      console.log(data.orderDetailList[0])
      if(type==9||type==10){
        window.location.href = data.orderDetailList[0].clickUrl
      }else{
        this.$router.push({
          path: '/order/detail',
          query: {
            orderId: value,
            orderType: type
          }
        })
      }
    },
    confirmReceive(value, type){
      let self = this
      MessageBox.confirm("", {
        title: "是否确认收货？",
        showCancelButton: true,
        confirmButtonText: "是",
        cancelButtonText: "否"
      })
        .then(action => {
          if (action == "confirm") {
            self.orderModify(value, type);
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //self.toHome();
          }
        });
    },
    async orderModify (value, type) {
      let arr = []
      arr.push(value)
      let params = {
        orderIds: JSON.stringify(arr),
        status: type
      }
      let res = await api.orderModify(params)
      // console.log(res, "======");
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.$emit('resetOrderList')
    },
    cancel(value, type){
      let self = this
      MessageBox.confirm("", {
        title: "是否取消订单？",
        //message: "确认取消保单吗?",
        showCancelButton: true,
        confirmButtonText: "是",
        cancelButtonText: "否"
      })
        .then(action => {
          if (action == "confirm") {
            //console.log(value,'嗯嗯嗯对')
            self.cancelOrder(value, type);
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //self.toHome();
          }
        });
    },
    async cancelOrder (value, type) {
      let arr = []
      for(let i = 0;i < value.length;i++){
        arr.push(value[i].orderId)
      }
      let params = {
        orderIds: JSON.stringify(arr),
        status: type
      }
      console.log(params,'params')
      let res = await api.orderModify(params)
      // console.log(res, "======");
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.$emit('resetOrderList')
    },
    handleEndTime (sec) {
      if (sec === 0) {
        this.$emit('resetOrderList')
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
        if(this.orderData.orderType==9||this.orderData.orderType==10){
          countdownStr =hour +':'+ minute + ':' + second
        }else{
          countdownStr = minute + ':' + second
        }
      
      return countdownStr
    },
    toPay(data){
      if(data.orderType==9||data.orderType==10){
        this.$toast('请在斑马会员APP内支付')
      }else{
        let arr = []
        for(let i = 0;i < data.orderDetailList.length;i++){
          arr.push(Number(data.orderDetailList[i].orderId))
        }
        // this.$router.push({
        //   path: '/order/payCenter',
        //   query:{
        //     orderId: JSON.stringify(arr)
        //   }
        // })
        arr = JSON.stringify(arr)
        location.href = `/order/tradeCenter?orderIds=${arr}`
      }
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
