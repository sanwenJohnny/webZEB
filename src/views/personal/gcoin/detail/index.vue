<style lang="less" scoped>
.gcoin-detail-wrapper {
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
    .filter-app{
      position: absolute;
      right: 0;
      bottom: 0;
      color: #fff;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      padding:0 15px;
    }

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
  .head {
    width: 100%;
    height: 45px;
    line-height: 45px;
    background: #e6e6e6;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3000;
    display: flex;
    justify-content: flex-end;
    .filter-ctrl {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      display: flex;
      align-items: center;
      padding-right: 15px;
      img {
        margin-left: 3px;
        width: 11px;
      }
    }
  }
  .head-replace {
    width: 100%;
    height: 45px;
  }
  .filter {
    margin-top: 45px;
    width: 100%;
    height: 270px;
    background-color: #fff;
    .filter-content {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 25px;
      border-bottom: 1px solid #e0e0e0;
      .common {
        width: 104px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #f6f6f6;
        border-radius: 4px;
        margin: 25px 0 0 16px;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #333333;
        letter-spacing: 0;
      }
      .active {
        background: #1a1a1a;
        color: #fff;
      }
    }
    .cancel {
      text-align: center;
      height: 49px;
      line-height: 49px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #1a1a1a;
      letter-spacing: 0;
    }
  }
  .coin-list {
    .coin {
      width: 100%;
      padding: 15px 0;
      border-bottom: 1px solid #ebebeb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      .left {
        width: 170px;
        margin-left: 16px;
        .from {
          font-family: PingFangSC-Regular;
          font-size: 15px;
          color: #333333;
          letter-spacing: 0;
        }
        .time {
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #cccccc;
          letter-spacing: 0;
        }
      }
      .right {
        //width: 180px;
        margin-right: 16px;
        .add {
          font-family: PingFangSC-Regular;
          font-size: 20px;
          color: #f1002d;
          letter-spacing: 0;
          text-align: right;
        }
        .reduce {
          font-family: PingFangSC-Regular;
          font-size: 20px;
          color: #000000;
          letter-spacing: 0;
          text-align: right;
        }
        .time {
          font-family: PingFangSC-Regular;
          font-size: 11px;
          color: #cccccc;
          letter-spacing: 0;
          text-align: right;
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
  .discount-empty {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #666666;
    letter-spacing: 0;
    text-align: center;
    line-height: 16px;
    margin-top: 30px;
  }
}
</style>

<template>
  <div class="gcoin-detail-wrapper">
    <div class="app-bar" ref="nav" v-if="isApp == 1">
      <div class="bar-back f-14" @click="back"></div>
      <b class="fw-n">G币明细</b>
      <div class="filter-app" @click="openFilter">筛选</div>
    </div>
    <div class="head" v-if="isApp != 1">
      <div class="filter-ctrl" @click="openFilter"><span>筛选</span><img src="~images/personal/filter.png" alt=""></div>
    </div>
    <div class="head-replace"></div>
    <mt-popup
      v-model="popupVisible"
      position="top"
      class="filter">
      <div class="filter-content">
        <div class="common" @click="tabChange(0,'全部')" :class="{'active': tabValue === 0}">全部</div>
        <div class="common" @click="tabChange(2,'购物')" :class="{'active': tabValue === 2}">购物</div>
        <div class="common" @click="tabChange(1,'兑换')" :class="{'active': tabValue === 1}">兑换</div>
        <div class="common" @click="tabChange(6,'发红包')" :class="{'active': tabValue === 6}">发红包</div>
        <div class="common" @click="tabChange(3,'红包收入')" :class="{'active': tabValue === 3}">红包收入</div>
        <div class="common" @click="tabChange(5,'过期G币')" :class="{'active': tabValue === 5}">过期G币</div>
        <div class="common" @click="tabChange(4,'平台发放')" :class="{'active': tabValue === 4}">平台发放</div>
        <div class="common" @click="tabChange(7,'活动发放')" :class="{'active': tabValue === 7}">活动发放</div>
      </div>
      <div class="cancel" @click="closeFilter">取消</div>
    </mt-popup>
    <div class="coin-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
      <div class="coin" v-for="(item, index) in recordList" :key="index" @click="turnLink(item.id,item.type)">
        <div class="left">
          <div class="from">{{item.title}}</div>
          <div class="time">{{item.createTime}}</div>
        </div>
        <div class="right">
          <div class="add" v-if="item.arithmeticType === 0">+{{item.operateAmount}}</div>
          <div class="reduce" v-if="item.arithmeticType === 1">-{{item.operateAmount}}</div>
          <div class="time" v-if="item.desc">{{item.desc}}</div>
        </div>
      </div>
      <div class="all" v-if="!empty&&allLoaded">已显示全部</div>
      <div class="discount-empty" v-if="empty">暂无{{tabStr}}明细</div>
    </div>

  </div>
</template>

<script>
import api from "@/api/personal";
export default {
  data() {
    return {
      tabValue: 0,
      popupVisible: false,
      page: 1,
      recordList: [],
      totalCount: 0,
      allLoaded: false,
      loading: false,
      empty: false,
      tabStr: "全部",
      isApp: 0
    };
  },
  created() {
    // this.getCoinRecord()
    this.isApp = this.$route.query.isApp;
    console.log(this.isApp, "this.isApp");
  },
  methods: {
    tabChange(value, str) {
      this.tabStr = str;
      this.tabValue = value;
      this.allLoaded = false;
      this.empty = false;
      this.page = 1;
      this.recordList = [];
      this.getCoinRecord();
      this.popupVisible = false;
    },
    async getCoinRecord() {
      let params = {
        type: this.tabValue,
        page: this.page,
        pageCount: 20
      };
      let res = await api.getCoinRecord(params);
      console.log(res, "g币明细列表");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      this.recordList = this.recordList.concat(data.recordList);
      this.totalCount = data.totalCount;
      this.totalReducePriceTip = data.totalReducePriceTip;
      if (this.totalCount === 0) {
        this.empty = true;
        this.recordList = [];
      }
      if (this.recordList.length >= this.totalCount) {
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
      this.getCoinRecord();
    },
    openFilter() {
      this.popupVisible = true;
    },
    closeFilter() {
      this.popupVisible = false;
    },
    turnLink: function(id, type) {
      if (type == 1) {
        window.location.href =
          "/personal/gcoin/redPocket?referrer=detaillist&id=" + id;
        //window.location.href = '/personal/gcoin/redPocket?referrer=detaillist&id='+escape(id);
        // if(this.isApp){
        //   //window.location.href = '/ygg-hqbs/bsb/redPocket.html'+window.location.search+'&referrer=detaillist&id='+id;
        //   this.$router.push({
        //     path: '/personal/gcoin/redPocket',
        //     query: {
        //       referrer: 'detaillist',
        //       id: id
        //     }
        //   })
        // }else{
        //   //window.location.href = '/personal/gcoin/redPocket?referrer=detaillist&id='+id;
        //   this.$router.push({
        //     path: '/personal/gcoin/redPocket',
        //     query: {
        //       referrer: 'detaillist',
        //       id: id
        //     }
        //   })
        // }
      }
    },
    back(){
      window.location.href = "ggj://redirect";
    }
  }
};
</script>
