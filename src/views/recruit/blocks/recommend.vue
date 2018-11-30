<template>
    <div>
      <div class="edit-box" > 
        <h1>
          {{title}}
          <i class="close-tb" @click="dialogChange(false)"></i>
        </h1>
        <div class="user-box">
          <div class="user-img">
            <img  :src="info.image">
          </div>
          <p class="user-name">{{info.nickname}}</p>
          <p class="user-account">ID:{{info.accountId}}</p>
          <p class="text">*请仔细核对推荐人信息</p>
        </div>
        <div class="btn-box clearfix">
          <span class="btn edit fl" @click="showReferrer">修改推荐人</span>
          <span class="btn confirm fr" @click="showPay()">确定</span>
        </div>
      </div>
    </div>
   
</template>

<script>
import referrer from './referrer'
//import api from '@/api/recruit'

export default {
  name:"recommend",
  data () {
    return {
     isReferrer:false
    }
  },
  components:{
    referrer
  },
  methods:{
  showReferrer(){
   this.$emit("showReferrer")
  },
    dialogChange(val) {
      this.$emit('reChange',{'type':val})
    },
   editRecommend () {
     //this.isReferrer = true;
   
     this.$emit('showReferrer')
    //  let params = {

    //  };
    //  api.editRecommend(params).then();
   },
   showPay () {
     this.$emit('showPay',true)
   }
  },
  props:['title','info']
}
</script>

<style scoped lang="less">
.edit-box{
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  box-shadow: inset 0 -1px 0 0 #F0F0F0;
  background:#fff;
  z-index:99;
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
    color:#1a1a1a;
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
  .user-box{
    font-size: 18px;
    color: #1A1A1A;
    text-align:center;
    border-bottom:1px solid #F0F0F0;
    .user-img{
      width:92px;
      height:92px;
      margin:30px auto 20px;
    }
    .user-name{
      font-weight:bold;
    }
    .text{
      margin:0 10px 10px 0;;
      font-size: 14px;
      color: #B2B2B2;
      text-align:right;
    }
  }
  .btn-box{
    margin:10px;
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
    .edit{
      border: 1px solid #858585;
      
    }
    .confirm{
      background:#1a1a1a;
      color:#fff;
       border: 1px solid #1a1a1a;
    }
  }
}
</style>
