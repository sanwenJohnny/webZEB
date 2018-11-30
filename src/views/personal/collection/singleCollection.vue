<style lang="less" scoped>
.single-collection-wrapper {
  .good {
    padding: 0 15px;
    height: 118px;
    border-bottom: 1px solid #f6f6f6;
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
      width: 222px;
      height: 88px;
      font-family: PingFangSC-Regular;
      letter-spacing: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
    .cancle-collect{
      position: absolute;
      right: 10px;
      top: 18px;
      padding: 5px;
      img{
        height: 20px;
      }
    }
  }
  .out-time {
    background: #f5f5f5;
  }
}
</style>

<template>
  <div class="single-collection-wrapper">
    <div class="good" :class="{'out-time': m.status === 4}">
      <div class="left" @click="goGoodsDetail(m.saleGoodsId)">
        <img :src="m.image">
        <div class="common chance" v-if="m.status === 2">还有机会</div>
        <div class="common not-begin" v-if="m.status === 3">{{endTime}}后开抢</div>
        <div class="shadow" v-if="m.status ===4"></div>
      </div>
      <div class="right" :class="{'right-find-similar': m.status === 4}" @click="goGoodsDetail(m.saleGoodsId)">
        <div class="name">{{m.name}}</div>
        <div class="discount-price" v-if="m.status !==4">
          <div class="discount" v-if="m.depreciate">{{m.depreciate}}</div>
          <div class="price">￥{{m.highPrice}}</div>
        </div>
        <div class="discount-price" v-if="m.status ===4">
          <div class="over-time">失效</div>
        </div>
      </div>
      <!-- <div class="right right-find-similar" @click="goGoodsDetail">
        <div class="name">马来西亚 lims 三合一速溶咖啡640g/包 新鲜三合一速溶咖啡640g/包 新鲜三阿达达萨达大师的</div>
        <div class="discount-price">
          <div class="over-time">失效</div>
        </div>
      </div> -->
      <div class="find-similar" v-if="analogy" @click="findSimilar(m.saleGoodsId)">找相似</div>
      <div class="cancle-collect" @click="cancleCollect(m.saleGoodsId)"><img src="~images/personal/delete-collect.png"></div>
    </div>
  </div>
</template>

<script>
import api from '@/api/personal'

export default {
  data () {
    return {
      timer: null,
      restTime: '',
      endTime: ''
    }
  },
  props: ['m', 'analogy', 'resetCollectionList'],
  created () {
    let that = this
    if (this.m.second) {
      this.restTime = Number(this.m.second)
      this.timer = setInterval(function () {
        that.restTime = that.restTime - 1
        if (that.restTime === 0) {
          clearInterval(that.timer)
          // that.$emit("resetForChild");
        }
        that.endTime = that.handleEndTime(that.restTime)
      }, 1000)
    }
  },
  methods: {
    goGoodsDetail (value) {
      this.$router.push({
        path: '/product/detail',
        query: {
          saleGoodsId: value
        }
      })
    },
    findSimilar (value) {
      this.$router.push({
        path: '/personal/similar',
        query: {
          saleGoodsId: value
        }
      })
    },
    async cancleCollect(value){
      let params = {
        saleGoodsId: value
      }
      let res = await api.cancleCollect(params)
      console.log(res)
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
        return false
      }
      let self = this
      setTimeout(function(){
        self.$emit('resetCollectionList')
      },200)
    },
    handleEndTime (sec) {
      var hour = 0
      var minute = 0
      var second = 0
      var countdownStr
      if (sec >= 60) {
        minute = Math.floor(sec / 60)
        second = sec % 60
        if (minute >= 60) {
          hour = Math.floor(minute / 60)
          minute = minute % 60
        } else {
          hour = 0
        }
      } else {
        second = sec
        hour = 0
        minute = 0
      }

      hour = parseInt(hour) < 10 && parseInt(hour) > 0 ? '0' + hour : hour
      minute =
        parseInt(minute) < 10 && parseInt(minute) > 0 ? '0' + minute : minute
      second =
        parseInt(second) < 10 && parseInt(second) > 0 ? '0' + second : second
      countdownStr = hour + ':' + minute + ':' + second
      // console.log(countdownStr, 'countdownStr')
      return countdownStr
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
