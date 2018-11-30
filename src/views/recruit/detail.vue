<template>
    <div class="recruit-detail pb-60 f-14" :class="{'pt-45':isApp}">
      <topBar :title-name="'买手招募'" v-if="isApp"></topBar>
      <Banner :list-img="bannerList" :type=1></Banner>
      <section class="detail-top">
        <h1 class="detail-title" v-if="productData.name">
          <i class="baoyou" v-if="productData.isFreeDelivery == 1">包邮</i>
          {{productData.name}}
        </h1>
        <p class="baoyou s-price">&yen;{{productData.lowPrice}}</p>
        <p class="col-85 m-price">市场价<del>&yen;{{productData.highPrice}}</del></p>
      </section>

      <!-- 推荐人信息 -->
      <!-- <p class="detail-referrer" v-if="referrerInfo">
        <i v-lazy:background-image="referrerInfo.image"></i>
        <span>{{referrerInfo.nickname}}</span> 邀您一起买
      </p> -->

      <!-- 编辑推荐 -->
      <section class="recommend-info detail-desc mt-10">
        <p class="mb-5 f-15 edit">编辑推荐</p>
        <p v-text="productData.gegeSay" class="f-13 edit-info"></p>
      </section>
      
      <!-- 商品信息 -->
      <section class="recommend-info detail-desc f-12 mt-10">
        <p class="mb-5 f-15">商品信息</p>
        <div v-for="info in productData.summaryList" :key="info.id" class="clearfix">
          <span class="left" v-text="info.title"></span>
          <p v-text="info.name" class="recommend-content col-85 mt-5"></p>
        </div>
      </section>
 
      <!-- 商品详情 -->
      <section class="detail-info mt-10">
        <p class="mb-5 f-15 ml-10">商品详情</p>
        <div v-for="(img,i) in productData.detailImgList" :key="i" >
          <img v-lazy="img">
        </div>
      </section>
      
      
      
      <p class="detail-btn " @click="btnFun" :class="{'bg-85':(productData.productStatus == 4 || productData.stockCount == 0) && !skuData}">
        <template v-if="skuData">
          选择规格
        </template>
        <template v-else>
          立即购买
          <!-- <template v-if="productData.productStatus == 4 || productData.stockCount == 0">
            已抢完
          </template>
          <template v-else>
            去付款
          </template> -->
        </template>
      </p>
      <Sku v-if="isSku && skuData" :sku-info="skuData" :product-id="productId" @skuCallBack="skuFun"></Sku>
      
      <Referrer :title="title" v-show="isTidShow" @tidChange="tidFun"></Referrer>
      <recommend 
         v-show="isEditReferrer" 
         title="您将绑定推荐人" 
         :info="recommendInfo" 
         @reChange="closeRecommend" 
         @showReferrer="showReferrer" 
         @showPay="showPay">
      </recommend>

      <Pay v-if="isPay" 
         :product-id="productId" 
         :referrer-info="referrerInfo" 
         :saleUnitId="saleUnitId"
         @payShow="payIsShow">
      </Pay>
      <div class="layer-full" v-show="isTidShow || isSku || isEditReferrer"></div>
      <loading v-if="pageLoading"></loading>
    </div>
</template>
<script>
import api from "@/api/recruit";
import {Toast} from  'mint-ui'
//import { Dlg } from "@/assets/dialog/fm.dialog.min.js";
import tools from "@/utils/tools";
import auth from "@/utils/auth";
import topBar from "./blocks/topBar";
import Banner from "./blocks/swiperBanner";
import Loading from "@/components/loading";
import Referrer from "./blocks/referrer";
import Sku from "./blocks/sku";
import Pay from "./blocks/pay";
import recommend from "./blocks/recommend";


import "@/assets/css/recruit/public.less";
import "@/assets/css/recruit/animate.css";
export default {
  name: "recruit-detail",
  data() {
    return {
      isApp: tools.isApp,
      productId: this.$router.currentRoute.params.saleGoodsId,
      saleUnitId:"",
      isTidShow: false,
      // tId: this.$router.currentRoute.query.accountid
      //   ? this.$router.currentRoute.query.accountid
      //   : "",
      tId:this.GetQueryString('accountid'),
      isSku: false,
      isPay: false,
      bannerList: "",
      productData: "",
      referrerInfo: "",
      skuData: "",
      isMember: 0,
      pageLoading: true,
      recommendInfo:{},
      isEditReferrer:false,
      title:"填写推荐人"
    };
  },
  components: {
    topBar,
    Banner,
    Loading,
    Referrer,
    Sku,
    Pay,
    recommend
  },
  methods: {
    showReferrer (){
      this.isEditReferrer = false;
      this.isTidShow = true;
    },
    closeRecommend (val) {
    
      if(!val.type){
        this.isEditReferrer = false;
      }
    },
    GetQueryString (name) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
          var r = window.location.search.substr(1).match(reg)
          if (r != null) return r[2]
          return null
        },
    getInfoData(params) {
     
      api.getDetail(params).then(req => {
        this.pageLoading = false;
        if (req.status == 1) {
          this.bannerList = req.data.imageList;
          this.productData = req.data;
          this.referrerInfo = req.data.referral;
          this.saleUnitId = req.data.saleUnitId;
          this.skuData = req.data.skuInfo;
          this.isMember = req.data.otherMemberInfo.isMember;
          this.title =  req.data.referral === null ?"填写推荐人":"修改推荐人";
        
          //this.productId = req.data.saleUnitId;
        }
      });
    },
    showPay(val){
      if(val){
        this.isPay = true;
      }
    },
    tidFun(val) {
      if (val.type) {
        if (val.id != "") {
          // if(val.id > 2147483647) {//服务端把int类型改为string就不需要此判断
          //   this.showMsg('请输入正确的邀请ID');
          //   return false;
          // }

          const _params = {
            recommendId: val.id
          };
          api.editRecommend(_params).then(req => {
            if (req.status == 1) {
              this.recommendInfo = req.data;
              this.checkSku()
            } else {
              this.showMsg(req.errorMessage);
              return false;
            }
            this.isTidShow = false;
          });

        } else {
          this.showMsg("请咨询你认识的店主获取邀请ID");
        }
      } else {
       
        this.isTidShow = false;
      }      
    },
    checkSku() {
      if (this.skuData) {
        this.isSku = true;
      } else {
        //this.isPay = true;
        this.isEditReferrer = true;
      }
    },
    btnFun() {
      if(!this.skuData && (this.productData.productStatus == 4 || this.productData.stockCount == 0)) return false;
    
      if (!auth.isLoggedIn()) {
        //判断是否登录
        auth.login(this.$router.currentRoute.fullPath);
      } else {
        if(this.isMember == 1) {
          this.showMsg("您已经是捕手美食店主");
          return false;
        }
        if(this.skuData){
          this.isSku = true;
        }else{
            if (this.referrerInfo) {//判断是否有推荐人id
              //this.checkSku()
              this.isEditReferrer = true;
              this.isTidShow = false;
            } else {
              this.isEditReferrer = false
              this.isTidShow = true;
            }
        }
       
      }
    },
    payIsShow(val) {
      this.isPay = val;
    },
    skuFun(val) {
     
      this.isSku = false;
      if (val.type) {
        this.productId = val.id;
         if (this.referrerInfo) {
             this.isEditReferrer = true;
              this.isTidShow = false;
         }else{
           this.isEditReferrer = false
              this.isTidShow = true;
         }
       // this.isPay = true;
      }
    },
    showMsg(msg) {
      // Dlg.msg({
      //   zIndex: 200,
      //   content: msg,
      //   msgType: "inverse"
      // });
      Toast(msg);
    },
    getRecommendInfo (){
      const _params = {
          accountId: 1275065801
      };
      api.getRecommendInfo(_params).then(req => {
     
       let oData = req.data;
       if(oData){
         this.recommendInfo = oData;
       }
      });
    }
     
  },
  mounted: function() {
    let _params = {
      saleGoodsId: this.productId,
       accountid: this.tId
    };
    // if (this.tId) {
    //   _params = {
    //     productId: this.productId,
    //     accountid: this.tId
    //   };
    // }
    
    this.getInfoData(_params);
    this.getRecommendInfo();
    
  
  }
};
</script>
<style>
.swiper-info {
  padding-top: 100%;
}
</style>

<style lang="less" scoped>
.baoyou{
  color:#F1002D;
}
.s-price{
  font-size:22px;
}
.m-price{
  font-size:12px;
  color: #9E9E9E;
}
.edit{
  color:#1a1a1a;
  .edit-info{
    color:#6b6b6b;
  }
}
.pb-60 {
  padding-bottom: 60px;
}
.recruit-detail {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.detail-top {
  padding: 7px 18px 12px 10px;
  background: #fff;
  .detail-title {
    font-size: 15px;
    font-weight: normal;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.detail-referrer {
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  margin-top: 10px;
  background: #fff;
  i {
    width: 30px;
    height: 30px;
    margin: 10px 5px 0 0;
    border-radius: 50%;
    background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat center;
    background-size: cover;
    vertical-align: top;
  }
  span {
    max-width: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
  }
}
.detail-desc {
  padding: 12px 10px;
  background: #fff;
}
.recommend-content {
  margin-left: 76px;
}
.detail-info {
  padding-top: 12px;
  background: #fff;
  margin-bottom:49px;
}
.detail-btn {
  position: fixed;
  z-index: 9;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  background: #1A1A1A;
  line-height: 49px;
  color: #fff;
  font-size: 17px;
  text-align: center;
}
.vertical-center,.vertical-center-outer:after {
    display: inline-block;
    vertical-align: middle
}

.layer-full {
    position: fixed;
    z-index: 98;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5)
}

.app {
    height: 100%
}
</style>

