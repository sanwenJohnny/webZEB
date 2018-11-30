<template>
  <div class="pay-bar">
     <div v-if="isSuccess==0" class="pay-button" @click="goPay">去付款</div>
  </div>
</template>

<script>
// import storage from '@/utils/storage-lite'
import api from '@/api/order'
import Bridge from '@/utils/bridge'
import Tools from '@/utils/tools'
import session from '@/utils/session-lite'
import storage from '@/utils/storage-lite'

export default {
  name: "shop-list",
  data() {
    return {
    };
  },
  props: ["isSuccess","orderIds","payChannel","fromPage", "orderId", "payPrice"],
  methods: { 
    // 去付款
    async goPay () {
      if (!(Tools.isWx || Tools.isApp)) {
        this.$toast('请使用app完成支付')
        return false
      }
      const payChannel = this.payChannel
      const orderIds = this.orderIds
      
      // 1：银联，2：支付宝，3：微信，11：米么贷 12:applyPay，13:花呗，14:花呗分期

      // 花呗分期的时候提示去app
      if (payChannel == 14 && (!Tools.isApp)) {
        this.$toast('此订单是花呗分期订单，请前往app付款')
        return       
      }
      // 暂时不支持外部浏览器支付
      // if (payChannel == 2 && !Tools.isApp) {
      //   const authData = storage.get('authData')
      //   let accountId = ''
      //   if (Object.keys(authData).length) {
      //      accountId = authData.accountId
      //   }
      //   // h5支付宝支付
      //   location.href = `/order/alipay?orderIds=${orderIds}&payChannel=${payChannel}&accountId=${accountId}`
      // }

      // 微信支付
      if (payChannel == 3 && !Tools.isApp) {
        let params = {
          orderIds: orderIds,
          channel: Tools.isApp ? 7 : 8,
          payWay: payChannel,
          subChannel: 1
        }
        const res = await api.payment(params)
        if (res) {
          const { status, message, data } = res
          if (status != 1) {
            this.$toast(message)
            return false
          }
          this.wxPay(data)
        } else {
          this.$toast('请求异常')
        }
        return false
      }
      // 统一采用scheme跳转
      location.href = `ggj://open/pay/${this.orderId}/${this.payChannel}/${this.payPrice}`
    },
    // 跳转微信支付
    wxPay (data) {
      let _this = this
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        {
          appId: data.appId, // 公众号名称，由商户传入
          timeStamp: data.timestamp, // 时间戳，自 1970 年以来的秒数
          nonceStr: data.nonceStr, // 随机串
          package: data.packageValue,
          signType: data.signType, // 微信签名方式:
          paySign: data.sign // 微信签名
        },
        function (res) {
          if (res.err_msg == 'get_brand_wcpay_request:ok') {
            _this.goPayDetail()
          } else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
            _this.goPayDetail()
          } else {
            // _this.goPayDetail()
          }
        }
      )
    },
    goPayDetail(){

      // 成功后进去交易详情
      this.$router.push({
        path: '/order/tradeDetail',
        query: { orderIds: this.orderIds }
      })
      // location.href = `/order/tradeDetail?orderIds=${this.orderIds}`          
    },
    // 微信静默授权
    async weChat () {
      const data = await api.payAuthorize()
      storage.set('PAYREDIRECT', this.$route.fullPath)
      if (!data.data.authorize) {
        const url = encodeURIComponent(`${window.location.origin}/wxpayauth`)
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${data.data.appId}&redirect_uri=${url}&response_type=code&scope=snsapi_base&state=${data.data.state}#wechat_redirect`
      }
    }
  },
  mounted() {
    if (Tools.isWx) {
      this.weChat()
    }
  },
  created(){
    
  }
};
</script>

<style lang="less" scoped>

.pay-button {
  height: 56px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #F1002D;;
  box-shadow: 0 0 4px 0 rgba(194,194,194,0.40);
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 48px;
}

</style>
