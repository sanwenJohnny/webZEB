<template>
  <div class="body-auto hot-list-box" :class="{'pt-45':isApp}">
    <div class="app-bar bg-000 col-fff" v-show="isApp">
        <a href="javascript:;" class="bar-back col-fff f-14" @click="clickTurn('ggj://redirect')"></a>
        <b class="f-18">热门话题列表</b>
        <i @click="clickTurn(shareData)" class="right share-top-tb" v-if="shareData"></i>
        <!-- <i @click=clickTurn('ggj://redirect/typeCommon/{"type":6}') class="right share-top-tb" v-else></i> -->
    </div>
    <ul class="hot-list-info" v-infinite-scroll="scrollFun" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <li class="clearfix  bg-fff" v-for="(list,index) in listData" :key="index" @click="clickTurn(list.infoUrl)">
            <i class="hot-list-img left" v-lazy:background-image="list.image">
                <i class="hot-tag f-12 t_c" v-if="list.icon == 1">活动</i>
            </i>
            <div class="hot-list-content">
                <h1 class="f-16 fw-n" v-text="list.title"></h1>
                <p class="col-888 mt-5" v-text="list.desc"></p>
                <p class="col-888 mt-5" v-text="list.dynamicNum+'条动态'"></p>
            </div>
        </li>
    </ul>
    <p class="list-loading t_c" v-if="loading">努力加载中…</p>
    <p class="list-end t_c" v-if="!ismore">已显示全部内容</p>
    <p class="list-empty t_c" v-if="listEmpty">还没有相关数据哦~</p>
    <!-- <p class="list-error t_c" v-if="requestError">请求出错，请稍候再试~</p> -->
</div>
</template>
<script>
import { Toast, InfiniteScroll } from 'mint-ui'
import api from '@/api/fx'
import '@/assets/css/fx.css'
import tool from '@/utils/tools'
export default {
  name: 'hotlist',
  data () {
    return {
      listData: [],
      shareData: '',
      isApp: tool.isApp,
      login: 0,
      loading: false,
      listEmpty: false,
      page: 0,
      ismore: 1
    }
  },
  methods: {
    getData (callback) {
      // var _this = this;
      let data = {
        page: this.page,
        pageCount: 10
      }
      api.hotTopic(data).then(res => {
        let data = res.data
        this.loading = false
        // wxShouQuan(_data.status); //处理微信调用接口缓存授权问题
        if (res.status == 1) {
          this.listData = this.listData.concat(data.hotTopicList)
          this.shareData = data.shareLink
          // this.login = data.isLogin
          if (data.hotTopicList.length <= 0 && this.page == 1) {
            this.listEmpty = true
          }
          let totalPgae = Math.ceil(data.totalCount / 10)
          if (this.page >= totalPgae) {
            this.ismore = 0
          } else {
            this.ismore = 1
          }
          callback && callback()
        }
      })
    },
    scrollFun () {
      if (this.ismore == 1) {
        this.isloading = true
        this.page++
        this.getData()
      }
      // _win.scroll(function() {
      //   //分页-下拉加载
      //   _scrollH = _win.scrollTop() + _win.height();
      //   if (
      //     _scrollH > _bodyH - 20 &&
      //     !_this.request &&
      //     _this.listData.length >= _pageSize
      //   ) {
      //     if (_page * _pageSize < _totalCount) {
      //       _page += 1;
      //       _this.request = true;
      //       _this.loading = true;
      //       _this.getData();
      //     } else {
      //       _this.loading = false;
      //       _this.listEnd = true;
      //     }
      //     _this.requestError = false;
      //   }
      // });
    },
    clickTurn (url) {
      //this.$router.push({ path: url })
      window.location.href = url
    }
  },
  mounted () {
    // _this.scrollPage()
    // if (window.location.href.indexOf("isApp") > 0) {
    //   _this.isApp = true;
    // }
    // appBackFun('.pin-back')
  },
  created () {
    // var _this = this;
    // this.getData(() => {
    //   // brandShareFun(_this.shareData);
    // })
  }
}
</script>
<style lang="less" scoped>
.pt-45{
  padding-top:45px;
}
.app-bar {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  /*border-bottom:1PX solid #e0e0e0;*/
  box-sizing: border-box;
  background: #000;

  .bar-back {
    width: 30px;
    height: 45px;
    line-height: 48px;    
    background: url(~images/refund/arrow-left-white.png) no-repeat 6px center;
    background-size: 12px auto;
  }

  b {
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    letter-spacing: 1px;
    font-size: 18px;
    color:#fff;
  }

  .share-top-tb {
    width: 30px;
    height: 30px;
    background: url(~images/refund/share-icon.png) no-repeat center;
    background-size: 20px auto;
    margin-top: 8px;
  }
}
.right{
  float:right;
}
</style>

