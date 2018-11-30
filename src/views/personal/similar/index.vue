<style lang="less" scoped>
.similar-wrapper {
  padding-top: 10px;
  .good-content {
    .good {
      width: 345px;
      height: 118px;
      margin: 0 auto;
      background-color: #fff;
      display: flex;
      align-items: center;
      position: relative;
      .left {
        margin-left: 10px;
        margin-right: 12px;
        border-radius: 4px;
        img {
          width: 88px;
          height: 88px;
          border-radius: 4px;
        }
      }
      .right {
        width: 247px;
        height: 88px;
        font-family: PingFangSC-Regular;
        letter-spacing: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .name {
          height: 36px;
          width: 225px;
          font-size: 12px;
          color: #1a1a1a;
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
          margin-top: 6px;
          .discount {
            font-size: 12px;
            color: #b2b2b2;
          }
          .price {
            margin-top: 14px;
            font-size: 14px;
            color: #f42b52;
            .price-icon {
              font-size: 12px;
            }
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
        right: 10px;
        bottom: 15px;
        padding: 0 8px;
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
  }
  .list-title {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    padding: 22px 0;
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
}
</style>
<template>
  <div class="similar-wrapper">
    <div class="good-content">
      <div class="good">
        <div class="left" @click="goGoodsDetail(info.saleGoodsId)">
          <img :src="info.image" alt="">
        </div>
        <div class="right" @click="goGoodsDetail(info.saleGoodsId)">
          <div class="name">{{info.name}}</div>
          <div class="discount-price">
            <!-- <div class="discount">比收藏时降价¥20元</div> -->
            <div class="price"><span class="price-icon">￥</span>{{info.price}}</div>
          </div>
        </div>
        <!-- <div class="right right-find-similar" @click="goGoodsDetail">
          <div class="name">马来西亚 lims 三合一速溶咖啡640g/包 新鲜三合一速溶咖啡640g/包 新鲜三阿达达萨达大师的</div>
          <div class="discount-price">
            <div class="over-time">失效</div>
          </div>
        </div> -->
        <div class="find-similar" v-if="info.productStatus === '4'">到货提醒</div>
      </div>
    </div>

    <!-- <div class="list-title">找到以下这些相似商品</div> -->
    <Recommend :listData="info.recommendProducts" />
    <div class="all">已显示全部内容</div>
  </div>
</template>

<script>
import api from '@/api/personal'
import Recommend from '@/components/recommend'
export default {
  data () {
    return {
      info: ''
    }
  },
  components: {
    Recommend
  },
  created () {
    this.getGoodsAlike()
  },
  methods: {
    async getGoodsAlike () {
      let params = {
        saleGoodsId: this.$route.query.saleGoodsId
      }
      let res = await api.getGoodsAlike(params)
      console.log('获取相似列表数据========')
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.info = data
    },
    goGoodsDetail (value) {
      this.$router.push({
        path: '/product/detail',
        query: {
          saleGoodsId: value
        }
      })
    }
  }
}
</script>
