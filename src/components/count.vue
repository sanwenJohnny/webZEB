<style scoped lang="scss">
.count-down-inner {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  .icon-clock {
    width: 12px;
    height: 12px;
    background: url(~images/icon-clock.png) no-repeat center;
    background-size: 12px 12px;
    margin-right: 5px;
  }
}
</style>
<template>
  <div class="count-down-wrapper" v-if="status===1&&leftTime">
    <p class="count-down-inner">
      <span class="icon-clock"></span><span>付款剩余时间</span><span class="timer">{{`${nums.m}:${nums.s}`}}</span>
    </p>
  </div>
</template>
<script>

export default {
  name: 'countDown',
  props: ['leftTime', 'status'],
  data () {
    return {
      nums: {
        m: '',
        s: ''
      }
    }
  },
  mounted () {
    this.counter()
  },
  computed: {
    dayText () {
      return this.nums.d >= 1 ? this.nums.d : ''
    }
  },
  methods: {
    formate (time) {
      if (time >= 0) {
        let m = Math.floor(time / 60 % 60)
        let s = Math.floor(time % 60)
        if (s < 10) {
          s = '0' + s
        }
        if (m < 10) {
          m = '0' + m
        }
        this.nums = {
          ...{m, s}
        }
      } else {
        console.log('已截止')
      }
    },
    counter () {
      const self = this
      let time = this.leftTime
      console.log(typeof time)
      self.formate(time)
      let t = setInterval(() => {
        time--
        self.formate(time)
        time < 0 && clearInterval(t)
      }, 1000)
    }
  }
}
</script>
