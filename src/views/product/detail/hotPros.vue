
<style lang="less" scoped>
.pros-comp {
  background: #fff;
  color: #000;
}
.pros-header {
  display: flex;
  align-items: center;
  height: 47px;
  border-bottom: 1px solid #eee;
}
.title {
  display: inline-block;
  flex-grow: 1;
  //text-align: center;
  margin-top: 4px;
  padding-left:8px;
}
.title span {
  font-size: 15px;
  color: #858585;
  padding-bottom: 4px;
}
.title.active span {
  border-bottom: 1.5px solid #000;
  color: #000;
}

.pros-ul {
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  padding-bottom: 10px;
  margin-top: 10px;
}
.pros-ul li {
  display: inline-block;
  width: 100px;
  margin-left: 8px;
}
.pros-ul li:last-child {
  margin-right: 8px;
}
.border-0 {
  border-bottom: 0 !important;
}
</style>
<template>
  <div class="pros-comp" v-if="(hotRecommends&&hotRecommends.length>0) || (favList&&favList.length>0)">
    <div class="pros-header rela">
      <div :class="showType==1?'title active':'title'" @click="showType=1" v-if="hotRecommends&&hotRecommends.length>0">
        <span :class="favList&&favList.length>0?'':'border-0'">热卖推荐</span>
      </div>
      <div :class="showType==2?'title active':'title'" @click="showType=2" v-if="favList&&favList.length>0">
        <span :class="hotRecommends&&hotRecommends.length>0?'':'border-0'">店主精选</span>
      </div>
    </div>
    <div>
      <ul class="pros-ul" v-show="hotRecommends&&hotRecommends.length>0&&showType==1">
        <li v-for="(item,index) in hotRecommends" :key="index">
          <ProductItem :product="item"></ProductItem>
        </li>
      </ul>
      <ul class="pros-ul " v-show="favList&&favList.length>0&&showType==2">
        <li v-for="(item,index) in favList" :key="index">
          <ProductItem :product="item"></ProductItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductItem from './productItem'

export default {
  name: 'hot-pros',
  data () {
    return {
      showType: this.hotRecommends && this.hotRecommends.length > 0 ? 1 : 2
    }
  },
  computed: {},
  updated () {},
  watch: {
    hotRecommends: {
      handler (newV, oldV) {
        console.log(newV)
      }
    },
    favList: {
      handler (newV, oldV) {}
    }
  },
  props: ['hotRecommends', 'favList'],
  created () {},
  mounted () {},
  methods: {},
  components: {
    ProductItem
  }
}
</script>
