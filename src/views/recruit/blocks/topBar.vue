<template>
  <div class="app-bar" ref="nav" v-if="isApp">
    <a :href='backVal' class="bar-back f-14"></a>
    <b class="fw-n" v-text="titleName"></b>
    <a :href="shareData" class="right share-top-tb" v-if="shareData"></a>
    <a class="right detail-rule" @click="showRule">{{message}}</a>
  </div>
</template>

<script>
import tool from "@/utils/tools";
import "@/assets/css/recruit/public.less";

export default {
  name: "top-bar",
  data() {
    return {
      isApp: tool.isApp,
      backVal: tool.appBackFun()
    };
  },
  props: ["titleName","shareData","message"],
  methods: {    
    showRule(){
      this.$emit('show')
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>


.app-bar {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  border-bottom:1PX solid #f0f0f0;
  box-sizing: border-box;
  background: #fff;

  .bar-back {
    width: 30px;
    height: 45px;
    line-height: 48px;    
    background: url(~images/recruit/arrow-left-black.png) no-repeat 6px center;
    background-size: 12px auto;
  }

  b {
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    letter-spacing: 1px;
    font-size: 18px;
  }

  .share-top-tb {
    width: 30px;
    height: 30px;
    background: url(~images/recruit/share-icon-black.png) no-repeat center;
    background-size: 20px auto;
    margin-top: 8px;
  }

  .detail-rule {
    font-size: 14px;
  }
}

</style>
