<style lang="less" scoped>
.insurance-detail-wrapper {
  padding-bottom: 80px;
  font-family: "PingFangSC", "Noto Sans CJK SC", "Helvetica Neue", Helvetica, "Microsoft YaHei", Tahoma, Arial, sans-serif;
  .insurance-content {
    padding-top: 15px;
    .insurance-info {
      position: relative;
      width: 345px;
      background: #ffffff;
      border-radius: 4px;
      padding-bottom: 20px;
      margin: 0 auto;
      .top {
        margin-bottom: 22px;
        margin-left: 10px;
        .name {
          font-family: PingFangSC-Medium;
          font-weight: 900;
          font-size: 18px;
          color: #1a1a1a;
          letter-spacing: 0;
          line-height: 22px;
          padding-top: 22px;
          margin-bottom: 6px;
        }
        .number {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #666666;
          letter-spacing: 0;
          line-height: 14px;
        }
      }
      .bottom {
        margin-left: 10px;
        .row {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #b2b2b2;
          letter-spacing: 0;
          line-height: 14px;
          margin-bottom: 10px;
          .left {
            width: 58px;
            text-align: justify;
            text-align-last: justify;
          }
          .right {
            margin-left: 4px;
            color: #333333;
          }
        }
        .row:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .person-content {
    width: 345px;
    margin: 0 auto;
    padding: 15px 0 20px 0;
    background: #ffffff;
    border-radius: 4px;
    margin-top: 10px;
    .title {
      padding-left: 8px;
      font-family: PingFangSC-Medium;
      font-weight: 900;
      font-size: 14px;
      color: #1a1a1a;
      letter-spacing: 0;
      line-height: 14px;
      border-left: 2px solid #4CA8FF;
      margin-bottom: 15px;
    }
    .info {
      margin-left: 10px;
      .row {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #b2b2b2;
        letter-spacing: 0;
        line-height: 14px;
        margin-bottom: 10px;
        .left {
          width: 58px;
          text-align: justify;
          text-align-last: justify;
        }
        .right {
          margin-left: 4px;
          color: #333333;
        }
      }
      .row:last-child {
        margin-bottom: 0;
      }
    }
  }
  .discount-content {
    width: 345px;
    background: #ffffff;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 10px;
    .common {
      width: 321px;
      height: 56px;
      margin: 0 auto;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1a1a1a;
        letter-spacing: 0;
      }
      .right {
        max-width: 220px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        text-align: right;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img {
          margin-left: 6px;
          height: 12px;
        }
        .switch-button {
          margin-left: 10px;
        }
        // .switch-button {
        //   height: 32px;
        //   position: relative;
        //   margin-left: 10px;
        //   .cover {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     right: 0;
        //     bottom: 0;
        //   }
        // }
      }
    }
    .common:last-child{
      border-bottom: 0;
    }
    .g-coin {
      border-bottom: 0;
    }
  }
  .submit-content {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 56px;
    background: #ffffff;
    box-shadow: inset 0 0 0 0 #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price {
      margin-left: 15px;
      .price-detail {
        font-family: PingFangSC-Medium;
        font-weight: 900;
        font-size: 14px;
        color: #f1002d;
        letter-spacing: 0;
        .price-icon {
          font-family: PingFangSC-Medium;
          font-weight: 900;
          font-size: 18px;
          color: #f1002d;
          letter-spacing: 0;
          margin-left: 9px;
        }
        .number {
          font-family: PingFangSC-Medium;
          font-weight: 900;
          font-size: 24px;
          line-height: 23px;
        }
      }
    }
    .btn {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      background: #f1002d;
      border-radius: 4px;
      margin-right: 15px;
    }
  }
  .insurance-list{
    position: fixed;
    bottom: 40px;
    left: 20px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    background: #000;
    color: #fff;
    text-align: center;
    border-radius: 60px;
  }
}
</style>
<style lang="less">
.insurance-detail-wrapper {
  .mint-switch-input:checked + .mint-switch-core {
    border-color: #000;
    background: #000;
  }
  .mint-cell:last-child {
    background-image: none;
  }
  .mint-cell-wrapper {
    background-image: none;
    .mint-cell-title > span {
      display: block;
    }
  }
  .mint-cell-swipe-buttongroup {
    display: table;
  }
  .mint-cell-swipe-button {
    display: table-cell;
    vertical-align: middle;
  }
}
</style>

<template>
  <div class="insurance-detail-wrapper">
    <!-- <div class="app-bar" ref="nav">
      <div class="bar-back f-14" @click="back"></div>
      <b class="fw-n">我的保单</b>
    </div> -->
    <div class="insurance-content">
      <div class="insurance-info">
        <div class="top">
          <div class="name">{{insuranceDetailView.insuranceName}}</div>
        </div>
        <div class="bottom">
          <div class="row"><span class="left">保险公司</span>:&nbsp;<span class="right">{{insuranceDetailView.insuranceCompanyName}}</span></div>
          <div class="row"><span class="left">生效日期</span>:&nbsp;<span class="right">{{insuranceDetailView.effectStartDate}}</span></div>
          <div class="row"><span class="left">截止日期</span>:&nbsp;<span class="right">{{insuranceDetailView.effectEndDate}}</span></div>
          <div class="row"><span class="left">保费</span>:&nbsp;<span class="right">¥{{insuranceDetailView.premium}}</span></div>
          <div class="row"><span class="left">保额</span>:&nbsp;<span class="right">{{insuranceDetailView.insuredAmountDesc}}</span></div>
        </div>
      </div>
    </div>

    <div class="person-content" v-for="(item, index) in insuranceDetailView.insurantViewList" :key="index">
      <div class="title">被保人信息</div>
      <div class="info">
        <div class="row"><span class="left">姓名</span>:&nbsp;<span class="right">{{item.name}}</span></div>
        <div class="row"><span class="left">证件类型</span>:&nbsp;<span class="right">{{item.cerTypeDesc}}</span></div>
        <div class="row"><span class="left">证件号码</span>:&nbsp;<span class="right">{{item.cerId}}</span></div>
        <div class="row"><span class="left">手机号码</span>:&nbsp;<span class="right">{{item.insurePhone}}</span></div>
      </div>
    </div>

    <div class="person-content">
      <div class="title">投保人信息</div>
      <div class="info">
        <div class="row"><span class="left">姓名</span>:&nbsp;<span class="right">{{insuranceDetailView.applicantView.name}}</span></div>
        <div class="row"><span class="left">证件类型</span>:&nbsp;<span class="right">{{insuranceDetailView.applicantView.cerTypeDesc}}</span></div>
        <div class="row"><span class="left">证件号码</span>:&nbsp;<span class="right">{{insuranceDetailView.applicantView.cerId}}</span></div>
        <div class="row"><span class="left">手机号码</span>:&nbsp;<span class="right">{{insuranceDetailView.applicantView.insurePhone}}</span></div>
      </div>
    </div>
    
    <div class="discount-content">
      <div class="common" v-for="(item, index) in insuranceOrderDiscountsView.privilegeInfoViewList" :key="index">
        <div class="left">{{item.privilegeDesc}}</div>
        <div class="right" @click="chooseDiscount(item.type)">
          <span>{{item.tipRight}}</span><img src="../../../assets/image/order/right.png" alt="" v-if="item.type == 3">
          <div class="switch-button" v-if="item.type == 5">
            <mt-switch v-model="checkedType" v-if="item.canUse"></mt-switch>
            <div class="cover"></div>
          </div>
        </div>
      </div>
      <!-- <div class="common">
        <div class="left">会员减免</div>
        <div class="right">
          <span>{{insuranceOrderDiscountsView.privilegeInfoViewList[1].tipRight}}</span>
        </div>
      </div>
      <div class="common g-coin">
        <div class="left">G币抵现</div>
        <div class="right">
          <span>{{insuranceOrderDiscountsView.privilegeInfoViewList[2].tipRight}}</span>
          <div class="switch-button">
            <mt-switch v-model="checkedType" v-if="insuranceOrderDiscountsView.privilegeInfoViewList[2].canUse"></mt-switch>
            <div class="cover"></div>
          </div>
        </div>
      </div> -->
    </div>

    <div class="submit-content">
      <div class="price">
        <div class="price-detail"><span>总计</span><span class="price-icon">¥</span><span class="number">{{insuranceOrderDiscountsView.realPriceDesc}}</span></div>
      </div>
      <div class="btn" @click="addInsuranceOrder">提交订单</div>
    </div>
    <!-- <div class="insurance-list" @click="toInsuranceList">我的保单</div> -->
  </div>
</template>

<script>
import api from '@/api/insurance'
import storage from '@/utils/storage-lite'
import bridge from '@/utils/bridge'

export default {
  data () {
    return {
      checkedType: false,
      insuranceData: '',
      insuranceDetailView: '',
      insuranceOrderDiscountsView: '',
      confirmNumber: '',
      saleUnitId: '',
      totalPrice: '',
      orderNo: '',
      realPrice: '',
      couponAccountId: '',
      memberReducePrice: '',
      coinToUse: '',
      couponId: '-2'
    }
  },
  created() {
    bridge.bridgeFun()
    this.getInsuranceOrderForm()
    if(!this.$route.query.isFirst){
      storage.remove('insuranceOrderDiscountsView')
    }
  },
  methods: {
    async getInsuranceOrderForm(){
      let params = {
        insuId: this.$route.query.insuId
      }
      let res = await api.getInsuranceOrderForm(params)
      console.log(res,'kkkkkkkk')
      const { code, status, message, data } = res
      // if(code == '3090320001'){
      //   var url = 'ggj://redirect/typeCommon/' + JSON.stringify({type: 6});
      //   window.location.href = url;
      // }
      if (status !== 1) {
        this.$toast(message)
      }
      this.insuranceData = data
      this.insuranceDetailView = data.insuranceDetailView
      this.totalPrice = data.insuranceDetailView.premium
      this.orderNo = data.insuranceDetailView.orderNo
      let temp = storage.get('insuranceOrderDiscountsView')
      this.confirmNumber = data.insuranceOrderDiscountsView.confirmNumber
      if(temp){
        this.insuranceOrderDiscountsView = temp
        this.checkedType = temp.privilegeInfoViewList[2].userSelection ? true:false
        this.confirmNumber = temp.confirmNumber
        this.saleUnitId = temp.saleUnitId
        this.realPrice = temp.realPrice
        this.memberReducePrice = temp.privilegeInfoViewList[1].reducePrice
        this.coinToUse = temp.privilegeInfoViewList[2].reducePrice
        if(temp.privilegeInfoViewList[0].magicInfo){
          this.couponId = temp.privilegeInfoViewList[0].magicInfo
        }else{
          this.couponId = '-2'
        }
      }else{
        this.insuranceOrderDiscountsView = data.insuranceOrderDiscountsView
        this.checkedType = data.insuranceOrderDiscountsView.privilegeInfoViewList[2].userSelection ? true:false
        this.confirmNumber = data.insuranceOrderDiscountsView.confirmNumber
        this.saleUnitId = data.insuranceOrderDiscountsView.saleUnitId
        this.realPrice = data.insuranceOrderDiscountsView.realPrice
        this.memberReducePrice = data.insuranceOrderDiscountsView.privilegeInfoViewList[1].reducePrice
        this.coinToUse = data.insuranceOrderDiscountsView.privilegeInfoViewList[2].reducePrice
        // if(data.insuranceOrderDiscountsView.privilegeInfoViewList[0].canUse === 0){
        //   this.couponAccountId = 0
        // }
        if(data.insuranceOrderDiscountsView.privilegeInfoViewList[0].magicInfo){
          this.couponId = data.insuranceOrderDiscountsView.privilegeInfoViewList[0].magicInfo
        }else{
          this.couponId = "-2"
        }
      }
    },
    chooseDiscount(type) {
      if(type==3){
        this.$router.push({
          path: '/insurance/discount',
          query: {
            insuId: this.$route.query.insuId,
            confirmNumber: this.confirmNumber,
            totalPrice: this.totalPrice,
            saleUnitId: this.saleUnitId,
            checkedType: this.checkedType,
            couponId: this.couponId
          }
        })
      }
    },
    async updateInsuranceConfirmOrder(){
      let params = {
        couponAccountId: this.couponId,
        saleUnitId: this.saleUnitId,
        useCoin: this.checkedType?1:0,
        totalPrice: this.totalPrice
      }
      let res = await api.updateInsuranceConfirmOrder(params)
      console.log(res,'啊实打实大师的')
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      storage.set('insuranceOrderDiscountsView', data)
      this.insuranceOrderDiscountsView = data
      this.checkedType = data.privilegeInfoViewList[2].userSelection ? true:false
      this.confirmNumber = data.confirmNumber
      this.saleUnitId = data.saleUnitId
      this.realPrice = data.realPrice
      this.memberReducePrice = data.privilegeInfoViewList[1].reducePrice
      this.coinToUse = data.privilegeInfoViewList[2].reducePrice
    },
    async addInsuranceOrder(){
      let coinToUse = 0
      if(this.checkedType){
        coinToUse = this.coinToUse
      }else{
        coinToUse = 0
      }
      let params = {
        confirmNumber: this.confirmNumber,
        orderNo: this.orderNo,
        realPrice: this.realPrice,
        couponAccountId: this.couponId,
        memberReducePrice: this.memberReducePrice,
        coinToUse: coinToUse
      }
      let res = await api.addInsuranceOrder(params)
      console.log(res,'提交订单呀呀呀呀')
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.pay(data)
    },
    pay(value){
      let self = this
      bridge.appPayCenter(value,11, 3, function () {
        self.$router.push({
          path: '/insurance/deal/detail',
          query: {
            payResult: 1,
            orderId: value,
            isHide: 1
          }
        })
      },function(){
        self.$router.push({
          path: '/insurance/deal/detail',
          query: {
            payResult: 0,
            orderId: value,
            isHide: 1
          }
        })
      },function(){
        self.$router.push({
          path: '/insurance/deal/detail',
          query: {
            payResult: 0,
            orderId: value,
            isHide: 1
          }
        })
      })
    },
    toInsuranceList(){
      this.$router.push({
        path: '/insurance'
      })
    }
  },
  watch:{
    'checkedType': function(newVal, oldVal){
      console.log(newVal,'4444444')
      this.updateInsuranceConfirmOrder()
    }
  }
}
</script>
