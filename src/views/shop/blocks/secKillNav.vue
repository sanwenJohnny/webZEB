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
.swiper-slide{
  width:auto;
}
.seckill-swiper {
  width:100%;
  z-index: 5;
  //line-height: 32px;
  padding-top:8px;
  //border-bottom: 1px solid #f3f3f3;
  overflow: inherit;
  a {
    width: auto;
    //line-height:16px;
    // line-height: 32px;
    margin: 0 15px;
    padding-bottom:2px;
    //color:#000;
    text-align:center;
    &.on {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        z-index: 9;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background:url(~images/shop/red-line.png) no-repeat left bottom;
        background-size:100% 3px;
        //background:#f1002d;
      }
      b{
        font-size:18px;
        font-weight:bold;
      }
      em,b{
        color:#f1002d;
      }
    }
    &.scrollOn {
      &::after {
        bottom:-1px;
      }
    }
    em,b{
      display:block;
    }
    b{
      font-weight:normal;
      line-height:16px;
      font-size:14px;
      color:#1a1a1a;
    }
    em{
      margin:3px 0 2px 0;
      font-size:10px;
      color:#999;
    }
  }
}
</style>
