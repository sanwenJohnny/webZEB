<template>
  <div class="search">
  	<router-link :to="{ name: 'search' }" class="search1">
        <img src="~images/shop/search.png" />
        搜索喜欢的宝贝
    </router-link>
</div>
</template>

<script>
export default {
  props: {},
  mounted: function () {},
  methods: {}
}
</script>

<style scoped lang="less">
.search {
  margin: 0 auto;
  background: #000000;
  height: 1.44rem;
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
}
.search1 {
  display: inline-block;
  font-size: 14px;
  height: 1.04rem;
  line-height: 1.04rem;
  width: 100%;
  text-align: center;
  background: #ffffff;
  width: 100%;
  color: #333;
  > img {
    width: 0.53333rem;
    vertical-align: middle;
  }
}
</style>
