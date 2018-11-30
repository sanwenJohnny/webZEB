
<style lang="less" scoped>
.qa-wrapper {
  .qa-box {
    background: #fff;
    padding-right: 0.426667rem;
    border: 1px solid #e0e0e0;
    .title {
      position: relative;
      height: 48px;
      margin-left: 14px;
      line-height: 48px;
      font-family: PingFangSC-Regular;
      font-size: 15px;
      color: #333333;
      letter-spacing: 0;
      .title-text {
        height: 1.28rem;
        line-height: 1.28rem;
        vertical-align: middle;
      }
      .arrow-up {
        position: absolute;
        right: 0;
        top: 50%;
        display: inline-block;
        width: 0.393333rem;
        height: 0.2466665rem;
        margin-top: -0.1466665rem;
        vertical-align: middle;
        background: url("../../../../assets/image/personal/arrow-up.jpg")
          no-repeat;
        background-size: contain;
      }
      .arrow-down {
        position: absolute;
        right: 0;
        top: 50%;
        display: inline-block;
        width: 0.393333rem;
        height: 0.2466665rem;
        margin-top: -0.1466665rem;
        vertical-align: middle;
        background: url("../../../../assets/image/personal/arrow-down.png")
          no-repeat;
        background-size: contain;
      }
    }
    .padding {
      padding: 0.106667rem 0 0.64rem 0.373333rem;
      .desc {
        display: inline-block;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #999999;
        letter-spacing: 0;
        line-height: 18px;
      }
    }
  }
  .qa-all {
    padding: 0.266667rem 0;
    font-size: 0.293333rem;
    color: #858585;
    text-align: center;
  }
}
</style>

<template>
  <div>
    <div class="qa-wrapper">
      <div class="qa-list">
        <div class="qa-box" v-for="(data , index) in dataList" :key="index">
          <p class="title" @click="showOrHide(index)">
            <i class="title-text">{{data.title}}</i>
            <span class="arrow-up" v-if="index == num"></span>
            <span class="arrow-down" v-if="index !=  num"></span>
          </p>
          <div v-if="index == num" class="padding">
              <div class="desc" v-for="(item,index) in data.desc" :key="index">{{item}}</div>
          </div>
          <!-- <div class="hide padding" v-if="index != num">
              <div class="desc" v-for="item in data.desc">{{item}}</div>
          </div> -->
        </div>
      </div>
      <div class="qa-all">已显示全部</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [
        {
          title: 'G币来源',
          desc: [
            '1、兑换：店主可将可提现余额兑换成G币，兑换后不可提现',
            '2、红包：领取来的红包（领来的红包不可再次发送，根据红包不同过期时间，未下单使用则过期退还至红包发放者）',
            '3、平台发放的G币，您可能收到来自平台的小惊喜哦~'
          ]
        },
        {
          title: 'G币使用',
          desc: [
            '1、发红包，G币可以通过红包的形式赠送给好友（红包分为普通红包和拼手气红包，可选择全部人可领or仅团队可领）',
            '2、下单使用，1G币=1RMB，G币最多可抵扣订单应付金额的50%，下单时先使用红包G币再使用兑换&平台发放G币，其中红包又会先使用先过期的红包，再使用后过期的红包',
            '3、发生退款时，会按照退款金额比例退还G币'
          ]
        },
        {
          title: '*G币解释权最终归本平台所有',
          desc: ['*G币解释权最终归本平台所有']
        }
      ],
      num: 0
    }
  },
  methods: {
    showOrHide (value) {
      if(value == this.num){
        this.num = -1
      }else{
        this.num = value
      }
    }
  }
}
</script>
