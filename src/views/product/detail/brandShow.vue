
<style scoped>
.brand-comp {
  background: #fff;
  color: #000;
}
.brand-header {
  display: flex;
  align-items: center;
  height: 84px;
  padding-left: 10px;
}
.brand-icon {
  display: inline-block;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border: 1px solid #f3f3f3;
}
.brand-info{
  width:56%;
}
.brand-name {
  height:20px;
  overflow:hidden;
  font-size: 16px;
}
.brand-country {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-image: url("https://img.gegejia.com/c3a999793198.png");
  background-size: 100%;
  margin-right: 4px;
  margin-top: 7px;
  border-radius: 50%;
}
.enter {
  width: 72px;
  height: 26px;
  line-height: 26px;
  border: 1px solid #000;
  text-align: center;
  right: 10px;
  top:25px;
  border-radius: 4px;
}

.brand-ul {
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  padding-bottom: 10px;
}
.brand-ul li {
  display: inline-block;
  width: 100px;
  margin-left: 8px;
}
.brand-ul li:last-child {
  margin-right: 8px;
}
</style>
<template>
  <div class="brand-comp" v-if="brandShowData&&brandShowData.list&&brandShowData.list.length>0">
    <div class="brand-header rela">
      <img :src="brandShowData.tip.image" class="brand-icon">
      <div class="brand-info">
        <p class="brand-name">{{brandShowData.tip.name}}</p>
        <i class="brand-country" :style="{backgroundImage:`url(${brandShowData.tip.stateImage})`}"></i><em>{{brandShowData.tip.stateName}}</em>
      </div>
      <span class="block abs enter" @click="toBrand">进入品牌</span>
    </div>
    <ul class="brand-ul">
      <li v-for="(item,index) in brandShowData.list" :key="index">
        <ProductItem :product="item"></ProductItem>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductItem from './productItem'
export default {
  name: 'brand-show',
  data () {
    return {}
  },
  computed: {},
  props: ['brandShowData'],
  created () {},
  mounted () {},
  watch: {
    brandShowData: {
      handler (n, o) {}
    }
  },
  methods: {
    toBrand () {
      this.$router.push(
        `/shop/classify/bd?id=${this.brandShowData.tip.id}`
      )
    }
  },
  components: {
    ProductItem
  }
}
</script>
