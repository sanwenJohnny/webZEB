<style scoped lang="less">
/*public*/
.left{float: left}
.right{float: right;}
.t_c{text-align: center;}
.clearfix:after{content:"";display: block; clear: both;}
.body-auto{max-width:750px; margin: 0 auto}
.fw-b{font-weight:bold;}

	/*font-size*/
.f-0{font-size:0;}
.f-10{font-size:10px;}
.f-12{font-size: 12px}
.f-13{font-size: 13px}
.f-14{font-size: 14px}
.f-15{font-size: 15px}
.f-16{font-size: 16px}
.f-18{font-size:18px}
.f-20{font-size: 20px}
.f-24{font-size: 24px}
.f-30{font-size: 30px}

	/*color/background-color*/
.col-fff{color:#fff}
.col-e0{color:#e0e0e0}
.col-aaa{color:#aaa}
.col-ccc{color:#ccc}
.col-888{color:#888}
.col-555{color:#555}
.col-4d{color:#4d4d4d}
.col-333{color:#333}
.col-000{color:#000}
.col-06f{color:#06f}
.col-f00{color:#f00}
.col-0b0{color:#0b0}
.col-gold{color:#c59f51}
.bg-fff{background:#fff}
.bg-f00{background:#f00}
.bg-000{background:#000}
.bg-4d{background:#4d4d4d}
.bg-85{background:#858585}
.bg-f0{background:#f0f0f0}

	/*margin/padding*/
.mt-5{margin-top:5px}
.mt-10{margin-top:10px}
.mt-15{margin-top:15px;}
.mt-20{margin-top:20px;}
.mt-30{margin-top:30px;}
.mt-50{margin-top:50px;}

.mb-5{margin-bottom:5px}
.mb-8{margin-bottom:8px}
.mb-10{margin-bottom:10px}
.mb-15{margin-bottom:15px}
.mb-20{margin-bottom:20px}
.mb-30{margin-bottom:30px}

.ml-5{margin-left:5px}
.ml-10{margin-left:10px}
.ml-20{margin-left:20px}

.pt-10{padding-top:10px;}
.pt-50{padding-top:50px;}
.pb-10{padding-bottom:10px;}
.pb-20{padding-bottom:20px;}
.pb-50{padding-bottom:50px;}







/*appbar*/
.pt-45{padding-top:45px;}
.app-bar{position:fixed; z-index: 100;left:0;top:0;width:100%;height:45px;line-height:45px;padding:0 10px;box-sizing: border-box}
/*.app-bar .pin-back{width:3rem;height:4.5rem;line-height: 4.8rem;background:url(../../pages/images/header_app_return.png) no-repeat .6rem center;background-size:1.2rem auto;}
.app-bar b{position:absolute; z-index: 5;left:50%;top:50%;-webkit-transform: translate(-50%,-50%); letter-spacing: .1rem;font-weight: normal}
.app-bar .share-top-tb{width:3rem;height:3rem;background:url(../../scripts/images/share_white_bkg.png) no-repeat center;background-size:2.8rem auto;margin-top:.8rem;}
*/


.rank-banner {
  padding-top: 40%;
  background: url("https://img.gegejia.com/product/1d47f5e48ff32.jpg") no-repeat
    center;
  background-size: cover;
}
.nav-box {
  z-index: 19;
  left: 50%;
  top: 0;
  width: 100%;
  max-width: 750px;
  height: 40px;
  overflow: hidden;
  background: #fff;
  font-size: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  font-size: 0;
  transform: translate(-50%, 0);
}
.nav-box:after {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 0;
  content: "";
  vertical-align: top;
  display: flex;
}
 .swiper-slide{
  width: auto;
  height: 26px;
  line-height: 24px;
  font-size: 14px;
  box-sizing: border-box;
  color: #797979;
  vertical-align: middle;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
}
 .swiper-slide{
  height: 40px;
  padding-top: 8px;
}
.nav-box .on span,
.nav-info .on span {
  border-bottom: 2px solid #000;
  color: #000;
}

.nav-outer {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 9;
  height: 40px;
  background: #fff;
  font-size: 0;
  box-sizing: border-box;
}
.nav-app {
  top: 45px;
}
.nav-outer.scrollType {
  position: relative;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 750px;
  transform: translate(-50%, 0);
}
.nav-outer .nav-box {
  padding-right: 36px;
}
.nav-outer .nav-box a {
  margin: 0 10px;
}
.nav-top {
  height: 40px;
  line-height: 40px;
  background: #fff;
  padding-left: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}
.arrow-down {
  position: absolute;
  z-index: 1000;
  right:0;
  top: 0;
  height: 40px;
  width: 36px;
  background: #fff;
  text-align: center;
  box-shadow: -5px 0 5px rgba(255, 255, 255, 0.6);
}
.arrow-down img {
  width: 42%;
  margin-top: 16px;
  transform: rotate(0);
}
.arrow-down.select img {
  transform: rotate(180deg);
}
.nav-info {
  width: 100%;
  font-size: 0;
}
.nav-info a {
  width: 33%;
  margin: 0 0 15px;
  font-size: 14px;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
}

.nav-outer ul {
  position: absolute;
  z-index: 35;
  top: 0;
  left: 0;
  width: 100%;
  color:#666;
  background: #fff;
}

.list-box li {
  padding: 20px 10px;
  margin-bottom: 1px;
}
.rank-num i {
  width: 36px;
}
.rank-num b {
  height: 14px;
  margin: 5px 0 8px;
  font-weight: normal;
  font-size: 10px;
  color:#f00;
}
.rank-hot {
  padding-left: 12px;
  background: url(~images/shop/hot-red.png) no-repeat left center;
  background-size: 8px auto;
}
.list-tu {
  width: 80px;
  height: 80px;
  // background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat
  //   center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}
.rank-info {
  margin-left: 136px;
}
.rank-info p {
  height: 60px;
}
.m-price {
  color: #c59f51;
}
.m-price em {
  height: 12px;
  padding: 0 2px;
  background: #d7c283;
  vertical-align: text-top;
  margin-top: 1px;
}
a{
  color:#666;
}
.trans{
  transform:translate3d(0, 0, 0)
}
.vip-img{
  width:22px;
  height:13px;
}
</style>
<template>
  <div class="body-auto f-14 rank-box" :class="{'pt-45':isApp}" v-cloak>
    <div class="app-bar bg-000 col-fff" v-show="isApp">
        <a :href="topBack" class="pin-back col-fff f-14"></a>
        <b class="f-18">排行榜</b>
        <i @click="clickTurn(shareData)" class="right share-top-tb" v-if="shareData"></i>
    </div>
    <p class="rank-banner" ref="banner"></p>
    <!--导航折叠模式-->
    <div class="nav-outer" :class="{'scrollType':!isSticky,'nav-app':isApp}" ref="navBox">
        
        <swiper class="nav-box" :options="swiperOption" ref="mySwiper">
            <swiperSlide class="t_c f-14" 
                         ref="swiperSlide"  
                         v-for="(list,index) in rankData.categoryList"   
                         :key="index"
                         :class="{'on':isOn == index}" @click="navFun(index,list.id)"
                         :data-hash="gernerateIndex(index+1)">
                 <a href="javascript:;"  
                   :class="{'on':isOn == index}" @click="navFun(index,list.id)">
                    <span v-text="list.name"></span>
                </a>
            </swiperSlide>
        </swiper>
      
        <i class="arrow-down" @click="isShow = !isShow"><img src="http://yangege.b0.upaiyun.com/product/687fd253ea19.png"></i>
        
        <ul class="f-14" v-show="isShow">
            <li class="nav-top">切换栏目</li>
            <li class="nav-info">
                <a href="javascript:;"
                   :key="index"
                   v-for="(list,index) in rankData.categoryList" 
                   :class="{'on':isOn == index}" 
                   @click="isShow = false,navFun(index,list.id)">
                    <span v-text="list.name"></span>
                </a>
            </li>
        </ul>
    </div>

    <ul class="list-box">
        <li class="clearfix bg-fff" 
            v-for="(list,index) in listData"
            :key="index" 
            @click="clickTurn(list.url)">
            <span class="left t_c  rank-num">
                <i class="f-24" v-text="list.ranking">{{list.ranking}}</i><br>
                <b v-if="list.rankState == 0" class="col-f00">new</b>
                <b v-else-if="list.rankState == 1">-</b>
                <b v-else-if="list.rankState == 2" class="col-f00">↑ {{list.rankNum}}</b>
                <b v-else-if="list.rankState == 3"> {{list.rankNum}}</b>
                <br>
                <em class="rank-hot col-f00">{{list.heat}}</em>
            </span>
            <i class="list-tu left ml-10" v-lazy:background-image = 'list.image'></i>
            <!-- <img class="list-tu left ml-10" v-lazy= 'list.image'>  -->
            <div class="rank-info">
                <p v-text="list.name"></p>
                <b class="f-16 fw-b">￥{{list.price}}</b>
                <i class="m-price f-12" v-if="list.memberPrice">
                    ￥{{list.memberPrice}}
                    <img src="~/images/home/vip.png" alt="" class="vip-img">

                    <!-- <em class="col-fff f-10">会员价</em> -->
                </i>
            </div>
        </li>
    </ul>

    <p class="list-loading t_c mt-30" v-if="loading">努力加载中…</p>
    <p class="list-end t_c mt-30" v-if="listEnd">已显示全部内容</p>
    <p class="list-empty t_c mt-30" v-if="listEmpty">还没有相关数据哦~</p>
    <p class="list-empty t_c mt-30" v-if="listTip" v-text="tipText"></p>
    <p class="list-error t_c mt-30" v-if="requestError">请求出错，请稍候再试~</p>
    <input type="hidden" ref="historyId">
    <input type="hidden" ref="historyScroll">
</div>
</template>
<script>

// import { mapState, mapActions } from 'vuex'
// import localstorage from '@/utils/storage-lite'
//import search from './blocks/search'
import api from '@/api/shop-ranklist'
import { swiper, swiperSlide } from "vue-awesome-swiper"
import ('swiper/dist/css/swiper.css')

// import { Ganalytics } from '@/utils/ga'



 var   _page = 1,
        _pageSize = 10,
        _totalCount = 0,
        _win = window,
        _bodyH = 0,
        _scrollH = 0,
        _arrType = false,
        _ref = document.referrer;
   
 

export default {
  name: 'fl',
  computed: {
    // ...mapState('modSm', ['sFirstCateGoryList', 'sFirstCateGoryDetail'])
    swiper() {
		      return this.$refs.mySwiper.swiper;
		    }

  },
  components: {
    //search
    swiper,
    swiperSlide
  },
  data () {
    return {
      rankData: '',
      listData: [],
      shareData: '',
      categoryId: this.GetQueryString('categoryId')
        ? this.GetQueryString('categoryId')
        : 0,
      categoryIndex: 0,
      isApp: this.GetQueryString('isApp'),
      request: false,
      loading: false,
      listEnd: false,
      listEmpty: false,
      listTip: false,
      tipText: '',
      requestError: false,
      navSwiper: '',
      isShow: false,
      isOn: 0,
      isSticky: false,
      init: true, // 初始化字段，用于避免多次处理返回记录位置事件
      topBack: _ref ? 'javascript:history.back()' : 'ggj://redirect',
      swiperOption:{
         notNextTick: true,
        initialSlide:1,
        slidesPerView: 'auto',
        freeMode: true,
        freeModeSticky: true,
        slideToClickedSlide: true,
        hashNavigation: true,
        setWrapperSize :true

      }
    }
  },
  mounted () {
    window.addEventListener('scroll',this.winScroll)
  },
  created () {
    this.getData()
  },
  methods: {
    test () {
      alert(1);
    },
    gernerateIndex: function (index){
      return "slide" +index
   },
     //url里面拿需要的参数
    GetQueryString (name)  {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
            var r = window.location.search.substr(1).match(reg);
            if (r!=null) return (r[2]); return null;
    },
    getData: function () {
      var _this = this
      api.rankIndex().then(data => {
      
       
        if (data.status == 1 ) {
         
          _this.rankData = data.data
       
          if (!_this.isApp) {
            // brandShareFun(data.jsSdk)
          } else {
            // _this.shareData = data.jsSdk
          }

          if (_this.$refs.historyId.value != '') {
            // 判断是否记录上一次选中id 不为空说明是页面返回 定位到id选项
            _this.categoryId = _this.$refs.historyId.value
          }

          if (_this.categoryId == 0) {
            _this.categoryId = data.data.categoryList[0].id
          } else {
            _this.rankData.categoryList.map(function (item, i) {
              if (item.id == _this.categoryId) {
                _this.categoryIndex = _this.isOn = i
                _this.arrType = true
              }
            })
            if (!_this.arrType) {
              _this.categoryId = data.categoryList[0].id
            }
          }

          _this.getList()
          _this.$nextTick(function () {
            _this.navSwiperFun()
          })
        }
      })
    },
    getList: function (type) {
      // type=1 翻页
      let _this = this
      _this.init = true
      let params = {
           categoryId:this.categoryId 
      };
      api.salesRanking(params).then(data => {
        _this.loading = false
      
        if (data.status == 1) {
          if (type == 1) {
            _this.listData = _this.listData.concat(data.productList)
          } else {
            if (data.data.productList.length <= 0) {
              _this.listEmpty = true
              return false
            }
            _this.listData = data.data.productList

            if (_this.init) {
              _this.$nextTick(function () {
                if (_this.$refs.historyScroll.value != '') {
                  window.scrollTop(_this.$refs.historyScroll.value)
                }
              })
              _this.init = false
            }
          }
        } else {
          _this.listData = []
          _this.listTip = true
          _this.tipText = data.message
        }
      })
    },
    scrollPage: function () {
      // 暂无翻页、留待后用
      let _this = this

      window.scroll(function () {
        // 分页-下拉加载
        _scrollH = window.scrollTop() + window.height()

        if (
          _scrollH > _bodyH - 20 &&
          !_this.request &&
          _this.listData.length >= _pageSize
        ) {
          if (_page * _pageSize < _totalCount) {
            _page += 1
            _this.request = true
            _this.loading = true
            _this.getData()
          } else {
            _this.loading = false
            _this.listEnd = true
          }

          _this.requestError = false
        }
      })
    },
    clickTurn: function (url) {
      window.location.href = url
    },
    navSwiperFun: function () {
       this.navSwiper  = this.$refs.mySwiper.swiper;
      this.$refs.mySwiper.swiper.slideTo(this.categoryIndex,100,false)
    },
    navFun: function (index, id) {
      
      var _this = this
      window.scroll(0,0);
      _this.loading = true
      _this.listEmpty = false
      _this.listTip = false
     // _this.navSwiper.destroy(false) // 销毁上一个swiper

      _this.categoryId = id
      _this.isOn = _this.categoryIndex = index
      _this.$refs.historyId.value = id
      
      
      _this.navSwiperFun()
      _this.getList()
    },
    winScroll: function () {

      this.$nextTick(function(){
        let _this = this
        

        let _navTop = _this.$refs.banner.offsetHeight
        let _scrollH =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
       
          if (_scrollH >= _navTop) {
 
            // 页面滚动处理导航
            _this.$refs.navBox.style.position = 'fixed'
            //_this.$refs.banner.style.marginBottom = '4rem'

            if (_this.isApp) {
             // _this.$refs.navBox.style.top = '4.5rem'
            }
          } else {
          
            _this.$refs.navBox.style.position = 'relative'
            _this.$refs.banner.style.marginBottom = 0

            if (_this.isApp) {
              _this.$refs.navBox.style.top = 0
            }
          }
      });
  
       
      

    
       

      
     
    }
  }
}
</script>
