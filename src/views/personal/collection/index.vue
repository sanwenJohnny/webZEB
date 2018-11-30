<style lang="less" scoped>
.collection-wrapper {
  .order-tabs {
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
  .list {
    margin-top: 10px;
    background-color: #fff;
    .good {
      padding: 0 15px;
      height: 118px;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      position: relative;
      .left {
        margin-right: 10px;
        position: relative;
        border-radius: 2px;
        img {
          width: 88px;
          height: 88px;
          border-radius: 2px;
        }
        .common {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-family: PingFangSC-Regular;
          font-size: 10px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
          border-bottom-right-radius: 2px;
          border-bottom-left-radius: 2px;
          // filter: alpha(opacity=50);
          // -moz-opacity: 0.5;
          // -khtml-opacity: 0.5;
          // opacity: 0.5;
        }
        .chance {
          background: rgba(0, 0, 0, 0.5);
        }
        .not-begin {
          background: rgba(241, 0, 45, 0.8);
        }
        .shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000;
          border-radius: 2px;
          filter: alpha(opacity=20);
          -moz-opacity: 0.2;
          -khtml-opacity: 0.2;
          opacity: 0.2;
        }
      }
      .right {
        width: 247px;
        height: 88px;
        font-family: PingFangSC-Regular;
        letter-spacing: 0;
        .name {
          height: 36px;
          font-size: 14px;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis; //文本溢出显示省略号
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .discount-price {
          height: 36px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin-top: 10px;
          .discount {
            font-size: 12px;
            color: #f1002d;
          }
          .price {
            font-size: 16px;
            color: #1a1a1a;
          }
        }
      }
      .right-find-similar {
        .name {
          color: #b2b2b2;
        }
        .discount-price {
          .over-time {
            width: 28px;
            padding: 2px 0;
            text-align: center;
            font-family: PingFangSC-Regular;
            font-size: 10px;
            color: #ffffff;
            letter-spacing: 0;
            background: #d8d8d8;
            border-radius: 2px;
          }
        }
      }
      .find-similar {
        position: absolute;
        right: 15px;
        bottom: 15px;
        width: 56px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border: 1px solid #666666;
        border-radius: 2px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #666666;
        letter-spacing: 0;
      }
    }
    .out-time {
      background: #f5f5f5;
    }
  }
  .all {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    padding: 10px 0;
    background-color: #f8f8f8;
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
  .cart{
    position: fixed;
    bottom: 95px;
    left: 15px;
    width: 35px;
    height: 35px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    filter: alpha(opacity=80);
    -moz-opacity:0.8; 
    opacity:0.8;
  }
  .cart-btn{
    position: fixed;
    bottom: 95px;
    left: 15px;
    z-index: 10;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    img{
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 10;
      width: 25px;
      margin-left: -13px;
      margin-top: -12px;
    }
    .number{
      position: absolute;
      right: 0;
      top: 0;
      z-index: 20;
      width: 14px;
      height: 14px;
      background: #FF0000;
      text-align: center;
      line-height: 14px;
      border-radius: 14px;
      color: #fff;
    }
  }
}
</style>

<template>
  <div class="collection-wrapper">
    <div class="order-tabs">
      <div class="single-tab">
        <div class="tab" @click="tabChange(1)" :class="{'word-color': tabValue === 1}"><span>全部宝贝</span><div class="tab-active" v-show="tabValue === 1"><div class="tab-active-white"></div></div></div>
      </div>
      <div class="single-tab">
        <div class="tab" @click="tabChange(2)" :class="{'word-color': tabValue === 2}"><span>即将开抢</span><div class="tab-active" v-show="tabValue === 2"><div class="tab-active-white"></div></div></div>
      </div>
    </div>

    <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
      <SingleCollection v-for="(m, index) in collectList" :key="index" :m="m" :analogy="analogy" @resetCollectionList="resetCollectionList"></SingleCollection>
      <div class="all" v-if="!empty&&allLoaded">已显示全部内容</div>
      <div class="empty" v-if="empty">
        <img src="~images/personal/no-collection.png" alt="">
        <div class="empty-word">您的收藏夹为空</div>
      </div>
    </div>

    <div class="cart"></div>
    <div class="cart-btn" @click="toCart"><img src="~images/personal/cart-icon.png" alt=""><div class="number" v-if="cartCount!=0">{{cartCount}}</div></div>

  </div>
</template>

<script>
import api from "@/api/personal";
import SingleCollection from "./singleCollection";
export default {
  data() {
    return {
      tabValue: 1,
      page: 1,
      totalCount: 0,
      collectList: [],
      analogy: 0,
      allLoaded: false,
      loading: false,
      empty: false,
      cartCount: 0
    };
  },
  components: {
    SingleCollection
  },
  created() {
    // this.getCollectList();
    this.getCartCount()
  },
  methods: {
    tabChange(value) {
      this.tabValue = value;
      this.allLoaded = false;
      this.empty = false;
      this.page = 1;
      this.collectList = [];
      this.getCollectList();
    },
    async getCollectList() {
      let params = {
        page: this.page,
        pageSize: 20,
        type: this.tabValue
      };
      let res = await api.getCollectList(params);
      console.log(res, "获取我的收藏列表数据");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
        return false;
      }
      this.collectList = this.collectList.concat(data.resultList);
      if (this.page === 1) {
        this.analogy = data.analogy;
      }
      this.totalCount = data.totalCount;
      if (this.totalCount === 0) {
        this.empty = true;
      }
      if (this.collectList.length >= this.totalCount) {
        this.loading = true;
        this.allLoaded = true;
      } else {
        this.page++;
        this.loading = false;
      }
    },
    async getCartCount(){
      let params = {
        type: 1
      };
      let res = await api.getCartCount(params);
      console.log(res, "获取购物车数量");
      this.cartCount = res.data.count
    },
    loadMore() {
      if (this.loading) {
        return false;
      }
      this.getCollectList();
    },
    resetCollectionList() {
      this.page = 1;
      this.collectList = [];
      this.getCollectList();
    },
    toCart(){
      this.$router.push({
        path: '/cart'
      })
    }
  }
};
</script>
