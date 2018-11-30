<style lang="less" scoped>
.order-submit-wrapper {
  .icon-arrow-right {
    width: 8px;
    height: 12px;
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -6px;
    background: url(~images/order/right.png) no-repeat center;
    background-size: 8px 12px;
  }
  .top-tips-box {
    padding: 6px 15px;
    background: #FFF;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    line-height: 16px;
    overflow: hidden;
    border-bottom: 1px solid #E0E0E0;
    .icon-top-tips {
      float: left;
      width: 14px;
      height: 16px;
      background: url(~images/order/icon-tips.png) no-repeat center top;
      background-size: 14px 16px;
    }
    .top-tips-container {
      float: right;
      width: 100%;
      margin-left: -18px;
      .top-tips-content {
        margin-left: 18px;
      }
    }
  }
  .main-box {
    padding: 10px 15px 66px;
  }
  .user-info-box {
    a {
      position: relative;
      display: block;
      padding: 15px 12px;
      background: #FFF;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .user-address-container {
      .name-phone {
        height: 22px;
        line-height: 22px;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #1A1A1A;
        letter-spacing: 0;
        margin-bottom: 6px;
      }
      .user-name, .user-phone {
        display: inline-block;
        vertical-align: top;
        margin-right: 16px;
      }
      .address-brief {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1A1A1A;
        letter-spacing: 0;
      }
      .icon-position {
        display: inline-block;
        vertical-align: top;
        width: 14px;
        height: 20px;
        background: url(~images/order/icon-position.png) no-repeat center center;
        background-size: 14px 20px;
        margin-right: 6px;
      }
      .address-text {
        display: inline-block;
        vertical-align: top;
        line-height: 21px;
        width: 236px;
      }
      .address-border {
        width: 100%;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: url(~images/order/address-border.png) no-repeat center top;
        background-size: 100%;
      }
    }
    .none-address-container, .none-certification-container {
      text-align: center;
      .icon-plus {
        display: inline-block;
        vertical-align: top;
        width: 16px;
        height: 22px;
        background: url(~images/order/address-plus.png) no-repeat center center;
        background-size: 16px 16px;
        margin-right: 8px;
      }
      .plus-text {
        display: inline-block;
        vertical-align: top;
        height: 22px;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #F1002D;
        letter-spacing: 0;
        line-height: 22px;
      }
    }
    .user-certification-container {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #1A1A1A;
      letter-spacing: 0;
      span {
        display: inline-block;
        vertical-align: top;
        height: 20px;
        margin-right: 6px;
        line-height: 21px;
      }
      .icon-user {
        width: 14px;
        background: url(~images/order/icon-user.png) no-repeat center center;
        background-size: 12px 18px;
      }
    }
  }
  .order-list-box {
    .order-item-container {
      margin-bottom: 10px;
    }
    .order-title {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #333333;
      letter-spacing: 0;
      line-height: 17px;
      background: #FFF;
      padding: 12px;
    }
    .product-list-container {
      background: #FFF;
      // padding: 0 12px;
    }
    .order-line-container {
      padding: 12px;
      overflow: hidden;
      background: #FFF;
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #333333;
      letter-spacing: 0;
      line-height: 18px;
      margin-top: 1px;
      .line-left {
        float: left;
      }
      .line-right {
        float: right;
      }
      .order-price {
        font-family: DINPro-Medium;
        font-size: 14px;
        color: #F1002D;
        .price {
          font-size: 18px;
        }
      }
    }
    .product-inner {
      overflow: hidden;
      position: relative;
      padding: 0 12px;
      .product-inner-delete {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 44px;
        background: #F1002D;
        line-height: 100%;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        span {
          position:absolute;
          width: 100%;
          top:50%;
          left: 0;
          transform:translateY(-50%);
        }
      }
      .top-part {
        overflow: hidden;
        padding-bottom: 16px;
        .product-img {
          float: left;
          width: 60px;
          height: 60px;
          margin-right: 8px;
          img {
            width: 100%;
          }
        }
        .product-content {
          float: left;
          width: 174px;
          .content-top {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #1A1A1A;
            letter-spacing: 0;
            line-height: 20px;
            margin-bottom: 4px;
          }
          .content-sku {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666666;
            letter-spacing: 0;
            line-height: 17px;
            margin-bottom: 4px;
          }
          .content-tips {
            font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #F1002D;
            letter-spacing: 0;
            line-height: 17px;
          }
        }
        .product-price-count {
          float: right;
          .product-price {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #1A1A1A;
            letter-spacing: 0;
            text-align: right;
            line-height: 20px;
          }
          .product-count {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666666;
            letter-spacing: 0;
            text-align: right;
            line-height: 17px;
          }
        }
      }
      .bottom-part {
        padding: 0 0 16px 12px;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #F1002D;
        letter-spacing: 0;
        .icon-warn {
          display: inline-block;
          vertical-align: top;
          width: 11px;
          height: 14px;
          background: url(~images/order/icon-warn.png) no-repeat center;
          background-size: 11px 11px;
          margin-right: 4px;
        }
        .desc {
          display: inline-block;
          vertical-align: top;
          width: 240px;
        }
      }
    }
  }
  .privilege-list-box {
    margin-bottom: 10px;
    border-radius: 4px;
    .privilege-item-container {
      position: relative;
      overflow: hidden;
      padding: 15px 12px;
      background: #FFF;
      margin-bottom: 1px;
    }
    .coupon-link {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .left-part {
      float: left;
      height: 35px;
      .left-part-inner {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
      .type-content {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1A1A1A;
        letter-spacing: 0;
        line-height: 20px;
      }
      .type-desc {
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #B2B2B2;
        letter-spacing: 0;
        line-height: 14px;
      }
    }
    .right-part {
      float: right;
      .right-desc {
        float: left;
        height: 32px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        text-align: right;
        line-height: 32px;
        margin-right: 6px;
      }
      .switch-button {
        float: right;
        height: 32px;
        position: relative;
        .cover {
          position: absolute;
          top: 0;
          left:0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
  .member-tips-box {
    display: block;
    overflow: hidden;
    padding: 8px 10px 8px 8px;
    background-image: linear-gradient(-90deg, #E4D2AF 0%, #D5BD95 95%);
    border-radius: 2px;
    margin-bottom: 10px;
    .icon-member {
      float: left;
      width: 19px;
      height: 19px;
      margin-right: 7px;
    }
    .member-content {
      float: left;
      height: 19px;
      line-height: 19px;
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #1A1A1A;
      letter-spacing: 0;
    }
    .member-link-button {
      float: right;
      height: 19px;
      line-height: 19px;
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #1A1A1A;
      letter-spacing: 0;
      text-align: center;
    }
  }
  .pay-channel-box {
    border-radius: 4px;
    .pay-channel-item {
      overflow: hidden;
      padding: 15px 12px 14px;
      background: #FFF;
      margin-bottom: 1px;
    }
    .left-part {
      float: left;
      padding-top: 2px;
      .channel-img {
        float: left;
        width: 20px;
        height: 20px;
        margin-right: 12px;
      }
      .channel-name {
        float: left;
        height: 20px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1A1A1A;
        letter-spacing: 0;
        line-height: 20px;
      }
      .dynamic-img {
        float: left;
        width: 150px;
        height: 26px;
        margin-top: -3px;
      }
    }
    .right-part {
      float: right;
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
      .pay-radio-gray {
        width: 22px;
        height: 22px;
        box-sizing: border-box;
        border-radius: 11px;
        background-color: #E0E0E0;
      }
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
  .bottom-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFF;
    padding: 8px 15px;
    .left-part {
      float: left;
      height: 40px;
      line-height: 40px;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #F1002D;
      letter-spacing: 0;
      .final-label {
        margin-right: 9px;
      }
      .final-price {
        font-family: DINPro-Medium;
        font-size: 18px;
      }
    }
    .right-part {
      height: 40px;
      line-height: 40px;
      float: right;
      .to-pay-label {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1A1A1A;
        letter-spacing: 0;
        text-align: right;
        margin-right: 10px;
      }
      .to-pay-button {
        width: 100px;
        background: #F1002D;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
      }
    }
  }
}
</style>
<style lang="less">
.order-submit-wrapper {
  .mint-switch-input:checked + .mint-switch-core {
    border-color: #000;
    background: #000;
  }
}
</style>
<template>
  <div class="order-submit-wrapper">
    <div class="top-tips-box" v-if="tips&&tips.length">
      <div class="top-tips-container">
        <p class="top-tips-content" v-for="(m, i) in tips" :key="i">
          {{m}}
        </p>
      </div>
      <div class="icon-top-tips"></div>
    </div>
    <div class="main-box">
      <div class="user-info-box">
        <!-- 路由地址和认证路由跳过去要设置一下默认勾选状态 -->
        <router-link class="user-address-container" :to="{name:'addressList'}" v-if="addressId&&(addressId != -1)&&Object.keys(receiveAddress).length">
          <p class="name-phone">
            <span class="user-name">{{receiveAddress.fullName}}</span>
            <span class="user-phone">{{receiveAddress.mobileNumber}}</span>
          </p>
          <div class="address-brief">
            <span class="icon-position"></span>
            <p class="address-text">{{dealAddress}}</p>
          </div>
          <div class="icon-arrow-right"></div>
          <div class="address-border"></div>
        </router-link>
        <router-link class="none-address-container" :to="{name:'addressAdd'}" v-else>
          <span class="icon-plus"></span>
          <span class="plus-text">新增收货地址</span>
        </router-link>
        <!-- 此订单需要实名认证才展示 -->
        <div v-if="idCardVerify.idCardRequire">
          <!-- 已有认证信息则显示，不确定是否完善 -->
          <router-link class="user-certification-container" :to="{path:'/certificate/list', query: {idCardRequireType: idCardVerify.idCardRequireType}}" v-if="idCardVerify.idCardVerifyId && idCardVerify.idCardVerifyId > 0">
            <span class="icon-user"></span>
            <span class="user-name">{{idCardVerify.idCardName}}</span>
            <span class="id-number">{{idCardVerify.idCardNo}}</span>
            <div class="icon-arrow-right"></div>
          </router-link>
          <!-- 否则显示新增按钮 -->
          <router-link class="none-certification-container" :to="{path:'/certificate/add', query: {idCardRequireType: idCardVerify.idCardRequireType}}" v-else>
            <span class="icon-plus"></span>
            <span class="plus-text">新增实名信息</span>
          </router-link>
        </div>
      </div>
      <div class="order-list-box">
        <div class="order-item-container" v-for="(item, index) in orderList" :key="index">
          <h2 class="order-title">{{item.sellerName}}</h2>
          <div class="product-list-container">
            <div class="product-inner" v-for="(m, i) in item.productList" :key="i" :style="m.supportDelivery == 1 ? {} : {paddingRight: '56px'}">
              <div class="top-part">
                <div class="product-img">
                  <img :src="m.imageUrl" alt="">
                </div>
                <div class="product-content" :style="m.supportDelivery ==1 ? {} : {width: '140px'}">
                  <p class="content-top">{{m.productName}}</p>
                  <p class="content-sku">{{m.skuDesc}}</p>
                  <p class="content-tips">{{m.couponDisabledTip}}</p>
                </div>
                <div class="product-price-count">
                  <p class="product-price">{{`¥${m.salePrice/100}`}}</p>
                  <p class="product-count">{{`x ${m.count}`}}</p>
                </div>
              </div>
              <p class="bottom-part" v-if="m.supportDelivery==0">
                <span class="icon-warn"></span>
                <span class="desc">{{m.unSupportDesc}}</span>
              </p>
              <div class="product-inner-delete" v-if="m.supportDelivery == 0" @click="deleteHandler(m.saleUnitId)">
                <span>移除</span>
              </div>
            </div>
          </div>
          <div class="order-line-container">
            <div class="line-left">发货方式</div>
            <div class="line-right">
              <span>快递</span><span v-if="Number(item.freight) + Number(item.remoteFreight) == 0">（包邮）</span>:&nbsp;<span>{{`${(Number(item.freight) + Number(item.remoteFreight))/100}元`}}</span><span v-if="Number(item.remoteFreight) > 0">{{`（含偏远地区加邮${item.remoteFreight/100}元）`}}</span>
            </div>
          </div>
          <div class="order-line-container">
            <div class="line-left">订单总计</div>
            <div class="line-right order-price"><span class="rmb">¥</span><span class="price">{{item.price/100}}</span></div>
          </div>
        </div>
      </div>
      <div class="privilege-list-box" v-if="(privilegeInfoList instanceof Array)&&privilegeInfoList.length">
        <div class="privilege-item-container" v-for="(m, i) in privilegeInfoList" :key="i">
            <div class="left-part">
              <div class="left-part-inner">
                <p class="type-content">{{m.privilegeDesc}}</p>
                <p class="type-desc" v-if="m.tipLeft">{{m.tipLeft}}</p>
              </div>
            </div>
            <div class="right-part">
              <div class="type1-right" v-if="m.type==1">
                <span class="right-desc" v-if="m.tipRight">{{m.tipRight}}</span>
                <div class="switch-button">
                  <mt-switch v-model="activitiesIsOpen"></mt-switch>
                  <div class="cover" v-if="m.canUse==0"></div>
                </div>
              </div>
              <div class="type2-right" v-if="m.type==2 || m.type==4">
                <span class="right-desc" v-if="m.tipRight">{{m.tipRight}}</span>
              </div>
              <div class="type3-right" v-if="m.type==3">
                <span class="right-desc" v-if="m.tipRight">{{`${m.tipRight}&nbsp;&nbsp;>`}}</span>
              </div>
              <div class="type5-right" v-if="m.type==5">
                <span class="right-desc" v-if="m.tipRight">{{m.tipRight}}</span>
                <div class="switch-button">
                  <mt-switch v-model="isUseCoin"></mt-switch>
                  <div class="cover" v-if="m.canUse==0"></div>
                </div>
              </div>
            </div>
            <router-link :to="{path: '/coupon/list', query: {confirmId: confirmId, activitiesIsOpen: activitiesIsOpen ? 1 : 0}}" v-if="m.type==3" class="coupon-link"></router-link>
        </div>
      </div>
      <a class="member-tips-box" :href="memberTip.clickUrl" v-if="memberTip&&Object.keys(memberTip).length">
        <img :src="memberTip.imgUrl" alt="" class="icon-member">
        <p class="member-content">{{memberTip.tipMsg}}</p>
        <p class="member-link-button">{{`${memberTip.tipRight}`}}</p>
      </a>
      <div class="pay-channel-box">
        <div class="pay-channel-item" v-for="(m, i) in filterWx(spreadList)" :key="i">
          <div class="left-part">
            <img class="channel-img" :src="m.channelImage" alt="">
            <span class="channel-name" :type="m.type">{{m.channelDesc}}</span>
            <img :src="m.leftImg.imgUrl" alt="" class="dynamic-img" v-if="m.leftImg">
          </div>
          <div class="right-part">
            <span :class="m.checked ? 'pay-radio pay-radio-checked' : 'pay-radio'" v-if="m.isAvailable==1" @click="changePayChannel(m.type, m.channelDesc)"></span>
            <span class="pay-radio-gray" v-else></span>
          </div>
        </div>
        <div class="expand-button-container" @click="expandHandler" v-if="!expanded && foldingList.length>0">
          <span class="expand-button-inner">其他支付方式</span>
        </div>
      </div>
    </div>
    <div class="bottom-box">
      <div class="left-part">
        <span class="final-label">
          总计
        </span>
        <span class="final-price">
          {{`¥${realPrice/100}`}}
        </span>
      </div>
      <div class="right-part">
        <span class="to-pay-label">{{channelDesc}}</span>
        <!-- <span class="to-pay-button">去付款</span> -->
        <mt-button  class="to-pay-button" @click.native="toPayHandler" type="danger">去付款</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
// import { orderConfirm } from '@/mock'
import Bridge from '@/utils/bridge'
import Tools from '@/utils/tools'
import session from '@/utils/session-lite'
import storage from '@/utils/storage-lite'
import arrayAddon from '@/utils/array-addon'
import api from '@/api/order'

export default {
  data () {
    return {
      orderList: [],
      addressId: session.get('addressId'),
      // 选择的实名认证id
      idCardVerifyId: session.get('idCardVerifyId'),
      // 用户选择要使用的优惠券，如果传值－1则订单中心会推荐最合适的优惠券, 
      // 传值-2代表用户手动选择不使用优惠券(默认值为-1)
      couponAccountId: session.get('couponAccountId'),
      // 是否使用捕手币 0[否]、1是，这里用bool，传参时要转成int
      isUseCoin: session.get('isUseCoin') == 1,
      confirmId: '',
      // 满减活动是否打开：0[否]、1是, 这里用bool，传参时要转成int
      activitiesIsOpen: session.get('activitiesIsOpen') == 1,
      //1[正常订单]、2[结算时登录订单]、3[商品详情页直接下单
      type: 1,
      receiveAddress: {},
      idCardVerify: {},
      tips: [],
      privilegeInfoList: [],
      spreadList: [],
      foldingList: [],
      payChannel: '',
      // 切换支付方式时同步显示在底部付款按钮左侧
      channelDesc: '',
      expanded: false,
      realPrice: '',
      totalPrice: '',
      memberTip: {},
      orderIds: [],
      // accountId: storage.get('accountId'),
      isApp: Tools.isApp,
      productIds: session.get('productIds'),
      productToBuy: session.get('productToBuy'),
      usedCoin: 0
    }
  },
  created () {
    this.initData()
  },
  computed: {
    dealAddress () {
      const { cityName, detailAddress, districtName, nationwide, provinceName } = this.receiveAddress
      if (!nationwide) {
        return provinceName + cityName + districtName + detailAddress
      } else {
        return nationwide + detailAddress
      }
    }
  },
  watch: {
    activitiesIsOpen (val) {
      const activitiesIsOpen = val ? 1 : 0
      session.set('activitiesIsOpen', activitiesIsOpen)
      this.waitInOrderFn()
    },
    isUseCoin (val) {
      // console.log('1111', val)
      const isUseCoin = val ? 1 : 0
      session.set('isUseCoin', isUseCoin)
      this.waitInOrderFn()
    }
  },
  mounted () {
    if (Tools.isWx) {
      this.weChat()
    }
    this.orderConfirm()
  },
  updated () {
    console.log(
      // this.activitiesIsOpen,
      // this.isUseCoin,
      // this.payChannel
    )
    if (!this.orderList.length) {
      this.$toast('订单为空请重新选择商品')
      setTimeout(() => {
        history.back(-1)
      }, 1800)
    }
  },
  methods: {
    initData () {
      const{ query } = this.$route
      const { type } = query
      this.type = type
    },
    async waitInOrderFn () {
      await this.orderConfirm()
      this.expandHandler()
    },
    async orderConfirm () {
      let productToBuy = session.get('productToBuy') || {}
      productToBuy = JSON.stringify(productToBuy)
      let res = await api.orderConfirm({
        addressId: this.addressId,
        idCardVerifyId: this.idCardVerifyId,
        couponAccountId: this.couponAccountId,
        activitiesIsOpen: session.get('activitiesIsOpen'),
        type: this.type,
        saleUnitIds: JSON.stringify(this.productIds),
        // type=3时[商品详情页直接下单]候要传的，json格式{count:2,saleUnitId:1111}
        productToBuy: productToBuy,
        isUseCoin: session.get('isUseCoin')
      })
      // mock
      // res = orderConfirm
      // console.log(res)
      if (res) {
        const { data, status, message } = res
        if (status == 1) {
          const { orderList, receiveAddress, idCardVerify, tips, privilegeInfoList, payChannelInfo, realPrice, memberTip, confirmId, totalPrice } = data
          const { spreadList, foldingList } = payChannelInfo
          // 支付方式默认选中第一个
          spreadList[0].checked = true
          // switch 默认选中逻辑
          privilegeInfoList.forEach((m) => {
            if (m.type == 1) {
              this.activitiesIsOpen = m.userSelection == 1
            }
            if (m.type == 3) {
              this.couponAccountId = m.magicInfo
              session.set('couponAccountId', m.magicInfo)
            }
            if (m.type == 5) {
              this.isUseCoin = m.userSelection == 1
              this.usedCoin = m.reducePrice
            }
          })
          this.payChannel = spreadList[0].type
          this.channelDesc = spreadList[0].channelDesc
          this.orderList = orderList
          if (receiveAddress) {
            this.addressId = receiveAddress.id
            session.set('addressId', receiveAddress.id)
          } else {
            this.addressId = ''
            session.set('addressId', '')
          }
          this.receiveAddress = receiveAddress
           if (idCardVerify) {
            this.idCardVerifyId = idCardVerify.idCardVerifyId
            session.set('idCardVerifyId', idCardVerify.idCardVerifyId)
          } else {
            this.idCardVerifyId = ''
            session.set('idCardVerifyId', '')
          }
          this.idCardVerify = idCardVerify
          this.tips = tips
          this.privilegeInfoList = privilegeInfoList
          this.spreadList = spreadList
          this.foldingList = foldingList || []
          this.realPrice = realPrice
          this.totalPrice = totalPrice
          this.memberTip = memberTip
          this.confirmId = confirmId
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },
    // dealPrivilegeType (type) {
    //   switch (type) {
    //     case 1:
    //       return '满减活动'
    //     case 2:
    //       return 'N元任选'
    //     case 3:
    //       return '优惠券'
    //     case 4:
    //       return '会员减免'
    //     case 5:
    //       return 'G币抵现'
    //   }
    // },
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
    expandHandler () {
      this.expanded = true
      this.spreadList = this.spreadList.concat(this.foldingList)
    },
    deleteHandler (id) {
      if (this.type == 3) {
        this.$toast('请重新下单')
        setTimeout(() => {
          history.back(-1)
        }, 1500);
      } else {
        let productIds = session.get('productIds')
        arrayAddon.remove(productIds, id)
        session.set('productIds', productIds)
        if (productIds.length) {
          location.reload()
        } else {
            this.$toast('订单为空请重新选择商品')
            setTimeout(() => {
              history.back(-1)
            }, 1500)
        }
      }
    },
    changePayChannel (type, channelDesc) {
      this.payChannel = type
      this.channelDesc = channelDesc
      const list = this.spreadList.slice()
      list.forEach(m => {
        m.checked = m.type == type
      })
      this.spreadList = list
    },
    async toPayHandler () {
      if (!(Tools.isWx || Tools.isApp)) {
        this.$toast('请使用app完成支付')
        return false
      }
      const { addressId, idCardVerify, confirmId, payChannel, totalPrice, realPrice, couponAccountId } = this
      
      if (addressId == '-1') {
        this.$toast('请选择地址')
        return false
      }
      const { needCompleteIdCard, idCardVerifyId, needCompleteIdCardTips } = idCardVerify
      // 要判断idCardVerify.needCompleteIdCard看是否需要进一步完善认证信息，需要认证则弹出要判断idCardVerify.needCompleteIdCardTips
      if (needCompleteIdCard) {
        this.$toast(needCompleteIdCardTips)
        return false
      }
      const res = await api.orderAdd({
        confirmId,
        idCardVerifyId,
        payChannel,
        addressId,
        idCardVerifyId,
        totalPrice,
        type: this.type,
        couponPrice:realPrice,
        couponId: couponAccountId,
        activitiesIsOpen: session.get('activitiesIsOpen'),
        usedCoin: this.isUseCoin ? this.usedCoin : 0
      })
      // console.log(confirmId)
      if (!res) {
        this.$toast('请求异常')
        return false
      }
      const { status, data, message } = res
      if (status != 1) {
        this.$toast(message)
        return false
      }
      session.set('productIds', [])
      const { orderIds } = data
      this.orderIds = JSON.stringify(orderIds)
      this.goPay()
    },
    async goPay () {
      const { payChannel, orderIds } = this
      // 1：银联，2：支付宝，3：微信，11：米么贷 12:applyPay，13:花呗，14:花呗分期
      if (this.payChannel == 2 && !this.isApp) {
        const authData = storage.get('authData')
        let accountId = ''
        if (Object.keys(authData).length) {
           accountId = authData.accountId
        }
        // h5支付宝支付
        location.href = `/order/alipay?orderIds=${orderIds}&payChannel=${payChannel}&accountId=${accountId}`
      }
      const res = await api.payment({
        orderIds: orderIds,
        channel: 8,
        payWay: payChannel,
        subChannel: 1
      })
      if (res) {
        const { status, message, data } = res
        if (status != 1) {
          this.$toast(message)
          return false
        }
        // 微信支付
        if (payChannel == 3) {
          this.wxPay(data)
          return false
        }
      } else {
        this.$toast('请求异常')
      }
      
    },
    wxPay (data) {
      let _this = this
      // _this.goPayDetail()
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
            // alert(JSON.stringify(res))
            // console.log('22222', res)
          }
        }
      )
    },
    goPayDetail(){
      // 成功后进去交易详情
      this.$router.push({
        name: 'payDetail',
        query: { orderIds: this.orderIds }
      })
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
  }
}
</script>
