<style lang="less" scoped>
.box {
  min-height: 100%;
  padding-top: 20px;
  background: #1a1a1a;
}
.zebraIndex {
  padding-bottom: 50px;
}
.zebraLogo {
  width: 345px;
  height: 22px;
  margin: 0px 0 20px 15px;
  background: url("~images/home/logo.png") no-repeat;
  background-size: 135px 22px;
}
.search_box {
  width: 303px; //345-42
  height: 40px;
  margin: 0 0 20px 15px;
  color: #5d5d5d;
  border: 1px solid #5d5d5d;
  border-radius: 4px;
  background: url("~images/home/search.png") no-repeat;
  background-size: 32px;
  background-position: 6px 4px;
  font-size: 16px;
  line-height: 40px;
  padding-left: 42px;
}
.zebraIndex__member {
  margin-left: 15px;
  overflow: hidden;
  // background:url('~images/home/memberbg.png') no-repeat;
  // background-size:100%;
  .zebraIndex__member--isMember {
    position: relative;
    width: 345px;
    height: 182px;
    //background:red;
    background: url("~images/home/nomemberbg.png") no-repeat;
    background-size: 100%;
    // margin:100px 0 0 25px;
    font-size: 12px;
    .name {
      font-size:10px;
      color: #feff00;
      font-weight: bold;
    }
    .number {
      font-size: 20px;
      color: #ffffff;
      letter-spacing: 0;
      margin-top: 6px;
    }
    .date {
      font-size: 10px;
      color: #ffffff;
      letter-spacing: 0;
    }
  }
  .zebraIndex__member--noMember {
    width: 345px;
    height: 182px;
    background: url("~images/home/nomemberbg.png") no-repeat;
    background-size: 100%;
    // margin:80px 0 0 25px;
    .save {
      font-size: 15px;
      color: #fff;
      font-weight: bold;
    }
    .more {
      font-size: 12px;
      color: #fff;
      opacity: 0.8;
    }
    .dredge {
      width: 64px;
      height: 24px;
      margin: 18px 0 0 0;
      border-radius: 12px;
      font-size: 12px;
      font-weight: bold;
      text-align: center;
      line-height: 24px;
      color: #feff00;
      border: 1px solid #feff00;
    }
  }
  .start {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 50px;
    height: 50px;
    margin-left: -25px;
  }
}

.zebraIndex__vip__box {
  margin: 30px 0 14px 0px;
  .zebraIndex__vip__img {
    display: inline-block;
    width: 106px;
    height: 90px;
    margin: 0 0px 14px 15px;
    color: #d4c6ac;
    border-radius: 4px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    .bTitle {
      margin: 10px 0 0 10px;
      font-size: 14px;
      line-height: 20px;
      font-weight: bold;
    }
    .sTitle {
      margin: 0 0 0 10px;
      font-size: 7px;
    }
  }
}

.zebraIndex__ticket {
  //margin: 0 15px;
  height: 120px;
  border-radius: 4px;
  overflow: hidden;
  .zebraIndex__ticket__img {
    width: 345px;
    height: 120px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
.ismemberInfo {
  padding: 100px 0 0 25px;
}
.nomemberInfo {
  // margin:80px 0 0 25px;
  padding: 80px 0 0 25px;
}
.headImageUrl {
  position: absolute;
  right: 35px;
  top: 27px;
  width: 116px;
  border-radius: 5px;
  height: 129px;
}
.fuchuang {
  position: fixed;
  bottom: 90px;
  right: 15px;
  z-index: 100;
  width: 62px;
  height: 62px;
  //transition: all ease 5ms;
}
.fuchuang-animate {
  right: -31px;
}
.layer-full {
  position: fixed;
  z-index: 101;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.activity-tan {
  position: fixed;
  z-index: 102;
  left: 50%;
  top: 50%;
  width: 70%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: -0.6rem;
  text-align: center;
}

.activity-tan img {
  box-sizing: border-box;
}
.close-tb {
  position: absolute;
  z-index: 5;
  left: 50%;
  bottom: -1.066667rem;
  width: 0.666667rem;
  margin-left: -0.333333rem;
  text-align: center;
}

.close-tb:after {
  content: "";
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  background: url(~images/home/close-white.png) no-repeat;
  background-size: contain;
}
</style>
<style>
.mint-toast {
  background: #fff;
  color: #000;
}
</style>
<template>
  <div class="box">
    <div class="zebraIndex">
       <!--title-->
      <div class="zebraLogo">

      </div>
       <!--search-->
      <div class="search_box" @click="goSearch">
        {{searchBkWord}}
      </div>
      <!--会员卡-->
      <div class="zebraIndex__member">
        <div class="zebraIndex__member--isMember"  v-if="memberInfo.userInfo">
          <div class="ismemberInfo">
            <p class="name">{{memberInfo.userInfo.nickname}}</p>
            <p class="number">ID:{{memberInfo.userInfo.accountId}}</p>
            <p class="date">DATE{{memberInfo.userInfo.createTime}}</p>
          </div>
          <!-- <img v-lazy="memberInfo.userInfo.headImageUrl" class="headImageUrl"> -->
        </div>                
        <div class="zebraIndex__member--noMember"  v-else>
          <div class="nomemberInfo">
            <p class="save">{{memberInfo.introInfo[0]}}</p>
            <p class="more">{{memberInfo.introInfo[1]}}</p>
            <div class="dredge" @click="dredge(memberPurchaseAddress)">立即开通</div>
          </div>
          
        </div>
        
      </div>
      
      <!--vip尊享-->
      <div class="zebraIndex__vip" v-if="homeIconList && homeIconList.length >  0" >
          <ul class="zebraIndex__vip__box clearfix">
            <li class="zebraIndex__vip__img fl"  
                v-for="(item,index) in homeIconList" 
                :key="index"
                :style="{width:nowWidth}"
                @click="goUrl(item)" > 
                <img v-lazy="item.image">
            </li>
          </ul>
      </div>



    
      <!--轮播图-->
      <div class="zebraIndex__ticket" v-if="bannerList && bannerList.length > 0">
        <SwiperBanner :list-img="bannerList" 
                      :isMember="isMember"
                      v-if="bannerList.length > 0">
        </SwiperBanner>
      </div>

      <!--权益-->
      <right :memberRights="memberRights" :isMember="isMember" v-if="memberRights && memberRights.length > 0"></right>

      <!--爆品秒杀-->
      <div class="zebraIndex__skill" v-if="IndexNewhotData && IndexNewhotData.productList.length>0">
        <memberSecKill 
                    :listData="IndexNewhotData"
                    :isMember="isMember"
                    v-if="IndexNewhotData && IndexNewhotData.productList.length>0">
        </memberSecKill>
      </div>

    </div>

    <!--浮窗-->                                                               
    <div class="fuchuang" v-if="floatingWindow" 
                          :class="{'fuchuang-animate':animate}"
                          @click="goUrl(floatingWindow)">
                          <!-- v-lazy="{backgroundImage:'url(' +floatingWindow.image + ')'}" -->
      <img  :src="floatingWindow.image">
    </div>

     <!--广告图活动弹框-->
      <div class="activity-tan t-c" 
           v-for="(info,index) in advertised"
           :key="index"
           v-if="advertised && index == 0 && advertisedType">
          <i class="close-tb" @click="advertisedType = false"></i>
          <img :src="info.image"  @click="clickTurn(info.url)">
      </div>
      <!--黑色半透明层-->
      <div class="layer-full" v-if="advertisedType"></div>

    <footBar bar-tag='member'></footBar>
  </div>
</template>
<script>
// @ is an alias to /src
import tool from "@/utils/tools";
import footBar from "@/components/footBar";
import memberSecKill from "@/components/memberSecKill";
import api from "@/api/home";
import Swiper from "swiper";
import SwiperBanner from "@/components/swiperBanner";
import right from "@/components/right";
import auth from "@/utils/auth";
import { Toast } from "mint-ui";

import("swiper/dist/css/swiper.css");

export default {
  name: "home",
  data() {
    return {
      animate: false,
      advertisedType: false,
      advertised: [],
      num: 0,
      bannerList: [],
      homeIconList: [],
      floatingWindow: {},
      memberPurchaseAddress: "",
      IndexNewhotData: "",
      nowWidth: "106px",
      memberRights: [],
      isMember: false,
      memberInfo: {
        introInfo: [],
        userInfo: {}
      },
      searchBkWord: "",
      time1: 0,
      time2: 0,
      timer: null
    };
  },
  computed: {},
  mounted() {
    this.getHomeBullet();
    this.getHotData();
    this.getUserInfoAndRights();
    window.addEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      this.animate = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(this.isScrollEnd, 100);
      this.time1 =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    isScrollEnd() {
      this.time2 =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.time2 == this.time1) {
        this.animate = false;
      } else {
        this.animate = true;
      }
    },
    activityTan: function(id, repeat) {
      // 广告图
      var _id = id,
        _repeat = repeat,
        _this = this;

      if (localStorage.activityId) {
        // 不同id（说明换商品了）-----更新缓存数据
        var _activityId = localStorage.activityId;

        if (_id != _activityId) {
          _this.advertisedType = true;
          localStorage.activityId = _id;
          localStorage.activityRepeat = _repeat;
        } else {
          if (_repeat == 1) {
            _this.advertisedType = true;
          } else {
            _this.advertisedType = false;
          }
        }
      } else {
        // 首次进入记录id、repeat
        _this.advertisedType = true;
        window.localStorage.setItem("activityId", _id);
        window.localStorage.setItem("activityRepeat", _repeat);
      }
    },
    clickTurn: function(url, position, index, id, type) {
      if (!url) return;
      window.location.href = url;
    },
    dredge(url) {
      if (!auth.isLoggedIn()) {
        auth.login(this.$route.fullPath);
        return false;
      }
      window.location.href = url;
    },
    goUrl(slide) {
      const url = slide.webUrl;
      const type = slide.type;
      const appOnly = slide.appOnly;
      const desc = slide.desc ? slide.desc:"下载斑马会员App立享会员特权";
      const memberOnly = slide.memberOnly;
      const memberMsg = slide.memberMsg ? slide.memberMsg : '仅会员支持该会员权益';
 
      if (type && type == 4) {
        Toast(desc);
        return false;
      }
    
      if (appOnly) {
        Toast(desc);
        return false;
      }

      if(type && type == 27){
         Toast('仅限斑马会员app用户使用');
         return false;
      }
      
      if(memberOnly){
        if(!auth.isLoggedIn()){
          auth.login(this.$route.fullPath);
          return false;
        }else{
          if(this.isMember){
              window.location.href = url;
          }else{
              Toast(memberMsg);
          }
        }
      }else{
        window.location.href = url;
      }
     
      // if (!auth.isLoggedIn()) {
      //   auth.login(this.$route.fullPath);
      //   return false;
      // } else {
      //   if ((memberOnly && this.isMember) || !memberOnly) {
      //     window.location.href = url;
      //   } else {
      //     Toast(memberMsg);
      //   }
      //};

      // if (type && type == 4) {
      //   Toast(desc);
      //   return false;
      // }
      // if (type == 25 && appOnly) {
      //   Toast(desc);
      //   return false;
      // }
      // window.location.href = url;
    },
    goSearch() {
      this.$router.push({ path: "/search" });
    },
    changNum(num) {
      let clientWidth = document.body.clientWidth; //屏幕宽度
      let marginWidth = (num + 1) * 15; //marigin 区域宽度
      let width = (clientWidth - marginWidth) / num;
      this.nowWidth = width + "px";
    },
    //秒杀数据
    getHotData() {
      api.getHotList().then(res => {
        this.IndexNewhotData = res.data;
        this.isMember = this.IndexNewhotData.isMember == 0 ? false : true;
      });
    },
    getHomeBullet() {
      api.getHomeBullet().then(response => {
        if (response.status == 1) {
          let data = response.data;
          this.advertised = data.homeBulletList;
          if (data.homeBulletList && data.homeBulletList.length > 0) {
            this.activityTan(
              this.advertised[0].id,
              this.advertised[0].isRepeat
            );
          }
        } else {
          Toast(response.message);
        }
        //this.advertised = this.homeData.bullets
      });
    },

    //userInfo
    getUserInfoAndRights() {
      api.getUserInfoAndRights().then(res => {
        if (res.status == 1) {
          let data = res.data;
          this.bannerList = data.bannerList;
          this.floatingWindow = data.floatingWindowList[0];
          this.homeIconList = data.memberIconList;
          this.memberRights = data.memberRights;
          this.memberPurchaseAddress = data.memberPurchaseAddress;
          this.memberInfo = data.memberInfo;
          this.num = data.numOfIcon;
          this.searchBkWord = data.searchBkWord;
          this.changNum(this.num);
          if (this.memberInfo.userInfo) {
            this.isMember = data.memberInfo.userInfo;
          } else {
            this.introInfo = data.memberInfo.introInfo;
          }
        }
      });
    }
  },
  components: {
    footBar,
    memberSecKill,
    SwiperBanner,
    right
  }
};
</script>
