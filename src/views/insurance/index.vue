<style lang="less" scoped>
.insurance-wrapper {
  padding-top: 45px;
  font-family: "PingFangSC", "Noto Sans CJK SC", "Helvetica Neue", Helvetica, "Microsoft YaHei", Tahoma, Arial, sans-serif;
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
  .insurance-tabs {
    height: 40px;
    display: flex;
    padding: 0 15px;
    background-color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0;
    white-space: nowrap;
    overflow-x: auto;
    border-top-left-radius: 4px;
    .single-tab {
      flex: 1;
      display: flex;
      justify-content: center;
      .tab {
        height: 100%;
        line-height: 40px;
        margin: 0 16px;
        position: relative;
        font-weight: 900;
        .tab-active {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #4CA8FF;
          transform: skew(-30deg);
          .tab-active-white {
            position: absolute;
            bottom: 0;
            right: 4px;
            width: 2px;
            height: 3px;
            background-color: #ffffff;
          }
        }
      }
      .tab:first-child {
        margin-left: 0;
      }
      .tab:last-child {
        margin-right: 0;
      }
      .word-color {
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #1a1a1a;
        font-weight: 900;
      }
    }
  }
  .insurance-list {
    margin-top: 10px;
    min-height: 572px;
    overflow-y:auto;
    .single-insurance {
      width: 345px;
      height: 110px;
      background: #ffffff;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      margin: 0 auto;
      display: flex;
      overflow: hidden;
      margin-bottom: 10px;
      .left {
        width: 110px;
        height: 110px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .shadow {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 110px;
          font-family: PingFangSC-Medium;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          position: absolute;
          left: 0;
          top: 0;
          filter: alpha(opacity=30);
          -moz-opacity: 0.3;
          -khtml-opacity: 0.3;
          opacity: 0.3;
          background: #000000;
        }
      }
      .right {
        margin-left: 10px;
        width: 225px;
        .name {
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          line-height: 18px;
          margin-top: 12px;
          margin-bottom: 8px;
        }
        .info {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #666666;
          letter-spacing: 0;
          line-height: 14px;
        }
        .time {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          letter-spacing: 0;
          line-height: 14px;
          margin-top: 32px;
        }
        .operate {
          display: flex;
          padding-right: 10px;
          justify-content: flex-end;
          margin-top: 18px;
          .btn-common {
            padding: 0 15px;
            height: 30px;
            //line-height: 30px;
            font-family: PingFangSC-Regular;
            letter-spacing: 0;
            font-size: 14px;
            margin-left: 10px;
            display: flex;
            align-items: center;
          }
          .cancel {
            color: #666666;
            box-sizing: border-box;
            border: 1px solid #b2b2b2;
            border-radius: 4px;
          }
          .pay {
            color: #ffffff;
            background: #f1002d;
            border-radius: 4px;
          }
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
</style>

<style lang="less">
.insurance-wrapper {
  .mint-msgbox-wrapper {
    .mint-msgbox {
      background: #ffffff;
      border-radius: 4px;
      width: 270px;
      height: 156px;
      .mint-msgbox-header {
        .mint-msgbox-title {
          margin-top: 5px;
          font-family: PingFangSC-Medium;
          font-weight: 900;
          font-size: 18px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 22px;
        }
      }
      .mint-msgbox-content {
        padding-bottom: 19px;
        .mint-msgbox-message {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 18px;
        }
      }
      .mint-msgbox-btns {
        height: 50px;
        font-family: PingFangSC-Regular;
        .mint-msgbox-btn {
          font-size: 18px;
          color: #999999;
          letter-spacing: 0;
          text-align: center;
          line-height: 22px;
        }
        .mint-msgbox-confirm {
          color: #1a1a1a;
        }
      }
    }
  }
}
</style>

<template>
  <div class="insurance-wrapper">
    <div class="app-bar" ref="nav">
      <div class="bar-back f-14" @click="back"></div>
      <b class="fw-n">我的保单</b>
    </div>
    <div class="insurance-tabs">
      <div class="single-tab">
        <div class="tab" @click="tabChange(0,'保单')" :class="{'word-color': tabValue === 0}"><span>全部</span><div class="tab-active" v-show="tabValue === 0"><div class="tab-active-white"></div></div></div>
      </div>
      <div class="single-tab">
        <div class="tab" @click="tabChange(1,'保障中的保单')" :class="{'word-color': tabValue === 1}"><span>保障中</span><div class="tab-active" v-show="tabValue === 1"><div class="tab-active-white"></div></div></div>
      </div>
    </div>

    <div class="insurance-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-listen-for-event='listenEvent'>
      <SingleInsurance  v-for="(item, index) in insuranceList" :key="index" :info="item" @cancelInsuranceOrder="cancelInsuranceOrder" @resetInsuranceList="resetInsuranceList"></SingleInsurance>
      <div class="all" v-if="!empty&&allLoaded">已显示全部内容</div>
      <div class="empty" v-if="empty">
        <img src="~images/order/no-order.png" alt="">
        <div class="empty-word">您暂时没有{{words}}哦</div>
      </div>
      <!-- <div class="single-insurance" v-for="(item, index) in insuranceList" :key="index" @click="toInsuranceDetail(item.orderNo)">
        <div class="left">
          <img :src="item.productImgUrl" alt="">
          <div class="shadow">{{item.statusDesc}}</div>
        </div>
        <div class="right">
          <div class="name">{{item.insuranceName}}</div>
          <div class="info">保额{{item.insuredAmountDesc}}</div>
          <div class="time" v-if="!item.canOperate">保障期限 {{item.effectStartDate}}～{{item.effectEndDate}}</div>
          <div class="operate" v-if="item.canOperate">
            <div class="btn-common cancel">取消</div>
            <div class="btn-common pay">去付款28:33</div>
          </div>
        </div>
      </div> -->

      <!-- <div class="single-insurance">
        <div class="left">
          <img src="http://pic63.nipic.com/file/20150330/8993928_082652755616_2.jpg" alt="">
          <div class="shadow">已取消</div>
        </div>
        <div class="right">
          <div class="name">众安全球海陆空交通意外险</div>
          <div class="info">保额10万元</div>
          <div class="time">保障期限 2018.09.01～2019.09.01</div>
        </div>
      </div>

      <div class="single-insurance">
        <div class="left">
          <img src="http://pic63.nipic.com/file/20150330/8993928_082652755616_2.jpg" alt="">
          <div class="shadow">已付款</div>
        </div>
        <div class="right">
          <div class="name">众安全球海陆空交通意外险</div>
          <div class="info">保额10万元</div>
          <div class="time">保障期限 2018.09.01～2019.09.01</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import api from "@/api/insurance";
import SingleInsurance from "./singleInsurance.vue";
import { MessageBox } from "mint-ui";
import bridge from "@/utils/bridge";

export default {
  data() {
    return {
      tabValue: 0,
      insuranceList: [],
      allLoaded: false,
      loading: false,
      empty: false,
      totalCount: "",
      page: 1,
      words: "保单",
      isApp: 0
    };
  },
  components: {
    SingleInsurance
  },
  created() {
    bridge.bridgeFun(function(){
      window.WebViewJavascriptBridge.callHandler('controlNavigationBar', { 'isDisplayHead': 0 }, function (res) {})
    })
  },
  methods: {
    tabChange(value, w) {
      this.words = w;
      this.tabValue = value;
      this.allLoaded = false;
      this.empty = false;
      this.page = 1;
      this.insuranceList = [];
      this.getInsuranceList();
    },
    async getInsuranceList() {
      let params = {
        page: this.page,
        pageSize: 10,
        insuranceOrderStatus: this.tabValue
      };
      let res = await api.getInsuranceList(params);
      console.log(res, "保险订单列表数据");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      this.insuranceList = this.insuranceList.concat(
        data.insuranceBriefViewList
      );
      this.totalCount = data.totalCount;
      if (this.totalCount === 0) {
        this.empty = true;
      }
      if (this.insuranceList.length >= this.totalCount) {
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
      this.getInsuranceList();
    },
    resetInsuranceList() {
      this.tabValue = 0;
      this.allLoaded = false;
      this.empty = false;
      this.page = 1;
      this.insuranceList = [];
      this.getInsuranceList();
    },
    async cancelInsuranceOrder(value) {
      console.log(value, "传过来的id");
      let self = this
      MessageBox.confirm("", {
        title: "是否取消订单？",
        message: "订单取消后再次购买需重新下单",
        showCancelButton: true,
        confirmButtonText: "是",
        cancelButtonText: "否"
      })
        .then(action => {
          if (action == "confirm") {
            //console.log(value,'嗯嗯嗯对')
            self.cancel(value);
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //self.toHome();
          }
        });
      
    },
    async cancel(value){
      let params = {
        orderId: value
      }
      let res = await api.cancelInsuranceOrder(params)
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.$toast('取消保单成功')
      this.resetInsuranceList()
    },
    back(){
      window.WebViewJavascriptBridge.callHandler('controlNavigationBar', { 'isDisplayHead': 1 }, function (res) {
        if(res == 'success'){
          history.back()
        }
      })
    }
  }
};
</script>
