<style lang="less" scoped>
	.fixed{
		position:fixed;
		top:0;
		left:0;
		z-index:10;
		width:100%;
		height:100%;
	}
	.mask{
		background:#000;

	}
	.maskWindow{
		z-index:101;
		padding-top:10px;
		text-align:center;
		.mask-img{
			position:relative;
			width:70%;
			margin:0 auto;
		}
		.close{
			position:absolute;
			top:10px;
			left:10px;
			width:30px;
		}
		.img-tip{
			width:100%;
		}
		a{
			position:absolute;
			bottom:5%;
			left:25%;
			width:130px;
			height:45px;
		}
	}
</style>
<template>
		<div>
			<div class="maskWindow fixed" v-show="isShowMask">
				<img src="~images/shutdown.png" class="close" @click="back">
				<div class="mask-img">
					<img src="~images/android.png" id="androidimg" v-if="!isIos" class="img-tip">
					<img src="~images/safari.png" id="safariimg" v-if="isIos" class="img-tip">
					<a href="javascript:;" @click="refresh"></a>
				</div>
			</div>
			<div class="mask fixed" v-if="isShowMask"></div>
		</div>
</template>
<script>
import api from '@/api/order'
import tool from '@/utils/tools'
export default {
  name: 'alipay',
  data () {
    return {
      isIos: '',
      isShowMask: false,
      orderIds: ''
    }
  },
  computed: {
    isApp () {
      let isapp = tool.isApp
      return isapp
    }
  },
  created () {
    const { payChannel, orderIds } = this.$route.query
    this.payChannel = payChannel
    this.orderIds = JSON.parse(orderIds)
    // console.log(this.orderIds)
  },
  mounted () {
    this.androidOrIos()
    if (tool.isWx && this.payChannel == 2) {
      this.isShowMask = true
    } else {
      this.goPay()
    }
  },
  methods: {
    androidOrIos () {
      let sUserAgent = navigator.userAgent.toLowerCase()
      let bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
      let bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
      let bIsAndroid = sUserAgent.match(/android/i) == 'android'
      if (bIsAndroid) {
        this.isIos = false
      }
      if (bIsIpad || bIsIphoneOs) {
        this.isIos = true
      }
    },
    async goPay () {
      const {payChannel, orderIds} = this
      const { accountId } = this.$route.query
      const res = await api.payment({
        orderIds: JSON.stringify(this.orderIds),
        channel: 8,
        payWay: payChannel,
        subChannel: 1,
        accountId: accountId
      })
      if (res && res.status === 1) {
        document.body.insertAdjacentHTML('beforeEnd', res.data.payString)
        document.forms[0].submit()
      }
    },
    back () {
      // window.history.back()
      this.goPayDetail()
    },
    refresh () {
      const {orderIds} = this
      this.goPayDetail()
    },
    goPayDetail(){
      // 成功后进去交易详情
      // this.$router.push({
      //   path: '/order/tradeDetail',
      //   query: { orderIds: JSON.stringify(this.orderIds) }
      // })
      const orderIds = JSON.stringify(this.orderIds)
      location.href = `/order/tradeDetail?orderIds=${this.orderIds}`
    }
  }
}
</script>
