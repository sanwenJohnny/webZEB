<template>
  <div>
    <div class=" member-box" v-cloak>
      <div class="body-auto member-view" :class="{'pt-50':(memberData.referrals && memberData.referrals != '' && memberData.isShowTime == 1 && isApp)}">
      
        <div class="promotion-bar" v-show="isApp">
            <a href="javascript:;" class="promotion-back col-fff f-14"></a>
            <b class="f-18">捕手会员招募</b>
            <i @click="clickTurn(shareData)" class="right share-top-tb"></i>
        </div>
        <!--邀请提示-->
        <header class="tip-yq col-fff" v-if="memberData.referral && memberData.referral != ''" :class="{'tip-app':isApp}">
            <i class="tip-avatar" v-lazy:background-image="memberData.referral.image"></i>
            <i class="ml-5">
                <span class="member-name">{{memberData.referral.nickname}}</span>邀你开启捕手美食之旅
            </i>
            <b class="tip-back right"  @click="clickTurn(memberData.homeUrl)"></b>
        </header>
        <swiper :options="swiperOption" v-if="newMember && newMember.length > 0" class="new-tip f-12  swiper-tip" :class="{'new-tip-isapp':isApp}">
            <!-- <ul class="swiper-wrapper"> -->
                <swiperSlide v-for="info in newMember" class="swiper-slide">
                    <p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.5s">
                        <i v-lazy:background-image="info.img"></i>
                        {{info.tip}}
                    </p>
                </swiperSlide>
            <!-- </ul> -->
        </swiper>
        <img src="https://img.gegejia.com/product/340719f198185.jpg">
        <img src="https://img.gegejia.com/product/de8e755b248.jpg">
        <img src="https://img.gegejia.com/product/22f986dad9c78.jpg">
        <img src="https://img.gegejia.com/product/68d91b4bb673.jpg">
        <img src="https://img.gegejia.com/product/22f986db07f61.jpg">
        <div class="save-money f-14">
          <img src="https://img.gegejia.com/product/28a8b7e3c6eb9.jpg">
          <section>
          <marquee scrollAmount = 2 direction = up>
              <p v-for="info in saveMoney">
                  {{info.tip}}
              </p>
          </marquee>
          </section>
        </div>
        <img src="https://img.gegejia.com/product/179b5294099b9.jpg">
        <img src="https://img.gegejia.com/product/68d91b63a75e.jpg">

        <div v-if="listData && listData.length > 0">
            <img src="https://img.gegejia.com/c3d27770eff9.jpg">
            <ul class="product-box clearfix">
                <li v-for="list in listData" @click="clickTurn('/h5/recruit/detail/'+list.productId+tid)">
                    <i v-lazy:background-image="list.images[0]" class="product-tu"></i>
                    <div class="product-info bg-fff">
                        <p v-text="list.title" class="product-title mb-5"></p>
                        <p class="product-price">
                            <i class="col-f00 f-18">&yen;{{list.salesPrice}}</i>
                            <del class="f-12">&yen;{{list.marketPrice}}</del>
                        </p>
                    </div>

                </li>
            </ul>
        </div>
        <div class="list-more f-14 t-c">
            <img src="https://img.gegejia.com/product/11ec218c7bba3.jpg">
            <i @click="clickTurn('/h5/recruit/list'+tid)">查看更多</i>
        </div>
        <div><img v-for="img in groupImgList" v-lazy="img"></div>
   
        <img src="https://img.gegejia.com/product/1d4a8a32d51e2.jpg">
          <section class="member-video">
            
            <iframe frameborder="0" src="https://v.qq.com/iframe/player.html?vid=d06828elrz6&tiny=0&auto=0" allowfullscreen></iframe>
              <!-- <iframe frameborder="0" :src="memberData.memberVideoUrl" allowfullscreen></iframe> -->
          </section>
      </div>
      <div class="member-info-bottom bg-fff t-c">
          <a href="javascript:;" class="member-open-btn col-000 f-18 member-gift bg-85" @click="clickTurn('/h5/recruit/list'+tid)">一键开通</a>
      </div>

    <!--赠品礼包-->
      <div class="gift-box bg-fff" v-show="isTidShow">
          <ul class="member-tuijian bg-fff t-c mb-10 p-relative" v-if="!memberData.referral || memberData.referral == ''">
              <li class="f-16 mb-20">您的邀请人</li>
              <li><input type="tel" v-model.trim="tidVal" placeholder="输入邀请人ID" class="tui-id"></li>
              <li class="close-tb" @click="isTidShow = false"></li>
          </ul>
          <p class="gift-btn col-000 f-18 t-c" @click="openFun()">一键开通</p>
      </div>
      <div class="mask-layer" v-show="isTidShow"></div>
      <b class="back-top" @click="backTop()"></b>
    </div>


      <!--分享-->
      <div class="share-tan col-fff t-c dp-none">
          <p class="share-jt t-r mb-20"><img src="~images/recruit/fx-jt.png"></p>
          <p class="share-tb">点击右上角按钮，发送到聊天或朋友圈</p>
      </div>

      <div class="mask-full"></div>
      <div class="protips t-c col-fff f-14"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
 import ('@/assets/css/recruit/base.css') 
 import ('@/assets/css/recruit/animate.min.css') 
 import ('@/assets/css/recruit/huiyuan.css') 
 import ('swiper/dist/css/swiper.css') 
 //import tools from '@/utils/tools'

/*
 * 通过app链接获得微信验签
 *type=1 会拼上访问链接后面的参数
 * name,val  需要带入下个链接的 name(参数名) val(参数值)
 */
function appLinkStr(url,type,name,val){
    var _refLink = window.location.href,
        _refArr = _refLink.split('?'),
        _refStr = _refArr[1],
        _isApp = _refLink.indexOf('isApp'),
        _reqUrl = url,
        _reqSub = _reqUrl.split('?'),
        _type = type;

    if(_isApp > -1 || (type == 1 && _refStr)){
        if(_reqSub.length > 1 && _reqSub[1].length > 0){
            _reqUrl = url + '&'+_refStr
        }else{
            _reqUrl = url + '?'+_refStr
        }
    }

    if(name && name.length > 0){
        var _strName = ''
        if(GetQueryString(name)){//去除请求参数与_refLink参数重复的字段
            _strName = name + '=' + GetQueryString(name)

            var _strL = _refLink.substring(_refLink.indexOf(name)-1,_refLink.indexOf(name)),
                _strR = _refLink.substring(_refLink.indexOf(_strName)+_strName.length,_refLink.indexOf(_strName)+_strName.length+1)

            if(_strL == '&'){
                _strName = _strL +_strName
            }else if(_strR == '&'){
                _strName = _strName + _strR
            }
            _reqUrl = _reqUrl.replace(_strName,'')
        }

        if((type == 1 && _refStr) || _isApp > -1){
            _reqUrl = _reqUrl + '&'+ name + '=' + val
        }else{
            _reqUrl = _reqUrl + '?'+ name + '=' + val
        }
    }



    return _reqUrl;
}

//监测app跳转h5页面referrer,处理返回
function appBackFun(name){
    var _ref = document.referrer,
        _turnBack = $(name);

    if(_ref != ''){
        _turnBack.click(function(){
            window.history.back();
        })
    }else{
        _turnBack.click(function(){
            turnLink('ggj://redirect');
        })
    }
}

 export default {
   name:"recruitIndex",
   data () {
     return {
      memberData:'',
      listData:'',
      shareData:'',
      vpStatus:0,
      isApp:false,
      isLogin:true,
      isShare:false,
      isTidShow:false,
      isCheck:true,
      tidVal: '',
      rankData:'',
      newMember:[],
      saveMoney:[],
      makeMoney:[],
      groupImgList:[],
      tid: this.GetQueryString('accountid') ? '?accountid='+this.GetQueryString('accountid') : '',
      linkStr:  location.search,
      swiperOption:{
         slidesPerView : "auto",
            spaceBetween : 15,
            freeMode : true
      }
     }
   },
   methods:{
    //url里面拿需要的参数
    GetQueryString (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
            var r = window.location.search.substr(1).match(reg);
            if (r!=null) return (r[2]); return null;
    },
    getData:function(callback){
        var _this = this;
        $.ajax({
            url:appLinkStr('/member/getMemberProductInfo',1),
            type:'post',
            async:false,
            success:function(request){

                if(request.status == 4){//处理微信调用接口缓存授权问题
                    var _link = window.location.href;

                    if(_link.indexOf('?') > -1){
                        window.location.href = _link + '&cache='+Math.round(Math.random()*100);
                    }else{
                        window.location.href = _link + '?cache='+Math.round(Math.random()*100);
                    }
                }

                if(request.status == 1){

                    if(request.data.needRedirect == 1){//后台说处理微信支付相关需要重定向一下
                        window.location.href = request.data.redirectUrl
                        return false
                    }

                    _this.memberData = request.data;
                    _this.listData = request.data.memberProductList;
                    _this.shareData = request.data.shareData;
                    _this.vpStatus = request.data.vpStatus;
                    _this.groupImgList = request.data.memberGroupImageList;
                    if(request.data.topMemberInfo) {
                        _this.newMember = request.data.topMemberInfo.newMembers;
                        _this.saveMoney = request.data.topMemberInfo.saveMoney;
                        _this.makeMoney = request.data.topMemberInfo.makeMoney;
                    }


                    try {//微信分享
                        brandShareFun(_this.shareData)
                    } catch (err) {
                    }

                    callback && callback();
                }

            }
        })
    },
    getRank:function(){
        var _this = this

        $.ajax({
            url:_rnakUrl,
            type:'POST',
            async:false,
            success:function(data){
                _this.rankData = data.ranks
            }
        })
    },
    clickTurn:function(url){
        window.location.href = url;
    },
    shareTan:function () {//会员开通页面分享
        var _this = this;

        var _shareBox = $(".share-tan"),
            _appShareBtn = $('.share-top-tb'),
            _body = $('html,body'),
            _maskFull = $(".mask-full");

        function shareShow(){//分享浮层展示，禁止滚动
            _shareBox.show();
            _maskFull.show();
            _body.css({height:'100%',overflow:'hidden'});
            setTimeout(function(){//处理返回页面出现不置顶情况
                $(window).scrollTop(0);
            },200)
        }

        if(_this.isShare){
            if(_this.isApp){
                window.location.href = _this.shareData;
            }else{
                shareShow();
            }
        }

        _shareBox.click(function(){
            _shareBox.hide();
            _maskFull.hide();
            _body.css({height:'auto',overflow:'auto'})
        })

        _appShareBtn.click(function(){
            window.location.href = _appShareUrl;
        })
    },
    openBtn:function(){
        var _this = this

        if(!loginLoad()){//判断是否登录
            loginFun()
            return false;
        }
        if(_this.isCheck){

            if(_this.memberData.referral && _this.memberData.referral != ''){
                _this.openFun()
            }else{
                _this.isTidShow = true
            }

        }
    },
    openFun:function(){
        var _this = this

        var _giftUrl = appLinkStr('/s2/payment.html');

        if(!_this.memberData.referral || _this.memberData.referral == ''){
            if( _this.tidVal == ''){
                showTipMsg('请咨询你认识的店主获取邀请ID');
                return false;
            }

            $.ajax({
                url:appLinkStr('/member/validationExtension'),
                type:'post',
                data:{
                    recommendAccountId:_this.tidVal
                },
                success:function(data){
                    if(data.status == 1){
                        if (_this.isApp == 1) {
                            turnLink(_giftUrl + '&accountid=' + _this.tidVal);
                        } else {
                            turnLink(_giftUrl + '?accountid=' + _this.tidVal);
                        }
                    }else{
                        showTipMsg(data.errorMessage);
                    }
                }
            })
        }else{
            var recommendAccountId = thisGetQueryString('accountid');
            if (!recommendAccountId || recommendAccountId.length <= 0) {
                recommendAccountId = this.GetQueryString('recommendAccountId');
            }
            if (recommendAccountId && recommendAccountId.length > 0) {
                turnLink(_giftUrl + '?accountid=' + recommendAccountId);
            } else {
                turnLink(_giftUrl);
            }
        }
    },
    giftSwiperTu:function(_class){
        // var giftSwiper = new Swiper(_class,{
        //     slidesPerView : "auto",
        //     spaceBetween : 15,
        //     freeMode : true
        // });
        console.log("_class:",_class);
    },
    swiperTip:function(){
        // var tipSw = new Swiper('.swiper-tip',{
        //     autoplay : 3000,
        //     onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        //         swiperAnimateCache(swiper); //隐藏动画元素
        //         swiperAnimate(swiper); //初始化完成开始动画
        //     },
        //     onSlideChangeEnd: function(swiper){
        //         swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        //     }
        // });
    },
    swiperMake:function(){
        // var makeSw = new Swiper('.swiper-make',{
        //     slidesPerView : "10",
        //     spaceBetween : 10,
        //     direction : 'vertical',
        //     autoplay : 1,
        //     freeMode : true,
        //     freeModeSticky : true,
        //     loop:true,
        //     speed:1000
        // });
    },
    backTop:function(){
        var _box = document.querySelector('.member-view')
        _box.scrollTop = 0;
    }
  },
  watch:{
      tidVal:function(){
          if(!_reg.test(this.tidVal) || this.tidVal.length > 11){
              var _val = this.tidVal.substring(0,this.tidVal.length -1);
              this.tidVal = _val
          }
      }
  },
  mounted:function(){
      this.shareTan();
      appBackFun(".promotion-back");
      this.swiperMake();
      this.swiperTip();

      var _giftTopBox = $(".gift-top-swiper"),
      _giftTopInfo = _giftTopBox.find(".swiper-slide");
      _giftTopInfo.width(_giftTopBox.width()/2.5);
      this.giftSwiperTu(_giftTopBox);

      var _box = document.querySelector('.member-view')

      _box.onscroll = function(){
          var _sT = _box.scrollTop;
          var _bT = document.querySelector('.back-top');
          if(_sT > 500){
              _bT.style.display="block"
          }else{
              _bT.style.display="none"
          }
      }
  },
  created:function(){
      var _this = this;
      _this.getData()
      if(window.location.href.indexOf('isApp') > 0){
          _this.isApp = true;
      }
      if(window.location.href.indexOf('openShare=1') > 0){
          _this.isShare = true;
      }
  }
 }
</script>

<style lang="less" scoped>

</style>
