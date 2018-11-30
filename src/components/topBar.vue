<template>
  <div class="app-bar" ref="nav">
    <a :href='backVal' class="bar-back f-14"></a>
    <b class="fw-n" v-text="titleName"></b>
    <slot name="topright"></slot>
    <a :href="shareData" class="right share-top-tb" v-if="shareData"></a>
  </div>
</template>

<script>
import tool from "@/utils/tools";
export default {
  name: "shop-list",
  data() {
    return {
      isApp: tool.isApp,
      backVal: ''
    };
  },
  props: ["titleName","shareData"],
  methods: { 
    //监测app跳转h5页面,处理返回
    appBack(url){    
      if( url.indexOf('isApp') > -1 && url.indexOf('sign') > -1 ) {
        this.appType = 1
      } else {
        this.appType = 0
      }
    },
    appBackFun(){ 
        if(this.appType == 1) {
          return 'ggj://redirect'
        }else {
          return 'javascript:history.back()'
        }   
    }   
  },
  mounted() {},
  created(){
    this.appBack(this.$route.fullPath);
    this.backVal=this.appBackFun()
  }
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
  /*border-bottom:1PX solid #e0e0e0;*/
  box-sizing: border-box;
  background: #000;

  .bar-back {
    width: 30px;
    height: 45px;
    line-height: 48px;    
    background: url(~images/refund/arrow-left-white.png) no-repeat 6px center;
    background-size: 12px auto;
  }

  b {
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    letter-spacing: 1px;
    font-size: 18px;
    color:#fff;
  }

  .share-top-tb {
    width: 30px;
    height: 30px;
    background: url(~images/refund/share-icon.png) no-repeat center;
    background-size: 20px auto;
    margin-top: 8px;
  }
}

</style>
