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
import tool from "@/utils/tools"
import auth from '@/utils/auth'
import api from  '@/api/cart'
// import config from '@/service/config'
// import request from '@/service/request'

const winLink = window.location.href;
const shopId = tool.queryStringToObject.accountid ? "&accountid=" + tool.queryStringToObject.accountid : "";
const shopCache = "?a=" + Math.round(Math.random() * 100);

export default {
  name: "footer-bar",
  data() {
    return {          
      barData: [
        {
          name: "会员",
          tag: "member",
          url: '/home'
        },
        {
          name: "商城",
          tag: "home",
          url: "/shop"
        },
        // {
        //   name: "店主精选",
        //   tag: "shopSelect",
        //   url: tool.linkHeader+"/hp/shopSelect.html"+shopCache+shopId
        // },
        {
          name: "购物车",
          tag: "cart",
          url: '/cart',
         // checkLogin:true
        },
        {
          name: "个人中心",
          tag: "personal",
          url: '/personal',          
          //checkLogin:true
        }
      ],
      carNum: 0
    };
  },
  props: ["barTag"],
  methods: {
    turnLink (url,type){
      if (type){   
        if (auth.isLoggedIn()){

          window.location.href = url
        } else {
          auth.login(winLink)
        }
      } else {
        window.location.href = url
      }    
    },
    carNumFun: function() {
      
      //购物车num
      if (auth.isLoggedIn()){
         api.cartCount().then((response)=>{
          console.log(response);
          let data = response.data;
          if(response.status == 1){
            if(data.count > 0){
              this.carNum = data.count;
            }
          }
        })
      }
     
      // var _this = this;
      // if (auth.isLoggedIn()) {
      //   let conf = new config()          
      //   conf.url = tool.linkHeader +'/spcart/showcartcount'
      //   new request(conf).POST().then((data) => {
      //     if (data.cartCount > 0) {
      //       _this.carNum = data.cartCount;
      //     }
      //   })      
      // }
     
    }
  },
  mounted() {
   this.carNumFun()
  }
};
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
  background:rgba(0,0,0,0.88);
  color:#fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  transform: translate(-50%, 0);
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  a {
    position: relative;
    flex: 1;
    padding-top: 6px;
    font-size: 10px;
    color: #858585;//未选中的字体颜色
    &:before {
      content: "";
      display: block;
      width: 30px;
      height: 26px;
      margin: 0 auto 0px;
      background: no-repeat center;
      background-size: contain;
    }
  }
  .on {
    color: #fff;
  }
  .footer-bar-tb1 {
    &:before {
      background-image: url('~images/bar_tb1_gray.png');
    }
    &.on {
      &:before {
        background-image: url('~images/bar_tb1.png');
      }
    }
  }
  .footer-bar-tb2 {
    &:before {
      background-image: url('~images/bar_tb2_gray.png');
    }
    &.on {
      &:before {
        background-image: url('~images/bar_tb2.png');
      }
    }
  }
  .footer-bar-tb3 {
    &:before {
      background-image: url('~images/bar_tb3_gray.png');
    }
    &.on {
      &:before {
        background-image: url('~images/bar_tb3.png');
      }
    }
  }
  .footer-bar-tb4 {
    &:before {
      background-image: url('~images/bar_tb4_gray.png');
    }
    &.on {
      &:before {
        background-image: url('~images/bar_tb4.png');
      }
    }
  }

  .footer-bar-tb5 {
    &:before {
      background-image: url('~images/bar_tb5_gray.png');
    }
    &.on {
      &:before {
        background-image: url('~images/bar_tb5.png');
      }
    }
  }

}
.car-num {
  position: absolute;
  top: 2px;
  left: 55%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  line-height: 14px;
  background:yellow;
  color:#000;
  text-align: center;
  font-size: 12px;
}

</style>





