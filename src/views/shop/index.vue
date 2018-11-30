<style lang='less' scoped>
.mb-8 {
  margin-bottom: 8px;
}
.page {
  background: url(~images/shop/shop-bg.png) no-repeat center top;
  background-size: 100%;
}
.home-box{
  padding-bottom:50px;
}
.vip-icon {
  width: 22px;
  height: 13px;
  margin-top: 5px;
}

.pb-8 {
  padding-bottom: 8px;
}

.pt-76 {
  padding-top: 76px;
}

.home-top-box {
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  //background: #000;
  overflow:hidden;
}

.shop-banner {
  width: 100%;
  //margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 8px;
}

.home-top {
  height: 44px;
  background: #010101;
  color: #fff;
  text-align: center;
}

.home-top li {
  height: 100%;
}

.top-store-mesg {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 15px 0 15px;
  color: #fff;
  font-size: 14px;
}
.top-store-mesg span {
  margin-left: 10px;
}
.top-store-mesg .download-btn {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -50%);
  width: 64px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 4px;
}

.top-store-mesg img {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.city-btn {
  width: 70px;
  line-height: 44px;
}

.city-btn i {
  max-width: 50px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
}

.city-btn:after {
  content: "";
  display: inline-block;
  border: 5px solid transparent;
  border-top-color: #fff;
  margin: 5px 0 0 5px;
  vertical-align: middle;
}

.logo {
  margin: 0 40px;
}

.logo img {
  height: 100%;
}

.search-btn {
  float: right;
  width: 40px;
  background: url(~images/search_white.png) no-repeat center;
  background-size: 18px auto;
}

.home-search {
  display: flex;
  align-items: center;
  width: 92%;
  margin: 0 auto;
  margin-top:10px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
.home-search::before {
  content: "";
  display: inline-block;
  width: 32px;
  height: 32px;
  margin: -1px 3px 0 10px;
  background: url("~images/shop/search.png") no-repeat center;
  background-size: contain;
  vertical-align: middle;
}

.top-sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 44px;
  z-index: 9;
}

.top-store {
  position: relative;
  width: 100%;
  padding-top: 26.66%;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat
    center;
  background-size: cover;
}
.top-store::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -90deg,
    rgba(0, 0, 0, 0.1) 6%,
    rgba(0, 0, 0, 0.5) 98%
  );
}
.top-store .store-info {
  position: absolute;
  z-index: 5;
  bottom: 8px;
  left: 12px;
  width: 100%;
  width: auto;
}
.top-store .store-info em {
  width: 40px;
  height: 40px;
  background: no-repeat center;
  background-size: cover;
  vertical-align: middle;
}

.top-change {
  position: static;
  transform: none;
}

.icon-nav {
  //display: box;
  display: flex;
  background: no-repeat center #fff;
  background-size: cover;
}
.icon-nav span {
  position: relative;
  flex: 1;
  height: 80px;
  box-sizing: border-box;
}
.icon-nav i {
  display: block;
  height: 100%;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat
    center;
  background-size: contain;
}
.icon-nav em {
  position: absolute;
  z-index: 5;
  left: 0;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.bao-title {
  padding: 16px 0;
}
.bao-title i + i {
  margin-left: 10px;
}
.bao-title i + i::before {
  content: "";
  display: inline-block;
  width: 1px;
  height: 14px;
  background: #aaa;
  margin-right: 10px;
  vertical-align: middle;
}

.new-sale-hot {
  padding: 0 15px;
}

.bao-swiper li {
  width: 120px;
}

.bao-tu {
  position: relative;
  display: block;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat
    center #f7f7f7;
  background-size: cover;
  border-radius: 4px;
}

.bao-tu:before {
  content: "";
  display: block;
  padding-top: 100%;
}

.bao-text,
.like-desc {
  height: 33px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.notice-product {
  margin-left: 40px;
}
.notice-product .bao-tu:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 0;
  left: -20px;
  width: 1px;
  height: 100%;
  background: #e0e0e0;
}

.notice-line {
  position: absolute;
  z-index: 5;
  top: 50%;
  left: -5px;
  width: 14px;
  margin-left: -20px;
  transform: translate(0, -50%);
  background: #fff;
}
.zong-box{
  padding: 0 15px;
}
.zong-banner {
  position: relative;
  display: block;
  margin: 0 0 10px;
  background: no-repeat center;
  background-size: cover;
  border-radius: 4px;
}
.zong-banner::before {
  content: "";
  display: block;
  padding-top: 40%;
}
.zong-banner::after {
  content: "";
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-bottom-color: #fff;
}
.zong-banner.del-arrow::after {
  display: none;
}

.zong-swiper li {
  width: 100px;
  background: #fff;
  text-align: center;
}

.col-f00 {
  color: #f1002d;
}

.f-16 {
  font-size: 16px;
}

.more-tu {
  background: url(~images/shop/seeall.png) no-repeat;
  background-size: cover;
}

.more-tu i {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  transform: translate(0, -50%);
}

.custom-box img {
  vertical-align: top;
}

.hot-box {
  padding: 0 10px 10px;
}

.hot-title {
  display: flex;
  align-items: center;
  padding: 20px 0;
  font-size: 18px;
  font-weight:bold;
}
.hot-title img {
  width: 3px;
  height: 25px;
  margin-right: 10px;
}

.may-like {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  font-size: 18px;
  font-weight:bold;
}
.may-like img {
  width: 6px;
}
.may-like span {
  margin: 0 8px;
}

.hot-list li {
  position: relative;
  padding-top: 47%;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat
    center;
  background-size: cover;
}

.hot-list li + li {
  margin-top: 10px;
}

.hot-info {
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 15px;
  transform: translate(0, -45%);
}

.hot-info p:first-child {
  margin-bottom: -1px;
}

.like-list {
  position: relative;
}

.like-list li {
  /*width: 46.5%;*/
  margin: 0 0 10px 10px;
  box-sizing: border-box;
  background: #fafafa;
}

.like-border {
  border: 1px solid #eee;
}

.like-tu {
  position: relative;
  display: block;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat
    center;
  background-size: cover;
}

.like-border .like-tu:before {
  content: "";
  display: block;
  padding-top: 100%;
}

// .like-tu:after,
// .zong-dtu:after {
//   content: "";
//   position: absolute;
//   z-index: 2;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.03);
// }

.like-list-info {
  padding: 10px;
}

.like-desc {
  height: 33px;
  line-height: 1.25;
}

.like-list-tag i {
  height: 16px;
  line-height: 15px;
  padding: 0 2px;
  margin: 3px 3px 0 0;
  border: 1px solid #f93939;
  box-sizing: border-box;
  color: #f93939;
  font-size: 10px;
  vertical-align: top;
}

.like-list-tag .tag-red {
  background: #f93939;
  color: #fff;
}

.list-loading,
.list-end,
.list-error {
  padding: 20px 0;
}

.member-price:after {
  content: "";
  display: inline-block;
  width: 25px;
  height: 12px;
  margin-left: 3px;
  background: url(~images/vip-redicon.png) no-repeat;
  background-size: contain;
  vertical-align: middle;
}

@media screen and (max-width: 320px) {
  .hot-list li {
    padding-top: 48.6%;
  }

  .hot-info {
    font-size: 12px;
  }

  .hot-info p:first-child {
    font-size: 16px;
  }
}
@media screen and (min-width: 750px) {
  .home-top-box,
  .home-footer-bar {
    left: 50%;
    transform: translate(-50%, 0);
  }

  .top-change {
    transform: none;
  }
}
/*加载动画*/
.load {
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 40%;
}

.load1 {
  text-align: center;
}

.dotting {
  display: inline-block;
  width: 10px;
  min-height: 2px;
  padding-right: 2px;
  border-left: 2px solid currentColor;
  border-right: 2px solid currentColor;
  background-color: currentColor;
  background-clip: content-box;
  box-sizing: border-box;
  -webkit-animation: dot 2s infinite step-start both;
  animation: dot 2s infinite step-start both;
}

.dotting::before {
  content: "";
}

@-webkit-keyframes dot {
  25% {
    border-color: transparent;
    background-color: transparent;
  }
  50% {
    border-right-color: transparent;
    background-color: transparent;
  }
  75% {
    border-right-color: transparent;
  }
}
@keyframes dot {
  25% {
    border-color: transparent;
    background-color: transparent;
  }
  50% {
    border-right-color: transparent;
    background-color: transparent;
  }
  75% {
    border-right-color: transparent;
  }
}
/*活动*/
.activity-tan {
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  margin-top: -22.5px;
}

.activity-tan img {
  box-sizing: border-box;
}

.close-tb {
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: -40px;
  width: 25px;
  margin-left: -12.5px;
  text-align: center;
}

.close-tb:after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background: url(~images/shop/close-white.png) no-repeat;
  background-size: contain;
}

.layer-full {
  position: fixed;
  z-index: 98;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.back-top {
  position: fixed;
  z-index: 100;
  right: 15px;
  bottom: 95px;
  width: 100%;
  width: 36px;
  height: 36px;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
}

.seckill-box {
  overflow: hidden;
}

.pt-46 {
  padding-top: 46px;
}
.mb-12{
  margin-bottom:12px;
}
.mt-10{
  margin-bottom:10px;
}
.bg-fff{
  background:#fff;
}
.br-radius{
  border-radius: 4px;
}
.mb-5{
  margin-bottom:5px;
}
.mb-8{
  margin-bottom:8px;
}
.col-aaa{
  color:#aaa;
}
.col-ccc{
  color:#ccc;
}
.f-10{
  font-size:10px;
}
.f-12{
  font-size:12px;
}
.t-c{
  text-align:center;
}
.pt-10{
  padding-top:10px;
}
.pb-10{
  padding-bottom:10px;
}
</style>
<style>
.left {
  float: left;
}
</style>
<template>
    <div class="page" :style="{background:`${homeData.homeBackColor} url(${homeBackImageView.imageUrl}) no-repeat center top`,'background-size':'100%'}" v-if="homeData">
    <div class="body-auto f-14 home-box" ref="homeBox">
      <template v-if="!isLoad">
        <div class="home-top-box top-change" :class="{'top-change':(indexData.recommendUserInfo)}" ref="topBox">
            <!--头部店招-->
            <template v-if="indexData.recommendUserInfo">
              <div class="top-store-mesg" ref="homeSearch">
                  <img :src="indexData.recommendUserInfo.headImageUrl">
                  <span>来自{{indexData.recommendUserInfo.nickname}}</span><b>的推荐</b>
                  <i @click="clickTurn('/h5/search')" class="download-btn">打开APP</i>
              </div>
            </template>
            <a :href="'/search'" class="home-search col-888 t-c" ref="homeSearch">
                搜索喜欢的宝贝
            </a>
            <!--没有店招显示默认顶部bar-->
            <!-- <template v-else>
              <a :href="'/h5/search'" class="home-search col-888 t-c" ref="homeSearch">搜索喜欢的宝贝</a>
                <ul class="home-top clearfix col-fff t-c"  ref="homeSearch">
                    <li @click="clickTurn('/h5/search')" class="right search-btn" ></li>
                    <li class="logo">
                        <img src="~images/logo.png">
                    </li>
                </ul>
            </template> -->

            <!--导航-->
            <swiperNav :nav-data="navData" :nav-fixed="navFixed" :show-type="showType" v-if="navData"></swiperNav>
        </div>
        <div v-for="(info,index) in infoData" :key="index" v-show="showType == index" ref="homeInfo">
            <!-- 首页内容块 -->
            <template v-if="index === 0">
                <!--轮播图-->
                <div class="shop-banner">
                <SwiperBanner :list-img="indexData.bannerList" v-if="indexData.bannerList.length > 0"></SwiperBanner>
                </div>
                <!-- 通知 -->
                <NoticeSwiper :notice-data="indexData.homePageNotice" v-if="indexData.homePageNotice && indexData.homePageNotice.homePageNoticeView.length > 0"></NoticeSwiper>

                <!--动态模块-->
                <div class="dong-box">
                    <template v-for="(obj,objIndex) in dynamicData">
                        <template v-if="obj.contentType == 1">
                            <!--icon导航-->
                            <p class="icon-nav t-c f-12" v-if="obj.iconDetail" :style="{backgroundImage:'url('+obj.iconDetail.backImage+')'}" :class="{'mb-8':obj.isSpacing == 1}" v-bind:data-index="objIndex" :key="objIndex">
                              <template v-for="(info,i) in obj.iconDetail.dataList">
                                <span :style="{color:info.color}" @click="clickTurn(info.webUrl)" v-if="info.type!=26">
                                  <i :style="{backgroundImage:'url('+info.image+')'}"></i>
                                  <em>{{info.title}}</em>
                                </span>
                                <span :style="{color:info.color}" @click="goApp" v-else>
                                  <i :style="{backgroundImage:'url('+info.image+')'}"></i>
                                  <em>{{info.title}}</em>
                                </span>
                              </template>
                            </p>
                        </template>
                        <template v-else-if="obj.contentType == 2">
                            <!--今日爆款/下期预告-->
                            <div class="bao-info bg-fff pb-10" v-if="obj.hotDetail && (obj.hotDetail.nowList || obj.hotDetail.laterList)" :class="{'mb-8':obj.isSpacing == 1}"  v-bind:data-index="objIndex" :key="objIndex">
                                <p class="t-c bao-title col-aaa">
                                    <i :class="{'col-000':!baoKType}" v-if="obj.hotDetail.nowList.length > 0" @click="baoKType = false,baoKStatus = true,baoFun(objIndex,obj.hotDetail.nowList.length,0)">今日爆款</i>
                                    <i :class="{'col-000':baoKType}" v-if="obj.hotDetail.laterList.length > 0" @click="baoKType = true,baoKStatus = true,baoFun(objIndex,obj.hotDetail.nowList.length)">下期预告</i>
                                </p>
                                <section class="swiper-container bao-swiper f-12" :class="'bao-swiper'+objIndex">
                                    <ul class="swiper-wrapper">
                                        <template  v-for="(list,i) in obj.hotDetail.nowList" v-if="obj.hotDetail.nowList">
                                            <li class="swiper-slide" @click="clickTurn(list.webUrl)" :key="i">
                                                <a href="javascript:;" class="bao-tu mb-8" v-lazy:background-image="list.image"></a>
                                                <p class="bao-text mb-5" v-text="list.name"></p>
                                                <p class="col-f00">
                                                    ￥{{list.lowPrice}}
                                                    <del class="f-10 col-ccc">￥{{list.highPrice}}</del>
                                                </p>
                                            </li>
                                        </template>
                                        <template  v-for="(list,laterIndex) in obj.hotDetail.laterList" v-if="obj.hotDetail.laterList">
                                            <li class="swiper-slide" @click="clickTurn(list.webUrl)" :class="{'notice-product':laterIndex == 0}" :key="laterIndex">
                                                <a href="javascript:;" class="bao-tu mb-8" v-lazy:background-image="list.image">
                                                    <i class="notice-line" v-if="laterIndex == 0" ref="nextProduct">下期预告</i>
                                                </a>
                                                <p class="bao-text mb-5" v-text="list.name"></p>
                                                <p class="col-f00">
                                                    ￥{{list.lowPrice}}
                                                    <del class="f-10 col-ccc">￥{{list.highPrice}}</del>
                                                </p>
                                            </li>
                                        </template>
                                    </ul>
                                </section>
                            </div>
                        </template>
                        <template v-else-if="obj.contentType == 3">
                            <!--综合入口-->
                            <div class="zong-box bg-fff pt-10 pb-10" :class="{'mb-8':obj.isSpacing == 1}" :key="objIndex">
                                <!--单品-->
                                <template v-if="obj.normalDetail.dataType == 1">
                                    <a href="javascript:;" class="zong-banner" v-lazy:background-image="obj.normalDetail.image" @click="clickTurn(obj.normalDetail.webUrl)"></a>
                                    <section class="swiper-container zong-swiper f-12" :class="'zong-swiper'+objIndex" v-if="obj.normalDetail.productList">
                                        <ul class="swiper-wrapper" v-if="obj.normalDetail.productList.length > 0">
                                            <li class="swiper-slide" v-for="(list,pIdx) in obj.normalDetail.productList" @click="clickTurn(list.webUrl)" :key="pIdx">
                                                <a href="javascript:;" class="bao-tu zong-dtu mb-8" v-lazy:background-image="list.image"></a>
                                                <p class="bao-text mb-5" v-text="list.name"></p>
                                                <p class="col-f00">
                                                    ￥{{list.lowPrice}}
                                                    <del class="f-10 col-ccc">￥{{list.highPrice}}</del>
                                                </p>
                                            </li>
                                            <li class="swiper-slide" v-if="obj.normalDetail.productList.length >= 6 && obj.normalDetail.webUrl">
                                                <a :href="obj.normalDetail.webUrl?obj.normalDetail.webUrl:'javascript:;'" class="bao-tu more-tu f-14" >
                                                    <!-- <i>查看全部</i> -->
                                                </a>
                                            </li>
                                        </ul>
                                    </section>
                                </template>
                                <!--活动-->
                                <template v-if="obj.normalDetail.dataType == 2">
                                    <a href="javascript:;" class="zong-banner" v-lazy:background-image="obj.normalDetail.image" @click="clickTurn(obj.normalDetail.webUrl)"></a>
                                    <section class="swiper-container zong-swiper f-12" :class="'zong-swiper'+objIndex">
                                        <ul class="swiper-wrapper">
                                            <li class="swiper-slide" v-for="(list,aIdx) in obj.normalDetail.activityList" @click="clickTurn(list.webUrl)" :key="aIdx">
                                                <a href="javascript:;" class="bao-tu" v-lazy:background-image="list.image"></a>
                                            </li>
                                            <li class="swiper-slide" v-if="obj.normalDetail.activityList.length >= 6 && obj.normalDetail.webUrl">
                                                <a :href="obj.normalDetail.webUrl?obj.normalDetail.webUrl:'javascript:;'" class="bao-tu mb-8 more-tu f-14">
                                                    <!-- <i>查看全部</i> -->
                                                </a>
                                            </li>
                                        </ul>
                                    </section>
                                </template>
                            </div>
                        </template>
                        <template v-else-if="obj.contentType == 4">
                            <!--自定义模块-->
                            <div class="custom-box" :class="{'mb-8':obj.isSpacing == 1}" v-if="obj.plateActivity.length > 0"  v-bind:data-index="objIndex" :key="objIndex">
                                <p v-for="(imgList,imgIdx) in obj.plateActivity" :key="imgIdx">
                                    <a href="javascript:;" v-for="(imgInfo,i) in imgList.plateActivityRowView" :style="{width:imgInit(imgList.plateActivityRowView,imgInfo.width)}" :key="i">
                                        <img src="https://yangege.b0.upaiyun.com/1794a971b4043.png" v-lazy="imgInfo.image" @click="goApp" v-if="imgInfo.type==4">
                                        <img src="https://yangege.b0.upaiyun.com/1794a971b4043.png" v-lazy="imgInfo.image" @click="clickTurn(imgInfo.webUrl)" v-else>
                                    </a>
                                </p>
                            </div>
                        </template>
                    </template>
                </div>
                <!--爆品秒杀-->
                <NewSeckill :is-scroll="seckillIsScroll" :seckilldata="IndexNewhotData" :is-fixed="isFixed" ref="seckill" v-if="IndexNewhotData && IndexNewhotData.playList.length>0"></NewSeckill>
                <!--超值热卖 new-->
                <div class="new-sale-hot mt-10" v-if="IndexNewhotData.saleList && IndexNewhotData.saleList.length>0">
                    <h1 class="f-18 fw-n t-c hot-title"><img src="~images/shop/tlt-line.png">超值热卖</h1>
                    <div v-for="(obj,objIndex) in IndexNewhotData.saleList" :key="objIndex" class="mt-10 pb-8 bg-fff br-radius">
                        <a href="javascript:;" class="zong-banner" :class="{'del-arrow':obj.productList.length==0}" v-lazy:background-image="obj.image" @click="clickTurn(obj.webUrl)"></a>
                        <section class="swiper-container zong-swiper f-12" :class="'hot-swiper'+objIndex" v-if="obj.productList">
                            <ul class="swiper-wrapper" v-if="obj.productList.length > 0">
                                <li class="swiper-slide" v-for="(list,pIdx) in obj.productList" @click="clickTurn(`/product/detail?saleGoodsId=${list.saleGoodsId}`)" :key="pIdx">
                                    <a href="javascript:;" class="bao-tu zong-dtu mb-8" v-lazy:background-image="list.image"></a>
                                    <p class="bao-text mb-5" v-text="list.name"></p>
                                    <p class="col-f00 t-c f-16 mb-12">
                                        <b class="f-12">￥</b>{{list.lowPrice}}
                                        <img src="~images/vip-redicon.png" alt="" class="vip-icon">
                                        <!-- <del class="f-10 col-ccc">￥{{list.highPrice}}</del> -->
                                    </p>
                                </li>
                                <li class="swiper-slide" v-if="obj.productList.length >= 6 && obj.webUrl">
                                    <a :href="obj.webUrl?obj.webUrl:'javascript:;'" class="bao-tu more-tu f-14" >
                                        <!-- <i>查看全部</i> -->
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                <!--猜你喜欢-->
                <div class="like-box mt-10 pb-10" v-if="likeData && likeData.length > 0">
                    <h1 class="f-18 fw-n t-c may-like"><img src="~images/shop/tlt-icon.png" alt=""><span>猜你喜欢</span><img src="~images/shop/tlt-icon.png" alt=""></h1>
                    <PList :list-data="likeData" v-infinite-scroll="scrollPage" infinite-scroll-disabled="loading" infinite-scroll-distance="10"></PList>
                </div>

                <p class="list-end t-c" v-if="listEnd">已显示全部内容</p>
            </template>

            <!-- 分类模块 -->
            <template v-else>
                <!-- 轮播图 -->
                <div class="swiper-container class-swiper" :class="'class-swiper'+index">
                    <ul class="swiper-wrapper clearfix">
                        <li class="swiper-slide" v-for="(list,idx) in info.bannerList" :key="idx">
                            <a :href="list.webUrl?list.webUrl:'javascript:;'" :style="{backgroundImage:'url('+list.image+')'}" v-if="list.webUrl"></a>
                        </li>
                    </ul>
                    <div class="pagination-class" :class="'pagination-class'+index"></div>
                </div>

                <!-- 内容块 -->
                <div class="class-list f-14" v-for="(list,idx) in info.themeList" :key="idx" v-if="list.productInfos.length > 0">
                    <h2 class="t-c f-18 mb-5"><span v-text="list.mainTitle"></span></h2>
                    <p class="t-c f-14 col-888" v-if="list.subTitle" v-text="list.subTitle"></p>
                    <ul class="class-info-list mt-30">
                        <li v-for="(pList,pIdx) in list.productInfos" :key="pIdx">
                            <a :href="pList.webUrl" class="mb-5"><img :src="pList.image"></a>
                            <p class="product-desc" v-text="pList.leftDesc"></p>
                            <p>￥{{pList.salesPrice}}</p>
                        </li>
                    </ul>
                </div>
            </template>
        </div>
      </template>
      <div class="back-top" v-if="backTop" @click="backTopFun">
        <img src="~images/shop/arr-top.png" alt="">
      </div>
      <!-- <floatIcon :show-cart="showCart"></floatIcon> -->

      <footBar bar-tag='home'></footBar>
      <p class="load" v-if="isLoad">正在加载中<span class="dotting"></span></p>
      <p class="list-loading t-c" v-if="loading">努力加载中…</p>
      <p class="list-error t-c" v-if="requestError">请求出错，请稍候再试~</p>
      <input type="hidden" vlaue="0" ref="historyScroll">
      <input type="hidden" vlaue="0" ref="historyPage">
      <input type="hidden" value="0" ref="historyNav">

      <!--广告图活动弹框-->
      <!-- <div class="activity-tan t-c" v-for="(info,index) in advertised"  v-if="advertised && index == 0 && advertisedType">
          <i class="close-tb" @click="advertisedType = false"></i>
          <img :src="info.image"  @click="clickTurn(info.webUrl)">
      </div> -->
      <!--黑色半透明层-->
      <div class="layer-full" v-if="advertisedType"></div>
    </div>
    </div>
</template>
<script>
// import tool from '@/utils/tools'
import Swiper from 'swiper'
//import { InfiniteScroll } from 'mint-ui'
import swiperNav from './blocks/swiperNav'
import SwiperBanner from './blocks/swiperBanner'
import NoticeSwiper from './blocks/notice'
import NewSeckill from './blocks/newSecKill'
import PList from './blocks/guessLike'
import footBar from '@/components/footBar'
import floatIcon from '@/components/floatIcon'
import api from '@/api/shop-home'
import apiShare from '@/api/share'
import { Toast } from 'mint-ui'
import('swiper/dist/css/swiper.css')

// let _seckillBar = ''
// let _seckillBarTop = ''
// let _seckillBarBox = ''
// let _seckillBoxTop = ''

export default {
  name: 'index',
  data () {
    return {
      accoutId: this.$route.query.accountid,
      indexData: '',
      navData: [],
      infoData: [],
      dynamicData: [],
      advertised: [],
      hotData: [],
      likeData: [],
      showType: 0,
      advertisedType: false,
      baoKType: false,
      baoKStatus: false,
      isLoad: true,
      backTop: false,
      navFixed: false,
      request: false,
      requestError: false,
      loading: false,
      listEnd: false,
      listTip: false,
      isMember: 0,
      baoSwiper: [],
      listChange: false,
      seckillIsScroll: false,
      IndexNewhotData: '',
      isFixed: false,
      homeData: '',
      homeLikeData: '',
      page: 1,
      totalCount: 0,
      homeBackImageView:'',
      showCart:false
    }
  },
  components: {
    swiperNav,
    SwiperBanner,
    NoticeSwiper,
    NewSeckill,
    PList,
    footBar,
    floatIcon
  },
  computed: {
  },
  methods: {
    goApp(){
      Toast({
        message: '仅限斑马会员app用户使用',
        position: 'center',
        duration: 3000
      })
    },
    clickTurn: function (url, position, index, id, type) {
      if (!url) return
      window.location.href = url
    },
    topBanner: function () {
      // var _this = this
      const _nav = document.querySelector('.home-nav')
      const _navTH = _nav ? _nav.offsetTop : 0
      const _navBoxH = _nav ? _nav.offsetHeight : 0
      const _box = this.$refs.homeBox

      // topBar 高度处理
      // let _topH = this.$refs.topBox.offsetHeight
      document.onscroll = () => {
        let _scrollH = window.scrollY
        if (_navTH <= _scrollH + _navBoxH) {
          this.navFixed = true
          _box.style.paddingTop = 0 + 'px'
        } else {
          this.navFixed = false
          _box.style.paddingTop = 0 + 'px'
        }
      }
    },
    /*
    *左右滑动（今日、综合、疯抢等模块）
    *绑定模块  name
    * len=今日.length 主要处理明日预告的切换
    */
    slideModule: function (name, len) {
      var _this = this
      var _slideSwiper = new Swiper(name, {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        on: {
          slideChangeTransitionEnd: function () {
            if (this.activeIndex >= len) {
              _this.baoKType = true
            } else {
              _this.baoKType = false
            }
          },
          setTranslate: function () {
            let $this = this

            if (name.indexOf('bao-swiper') > -1) {
              // 滑动到屏幕中间切换今日、下期
              if (_this.baoKStatus) {
                _this.baoKStatus = false
                return false
              }
              try {
                let _leftW =
                  _this.$refs.nextProduct[0].offsetParent.offsetParent
                    .offsetLeft
                let _boxW = window.screen.width / 2 + 12
                if (Math.abs($this.translate) >= _leftW - _boxW) {
                  _this.baoKType = true
                } else {
                  _this.baoKType = false
                }
              } catch (err) {}
            }
          }
        }
      })
      if (name.indexOf('bao-swiper') > -1) {
        _this.baoSwiper.map(function (item, i) {
          if (item.name == name) {
            _this.baoSwiper[i].swiper = _slideSwiper
          }
        })
      }
    },
    imgInit: function (obj, w) {
      // 初始化自定义模块图片大小
      let _winW = window.screen.width > 750 ? 750 : window.screen.width
      let _countW = 0
      let _imgW = 0

      obj.map(function (item) {
        _countW = _countW + Number(item.width)
      })
      _imgW = _winW / _countW * w

      return _imgW + 'px'
    },
    scrollPage: function () {
      // console.log('scroll')
      // if (tool.bottomVisible() && !_this.request) {
      if (this.page * 10 < this.totalCount) {
        this.loading = true
        this.request = true
        this.requestError = false
        this.page += 1
        this.likeDataGet(1)
      } else {
        this.listEnd = true
      }
      // }
    },
    activityTan: function (id, repeat) {
      // 广告图
      let _id = id
      let _repeat = repeat
      let _this = this

      if (localStorage.activityId) {
        // 不同id（说明换商品了）-----更新缓存数据
        var _activityId = localStorage.activityId

        if (_id != _activityId) {
          _this.advertisedType = true
          localStorage.activityId = _id
          localStorage.activityRepeat = _repeat
        } else {
          if (_repeat == 1) {
            _this.advertisedType = true
          } else {
            _this.advertisedType = false
          }
        }
      } else {
        // 首次进入记录id、repeat
        _this.advertisedType = true
        window.localStorage.setItem('activityId', _id)
        window.localStorage.setItem('activityRepeat', _repeat)
      }
    },
    baoFun: function (i, len, index) {
      // 爆款、预告模块切换
      let _this = this
      let _name = '.bao-swiper' + i
      let _initIndex = len

      if (index == 0) {
        _initIndex = 0
      }
      _this.baoSwiper.map(function (item, i) {
        if (item.name == _name) {
          _this.baoSwiper[i].swiper.slideTo(_initIndex, 800)
        }
      })
    },
    likeDataGet: function (type) {
      // var _this = this
      api.getHomeLikeData({ page: this.page }).then(res => {
        var _data = res.data
        if (_data.status == 1) {
          if (type == 1) {
            this.likeData = this.likeData.concat(_data.recommendList)
          } else {
            this.likeData = _data.recommendList
            // this.scrollPage()
          }
          this.totalCount = _data.totalCount
          // this.isMember = _data.isMember
          // this.$nextTick(() => {
          //   this.listChange = true
          // })
        }
        this.loading = false
        this.request = false
      })
    },
    backTopFun: function () {
      window.scrollTo(0, 0)
    },
    // listChangeFun (val) {
    //   this.listChange = val
    // },
    secKillscroll () {
      // let winScrollTop = window.scrollY
      if (!this.$refs.seckill) return false
      let secKillChildRef = this.$refs.seckill[0].$refs
      if (!secKillChildRef) {
        return false
      }
      let top = secKillChildRef.hotTlt.getBoundingClientRect().bottom
      let ulBt = secKillChildRef.proList.getBoundingClientRect().bottom
      if (top < 100 && ulBt > 100) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    getHotData () {
      let data = {
        type: '12'
      }
      api.getHot(data).then(data => {
        this.IndexNewhotData = data.data
        this.$nextTick(() => {
          data.data.saleList.forEach((em, index) => {
            let _name = '.hot-swiper' + index
            this.slideModule(_name)
          })
        })
      })
    },
    getHomeBullet () { // 首页弹窗
      api.homeBullet().then(res => {
        this.advertised = res.data.homeBulletList
        if (this.advertised && this.advertised.length > 0) {
          this.activityTan(this.advertised[0].id, this.advertised[0].isRepeat)
        }
      })
    },
    getShareNotice(){
      let data = {
        accountid : this.accoutId
      }
      apiShare.getShareNotice(data)
    }
  },
  mounted: function () {
    // this.ga = new Ganalytics({ targetType: '121', gpm: '121' })
    let param = {
      type: '12345'
    }

    if (this.accoutId && this.accoutId != '') {
      param = { ...param, ...{ recommendAccountId: this.accoutId } }
    }
    api.getHomeData(param).then(res => {
      let _this = this
      this.homeData = res.data
      this.homeBackImageView = res.data.homeBackImageView
      //console.log(this.homeBackImageView.imageUrl)
      // return false
      // if (this.homeData.status == 4) {
      //   // 处理微信调用接口缓存授权问题
      //   let _link = window.location.href

      //   if (_link.indexOf('?') > -1) {
      //     window.location.href =
      //       _link + '&cache=' + Math.round(Math.random() * 100)
      //   } else {
      //     window.location.href =
      //       _link + '?cache=' + Math.round(Math.random() * 100)
      //   }
      // }

      this.indexData = this.homeData
      this.navData = this.homeData.navigationBarList
      this.dynamicData = this.homeData.dynamicContentList
      // this.advertised = this.homeData.bullets
      this.isLoad = false
      // if (this.homeData.bullets && this.homeData.bullets.length > 0) {
      //   _this.activityTan(_this.advertised[0].id, _this.advertised[0].isRepeat)
      // }
      //this.getHomeBullet() // 获取首页弹窗
      _this.navData.map(function (i) {
        // 初始化tab页
        _this.infoData.push('')
      })

      _this.$nextTick(() => {
        _this.topBanner()

        this.homeData.dynamicContentList.map(function (item, i) {
          if (item.contentType == 2) {
            let _name = '.bao-swiper' + i
            let _len = item.hotDetail.nowList.length
            var _baoObj = {
              name: _name,
              swiper: ''
            }
            _this.baoSwiper.push(_baoObj)
            _this.slideModule(_name, _len)
          }
          if (item.contentType == 3) {
            var _name = '.zong-swiper' + i
            _this.slideModule(_name)
          }
          // if (item.contentType == 5) {
          //   var _name = ".berserk-swiper-container";
          //   _this.slideModule(_name);
          //   _this.berserkTime(item.dailyBerserk.endSecond);
          // }
        })
        if (_this.$refs.historyNav.value > 0) {
          _this.$refs.nav.children[0].children[_this.$refs.historyNav.value].click()
        }
      })
      this.likeDataGet()
      this.getHotData()
    })
    window.onscroll = () => {
      let _scrollH = window.scrollY
      let _this = this
      if (_scrollH > 500) {
        _this.backTop = true
      } else {
        _this.backTop = false
      }
      // this.scrollPage()
      setTimeout(() => {
        this.secKillscroll()
      }, 100)
    }
  },
  created () {
    if(this.accoutId){
      this.getShareNotice()
    }
  }
}
</script>
