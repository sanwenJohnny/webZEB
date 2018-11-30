<style lang="less" scoped>
.ticket-wrapper {
  width: 345px;
  height: 110px;
  margin-bottom: 10px;
  display: flex;
  .left {
    width: 137px;
    height: 100%;
    background-image: url("../../../assets/image/personal/left-bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .left-content {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #1a1a1a;
      letter-spacing: 0;
      text-align: center;
      .price {
        font-size: 16px;
        color: #1a1a1a;
        line-height: 16px;
        span {
          font-family: PingFangSC-Medium;
          font-size: 38px;
          line-height: 36px;
        }
        margin-bottom: 10px;
      }
    }
    .new-ticket {
      position: absolute;
      left: 0;
      top: 0;
      img {
        width: 34px;
        height: 34px;
      }
    }
  }
  .gray-left {
    background-image: url("../../../assets/image/personal/left-gray.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .right {
    width: 208px;
    height: 100%;
    background-image: url("../../../assets/image/personal/right-bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .right-content {
      width: 144px;
      height: 60px;
      margin-left: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: PingFangSC-Regular;
      .name {
        font-size: 12px;
        color: #1a1a1a;
        line-height: 16px;
        .name-icon {
          display: inline-block;
          padding: 1px 4px;
          font-family: PingFangSC-Medium;
          font-size: 10px;
          color: #ffffff;
          letter-spacing: 0;
          background: #f1002d;
          border-radius: 1px;
        }
      }
      .time {
        font-size: 12px;
        color: #999999;
        line-height: 12px;
        margin-top: 15px;
      }
    }
    .right-part {
      float: right;
      height: 100%;
      margin-right: 10px;      
      display: flex;
      align-items: center;
      .pay-radio {
        width: 22px;
        height: 22px;
        box-sizing: border-box;
        border-radius: 11px;
        background-color: #FFF;
        border: 1px solid #E0E0E0;
      }
      .pay-radio-checked {
        background: url(~images/order/icon-pay-checked.png) no-repeat center center;
        background-size: 22px 22px;
        border: none;
      }
    }
    .stauts-img{
      position: absolute;
      top: 23px;
      right: 15px;
      width: 64px;
      height: 64px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.invalid {
  color: #e0e0e0 !important;
}
.invalid-bg {
  background-color: #e0e0e0 !important;
}
</style>

<template>
  <div class="ticket-wrapper">
    <div class="left" :class="{'gray-left':!coupon.isAvailable}">
      <div class="left-content">
        <div class="price" :class="{'invalid': !coupon.isAvailable}" v-if="coupon.type=='1'||coupon.type=='2'"><span>{{coupon.reducePrice}}</span>元</div>
        <div class="price" :class="{'invalid': !coupon.isAvailable}" v-if="coupon.type=='3'"><span>{{coupon.reducePrice}}</span>折</div>
        <div class="condition" :class="{'invalid': !coupon.isAvailable}">满{{coupon.thresholdPrice}}元使用</div>
      </div>
      <div class="new-ticket" v-if="coupon.isNew"><img src="../../../assets/image/personal/new-icon.png"></div>
    </div>
    <div class="right">
      <div class="right-content">
        <div class="name" :class="{'invalid': !coupon.isAvailable}">
          <span class="name-icon" :class="{'invalid-bg':!coupon.isAvailable}">{{ScopeType[coupon.scopeType]}}</span>
          {{coupon.scope}}
        </div>
        <div class="time" :class="{'invalid': !coupon.isAvailable}">{{coupon.startTime}}-{{coupon.endTime}}</div>
      </div>
      <div class="right-part" @click="chooseId(coupon.couponId)" v-if="coupon.isAvailable === 1">
        <span :class="coupon.selected ? 'pay-radio pay-radio-checked' : 'pay-radio'"></span>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['coupon'],
  name:'couponItem',
  data () {
    return {
      ScopeType: ['','全场','专场','单品','专用']
    }
  },
  methods: {
    // 选中
    chooseId(id) {
      this.$emit('choose',id)
    }
  }
}
</script>
