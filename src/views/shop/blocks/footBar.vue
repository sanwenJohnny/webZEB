<template>
  <div class="footer-bar">
    <a v-for="(info,i) in barData" :key="i" :class="['footer-bar-tb'+(i+1),{'on':info.tag == barTag}]" href="javascript:;" @click="turnLink(info.url,info.checkLogin)">
      <template v-if="info.tag == 'cart'">
        <i class="car-num" v-if="carNum != 0" v-text="carNum"></i>
      </template>
      {{info.name}}
    </a>
  </div>
</template>

<script>
import tool from '@/utils/tools'
import auth from '@/utils/auth'
import api from '@/api/product'

const winLink = window.location.href
const shopId = tool.queryStringToObject.accountid
  ? '&accountid=' + tool.queryStringToObject.accountid
  : ''
const shopCache = '?a=' + Math.round(Math.random() * 100)

export default {
  name: 'footer-bar',
  data () {
    return {
      barData: [
        {
          name: '首页',
          tag: 'home',
          url: '/'
        },
        {
          name: '店主精选',
          tag: 'shopSelect',
          url: tool.linkHeader + '/hp/shopSelect.html' + shopCache + shopId
        },
        {
          name: '购物袋',
          tag: 'cart',
          url: tool.linkHeader + '/spcart/listsc',
          checkLogin: true
        },
        {
          name: '个人中心',
          tag: 'userCenter',
          url: tool.linkHeader + '/spokesPerson/getList',
          checkLogin: true
        }
      ],
      carNum: 0
    }
  },
  props: ['barTag'],
  methods: {
    turnLink (url, type) {
      if (type) {
        if (auth.isLoggedIn()) {
          window.location.href = url
        } else {
          auth.login(winLink)
        }
      } else {
        window.location.href = url
      }
    },
    carNumFun: function () {
      // 购物车num
      var _this = this
      if (auth.isLoggedIn()) {
        api.showcartcount().then(data => {
          if (data.cartCount > 0) {
            _this.carNum = data.cartCount
          }
        })
      }
    }
  },
  mounted () {
    this.carNumFun()
  }
}
</script>

<style lang="less" scoped>
.footer-bar {
  display: box;
  display: flex;
  position: fixed;
  z-index: 10;
  left: 50%;
  bottom: 0;
  width: 100%;
  max-width: 750px;
  height: 50px;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  transform: translate(-50%, 0);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.footer-bar a {
  position: relative;
  flex: 1;
  // width: 25%;
  padding-top: 6px;
  font-size: 10px;
}

.footer-bar .on {
  color: #000;
}

.footer-bar a:before {
  content: "";
  display: block;
  width: 30px;
  height: 26px;
  margin: 0 auto 3px;
  background: no-repeat center;
  background-size: contain;
}

.footer-bar .footer-bar-tb1:before {
  background-image: url(/static/image/bar_tb1_gray.png);
}

.footer-bar .footer-bar-tb1.on:before {
  background-image: url(/static/image/bar_tb1.png);
}

.footer-bar .footer-bar-tb2:before {
  background-image: url(/static/image/bar_tb2_gray.png);
}

.footer-bar .footer-bar-tb2.on:before {
  background-image: url(/static/image/bar_tb2.png);
}

.footer-bar .footer-bar-tb3:before {
  background-image: url(/static/image/bar_tb3_gray.png);
}

.footer-bar .footer-bar-tb3.on:before {
  background-image: url(/static/image/bar_tb3.png);
}

.footer-bar .footer-bar-tb4:before {
  background-image: url(/static/image/bar_tb4_gray.png);
}

.footer-bar .footer-bar-tb4.on:before {
  background-image: url(/static/image/bar_tb4.png);
}

.car-num {
  position: absolute;
  top: 5px;
  left: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  line-height: 16px;
  background: #f00;
  color: #fff;
  text-align: center;
  font-size: 12px;
}
</style>
