
<style scoped>
.image-back {
  width: 100px;
  height: 100px;
}
.image-back div {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.03;
}
.image-back img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.item-name {
  margin-top: 6px;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  white-space: initial;
  margin-bottom: 4px;
  height: 32px;
}
del {
  font-size: 10px;
  color: #858585;
  margin-left: 4px;
}
</style>
<template>
  <div class="p-item" @click="goDetail(product.saleGoodsId)">
    <div class="image-back rela" >
      <img class="abs animated fadeIn" v-lazy="{src:product.image}">
      <div></div>
    </div>
    <div>
      <p class="item-name">{{product.name}}</p>
      <span>￥{{product.lowPrice}}<del class="">￥{{product.highPrice}}</del></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-item',
  data () {
    return {}
  },
  computed: {},
  props: ['product'],
  created () {},
  mounted () {},
  watch: {
    $route (to, from) {
      this.$router.go(0)
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push(`/product/detail?saleGoodsId=${id}`)
    }
  }
}
</script>
