<template>
  <div class="swiper-banner" v-if="list.length>0">
    <swiper :options="swiperOption" ref="mySwiper" v-if="list.length>1">
      <swiper-slide v-for="(slide,index) in list" :key="index">
        <a :style="'background-image:url('+slide.maxUrl+')'" class="swiper-infos animated aFadeIn" ></a>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination" v-if="list.length > 1"></div> -->
    </swiper>
    <a :style="'background-image:url('+list[0].maxUrl+')'" class="swiper-infos animated aFadeIn" v-else></a>
    <div class="swiper-pagination slide-index"></div>
    <!-- <div class="slide-index">{{slideIndex}}/{{slideLen}}</div> -->
  </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import('swiper/dist/css/swiper.css')
let index = 1
export default {
  name: 'banner',
  data () {
    return {
      swiperOption: {
        notNextTick: false,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          type: "fraction",
          clickable: true
        },
        // on: {
        //   renderFraction: function (currentClass, totalClass) {
        //     return '<span class="' + currentClass + '"></span>' +'//' +'<span class="' + totalClass + '"></span>'
        //   },
        // },
        // on: {
        //   slideChangeTransitionStart: () => {
        //     if (this.$refs.mySwiper.swiper) {
        //       this.slideIndex = this.$refs.mySwiper.swiper.activeIndex
        //     }
        //   }
        // },
        observer: true,
        observeParents: true,
        loop: true
      },
      slideLen: this.list.length,
      slideIndex: 1
    }
  },
  computed: {

  },
  created () {
  },
  mounted () {
  },
  methods: {

  },
  props: ['list'],
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="less">
.swiper-infos {
  width: 100%;
  height: 375px;
  background: no-repeat center;
  background-size: cover;
  vertical-align: top;
  padding-top: 0;
}
.swiper-banner .swiper-pagination-fraction{
  position:absolute;
  bottom:10px;
  left:88%;
  z-index:100;
  width:32px;
  height:16px;
  //line-height:16px;
  border: 1px solid #E0E0E0;
  color:#ccc;
  border-radius: 2px;
  background:#fff;
  text-align:center;
  font-size:8px;
  font-weight:800;
  display:flex;
  align-items: center;
  justify-content: center;
  span{
    color:#666;
    font-weight:bold;
    font-size:10px;
    vertical-align: middle;
    &:first-child{
      margin-right:3px;
    }
    &:last-child{
      margin-left:3px;
    }
  }
}
</style>
