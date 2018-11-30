<template>
  <div id="applyModule" class="applyModule" :class="{flexModule: showFlex}" v-cloak>
    <!-- 头部 -->
    <div class="header_bar flexHeader" v-if="isAppView == 1">
      <span class="back bar" @click="back()"><i class="icon"></i></span>
      <h4>退款详情</h4>
      <span class="bar concat" @click="concat()">联系客服</span>
    </div>
    <div class="refund_detail flexMain">
      <div class="content">
        <!-- 退款进度-->
        <div class="progress_module" v-if="refundDetail.displayStep == 1">
            <ul class="progress">
                <li class="current">
                    <div class="status_txt">发起退款申请</div>
                    <div class="line"></div>
                    <div class="circle"></div>
                </li>
                <li :class="{current: refundDetail.step > 1}">
                    <div class="status_txt">等待申请通过</div>
                    <div class="line" :class="{active: refundDetail.step == 2}"></div>
                    <div class="circle"></div>
                    <div class="status_tips"
                          v-if="refundDetail.endSecond && refundDetail.endSecond > 0 && refundDetail.step == 2">
                        {{countDown}}
                    </div>
                    <div class="hurry" @click="urge()"
                          v-if="refundDetail.endSecond && refundDetail.endSecond <= 0 && refundDetail.step == 2">催一催
                    </div>
                </li>
                <li :class="{current: refundDetail.step > 2}" v-if="refundDetail.type == 2">
                    <div class="status_txt">等待仓库收货</div>
                    <div class="line" :class="{active: refundDetail.step == 3}"></div>
                    <div class="circle"></div>
                </li>
                <li :class="{current: refundDetail.step > 3}">
                    <div class="status_txt">等待退款处理</div>
                    <div class="line" :class="{active: refundDetail.step == 4}"></div>
                    <div class="circle"></div>
                    <div class="status_tips"
                          v-if="refundDetail.endSecond && refundDetail.endSecond > 0 && refundDetail.step == 4">
                        {{countDown}}
                    </div>
                </li>
                <li :class="{current: refundDetail.step > 4}">
                    <div class="status_txt">退款完成</div>
                    <div class="line"></div>
                    <div class="circle"></div>
                </li>
            </ul>
        </div>

        <!-- 申请操作-->
        <div class="refund_status" :class="{is_top: refundDetail.displayStep != 1}"
              v-if="!refundDetail.logisticsNumber">
            <div class="refund_status_txt" v-if="refundDetail.mainInfo || refundDetail.supplementary">
                <h3 :class="{warn: refundDetail.mainInfoColor == 2}" v-if="refundDetail.mainInfo">
                    {{refundDetail.mainInfo}}</h3>
                <p v-if="refundDetail.supplementary">{{refundDetail.supplementary}}</p>
            </div>
            <div class="refund_operate" v-if="refundDetail.canModify == 1">
                <span class="opt" @click="showCancelApply()">撤销申请</span>
                <router-link class="opt" :to="{ path: '/refund/apply', query: { isAppView: isAppView, applyNumber: applyNumber,isHide: 1 }}">修改申请</router-link>
            </div>
            <div class="refund_operate" v-if="refundDetail.canAddLogisticsInfo == 1">
              <router-link class="opt" :to="{ path: '/refund/delivery', query: { isAppView: isAppView, applyNumber: applyNumber } }">查看寄件地址</router-link>
              <span class="opt warn" @click="showRefuse()" v-if="refundDetail.canRefuseSign == 1">我已拒签</span>
            </div>
        </div>

        <!-- 物流信息-->
        <div class="logistic_module" v-if="refundDetail.type == 2 && refundDetail.logisticsNumber">
            <div class="head">
                <div class="title">
                    <img src="~images/refund/logistic.png" alt=""/>
                    <h3>物流信息</h3>
                </div>
                <div class="log_num">{{refundDetail.logisticsChannel}} {{refundDetail.logisticsNumber}}</div>
            </div>
            <ul class="log_brief" v-if="logitsicsInfo.length > 0">
                <li v-for="info in logitsicsInfo">
                    <p>{{info.time}} {{info.content}}</p>
                </li>
                <li class="showLogs">
                  <router-link :to="{ path: '/refund/logistics', query: { isAppView: isAppView, applyNumber: applyNumber,isHide: 1 } }">查看更多信息</router-link>
                </li>
            </ul>
        </div>

        <!-- 退款信息-->
        <div class="refund_info">
            <div class="title">退款信息</div>
            <!-- 退款商品-->
            <div class="pro" v-if="refundProduct">
                <div class="pro_photo"><img :src="refundProduct.imgUrl" alt=""/></div>
                <div class="pro_info">
                    <p class="p_title">{{refundProduct.name}}</p>
                    <p class="p_price">合计：<span class="amount">￥{{refundProduct.totalPrice/100}}</span><span
                            class="num">（￥{{refundProduct.singlePrice/100}}x{{refundProduct.count}}）</span></p>
                </div>
            </div>
            <!-- 退款信息-->
            <div class="r_info" v-if="refundDetail">
                <ul class="info_list">
                    <li>退款原因：{{refundDetail.reason}}</li>
                    <li v-if="refundDetail.explain">退款说明：{{refundDetail.explain}}</li>
                    <li>退款金额：¥{{refundDetail.refundPrice}}<span v-if="refundDetail.refundPostage">（含邮费：¥ {{refundDetail.refundPostage}}）</span>
                    </li>
                    <li>{{refundDetail.refundCoinTips}}</li>
                    <li>申请时间：{{refundDetail.applyTime}}</li>
                    <li v-if="refundDetail.refundTime && refundDetail.step == 5">退款时间：{{refundDetail.refundTime}}
                    </li>
                    <li class="r_number">订单编号：<span class="number">{{refundDetail.orderNumber}}</span>
                        <div class="copy_btn" @click="copyOrderNumber()"><span class="copy">复制</span></div>
                    </li>
                    <li v-if="refundDetail.alipayNO">收款支付宝账号：{{refundDetail.alipayNO}}</li>
                </ul>
            </div>
        </div>
        <div class="complain" v-if="refundDetail.complainUrl" @click="goComplain(refundDetail.complainUrl)">对处理结果不满意？<span class="arrow"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/refund'
import tools from '@/utils/tools'
import { MessageBox } from 'mint-ui';
import bridge from "@/utils/bridge"

export default {
  name: "refundDetail",
  data() {
    return {
      isAppView: 0,
      showFlex: false,
      showSpinner: false,
      showToast: false,
      toastMsg: "",
      showConfirm: false,
      showLogs: false,
      confirmTxt: "",
      refundDetail: "",
      refundProduct: "",
      cType: 1,
      applyNumber: "",
      isFromList: 0,
      IMNum: "",
      referrer: "" // 上一页路由  为空即为一级页面
    };
  },
  computed: {
    /**
     * 倒计时时间
     */
    countDown: function() {
      var seconds = this.refundDetail.endSecond || 0;
      var hours = Math.floor(seconds / 3600);
      var mSeconds = seconds - 3600 * hours;
      var minutes = Math.floor(mSeconds / 60);
      return "还剩" + hours + "小时" + minutes + "分";
    },
    /**
     * 物流信息展示
     */
    logitsicsInfo: function() {
      var logistics;
      if (this.showLogs) {
        logistics = this.refundDetail.logisticsInfoList;
      } else {
        logistics = this.refundDetail.logisticsInfoList.slice(0, 2);
      }
      return logistics;
    }
  },
  components: {
    // VSpinner: ggj.spinner,
    // VToast: ggj.toast,
    // VConfirm: ggj.confirm
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
    if (this.isFromList && this.isFromList == 1) {
      window.localStorage.setItem("isLocal", 1);
    }
    this.getRefundDetail();
    tools.bridgeFun()
  },
  methods: {
    goComplain: function(url) {
      this.$router.push({
        path: url,
        query: {
          isAppView: this.isAppView
        }
      })
      // window.location.href = url + "&isAppView=" + this.isAppView;
    },
    // 返回
    back: function() {
      var referrer = this.referrer;
      var isDelivery = /delivery/.test(referrer);
      if (referrer && this.isAppView != 1) {
        // if (isDelivery) {
        //   this.$router.go(-2);
        // } else {
          this.$router.go(-1);
        // }
      } else if (referrer && this.isAppView == 1) {
        if (this.isFromList == 1) {
          // if (isDelivery) {
          //   this.$router.go(-2);
          // } else {
            this.$router.go(-1);
          // }
        } else {
          window.localStorage.removeItem("isLocal");
          bridge.changeReceiveAddress()
          // window.WebViewJavascriptBridge.callHandler("changeReceiveAddress");
          window.location.href = "ggj://redirect";
        }
      } else {
        window.localStorage.removeItem("isLocal");
        bridge.changeReceiveAddress()
        // window.WebViewJavascriptBridge.callHandler("changeReceiveAddress");
        window.location.href = "ggj://redirect";
      }
    },
    // 联系客服
    concat: function() {
      bridge.concat(8, this.IMNum, this.IMName)
      // window.WebViewJavascriptBridge.callHandler(
      //   "pushToOtherController",
      //   { type: 8, IMServiceNum: this.IMNum, IMServiceName: this.IMName },
      //   function(res) {}
      // );
    },
    // 获取退款详情
    getRefundDetail: function() {
      const data = {
        applyNumber: this.applyNumber
      }
      api.getRefundDetail(data).then((res) => {
        this.showFlex = true;
        this.showSpinner = false;
        if (res.status == 1) {
          this.refundDetail = res.data;
          this.refundProduct = res.data.product;
          this.IMNum = res.data.imserviceinfo.imNum;
          this.IMName = res.data.imserviceinfo.sellerName;
        } else {
          tools.toast(res.message)
          if (this.isAppView != 1 && res.status == 3) {
            setTimeout(function() {
              this.$router.push({
                path: "/personal"
              })
              // window.location.href = "/ygg-hqbs/spokesPerson/getList";
            }, 1000);
          }
        }
      })
    },
    // 催一催
    urge: function() {
      api.refundUrge({ applyNumber: this.applyNumber }).then(res=>{
        if (res.status == 1) {
          tools.toast("已为您催促客服加急处理")
        } else {
          tools.toast(res.message)
        }
      })
    },
    // 取消申请
    cancelApply: function() {
      api.cancelApply({ applyNumber: this.applyNumber }).then(res=>{
        if (res.status == 1) {
          // window.location.reload();
          // this.$router.go(0)
          this.getRefundDetail();
        } else {
          tools.toast(res.message)
        }
      })
    },
    // 拒签
    refuse: function() {
      api.refuseSign({ applyNumber: this.applyNumber }).then(res=>{
        if (res.status == 1) {
          // window.location.reload();
          // this.$router.go(0)
          this.getRefundDetail();
        } else {
          tools.toast(res.message)
        }
      })
    },
    // 取消申请
    showCancelApply: function() {
      MessageBox({
        title: '',
        message: '是否要撤销售后申请？撤销后你依然可以再次发起售后申请',
        showCancelButton: true
      }).then(action=>{
        if(action === "confirm"){
          this.cancelApply();
        }
      })
    },
    // 拒签
    showRefuse: function() {
      MessageBox({
        title: '',
        message: '确认要拒签？',
        showCancelButton: true
      }).then(action=>{
        if(action === "confirm"){
          this.refuse();
        }
      })
    },
    /**
     * 复制功能
     */
    copy: function($ele) {
      var range;
      var self = this;
      var save = function(e) {
        e.clipboardData.setData("text/plain", $ele.innerHTML);
        e.preventDefault();
      };

      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
        //ios设备
        window.getSelection().removeAllRanges();
        range = document.createRange();
        range.selectNode($ele);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
      } else {
        // 安卓设备
        document.addEventListener("copy", save);
        document.execCommand("copy");
        document.removeEventListener("copy", save);
      }

      setTimeout(function() {
        tools.toast("复制成功")
      }, 200);
    },
    /**
     * 复制订单编号
     */
    copyOrderNumber: function() {
      var self = this;
      var orderNum = document.querySelector(".number");
      try {
        self.copy(orderNum);
      } catch (e) {
        tools.toast("复制成功")
      }
    },
    
    // 获取地址栏参数
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }
};
</script>

<style lang="less" scoped>
.applyModule{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.complain{
    margin-top:8px;
    padding:15px;
    background:#fff;
    font-size:14px;
}
.complain .arrow{
    float:right;
    width:7px;
    height:13px;
    margin-top:3px;
    background:url("~images/refund/right.png") no-repeat center;
    background-size:100%;
}
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

/* 退款详情 */
.progress_module {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  height: 120px;
  background: #4D4D4D; }

.progress {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 85%; }
  .progress li {
    position: relative;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1; }
    .progress li:last-child {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
          -ms-flex: none;
              flex: none;
      -webkit-box-align: end;
          -ms-flex-align: end;
              align-items: flex-end; }
      .progress li:last-child .status_txt {
        position: absolute;
        width: 60px;
        line-height: 32px;
        -ms-flex-item-align: start;
            align-self: flex-start; }
      .progress li:first-child .status_txt{
        margin-left: 5px;
      }
      .progress li:last-child .line {
        display: none; }
    .progress li.current .status_txt {
      color: #fff; }
    .progress li.current .line {
      background: #fff; }
    .progress li.current .circle {
      background: #fff; }
    .progress li .status_txt {
      color: #858585;
      font-size: 12px;
      width: 45px;
      line-height: 16px;
      height: 32px;
      margin-bottom: 16px;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%); }
    .progress li .line {
      width: 100%;
      height: 4px;
      background: #858585; }
      .progress li .line.active {
        background: #858585; }
    .progress li .circle {
      width: 12px;
      height: 12px;
      background: #858585;
      border-radius: 50%;
      -webkit-transform: translate(-50%, -8px);
              transform: translate(-50%, -8px); }
    .progress li .status_tips {
      position: absolute;
      color: #fff;
      font-size: 12px;
      width: 110px;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%); }
    .progress li .hurry {
      position: absolute;
      color: #fff;
      font-size: 10px;
      width: 40px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      border: 1PX solid #fff;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%); }

.refund_status {
  margin-top: 10px;
  background: #fff; }
  .refund_status.is_top {
    margin-top: 0; }
  .refund_status .refund_status_txt {
    padding: 16px 12px 12px 16px; }
    .refund_status .refund_status_txt h3 {
      color: #000;
      font-size: 16px;
      font-weight: normal;
      word-wrap: break-word; }
      .refund_status .refund_status_txt h3.warn {
        color: #f00; }
    .refund_status .refund_status_txt p {
      color: #858585;
      font-size: 12px;
      word-wrap: break-word; }
  .refund_status .refund_operate {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 55px;
    padding: 0 16px;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    border-top: 1PX solid #f0f0f0; }
    .refund_status .refund_operate .opt {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      color: #000;
      font-size: 12px;
      padding: 0 15px;
      height: 30px;
      line-height: 30px;
      margin-left: 10px;
      border: 1PX solid #000; }
      .refund_status .refund_operate .opt.warn {
        color: #f00;
        border-color: #f00; }

.refund_info {
  margin-top: 10px;
  background: #fff; }
  .refund_info .title {
    color: #000;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding-left: 16px;
    border-bottom: 1px solid #f0f0f0; }
  .refund_info .pro {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 16px;
    border-bottom: 1PX solid #f0f0f0; }
    .refund_info .pro .pro_photo {
      -webkit-box-flex: 0;
          -ms-flex: none;
              flex: none;
      width: 60px;
      height: 60px; }
      .refund_info .pro .pro_photo img {
        width: 100%;
        height: 100%; }
    .refund_info .pro .pro_info {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      margin-left: 8px; }
    .refund_info .pro .p_title {
      color: #000;
      font-size: 16px;
      line-height: 18px;
      height: 36px;
      overflow: hidden; }
    .refund_info .pro .p_price {
      color: #000;
      font-size: 12px; }
      .refund_info .pro .p_price .amount {
        color: #c00; }
      .refund_info .pro .p_price .num {
        color: #373737; }
  .refund_info .r_info {
    padding: 12px 16px;
    background: #fff; }
    .refund_info .r_info .info_list li {
      color: #858585;
      font-size: 14px;
      line-height: 20px; }
      .refund_info .r_info .info_list li span {
        color: #858585; }
      .refund_info .r_info .info_list li.r_number {
        position: relative; }
      .refund_info .r_info .info_list li .copy_btn {
        position: absolute;
        top: -50%;
        right: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        width: 60px;
        height: 30px; }
      .refund_info .r_info .info_list li .copy {
        display: block;
        color: #000;
        font-size: 12px;
        width: 48px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border: 1PX solid #000; }

.logistic_module {
  margin-top: 10px;
  background: #fff; }
  .logistic_module .head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    height: 40px;
    padding: 0 12px;
    border-bottom: 1PX solid #f0f0f0; }
    .logistic_module .head .title {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center; }
      .logistic_module .head .title img {
        width: 18px;
        height: 18px; }
      .logistic_module .head .title h3 {
        color: #000;
        font-size: 14px;
        font-weight: normal;
        margin-left: 6px; }
    .logistic_module .head .log_num {
      color: #666;
      font-size: 12px; }
  .logistic_module .log_brief {
    padding: 0 10px; }
    .logistic_module .log_brief li {
      color: #858585;
      font-size: 14px;
      line-height: 18px;
      padding: 10px 0;
      border-bottom: 1PX solid #f0f0f0; }
      .logistic_module .log_brief li.showLogs {
        border-bottom: none;
        text-align: center; }
        .logistic_module .log_brief li.showLogs a {
          display: block;
          color: #858585; }

</style>
