<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="listImg">
    <swiper-slide v-for="(slide,index) in listImg" :key="index" >
      <slot>
        <div @click="goUrl(slide)" class="swiper-info" :style="{backgroundImage:'url('+slide.image+')'}"></div>
  
      </slot>
    </swiper-slide>
    <div class=" f-0 swiper-pagination" slot="pagination" v-if="listImg.length >= 1"></div>
  </swiper>
</template>

<script>
import Vue from "vue";
import tool from "@/utils/tools";
import auth from "@/utils/auth";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { Toast } from "mint-ui";
import("swiper/dist/css/swiper.css");

export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        notNextTick: false,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        observer: true,
        observeParents: true
      }
    };
  },
  props: ["listImg", "isMember"],
  components: {
    swiper,
    swiperSlide
  },
  updated() {},
  mounted() {},
  methods: {
    goUrl(slide) {
      const url = slide.webUrl;
      const type = slide.type;
      const appOnly = slide.appOnly;
      const desc = slide.desc ? slide.desc:"下载斑马会员App立享会员特权";
      const memberOnly = slide.memberOnly;
      const memberMsg = slide.memberMsg ? slide.memberMsg : '仅会员支持该会员权益';
      if (type && type == 4) {
        Toast(desc);
        return false;
      }
      
      if (appOnly) {
        Toast(desc);
        return false;
      }
      
      if(type && type == 27){
         Toast('仅限斑马会员app用户使用');
          return false;
      }

      if(memberOnly){
        if(!auth.isLoggedIn()){
          auth.login(this.$route.fullPath);
          return false;
        }else{
          if(this.isMember){
              window.location.href = url;
          }else{
               Toast(memberMsg);
          }
        }
      }else{
         window.location.href = url;
      }

      // if (!auth.isLoggedIn()) {
      //   auth.login(this.$route.fullPath);
      //   return false;
      // } else {
      //   if ((memberOnly && this.isMember) || !memberOnly) {
      //     window.location.href = url;
      //   } else {
      //     Toast(memberMsg);
      //   }
      // };
    }
  }
};
</script>

<style lang="less">
.f-0 {
  font-size: 0;
}
.swiper-info {
  height: 100%;
  //width: 100%;
  margin:0 20px;
  background: no-repeat center;
  background-size: cover;
  vertical-align: top;
}
.swiper-container {
  height: 100%;
  .swiper-pagination-bullet {
    width: 11px;
    height: 6px;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.4);
    opacity: 1;
    transform: skewX(-45deg);
  }
  .swiper-pagination-bullet-active {
    background: yellow;
    width: 19px;
  }
}
.swiper-container-horizontal {
  & > .swiper-pagination-bullets {
    .swiper-pagination-bullet {
      margin: 0 2px;
    }
  }
}
</style>
