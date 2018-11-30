<style lang="less" scoped>
.refund-progress-wrapper {
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
      color: #fff;
    }

    .share-top-tb {
      width: 30px;
      height: 30px;
      background: url(~images/refund/share-icon.png) no-repeat center;
      background-size: 20px auto;
      margin-top: 8px;
    }
  }
  .list {
    .single-order {
      margin-bottom: 10px;
      background-color: #fff;
      .title {
        display: flex;
        justify-content: space-between;
        height: 40px;
        align-items: center;
        border-bottom: 1px solid #f6f6f6;
        .left {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #999999;
          text-align: left;
          margin-left: 15px;
        }
        .right {
          font-family: PingFangSC-Medium;
          font-weight: 900;
          font-size: 14px;
          color: #1a1a1a;
          letter-spacing: 0;
          margin-right: 15px;
        }
      }
      .content {
        height: 99px;
        display: flex;
        align-items: center;
        .left {
          border-radius: 4px;
          img {
            width: 68px;
            height: 68px;
            margin-left: 15px;
            margin-right: 10px;
            border-radius: 4px;
          }
        }
        .right {
          height: 68px;
          display: flex;
          .info {
            width: 235px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .name {
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #333333;
              letter-spacing: 0;
            }
            .price-number {
              margin-top: 10px;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #333333;
            }
          }
          .num {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
            margin-left: 10px;
          }
        }
        .refund-btn {
          position: absolute;
          right: 15px;
          bottom: 15px;
          border: 1px solid #333333;
          border-radius: 2px;
          width: 62px;
          height: 24;
          line-height: 24px;
          box-sizing: border-box;
          text-align: center;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #1a1a1a;
          letter-spacing: 0;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        height: 44px;
        align-items: center;
        border-top: 1px solid #f6f6f6;
        .left {
          font-family: PingFangSC-Medium;
          font-weight: 900;
          font-size: 14px;
          color: #1a1a1a;
          text-align: left;
          margin-left: 15px;
        }
      }
    }
    .all {
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      letter-spacing: 0;
      padding: 10px 0;
    }
    // .empty {
    //   height: 603px;
    //   line-height: 603px;
    //   text-align: center;
    //   font-family: PingFangSC-Regular;
    //   font-size: 16px;
    //   color: #000000;
    //   letter-spacing: 0;
    // }
    .empty {
      width: 100%;
      text-align: center;
      background-color: #f8f8f8;
      img {
        margin-top: 99px;
      }
      .empty-word {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #b2b2b2;
        letter-spacing: 0;
        margin-top: 10px;
      }
    }
  }
}
.pt-45 {
  padding-top: 45px;
}
</style>

<template>
  <div class="refund-progress-wrapper" :class="{'pt-45':isAppView==1}">
    <!-- <TopBar title-name="退款进度" v-if="isAppView==1"></TopBar> -->
    <div class="app-bar" ref="nav" v-if="isAppView==1">
      <div class="bar-back f-14" @click="back"></div>
      <b class="fw-n">退款进度</b>
    </div>
    <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
      <div class="single-order" v-for="(item, index) in refundList" :key="index" @click="showRefundDetail(item)">
        <div class="title">
          <div class="left">{{item.time}}</div>
          <div class="right"></div>
        </div>
        <div class="content">
          <div class="left"><img :src="item.img" alt=""></div>
          <div class="right">
            <div class="info">
              <div class="name">{{item.name}}</div>
              <div class="price-number">退款金额：￥{{item.refundPrice}}</div>
            </div>
            <div class="num">x {{item.count}}</div>
          </div>
        </div>
        <div class="bottom">
          <div class="left">[{{item.type === 1?'仅退款':'退货退款'}}]  {{item.stepDesc}}</div>
        </div>
      </div>
      <div class="all" v-if="!empty&&allLoaded">已显示全部内容</div>
      <div class="empty" v-if="empty">
        <img src="~images/order/no-order.png" alt="">
        <div class="empty-word">您暂时没有退款订单哦</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/refund";
import TopBar from "@/components/topBar";
import tools from "@/utils/tools";
import bridge from "@/utils/bridge";

export default {
  data() {
    return {
      isAppView: 0,
      refundList: [],
      page: 1,
      allLoaded: false,
      loading: false,
      empty: false
    };
  },
  components: {
    TopBar
  },
  created() {
    bridge.bridgeFun()
    this.isAppView =
      tools.GetQueryString("isApp") || tools.GetQueryString("isAppView") || 0;
  },
  methods: {
    async getRefundList() {
      let params = {
        page: this.page,
        pageSize: 10
      };
      let res = await api.getRefundList(params);
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      this.refundList = this.refundList.concat(data.productList);
      this.totalCount = data.totalCount;
      if (this.totalCount === 0) {
        this.empty = true;
      }
      if (this.refundList.length >= this.totalCount) {
        this.loading = true;
        this.allLoaded = true;
      } else {
        this.page++;
        this.loading = false;
      }
    },
    loadMore() {
      if (this.loading) {
        return false;
      }
      this.getRefundList();
    },
    // 进入退款详情
    showRefundDetail(value) {
      console.log(value);
      this.$router.push({
        path: "/refund/detail",
        query: {
          isAppView: this.isAppView,
          isFromList: 1,
          applyNumber: value.applyNumber,
          isHide: 1
        }
      });
      // if (this.tabType == 0) {
      //   this.$router.push({ path: '/refund/detail', query: { isAppView: this.isAppView,isFromList: 1,applyNumber: num  } })
      // } else {
      //   this.$router.push({
      //     name: "complainDetail",
      //     params: { id: num },
      //     query: { isAppView: this.isAppView }
      //   });
      // }
    },
    back() {
      if(this.isAppView != 1){
          history.back();
      }else{
          window.WebViewJavascriptBridge.callHandler('changeReceiveAddress');
          window.location.href = 'ggj://redirect';
      }
    }
  }
};
</script>

