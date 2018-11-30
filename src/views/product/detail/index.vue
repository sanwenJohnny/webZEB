<style lang="less" scoped>
.page {
  font-size: 12px;
  padding-bottom: 50px;
  background: #f0f0f0;
}
.mt-50 {
  margin-top: 50px;
}
.dis-module {
  margin: 8px 0;
}
.gold {
  color: #c59f51;
}
.red {
  color: #F1002D;
}
/**********************banner*********************/
.banner {
  width: 100%;
}
.sale-count {
  display: flex;
  align-items: center;
  height: 20px;
  background: #000;
  opacity: 0.6;
  border-radius: 10px;
  color: #fff;
  right: 6px;
  bottom: 6px;
  z-index: 9;
  font-size: 0;
  padding-right: 5px;
}
.sale-count i {
  display: inline-block;
  width: 10px;
  height: 8px;
  background: url('~images/product/sale_icon.png') no-repeat;
  background-size: 100%;
  margin-left: 6px;
}
.sale-count span {
  font-size: 10px;
  margin-left: 3px;
}

.sale-rank {
  display: flex;
  align-items: center;
  height: 28px;
  left: 10px;
  bottom: 28px;
  z-index: 9;
  color: #fff;
}
.sale-rank i {
  display: inline-block;
  width: 28px;
  height: 28px;
  background: rgba(215, 194, 131, 0.8) url('~images/product/cup_white.png')
    no-repeat center;
  background-size: 75%;
}
.sale-rank span {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 12px;
  background: #000;
  padding: 0 7px;
  opacity: 0.8;
}
/**********************product-info*********************/
.product-info {
  background-color: #ffffff;
  padding: 0 0 0 0;
  box-sizing: border-box;
}

.coupon-tip {
  width: 355px;
  height: 25px;
  line-height: 25px;
  background-color: #f3f3f3;
  border-radius: 2px;
  color: #4d4d4d;
  font-size: 12px;
  margin: 14px 0;
  margin-left: 10px;
  margin-top: 3px;
}
.coupon-tip i {
  width: 16px;
  height: 10px;
  background: url('~images/product/coupon_icon.png') no-repeat;
  background-size: 100%;
  margin-left: 8px;
  margin-right: 6px;
  vertical-align: middle;
}
.product-name {
  display: flex;
  min-height: 36px;
  font-size: 14px;
  color: #000;
  padding: 0 0 10px 15px;
  margin-top: 10px;
}
.product-name span {
  width: 80%;
  margin-right: 10px;
  height:44px;
  line-height:22px;
  overflow:hidden;
  font-size:16px;
  font-weight:bold;
  color:#1a1a1a;
}
.w-h {
  width: 100%;
}
.pro-fav {
  height: 36px;
  /* border-left: 1px solid #d9d9d9; */
  margin-left: 10px;
  text-align: center;
  position: absolute;
  right: 0;
}
.pro-fav i {
  display: block;
  width: 24px;
  height: 24px;
  background-size: 100%;
  margin: 0 20px;
}
.collected {
  background-image: url('~images/product/heart-black-full.png');
}
.uncollect {
  background-image: url('~images/product/heart-black.png');
}
.pro-fav em {
  font-size: 10px;
  margin-top: 3px;
  color:#1a1a1a;
}
.ggsay {
  box-sizing: border-box;
  margin-left: 10px;
  padding-right: 10px;
  margin-top: 6px;
  padding-bottom: 10px;
}
.ggsay p {
  color: #858585;
}
.msg-tip {
  box-sizing: border-box;
  //height: 36.5px;
  //line-height: 36.5px;
  //border-top: 1px solid #eeeeee;
  color: #000;
  margin: 0 15px;
  padding-bottom:10px;
}
/**********************activity*********************/
.activity {
  width: 100%;
  margin: 0;
  padding: 0px 0 16px 0;
  background: #fff;
  text-align: center;
}
.activity img {
  width: 92%;
  height: 80px;
  border-radius: 4px;
}
/**********************promotion,desc,coupon,sku*********************/
.zone-act {
  display: flex;
  align-items: center;
  background: #ffffff;
  font-size: 14px;
  color: #000;
  padding: 13px 0px;
  box-sizing: border-box;
  position: relative;
}
.left-tip {
  color: #666;
  align-self: flex-start;
}
.content {
  width: 286px;
  margin-left: 15px;
  span {
    display: block;
  }
}
.rank {
  .content {
    width: 230px;
  }
}
.content.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content em {
  font-size: 12px;
  //color: #858585;
}
.zone-act .icon {
  display: inline-block;
  position: absolute;
  right: 10px;
}
.arrow {
  width: 8px;
  height: 13px;
  background: url('~images/product/right.png') no-repeat;
  background-size: 100%;
}
.open {
  width: 21px;
  height: 12px;
  background: url('~images/product/open.png') no-repeat center;
  background-size: 100%;
}
.promotion {
  background: #ffffff;
}
.promotion li {
  border-bottom: 1px solid #f3f3f3;
  padding-left: 0;
  margin: 0 15px;
}
.promotion li:last-child {
  border-bottom: 0;
}
/**********************articles*********************/
.articles {
  background: #ffffff;
  font-size: 15px;
  color: #000;
}
.articles ul li {
  display: flex;
  align-items: center;
  height: 72px;
  margin-left: 10px;
  border-bottom: 1px solid #eeeeee;
}
.articles ul li:last-child {
  border-bottom: 0;
}
.articles ul li img {
  width: 65px;
  height: 52px;
}
.articles ul li i {
  display: inline-block;
  position: absolute;
  right: 10px;
}
.articles-middle {
  width: 260px;
  margin-left: 10px;
}

.pro-promise {
  width: 100%;
  height: 136px;
}

.fix-bottom {
  width: 100%;
  height: 56px;
  max-width: 750px;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background:#fff;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.dialogs {
}
.dialogs-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(1, 1, 1, 0.2);
  z-index: 999;
}

.dhtx-cont {
  width: 300px;
  background: #fff;
  color: #000;
  border-radius: 6px;
  text-align: center;
  position: fixed;
  top: 30%;
  margin-left: 37.5px;
  z-index: 999;
}
.dhtx-cont h2 {
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
}
.dhtx-tip {
  font-size: 14px;
  color: #858585;
}
.dhtx-set {
  margin-top: 10px;
  position: relative;
  border: 1px solid #ddd;
  margin-left: 20px;
  margin: 20px;
  text-align: left;
}
.dhtx-set input {
  width: 90%;
  //height: 36px;
  //line-height: 36px;
  padding: 10px 5px;
  border: 0;
  background:none;
  font-size:14px;
}
.dhtx-set i {
  display: inline-block;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  background: url(~images/clear.png) no-repeat center;
  background-size: 15px auto;
}
.dhtx-btns {
  font-size: 0;
  border-top: 1px solid #e0e0e0;
  margin-top: 30px;
}
.dhtx-btns p {
  display: inline-block;
  width: 49%;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
}
.dhtx-btns .cancel {
  border-right: 1px solid #ddd;
  color: #858585;
}

.dialog-collect {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  text-align: center;
}
.dialog-collect:after {
  display: inline-block;
  content: '';
  height: 100%;
  vertical-align: middle;
}
.dialog-collect .tip-cont {
  display: inline-block;
  width: 75%;
  background: #fff;
  overflow: hidden;
  padding-top: 30px;
  border-radius: 5px;
  vertical-align: middle;
}
.dialog-collect .tip-cont .title {
  color: #000;
  font-size: 20px;
}
.dialog-collect .tip-cont .title p {
  color: #858585;
  font-size: 14px;
  margin-top: 10px;
}
.dialog-collect .tip-cont li.center {
  margin-top: 20px;
  padding: 0 20px;
}
.dialog-collect .tip-cont li.center img {
  width: 50%;
}
.dialog-collect .tip-cont .btns {
  margin-top: 20px;
  padding: 0 20px;
  font-size: 0;
  border-top: 1px solid #e0e0e0;
}
.dialog-collect .tip-cont .btns i {
  border-right: 1px solid #e0e0e0;
  color: #858585 !important;
}
.dialog-collect .tip-cont .btns .btn {
  display: inline-block;
  font-style: normal;
  width: 50%;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  font-size: 14px;
  vertical-align: middle;
}
.dialog-collect .tip-cont .btns .btn {
  color: #000;
}
.flex {
  display: flex;
}
.open-vip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
  padding: 0 8px;
  height: 34px;
  background-image: linear-gradient(-90deg, #e4d2af 0%, #d5bd95 95%);
  color: #1a1a1a;
  font-size: 12px;
  border-radius: 4px;
  img {
    width: 19px;
    height: 19px;
    margin-right: 7px;
  }
  span {
    display: flex;
    align-items: center;
  }
  span:last-child {
    font-weight: bold;
  }
  b {
    width: 5px;
    height: 5px;
    border-top: 1px solid #1a1a1a;
    border-right: 1px solid #1a1a1a;
    transform: rotate(45deg);
  }
}
// .ellipsis{
//   text-overflow: ellipsis;
//   overflow: hidden;
//   white-space: nowrap;
//   width: 90%;
// }
.two-ellipsis{
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

<template>
  <div class="page" v-if="showPage">
    <Top :re-info="{reImage:productDetail.reImage,reNickName:productDetail.reNickName}"></Top>
    <div class="banner rela" v-if="productDetail.imageList&&productDetail.imageList.length>0" :class="{'mt-50': productDetail.reNickName}">
      <Banner :list="productDetail.imageList">
      </Banner>
      <!-- <div class="sale-count abs" v-if="productDetail.sellCountInfo">
        <i></i>
        <span>{{productDetail.sellCountInfo}}</span>
      </div> -->
    </div>
    <div class="product-info rela">
      <Promotion :product="promotionPro" :promotion="productDetail.promotion" @refresh="getDetailOnly"></Promotion>
      <p class="coupon-tip" v-if="productDetail.couponTips&&productDetail.couponTips.length>0">
        <i class="inlbk"></i>
        {{productDetail.couponTips[0].content}}
      </p>
      <p class="open-vip" v-if="productDetail.isMb==0 && productDetail.memberTip" @click="window.location.href=productDetail.memberTip.clickUrl">
        <span><img :src="productDetail.memberTip.imgUrl" alt="">{{productDetail.memberTip.tipMsg}}</span>
        <span>立即省钱<b></b></span>
      </p>
      <!-- <p class="open-vip">
        <span><img src="" alt="">qqqqqq</span>
        <span>立即省钱<b></b></span>
      </p> -->
      <div class="product-name">
        <span :class="productDetail.productStatus=='4'?'w-h':''">
          {{productDetail.name}}
        </span>
        <div class="pro-fav" @click="collectToggle(productDetail.saleGoodsId)" v-if="productDetail.productStatus!='4'">
          <i :class="productDetail.isCollect=='1'?'collected':'uncollect'"></i>
          <em>{{productDetail.isCollect=='1'?'已收藏':'收藏'}}</em>
        </div>
      </div>
      <!-- <div class="ggsay">
        <p>
          {{productDetail.gegeSay}}
        </p>
      </div> -->

      <p class="msg-tip" v-if="productDetail.notes&&productDetail.notes.length>0">{{productDetail.notes[0].tip}}</p>
    </div>
    <!-- 活动 -->
    <div class="activity dis-module" v-if="productDetail.activityBanner&&productDetail.activityBanner.image">
      <img :src="productDetail.activityBanner.image" @click="window.location.href=productDetail.activityBanner.url">
    </div>
    <!-- 促销 榜单-->
    <!-- <div class="sales dis-module" v-if="productDetail.activitiesTips&&productDetail.activitiesTips.length>0">
      <div class="zone-act" v-for="(tip,index) in productDetail.activitiesTips" :key="index" @click="window.location.href=tip.url">
        <span class="left-tip">促销</span>
        <span class="content red" :style="{color:tip.descColor}">{{tip.desc}}</span>
        <i class="icon arrow"></i>
      </div>
    </div> -->
    <!-- 促销 榜单 说明，sku，配送，领券 -->
    <div class="promotion dis-module">
      <ul>
        <template v-if="productDetail.activitiesTips&&productDetail.activitiesTips.length>0">
          <li class="zone-act" v-for="(tip,index) in productDetail.activitiesTips" :key="index" @click="window.location.href=tip.url">
            <span class="left-tip">促销</span>
            <span class="content red ellipsis" :style="{color:tip.descColor}">{{tip.desc}}</span>
            <i class="icon arrow"></i>
          </li>
        </template>
        <li class="zone-act rank" v-if="productDetail.salesRanking" @click="window.location.href=productDetail.salesRanking.webUrl">
          <span class="left-tip">榜单</span>
          <span class="content">{{productDetail.salesRanking.title}}</span>
          <span>查看榜单</span>
          <i class="icon arrow"></i>
        </li>
        <template v-if="skuInfo">
          <li class="zone-act" @click="showSkuSelector=true" v-if="productDetail.memberProductType != 3">
            <span class="left-tip">已选</span>
            <span class="content">{{selectedPropStr}}</span>
            <i class="icon open"></i>
          </li>
          <li class="zone-act" v-else>
            <span class="left-tip">已选</span>
            <span class="content">{{selectedPropStr}}</span>
            <i class="icon open"></i>
          </li>
        </template>

        <li class="zone-act" @click="showDialog(1)" v-if="productDetail.couponInfo&&productDetail.couponInfo.desc">
          <span class="left-tip">领券</span>
          <span class="content red">{{productDetail.couponInfo.desc}}</span>
          <i class="icon open"></i>
        </li>
        <li class="zone-act" @click="showDialog(2)">
          <span class="left-tip">配送</span>
          <template v-if="toAddrs.province">
            <span class="content ellipsis" v-if="toAddrs.provinceName == toAddrs.cityName">{{productDetail.sendAddress}} 至 {{toAddrs.cityName}}{{toAddrs.districtName}} <br><em>{{deliveryInfo}}</em></span>
            <span class="content ellipsis" v-else>{{productDetail.sendAddress}} 至 {{toAddrs.provinceName}}{{toAddrs.cityName}}{{toAddrs.districtName}} <br><em>{{deliveryInfo}}</em></span>
          </template>
          <span class="content" v-else>请选择配送地区</span>
          <i class="icon open"></i>
        </li>
        <!-- <li class="zone-act" @click="showDialog(3)">
          <span class="left-tip">说明</span>
          <span class="content">{{productDetail.descriptionInfo&&productDetail.descriptionInfo.desc}}</span>
          <i class="icon open"></i>
        </li>
        <li class="zone-act" @click="window.location.href=productDetail.serviceInfo.webUrl" v-if="productDetail.serviceInfo">
          <span class="left-tip">服务</span>
          <span class="content">{{productDetail.serviceInfo.desc}}</span>
          <i class="icon arrow"></i>
        </li> -->

        <li class="zone-act" v-if="productDetail.serviceInfo" @click="goService(productDetail.saleGoodsId)">
          <div class="flex"><span class="left-tip">服务</span>
            <span class="content two-ellipsis">
              <!-- <span  v-if="productDetail.descriptionInfo" class="ellipsis">{{productDetail.descriptionInfo.desc}}</span> -->
              <span  v-if="productDetail.serviceInfo" class="two-ellipsis">{{productDetail.serviceInfo.desc}}</span>
            </span>
          </div>
          <i class="icon arrow"></i>
        </li>
      </ul>
    </div>
    <!-- 关联文章 -->
    <div class="articles dis-module" v-if="productDetail.articleList">
      <ul>
        <li v-for="(article,index) in productDetail.articleList" :key="index" @click="window.location.href=article.webUrl">
          <img :src="article.articleImage">
          <span class="articles-middle">{{article.articleTitle}}</span>
          <i class="arrow"></i>
        </li>
      </ul>
    </div>
    <!-- 捕手说 -->
    <div class="dis-module">
      <Bssay :bs-data="bsData" :sale-goods-id="saleGoodsId"></Bssay>
    </div>
    <!-- 品牌 -->
    <div class="dis-module">
      <BrandShow :brand-show-data="brandData"></BrandShow>
    </div>
    <!-- 热卖推荐，店主精选 -->
    <div class="dis-module">
      <HotPros :hot-recommends="productDetail.recommendProducts" :fav-list="productDetail.cpsFavoriteList"></HotPros>
    </div>
    <!-- 商品信息 -->
    <div class="dis-module">
      <ProDesc :summary-list="productDetail.summaryList"></ProDesc>
    </div>
    <!-- 品牌承诺 -->
    <!-- <div class="dis-module" v-if="productDetail.promiseImage" @click="window.location.href = productDetail.promiseUrl">
      <img :src="productDetail.promiseImage" class="pro-promise">
    </div> -->
    <!-- 商品详情 -->
    <div class="dis-module">
      <ProDetail :detail-list="productDetail.productDetailList" :detail-video="productDetail.detailVideo"></ProDetail>
    </div>

    <!-- 底部 -->
    <div class="fix-bottom">
      <Bottom :product="product" :callback="bottomSubmit" :count="cartCount" :go-kefu="kefu" :promotion="productDetail.promotion"></Bottom>
    </div>

    <div class="dialogs">
      <div class="dialogs-cover" v-if="showDialogs" @click="closeDialog"></div>
      <!-- 优惠券弹窗 -->
      <CouponDialog v-bind:ops="couponOps" :coupons="couponList"></CouponDialog>
      <!-- 配送地址弹窗 -->
      <AddrDialog v-bind:ops="addrOps" :addrs="addrList" :area-info="areaInfo"></AddrDialog>
      <!-- 说明弹窗 -->
      <DescDialog v-bind:ops="descOps" :description-list="productDetail.descriptionInfo&&productDetail.descriptionInfo.list"></DescDialog>
      <!-- sku选择器 -->
      <SkuSelector :sku-info="skuInfo" :sku-map="skuMap" :show-sku="showSkuSelector" :cb="skuCbs" ref="skuSelector" :collect-type="productDetail.isCollect" :is-limit="isLimitBuy" :type="btnType"></SkuSelector>
    </div>
    <!-- 到货提醒热卖弹窗 -->
    <PopHots :ops="popup" :hot-recommends="productDetail.recommendProducts"></PopHots>

    <div class="dialog-dhtx" v-if="dhtxShow">
      <div class="dialogs-cover" @click="dhtxClose"></div>
      <div class="dhtx-cont">
        <h2>设置到货提醒</h2>
        <span class="dhtx-tip">若该商品到货，我们会第一时间通知您~</span>
        <div class="dhtx-set">
          <input type="tel" placeholder="请输入手机号" v-model.trim="dhtxPhone">
          <i @click="clearInput"></i>
        </div>
        <div class="dhtx-btns">
          <p class="cancel" @click="dhtxClose">取消</p>
          <p @click="setSubscription">确定</p>
        </div>
      </div>
    </div>

    <div class="dialog-collect" v-show="showCollectDialog">
      <ul class="tip-cont">
        <li class="title">
          <b>收藏成功</b>
          <p>下载APP订阅开售提醒</p>
        </li>
        <li class="center">
          <img src="https://yangege.b0.upaiyun.com/product/d6c62c0b288.png">
        </li>
        <li class="btns">
          <i class="btn" @click="showCollectDialog=false">继续浏览</i>
          <a class="btn" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.globalscanner">立即下载</a>
        </li>
      </ul>
    </div>
  </div>
  <Loading v-else></Loading>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Banner from './banner'
import Bssay from './bssay'
import BrandShow from './brandShow'
import HotPros from './hotPros'
import ProDesc from './proDesc'
import ProDetail from './proDetail'
import Bottom from './bottom'
import CouponDialog from './couponDialog'
import DescDialog from './dlgdesc'
import AddrDialog from './addrDialog'
import Promotion from './promotion'
import SkuSelector from './skuSelector'
import PopHots from './popHots'
import Top from './top'
import auth from '@/utils/auth'
import ease from '@/utils/ease'
import Tools from '@/utils/tools'
import Loading from '@/components/loading'
import scrollControllMixin from '@/mixin/scrollControll'
import api from '@/api/product'
//import '@/assets/css/styles.css'
//import '@/assets/css/LArea.css'
import '@/assets/css/animate.css'
import { Toast } from 'mint-ui'
import session from '@/utils/session-lite'
import apiShare from '@/api/share'

export default {
  name: 'detail',
  data() {
    return {
      window: window,
      saleGoodsId: this.$route.query.saleGoodsId,
      showSkuSelector: false,
      skuCbs: {
        closeSku: this.closeSku,
        submitHandler: this.submitHandler
      },
      area: undefined,
      couponOps: {
        showCoupon: false,
        close: this.closeDialog,
        receive: this.receiveCoupon
      },
      addrOps: {
        showAddr: false,
        close: this.closeDialog,
        getAddr: this.getSelectedAddr
      },
      descOps: {
        showDesc: false,
        close: this.closeDialog
      },
      popup: {
        show: false,
        up: true,
        toggle: this.togglePop
      },
      dhtxPhone: '',
      dhtxShow: false,
      dhtxStatus: 0,
      buyCount: 1,
      toAddrs: {},
      btnType: 1,
      showPage: false,
      showCollectDialog: false,
      ga: undefined,
      imInfo: '',
      accountId: this.$route.query.accountid,
      productCount:0
    };
  },
  mixins: [scrollControllMixin],
  computed: {
    ...mapState('product', [
      'areaInfo',
      'productDetail',
      'cartCount',
      'addrLocation',
      'addrList',
      'deliveryInfo',
      'couponList'
    ]),
    ...mapGetters('product', [
      'skuInfo',
      'skuMap',
      'bsData',
      'brandData',
      'selectedPropStr',
      'promotionPro'
    ]),
    product() {
      // 传入bottom组件所需商品信息
      const _promotion = this.productDetail.promotion;
      let p = {};
      p.isSkuInfo = !!this.skuInfo;
      p.status = this.productDetail.productStatus;
      p.saleUnitId = this.productDetail.saleUnitId;
      p.saleGoodsId = this.productDetail.saleGoodsId;
      p.isMb = this.productDetail.isMb;
      p.isNewMember = this.productDetail.isNewMember;
      p.memberProductType = this.productDetail.memberProductType;
      if (p.status == '3' && this.productDetail.isCollect == '1') {
        p.selectType = 3;
        p.collectCancel = true;
      }
      if (p.status == '3' && this.productDetail.isCollect == '0') {
        p.selectType = 3;
        p.collectNow = true;
      }
      if (p.isSkuInfo && p.status != '1' && p.status != 4) {
        p.selectType = 999;
        p.seeMoreProps = true;
      }
      // if (
      //   p.isSkuInfo &&
      //   p.status == '1' &&
      //   !(_promotion.type == '2' && _promotion.activityStatus == '2')
      // ) {
      //   p.selectType = 998;
      //   p.selectProps = true;
      // }
      if ( p.isSkuInfo && p.status == '1' ) {
        p.selectType = 998;
        p.selectProps = true;
      }
      if (
        _promotion.type == '2' &&
        _promotion.activityStatus == '2' &&
        p.status == '1' && !p.isSkuInfo
      ) {
        p.selectType = 997;
        p.buyNow = true;
      }
      if ((!p.isSkuInfo && p.status == '1') || p.buyNow) {
        p.selectType = 1;
        p.addCart = true;
      }
      if (!p.isSkuInfo && p.status == '2') {
        p.selectType = 2;
        p.hasChance = true;
      }
      // if (!p.isSkuInfo && p.status == '3' && this.productDetail.isCollect == '1') {
      //   p.selectType = 3
      //   p.collectCancel = true
      // }
      // if (!p.isSkuInfo && p.status == '3' && this.productDetail.isCollect == '0') {
      //   p.selectType = 3
      //   p.collectNow = true
      // }
      if (p.status == '4') {
        p.selectType = 4;
        p.subscriptionTip = true;
      }
      if (p.addCart && p.buyNow) {
        p.selectType = 996;
      }
      return p;
    },
    isLimitBuy() {
      return (
        (this.productDetail.promotion &&
          this.productDetail.promotion.type == 2 &&
          this.productDetail.promotion.activityStatus == 2) ||
        false
      );
    },
    showDialogs() {
      return (
        this.showSkuSelector ||
        this.couponOps.showCoupon ||
        this.addrOps.showAddr ||
        this.descOps.showDesc
      );
    }
  },
  watch: {
    $route(to, from) {
      this.showPage = false;
      this.$router.go(0);
    },
    showSkuSelector(newV, oldV) {
      if (newV) {
        this.scrollForbidden();
      } else {
        this.scrollLift();
      }
    }
  },
  route: {
    canActivate() {}
  },
  created() {
    this.getProDetail()
    this.getShareNotice()
    if (auth.isLoggedIn()) this.getProCoupon()
  },
  mounted() {
    ease.config();
  },
  methods: {
    ...mapActions('product', [
      'getDetailAction',
      // 'editCartAction',
      'showCartCountAction',
      'collectAction',
      'unCollectAction',
      // 'subscriptionAction',
      // 'getsubsAction',
      'getLocationAction',
      'getAddrListAction',
      'getDeliveryInfoAction',
      'getCouponAction'
      // 'drawCouponAction'
    ]),
    goService(id) {
      this.$router.push({ path: `/pay/index?saleGoodsId=${id}` });
    },
    getShareNotice(){
      if (!this.accountId) return false
      let data = {
        accountid : this.accountId
      }
      apiShare.getShareNotice(data)
    },
    getDelivery() {
      let opts = {
        saleGoodsId: this.product.saleGoodsId,
        province: this.toAddrs.province,
        city: this.toAddrs.city,
        district: this.toAddrs.district
      };
      this.getDeliveryInfoAction(opts);
    },
    receiveCoupon(couponId) {
      let opts = {
        saleGoodsId: Number(this.saleGoodsId),
        couponId: Number(couponId),
        sourceType: 1
      };
      api.receiveCoupon(opts).then(data => {
        if (data.status == '1') {
          this.getProCoupon();
        }
      });
    },
    getProCoupon() {
      let opts = {
        saleGoodsId: this.saleGoodsId
      };
      this.getCouponAction(opts);
    },
    getDetailOnly(id) {
      console.log('id', id);
      let opts = {
        saleGoodsId: this.saleGoodsId,
        saleUnitId: id
      };
      this.getDetailAction(opts).then(data => {
        this.showPage = true;
      });
    },
    getProDetail(id) {
      let opts = {
        saleGoodsId: this.saleGoodsId,
        saleUnitId: id
      };
      this.getDetailAction(opts).then(data => {
        this.showPage = true;
        if (data.productStatus == '4') this.popup.show = true;
        if (auth.isLoggedIn()) {
          this.getCart(data.saleUnitId);
          this.getProCount(data.saleUnitId);
          Promise.all([
            this.getAddrListAction(),
            this.getLocationAction()
          ]).then(resList => {
            // console.log(resList, 111)
            const aList = resList[0].addressList;
            const aLocal = resList[1];
            if (aList && aList.length > 0) {
              for (let i = 0; i < aList.length; i++) {
                if (aList[i].isDefault == '1') {
                  this.toAddrs = aList[i];
                  break;
                }
              }
            } else if (aLocal) {
              this.toAddrs = aLocal;
            }
            this.getDelivery();
          });
        } else {
          this.getLocationAction().then(data => {
            this.toAddrs = data;
            // console.log(this.toAddrs)
            this.getDelivery();
          });
        }
        this.imInfo = data.imServiceInfo;
        ease.config(data.imServiceInfo.tenantId, data.imServiceInfo.imNum);
        // this.ga = new Ganalytics({
        //   targetType: '160',
        //   gpm: '160',
        //   targetId: this.productDetail.saleUnitId,
        //   productIdChain: this.productDetail.productId,
        //   tag: this.productDetail.productStatus
        // })
      });
    },
    kefu(e) {
      ease.bindEase(e, this.imInfo.tenantId);
    },
    getSelectedAddr(addr) {
      this.toAddrs = addr;
      this.getDelivery();
    },
    clearInput() {
      this.dhtxPhone = '';
    },
    dhtxClose() {
      this.dhtxShow = false;
    },
    // dhtxAdd () {
    //   let opts = {
    //     subscriptionId: this.product.saleUnitId,
    //     mobileNumber: this.dhtxPhone
    //   }
    //   api.addSubscription(opts)
    // },
    togglePop() {
      this.popup.up = !this.popup.up;
    },
    closeSku(id) {
      this.showSkuSelector = false;
      if (id != this.productDetail.saleUnitId) this.getDetailOnly(id);
    },
    addCart(id, count) {
      let opts = {
        productId: id,
        count: count + this.productCount
      };
      api.editCart(opts).then(res => {
        if (res.status == 1) {
          if(res.data.errorTip){
            this.showDlg(res.data.errorTip)
            return false
          }
          this.showDlg('加入购物车成功');
          let productIds = session.get('productIds');
          if (productIds) {
            //使加购商品在购物车默认选中
            if (productIds.indexOf(id) <= -1) {
              productIds.push(id+'');
            }
            session.set('productIds', productIds);
          } else {
            session.set('productIds', [id+'']);
          }
          this.getCart(id);
          this.getProCount(id);
        } else {
          this.showDlg(res.errorMessage);
        }
      });
    },
    getCart(id) {
      let opts = {
        productId: id
      };
      this.showCartCountAction(opts);
    },
    getProCount(id) {
      let opts = {
        productId: id
      };
      api.showproductCount(opts).then(res=>{
        this.productCount = res.data.count
      })
    },
    collectToggle(id) {
      let opts = {
        // type: 1,
        saleGoodsId: this.saleGoodsId
      };
      if (this.productDetail.isCollect == '0') {
        this.collectAction(opts).then(data => {
          if (data.status == '1') {
            let num = Tools.getCookie('collectNum') || 0;
            Tools.setCookie('collectNum', ++num, 1);
            if (
              this.productDetail.productStatus == '3' &&
              (num == 1 || num == 5)
            ) {
              console.log('cookie');
              this.showCollectDialog = true;
            } else {
              this.showDlg('收藏成功');
            }
          }
        });
      } else {
        this.unCollectAction(opts).then(data => {
          if (data.status == '1') this.showDlg('取消收藏');
        });
      }
    },
    setSubscription() {
      let opts = {
        mobileNumber: this.dhtxPhone,
        subscriptionId: this.product.saleGoodsId
      };
      api.addSubscription(opts).then(data => {
        this.dhtxShow = false;
        if (data.status == 1) this.showDlg('到货提醒设置成功~');
      });
    },
    getSubscription() {
      let opts = {
        type: 1,
        subscriptionId: this.product.saleGoodsId
      };
      api.getSubscription(opts).then(data => {
        if (data.status == 1) {
          this.dhtxPhone = data.data.subscript || '';
        }
      });
    },
    bottomSubmit(type, id) {
      if (this.skuInfo && type != 3 && type !=4) {
        this.showSkuSelector = true;
        this.btnType = type == 5 ? 2 : 1;
      } else {
        // alert(this.product.saleUnitId)
        this.submitHandler(type, this.product.saleUnitId, 1);
      }
    },
    submitHandler(status, id, count) {
      // alert(id)
      this.product.saleUnitId = id;
      this.showSkuSelector = false;
      console.log(status);
      switch (Number(status)) {
        case 1:
          // 添加购物车
          this.addCart(id, count);
          break;
        case 2:
          // 还有机会
          this.showDlg(
            '此商品有人拍下未付款，还有机会购买，试着刷新页面看看吧～'
          );
          break;
        case 3:
          // 抢先收藏
          this.collectToggle();
          break;
        case 4:
          // 收货提醒
          this.getSubscription();
          this.dhtxShow = true;
          break;
        case 5:
          // 立即购买
          if (auth.isLoggedIn()) {
            let productIds = session.get('productToBuy')
            session.set('productToBuy',{count:count,saleUnitId:id})
            // 重新选择商品进入订单确认页面时要重置缓存
            session.set('couponAccountId', -1)
            session.set('addressId', '')
            session.set('idCardVerifyId', '')
            session.set('isUseCoin', -1)
            session.set('activitiesIsOpen', -1)
            window.location.href = `/order/submit?type=3`
          } else {
            auth.login(window.location.href);
          }
          break;
        default:
          break;
      }
    },
    showDialog(type) {
      switch (type) {
        case 1:
          if (auth.isLoggedIn()) {
            this.couponOps.showCoupon = true;
          } else {
            auth.login();
          }
          break;
        case 2:
          this.addrOps.showAddr = true;
          break;
        case 3:
          this.descOps.showDesc = true;
          break;
      }
    },
    showDlg(content) {
      Toast({
        message: content,
        position: 'center',
        duration: 3000
      });
    },
    closeDialog() {
      if (this.showSkuSelector) {
        this.closeSku(this.$refs.skuSelector.product.saleUnitId);
      }
      this.couponOps.showCoupon = false;
      this.addrOps.showAddr = false;
      this.descOps.showDesc = false;
      this.showSkuSelector = false;
    },
    stop(e) {
      e.preventDefault();
    }
  },
  components: {
    Bssay,
    BrandShow,
    HotPros,
    ProDesc,
    ProDetail,
    Banner,
    Bottom,
    CouponDialog,
    DescDialog,
    AddrDialog,
    SkuSelector,
    PopHots,
    Promotion,
    Top,
    Loading
  }
};
</script>
