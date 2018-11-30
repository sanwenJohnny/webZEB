<style lang="less" scoped>
.self-help-wrapper {
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
          letter-spacing: 0;
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
        padding-bottom: 15px;
        .product {
          display: flex;
          margin-top: 15px;
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
            width: 267px;
            height: 68px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
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
              .price {
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #1a1a1a;
                letter-spacing: 0;
              }
              .number {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #999999;
                letter-spacing: 0;
                margin-left: 4px;
              }
            }
            .refund-btn {
              position: absolute;
              right: 0px;
              bottom: 0px;
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
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        height: 44px;
        align-items: center;
        border-top: 1px solid #f6f6f6;
        .left {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          letter-spacing: 0;
          margin-left: 15px;
        }
        .right {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          letter-spacing: 0;
          margin-right: 15px;
        }
      }
    }
  }
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
.pt-45 {
  padding-top: 45px;
}
</style>

<template>
  <div class="self-help-wrapper pt-45">
    <!-- <TopBar title-name="自助退款" v-if="isAppView==1"></TopBar> -->
    <div class="app-bar" ref="nav">
      <div class="bar-back f-14" @click="back"></div>
      <b class="fw-n">自助退款</b>
    </div>
    <div class="list" v-if="refundList.length">
      <div class="single-order" v-for="(item, index) in refundList" :key="index">
        <div class="title">
          <div class="left"><span>合计：</span><span>{{item.totalPrice}}</span></div>
          <div class="right">{{handleStatus(item.status)}}</div>
        </div>
        <div class="content">
          <div class="product" v-for="(m,i) in item.orderProductList" :key="i">
            <div class="left"><img :src="m.image" alt=""></div>
            <div class="right">
              <div class="name">{{m.shortName}}</div>
              <div class="price-number"><span class="price">¥{{m.salesPrice}}</span><span class="number">x{{m.count}}</span></div>
              <div class="refund-btn" @click="refundApply(m)">申请退款</div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="left"><span>订单编号：</span><span>{{item.orderNumber}}</span></div>
          <div class="right">{{item.operateTime}}</div>
        </div>
      </div>
    </div>
    <div class="empty" v-if="empty">
      <img src="~images/order/no-order.png" alt="">
      <div class="empty-word">您暂时没有可以退款的订单哦</div>
    </div>
  </div>
</template>

<script>
import api from "@/api/refund";
import TopBar from "@/components/topBar";
import tools from "@/utils/tools";

export default {
  data() {
    return {
      isAppView: 0,
      refundList: [],
      empty: false
    };
  },
  components: {
    TopBar
  },
  created() {
    this.isAppView =
      tools.GetQueryString("isApp") || tools.GetQueryString("isAppView") || 0;
    this.getCanRefundList();
  },
  methods: {
    async getCanRefundList() {
      let res = await api.getCanRefundList();
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      console.log(data,'data')
      this.refundList = data;
      if(this.refundList.length == 0){
        this.empty = true
      }else{
        this.empty = false
      }
    },
    handleStatus(value) {
      let status = "";
      switch (value) {
        case 2:
          status = "待发货";
          break;
        case 3:
          status = "待收货";
          break;
        case 4:
          status = "交易成功";
          break;
        default:
          break;
      }
      return status;
    },
    refundApply(value) {
      //console.log(value)
      this.$router.push({
        path: "/refund/apply",
        query: {
          orderProductId: value.orderProductId,
          isAppView: 1
        }
      });
    },
    back() {
      window.location.href = "ggj://redirect";
    }
  }
};
</script>

