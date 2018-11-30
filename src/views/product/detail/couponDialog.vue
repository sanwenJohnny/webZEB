
<style scoped>
.dialog-cont {
  width: 100%;
  height: 412px;
  background: #fff;
  position: fixed;
  bottom: 0;
  color: #000;
  z-index: 999;
}
.header {
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #eee;
  line-height: 54px;
}
.header span {
  margin-left: 148px;
  font-size: 16px;
}
.close {
  /* display: inline-block; */
  float: right;
  width: 54px;
  height: 54px;
  background: url("~images/product/close.png") no-repeat center;
  background-size: 25%;
}
ul {
  padding-top: 16px;
  padding-left: 10px;
  height: 337px;
  overflow-y: scroll;
}
li {
  width: 355px;
  height: 90px;
  background: url("~images/product/coupon_bg.png") no-repeat;
  background-size: 100%;
  position: relative;
  margin-bottom: 10px;
}
.discount {
  position: absolute;
  font-size: 36px;
  top: 10px;
  left: 10px;
}
.discount i {
  font-size: 16px;
}
.desc {
  position: absolute;
  top: 15px;
  right: 108px;
  text-align: right;
}
.desc span {
  font-size: 14px;
}
.desc em {
  font-size: 10px;
}
.tip {
  position: absolute;
  top: 69px;
  left: 10px;
  color: #858585;
  font-size: 11px;
}
.btn {
  width: 90px;
  height: 90px;
  line-height: 90px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  color: #858585;
}
.red {
  color: #ff0000;
}
.grayfont {
  color: #858585;
}
</style>
<template>
  <transition name="slide">
    <div class="dialog-cont" @click.stop v-if="ops.showCoupon">
      <div class="header">
        <span>可用优惠券</span>
        <i class="close" @click="close"></i>
      </div>
      <ul>
        <li v-for="(coupon,index) in coupons" :key="index" :class="coupon.couponReceiveStatus=='3' ? 'grayfont' : '' ">
          <span class="discount" v-if="coupon.type=='3'">{{coupon.reducePrice}}<i>折</i></span>
          <span class="discount" v-else>{{coupon.reducePrice}}<i>元</i></span>
          <div class="desc">
            <span>满{{coupon.thresholdPrice}}元使用</span><br>
            <em>{{coupon.startTime}}-{{coupon.endTime}}</em>
          </div>
          <span class="tip">{{coupon.scope}}</span>
          <div class="btn" v-if="coupon.couponReceiveStatus=='2'" >已领取</div>
          <div class="btn" v-if="coupon.couponReceiveStatus=='3'">已抢完</div>
          <div class="btn red" v-if="coupon.couponReceiveStatus=='4'" @click="getCouponComp(coupon)">立即领取</div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'coupon-dialog',
  data () {
    return {}
  },
  props: ['ops', 'coupons'],
  computed: {},
  created () {},
  mounted () {},
  methods: {
    close () {
      this.ops.close()
    },
    getCouponComp (coupon) {
      this.ops.receive(coupon.couponId)
    }
  }
}
</script>
