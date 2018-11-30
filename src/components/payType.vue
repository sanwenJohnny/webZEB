<style lang="less" scoped>
.pay-wrapper {
  margin-bottom: 40px;
  .payment-platform {
    height: 50px;
    background-color: #fff;
    margin-bottom: 1px;
    box-sizing: border-box;
    padding: 12px;
  }
  .left-part {
    float: left;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #1A1A1A;
    letter-spacing: 0;
    text-align: left;
    line-height: 20px;
    .icon-payment {
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 20px 20px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 12px;
    }
    .payment-text {
      display: inline-block;
      vertical-align: middle;
      text-align: left;
    }
  }
  .right-part {
    float: right;
    color: #F42B52;
    text-align: right;
    width: 22px;
    height: 22px;
    box-sizing: border-box;
    border: 1px solid #858585;
    border-radius: 11px;
  }
  .payment-checked {
    background: url(~images/order/icon-pay-checked.png) no-repeat center;
    background-size: 22px 22px;
    border: none;
  }
  .expand-button-container {
    padding: 12px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    color: #858585;
    background: #FFF;
    text-align: center;
    .expand-button-inner {
      display: inline-block;
      vertical-align: top;
      width: 88px;
      height: 14px;
      line-height: 14px;
      text-align: left;
      background: url(~images/order/icon-expand-button.png) no-repeat right center;
      background-size: 12px 8px;
    }
  }
}
</style>
<template>
  <div class="pay-wrapper">

    <div class="payment-platform" v-for="(m, i) in filterWx(paymentPlatforms)" :key="i">
      <div class="left-part">
        <span class="icon-payment" :style="{backgroundImage: `url(${m.channelImage})`}"></span>
        <span class="payment-text">{{m.channelDesc}}</span>
      </div>
      <div class="right-part" :class="m.checked ? 'payment-checked': ''" @click="checkPaymentHandler(m.type)"></div>
    </div>

    <div class="expand-button-container" @click="expandHandler" v-if="!expanded && foldingList.length>0">
      <span class="expand-button-inner">其他支付方式</span>
    </div>

  </div>
</template>
<script>
import api from '@/api/order'
import Tools from '@/utils/tools'

import aliImg from '@/assets/image/order/icon-ali.png'
import bankImg from '@/assets/image/order/icon-bank.png'

export default {
  name: 'payType',
  props: {
    payChannelInfo: '',
    foldingList:''
  },
  data () {
    return {
      paymentPlatforms:[],
      expanded: false,     
    }
  },
  mounted () {
      this.paymentPlatforms = this.payChannelInfo      
  },
  methods: {
    // 非微信浏览器里过滤微信支付  微信里过滤支付宝支付
    filterWx(list){
      let needList = []
      
      if (Tools.isWx) { 
        list.forEach((m, i) => {
          if (m.type != '2') {
            needList.push(m)
          }
        })
        return needList
      } else {
        list.forEach((m, i) => {
          if (m.type != '3') {
            needList.push(m)
          }
        })
        return needList
      }
    },
    
    checkPaymentHandler (index) {
      let list = this.paymentPlatforms.slice()
      list.forEach((m, i) => {
        if (index == m.type) {
          m.checked = true
          this.$emit('set-paychannel', m.type)
        } else {
          m.checked = false
        }
      })
      this.paymentPlatforms = list

    },
    expandHandler () {
      this.expanded = true
      if (foldingList.length>0) {
        this.paymentPlatforms = this.paymentPlatforms.concat(this.foldingList)        
      }
    },
  }
}
</script>
