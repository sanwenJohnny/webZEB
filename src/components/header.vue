<style lang="less" scoped>
.header-wrapper {
  background-color: #FFF;
  .header-container {
    height: 44px;
    line-height: 44px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #1A1A1A;
    letter-spacing: 0;
    text-align: center;
  }
}
</style>
<template>
  <div class="header-wrapper">
    <div class="header-container">{{customerTitle}}</div>
  </div>
</template>
<script>
export default {
  name: 'customerHeader',
  props: ['customerTitle'],
  data () {
    return {}
  }
}
</script>
