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
          font-family: DINPro-Medium;
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
    .right-icon {
      img {
        width: 8px;
        margin-right: 10px;
      }
    }
    .stauts-img {
      position: absolute;
      top: 23px;
      right: 15px;
      width: 64px;
      height: 64px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // .checked {
    //   margin-right: 10px;
    //   width: 22px;
    //   height: 22px;
    //   box-sizing: border-box;
    //   border-radius: 22px;
    //   border: 1px solid #666666;
    //   background-image: url("../../../assets/image/insurance/icon-checked.png");
    //   background-repeat: no-repeat;
    //   background-size: 100%;
    //   background-position: center;
    // }
    .radio-button {
      margin-right: 10px;
      border-radius: 11px;
      width: 22px;
      height: 22px;
      border: 1px solid #666666;
      box-sizing: border-box;
    }
    .checked {
      background: url(~images/cart/icon-checked.png) no-repeat center center;
      background-size: cover;
      border: none;
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
    <!-- <div class="left">
      <div class="left-content">
        <div class="price" :class="{'invalid':tabValue !== '1'}"><span>{{coupon.reducePrice}}</span>元</div>
        <div class="condition" :class="{'invalid':tabValue !== '1'}">满{{coupon.thresholdPrice}}元使用</div>
      </div>
      <div class="new-ticket" v-if="coupon.isNew === '1'"><img src="../../../assets/image/personal/new-icon.png"></div>
    </div>
    <div class="right">
      <div class="right-content">
        <div class="name" :class="{'invalid':tabValue !== '1'}">
          <span class="name-icon" :class="{'invalid-bg':tabValue !== '1'}">{{handleScopeType(coupon.scopeType)}}</span>
          {{coupon.scope}}
        </div>
        <div class="time" :class="{'invalid':tabValue !== '1'}">{{coupon.startTime}}-{{coupon.endTime}}</div>
      </div>
      <div class="right-icon" v-if="tabValue === '1'"><img src="../../../assets/image/order/right.png" alt=""></div>
      <div class="stauts-img" v-if="tabValue === '2'"><img src="../../../assets/image/personal/used-discount.png" alt=""></div>
      <div class="stauts-img" v-if="tabValue === '3'"><img src="../../../assets/image/personal/overdue-discount.png" alt=""></div>
    </div> -->
    <div class="left">
      <div class="left-content">
        <div class="price" :class="{'invalid':use !== 1}"><span>{{coupon.reducePrice}}</span>元</div>
        <div class="condition" :class="{'invalid':use !== 1}">满{{coupon.thresholdPrice}}元使用</div>
      </div>
      <div class="new-ticket" v-if="coupon.isNew===1"><img src="../../../assets/image/personal/new-icon.png"></div>
    </div>
    <div class="right">
      <div class="right-content">
        <div class="name" :class="{'invalid':use !== 1}">
          <span class="name-icon" :class="{'invalid-bg':use !== 1}">{{handleScopeType(coupon.scopeType)}}</span>
          {{coupon.couponDesc}}
        </div>
        <div class="time" :class="{'invalid':use !== 1}">{{coupon.startTime}}-{{coupon.endTime}}</div>
      </div>
      <!-- <div class="checked"><img src="../../../assets/image/insurance/icon-checked.png" alt=""></div> -->
      <div class="radio-button" v-if="use == 1" @click="choose(coupon.id)" :class="{'checked':chooseId == coupon.id}"></div>
    </div>
  </div>
</template>

<script>
import api from '@/api/insurance'
import storage from '@/utils/storage-lite'
export default {
  props: ["tabValue","coupon", "id","use", "updateInsuranceConfirmOrder"],
  data() {
    return {
      chooseId: ''
    }
  },
  created() {
    this.chooseId = this.id
    console.log(this.id,'asdasd')
  },
  methods: {
    handleScopeType(value) {
      let scopeType = "";
      if (value === 1) {
        scopeType = "全场";
      } else if (value === 2) {
        scopeType = "通用";
      } else if (value === 3) {
        scopeType = "专用";
      } else if (value === 4) {
        scopeType = "单品";
      }
      return scopeType;
    },
    choose(value){
      console.log(value,'value')
      this.chooseId = value
      this.$emit('updateInsuranceConfirmOrder',this.chooseId)
    }
  }
  
  
};
</script>
