<template>
  <div class="video-box">
    <video :id='"video-"+index' height="100%" width="100%" :src="url" webkit-playsinline x-webkit-airplay controls></video>
    <img :src="poster" :id='"poster-"+index' class="poster"/>
    <div class="video-play" @click="handleVideoPlay(index)" :id='"button-"+index'><span></span></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  props: ['index', 'poster', 'url'],
  methods: {
    videoInit: function () { // video初始化
      let vAll = document.getElementsByTagName('video')
      if (vAll.length <= 1) return false
      for (var i = 0; i < vAll.length; i++) {
        vAll[i].load()
        vAll[i].parentNode.querySelector('.poster').style.zIndex = 0
        vAll[i].parentNode.querySelector('.video-play').style.zIndex = 0
      }
    },
    handleVideoPlay: function (index) {
      let video = document.getElementById('video-' + index)
      let poster = document.getElementById('poster-' + index)
      let button = document.getElementById('button-' + index)

      this.videoInit()
      video.play()
      poster.style.zIndex = -1
      button.style.zIndex = -1

      video.addEventListener('ended', function () {
        poster.style.zIndex = 0
        button.style.zIndex = 0
      })
    }
  }
}
</script>
<style lang="less" scoped>
.video-box {
  position: relative;
  padding-top: 56%;
  overflow: hidden;
  video {
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-play {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
    span {
      display: block;
      width: 0;
      height: 0;
      border-top: 16px solid transparent;
      border-left: 22px solid #fff;
      border-bottom: 16px solid transparent;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-42%, -50%);
    }
  }
}
</style>
