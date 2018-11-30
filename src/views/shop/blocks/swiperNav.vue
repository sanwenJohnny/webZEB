<template>
  <nav class="home-nav swiper-container show-type-2" :class="{'top-store-class':navFixed,'another-type':anotherType}" ref="nav">
    <section class="swiper-wrapper t-c" v-if="navData">
      <a v-for="(info,index) in navData" :key="index" :href="info.url?info.url:'javascript:;'" class="swiper-slide" :class="[{'nav-img':info.isShowImage != 0},{'on':showType == index}]" >
        <!-- <template v-if="info.isShowImage == 1">
          <img :src="info.image" class="init-img">
          <img :src="info.checkImage?info.checkImage:info.image" class="init-checkimg">
        </template> -->
        <!-- <template v-else> -->
          {{info.name}}
        <!-- </template> -->
      </a>
    </section>
  </nav>
</template>

<script>
import tool from '@/utils/tools'
import Swiper from 'swiper'
import('swiper/dist/css/swiper.css')

export default {
  name: 'swiper-nav',
  data () {
    return {
    }
  },
  props: ['navData', 'navFixed', 'showType', 'anotherType'],
  methods: {

  },
  mounted () {
    var mySwiper = new Swiper('.home-nav', {
      initialSlide: this.showType,
      slidesPerView: 'auto',
      freeMode: true,
      freeModeSticky: true
    })
  }
}

</script>

<style lang="less" scoped>
.top-store-class {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 750px;
  box-sizing: border-box;
  transform: translate(-50%, 0);
  background: #000;
}
.home-nav {
  display: block;
  height: 36px;
  font-size: 0;
  box-sizing: border-box;
  a {
    width: auto;
    line-height: 36px;
    font-size: 14px;
    box-sizing: border-box;
    color: #fff;
    margin: 0 8px 0 14px;
  }
  .on {
    font-size:18px;
    background:url(~images/shop/nav-line.png) no-repeat center bottom;
    background-size:100% 3px;
    .init-img {
      display: none
    }
    .init-checkimg {
      display: block;
    }
  }
  .nav-img {
    height: 36px;
    margin-top: 0;
    border-bottom: none;
    img {
      max-height: 100%;
      vertical-align: top
    }
  }
}
.another-type {
  background: #fff;
  a {
    color: #999;
  }
  .on {
    color: #000;
    border-bottom: 1px solid currentColor;
  }
}
.init-checkimg {
  display: none;
}
</style>
