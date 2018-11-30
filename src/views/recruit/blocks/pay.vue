<template>
  <transition name="slide">
    <div class="pay-box">
      <h1>
        <template v-if="referrerInfo">
          邀请人: <i class="top-name">{{referrerInfo.nickname}}</i>
          ID: {{referrerInfo.accountId}}
        </template>
        
        <i class="close-tb" @click="dialogChange(false)"></i>
      </h1>
      <div class="pay-info f-14">
        <a href="javascript:;" class="pay-consignee consignee-on col-85" v-if="consignee" @click="goEditAddress">
          <ul>
              <li class="f-16 mb-5 col-000">
                  {{consignee.fullName}}
                  <i class="right">{{consignee.mobileNumber}}</i>
              </li>
              <li>
                  收货地址：
                  {{consignee.nationwide + consignee.detailAddress}}
              </li>
              <li v-if="consignee.idCard">
                  身份证号：
                  {{consignee.idCard}}
              </li>
          </ul>
        </a>
        <a  class="pay-consignee" v-else  @click="goAddAddress">
            <ul>
                <li>
                   新增收货地址
                </li>
            </ul>
        </a>
        
       
       <!--实名认证-->
       <!-- <div  class="pay-certificate" @click="goEditCer"><em>用户名</em>1111</div> -->
      <div v-if="idCardVerifyView && idCardVerifyView.idCardRequire" class="mt-10">
            <div   class="pay-certificate consignee-on col-85" v-if="idCardVerifyView && idCardVerifyView.idCardRequire>0" @click="goEditCer">
              <ul>
                <li>
                  <em>用户名</em>{{idCardVerifyView.idCardNo}}
                </li>
            </ul>
            </div>
            <div v-else class="pay-consignee consignee-on col-85" @click="goAddCer">
               <ul>
                <li>
                  新增实名信息
                </li>
            </ul>
          </div>
      </div>
       
       

        <ul class="pay-product mt-10">
          <li class="clearfix product-list">
            <i class="product-tu left" v-lazy:background-image="payInfo.productImage"></i>
            <span class="right t-r">
              ￥{{payInfo.productPrice}}<br>
              <i class="col-85">x1</i>
            </span>
            <div class="product-info">
              <p class="f-14" v-text="payInfo.productName"></p>
              <p class="f-12 col-85 mt-5" v-if="payInfo.skuDesc"  v-text="payInfo.skuDesc"></p>
            </div>
          </li>
          <li class="t-r mt-10" v-if="payInfo.isSupportDelivery == 1"> 
            <i class="f-12 col-85">
              <template v-if="Number(payInfo.totalFreight) > 0">
                <template v-if="Number(payInfo.freight) > 0">
                  快递:&yen;{{payInfo.totalFreight}}
                </template>
                <template v-if="payInfo.remoteFreight > 0">
                  (偏远地区加邮费&yen;{{payInfo.remoteFreight}}元)
                </template>
              </template>
              <template v-else>
                快递:&yen;0
              </template>
            </i>
            <i class="total-price"> 总计：&yen;{{payInfo.payPrice}}</i>
          </li>
          <li v-else style="background:#fff;margin-top:-2px;">
            <p class="col-f00 f-12" v-text="payInfo.unSupportDesc"></p>
          </li>
        </ul>
        <p class="wx-info mb-10 mt-10">
          微信号：
          <input v-model.trim="wxNum" maxlength="50" placeholder="提供开店专属服务(选填)"  @blur="changeInput($event)" @click="focusFun">
        </p>
        <ul class="pay-type-info mb-10 bg-fff">
          <li v-for="list in payWay.spreadList" :key="list.id" >
              <i class="pay-tb" :style="{backgroundImage:'url('+list.channelImage+')'}"></i>
              {{list.channelDesc}}
              <i class="right pay-select" :class="{'on':payType == list.type}" @click="payType = list.type"></i>
          </li>
          <!-- <li class="pay-alipay">
              支付宝
              <i class="right pay-select" :class="{'on':payType == 2}" @click="payType = 2"></i>
          </li>
          <li class="pay-wx" v-if="isWx">
              微信支付
              <i class="right pay-select" :class="{'on':payType == 3}" @click="payType = 3"></i>
          </li> -->
          <!--<li class="pay-unionPay">-->
          <!--银联支付-->
          <!--<i class="right pay-select"></i>-->
          <!--</li>-->
        </ul>
      </div>
      

      <payBar  v-if="canPay == 1" isSuccess="0" :payChannel="pay.payChannel" :orderId="pay.orderId" :payPrice="pay.payPrice" fromPage="recruit"></payBar>
      <!-- <p class="pay-btn" @click="payFun()" v-if="blackBtn == 1">
        <i>立即付款</i>
      </p> -->
       <p class="pay-btn" v-if="canPay == 0" @click="payFun()"><i class="un-pay">立即付款</i></p>
      <Addr v-if="isAddr" :address-info="consignee" :is-overseas="isOverseas" @addrCallBack="addrFun"></Addr>
     
    </div>
  </transition>
</template>
<script>
import "@/assets/css/recruit/public.less";
import { Dlg } from "@/assets/dialog/fm.dialog.min.js";
import tools from "@/utils/tools";
import Addr from "./address";
import payBar from '@/components/payBar';
import { Toast, InfiniteScroll } from 'mint-ui'
import api from '@/api/recruit'
import session from '@/utils/session-lite'

export default {
  name: "pay-box",
  props: ["productId", "referrerInfo", "saleUnitId"],
  data() {
    return {
      idCardVerifyId: session.get('idCardVerifyId') ,
      referrerId: "",
      payInfo: "",
      consignee: "",
      isWx: tools.isWx,
      isAddr: false,
      addressId: -1,
      isOverseas: 0,
      payType: 2, //读后台配置，这里以防万一默认写一个
      payWay: "",
      wxNum: tools.getCookie('wx'),
      isRequest: false,
      pay:{
        payChannel:"2",
        orderIds:'',
        payPrice:''
      },
      canPay:0,
      idCardVerifyView:null ,//实名认证
      isCer:false
    };
  },
  components: {
    Addr,
    payBar
    
  },
  computed: {},
  methods: {
    changeInput (){
          console.log(this.wxNum);
           tools.setCookie('wx',this.wxNum);
    },
    goAddAddress () {
        this.$router.push({
          name:"addressAdd"
        });
    },
    goEditAddress (){
        this.$router.push({
          path:'/address/edit',
          query:{
            addressInfo:JSON.stringify(this.receiveAddress)
          }
        });
    },
    goAddCer () {
       this.$router.push({
          path:"/certificate/add"
        });
    },
    goEditCer () {
         this.$router.push({
          path:'/certificate/list'
        });
    },
    getCerInfo(val){
      if(!val.type){
        this.isCer = false;
      }
      console.log(val);
    },
     // url里面拿需要的参数
    GetQueryString (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return r[2]
      return null
    },
    getConfirm() {
    
      let _params = {
        productId:this.saleUnitId,
        addressId: this.addressId
      };
      // if (this.addressId != 0) {
      //   _params.addressId = this.addressId;
      // }
          api.confirmOrder( _params).then(req => {
        // req = {freight: "0",isEmptyIdCard: 0,isOverseas: 0,isSupportDelivery: 1,payPrice: "399",payWay:{foldingList: [],gpm: null,id: null,spreadList:[{channelDesc: "支付宝支付",channelImage: "https://img.gegejia.com/product/11e7aadc658cf.png",}]},productImage: "https://img.gegejia.com/seller/platform/all/22fae33295650.jpg",productName: "康巴赫第二代蜂窝无油烟不粘304炒锅",productPrice: "399",remoteFreight: "0",sellerName: "品牌商",skuDesc: "银黑色",status: 1,totalFreight: "0",receiveAddress:{addressId: "1630363",city: "330100",cityName: "杭州市",detailAddress: "古墩路新金都城市花园紫东苑6－1",district: "330106",districtName: "西湖区",fullName: "杨利平",idCard: "33052219920207081x",mobileNumber: "18367260320",nationwide: "浙江省杭州市西湖区",province: "330000",provinceName: "浙江省"}}
          if (req.status == 1) {
            this.payInfo = req.data;
            this.consignee = req.data.receiveAddress;
            this.payWay = req.data.payWay;
            this.isOverseas = req.data.isOverseas;
            this.addressId = req.data.receiveAddress
              ? req.data.receiveAddress.addressId
              : 0;
             this.receiveAddress = req.data.receiveAddress;
            this.payType = req.data.payWay.spreadList[0].type;
            this.idCardVerifyView = req.data.idCardVerifyView ?  req.data.idCardVerifyView : null;
            this.idCardVerifyId =this.idCardVerifyView ? this.idCardVerifyView.idCardVerifyId: -1;
          
            if(req.data.isSupportDelivery == 0){
              //出现灰色按钮,原来的逻辑
              this.canPay = 0
            }else{
              //有地址出现红色付款按钮，多了一层地址的判断
              if(this.addressId!=0){
                this.canPay = 1
              }else{
                //出现黑色提示按钮    
                this.canPay = 0
              }
            }
            this.getAddOrder();
          }else {
            this.showMsg(req.errorMessage);
          }
        });
   
     
    },
    dialogChange(val) {
      this.$emit("payShow", val);
    },
    addrFun(val) {
      this.isAddr = false;
      if (val.type) {
        this.addressId = val.id;
        this.getConfirm();
      }
    },
    payFun() {
      if (!this.consignee) {
        this.showMsg("请添加收货地址");
        return false;
      }
      if (this.wxNum != "") {
        if (this.wxNum.length < 2 || this.wxNum.length > 50) {
          this.showMsg("请输入正确的微信号，2-50个字符~");
          return false;
        }
      }  
    },
    getAddOrder(){

       if (!this.isRequest) {
        this.isRequest = true;
        
        const _params = {
           saleUnitId:this.saleUnitId,
           addressId:this.addressId,
           recommendAccountId:this.referrerInfo.accountId,
           accountid:this.GetQueryString('accountId'),
           name:"",
           wxNo: this.wxNum,
           idCardVerifyId:this.idCardVerifyId
        };
     
        api.getAddOrder(_params).then(req => {
          console.log("req:",req);
          this.pay.orderId = req.data.orderId
          this.pay.payPrice = req.data.realPrice;
          this.isRequest = false;

        });
      }
    },
    wxPay(obj) {
      const _params = {
        orderId: obj.orderId,
        payType: this.payType,
        realPrice: obj.realPrice
      };
      api.getWxOrder({data:_params}).then(payData => {
        if(payData.status == 1) {
          const _payData =JSON.parse(payData.payStr);
          WeixinJSBridge.invoke('getBrandWCPayRequest',{
          "appId" : _payData.appid,   
          "timeStamp":_payData.timestamp,       
          "nonceStr" : _payData.nonce_str, 
          "package" : _payData.packageValue,
          "signType" : _payData.signType, 
          "paySign" : _payData.sign 
          },function(res) {
              if (res.err_msg == "get_brand_wcpay_request:ok") {
                api.payCallBackUrl().then(backData=> {
                  window.location.href = backData.qqbsUrl;
                })
              } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                // 支付过程中用户取消  定单过期
                this.showMsg('支付失败,请重新支付');
              } else {
                this.showMsg("支付失败,请刷新页面!");
              }
          })
        } else {
          this.showMsg(payData.errorMessage);
        }
      });
    },
    showMsg(msg) {
      Toast(msg);
    },
    aliPayDialog() {
      const buttons = [{
        name: '已完成',
        css: 'color: #000000;',
        callback: function() {
          Dlg.close("iconfirm");
        }
      }, {
        name: '未完成',
        css: 'border-colro:#000000;',
        callback: function() {
          Dlg.msg({
            content: '果然是亲生的朋友，这么爽快就应答了',
            msgType: 'success'
          });
        }
      }]
      Dlg.confirm({
        id: "iconfirm",
        title: "支付提醒",
        content: '是否已完成支付？',
        buttonDirection: 'vertical',
        button: buttons,
        showTitle: false
      });
    },
    focusFun() {
      const _input = document.querySelector('.wx-info input');
      _input.focus();
     
     
    }
  },
  mounted() {
    this.getConfirm();
    console.log("************");
    console.log("this.idCardVerifyId:", this.idCardVerifyId);
    console.log("***************");
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
};
</script>
<style lang="less" scoped>
.total-price{
  font-size: 14px;
  color: #F1002D;
}
.pay-certificate{
  display: block;
  position: relative;
  padding: 21px 10px 21px 10px;
  //background: url(~images/recruit/add.png) no-repeat 10px center #fff;
  background-size: 20px auto;
  border-radius: 2px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  font-size:16px;
  color:#1a1a1a;
  em{
    margin:0 20px 0 0;
  }
}

// .pay-certificate::before {
//   content: "";
//   position: absolute;
//   z-index: 5;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 4px;
//   background: url(~images/recruit/address-line.png) repeat-x;
//   background-size: auto 4px;
// }



.pay-box {
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 80px;
  box-sizing: border-box;
  background: #fff;
  overflow-y: auto;
}
.pay-box h1 {
  position: relative;
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
  font-size: 14px;
  font-weight: normal;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
}
.pay-box h1 .close-tb {
  position: absolute;
  z-index: 5;
  top: 8px;
  right: 5px;
  width: 30px;
  height: 30px;
  background: url("~images/recruit/close_line_black.png") no-repeat center;
  background-size: 14px auto;
}

.pay-info {
  padding: 10px;
  margin-bottom: 10px;
}
.pay-info .pay-consignee {
  display: block;
  position: relative;
  padding: 20px 10px 20px 42px;
  background: url(~images/recruit/add.png) no-repeat 10px center #fff;
  background-size: 20px auto;
  border-radius: 2px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  font-size:16px;
  color:#1a1a1a;
}
.pay-info .pay-consignee::before {
  content: "";
  position: absolute;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  background: url(~images/recruit/address-line.png) repeat-x;
  background-size: auto 4px;
}
.pay-info .pay-consignee ul , .pay-certificate ul{
  padding-right: 20px;
  background: url(~images/recruit/arrow-right-gray.png) no-repeat right center;
  background-size: 7px auto;
  vertical-align: top;
}
.pay-info .consignee-on {
  padding-left: 10px;
  background-image: url();
}

.pay-btn {
  position: fixed;
  z-index: 5;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #f0f0f0;
  padding: 10px;
}
.pay-btn i {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background: #000;
}
.pay-btn .un-pay {
  background: #858585;
}

.pay-product {
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.pay-product .product-list {
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}
.pay-product .product-tu {
  width: 72px;
  height: 72px;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat center;
  background-size: cover;
}
.pay-product .product-info {
  margin-left: 77px;
  margin-right: 40px;
}

.wx-info {
  height: 54px;
  line-height: 54px;
  padding: 0 10px;
  border-radius: 2px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.wx-info input {
  width: 75%;
  height: 100%;
  font-size: 14px;
}

.pay-type-info {
  padding: 0 10px;
  border-radius: 2px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.pay-type-info li {
  height: 50px;
  line-height: 50px;
}
.pay-type-info li + li {
  border-top: 1px solid #f0f0f0;
}

.pay-tb {
  display: inline-block;
  width: 26px;
  height: 26px;
  margin: 0 5px;
  background: no-repeat center;
  background-size: contain;
  vertical-align: middle;
}

.pay-select {
  width: 30px;
  height: 50px;
}
.pay-select::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-top: 15px;
  border: 1px solid #ddd;
  border-radius: 50%;
  box-sizing: border-box;
}
.pay-select.on::before {
  background: url(~images/recruit/gou_black.png) no-repeat center;
  background-size: 20px auto;
  border: none;
}

.top-name {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: top;
  margin-right: 10px;
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

</style>
