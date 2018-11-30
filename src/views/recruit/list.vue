<template>
    <div class="recruit-list bg-fff f-14" :class="{'pt-45':isApp}">
      <top-bar :title-name="'买手招募'" v-if="isApp"></top-bar>
      <ul class="product-box clearfix">
        <li v-for="list in listData" :key="list.productId" @click="linkTrun('/recruit/detail/'+list.saleGoodsId+tId)">
          <i v-lazy:background-image="list.image" class="product-tu"></i>
          <div class="product-info bg-fff">
            <p v-text="list.name" class="product-title mb-5"></p>
            <p class="product-price">
              <i>&yen;{{list.lowPrice}}</i>
              <del class="col-85 f-12">&yen;{{list.highPrice}}</del>
            </p>
          </div>
        </li>
      </ul>
      <p class="list-loading t-c" v-if="loading">努力加载中…</p>
      <p class="list-end t-c" v-if="listEnd">已显示全部内容</p>
      <p class="list-error t-c" v-if="requestError">请求出错，请稍候再试~</p>
      <loading v-if="pageLoading"></loading>
    </div>
</template>
<script>
import "@/assets/css/recruit/public.less"
import { Toast, InfiniteScroll } from 'mint-ui'
import api from "@/api/recruit";
//import { Dlg } from "@/assets/dialog/fm.dialog.min.js";
import tools from "@/utils/tools";
import Loading from "@/components/loading";

export default {
  name: "list-box",
  data() {
    return {
      isApp: tools.isApp,
      tId: this.$router.currentRoute.query.accountid
        ? '?accountid='+this.$router.currentRoute.query.accountid
        : "",
      listData: "",
      page: 1,
      pageSize: 10,
      request: false,
      requestError: false,
      loading: false,
      listEnd: false,
      isLoad: true,
      backTop: false,
      totalCount: 0,
      pageLoading: true
    };
  },
  components: {
    Loading
  },
  computed: {},
  mounted(){
    this.getListData();
    window.onscroll = () => {
      var _scrollH = window.scrollY,
        _this = this;
        // if (_scrollH > 500) {
        //   _this.backTop = true;
        // } else {
        //   _this.backTop = false;
        // }

      this.scrollPage();
    };
  },
  methods: {
    getListData(type) {
      const _params = {
        page: this.page,
        pageSize: this.pageSize
      };
      api.getRecruitList( _params ).then(req => {
        console.log("data:",req);
        let data =   req.data;
        this.pageLoading = false;
        if(req.status == 1){
          if (type == 1) {
            this.listData = this.listData.concat(data.saleViews);
          } else {
            this.listData = data.saleViews;
            this.scrollPage();
          }
          this.totalCount = data.count;
        } else {
          this.showMsg(req.message);
        }
        this.listEnd = false;
        this.loading = false;
        this.request = false;
      });
    },
    scrollPage: function() {
      if (tools.bottomVisible() && !this.request) {
        if (this.page * this.pageSize < this.totalCount) {
          this.loading = true;
          this.request = true;
          this.requestError = false;
          this.page += 1;
          this.getListData(1);
        } else {
          this.listEnd = true;
        }
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
    linkTrun(url) {
      window.location.href = url;
    }
  }
};
</script>
<style lang="less" scoped>

.product-box {
  padding: 10px;
  li {
    float: left;
    width: 48.5%;
    margin-bottom: 10px;
    &:nth-of-type(2n) {
      float: right;
    }
  }
  .product-tu {
    position: relative;
    width: 100%;
    padding-top: 100%;
    background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat center;
    background-size: cover;
    vertical-align: top;
    &::before {
      content: "";
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.05);
    }
  }
}
.product-info {
  padding: 5px;
}
.product-title {
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list-loading,
.list-end,
.list-error {
  padding: 20px 0;
}

</style>
