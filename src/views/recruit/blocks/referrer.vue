<template>
    <div class="referrer-box">
      <h1>
        {{title}}
        <i class="close-tb" @click="dialogChange(false)"></i>
      </h1>
      <div class="referrer-info">
        <slot>
          <p class="info-input">
            <input type="tel" v-model.trim="referrerId" maxlength=10 placeholder="输入邀请人ID">
            <i class="clear-val" @click="clear()" v-if="referrerId.length > 0"></i>
          </p>
        </slot>
      </div>
      <div class="clearfix referrer-btn">
        <span class="fl btn cancle" @click="dialogChange(false)">取消</span>
        <span class="fr btn confirm" @click="dialogChange(true)">确定</span>
      </div>
    </div>
</template>
<script>
import api from '@/api/recruit'

export default {
  name: "referrer-box",
  props: ["title"],
  data() {
    return {
      referrerId: ""
    };
  },
  computed: {},
  methods: {
    clear(type) {
      this.referrerId = "";
    },
    dialogChange(val) {
      this.$emit('tidChange',{'type':val,'id':this.referrerId})
    },
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.referrer-box {
  position: fixed;
  z-index: 100;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  h1 {
    position: relative;
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    font-size: 16px;
    font-weight: normal;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
    text-align:center;
    .close-tb {
      position: absolute;
      z-index: 5;
      top: 17px;
      right: 15px;
      width: 14px;
      height: 14px;
      background: url("~images/recruit/close_line_black.png") no-repeat center;
      background-size: contain;
    }
  }
}
.referrer-info {
  padding: 30px 10px;
  margin-bottom: 10px;
  .info-input {
    position: relative;
    height: 50px;
    padding: 0 15px;
    border: 1px solid #000;
    box-sizing: border-box;
    input {
      width: 100%;
      height: 100%;
      font-size: 16px;
    }
    .clear-val {
      position: absolute;
      z-index: 5;
      top: 0;
      right: 5px;
      width: 30px;
      height: 100%;
      background: url("~images/recruit/clear_tb.png") no-repeat center;
      background-size: 16px auto;
    }
  }
}
.btn{
  width:173px;
  height:50px;
  text-align:center;
  line-height:50px;
  font-size: 18px;
  color: #858585;
  background:#fff;
  border-radius: 2px;
}
.cancle{
  border: 1px solid #858585;
  border-radius: 2px;
  color:#858585;
}
.confirm{
  color:#fff;
  background:#1A1A1A;
  border: 1px solid #858585;
  border-radius: 2px;
}


.referrer-btn {
  border-top: 1px solid #f0f0f0;
  padding: 10px;
  // i {
  //   display: block;
  //   height: 50px;
  //   line-height: 50px;
  //   text-align: center;
  //   font-size: 18px;
  //   color: #fff;
  //   background: #000;
  // }
}

</style>
