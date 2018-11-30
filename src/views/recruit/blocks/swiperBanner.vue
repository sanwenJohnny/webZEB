<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="listImg">
    <swiper-slide v-if="isFirst">
      <a href="https://v.eqxiu.cn/s/6JTo58Rn" style="background-image:url(https://img.gegejia.com/9678ff4ac7f24309ab8cac867774795d.jpeg)" class="swiper-info"></a>
    </swiper-slide>
    <swiper-slide v-for="(info,index) in listImg" :key="index">
      <slot>
        <p :style="'background-image:url('+info+')'" class="swiper-info" v-if="type == 1"></p>
        <router-link :to="{name:'collegeDetail',params:{id:info.articleId}}" :style="'background-image:url('+info.image+')'" class="swiper-info" v-else></router-link>
      </slot>
    </swiper-slide>
    
    <div class=" f-0 swiper-pagination" slot="pagination" v-if="listImg.length > 1"></div>
  </swiper>
</template>

<script>
  import Vue from 'vue'
  import tool from '@/utils/tools'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import('swiper/dist/css/swiper.css')

  export default {
    data () {
      return {
        swiperOption: {
          notNextTick: false,
          autoplay: 3500,
          direction: 'horizontal',
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observer: true,
          observeParents: true,
          loop: true,
          autoplayDisableOnInteraction: false
        }
      }
    },
    props: ['listImg', 'isFirst', 'type'],
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
  width: 100%;
  background:no-repeat center;
  background-size:cover;  
  vertical-align: top;
}
.swiper-pagination-bullet{
  width: 15px !important;
  height: 3px !important;
  border-radius: 0 !important;
  margin:0 2px !important;
  background:rgba(255,255,255,.4) !important;
  opacity: 1 !important;
}
.swiper-pagination-bullet-active{
  background:#fff  !important;
}
</style>
