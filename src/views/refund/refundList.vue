<template>
    <div id="refund-box" :class="{'pt-45': isAppView==1}">
    <!-- 头部 -->
    <TopBar title-name="退款/售后进度" v-if="isAppView==1"></TopBar>
    <div class="tab-nav">
      <div class="single-tab">
        <div class="tab" @click="tabClick(0)" :class="{'word-color': tabType == 0}"><span>退款</span><div class="tab-active" v-show="tabType == 0"><div class="tab-active-white"></div></div></div>
      </div>
      <div class="single-tab">
        <div class="tab" @click="tabClick(1)" :class="{'word-color': tabType == 1}"><span>投诉</span><div class="tab-active" v-show="tabType == 1"><div class="tab-active-white"></div></div></div>
      </div>
        <!-- <p @click="tabClick(1)"><span :class="{'cur': tabType==1}">投诉</span></p> -->
    </div>
    <div class="refund_list_module flexMain">
        <div class="content">
            <!-- 退款列表-->
            <ul class="refund_list" v-if="refundList && refundList.length > 0" v-show="tabType==0">
                <li class="refund_item" v-for="(refund,index) in refundList" @click="showRefundDetail(refund.applyNumber)" :key="index">
                    <div class="r_header">{{refund.time}}</div>
                    <div class="r_main">
                        <div class="r_photo"><img :src="refund.img" alt=""/></div>
                        <div class="r_info">
                            <h4 class="ellipsis_m">{{refund.name}}</h4>
                            <p class="r_amount">退款金额：¥ {{refund.refundPrice}}</p>
                        </div>
                        <span class="r_num">x {{refund.count}}</span>
                    </div>
                    <div class="r_footer">
                        <span class="r_type" v-if="refund.type == 1">[仅退款]</span>
                        <span class="r_type" v-if="refund.type == 2">[退货退款]</span>
                        <span class="r_des">{{refund.stepDesc}}</span>
                    </div>
                </li>
                <p class="loading" v-if="page[tabType] >= totalPage[tabType] && !isLoading">没有更多</p>
            </ul>
            <!-- 投诉列表-->
            <ul class="refund_list" v-if="complainList && complainList.length > 0" v-show="tabType==1">
                <li class="refund_item" v-for="(data, index) in complainList" @click="showRefundDetail(data.workOrderNumber)" :key="index">
                    <div class="r_header">{{data.createTime}}</div>
                    <Product :productData="data"></Product>
                    <!-- <div class="r_main">
                        <div class="r_photo"><img :src="data.img" alt=""/></div>
                        <div class="r_info">
                            <h4 class="ellipsis_m">{{data.productName}}</h4>
                        </div>
                        <span class="r_num">x {{data.productCount}}</span>
                    </div> -->
                    <div class="r_footer">
                        <span class="r_type">[投诉申请]</span>
                        <span class="r_des" v-if="data.status == 1">待处理</span>
                        <span class="r_des" v-if="data.status == 2">处理中</span>
                        <span class="r_des" v-if="data.status == 3">处理完成</span>
                    </div>
                </li>
                <p class="loading" v-if="page[tabType] >= totalPage[tabType] && !isLoading">已显示全部内容</p>
            </ul>
            <p class="loading" v-show="isLoading">加载中...</p>
            <!-- 无信息-->
            <div class="no_refund" v-if="listData[tabType] && refundList.length == 0 && tabType==0">
                <img src="~images/order/no-order.png" alt=""/>
                <p>暂无退款订单</p>
            </div>
            <div class="no_refund" v-if="listData[tabType] && complainList.length == 0 && tabType==1">
                <img src="~images/order/no-order.png" alt=""/>
                <p>暂无投诉订单</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import api from "@/api/refund";
import TopBar from "@/components/topBar";
import tools from "@/utils/tools";
import Product from "./product";
export default {
  name: "listData",
  data: function() {
    return {
      isAppView: 0,
      page: [1, 1],
      pageSize: 10,
      totalPage: [1, 1],
      listData: [],
      refundList: [],
      complainList: [],
      isLoading: true,
      tabType: 0
    };
  },
  components: {
    TopBar,
    Product
  },
  created() {
    this.tabType = window.sessionStorage.getItem("tabType")
      ? window.sessionStorage.getItem("tabType")
      : 0;
    this.isAppView =
      tools.GetQueryString("isApp") || tools.GetQueryString("isAppView") || 0;
    this.serviceList();
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  },
  mounted: function() {
    window.addEventListener("scroll", this.scrollPage);
  },
  methods: {
    // 获取商品列表
    serviceList() {
      let data = {
        page: this.page[this.tabType],
        pageSize: this.pageSize
      };
      if (this.page[this.tabType] > this.totalPage[this.tabType]) {
        return false;
      }
      this.isLoading = true;
      if (this.tabType == 0) {
        api.getRefundList(data).then(data => {
          this.getterData(data);
        });
      } else {
        api.getcomplainList(data).then(data => {
          this.getterData(data);
        });
      }
    },
    getterData(data) {
      this.isLoading = false;
      this.listData[this.tabType] = data.data;
      if (data.status == 1) {
        if (this.page[this.tabType] == 1) {
          this.totalPage[this.tabType] = Math.ceil(
            data.data.totalCount / this.pageSize
          );
        }
        this.page[this.tabType] += 1;
        if (this.tabType == 0) {
          this.refundList = this.refundList.concat(data.data.productList);
        } else {
          this.complainList = this.complainList.concat(data.data.resultList);
        }
      } else {
        tools.toast(data.errorMsg);
      }
    },
    // 进入退款详情
    showRefundDetail(num) {
      if (this.tabType == 0) {
        this.$router.push({ path: '/refund/detail', query: { isAppView: this.isAppView,isFromList: 1,applyNumber: num,isHide: 1 } })
      } else {
        this.$router.push({
          name: "complainDetail",
          params: { id: num },
          query: { isAppView: this.isAppView }
        });
      }
    },
    tabClick(index) {
      if (this.tabType == index) {
        return false;
      }
      this.tabType = index;
      window.sessionStorage.setItem("tabType", index);
      // this.page = 1;
      // this.listData = [];
      // this.getList();
      // console.log(this.listData[this.tabType])
      if (this.page[this.tabType] == 1 && !this.listData[this.tabType]) {
        this.serviceList();
      }
    },
    // 滚动分页
    scrollPage() {
      console.log(2222)
      if (tools.bottomVisible() && !this.isLoading) {
        // if(this.page<this.totalPage){
        // this.page++;
        this.serviceList();
        // }
      }
    }
  },
  destroyed() {
    console.log(1111)
    window.removeEventListener("scroll",this.scrollPage)
  }
};
</script>
<style lang="less" scoped>
.pt-45 {
  padding-top: 45px;
}
.refund-box {
  font-size: 14px;
}
.loading {
  color: #999;
  font-size: 14px;
  text-align: center;
  background: none;
  margin-top: 15px;
}
.tab-nav {
  display: flex;
  margin-bottom: 10px;
  text-align: center;
  background: #fff;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #999999;
  letter-spacing: 0;
  .single-tab {
    flex: 1;
    display: flex;
    justify-content: center;
    .tab {
      color: #858585;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
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
}
.refund_list li {
  margin-bottom: 10px;
  background: #fff;
  .r_header {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
    text-align: left;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    border-bottom: 1px solid #f0f0f0;
  }
  .r_footer {
    font-family: PingFangSC-Medium;
    font-weight: 900;
    font-size: 14px;
    color: #1a1a1a;
    text-align: left;
    height: 44px;
    line-height: 44px;
    padding-left: 15px;
    border-top: 1px solid #f0f0f0;
    .r_des {
      margin-left: 6px;
    }
  }
}
.r_main {
  display: flex;
  padding: 15px;
  .r_photo {
    flex: none;
    width: 68px;
    height: 68px;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
  .r_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-left: 10px;
    .ellipsis_m {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      text-align: left;
    }
    h4 {
      color: #000;
      font-size: 14px;
      font-weight: normal;
      line-height: 18px;
      height: 36px;
    }
    .r_amount {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #333333;
    }
  }
  .r_num {
    flex: none;
    width: 30px;
    text-align: right;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
  }
}
.no_refund {
  // position: absolute;
  // top: 50%;
  // left: 0;
  // width: 100%;
  // text-align: center;
  // transform: translateY(-50%);
  width: 100%;
  height: 603px;
  img {
    margin-top: 99px;
  }
  p {
    text-align: center;
    font-size: 16px;
    margin-top: 10px;
  }
}
</style>
