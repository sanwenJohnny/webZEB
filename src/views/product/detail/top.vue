<style lang="less" scoped>
.top {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #fff;
  z-index: 999;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 14px;
  img {
    width: 34px;
    height: 34px;
    margin-left: 10px;
    border-radius: 50%;
  }
  span {
    margin-left: 5px;
  }
  p {
    width: 72px;
    height: 28px;
    line-height: 28px;
    background: #000;
    color: #fff;
    position: absolute;
    text-align: center;
    right: 12px;
  }
}
</style>

<template>
  <div class="top" v-if="reInfo.reNickName || reInfo.reImage" @click="window.location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.globalscanner'">
    <img :src="reInfo.reImage">
    <span >{{reInfo.reNickName}}的捕手店</span>
    <p>打开APP</p>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      window: window
    }
  },
  computed: {},
  created () {},
  mounted () {},
  props: {
    reInfo: {
      type: Object
    }
  },
  methods: {}
}
</script>
