<template>
  <div id="applyModule" v-cloak>
        <!-- 头部 -->
        <!-- <div class="app-bar" v-if="isApp">
            <a href="javascript:;" class="pin-back" @click="back()"></a>
            <b class="f-18">申请赔付</b>
        </div> -->

        <div class="main" :class="{has_app_bar: isApp}">
            <div class="tips">
                <p>2到3个工作日内，若审核通过将发放双倍差价无门槛优惠券到您的账户中，请注意查收短信通知。</p>
            </div>
            <!-- 贵就赔申请 -->
            <form action="">
                <div class="comp_apply">
                    <!-- 选择比价平台-->
                    <div class="section plat_section">
                        <div class="item">
                            <span class="text">比价平台</span>
                            <div class="field" @click="openPlat()">
                                <div class="link">
                                    <span class="plat_name" v-for="(plat,index) in platList" :key="index">
                                        <i v-if="plat.type == platType">{{plat.name}}</i>
                                    </span>
                                    <span class="dark" v-if="!platType">请选择比价平台</span>
                                    <span class="trangle"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 选择比价商品 -->
                    <div class="section pro_section">
                        <div class="item">
                            <span class="text">退差价商品</span>
                            <input v-show="false" id="orderProductId" type="text" name="orderProductId" v-model="productId"/>
                            <div class="field">
                                <p class="link" @click="goLink('compProList', platType)">选择商品<span class="trangle"></span></p>
                            </div>
                        </div>
                        <div class="item order_product" v-if="orderProduct">
                            <div class="pro_photo"><img :src="orderProduct.img" alt=""/></div>
                            <div class="pro_info">
                                <p class="p_title">{{orderProduct.shortName}}</p>
                                <p class="p_num">x {{orderProduct.productCount}}</p>
                            </div>
                        </div>
                        <div class="item" v-if="orderProduct">
                            <span class="text">单价购买价</span>
                            <div class="field">
                                <input class="text_field" onfocus="this.type='number'" onblur="this.type='text'" type="number" placeholder="单价购买价" v-model="singleRealPrice" readonly/>
                            </div>
                        </div>
                        <div class="item">
                            <span class="text">比价价格</span>
                            <div class="field">
                                <input class="text_field" onfocus="this.type='number'" onblur="this.type='text'" type="number" name="otherPlatformProductPrice" placeholder="请填写比价价格" v-model="otherPrice" @keyup="countPrice()"/>
                            </div>
                        </div>
                        <div class="item">
                            <span class="text">申请赔付金额</span>
                            <div class="field">
                                <input class="text_field" onfocus="this.type='number'" onblur="this.type='text'" type="number" name="priceDifference" v-model="couponAmount" placeholder="填写比价价格后，会为您自动计算应退金额" readonly/>
                            </div>
                        </div>
                    </div>
                    <!-- 商品链接 -->
                    <div class="section link_section">
                        <div class="item section_head">
                            <div class="title">
                                <h4>商品页面链接</h4>
                                <p class="link" @click="goWebviewLink('/exShare')">获取方法<span class="trangle"></span></p>
                            </div>
                            <input class="text_field" type="text" placeholder="请粘贴" v-model="otherPlatformProductLink" @keyup="emoji()"/>
                        </div>
                    </div>
                    <!-- 商品页面截图 -->
                    <div class="section upload_section">
                        <div class="item section_head">
                            <div class="title">
                                <h4>商品页面截图<span>（最多选择3张）</span></h4>
                                <p class="link" @click="goWebviewLink('/exProduct')">查看示例<span class="trangle"></span></p>
                            </div>
                            <div class="upload_module">
                                <ul class="photo_list clearfix">
                                    <li v-for="(img, index) in uploadProImgs" :key="index">
                                        <span class="delete" @click="delImg(index, uploadProImgs)"></span>
                                        <div class="preview"><img :src="img" alt=""/></div>
                                    </li>
                                    <li class="upload">
                                        <label class="upload_label" for="upload"><input id="upload" type="file" accept="image/*" @change="uploadImg('upload', uploadProImgs)" /></label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="item section_head">
                            <div class="title">
                                <h4>结算页面截图<span>（最多选择3张）</span></h4>
                                <p class="link" @click="goWebviewLink('/exSettle')">查看示例<span class="trangle"></span></p>
                            </div>
                            <div class="upload_module">
                                <ul class="photo_list clearfix">
                                    <li v-for="(img, index) in uploadSettleImgs" :key="index">
                                        <span class="delete" @click="delImg(index, uploadSettleImgs)"></span>
                                        <div class="preview"><img :src="img" alt=""/></div>
                                    </li>
                                    <li class="upload">
                                        <label class="upload_label" for="upload1"><input id="upload1" type="file" accept="image/*" @change="uploadImg('upload1', uploadSettleImgs)" /></label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- 提交订单 -->
                    <button class="apply_btn" type="button" @click="apply()">提交</button>
                </div>
            </form>
        </div>

        <!-- 比价平台 -->

        <div class="mask" v-if="showPlat">
            <div class="plat_module" :class="{show: showPlat}">
                <div class="title">
                    <h3>选择比价平台</h3>
                </div>
                <ul class="plat_list">
                    <li v-for="(plat,index) in platList" @click="choosePlat(plat)" :key="index">
                        <p class="text">{{plat.name}}</p>
                        <span class="icon" :class="{active: plat.type == platType}"></span>
                    </li>
                </ul>
                <div class="close" @click="closePlat()">确认</div>
            </div>
        </div>

        <!-- loading -->
        <div class="mask1" v-if="showSpinner">
            <div class="spinner_load">
                <span class="spinner"></span>
                <span class="text">提交中...</span>
            </div>
        </div>

        <!-- 提示信息 -->
        <div class="protips t_c col-fff f-14"></div>

        <!-- 确认弹窗 -->
        <div class="mask2" v-if="showConfirm">
            <div class="confirm_module">
                <div class="confirm">确认删除该图片？</div>
                <div class="footer">
                    <span class="btn cancel" @click="closeConfirm()">取消</span>
                    <span class="btn sure" @click="yesConfirm()">确认</span>
                </div>
            </div>
        </div>

       
    </div>

</template>

<script>
import tools from '@/utils/tools'
import api from '@/api/pay'
import {Toast} from 'mint-ui'
import lrz from "lrz"

export default {
    name:"applyList",
    data () {
      return {
        isApp: tools.isApp,
        showPlat: false,
        showSpinner: false,
        showConfirm: false,
        platList: [],
        platType: this.$route.query.platType,
        platName: '',
        storePlatName: '',
        productId: '',
        otherPrice: '',
        priceDifference: '',
        couponAmount: '',
        singleRealPrice: '',
        otherPlatformProductLink: '',
        orderProduct: '',
        productCount: 0,
        appShareLink: '',
        uploadProImgs: [],
        uploadSettleImgs: [],
        myIndex: '',
        myImgArr: ''
      }
    },
    mounted () {
      var accountId = this.getQueryString('accountId');
      this.storePlatName = localStorage.platName || '';
      //this.platType = this.getQueryString('platType') || '';
      this.productId = this.getQueryString('pid') || '';
      //this.isApp = this.getQueryString('isApp');
      this.link = location.href.split('?')[0];
      // 判断app是否登陆
      if(this.isApp && !accountId){
          var url = 'ggj://redirect/typeCommon/' + JSON.stringify({type: 6});
          window.location.href = url;
          return;
      }
      // 判断是否有选中比价商品
      if(this.productId){
          this.getRepProduct(this.productId);
      }
      // 判断是否选择比价平台
      if(this.platType){
          this.platName = this.storePlatName;
      }
      this.getPlatformList();
    },
    methods:{
      // 返回
      back: function(){
          localStorage.pid = '';
          if(!this.isApp){
              history.back();
          }else{
              window.location.href = 'ggj://redirect';
          }
      },
      // 打开比价平台
      openPlat: function(){
          this.showPlat = true;
      },
      // 关闭比价平台
      closePlat: function(){
          this.showPlat = false;
      },
      // 打开确认弹窗
      openConfirm: function(){
          this.showConfirm = true;
      },
      // 关闭确认弹窗
      closeConfirm: function(){
          this.showConfirm = false;
      },
      // 确认弹窗
      yesConfirm: function(){
          this.myImgArr.splice(this.myIndex, 1);
          this.showConfirm = false;
      },
      // 链接跳转
      goLink: function(link, platType){
          var params = '';
          if(platType){
              params += 'platType=' + platType;
          }
          link = params ? link + '?' + params : link;
          var url = this.appLinkStr(link);
          window.location.href = url;
          //this.$router.push({path:'/compProList',query:{platType:platType}})
      },
      // 链接跳转
      goWebviewLink: function(link, platType){
          var params = '';
          var protocal = location.protocol;
          var hostname = location.hostname;

          if(platType){
              params += 'platType=' + platType;
          }
          link = params ? link + '?' + params : link;
          //var url =this.appLinkStr(link);
         var url;
          //console.log(" url:", url);
          
          if(this.isApp){
              url = protocal + '//' + hostname + link;
              console.log("eeeee",url);
              var opt = {
                  type: 25,
                  isHide: 1,
                  webUrl: url
              };
              url = 'ggj://redirect/typeCommon/' + JSON.stringify(opt);
              console.log(url);
          }
          //window.location.href = url;
          this.$router.push({
              path:link
          })
      },
      // 选择平台
      choosePlat: function(plat){
         console.log("plat",plat);
          this.platType =  plat.type;
          this.platName = localStorage.storePlatName = plat.name;
      },
      // 获取平台列表
      getPlatformList: function(){
          api.getPlatformList().then((response)=>{
             var res = response.data;
              if(response.status == 1){
                  this.platList = res.platFormList;
              }else{
                  Toast(res.msg);
              }
          })
       
      },
      // 获取赔付商品数据
      getRepProduct: function(productId){
          let params = {
            orderProductId: productId
          };
          api.getOrderProduct(params).then((response)=>{
             var res = response.data;
              if(response.status == 1){
                  this.orderProduct = res;
                  this.productCount = res.productCount;
                  this.singleRealPrice = res.singleRealPrice/100;
              }else{
                  Toast(res.msg);
              }
          })
         
      },
      // 过滤emoji表情
      emoji: function(){
          this.otherPlatformProductLink = this.otherPlatformProductLink.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
      },
      // 计算差价
      countPrice: function(){
          this.priceDifference = this.orderProduct.realPrice - (this.otherPrice *100 * this.productCount);
          this.couponAmount = Math.ceil(this.priceDifference * 2 / 100);
      },
      // 商品截图
      uploadImg: function(id, imgArr){
          var files = document.querySelector('#' + id).files;
          if(files.length == 0){ return; }
          if(files.length > 3) {
              Toast('最多上传三张图片');
              return;
          }
          if(imgArr.length >= 3){
              Toast('最多上传三张图片');
              return;
          }
          this.previewImg(id, files[0], imgArr);
      },
      // 预览图片
      previewImg: function(id, file, imgArr){
       
          var self = this;
          var myFile = document.querySelector('#' + id);
          var rFilter = /^(?:image\/gif|image\/jpeg|image\/png)$/i;

          // 判断上传文件类型
          if(!rFilter.test(file.type)){
              Toast('请上传图片！');
              return;
          }

        
          lrz(file,{width: 1280}).then(function (rst) {
              self.uploadDataBase64(rst.base64,imgArr);
              myFile.value = '';
          })
          .catch(function (err) {
              // 处理失败会执行
              console.log(err)
          });

          

      },
     
      uploadDataBase64: function(dataUrl, imgArr){
          
        let params = {
            imgBase64List: dataUrl
        }
      console.log("params",params);
        api.getUploadImg(params).then((response)=>{
          var res = response.data;
          this.showSpinner = false;
          if(response.status == 1){
              imgArr.push(res.imgList[0]);
          }else{
              Toast(res.msg);
          }
        })
         
      },
      confirm: function (message) {
          var iframe = document.createElement("IFRAME");
          iframe.style.display = "none";
          iframe.setAttribute("src", 'data:text/plain,');
          document.documentElement.appendChild(iframe);
          var alertFrame = window.frames[0];
          var result = alertFrame.window.confirm(message);
          iframe.parentNode.removeChild(iframe);
          return result;
      },
      // 删除预览图片
      delImg: function(index, imgArr){
          this.showConfirm = true;
          this.myIndex = index;
          this.myImgArr = imgArr;
      },
      // 提交赔付申请
      apply: function(){
          var self = this;
          if(!this.platType){
              Toast('请选择比价平台');
              return;
          }
          if(!this.productId){
              Toast('请选择比价商品');
              return;
          }
          if(!this.otherPrice){
              Toast('请输入比价价格');
              return;
          }
          if(this.otherPrice < 0.01){
              Toast('比价价格不低于0.01元');
              return;
          }
          if(this.priceDifference <= 0){
              Toast('应退差价不小于0');
              return;
          }
          if(!this.otherPlatformProductLink){
              Toast('请输入商品页面链接');
              return;
          }
          if(this.uploadProImgs.length == 0){
              Toast('请上传商品页面截图');
              return;
          }
          if(this.uploadSettleImgs.length == 0){
              Toast('请上传结算页面截图');
              return;
          }
          let params = {
            otherPlatformType: self.platType,
            orderProductId: self.productId,
            otherPlatformProductPrice: (self.otherPrice * 100).toFixed(0),
            otherPlatformProductLink: self.otherPlatformProductLink,
            productCount: self.productCount,
            priceDifference: (self.priceDifference).toFixed(0),
            productPagePics: JSON.stringify(self.uploadProImgs),
            settlementPagePics: JSON.stringify(self.uploadSettleImgs),
            couponAmount: self.couponAmount*100
          }
        
         api.getAddApply(params).then((response)=>{
              console.log("response:",response);
              if(response.status == 1){
                  this.$router.push({path:'/compList'})
              }else{
                Toast(response.message)
              }
          });
          
      },
      // 获取地址栏参数
      getQueryString: function(name){
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if(r!=null) return unescape(r[2]);
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

<style scoped>
.no_record {
    margin-top: 200px;
    text-align: center
}

.no_record .icon {
    display: inline-block;
    width: 65px;
    height: 65px;
    background: url(~/images/pay/list.png) no-repeat;
    background-size: 100%
}

.no_record p {
    color: #858585;
    font-size: 16px;
    margin-top: 15px
}

.no_record .apply {
    display: block;
    color: #fff;
    font-size: 14px;
    width: 100px;
    height: 36px;
    line-height: 36px;
    margin: 30px auto 0 auto;
    background: #000
}

.comp_module {
    padding-bottom: 44px
}

.comp_list .comp_item {
    margin-bottom: 8px;
    background: #fff
}

.comp_item .header {
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    border-bottom: 1px solid #e0e0e0
}

.comp_item .header .date {
    color: #858585;
    font-size: 14px
}

.comp_item .record {
    padding: 10px 18px 1px 10px;
    overflow: hidden
}

.comp_item .record .photo {
    float: left;
    width: 60px;
    height: 60px;
    overflow: hidden
}

.comp_item .record .photo img {
    width: 100%
}

.comp_item .record .info {
    margin-left: 70px;
    margin-right: 50px;
}

.comp_item .record .status {
    float: right;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
}

.comp_item .record .info .title {
    color: #666;
    font-size: 14px;
    height: 32px;
    line-height: 16px;
    overflow: hidden
}

.comp_item .record .info .amount {
    color: #666;
    font-size: 14px;
    margin-top: 6px;
}

.comp_item .record .status0 {
    color: #858585
}

.comp_item .record .status1 {
    color: #000
}

.comp_item .record .status2 {
    color: #f00
}

.comp_item .status_text {
    padding: 10px 18px 10px 10px;
    border-top: 1px solid #e0e0e0
}

.comp_item .status_text p {
    color: #858585;
    font-size: 13px;
    line-height: 1.5
}

.apply_link {
    position: fixed;
    left: 0;
    bottom: 0;
    display: block
}

.main .tips {
    height: 45px;
    padding: 0 15px;
    background: #fffff5
}

.main .tips p {
    color: #f00;
    font-size: 12px;
    line-height: 1.5;
    padding-top: 7px;
}

.comp_apply .section {
    padding-left: 15px;
    background: #fff
}

.plat_section {
    margin-top: 10px
}

.plat_section .plat_name i {
    font-style: normal
}

.plat_section .dark {
    color: #858585
}

.section .item {
    overflow: hidden;
    padding-right: 15px;
    border-bottom: 1px solid #e0e0e0
}

.section .item:last-child {
    border-bottom: 0
}

.order_product {
    padding: 18px 0
}

.order_product .pro_photo {
    float: left;
    width: 60px;
    height: 60px;
}

.order_product .pro_photo img {
    width: 100%;
    height: 100%
}

.order_product .pro_info {
    margin-left: 70px
}

.order_product .pro_info .p_title {
    color: #000;
    font-size: 14px;
    line-height: 14px;
    height: 32px;
}

.order_product .pro_info .p_num {
    display: block;
    color: #858585;
    font-size: 14px;
    text-align: right;
    margin-top: 6px
}

.section .item .text {
    float: left;
    color: #000;
    font-size: 14px;
    width: 90px;
    height: 48px;
    line-height: 48px;
}

.section .item .field {
    overflow: hidden
}

.pro_section {
    margin-top: 10px
}

.field .opt {
    float: right;
    height: 48px;
    line-height: 48px
}

.field .link {
    float: right;
    color: #858585;
    font-size: 12px;
    height: 48px;
    line-height: 48px
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
    margin: 5px 5px 3px;
}

.text_field {
    width: 100%;
    height: 18px;
    line-height: 18px;
    margin: 15px 0
}

.section_head {
    margin-top: 10px
}

.section_head .title {
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #e0e0e0;
    overflow: hidden
}

.section_head .title h4 {
    float: left;
    color: #000;
    font-size: 14px;
    font-weight: normal
}

.section_head .title h4 span {
    color: #858585;
    font-size: 12px;
    font-weight: normal
}

.section_head .title .link {
    float: right;
    color: #858585;
    font-size: 12px
}

.upload_module {
    padding: 15px 0
}

.upload_module .upload_label {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden
}

.upload_module .upload_label input {
    visibility: hidden
}

.photo_list li {
    position: relative;
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 10px
}

.photo_list li .delete {
    position: absolute;
    top: -8px;
    right: -8px;
    display: block;
    width: 16px;
    height: 16px;
    background: url(~images/pay/close.png) no-repeat;
    background-size: 100%
}

.photo_list li .preview {
    width: 60px;
    height: 60px;
    line-height: 60px;
    overflow: hidden
}

.photo_list li:last-child {
    margin-right: 0
}

.photo_list li img {
    width: 100%
}

.photo_list li.upload {
    background: url(~images/pay/upload.png) no-repeat; 
    background-size: 100%
}

.apply_btn {
    color: #fff;
    font-size: 16px;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    margin-top: 10px;
    background: #000
}

.mask2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 99
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
    overflow: hidden
}

.confirm_module .confirm {
    color: #000;
    font-size: 14px;
    padding: 40px 20px;
    border-bottom: 1px solid #e0e0e0
}

.confirm_module .footer {
    overflow: hidden
}

.confirm_module .footer .btn {
    float: left;
    font-size: 14px;
    width: 50%;
    height: 48px;
    line-height: 48px;
    text-align: center
}

.confirm_module .footer .cancel {
    color: #000
}

.confirm_module .footer .sure {
    color: #fff;
    background: #000
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 99
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
    transition: all 1s ease-in .1s
}

.plat_module.show {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.plat_module .title {
    height: 56px;
    line-height: 56px
}

.plat_module .title h3 {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-align: center
}

.plat_module .plat_list {
    padding-left: 15px
}

.plat_module .plat_list li {
    position: relative;
    height: 48px;
    line-height: 48px;
    padding-right: 15px;
    border-top: 1px solid #e0e0e0;
    overflow: hidden
}

.plat_module .plat_list .text {
    float: left;
    color: #000;
    font-size: 14px
}

.plat_module .plat_list .icon {
    position: absolute;
    top: 50%;
    right: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.plat_module .plat_list .icon.active {
    background: url(~images/pay/choose.png) no-repeat;
    background-size: 100%
}

.plat_module .close {
    color: #fff;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: #000
}

.mask1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 9999
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
    background: rgba(0,0,0,0.7)
}

.spinner_load .spinner {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 4px solid transparent;
    border-color: #858585 #858585 #858585 transparent;
    border-radius: 50%;
    -webkit-animation: spinner-rotate .8s infinite linear;
    animation: spinner-rotate .8s infinite linear
}

.spinner_load .text {
    display: block;
    color: #fff;
    font-size: 14px;
    text-align: center;
    margin-top: 2px
}

@-webkit-keyframes spinner-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes spinner-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

.no_pro_list {
    color: #858585;
    font-size:14px;
    padding: 10px 0;
    text-align: center
}

.no_more {
    color: #858585;
    font-size: 12px;
    padding: 10px 0;
    text-align: center
}

.order_pro_list .pro_item {
    margin-top: 10px;
    background: #fff
}

.pro_item .pro_head {
    height: 44px;
    line-height: 44px;
    padding: 0 10px
}

.pro_head .num {
    float: left;
    color: #858585;
    font-size: 14px
}

.pro_head .date {
    float: right;
    color: #858585;
    font-size: 13px
}

.pro_item .pro_info {
    padding: 10px;
    background: #f9f9f9;
    overflow: hidden
}

.pro_info .pro_photo {
    float: left;
    width: 60px;
    height: 60px
}

.pro_info .pro_photo img {
    width: 100%;
    height: 100%
}

.pro_info .pro_title {
    float: left;
    color: #000;
    font-size: 14px;
    width: 200px;
    line-height: 1.2;
    margin-left: 10px
}

.pro_info .num {
    float: right;
    color: #858585;
    font-size: 14px
}

.pro_item .cost {
    padding: 1px 10px
}

.pro_item .cost p {
    line-height: 1;
    margin: 10px 0;
    overflow: hidden
}

.pro_item .cost .text {
    float: left;
    color: #858585;
    font-size: 13px
}

.pro_item .cost .val {
    float: right;
    color: #000;
    font-size: 14px
}

.example {
    padding: 10px
}

.example_list li {
    margin-top: 12px
}

.example_list li p {
    color: #000;
    font-size: 13px;
    line-height: 1.4
}

.example_list .photo {
    margin-top: 8px
}

.example_list .photo img {
    width: 100%
}

@media screen and (max-width: 375px) {
    .pro_head .num {
        font-size:13px
    }

    .pro_head .date {
        font-size: 12px
    }

    .pro_info .pro_title {
        font-size: 13px
    }

    .pro_item .cost .text {
        font-size: 12px
    }

    .pro_item .cost .val {
        font-size: 13px
    }
}

</style>
