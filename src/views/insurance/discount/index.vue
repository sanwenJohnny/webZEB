<style lang="less" scoped>
.discount-wrapper {
  .choose-none {
    width: 345px;
    height: 52px;
    line-height: 52px;
    text-align: center;
    background: #ffffff;
    border-radius: 4px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #1a1a1a;
    font-weight: 900;
    margin: 0 auto;
    margin-top: 10px;
  }
  .ticket-list {
    padding: 10px 15px 0 15px;
  }
}
</style>
<style lang="less">
.discount-wrapper {
  .mint-msgbox-wrapper {
    .mint-msgbox {
      background: #ffffff;
      border-radius: 4px;
      width: 270px;
      height: 156px;
      .mint-msgbox-content {
        padding-bottom: 19px;
        .mint-msgbox-message {
          padding-top: 10px;
          font-family: PingFangSC-Medium;
          font-size: 18px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 22px;
        }
        .mint-msgbox-input {
          margin: 0 auto;
          display: flex;
          input {
            width: 240px;
            height: 24px;
            background: #f5f5f5;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #333333;
            letter-spacing: 0;
            border: 0;
            border-radius: 0;
          }
          .mint-msgbox-errormsg {
            display: none;
          }
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
  <div class="discount-wrapper">
    <div class="choose-none" @click="chooseNone">不选择优惠券</div>
    <div class="ticket-list">
      <div class="available">
        <Ticket v-for="(item, index) in availableCouponDetails" :key="index" :coupon="item" :use="1" @updateInsuranceConfirmOrder="updateInsuranceConfirmOrder" :id="id"></Ticket>
      </div>
      <div class="un-available">
        <Ticket v-for="(item, index) in unavailableCouponDetails" :key="index" :coupon="item" :use="0"></Ticket>
      </div>
    </div>
  </div>
</template>

<script>
import Ticket from "./ticket";
import api from "@/api/insurance";
import storage from "@/utils/storage-lite";

export default {
  data() {
    return {
      availableCouponDetails: [],
      unavailableCouponDetails: [],
      id: ""
    };
  },
  components: {
    Ticket
  },
  created() {
    // let temp = storage.get("insuranceOrderDiscountsView");
    // if (temp) {
    //   this.id = temp.privilegeInfoViewList[0].magicInfo;
    // }
    this.id = this.$route.query.couponId
  },
  mounted() {
    this.getCouponList();
  },
  methods: {
    async getCouponList() {
      let params = {
        confirmNumber: this.$route.query.confirmNumber,
        totalPrice: this.$route.query.totalPrice
      };
      let res = await api.getCouponList(params);
      console.log(res, "获取优惠券列表数据");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      this.availableCouponDetails = data.availableCouponDetails;
      this.unavailableCouponDetails = data.unavailableCouponDetails;
    },
    goback() {
      this.$router.push({
        path: "/insurance/submit",
        query: {
          insuId: this.$route.query.insuId,
          isFirst: 1
        }
      });
    },
    async updateInsuranceConfirmOrder(id) {
      console.log(id, "id");
      let params = {
        couponAccountId: id,
        saleUnitId: this.$route.query.saleUnitId,
        useCoin: this.$route.query.checkedType ? 1 : 0,
        totalPrice: this.$route.query.totalPrice
      };
      let res = await api.updateInsuranceConfirmOrder(params);
      console.log(res, "啊实打实大师的");
      const { status, message, data } = res;
      if (status !== 1) {
        this.$toast(message);
      }
      storage.set("insuranceOrderDiscountsView", data);
      this.goback();
      // this.insuranceOrderDiscountsView = data
      // this.checkedType = data.privilegeInfoViewList[2].userSelection ? true:false
      // this.confirmNumber = data.confirmNumber
      // this.saleUnitId = data.saleUnitId
      // this.realPrice = data.realPrice
      // this.memberReducePrice = data.privilegeInfoViewList[1].reducePrice
      // this.coinToUse = data.privilegeInfoViewList[2].reducePrice
    },
    chooseNone(){
      this.updateInsuranceConfirmOrder('-2')
    }
  }
};
</script>