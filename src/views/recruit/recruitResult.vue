<template>
  <div class="recruit-result">
    <div class="pic">
      <img src="https://img.gegejia.com/img/7905bad0be23eb662af7524d776005b0.png">
      <div class="cms-box" @click="goCms"></div>
      <div class="return-box" @click="returnBack"></div>
    </div>

  
    
    <div class="result-product">
      <h1 class="new-menber">新会员专享</h1>
      <pList :list-data="productData" @isChange="listChangeFun">
      </pList>
    </div>
     
    <div class="more-product" @click="goCms">
      更多新会员专享商品
    </div>
   
   

    <!-- 二维码弹框 -->
    <div class="recruit-code" v-if="showCode">
      <img :src="codeUrl" class="code-img">
      <p class="f-12 mb-30">长按识别二维码或添加管家微信号{{wxNo}}</p>
      <p class="code-bottom">
        <i class="f-14">你将获得</i>
        420元新人补贴<br>
        日赚千元开店指导<br>
        每日超低价促销信息
      </p>
      <!-- <i class="save-code">保存二维码到相册</i> -->
      <i class="close-code" @click="showCode = false"></i>
    </div>
    <div class="mask-full" v-if="showCode"></div>
  </div>
</template>
<script>
// import config from "@/service/config";
// import request from "@/service/request";
import api from '@/api/recruit'
import tools from "@/utils/tools";
import pList from "@/components/pList";
import "@/assets/css/recruit/common.less";
export default {
  name: "recruit-result",
  data() {
    return {
      wxNo: "",
      showCode: false,
      productData: [],
      newMemberUrl:""
  
    };
  },
  components: {
    pList
  },
  methods: {
    goCms(){
        window.location.href=this.newMemberUrl;
    },
    returnBack (){
       this.$router.push({
         name:"home"
       })
    },
    getWxInfoData (){
         api.getWxInfo().then(res =>{
           console.log("res:",res);
           let oData = res.data;
           if(res.status == 1){
            this.showCode = true;
            this.codeUrl = oData.wxImg;
            this.wxNo = oData.wxNo;
           }
         })
    },
    getData(type) {
      api.getFallList().then( data =>{
        if(data.status == 1){
          let oData = data.data;
           this.productData = data.data.productDetailList;
           this.newMemberUrl = data.data.newMemberUrl;
           console.log(this.productData)
        }
       
      });
   
    },
 
    listChangeFun(val) {
      this.listChange = val;
    }
  },
  mounted() {

    this.getWxInfoData();
    this.getData();

   
  }
};
</script>
<style lang="less" scoped>
.pic{
   position: relative;
  .return-box{
    position:absolute;
    bottom:20px;
    left:50%;
   // background:red;
    width:40%;
    height:30px;
    margin-left:-20%;
  }
  .cms-box{
    position: absolute;
    bottom:85px;
    left:50%;
    width:70%;
    margin-left:-35%;
    height:50px;
    //background:red;
  }
}
.new-menber{
  text-align: center;
  font-size:24px;
  color:#fff;
  font-weight:bold;
  margin:15px 0 27px;
}
.more-product{
  font-size:14px;
  color:#fff;
  text-align:center;
  line-height:20px;
  border:1px solid #fff;
  padding:7px 15px 7px 16px;
  border-radius:4px;
  width:157px;
  margin:30px auto 0;
}
.recruit-result {
  padding-bottom: 68px;
  background:url('https://img.gegejia.com/img/38bc82eca941a36836e94f8838d46259.jpg') repeat-y;
}
.recruit-code {
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 50%;
  width: 76.8%;
  padding: 20px 0 0;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;
  text-align: center;
  -webkit-transform: translate(-50%, -70%);
  .code-img {
    width: 166px;
    margin-bottom: 10px;
  }
  .save-code {
    width: 152px;
    height: 34px;
    line-height: 34px;
    border-radius: 4px;
    margin-top: 25px;
  }
  .close-code {
    position: absolute;
    z-index: 5;
    left: 50%;
    bottom: -62px;
    width: 32px;
    height: 32px;
    background: url(~images/recruit/close-line-glod.png) no-repeat;
    background-size: contain;
    -webkit-transform: translate(-50%, 0);
  }
}
.result-product {
  padding: 10px 0;
  background: #000;
}
.code-bottom {
  position: relative;
  padding: 24px 0 18px;
  border-radius: 0 0 4px 4px;
  background: #d8c29d;
  color: #47381e;
  i {
    position: absolute;
    z-index: 5;
    top: -12px;
    left: 50%;
    width: 84px;
    height: 24px;
    line-height: 24px;
    border-radius: 20px;
    background: #47381e;
    text-align: center;
    color: #fff;
    transform: translate(-50%, 0);
  }
}
.custom-box img {
  vertical-align: top;
}
.recruit-bottom {
  position: fixed;
  z-index: 5;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 58px;
  background: url(https://img.gegejia.com/c3d7e0c5ab31.png) no-repeat center;
  background-size: cover;
}
</style>
