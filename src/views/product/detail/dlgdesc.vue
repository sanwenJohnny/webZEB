
<style scoped>
/*.dialog { position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(1,1,1,0.2); z-index: 999;}*/
.dialog-cont {
  width: 100%;
  height: 412px;
  background: #fff;
  position: fixed;
  bottom: 0;
  color: #000;
  z-index: 999;
}
.header {
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #eee;
  line-height: 54px;
}
.header span {
  margin-left: 124px;
  font-size: 16px;
}
.close {
  /* display: inline-block; */
  float: right;
  width: 54px;
  height: 54px;
  background: url("~images/product/close.png") no-repeat center;
  background-size: 25%;
}
ul {
  padding-top: 16px;
  padding-left: 10px;
  height: 347px;
  overflow-y: scroll;
}
li {
  margin-bottom: 12px;
}
li > p {
  font-size: 14px;
}
li > div {
  font-size: 12px;
  color: #858585;
  margin-top: 2px;
  line-height: 1.5;
  letter-spacing: 1px;
  padding-right: 10px;
}
</style>
<template>
  <!-- <div class="dialog" v-if="ops.showDesc" @click="close"> -->
    <transition name="slide">
      <div class="dialog-cont" @click.stop v-if="ops.showDesc">
        <div class="header">
          <span>环球捕手品牌承诺</span>
          <i class="close" @click="close"></i>
        </div>
        <ul @touchstart="stop">
          <li v-for="(desc,index) in descriptionList" :key="index">
            <p>{{desc.title}}</p>
            <div>{{desc.content}}</div>
          </li>
        </ul>
      </div>
    </transition>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'coupon-dialog',
  data () {
    return {}
  },
  props: ['ops', 'descriptionList'],
  computed: {},
  created () {},
  mounted () {},
  methods: {
    close () {
      this.ops.close()
    },
    stop (e) {
      e.preventDefault()
    }
  }
}
</script>
