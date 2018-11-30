<template>
  <div id="productListModule" v-cloak>
    <!-- 头部 -->
    <!-- <div class="app-bar" v-if="isApp">
        <a href="javascript:;" class="pin-back" @click="back()"></a>
        <b class="f-18">选择商品</b>
    </div> -->

    <div class="main " :class="{has_app_bar: isApp}">
        <!-- 赔付商品列表 -->
        <div class="order_products" v-if="productList.length > 0">
            <ul class="order_pro_list">
                <li class="pro_item" v-for="(product,index) in productList" :key="index">
                    <div class="pro_head">
                        <span class="num">订单编号：{{product.orderNum}}</span>
                        <span class="date">{{product.payTime}}</span>
                    </div>
                    <div class="pro_info" @click="chooseProduct(product.orderProductId)">
                        <div class="pro_photo"><img :src="product.img" alt=""/></div>
                        <p class="pro_title">{{product.shortName}}</p>
                        <span class="num">x {{product.productCount}}</span>
                    </div>
                    <div class="cost">
                        <p>
                            <span class="text">单价支付价格</span>
                            <span class="val">¥ {{product.singlePayPrice/100}}</span>
                        </p>
                        <p>
                            <span class="text">单价返利价格</span>
                            <span class="val">¥ {{product.singleCommision/100}}</span>
                        </p>
                        <p>
                            <span class="text">单价实际购买价</span>
                            <span class="val">¥ {{product.singleRealPrice/100}}</span>
                        </p>
                    </div>
                </li>
            </ul>
            <p class="no_more">没有更多</p>
        </div>

        <!-- 提示信息 -->
        <div class="protips t_c col-fff f-14"></div>

        <!-- 暂无赔付商品 -->
        <p class="no_pro_list" v-if="productList.length == 0">暂无可赔付商品</p>
    </div>
</div>
</template>

<script>
import api from  '@/api/pay'
import {Toast} from 'mint-ui'

export default {
   name:'comProList',
   data () {
    return {
      isApp: true,
      platType: this.$route.query.platType?this.$route.query.platType:"",
      productList: []
    }
   },
  mounted: function(){
	
    var accountId = this.getQueryString('accountId');
    this.isApp = this.getQueryString('isApp');
    //this.platType = this.getQueryString('platType');
    // 判断app是否登陆
    if(this.isApp && !accountId){
        var url = 'ggj://redirect/typeCommon/' + JSON.stringify({type: 6});
        window.location.href = url;
        return;
    }
    this.getRepProductList();
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
        var params = '';

        if(this.platType){
            params += 'platType=' + this.platType;
        }
        link = params ? link + '&' + params : link;
        var url =this.appLinkStr(link);
        window.location.replace(url);
    },
    // 获取赔付申请商品
    getRepProductList: function(){
      let params = {
        page:1,
        pageSize:10
      };
      api.getOrderProductList(params).then((response)=>{
           var res = response.data;
            if(response.status == 1){
                this.productList = res.orderProductList;
            }else{
                Toast(response.msg);
            }
      });
       
    },
    // 选择赔付商品
    chooseProduct: function(id){
				//this.$router.push({path: '/applyList', query: {pid:id,platType:this.platType?this.platType:0}})
				  var url = '/applyList?pid=' + id;
            this.goLink(url);
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
	margin-top:200px;
	text-align:center
}
.no_record .icon {
	display:inline-block;
	width:65px;
	height:65px;
	background:url(~images/pay/list.png) no-repeat;
	background-size:100%
}
.no_record p {
	color:#858585;
	font-size:16px;
	margin-top:15px
}
.no_record .apply {
	display:block;
	color:#fff;
	font-size:14px;
	width:100px;
	height:36px;
	line-height:36px;
	margin:30px auto 0 auto;
	background:#000
}
.comp_module {
	padding-bottom:44px
}
.comp_list .comp_item {
	margin-bottom:8px;
	background:#fff
}
.comp_item .header {
	height:48px;
	line-height:48px;
	padding:0 10px;
	border-bottom:1px solid #e0e0e0
}
.comp_item .header .date {
	color:#858585;
	font-size:14px
}
.comp_item .record {
	padding:10px 18px 10px 10px;
	overflow:hidden
}
.comp_item .record .photo {
	float:left;
	width:60px;
	height:60px;
	overflow:hidden
}
.comp_item .record .photo img {
	width:100%
}
.comp_item .record .info {
	margin-left:70px;
	margin-right:50px
}
.comp_item .record .status {
	float:right;
	font-size:14px;
	height:60px;
	line-height:60px
}
.comp_item .record .info .title {
	color:#666;
	font-size:14px;
	height:32px;
	line-height:16px;
	overflow:hidden
}
.comp_item .record .info .amount {
	color:#666;
	font-size:14px;
	margin-top:6px
}
.comp_item .record .status0 {
	color:#858585
}
.comp_item .record .status1 {
	color:#000
}
.comp_item .record .status2 {
	color:#f00
}
.comp_item .status_text {
	padding:10px 18px 10px 10px;
	border-top:1px solid #e0e0e0
}
.comp_item .status_text p {
	color:#858585;
	font-size:13px;
	line-height:1.5
}
.apply_link {
	position:fixed;
	left:0;
	bottom:0;
	display:block
}
.main .tips {
	height:45px;
	padding:0 15px;
	background:#fffff5
}
.main .tips p {
	color:#f00;
	font-size:12px;
	line-height:1.5;
	padding-top:7px
}
.comp_apply .section {
	padding-left:15px;
	background:#fff
}
.plat_section {
	margin-top:10px
}
.plat_section .plat_name i {
	font-style:normal
}
.plat_section .dark {
	color:#858585
}
.section .item {
	overflow:hidden;
	padding-right:15px;
	border-bottom:1px solid #e0e0e0
}
.section .item:last-child {
	border-bottom:0
}
.order_product {
	padding:18px 0
}
.order_product .pro_photo {
	float:left;
	width:60px;
	height:60px
}
.order_product .pro_photo img {
	width:100%;
	height:100%
}
.order_product .pro_info {
	margin-left:70px
}
.order_product .pro_info .p_title {
	color:#000;
	font-size:14px;
	line-height:14px;
	height:32px
}
.order_product .pro_info .p_num {
	display:block;
	color:#858585;
	font-size:14px;
	text-align:right;
	margin-top:6px
}
.section .item .text {
	float:left;
	color:#000;
	font-size:14px;
	width:90px;
	height:48px;
	line-height:48px
}
.section .item .field {
	overflow:hidden
}
.pro_section {
	margin-top:10px
}
.field .opt {
	float:right;
	height:48px;
	line-height:48px
}
.field .link {
	float:right;
	color:#858585;
	font-size:12px;
	height:48px;
	line-height:48px
}
.trangle {
	display:inline-block;
	width:8px;
	height:8px;
	border-style:solid;
	border-width:1px 1px 0 0;
	border-color:#858585 #858585 transparent transparent;
	-webkit-transform:rotate(45deg);
	transform:rotate(45deg);
	margin:5px 5px 0 3px
}
.text_field {
	width:100%;
	height:18px;
	line-height:18px;
	margin:15px 0
}
.section_head {
	margin-top:10px
}
.section_head .title {
	height:48px;
	line-height:48px;
	border-bottom:1px solid #e0e0e0;
	overflow:hidden
}
.section_head .title h4 {
	float:left;
	color:#000;
	font-size:14px;
	font-weight:normal
}
.section_head .title h4 span {
	color:#858585;
	font-size:12px;
	font-weight:normal
}
.section_head .title .link {
	float:right;
	color:#858585;
	font-size:12px
}
.upload_module {
	padding:15px 0
}
.upload_module .upload_label {
	display:block;
	width:100%;
	height:100%;
	overflow:hidden
}
.upload_module .upload_label input {
	visibility:hidden
}
.photo_list li {
	position:relative;
	float:left;
	width:60px;
	height:60px;
	margin-right:10px
}
.photo_list li .delete {
	position:absolute;
	top:-8px;
	right:-8px;
	display:block;
	width:16px;
	height:16px;
  background:url(~images/pay/close.png) no-repeat; 
	background-size:100%
}
.photo_list li .preview {
	width:60px;
	height:60px;
	line-height:60px;
	overflow:hidden
}
.photo_list li:last-child {
	margin-right:0
}
.photo_list li img {
	width:100%
}
.photo_list li.upload {
	background:url(~images/pay/upload.png) no-repeat;
	background-size:100%
}
.apply_btn {
	color:#fff;
	font-size:16px;
	width:100%;
	height:44px;
	line-height:44px;
	text-align:center;
	margin-top:10px;
	background:#000
}
.mask2 {
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.5);
	z-index:99
}
.confirm_module {
	position:absolute;
	left:50%;
	top:50%;
	width:240px;
	background:#fff;
	-webkit-transform:translate(-50%,-50%);
	transform:translate(-50%,-50%);
	border-radius:6px;
	background:#fff;
	overflow:hidden
}
.confirm_module .confirm {
	color:#000;
	font-size:14px;
	padding:40px 20px;
	border-bottom:1px solid #e0e0e0
}
.confirm_module .footer {
	overflow:hidden
}
.confirm_module .footer .btn {
	float:left;
	font-size:14px;
	width:50%;
	height:48px;
	line-height:48px;
	text-align:center
}
.confirm_module .footer .cancel {
	color:#000
}
.confirm_module .footer .sure {
	color:#fff;
	background:#000
}
.mask {
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.5);
	z-index:99
}
.plat_module {
	position:absolute;
	left:0;
	bottom:0;
	width:100%;
	background:#fff;
	-webkit-transform:translateY(100%);
	transform:translateY(100%);
	-webkit-transition:all 1s ease-in .1s;
	transition:all 1s ease-in .1s
}
.plat_module.show {
	-webkit-transform:translateY(0);
	transform:translateY(0)
}
.plat_module .title {
	height:56px;
	line-height:56px
}
.plat_module .title h3 {
	color:#000;
	font-size:16px;
	font-weight:bold;
	text-align:center
}
.plat_module .plat_list {
	padding-left:15px
}
.plat_module .plat_list li {
	position:relative;
	height:48px;
	line-height:48px;
	padding-right:15px;
	border-top:1px solid #e0e0e0;
	overflow:hidden
}
.plat_module .plat_list .text {
	float:left;
	color:#000;
	font-size:14px;
}
.plat_module .plat_list .icon {
	position:absolute;
	top:50%;
	right:15px;
	width:30px;
	height:30px;
	border-radius:50%;
	border:1px solid #e0e0e0;
	-webkit-transform:translateY(-50%);
	transform:translateY(-50%)
}
.plat_module .plat_list .icon.active {
	background:url(~images/pay/choose.png) no-repeat;
	background-size:100%
}
.plat_module .close {
	color:#fff;
	font-size:16px;
	height:48px;
	line-height:48px;
	text-align:center;
	background:#000
}
.mask1 {
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:transparent;
	z-index:9999
}
.spinner_load {
	position:fixed;
	top:50%;
	left:50%;
	padding:20px;
	border-radius:5px;
	text-align:center;
	-webkit-transform:translate(-50%,-50%);
	transform:translate(-50%,-50%);
	background:rgba(0,0,0,0.7)
}
.spinner_load .spinner {
	display:inline-block;
	width:30px;
	height:30px;
	border:4px solid transparent;
	border-color:#858585 #858585 #858585 transparent;
	border-radius:50%;
	-webkit-animation:spinner-rotate .8s infinite linear;
	animation:spinner-rotate .8s infinite linear
}
.spinner_load .text {
	display:block;
	color:#fff;
	font-size:14px;
	text-align:center;
	margin-top:2px
}
@-webkit-keyframes spinner-rotate {
	0% {
	-webkit-transform:rotate(0deg);
	transform:rotate(0deg)
}
100% {
	-webkit-transform:rotate(360deg);
	transform:rotate(360deg)
}
}@keyframes spinner-rotate {
	0% {
	-webkit-transform:rotate(0deg);
	transform:rotate(0deg)
}
100% {
	-webkit-transform:rotate(360deg);
	transform:rotate(360deg)
}
}.no_pro_list {
	color:#858585;
	font-size:14px;
	padding:10px 0;
	text-align:center
}
.no_more {
	color:#858585;
	font-size:12px;
	padding:10px 0;
	text-align:center
}
.order_pro_list .pro_item {
	margin-top:10px;
	background:#fff
}
.pro_item .pro_head {
	height:44px;
	line-height:44px;
	padding:0 10px
}
.pro_head .num {
	float:left;
	color:#858585;
	font-size:14px
}
.pro_head .date {
	float:right;
	color:#858585;
	font-size:13px
}
.pro_item .pro_info {
	padding:10px;
	background:#f9f9f9;
	overflow:hidden
}
.pro_info .pro_photo {
	float:left;
	width:60px;
	height:60px
}
.pro_info .pro_photo img {
	width:100%;
	height:100%
}
.pro_info .pro_title {
	float:left;
	color:#000;
	font-size:14px;
	width:200px;
	line-height:1.2;
	margin-left:10px
}
.pro_info .num {
	float:right;
	color:#858585;
	font-size:14px
}
.pro_item .cost {
	padding:1px 10px
}
.pro_item .cost p {
	line-height:1;
	margin:10px 0;
	overflow:hidden
}
.pro_item .cost .text {
	float:left;
	color:#858585;
	font-size:13px
}
.pro_item .cost .val {
	float:right;
	color:#000;
	font-size:14px
}
.example {
	padding:10px
}
.example_list li {
	margin-top:12px
}
.example_list li p {
	color:#000;
	font-size:13px;
	line-height:1.4
}
.example_list .photo {
	margin-top:8px
}
.example_list .photo img {
	width:100%
}
@media screen and (max-width:375px) {
	.pro_head .num {
	font-size:13px
}
.pro_head .date {
	font-size:12px
}
.pro_info .pro_title {
	font-size:13px
}
.pro_item .cost .text {
	font-size:12px
}
.pro_item .cost .val {
	font-size:13px
}
}
</style>
