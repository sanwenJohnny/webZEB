<style lang="less" scoped>
@font-face {
  font-family: "hqbs_icon";
  src: url('../iconfont/hqbs_icon.eot');
  /* IE9*/
  src: url('../iconfont/hqbs_icon.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../iconfont/hqbs_icon.woff') format('woff'), /* chrome, firefox */ url('../iconfont/hqbs_icon.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('../iconfont/hqbs_icon.svg#iconfont') format('svg');
  /* iOS 4.1- */
}
.iconfont {
  font-family: "hqbs_icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.iconsymbol {
  /*display: inline-block;
			width: 0.373333rem;
			height: 0.373333rem;
			line-height: 0.373333rem;
			margin-left: 0.05rem;
			margin-bottom: 0.05rem;
			background: @goldfont;
			color: #ffffff;
			font-style: normal;
			font-size: 0.426667rem;
			font-weight: normal;
			vertical-align: middle;*/
  width: 1em;
  height: 1em;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
  font-size: 0.426667rem;
}
* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: PingFangSC-Regular;
}
.index-wrapper{
  height: 100%;
}
#pocket {
  //height: 603px;
  height: 100%;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.gray_bg {
  background: #f0f0f0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.article {
  /*display: none;*/
  background: #f0f0f0;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  height: 100%;
}
.app_header {
  width: 100%;
  height: 1.173333rem;
  line-height: 1.173333rem;
  background: #000000;
  position: relative;
  text-align: center;
  color: #ffffff;
  font-size: 0.48rem;
}
.app_header span {
  display: inline-block;
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
}
.app_header .app_back {
  background: url('../img/back_bg.png') no-repeat;
  background-size: 40%;
  left: 0.266667rem;
  top: 0.31rem;
}
.app_header .app_share {
  background: url('../img/share_bg.png') no-repeat;
  background-size: 100%;
  right: 0.2rem;
  top: 0.2rem;
}
.head {
  background: url('../img/head_bg.png') no-repeat;
  background-size: 100%;
  padding-top: 1.333333rem;
  text-align: center;
}
.head > img {
  display: block;
  width: 1.653333rem;
  height: 1.653333rem;
  border: 2px solid #000000;
  margin: auto;
}
.head .owner {
  display: inline-block;
  margin-top: 0.266667rem;
  font-size: 0.373333rem;
  color: #000000;
  font-weight: bold;
}
.head .owner em {
  display: inline-block;
  width: 0.346667rem;
  height: 0.346667rem;
  line-height: 0.373333rem;
  /*margin-left: 0.08rem;*/
  vertical-align: -0.1em;
}
.head .owner em.s_icon {
  background: url('../img/pin_s.png');
  background-size: 100%;
}
.head .owner em.t_icon {
  background: url('../img/pin_t.png');
  background-size: 100%;
}
.head .owner em.f_icon {
  width: 0.666667rem;
  background: url('../img/team_icon.png');
  background-size: 100%;
}
.head .desc {
  display: block;
  margin: auto;
  margin-top: 0.206667rem;
  margin-bottom: 1.12rem;
  color: #000000;
  font-size: 0.32rem;
}
.head > p {
  margin: 0;
  color: #000000;
  font-size: 1.333333rem;
  font-weight: bold;
  margin-top: -0.32rem;
  line-height: 100%;
}
.head > .use {
  display: block;
  margin: auto;
  margin-top: 0.533333rem;
  margin-bottom: 0.533333rem;
  color: #B0B0B0;
  font-size: 0.32rem;
}
.cont {
  background: #ffffff;
  height: inherit;
}
.cont .red_pocket_desc {
  display: block;
  width: 100%;
  height: 1.066667rem;
  line-height: 1.066667rem;
  padding: 0 0.4rem;
  color: #858585;
  font-size: 0.373333rem;
}
.cont .red_pocket_list {
  display: block;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  padding: 0 0.4rem;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}
.cont .red_pocket_list li {
  border-bottom: 1px solid #f0f0f0;
  list-style: none;
  overflow: hidden;
}
.cont .red_pocket_list li:last-child {
  border-bottom: 0;
}
.cont .red_pocket_list li > img {
  display: block;
  margin: 0.4rem 0;
  width: 1.066667rem;
  height: 1.066667rem;
}
.cont .red_pocket_list li .name {
  width: 5.5rem;
  margin: 0.4rem 0 0 0.4rem;
  font-size: 0.426667rem;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cont .red_pocket_list li .number {
  display: block;
  margin: 0.35rem 0 0.1rem 0;
  font-size: 0.426667rem;
  color: #000000;
  text-align: right;
}
.cont .red_pocket_list li .lucky {
  display: block;
  color: #bb935b;
  font-size: 0.373333rem;
}
.cont .red_pocket_list li .lucky .best {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.426667rem;
  margin-right: 0.106667rem;
  margin-top: -0.05rem;
  background-image: -webkit-gradient(linear, 0 50%, 100% 50%, from(#d5b383), to(#bb935b));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bottom {
  box-sizing: border-box;
  width: 100%;
  height: 2.0rem;
  /*line-height: 2.0rem;*/
  position: absolute;
  bottom: 0;
  text-align: center;
  padding-top: .4rem;
}
.rela {
  position: relative;
}
.pd76 {
  padding-top: .76rem;
}
.foot {
  background: #ffffff;
  width: 100%;
  height: 2.0rem;
  line-height: 2.0rem;
  position: absolute;
  bottom: 0;
  text-align: center;
}
.gb_link {
  display: block;
  font-size: 0.346667rem;
  color: #5171B0;
}
.warning {
  display: inline-block;
  color: #B0B0B0;
  font-size: 0.32rem;
  margin-top: 0.2rem;
}
.article_2 {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: url('../img/zebra-bg.png') no-repeat;
  background-size: cover;
  padding-top: 1.253333rem;
  padding-bottom: 103px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.pocket_zone {
  box-sizing: border-box;
  width: 8.693333rem;
  height: 12.08rem;
  border-radius: 0.133333rem;
  background: url('../img/pocket_zone.png') no-repeat;
  background-size: 100%;
  text-align: center;
  margin: auto;
  padding: 0 0.533333rem;
  padding-top: 1.066667rem;
}
.pocket_zone > img {
  display: block;
  width: 1.333333rem;
  height: 1.333333rem;
  border: 2px solid #000000;
  margin: auto;
}
.pocket_zone .send_name {
  display: block;
  color: #000000;
  font-size: 0.426667rem;
  font-weight: bold;
  margin-top: 0.2rem;
}
.pocket_zone .send_desc {
  display: block;
  color: #232323;
  font-size: 0.32rem;
  margin-top: 0.16rem;
}
.pocket_zone .send_msg {
  display: block;
  height: 3.333333rem;
  line-height: 3.333333rem;
  color: #000000;
  font-size: 0.586667rem;
  /*margin-top: 0.8rem;*/
}
.pocket_zone .send_msg > span {
  display: inline-block;
  vertical-align: middle;
  line-height: initial;
}
.pocket_zone .open_btn {
  /*margin-top: 1rem;*/
  position: absolute;
  top: 8.4rem;
  left: 3.6rem;
  text-align: center;
}
.pocket_zone .open_btn > .open_img {
  display: block;
  width: 2.933333rem;
  height: 2.933333rem;
  margin: auto;
}
.pocket_zone .hqbs_fonticon {
  font-size: 0.426667rem;
  color: #bb935b;
  position: absolute;
  top: 12.4rem;
  left: 163px;
  opacity: .4;
}
.pocket_zone .detail_link {
  position: absolute;
  top: 12.4rem;
  left: 3.853333rem;
  color: #bb935b;
  font-size: 0.346667rem;
  line-height: 100%;
}
.pocket_zone .detail_link .arrow {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.28rem;
  margin-bottom: .025rem;
}
[v-cloak] {
  display: none;
}
/*
.flipview{perspective:1000;transform-style:preserve-3d;}
.flip{transition:0.6s;transform-style:preserve-3d;}*/
.flipEver {
  -webkit-animation: flip 2s infinite linear ;
  animation: flip 2s infinite linear ;
}
@-webkit-keyframes flip {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  50% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}
@keyframes flip {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  50% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
aniview span {
  display: inline-block;
  width: 2.933333rem;
  height: 2.933333rem;
  line-height: 2.933333rem;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  color: rgba(187, 147, 91, 0.3);
  font-size: 0.346667rem;
}
.bg_shadow {
  display: block;
  position: relative;
  top: 0.066667rem;
  background: rgba(89, 67, 38, 0.1);
  width: 2.853333rem;
  height: 2.853333rem;
  line-height: 2.933333rem;
  border-radius: 50%;
  margin: auto;
}
.rotate_img {
  display: block;
  position: absolute;
  top: 0;
  width: 2.933333rem;
  height: 2.933333rem;
  -webkit-transform: rotate(360deg);
  animation: rotation 0.8s linear infinite;
  -moz-animation: rotation 0.8s linear infinite;
  -webkit-animation: rotation 0.8s linear infinite;
  -o-animation: rotation 0.8s linear infinite;
}

</style>

<template>
  <div id="pocket" :class="styles" class="pocket">
    <div class="app_header" v-if="isApp">
        <span class="app_back" v-on:click.once="goBack"></span>
        斑马红包
        <span class="app_share" v-on:click="share" v-if="isSelf==1&&isAllReceive==0&&isExpire==0"></span>
    </div>
    <div class="article" v-if="showPocket==0">      
        <div class="head">
            <img :src="userImage">
            <span class="owner">{{nickname}}的红包
            <!-- <svg class="iconsymbol" aria-hidden="true" v-if="isRandom==1">
              <use xlink:href="#icon-pin"></use>
            </svg>
            <svg class="iconsymbol" aria-hidden="true" v-if="isFans==1">
              <use xlink:href="#icon-fen--"></use>
            </svg> -->
            <em class="s_icon" v-if="isRandom==1&&isFans==0"></em>
            <em class="t_icon" v-if="isRandom==1&&isFans==1"></em>
            <em class="f_icon" v-if="isFans==1"></em>
            </span>
            <span class="desc">{{title}}</span>
            <p v-if="!!amount">{{amount}}</p>
            <span class="use" v-if="isReceive==1">已存入G币账户，可直接使用</span>
        </div>
        <div class="cont">
            <span class="red_pocket_desc" v-if="isRandom==1 || (isRandom==0&&isSelf==1)">{{drawDesc}}</span>
            <ul class="red_pocket_list" v-if="isRandom==1 || (isRandom==0&&isSelf==1)">
                <li v-for="(record, index) in recordList" :key="index">
                    <img :src="record.userImage" class="fl">
                    <div class="fl name">
                        {{record.nickname}}
                    </div>
                    <div class="fr">
                        <span class="number">{{record.amount}}</span>
                        <span class="lucky" v-if="record.isBest==1"><i class="iconfont best">&#xe6af;</i>手气最佳</span>
                    </div>
                </li>
            </ul>
            <div :class="className">
                <span class="gb_link" @click="checkDetail" v-if="!isApp">查看我的G币账户</span>
                <span class="warning" v-if="isSelf==1&&isAllReceive==0&&isExpire==0">未领取的红包，将于24小时后退回发放者账户</span>
                <span class="warning" v-if="isSelf==1&&isAllReceive==0&&isExpire==1">未领取的红包已退回发放者账户</span>
            </div>           
        </div>
    </div>
    <div class="article_2" v-if="showPocket==1">
        <div class="pocket_zone">
            <img :src="userImage">
            <span class="send_name">{{nickname}}</span>
            <span class="send_desc" v-if="isRandom==1">发了一个红包，金额随机</span>
            <span class="send_desc" v-else>给你发了一个红包</span>
            <span class="send_msg">
                <span>{{title}}</span>
                
            </span>
            <div class="open_btn flipview" v-on:click.once="drawRedPocket" v-if="canReceive==1">
                <img src="../img/open.png" class="open_img" v-if="isOpened==0">
                <div v-if="isOpened==1">
                    
                    <div class="bg_shadow">              
                        
                    </div>
                    <img src="../img/opening.png" class="rotate_img">
                    <span>打开中</span>
                    
                </div>           

                
            </div>           
            <span class="detail_link" v-if="canCheckDetail==1" @click="showDetail">查看领取详情<i class="iconfont arrow">&#xe6b2;</i></span>
            <i class="hqbs_fonticon iconfont" v-else>&#xe6ed;</i>
        </div>
    </div>
</div>
</template>

<script>
import api from '@/api/personal'
import tools from '@/utils/tools'
export default {
  data() {
    return {
      id: "",
      userImage: "",
      nickname: "",
      isSelf: "",
      canReceive: "",
      isReceive: "",
      title: "",
      isFans: "",
      isRandom: "",
      amount: "",
      drawDesc: "",
      recordList: [],
      loadGif: null,
      uri_header: window.location.origin,
      drawStr: "",
      failReason: "",
      canCheckDetail: "",
      isAllReceive: "",
      isExpire: "",
      className: "bottom",
      showPocket: "2",
      isApp: tools.isApp,
      shareLink: '',
      isWx: false,
      styles: "",
      isOpened: 0,
      ua: "",
      referrer: null
    };
  },
  created: function() {
    // if (!loginLoad()) {
    //   //判断是否登录
    //   loginFun();
    //   return false;
    // }
    this.id = this.queryString("id")
    //this.isApp = this.queryString("isApp") == 1 ? true : false;
    this.referrer = this.queryString("referrer");
    this.ua = window.navigator.userAgent.toLowerCase();
    this.isWx = this.ua.match(/MicroMessenger/i) == "micromessenger";
    this.loadGif = new Image();
    this.loadGif.src = "../img/opening.png";
    this.getDetail();
    // if (this.isApp) {
    //   tools.bridgeFun()
    // }
  },
  methods: {
    async getDetail() {
      var _this = this;
      console.log(this.id,'asdasdad')
      let params = {
        code: this.id
      }
      let res = await api.getRedPacketsDetail(params)
      console.log(res,'res')
      const { status, message, data } = res
      if (res.status == 1) {
            _this.isSelf = data.isSelf;
            _this.canReceive = data.canReceive;
            _this.isReceive = data.isReceive;
            _this.title = data.title;
            _this.isFans = data.isFans;
            _this.isRandom = data.isRandom;
            _this.amount = data.amount;
            _this.drawDesc = data.drawDesc;
            _this.recordList = data.recordList;
            _this.canCheckDetail = data.canCheckDetail;
            _this.isAllReceive = data.isAllReceive;
            _this.isExpire = data.isExpire;
            _this.userImage = data.userImage;
            _this.nickname = data.nickname;
            _this.shareLink = data.shareLink;
            if (
              (_this.isSelf == 1 && _this.isExpire == 1) ||
              _this.isReceive == 1 ||
              _this.referrer == "detaillist" ||
              (_this.isRandom == 0 && _this.isSelf == 1)
            ) {
              _this.showPocket = "0";
            } else if (
              !(_this.isSelf == 1 && _this.isExpire == 1) &&
              _this.isReceive == 0 &&
              _this.referrer != "detaillist" &&
              !(_this.isRandom == 0 && _this.isSelf == 1)
            ) {
              _this.showPocket = "1";
            }
            if (_this.isRandom == 0 && _this.isSelf == 0) {
              _this.styles = "gray_bg";
            }
            _this.$nextTick(function() {
              _this.checkStyle();
            });
            // if (_this.isWx) {
            //   _this.initWx();
            // }
          }
    },
    async drawRedPocket() {
      // $('.open_img').addClass('flipEver');
      // var _f = document.querySelector('.open_btn');
      // var _dom = document.querySelector('.open_img');
      // _f.removeChild(_dom);
      // _f.appendChild(this.loadGif);
      this.isOpened = 1;
      var self = this;
      let params = {
        code: this.id
      }
      let res = await api.redPacketsDraw(params)
      console.log(res,'res')
      const { status, message, data } = res
      setTimeout(function() {
        if (data.isSuccess == 1) {
          self.amount = data.amount;
          self.getRecord();
        } else if (data.isSuccess == 0) {
          // _this.title = data.failReason;
          // _this.canCheckDetail = data.canCheckDetail;
          // _this.canReceive = 0;
          // _this.getRecord(1);
          if(data.canCheckDetail == 1){
            self.title = data.failReason;
            self.canCheckDetail = data.canCheckDetail;
            self.canReceive = 0;
            self.getRecord(1);
          }else{
            console.log(22222)
            self.title = data.failReason;
            self.canCheckDetail = data.canCheckDetail;
            self.canReceive = 0;
          }
        }
      }, 1000);
    },
    async getRecord(param) {
      var _this = this;
      var state = param;
      let params = {
        code: this.id
      }
      let res = await api.redPacketsRecord(params)
      console.log(res,'res')
      const { status, message, data } = res
      if (res.status == 1) {
        _this.drawDesc = data.drawDesc;
        _this.isAllReceive = data.isAllReceive;
        _this.recordList = data.recordList;
        _this.isReceive = data.isReceive;
        _this.showPocket = state ? "1" : "0";
        _this.$nextTick(function() {
          _this.checkStyle();
        });
      }
    },
    checkStyle: function() {
      var b_height = $(".bottom").height(),
        $b = $(".bottom"),
        $a = $(".article");
      var a_height = $b.hasClass("rela") ? $a.height() - b_height : $a.height();
      var t_height = $(window).height();
      console.log(b_height,a_height,t_height)
      if (b_height + a_height > t_height) {
        this.className =
          this.isSelf == 0 || (this.isSelf == 1 && this.isAllReceive == 1)
            ? "bottom rela pd76"
            : "bottom rela";
      } else {
        this.className =
          this.isSelf == 0 || (this.isSelf == 1 && this.isAllReceive == 1)
            ? "bottom pd76"
            : "bottom";
      }
      // if(this.recordList&&this.recordList.length>3){
      //  this.className = this.isSelf==0||(this.isSelf==1&&this.isAllReceive==1) ? 'bottom rela pd76' : 'bottom rela';
      // }else{
      //  this.className = this.isSelf==0||(this.isSelf==1&&this.isAllReceive==1) ? 'bottom pd76' : 'bottom';
      // }
    },
    goBack: function() {
      if (document.referrer == "") {
        window.location.href = 'ggj://redirect/typeCommon/{"type":8}';
      } else {
        window.history.back();
      }
    },
    share: function() {
      window.location.href = this.shareLink
      // window.WebViewJavascriptBridge.callHandler(
      //   "showShareView",
      //   {
      //     moduleId: this.jsSdk.pengyouShare.moduleId,
      //     shareKey: this.jsSdk.pengyouShare.shareKey,
      //     shareParameter: this.jsSdk.pengyouShare.shareParameter,
      //     callBackLink: this.jsSdk.pengyouShare.callBackLink,
      //     shareDesc: this.jsSdk.pengyouShare.shareDesc,
      //     shareImage: this.jsSdk.pengyouShare.shareImage,
      //     shareLink: this.jsSdk.pengyouShare.shareLink,
      //     shareTitle: this.jsSdk.pengyouShare.shareTitle,
      //     sharePengYouQuanTitle: this.jsSdk.pengyouquanShare
      //       .sharePengYouQuanTitle,
      //     shareTypeList: this.jsSdk.shareTypeList,
      //     shareType: this.jsSdk.shareTypeList.join("")
      //     // 'sinaDesc':'',
      //     // "timeLineImage":_this.shares.image,
      //     // "friendImage":_this.shares.image,
      //     // "friendProcessImage":_this.shares.image
      //   },
      //   function(data) {
      //     if (data == "success") {
      //     } else if (data == "fail") {
      //     }
      //   }
      // );
    },
    checkDetail: function() {
      //window.location.href = "./index.html";
      this.$router.push('/personal/gcoin')
    },
    showDetail: function() {
      var _this = this;
      _this.showPocket = "0";
      _this.$nextTick(function() {
        _this.checkStyle();
      });
    },
    queryString: function(val) {
      // var uri = window.location.search;
      // var re = new RegExp("" + val + "=([^&?]*)", "ig");
      // return ((uri.match(re)) ? (uri.match(re)[0].substr(val.length + 1)) : null);

      var reg = new RegExp("(^|&)" + val + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }
};
</script>