<template>
  <div class="seckill-swiper" ref="seckillSwiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(info,index) in navData.playList" :key="index">
          <a href="javascript:;" class="swiper-slide t-c" :class="{'on':type == index,'scrollOn':isScroll}" @click="navClick(index)">
            <b>{{info.title}}</b>
            <em>{{info.subTitle}}</em>
          </a>   
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'swipeBar',
    data () {
      return {
        swiperOption: {
          initialSlide: this.showMod,
          slidesPerView: 'auto',
          slideToClickedSlide: true,
          freeMode: true,
          freeModeSticky: true
        },
        isScroll: false,
        type: 0
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
  
    },
    props: {
      navData: '',
      showMod: ''
    },
    mounted () {
      this.type = this.showMod
      // console.log(this.showMod)
    },
    methods: {
      navClick (index) {
        this.type = index
        // console.log(index)
        this.$refs.mySwiper.swiper.slideTo((Number(index)), 300, true)
        this.$emit('navindex', index)
      }
    }
  }
</script>
<style lang="less" scoped>
.swiper-slide {
  width: auto;
}
.seckill-swiper {
  z-index: 5;
  padding-top: 8px;
  border-bottom: 1px solid #f3f3f3;
  overflow: inherit;
  background: #fff;
  a {
    width: auto;
    margin: 0 18px;
    padding-bottom: 2px;
    color: #000;
    &.on {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        z-index: 9;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background: #f1002d;
      }
      b {
        font-size: 16px;
      }
    }
    &.scrollOn {
      &::after {
        bottom: -1px;
      }
    }
    b {
      font-weight: normal;
      line-height: 14px;
    }
    em {
      margin: 3px 0 2px 0;
      font-size: 10px;
      color: #858585;
    }
  }
}
.seckill-swiper a.on em, .seckill-swiper a.on b {
  color: #f1002d;
}
.seckill-swiper a em, .seckill-swiper a b {
  display: block;
}

</style>
