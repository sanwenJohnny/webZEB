<template>
<transition name="slide">
    <div class="addr-box">
      <h1>
        收货地址
        <i class="close-tb" @click="dialogChange(false)"></i>
      </h1>
     <add></add>
    </div>
</transition>
</template>
<script>
import add from '@/views/address/edit'
import api from "@/api/address";
//import { Dlg } from '@/assets/dialog/fm.dialog.min.js';
import {Toast} from 'mint-ui';
import tools from "@/utils/tools";
export default {
  name: "addr-box",
  props: ["addressInfo", "isOverseas" ],
  data() {
    return {
    }
  },
  computed: {},
  methods: {
   
    dialogChange(val) {
      this.$emit("addrCallBack", { type: val, id: this.addressId });
    },
    showMsg(msg) {
      // Dlg.msg({
      //   zIndex: 200,
      //   content: msg,
      //   msgType: "inverse"
      // });
      Toast(msg);
    }
  },
  watch: {
  
  },
  mounted() {
   
  },
  components:{
    add
  }
};
</script>
<style lang="less" scoped>
@charset "UTF-8";
.addr-box {
  position: fixed;
  z-index: 199;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  overflow-y: auto;
}
.addr-box h1 {
  position: relative;
  height: 48px;
  line-height: 48px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: normal;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
}
.addr-box h1 .close-tb {
  position: absolute;
  z-index: 5;
  top: 8px;
  right: 5px;
  width: 30px;
  height: 30px;
  background: url("~images/recruit/close_line_black.png") no-repeat center;
  background-size: 14px auto;
}

.addr-info {
  padding: 10px;
  margin-bottom: 10p;
}

.addr-btn {
  position: fixed;
  z-index: 5;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #f0f0f0;
  padding: 10px;
}
.addr-btn i {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background: #000;
}

/*编辑地址*/
.insertadd {
  position: relative;
  padding: 4px 0 0 10px;
  border-radius: 2px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.insertadd::before {
  content: "";
  position: absolute;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  background: url(~images/recruit/address-line.png) repeat-x;
  background-size: auto 4px;
}

.insertadd li {
  border-bottom: 1px solid #efefef;
  height: 50px;
  line-height: 50px;
  text-indent: 20px;
  background: #fff url(~images/recruit/asterisk.png) no-repeat 8px center;
  background-size: 1.5%;
}

.insertadd li:last-child {
  background-image: url();
}

.insertadd li.showstar {
  background-image: url(~images/recruit/asterisk.png);
}

.insertadd span {
  font-size: 15px;
  width: 22%;
  text-indent: 0;
  text-align: left;
  display: inline-block;
}

.insertadd input {
  height: 40px;
  font-size: 14px;
  width: 65%;
  border: none;
}

.insertadd textarea {
  height: 50px;
  font-size: 14px;
  width: 65%;
  padding-top: 10px;
  line-height: 20px;
  border: none;
  resize: none;
  outline: none;
  font: 14px/1.4 "Microsoft Yahei", Tahoma, Helvetica, Arial, Sans-serif;
}

.insertadd .txtarea {
  height: 64px;
  background: #fff url(~images/recruit/asterisk.png) no-repeat 8px 18px;
  background-size: 1.5%;
}

.txtarea span {
  vertical-align: top;
}

.insertadd select {
  width: 60%;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
  font-size: 14px;
  padding-right: 5px;
}

.consigndel {
  height: 42px;
  line-height: 42px;
  background: #fff;
  border-top: 1px solid #efefef;
  color: #f00;
  font-size: 15px;
  font-weight: bold;
}
</style>
