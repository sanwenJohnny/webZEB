
<style scoped>
.pop-cover {
  position: fixed;
  width: 100%;
  max-width: 750px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}
.pop-comp {
  position: fixed;
  bottom: 50px;
  width: 100%;
  max-width: 750px;
  background: #fff;
  color: #000;
  z-index: 100;
}
.pop-header {
  display: flex;
  align-items: center;
  height: 36px;
  background: #000;
  opacity: 0.8;
  color: #fff;
  padding-left: 10px;
}
.pop-header span {
  font-size: 12px;
}
.pop-header.arrow:after {
  content: "";
  width: 0;
  border: 4px solid transparent;
  border-bottom-color: #fff;
  position: absolute;
  right: 10px;
  top: 8px;
  border-top-width: 6px;
  border-bottom-width: 6px;
}
.pop-header.down:after {
  border-top-color: #fff;
  border-bottom-color: transparent;
  top: 16px;
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
</style>
<style>
@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 84%, 0);
    transform: translate3d(0, 84%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 84%, 0);
    transform: translate3d(0, 84%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes slideDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: visible;
    -webkit-transform: translate3d(0, 84%, 0);
    transform: translate3d(0, 84%, 0);
  }
}

@keyframes slideDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: visible;
    -webkit-transform: translate3d(0, 84%, 0);
    transform: translate3d(0, 84%, 0);
  }
}
</style>
<template>
  <div class="pop" v-if="hotRecommends&&hotRecommends.length>0&&ops.show">
    <div class="pop-cover" v-if="ops.up" @click="toggleArrow"></div>
    <div :class="`pop-comp animated ${typeClass}`">
      <div :class="`pop-header rela arrow ${arrowClass}`" @click="toggleArrow">
        <span>商品抢光了，正在疯狂补货中，先看看别的吧。</span>
        <i></i>
      </div>
      <div>
        <ul class="pros-ul ">
          <li v-for="(item,index) in hotRecommends" :key="index">
            <ProductItem :product="item"></ProductItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './productItem'
export default {
  name: 'pop-hots',
  data () {
    return {}
  },
  computed: {
    typeClass () {
      return this.ops.up ? 'slideInUp' : 'slideDown'
    },
    arrowClass () {
      return this.ops.up ? 'down' : ''
    }
  },
  created () {},
  mounted () {},
  methods: {
    toggleArrow () {
      this.ops.toggle()
    }
  },
  props: ['ops', 'hotRecommends'],
  components: {
    ProductItem
  }
}
</script>
