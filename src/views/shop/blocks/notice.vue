<template>
  <div class="notice-wrapper clearfix" v-if="noticeData && noticeData.homePageNoticeView.length > 0">
    <p class="notice-img"><img :src="noticeData.image"></p>
    <div class="swiper-notice">
        <div class="swiper-wrapper">
            <a :href="info.url?info.url:'javascript:;'" class="swiper-slide" v-for="info in noticeData.homePageNoticeView" :key="info.tag">
                <p>
                <span class="notice-tip" v-if="info.tag">{{info.tag}}</span>
                {{info.title}}
                </p>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
// import tool from '@/utils/tools'
import Swiper from 'swiper'
import('swiper/dist/css/swiper.css')

export default {
  data () {
    return {
    }
  },
  props: ['noticeData'],
  updated () {},
  mounted () {
    let _noticeSw = new Swiper('.swiper-notice', {
      autoplayDisableOnInteraction: false,
      loop: true,
      autoplay: 4000,
      direction: 'vertical'
    })
  }
}
</script>

<style lang="less">
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.notice-wrapper {
  position: relative;
  height: 40px;
  background: #fff;
}

.notice-wrapper .notice-img {
  float: left;
  width: 90px;
  img {
    height: 40px;
  }
}

.swiper-notice {
  position: relative;
  margin-left: 100px;
  padding-right: 10px;
  height: 40px;
  overflow: hidden;
  .swiper-slide {
    p {
      width: 100%;
      font-size: 14px;
      color: #000000;
      height:40px;
      line-height:40px;
      .ellipsis;
    }
    .notice-tip {
      float: left;
      height:15px;
      line-height:15px;
      padding: 0 1px;
      margin: 11px 4px 0 0;
      border: 1px solid #FF0000;
      font-size: 11px;
      color: #FF0000;
      text-align: center;
      overflow: hidden;
    }
    .notice-con {
      display: inline-block;
      width: 84%;
      height:17px;
      line-height:17px;
      font-size: 14px;
      color: #000000;
      .ellipsis;
    }
  }
}

</style>
