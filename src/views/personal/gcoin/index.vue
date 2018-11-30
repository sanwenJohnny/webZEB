<style lang="less" scoped>
.gcoin-wrapper {
  width: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .article {
    height: 100%;
    background: #ffffff;
    padding-top: 0.373333rem;
    overflow: hidden;
    .home-head {
      display: flex;
      padding: 0 15px;
      justify-content: space-between;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      line-height: 16px;
      .left {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          height: 18px;
        }
      }
      .right {
        border-bottom: 1px solid #333333;
      }
    }
    .total {
      margin-top: 38px;
      width: 100%;
      text-align: center;
      .title {
        display: block;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        line-height: 14px;
      }
      .number {
        display: block;
        margin-top: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 900;
        font-size: 58px;
        color: #dfa521;
        letter-spacing: 0;
        text-align: center;
        line-height: 58px;
      }
    }
    .btns {
      margin-top: 67px;
      text-align: center;
      .btn {
        display: inline-block;
        width: 165px;
        height: 44px;
        line-height: 44px;
        background: #1a1a1a;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 17px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: center;
        line-height: 44px;
      }
      .btn:last-child {
        margin-left: 0.533333rem;
      }
    }
    .incomes {
      width: 100%;
      box-sizing: border-box;
      padding: 0 34px;
      margin-top: 50px;
      .detail_line {
        display: block;
        width: 100%;
        height: 20px;
        line-height: 20px;
      }
      .detail_line.second {
        margin-top: 14px;
      }
      .detail_line > i {
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #000000;
        vertical-align: middle;
      }
      .detail_line.second i {
        background: #ff0000;
      }
      .detail_line > .tl {
        display: inline-block;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        margin-left: 5px;
      }
      .detail_line .tar {
        float: right;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #1a1a1a;
        letter-spacing: 0;
      }
      .warn i {
        font-style: normal;
      }
      .warn {
        display: inline-block;
        margin-top: 14px;
        font-family: PingFangSC-Regular;
        font-size: 11px;
        color: #b2b2b2;
        letter-spacing: 0;
      }
    }
  }
  .explain {
    //margin-top: 92px;
    display: block;
    box-sizing: border-box;
    padding-top: 69px;
    padding-bottom: 20px;
    // width: 100%;
    // height: 3rem;
    background: url("../../../assets/image/personal/explain_bg.png") no-repeat;
    background-size: 100%;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #b2b2b2;
    letter-spacing: 0;
    text-align: center;
    em {
      color: #1a1a1a;
    }
  }
}

// .enterqx {
//   display: inline-block;
//   width: 100%;
//   text-align: center;
//   color: #0076FF;
//   font-size: 0.32rem;
// }
// .enterqx i {
//   display: inline-block;
//   width: 0.186667rem;
//   height: 0.293333rem;
//   //background: url('../img/arrow_blue.png') no-repeat;
//   background-size: 100%;
//   vertical-align: -0.15em;
// }

.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
}
.dialog .d_confirm {
  width: 69.3%;
  background: #ffffff;
  margin: 5.333333rem 15.3%;
  color: #000000;
}
.dialog .d_confirm .d_head {
  width: 100%;
  height: 1.813333rem;
  line-height: 1.813333rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.426667rem;
}
.dialog .d_confirm .d_btns span {
  display: inline-block;
  width: 49%;
  height: 1.173333rem;
  line-height: 1.173333rem;
  font-size: 0.373333rem;
  color: #000;
}
.dialog .d_confirm .d_btns span:last-child {
  border-left: 1px solid #e0e0e0;
}
.replace{
  height: 245px;
}
</style>
<style lang="less">
.gcoin-wrapper {
  .mint-msgbox-wrapper {
    .mint-msgbox {
      background: #ffffff;
      border-radius: 4px;
      width: 270px;
      height: 124px;
      .mint-msgbox-content {
        padding-bottom: 29px;
        .mint-msgbox-message {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 18px;
          margin-top: 15px;
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
  <div class="gcoin-wrapper">
    <div class="box article">
        <div class="home-head">
            <div class="left">
              <img src="../../../assets/image/personal/home-icon.png" alt="" @click="toShopPage"><span>首页</span>
            </div>
            <div class="right" @click="toCoinDetail">明细</div>
        </div>
        <div class="total">
            <span class="title">我的G币总额</span>
            <span class="number">{{gCoin.coinTotal}}</span>
        </div>
        <div class="btns" v-if="gCoin.isMember">
            <div class="btn" @click="downloadApp">兑换G币</div>
            <div class="btn" @click="downloadApp">发红包</div>
        </div>
        <!-- <span class="enterqx" v-show="isMember==1" @click="toQx">
            如需兑换G币，请前往千禧推广联盟
            <i></i>
        </span> -->
        <div class="box incomes" v-if="gCoin.isMember">
            <span class="detail_line"><i></i><em class="tl">{{gCoin.items[0].desc}}</em><em class="tar">{{gCoin.items[0].amount}}</em></span>
            <span class="detail_line second"><i></i><em class="tl">{{gCoin.items[1].desc}}</em><em class="tar">{{gCoin.items[1].amount}}</em></span>
            <em class="warn">{{gCoin.tip}}</em>
        </div>
        <div class="replace" v-if="!gCoin.isMember"></div>
        
        <!-- <div class="dialog">
            <div class="d_confirm">
                <div class="d_head">打开APP可用</div>
                <div class="d_btns">
                    <span>取消</span>
                    <span>去打开</span>
                </div>
            </div>
        </div> -->
    </div>
    <span class="explain" @click="toCoinIntro">1G币相当于1元人民币 | <em>说明</em></span>
  </div>
</template>

<script>
import api from '@/api/personal'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      gCoin: ''
    }
  },
  created () {
    this.getCoin()
  },
  methods: {
    async getCoin () {
      let res = await api.getCoin()
      console.log(res, '获取我的G币')
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.gCoin = data
    },
    toCoinDetail () {
      this.$router.push('/personal/gcoin/detail')
    },
    toCoinIntro () {
      this.$router.push('/personal/gcoin/explain')
    },
    downloadApp () {
      MessageBox.confirm('',{
        title: '',
        message: '下载app可用',
        showCancelButton: true,
        confirmButtonText: '去下载'
      }).then(action => {})
    },
    toShopPage(){
      this.$router.push('/shop')
    }
  }
}
</script>
