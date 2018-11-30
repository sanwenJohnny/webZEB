<template>
  <div>
  <template v-if="listImg.length > 1">
  <swiper :options="swiperOption" ref="mySwiper" v-if="listImg">
    <swiper-slide v-for="(slide,index) in listImg" :key="index">
      <slot>
        <a :href="slide.webUrl?slide.webUrl:'javascript:;'" class="swiper-info" :style="{backgroundImage:'url('+slide.image+')'}"></a>
      </slot>
    </swiper-slide>
    <div class=" f-0 swiper-pagination" slot="pagination"></div>
  </swiper>
  </template>
  <template v-if="listImg.length == 1">
      <a :href="listImg[0].webUrl" class="swiper-info" :style="{backgroundImage:'url('+listImg[0].image+')'}"></a>
  </template>
  </div>
</template>

<script>
// import Vue from 'vue'
// import tool from '@/utils/tools'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import('swiper/dist/css/swiper.css')

export default {
  data () {
    return {
      swiperOption: {
        loop: true,
        notNextTick: false,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        observer: true,
        observeParents: true
      }
    }
  },
  props: ['listImg'],
  components: {
    swiper,
    swiperSlide
  },
  updated () {
  },
  mounted () {

  }
}
</script>

<style lang="less">
.f-0 {
  font-size:0
}
.swiper-info {
  display:block;
  width: 92%;
  margin:0 auto;
  padding-top: 40%;
  background:no-repeat center;
  background-size:cover;
  //vertical-align: top;
  border-radius: 4px;
}
.shop-banner .swiper-container {
  .swiper-pagination-bullet{
    width: 8px;
    height: 6px;
    border-radius: 0;
    background:rgba(255,255,255,.4);
    opacity: 1;
    transform: skewX(-25deg)
  }
  .swiper-pagination-bullet-active{
    width: 19px;
    height: 6px;
    background:yellow
  }
}
.shop-banner .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    margin:0 2px;
}
</style>
