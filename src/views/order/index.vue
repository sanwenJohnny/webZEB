<style lang="less" scoped>
.order-wrapper {
  padding-bottom: 50px;
  .order-tabs {
    height: 40px;
    display: flex;
    //padding: 0 15px;
    background-color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    .tab {
      height: 100%;
      line-height: 40px;
      margin: 0 15px;
      position: relative;
      .tab-active {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #f1002d;
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
    .word-color {
      font-family: PingFangSC-Medium;
      font-weight: 900;
      font-size: 16px;
      color: #1a1a1a;
      font-weight: 900;
    }
  }
  .order-list {
    width: 345px;
    margin: 0 auto;
    margin-top: 10px;
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
</style>
<template>
  <div class="order-wrapper">
    <div class="order-tabs">
      <div class="tab" @click="tabChange('0')" :class="{'word-color': tabValue === '0'}"><span>全部</span><div class="tab-active" v-show="tabValue === '0'"><div class="tab-active-white"></div></div></div>
      <div class="tab" @click="tabChange('1')" :class="{'word-color': tabValue === '1'}"><span>待付款</span><div class="tab-active" v-show="tabValue === '1'"><div class="tab-active-white"></div></div></div>
      <div class="tab" @click="tabChange('2')" :class="{'word-color': tabValue === '2'}"><span>待发货</span><div class="tab-active" v-show="tabValue === '2'"><div class="tab-active-white"></div></div></div>
      <div class="tab" @click="tabChange('3')" :class="{'word-color': tabValue === '3'}"><span>待收货</span><div class="tab-active" v-show="tabValue === '3'"><div class="tab-active-white"></div></div></div>
      <div class="tab" @click="tabChange('4')" :class="{'word-color': tabValue === '4'}"><span>交易成功</span><div class="tab-active" v-show="tabValue === '4'"><div class="tab-active-white"></div></div></div>
    </div>

    <div class="order-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
      <SingleOrder v-for="(item, index) in orderList" :key="index" :orderData="item" @resetOrderList="resetOrderList"></SingleOrder>
      <!-- <SingleOrder></SingleOrder>
      <SingleOrder></SingleOrder>
      <SingleOrder></SingleOrder> -->
      <div class="all" v-if="!empty&&allLoaded">已显示全部内容</div>
      <div class="empty" v-if="empty">
        <img src="~images/order/no-order.png" alt="">
        <div class="empty-word">您暂时没有订单哦</div>
      </div>
    </div>
    <footBar bar-tag='personal'></footBar>
  </div>
</template>
<script>
import SingleOrder from "./singleOrder.vue";
// import auth from '@/utils/auth'
import api from "@/api/order";
import footBar from '@/components/footBar'

export default {
  name: "home",
  components: {
    SingleOrder,
    footBar
  },
  data() {
    return {
      tabValue: "0",
      page: 1,
      orderCount: 0,
      orderList: [],
      allLoaded: false,
      loading: false,
      empty: false
    };
  },
  created() {
    // if (auth.isLoggedIn()) {
    //   this.getOrderList()
    // } else {
    //   auth.login(window.location.href)
    // }
    console.log(this.$route.query);
    this.tabValue = this.$route.query.type;
    //this.getOrderList()
  },
  mounted() {},
  methods: {
    tabChange(value) {
      this.tabValue = value
      this.allLoaded = false
      this.empty = false
      this.page = 1
      this.orderList = []
      this.getOrderList()
    },
    async getOrderList() {
      let params = {
        type: this.tabValue,
        page: this.page,
        pageCount: 10
      };
      let res = await api.orderList(params);
      console.log(res, "======");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      this.orderCount = data.orderCount;
      this.orderList = this.orderList.concat(data.orderList);
      if(this.orderCount === 0){
        this.empty = true
      }
      if (this.orderList.length >= this.orderCount) {
        this.loading = true
        this.allLoaded = true
      } else {
        this.page++;
        this.loading = false;
      }
    },
    loadMore() {
      console.log(11111111);
      if (this.loading) {
        return false;
      }
      this.getOrderList();
    },
    resetOrderList(){
      this.page = 1
      this.orderList = []
      this.getOrderList()
    }
  }
};
</script>
