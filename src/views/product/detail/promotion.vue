<style lang="less" scoped>
.product-info-title {
  position:relative;
  display: flex;
  height: 38px;
  align-items: center;
  background-color: #fff;
  padding-left: 13px;
  //padding-top:11px;
}
.between {
  justify-content: space-between;
}
.low-price {
  font-size: 24px;
  margin-right: 4px;
  color:#F1002D;
  b{
    font-size:14px;
    font-weight:bold;
  }
}
.price-icon {
  position:absolute;
  top:0;
  left:0;
  height:24px;
  line-height:24px;
  box-sizing: border-box;
  width:100%;
  padding-left:15px;
  background: #FAF2DF;
  font-size: 12px;
  color: #BC8C29;
}
.high-price {
  color: #1a1a1a;
  font-size:16px;
  align-self: flex-start;
  margin: 9px 12px 0 10px;
}
.high-price i {
  b{
    font-size:12px;
  }
}
.vip-icon {
  // font-size: 7px;
  // background: #d5ad5b;
  // color: #fff;
  // padding: 0 1px;
  // border-radius: 1px;
  width:22px;
  //margin-left: 4px;
  align-self: flex-start;
  //vertical-align: top;
  margin-top: 8px;
}
.new-vip-icon{
  width:48px;
  margin-top:10px;
}
.vip-price {
  font-size: 16px;
  align-self: flex-start;
  vertical-align: top;
  margin-top: 6px;
  color: #c59f51;
}
.time-count {
  color: #666;
  font-size: 11px;
  right: 15px;
}
.product-intro {
  color: #f1002d;
  padding-left: 15px;
  margin-bottom: 10px;
}
.color-gold{
  color:#BC8C29;
}
.promotion-price {
  color: #F1002D;
  margin-left: 12px;
  margin-bottom: 14px;
}
.promotion-zone {
  display: inline-block;
  font-size: 0;
}
.promotion-low-price {
  font-size: 28px;
  margin-right: 6px;
  b{
    font-size:16px;
  }
}
.promotion-tip {
  font-size: 10px;
}
.promotion-high-price {
  font-size: 12px;
  img{
    display:block;
    width:22px;
  }
}
.promotion-price-wraper{
  display:flex;
  align-items: center;
}
.promotion-count {
  margin-right: 5px;
  line-height:1;
  color: #fff;
  font-size: 11px;
}
.promotion-count i {
  display: inline-block;
  width: 30px;
  height: 18px;
  line-height: 19px;
  vertical-align: middle;
  text-align: center;
  font-weight:bold;
  font-size:14px;
  &:first-child{
    margin-left:3px;
  }
  &:last-child{
    width:25px;
  }
}
.normal-top {
  top: 12px;
}
.new-member-title {
  background: url("http://yangege.b0.upaiyun.com/product/2e525d81752ab.png")
    no-repeat right top;
  background-size: auto 100%;
}
.sale-count{
  float:right;
  margin-right:15px;
  color:#1a1a1a;
  font-size:11px;
}
.pos-right{
  position:absolute;
  top:12px;
  right:15px;
  margin-right:0;
}
.pos-top{
  top:36px;
}
.pt-35{
  padding-top:35px;
}
.pt-11{
  padding-top:11px;
}
/*.promotion-top { top: 16px; }*/
</style>

<template>
  <div class="promotion" v-if="promotion">

    <!-- 日常无活动 -->
    <div class="product-info-title pt-11" v-if="promotion.type=='0'" :class="{'new-member-title':product.memberProductType == 3}">
      <span class="low-price"><b>￥</b>{{product.lowPrice}}</span>
      <template v-if="product.memberProductType == 3">
        <span class="vip-price "><i class="new-vip-icon"><img src="~images/product/newvip.png" alt=""></i></span>
        <span class="high-price ml-5"><i><b>￥</b>{{product.highPrice}}</i></span>
      </template>
      <template v-else>
        <span class="vip-price "><i class="vip-icon"><img src="~images/vip-redicon.png" alt=""></i></span>
        <span class="high-price"><i><b>￥</b>{{product.highPrice}}</i></span>
      </template>
      <span class="sale-count pos-right">{{product.sellCountInfo}}</span>
      <!-- <span class="inlbk time-count abs">距活动开始<i></i></span> -->
    </div>

    <!-- 日常促销 -->
    <div class="product-info-title pt-35" v-if="promotion.type=='1'">
      <p class="price-icon" v-if="promotion.name">{{promotion.name}}<span class="inlbk time-count abs" v-if="promotion.second>0">距结束剩<i>{{time.nH}}:{{time.nM}}:{{time.nS}}</i></span></p>
      <span class="low-price"><b>￥</b>{{product.lowPrice}}</span>
      <span class="vip-price "><i class="vip-icon"><img src="~images/vip-redicon.png" alt=""></i></span>
      <span class="high-price">￥{{product.highPrice}}</span>
      <span class="sale-count pos-right pos-top">{{product.sellCountInfo}}</span>
    </div>

    <!-- 大促预热 -->
    <div class="product-info-title pt-11" v-if="promotion.type=='3'&&promotion.activityStatus=='1'">
      <span class="low-price"><b>￥</b>{{product.lowPrice}}</span>
      <span class="vip-price "><i class="vip-icon"><img src="~images/vip-redicon.png" alt=""></i></span>
      <span class="high-price"><i><b>￥</b>{{product.highPrice}}</i></span>
      <span class="sale-count pos-right">{{product.sellCountInfo}}</span>
      <span class="inlbk time-count abs" v-if="promotion.second>0" style="bottom: -15px;">距开始剩<i>{{time.nH}}:{{time.nM}}:{{time.nS}}</i></span>
    </div>

    <!-- 限时购 -->
    <div class="product-info-title between" v-if="promotion.type=='2'" :style="{backgroundImage:`url(${promotion.imageUrl})`,color:'#fff',marginBottom:'14px',height:'50px'}">
      <div class="promotion-price-wraper">
        <!-- <span class="promotion-low-price">￥{{promotion.activityPrice}}</span> -->
        <span class="promotion-low-price"><b>￥</b>{{product.lowPrice}}</span>
        <div class="promotion-zone" >
          <!-- <span class="promotion-tip" v-if="promotion.name">{{promotion.name}}</span><br> -->
          <!-- <span class="promotion-high-price" v-if="product.isMb=='0'"><del>￥{{product.lowPrice}}</del></span>
          <span class="promotion-high-price" v-else>会员价￥{{product.memberPrice}}</span> -->
          <span class="promotion-high-price">￥{{product.highPrice}}<img src="~images/product/vip-white.png" /></span>
        </div>
      </div>
      <span class="inlbk time-count promotion-count" v-if="showStart">{{promotion.name}}距开始剩<i>{{time.nH}} :</i><i>{{time.nM}} :</i><i>{{time.nS}}</i></span>
      <span class="inlbk time-count promotion-count" v-if="showEnd">{{promotion.name}}距结束剩<i>{{time.nH}} :</i><i>{{time.nM}} :</i><i>{{time.nS}}</i></span>
    </div>
    <!-- 大促进行中 -->
    <div class="product-info-title between" v-if="promotion.type=='3'&&promotion.activityStatus=='2'" :style="{backgroundImage:`url(${promotion.imageUrl})`,color:'#fff',marginBottom:'14px',height:'50px'}">
      <div class="promotion-price-wraper">
        <span class="promotion-low-price"><b>￥</b>{{product.lowPrice}}</span>
        <div class="promotion-zone" >
          <span class="promotion-high-price">￥{{product.highPrice}}<img src="~images/product/vip-white.png" /></span>
        </div>
      </div>
      <!-- <span class="promotion-tip" v-if="promotion.name">{{promotion.name}}</span> -->
      <span class="inlbk time-count promotion-count" v-if="showStart">{{promotion.name}}距开始剩<i>{{time.nH}} :</i><i>{{time.nM}} :</i><i>{{time.nS}}</i></span>
      <span class="inlbk time-count promotion-count" v-if="showEnd">{{promotion.name}}距结束剩<i>{{time.nH}} :</i><i>{{time.nM}} :</i><i>{{time.nS}}</i></span>
    </div>

    <span class="product-intro" :class="{'color-gold':product.isMb!='1'}" v-if="product.memberProductType != 3">{{product.shareProfit}}</span>
    <span class="promotion-price" v-if="promotion.type =='3'&& promotion.activityStatus =='1'">{{promotion.name}}会员价￥{{promotion.activityPrice}}</span>
    <!-- <span class="promotion-price" v-if="promotion.type=='3'&&promotion.activityStatus=='1'&&product.isMb=='1'">{{promotion.name}}会员价￥{{promotion.activityPrice}}</span>
    <span class="promotion-price" v-if="promotion.type=='3'&&promotion.activityStatus=='1'&&product.isMb!='1'">{{promotion.name}}￥{{promotion.activityPrice}}</span> -->
    <!-- v-if="promotion.type=='3'|| promotion.type=='2'" -->
    <span class="sale-count" v-if="promotion.type=='2' || (promotion.type=='3'&&promotion.activityStatus=='2')">{{product.sellCountInfo}}</span>
  </div>
</template>

<script>
import Tools from '@/utils/tools'
export default {
  name: 'promotion',
  data () {
    return {
      downSecond:0
    }
  },
  computed: {
    time () {
      return this.getTime(this.downSecond)
    },
    showStart () {
      return (
        (this.promotion.activityStatus == '1' && this.promotion.second > 0) ||
        false
      )
    },
    showEnd () {
      return (
        (this.promotion.activityStatus == '2' && this.promotion.second > 0) ||
        false
      )
    }
  },
  watch:{
    'promotion.second'(){
      this.downSecond = this.promotion.second
      if (this.downSecond && this.downSecond > 0) {
        this.timeCount()
      }
    }
  },
  created () {
    this.downSecond = this.promotion.second
  },
  mounted () {
    // if (this.promotion.second && this.promotion.second > 0) {
    //   this.timeCount()
    // }
    if (this.downSecond && this.downSecond > 0) {
      this.timeCount()
    }
    // console.log(this.product)
  },
  props: {
    product: {
      type: Object
    },
    promotion: {
      type: Object
    }
  },
  methods: {
    timeCount () {
      Tools.timeCount(
        this.downSecond,
        data => {
          this.downSecond = data
        },
        () => {
          this.$emit('refresh')
        }
      )
    },
    getTime (seconds) {
      let nH = this.formate(seconds / (60 * 60))
      let nM = this.formate((seconds / 60) % 60)
      let nS = this.formate(seconds % 60)
      return { nH, nM, nS }
    },
    formate (num) {
      let n = Math.floor(num) + ''
      if (n.length == 1) {
        return '0' + n
      }
      return n
    }
  }
}
</script>
