<template>
  <div id="applyModule" :class="{flexModule: showFlex}" v-cloak>
    <!-- 头部 -->
    <div class="header_bar flexHeader" v-if="isAppView == 1">
        <span class="back bar" @click="back()"><i class="icon"></i></span>
        <h4>填写物流信息</h4>
        <span class="bar"></span>
    </div>


    <div class="refund_delivery flexMain">
        <div class="content" v-if="receiveInfo">
            <!-- 退货地址-->
            <div class="refund_address">
                <ul class="address">
                    <li>
                        <span class="text">收货人：</span>
                        <p>{{receiveInfo.receiveUserName}}</p>
                    </li>
                    <li>
                        <span class="text">收货电话：</span>
                        <p>{{receiveInfo.mobile}}</p>
                    </li>
                    <li>
                        <span class="text">退货地址：</span>
                        <p>{{receiveInfo.address}}</p>
                    </li>
                </ul>
                <!-- 退货须知-->
                <div class="tips" v-if="storeInfo.noticeInfo">退货须知：{{storeInfo.noticeInfo}}</div>
            </div>

            <!-- 快递单号-->
            <ul class="delivery_info">
                <li>
                    <span class="tex">物流单号：</span>
                    <input class="val" type="text" v-model="logisticsNumber" placeholder="请输入物流单号" @blur="checkLogNumber()"/>
                </li>
                <li>
                    <span class="text">物流公司：</span>
                    <span class="val" @click="showExpressList()">{{logisticsChannel ? logisticsChannel : channelTxt}}</span>
                </li>
            </ul>

            <!-- 账户信息-->
            <div class="pay_info" v-if="storeInfo.inCharge == 1">
                <div class="pay_head">
                    <p class="title">此次退款邮费由平台承担，请填写你的支付宝帐号收取邮费退款</p>
                </div>
                <ul class="pay_infos">
                    <li>
                        <span class="text">支付宝账户：</span>
                        <input type="text" v-model="alipay"/>
                    </li>
                    <li>
                        <span class="text">支付宝名称：</span>
                        <input type="text" v-model="name"/>
                    </li>
                    <li>
                        <span class="text">邮费金额：</span>
                        <input type="number" v-model="postage" @blur="checkPostage()"/>
                    </li>
                </ul>
            </div>

        </div>
    </div>


    <!-- 提交物流信息-->
    <div class="apply_btn flexFooter" @click="applyForLog()" v-if="receiveInfo">提交</div>



    <!-- 选择物流公司 -->
    <div class="express_component" v-show="showExpress">
        <div class="mask" @click="closeExpress()"></div>
        <div class="plat_module" :class="{show: showExpress}">
            <div class="title">
                <h3>选择物流公司</h3>
            </div>
            <ul class="plat_list">
                <li v-for="(express, index) in expressList" @click="chooseExpress(express, index+1)">
                    <p class="text">{{express}}</p>
                    <span class="icon" :class="{active: index+1 == expressId}"></span>
                </li>
            </ul>
            <div class="close" @click="closeExpress()">确认</div>
        </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/refund"
import tools from '@/utils/tools'
import { MessageBox } from 'mint-ui';

export default {
  name: "",
  data() {
    return {
      isAppView: 0,
      showFlex: false,
      showSpinner: false,
      spinnerTxt: "加载中",
      toastMsg: "",
      showToast: false,
      showConfirm: false,
      confirmTxt: "",
      applyNumber: "",
      isFromList: 0,
      showExpress: false,
      storeInfo: "",
      receiveInfo: "",
      expressList: [],
      logisticsNumber: "",
      logisticsChannel: "",
      expressId: "",
      channelTxt: "请选择物流公司",
      alipay: "",
      name: "",
      postage: "",
      referrer: ""
    };
  },
  beforeRouteEnter(to, from, next){
    const path = from.path === "/" ? "" : from.path
    next(vm=>{
      vm.referrer = path
    })
  },
  mounted: function() {
    this.isAppView =
      this.$route.query.isApp || this.$route.query.isAppView || 0;
    this.applyNumber = this.$route.query.applyNumber;
    this.isFromList = this.$route.query.isFromList || 0;
    this.getStoreInfo();
  },
  methods: {
    // 返回
    back: function() {
      // this.$router.go(-1);
      var referrer = this.referrer;
      if (referrer) {
        this.$router.go(-1);
      } else {
        window.location.href = "ggj://redirect";
      }
    },
    /**
     * 校验快递单号
     */
    checkLogNumber: function() {
      var reg = /^\w+$/;
      if (this.logisticsNumber != "" && !reg.test(this.logisticsNumber)) {
        tools.toast("请输入正确的物流单号")
        // this.showToast = true;
        // this.toastMsg = "请输入正确的物流单号";
        this.logisticsNumber = "";
      }
    },
    /**
     * 校验邮费
     */
    checkPostage: function() {
      var reg = /^(0|([1-9]\d*))(?:\d*|\.\d+)$/;
      if (this.postage != "" && !reg.test(this.postage)) {
        tools.toast("请输入正确的邮费")
        // this.showToast = true;
        // this.toastMsg = "请输入正确的邮费";
        this.postage = 0;
      }
    },
    // 获取地址栏参数
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    // 获取仓库收货人信息
    getStoreInfo: function() {
      api.getStoreInfo({ applyNumber: this.applyNumber }).then(res=>{
        this.showFlex = true;
        this.showSpinner = false;
        if (res.status == 1) {
          this.storeInfo = res.data;
          this.receiveInfo = res.data.receiveUserInfo;
          this.expressList = res.data.receiveUserInfo.expressCompanyList;
        } else {
          // this.showToast = true;
          // this.toastMsg = res.message;
          tools.toast(res.message)
        }
      })
    },
    showExpressList: function() {
      this.showExpress = true;
    },
    closeExpress: function() {
      this.showExpress = false;
    },
    // 选择物流公司
    chooseExpress: function(express, index) {
      this.logisticsChannel = express;
      this.expressId = index;
    },
    /**
     * 提交退款信息逻辑判断
     */
    applyForLog: function() {
      var inCharge = this.storeInfo.inCharge;

      if (!this.logisticsNumber) {
        tools.toast("请输入物流单号")
        // this.showToast = true;
        // this.toastMsg = "请输入物流单号";
        return;
      }
      if (!this.logisticsChannel) {
        tools.toast("请输入物流公司")
        // this.showToast = true;
        // this.toastMsg = "请输入物流公司";
        return;
      }

      if (inCharge == 1) {
        if (!this.alipay) {
           tools.toast("请输入支付宝账户")
          // this.showToast = true;
          // this.toastMsg = "请输入支付宝账户";
          return;
        }
        if (!this.name) {
           tools.toast("请输入支付宝名称")
          // this.showToast = true;
          // this.toastMsg = "请输入支付宝名称";
          return;
        }
        if (!this.postage) {
           tools.toast("请输入邮费")
          // this.showToast = true;
          // this.toastMsg = "请输入邮费";
          return;
        }
        /**
         * 提示用户收款支付宝账户
         */
        // this.showConfirm = true;
        // this.confirmTxt = "确认收款支付宝为：" + this.alipay;
        MessageBox({
          title: '',
          message: "确认收款支付宝为：" + this.alipay,
          showCancelButton: true
        }).then(action=>{
          if(action === "confirm"){
            this.applyLog();
          }
        })
      } else {
        this.applyLog();
      }
    },
    // 提交物流信息
    applyLog: function() {
      api.addLogisticsInfo({
        logisticsNumber: this.logisticsNumber,
        logisticsChannel: encodeURI(this.logisticsChannel),
        alipay: this.alipay,
        name: this.name,
        postage: this.postage * 100,
        refundNumber: this.applyNumber
      }).then(res=>{
        if (res.status == 1) {
          this.$router.push({
            path: "/refund/detail",
            query: {
              isAppView: this.isAppView,
              applyNumber: this.applyNumber,
              isFromList: this.isFromList,
              isHide: 1
            }
          })
        } else {
          tools.toast(res.message)
        }
      })
    },
    // confirm: function() {
    //   this.showConfirm = false;
    //   this.applyLog();
    // },
    // cancel: function() {
    //   this.showConfirm = false;
    // },
    // closeToast: function() {
    //   this.showToast = false;
    // }
  }
};
</script>

<style scoped lang="less">
/* flex布局 */
.flexModule {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%; }

.flexHeader {
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }

.flexMain {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch; }
  .flexMain .content {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1; }

.flexFooter {
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }
.apply_btn {
  color: #fff;
  font-size: 16px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  margin-top: 10px;
  background: #000; }
/* 退款头部 */
.header_bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  height: 45px;
  line-height: 45px;
  background: #000; }

.header_bar .bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  color: #fff;
  width: 45px;
  height: 45px; }
  .header_bar .bar.concat {
    font-size: 14px;
    width: 60px;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; }

.header_bar .bar i {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg); }

.header_bar h4 {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  text-align: center; }
/* 物流信息 */
.refund_address {
  padding-left: 16px;
  background: #fff; }
  .refund_address .address {
    padding: 8px 16px 8px 0;
    border-bottom: 1PX solid #f0f0f0; }
    .refund_address .address li {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start; }
      .refund_address .address li .text {
        -webkit-box-flex: 0;
            -ms-flex: none;
                flex: none;
        color: #000;
        font-size: 16px;
        width: 80px;
        height: 24px; }
      .refund_address .address li p {
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1;
        color: #000;
        font-size: 16px; }
  .refund_address .tips {
    color: #858585;
    font-size: 12px;
    line-height: 16px;
    padding: 8px 16px 8px 0; }

.delivery_info {
  margin-top: 10px;
  padding-left: 16px;
  background: #fff; }
  .delivery_info li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-right: 16px; }
    .delivery_info li:first-child {
      height: 48px;
      border-bottom: 1PX solid #f0f0f0; }
      .delivery_info li:first-child .text, .delivery_info li:first-child .val {
        color: #000; }
    .delivery_info li:last-child {
      height: 36px; }
      .delivery_info li:last-child .text, .delivery_info li:last-child .val {
        color: #858585; }
    .delivery_info li .text {
      -webkit-box-flex: 0;
          -ms-flex: none;
              flex: none;
      font-size: 14px; }
    .delivery_info li .val {
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      font-size: 14px;
      height: 18px;
      line-height: 18px; }

.pay_info {
  margin-top: 10px;
  background: #fff; }
  .pay_info .pay_head {
    padding: 12px 16px;
    border-bottom: 1PX solid #f0f0f0; }
    .pay_info .pay_head .title {
      color: #858585;
      font-size: 12px;
      line-height: 18px; }
  .pay_info .pay_infos {
    padding-left: 16px; }
    .pay_info .pay_infos li {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      height: 48px;
      border-bottom: 1PX solid #f0f0f0; }
      .pay_info .pay_infos li:last-child {
        border-bottom: none; }
      .pay_info .pay_infos li .text {
        -webkit-box-flex: 0;
            -ms-flex: none;
                flex: none;
        color: #000;
        font-size: 14px;
        width: 84px; }
      .pay_info .pay_infos li input {
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1;
        color: #000;
        font-size: 14px;
        height: 18px;
        line-height: 18px; }
/* 比价平台弹窗 */
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99; }

.plat_module {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
  -webkit-transition: all 1s ease-in 0.1s;
  transition: all 1s ease-in 0.1s;
  z-index: 100; }

.plat_module.show {
  -webkit-transform: translateY(0);
          transform: translateY(0); }

.plat_module .title {
  height: 56px;
  line-height: 56px; }

.plat_module .title h3 {
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center; }

.plat_module .plat_list {
  padding-left: 15px; }

.plat_module .plat_list li {
  position: relative;
  height: 48px;
  line-height: 48px;
  padding-right: 15px;
  border-top: 1PX solid #e0e0e0;
  overflow: hidden; }

.plat_module .plat_list .text {
  float: left;
  color: #000;
  font-size: 14px; }

.plat_module .plat_list .icon {
  position: absolute;
  top: 50%;
  right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1PX solid #e0e0e0;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%); }

.plat_module .plat_list .icon.active {
  background: url("~images/refund/choose.png") no-repeat;
  background-size: 100%; }

.plat_module .close {
  color: #fff;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: #000; }

</style>
