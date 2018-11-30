<template>
  <div>
     <div>
        <!-- 头部 -->
        <!-- <div class="app-bar" v-if="isApp">
            <a href="javascript:;" class="pin-back" @click="back()"></a>
            <b class="f-18">贵就赔申请</b>
        </div> -->


        <div class="main" :class="{has_app_bar: isApp}">
            <!-- 无赔付记录 -->
            <div class="no_record" v-if="applyList.length == 0">
                <span class="icon"></span>
                <p>近3个月内没有申请的贵就赔赔付记录</p>
                <p @click="goApplyPage()" class="apply">申请赔付</p>
            </div>

            <div class="comp_module" v-if="applyList.length > 0">
                <!-- 赔付列表 -->
                <ul class="comp_list">
                    <li class="comp_item" v-for="(apply,index) in applyList" :key="index">
                        <div class="header">
                            <p class="date">{{apply.createTime}}</p>
                        </div>
                        <div class="record">
                            <div class="photo">
                                <img :src="apply.img" alt=""/>
                            </div>
                            <span class="status status0" v-if="apply.status == 0">{{apply.statusStr}}</span>
                            <span class="status status1" v-if="apply.status == 1">{{apply.statusStr}}</span>
                            <span class="status status2" v-if="apply.status == 2">{{apply.statusStr}}</span>
                            <div class="info">
                                <p class="title">{{apply.shortName}}</p>
                                <p class="amount">申请赔付金额：¥ {{apply.couponAmount/100}}</p>
                            </div>
                        </div>
                        <div class="status_text" v-if="apply.status > 0">
                            <p v-if="apply.status == 1">赔付通知：审核通过，赔付优惠券已发放到您的账户；请在个人中心--我的优惠券查看</p>
                            <p v-if="apply.status == 2">拒绝原因：{{apply.remark}}</p>
                        </div>
                    </li>
                </ul>
                <!-- 申请赔付 -->
                <p class="apply_btn apply_link" @click="goApplyPage()">申请赔付</p>
            </div>

            <!-- 提示信息 -->
            <div class="protips t_c col-fff f-14"></div>

        </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/pay'
import {Toast} from 'mint-ui'

export default {
   name:'compList',
   data () {
     return {
        isApp: this.getQueryString('isApp'),
        page: 1,
        totalPage: 1,
        applyList: [],
        pageSize:10
     }
   },
   mounted () {
    var accountId = this.getQueryString('accountId');
   // this.isApp = this.getQueryString('isApp');
    // 判断app是否登陆
    if(this.isApp && !accountId){
        var url = 'ggj://redirect/typeCommon/' + JSON.stringify({type: 6});
        window.location.href = url;
        return;
    }
    this.getApplyList();
    // this.applyPage();
   },
   methods:{
      // 返回上一页
        back: function(){
            if(!this.isApp){
                history.back();
            }else{
                window.location.href = 'ggj://redirect';
            }
        },
        
        // 链接跳转
        goLink: function(link){
           //debugger;
          
            var protocal = location.protocol;
            var hostname = location.hostname;
            var url = this.appLinkStr(link);
            window.location.href = url;
        },


        goApplyPage: function(){
           
            api.getCheckUnusedOp().then( response => {
             
                var res = response.data;
                if(res.exist){
               
                    this.goLink('/applyList');
                   
                }else{
                    Toast('近七天内您没有可赔付商品');
                }
            })
        },
        // 获取申请单列表
        getApplyList: function(){
         

            let data = {
              page: this.page ,
              pageSize: this.pageSize
            };
    
            api.getApplyList(data).then(response => {
              var res = response.data;
             
              if(response.status == 1){
                  this.page += 1;
                  this.totalPage = res.totalPage;
                  this.applyList = this.applyList.concat(res.list);
              }else{
                  Toast(res.msg);
                 
              }
            })
            
        },
        // 申请单分页
         applyPage: function(){
              var self = this;
              var timer = null;
              $(window).on('scroll', function(){
                  var winHeight = document.body.clientHeight;
                  var docHeight = document.body.scrollHeight;
                  var scrollTop = document.body.scrollTop;

                  if(winHeight + scrollTop + 100 > docHeight){
                      clearTimeout(timer);
                      timer = setTimeout(function(){
                          self.getApplyList();
                      }, 100);
                  }
              });
          },
          // 获取地址栏参数
          getQueryString: function(name){
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null)return unescape(r[2]);
                    return null;
          },
          /*
          * 通过app链接获得微信验签
          *type=1 会拼上访问链接后面的参数
          */
          appLinkStr (url,type){
              var _refLink = window.location.href,
                  _refArr = _refLink.split('?'),
                  _refStr = _refArr[1],
                  _isApp = _refLink.indexOf('isApp'),
                  _reqUrl = url,
                  _reqSub = _reqUrl.split('?'),
                  _type = type;

              if(_isApp > -1 || (type == 1 && _refStr)){
                  if(_reqSub.length > 1 && _reqSub[1].length > 0){
                      _reqUrl = url + '&'+_refStr
                  }else{
                      _reqUrl = url + '?'+_refStr
                  }
              }
              return _reqUrl;
          }

   }
}
</script>

<style scoped lang="less">
.no_record {
  margin-top: 200px;
  text-align: center;
  .icon {
    display: inline-block;
    width: 65px;
    height:65px;   
    background: url('~images/pay/list.png') no-repeat;
    background-size: 100%;
  }
  p {
    color: #858585;
    font-size: 16px;
    margin-top: 15px;
  }
  .apply {
    display: block;
    color: #fff;
    font-size: 14px;
    width: 100px;
    height: 36px;
    line-height: 36px;
    margin: 30px auto 0 auto;
    background: #000;
  }
}
.comp_module {
  padding-bottom:44px;
}
.comp_list {
  .comp_item {
    margin-bottom: 8px;
    background: #fff;
  }
}
.comp_item {
  .header {
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    border-bottom: 1px solid #e0e0e0;
    .date {
      color: #858585;
      font-size: 14px;
    }
  }
  .record {
    padding: 10px 18px 10px 10px;
    overflow: hidden;
    .photo {
      float: left;
      width: 60px;
      height: 60px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .info {
      margin-left: 70px;
      margin-right: 50px;
      .title {
        color: #666;
        font-size: 14px;
        height: 32px;
        line-height: 16px;
        overflow: hidden;
      }
      .amount {
        color: #666;
        font-size: 14px;
        margin-top: 6px;
      }
    }
    .status {
      float: right;
      font-size: 14px;
      height: 60px;
      line-height: 60px;
    }
    .status0 {
      color: #858585;
    }
    .status1 {
      color: #000;
    }
    .status2 {
      color: red;
    }
  }
  .status_text {
    padding: 10px 18px 10px 10px;
    border-top: 1px solid #e0e0e0;
    p {
      color: #858585;
      font-size: 13px;
      line-height: 1.5;
    }
  }
}
.apply_link {
  position: fixed;
  left: 0;
  bottom: 0;
  display: block;
}
.main {
  .tips {
    height: 45px;
    padding: 0 15px;
    background: #fffff5;
    p {
      color: red;
      font-size: 12px;
      line-height: 1.5;
      padding-top: 7px;
    }
  }
}
.comp_apply {
  .section {
    padding-left: 15px;
    background: #fff;
  }
}
.plat_section {
  margin-top: 10px;
  .plat_name {
    i {
      font-style: normal;
    }
  }
  .dark {
    color: #858585;
  }
}
.section {
  .item {
    overflow: hidden;
    padding-right: 15px;
    border-bottom: 1px solid #e0e0e0;
    &:last-child {
      border-bottom: 0;
    }
    .text {
      float: left;
      color: #000;
      font-size: 14px;
      width: 90px;
      height: 48px;
      line-height: 48px;
    }
    .field {
      overflow: hidden;
    }
  }
}
.order_product {
  padding: 18px 0;
  .pro_photo {
    float: left;
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pro_info {
    margin-left: 70px;
    .p_title {
      color: #000;
      font-size: 14px;
      line-height: 14px;
      height: 32px;
    }
    .p_num {
      display: block;
      color: #858585;
      font-size: 14px;
      text-align: right;
      margin-top: 6px;
    }
  }
}
.pro_section {
  margin-top: 10px;
}
.field {
  .opt {
    float: right;
    height: 48px;
    line-height: 48px;
  }
  .link {
    float: right;
    color: #858585;
    font-size: 12px;
    height: 48px;
    line-height: 48px;
  }
}
.trangle {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-style: solid;
  border-width: 1px 1px 0 0;
  border-color: #858585 #858585 transparent transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: 5px 5px 0 3px;
}
.text_field {
  width: 100%;
  height: 18px;
  line-height: 18px;
  margin: 15px 0;
}
.section_head {
  margin-top: 10px;
  .title {
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #e0e0e0;
    overflow: hidden;
    h4 {
      float: left;
      color: #000;
      font-size: 14px;
      font-weight: 400;
      span {
        color: #858585;
        font-size: 12px;
        font-weight: 400;
      }
    }
    .link {
      float: right;
      color: #858585;
      font-size: 12px;
    }
  }
}
.upload_module {
  padding: 15px 0;
  .upload_label {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    input {
      visibility: hidden;
    }
  }
}
.photo_list {
  li {
    position: relative;
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 10px;
    .delete {
      position: absolute;
      top: -8px;
      right: -8px;
      display: block;
      width:16px;
      height: 16px;
      background: url('~images/pay/close.png') no-repeat;
      background-size: 100%;
    }
    .preview {
      width: 60px;
      height: 60px;
      line-height: 60px;
      overflow: hidden;
    }
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100%;
    }
    &.upload {
      background: url('~images/pay/upload.png') no-repeat;
      background-size: 100%;
    }
  }
}
.apply_btn {
  color: #fff;
  font-size: 16px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  margin-top: 10px;
  background: #000;
}
.mask2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 99;
}
.confirm_module {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 240px;
  background: #fff;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
  .confirm {
    color: #000;
    font-size: 14px;
    padding: 40px 20px;
    border-bottom: 1px solid #e0e0e0;
  }
  .footer {
    overflow: hidden;
    .btn {
      float: left;
      font-size: 14px;
      width: 50%;
      height:48px;
      line-height: 48px;
      text-align: center;
    }
    .cancel {
      color: #000;
    }
    .sure {
      color: #fff;
      background: #000;
    }
  }
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 99;
}
.plat_module {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  -webkit-transition: all 1s ease-in .1s;
  transition: all 1s ease-in .1s;
  &.show {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .title {
    height: 56px;
    line-height: 56px;
    h3 {
      color: #000;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
    }
  }
  .plat_list {
    padding-left: 15px;
    li {
      position: relative;
      height: 48px;
      line-height: 48px;
      padding-right: 15px;
      border-top: 1px solid #e0e0e0;
      overflow: hidden;
    }
    .text {
      float: left;
      color: #000;
      font-size: 14px;
    }
    .icon {
      position: absolute;
      top: 50%;
      right: 15px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #e0e0e0;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      &.active {
        background: url(~images/pay/choose.png) no-repeat;
        background-size: 100%;
      }
    }
  }
  .close {
    color: #fff;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: #000;
  }
}
.mask1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 0 0;
  z-index: 9999;
}
.spinner_load {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  background: rgba(0,0,0,.7);
  .spinner {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 4px solid transparent;
    border-color: #858585 #858585 #858585 transparent;
    border-radius: 50%;
    -webkit-animation: spinner-rotate .8s infinite linear;
    animation: spinner-rotate .8s infinite linear;
  }
  .text {
    display: block;
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 2px;
  }
}
.no_pro_list {
  color: #858585;
  font-size: 14px;
  padding: 10px 0;
  text-align: center;
}
.no_more {
  color: #858585;
  font-size: 12px;
  padding: 10px 0;
  text-align: center;
}
.order_pro_list {
  .pro_item {
    margin-top: 10px;
    background: #fff;
  }
}
.pro_item {
  .pro_head {
    height: 44px;
    line-height: 44px;
    padding: 0 10px;
  }
  .pro_info {
    padding: 10px;
    background: #f9f9f9;
    overflow: hidden;
  }
  .cost {
    padding:1px 10px;
    p {
      line-height: 1;
      margin: 10px 0;
      overflow: hidden;
    }
    .text {
      float: left;
      color: #858585;
      font-size: 13px;
    }
    .val {
      float: right;
      color: #000;
      font-size: 14px;
    }
  }
}
.pro_head {
  .num {
    float: left;
    color: #858585;
    font-size: 14px;
  }
  .date {
    float: right;
    color: #858585;
    font-size: 13px;
  }
}
.pro_info {
  .pro_photo {
    float: left;
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pro_title {
    float: left;
    color: #000;
    font-size: 14px;
    width: 200px;
    line-height: 1.2;
    margin-left: 10px;
  }
  .num {
    float: right;
    color: #858585;
    font-size: 14px;
  }
}
.example {
  padding: 10px;
}
.example_list {
  li {
    margin-top: 12px;
    p {
      color: #000;
      font-size: 13px;
      line-height: 1.4;
    }
  }
  .photo {
    margin-top: 8px;
    img {
      width: 100%;
    }
  }
}

@-webkit-keyframes spinner-rotate {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0)
	}

	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

@keyframes spinner-rotate {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0)
	}

	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg)
	}
}

</style>
