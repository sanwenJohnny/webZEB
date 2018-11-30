<style lang="less" scoped>
.address-list-wrapper {
  padding: 10px 15px;
  .address-notice {
    min-height: 34px;
    position: relative;
    padding-left: 18px;
    margin-bottom: 10px;
    .notice-left {
      position: absolute;
      top: 2px;
      left: 0;
      width: 14px;
      height: 14px;
      background: url(~images/certificate/icon-notice.png) no-repeat;  
      background-size: 100%;    
    }
    .notice-right {
      display: inline-block;
      height: 34px;
      line-height: 20px;      
      font-size: 12px;
      color: #1A1A1A;
    }
  }
  .list-box {
    .list-item {
      position: relative;
      padding: 15px 48px 15px 36px;
      background: #FFF;
      margin-bottom: 10px;
      box-sizing: border-box;
      border-radius: 4px;
    }
    .isChoose {
      padding-left: 10px;
    }
    .item-top-container {
      overflow: hidden;
    }
    .item-name {
      float: left;
      height: 22px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #1A1A1A;
      letter-spacing: 0;
      margin-bottom: 10px;
      .name-content {
        vertical-align: middle;
        margin-right: 4px;
      }
      .default {
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #F1002D;
        text-align: center;
        padding: 1px 3px;
        background: rgba(241,0,45,0.15);
        border-radius: 1px;
        vertical-align: middle;
      }
    }
    .item-phone {
      float: right;
      height: 22px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #1A1A1A;
      letter-spacing: 0;
      line-height: 24px;
    }
    .address-desc {
      text-align: center;
      line-height: 20px;
      text-align: left;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
    }
    .edit-button {
      height: 100%;
      width: 48px;
      position: absolute;
      top: 0;
      right: 0;
      background: url(~images/certificate/icon-edit.png) no-repeat 15px center;
      background-size: 18px 18px;
    }
    .icon-checked {
      height: 100%;
      width: 36px;
      position: absolute;
      top: 0;
      left: 0;
      background: url(~images/certificate/icon-checked.png) no-repeat 10px center;
      background-size: 16px 12px;
    }
  }
  .address-empty {
    margin-bottom: 20px;
  }
  .detail-operate {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    transform: translateY(100%);
    transition: transform .3s linear;
    background: #FFF;
    height: 60px;
    box-sizing: border-box;    
    padding: 8px 15px;
    .operate-left {
      text-align: center;
      width: 163px;
      height: 42px;
      background: #FFF;
      font-family: PingFangSC-Regular;
      font-size: 17px;
      color: #1A1A1A;
      letter-spacing: 0;
      text-align: center;
      line-height: 44px;
      margin: 0 auto;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #1A1A1A;
      margin-right: 13px;
    }
    .operate-right {
      width: 165px;
      height: 45px;
      background: #1A1A1A;;
      font-family: PingFangSC-Regular;
      font-size: 17px;
      color: #FFF;
      letter-spacing: 0;
      text-align: center;
      line-height: 44px;
      margin: 0 auto;
      margin-bottom: 10px;
      border-radius: 4px;
      position: relative;
      top: -1px;
    }
  }
  .show{
    transform: translateY(0);
  }
  .bottom-box {
    width: 100%;
    border-radius: 4px;    
    height: 52px;
    background: #FFF;    
    box-sizing: border-box;
    padding-top: 17px;
    .bottom-box-inner {
      text-align: center;
    }
    .icon-plus {
      vertical-align: top;
      width: 16px;
      height: 22px;
      background: url(~images/certificate/icon-plus.png) no-repeat center center;
      background-size: 16px 16px;
      margin-right: 4px;
    }
    .plus-content {
      vertical-align: top;
      height: 22px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #1A1A1A;
      letter-spacing: 0;
      text-align: center;
    }
  }
  .bottomBar {
    height: 56px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    padding-top: 17px;
  }
  .bottomMargin {
    margin: 0 0 120px;
  }
}
</style>
<template>
  <div class="address-list-wrapper">
    <!-- 选择收货地址提示 提交订单过来不展示，订单详情过来展示 -->
    <div class="address-notice" v-if="!pageType && isOrderDetail==1">
        <span class="notice-left"></span>
        <p class="notice-right">付款后，订单信息只能修改一次，修改后可能会导致发货延期，含海外商品的订单不允许修改姓名，请知悉。</p>
    </div>
    <!-- 地址列表 -->
    <ul class="list-box" v-if="addressList.length>0">
      <li class="list-item" :class="{isChoose: pageType}" v-for="m in addressList" :key="m.id">
        <div class="content-container" @click="toggleCheckHandler(m.id)">
          <div v-if="!pageType && m.isChecked" class="icon-checked"></div>
          <div class="item-top-container">
            <p class="item-name">
              <span class="name-content">{{m.fullName}}</span>
              <span class="default" v-if="m.isDefault==1">默认</span>
            </p>
            <p class="item-phone">{{m.mobileNumber}}</p>
          </div>
          <p class="address-desc">{{m.provinceName+m.cityName+m.districtName+m.detailAddress}}</p>
        </div>
        <router-link class="edit-button" :to="{name:'addressEdit',query:{addressInfo: JSON.stringify(m)}}"></router-link>
      </li>
    </ul>

    <div class="empty address-empty" v-else>
      <img src="~images/empty/no-address.png" alt="">
      <div class="empty-word">您暂时没有收货地址哦</div>
    </div>

    <router-link class="bottom-box" :class="{'bottomBar': addressList.length==0,'bottomMargin':addressList.length!==0}" :to="{name:'addressAdd'}">
      <p class="bottom-box-inner">
        <span class="icon-plus"></span>
        <span class="plus-content">新增收货地址</span>
      </p>
    </router-link>
    <!-- 订单详情修改地址操作 -->
    <div class="detail-operate" :class="{show: showOperate}">
      <span class="operate-left" @click="cancleChange">取消</span>
      <span class="operate-right" @click="confirmChange">提交修改</span>
    </div>
  </div>
</template>
<script>
import api from '@/api/address'
import session from '@/utils/session-lite'
// import { addressList } from '@/mock'
import tools from '@/utils/tools'
import bridge from "@/utils/bridge";
import auth from "@/utils/auth";

export default {
  name: 'addressList',
  data () {
    return {
      showOperate: false,
      isOrderDetail: 0,
      addressList: [],
      pageType: 1,  // 页面类型 1 是收货地址管理 0 是选择收货地址
      orderId:'', // 订单id
      resultStatus:['','成功更换收货地址','已经存在修改记录不能再次修改','仓库已推单地址','修改后的地区不支持配送','邮费发生变化','海外订单需要身份证号'],
    }
  },
  created() {
    if (!window.WebViewJavascriptBridge) {
      tools.bridgeFun()
    } 
  },
  mounted () {
    const name = this.$route.name
    this.orderId = this.$route.query.orderId || ''
    this.isOrderDetail = this.$route.query.isOrderDetail?1:0

    if (name === 'addressManage') {
      this.pageType = 1
    } else {
      this.pageType = 0
    }
    this.getAddressList()
  },
  methods: {
    async getAddressList () {
      const res = await api.getAddressList()
      // const res = addressList
      console.log(res)
      if (res) {
        const { data, status, message } = res
        if (status == 1) {
          if (data) {
            const { addressList } = data

            // 设置勾选地址状态
            this.checkOne(addressList)
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败！')
      }
    },
    // 设置状态存储
    checkOne (list) {
      let length = list.length;
      let addressId = session.get('addressId')
      if (length) {
        for (let i = 0; i < length; i++) {
          // 有 取勾选，没 取默认
          if (!addressId) {
            if (list[i].isDefault) {
              list[i].isChecked = 1       
              session.set('addressId', list[i].id)
            } else {
              list[i].isChecked = 0                                     
            }
          } else {
            if (list[i].id == addressId) {
              list[i].isChecked = 1    
            } else {
              list[i].isChecked = 0                                                   
            }
          }
        }
      }
      this.addressList = list

    },

    // 调用修改订单详情地址接口
    async changeOrderAddress (addressId) {
      let params = {
        orderId: this.orderId,
        addressId: addressId
      }
      const res = await api.changeOrderAddress(params)
      if (res) {
        const { data, status, message } = res
        if (status == 1) {
          if (data) {
            const messageStatus = this.resultStatus[data.resultStatus]
            this.$toast(messageStatus)
            if (data.resultStatus == 1) {
              // 返回上一页
              this.cancleChange()     
            }
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败！')
      }
    },

    // 选择切换后 session要更换掉
    toggleCheckHandler (id) {
      let length = this.addressList.length;
      if (length) {
        for (let i = 0; i < length; i++) {
          if (this.addressList[i].id === id ) {
            this.addressList[i].isChecked = 1        

            session.set('addressId', this.addressList[i].id)

            if (this.orderId) {
              this.showOperate = true
            } 
          } else {
            this.addressList[i].isChecked = 0                                      
          }
        }
      }

      // 不是订单详情过来的 直接返回
      if (!this.isOrderDetail) {
        this.$router.back(-1) 
      }
      
    },

    // 取消选择更改地址
    cancleChange() {
      // ios和app也会跳转修改地址  要桥接处理
      if (tools.isApp) {
        bridge.bridgeFun();
        window.WebViewJavascriptBridge.callHandler('changeReceiveAddress', {}, function (res) {})
        window.location.href = "ggj://redirect";
      } else {
        this.$router.back(-1)
      }    
    },

    // 确认更改地址
    confirmChange() {
      let addressId = session.get('addressId')

      // 判断是否有订单来源
      if (this.orderId) {
        this.changeOrderAddress(addressId)
      }

    }
  }
}
</script>
