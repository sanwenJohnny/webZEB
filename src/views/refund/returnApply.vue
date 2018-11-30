<template>
  <div id="applyModule" :class="{flexModule: showFlex}" v-cloak>
    <!-- 头部 -->
    <div class="header_bar flexHeader" v-if="isAppView == 1">
      <span class="back bar" @click="back()"><i class="icon"></i></span>
      <h4>退款申请</h4>
      <span class="share bar"></span>
    </div>

    <div class="refund_apply flexMain">
      <div class="content">
        <!-- 退款商品-->
        <div class="refund_item pro_module">

          <div class="pro_single" v-if="refundProductList.length == 1">
              <div class="pro_photo"><img :src="refundProductList[0].imgUrl" alt=""/></div>
              <!-- 单个退款商品-->
              <div class="pro_mes">
                  <div class="info_top">
                      <!-- 商品标题-->
                      <span class="pro_title">{{refundProductList[0].name}}</span>
                      <!-- 商品数量-->
                      <div class="pro_num" v-if="refundInfo.isEditRefuse == 0">
                          <span class="item minus" @click="minus()"><i>-</i></span>
                          <input type="number" class="num" v-model="refundCount" pattern="[0-9]*" @blur="checkNum()"/>
                          <span class="item add" @click="add()"><i>+</i></span>
                      </div>
                  </div>

                  <div class="info_bottom">
                      <div class="amount" v-if="refundProductList[0].buyCount == refundCount">合计：<span class="amount_num">¥{{refundProductList[0].totalPrice/100}} <i>( ¥{{refundProductList[0].singlePrice/100}}x{{refundCount}} )</i></span></div>
                      <div class="amount" v-else>合计：<span class="amount_num">¥{{refundProductList[0].singlePrice*refundCount/100}} <i>( ¥{{refundProductList[0].singlePrice/100}}x{{refundCount}} )</i></span></div>
                      <div @click="jumpEdit" class="edit" v-if="refundInfo.canBatchEdit == 1 && refundInfo.isEditRefuse == 0">批量编辑</div>
                  </div>
              </div>
          </div>
          <!-- 批量退款商品-->
          <div class="pro_collect" v-if="refundProductList.length > 1">
            <div class="p_list_module">
              <ul class="p_list">
                <li class="p_photo" v-for="product in refundInfo.productList">
                  <img :src="product.imgUrl" alt=""/>
                  <p class="price" v-if="product.count == product.buyCount">¥ {{product.totalPrice/100}}</p>
                  <p class="price" v-else>¥ {{product.singlePrice*product.count/100}}</p>
                </li>
              </ul>
            </div>
            <div class="edit_url" v-if="refundInfo.canBatchEdit == 1 && refundInfo.isEditRefuse == 0">
              <div @click="jumpEdit" class="edit">批量编辑</div>
            </div>
          </div>
        </div>

        <!-- 退款类型-->
        <ul class="refund_item refund_type" v-if="refundInfo.canDisplayReturnGoods == 1 && refundInfo.isEditRefuse == 0">
          <li @click="chooseRefundType(1)">
            <input type="radio" class="checkbox" value="1" name="refundType" v-model="refundType"/>
            <div class="type_des">
                <h4>仅退款</h4>
                <p>退税费、退代理费、与客服沟通后<strong>无须退货</strong>的售后类型</p>
            </div>
          </li>
          <li  @click="chooseRefundType(2)">
            <input type="radio" class="checkbox" value="2" name="refundType" v-model="refundType"/>
            <div class="type_des">
                <h4>退货退款</h4>
                <p>无理由退货、商品质量问题，与客服沟通后<strong>需要退货</strong>的售后类型</p>
            </div>
          </li>
        </ul>

        <!-- 退款原因-->
        <div class="refund_item refund_reason" @click="openReason()">
          <span class="text">退款原因</span>
          <div class="reason_select">
              <span class="val">{{reasonText}}</span>
              <div class="trangle"></div>
          </div>
        </div>

        <!--退款账号-->
        <ul class="refund_item refund_type refund-pay" v-if="refundReturnType == 1">
          <li>
              退款姓名
              <input type="text" v-model.trim="accountName" placeholder="请输入姓名">
          </li>
          <li>
              退款账号
              <input type="text" v-model.trim="accountNumber" placeholder="请输入退款的支付宝账号">
          </li>
          <li class="refund-pay-tip">
              该订单不支持原路退款，钱款会退回至您提供的支付宝账号
          </li>
        </ul>

        <!-- 退款金额-->
        <div class="refund_item refund_amount" v-if="refundInfo">
          <div class="amount">
              <span class="txt">退款金额</span>
              <div class="price_num">
                  <span class="unit">¥</span>
                  <input class="num showEditPrice" type="number" v-if="showEditPrice" v-model.lazy="editRefundPrice" @blur="checkEditPrice()"/>
                  <input class="num" type="number" v-if="refundInfo.canEditRefundPrice && !showEditPrice" v-model.lazy="showRefundPrice" @focus="showEditRefundPrice()"/>
                  <span class="num" v-if="!refundInfo.canEditRefundPrice">{{showRefundPrice}}</span>
              </div>
          </div>
          <p class="des">最多¥ {{totalPrice/100}}<span>，含邮费：¥ {{applyPostage/100}}</span></p>
        </div>

        <!-- 退款说明-->
        <div class="refund_item refund_des">
            <span class="txt">退款说明</span>
            <input class="des" type="text" placeholder="选填" v-model="explain"/>
        </div>

        <!-- 上传凭证-->
        <div class="refund_item refund_upload">
          <div class="upload_header">
              <h4>上传凭证<span>（最多选择3张）</span></h4>
          </div>
          <ul class="upload_list">
              <li v-for="(image, index) in uploadImgs">
                  <span class="close" @click="deleteImg(index)"></span>
                  <img class="preview" :src="image" alt=""/>
              </li>
              <li class="upload_btn" v-if="uploadImgs.length < 3">
                  <label><input id="file" type="file" accept="image/*" @change="uploadImg()" /></label>
              </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- 提交退款-->
    <div class="apply_btn flexFooter" @click="applyForRefund()" v-if="refundProductList.length > 0">提交</div>
    <!-- 选择退款原因 -->
    <div class="plat_component">
      <div class="mask" v-show="showRefundReason" @click="closeReason()"></div>
      <div class="plat_module" :class="{show: showRefundReason}" v-show="showRefundReason">
          <div class="title">
              <h3>选择退款原因</h3>
          </div>
          <ul class="plat_list">
              <li v-for="reason in reasonList" @click="chooseReason(reason)">
                  <p class="text">{{reason.desc}}</p>
                  <span class="icon" style="border: 1px solid #e0e0e0;" :class="{active: reason.id == reasonId}"></span>
              </li>
          </ul>
          <div class="close" @click="closeReason()">确认</div>
      </div>
    </div>
</div>

</template>

<script>
import api from '@/api/refund'
import tools from '@/utils/tools'
import { MessageBox } from 'mint-ui';
import bridge from "@/utils/bridge"

export default {
  name: "refundApply",
  data() {
    return {
      isAppView: 0,
      showFlex: false,
      showToast: false,
      toastMsg: "",
      showSpinner: false,
      spinnerTxt: "加载中",
      showConfirm: false,
      confirmTxt: "",
      showConfirmBag: false,
      confirmBagTxt: "",
      deleteIndex: 0,
      orderId: "",
      orderProductId: "",
      applyNumber: "",
      paramsProductInfo: "",
      showRefundReason: false,
      refundInfo: "",
      refundProductList: [],
      refundCount: 1,
      productCount: 1,
      refundType: 1,
      reasonId: "",
      reasonText: "请选择",
      uploadImgs: [],
      showEditPrice: false,
      editRefundPrice: 0,
      explain: "",
      isRemindPushWarehouse: 0,
      postUrl: "",
      postRefundPrice: 0,
      refundReturnType: 0,
      accountName: "",
      accountNumber: "",
      referrer: ""
    };
  },
  watch: {
    /**
     * 监控refundCount是否变动,
     * 如产生变动,
     * 用户手动修改的退款金额(editRefundPrice)需与系统计算的退款金额(showRefundPrice)同步,
     * 并显示系统退款金额
     */
    refundCount: function(newCount, count) {
      var buyCount = this.refundProductList[0].buyCount;
      if (newCount > buyCount) {
        this.showToast = true;
        this.toastMsg = "退货数量不得超过" + count;
        this.refundCount = count;
      } else {
        this.showEditPrice = false;
        this.editRefundPrice = this.showRefundPrice;
      }
    },
    /**
     * 监控退款金额改动
     */
    editRefundPrice: function(newPrice, price) {
      var isPrice = /^(0|([1-9]\d*))(?:\d*|\.\d+)$/;

      if (isPrice.test(newPrice)) {
        if (this.accMul(newPrice, 100) > this.totalPrice) {
          this.showToast = true;
          this.toastMsg = "不能大于最大退款金额";
          this.editRefundPrice = this.totalPrice / 100;
        }
      } else if (newPrice === "") {
        this.editRefundPrice = "";
      } else {
        this.showToast = true;
        this.toastMsg = "请输入正确的退款金额";
        this.editRefundPrice = price;
      }
    }
  },
  computed: {
    /**
     * 退款原因列表
     * 根据不同退款类型,
     * 设置退款原因
     */
    reasonList: function() {
      var reasons = [];
      if (this.refundType == 1) {
        reasons = this.refundInfo.refundMoneyReasonList;
      } else {
        reasons = this.refundInfo.refundGoodsReasonList;
      }
      return reasons;
    },
    showRefundPrice: function() {
      return this.totalPrice / 100;
    },
    /**
     * 退货商品金额
     * 根据用户提交的退货商品及数量,
     * 计算退货商品金额
     */
    applyRefundPrice: function() {
      var count = 0;
      var productPrice = 0;
      var refundPrice = 0;
      var product = {};
      var len = this.refundProductList.length;
      for (var i = 0; i < len; i++) {
        product = this.refundProductList[i];
        count = len == 1 ? this.refundCount : product.count;

        if (count == product.buyCount) {
          productPrice = product.totalPrice;
        } else {
          productPrice = parseInt(product.singlePrice) * parseInt(count);
        }
        refundPrice += productPrice;
      }
      return refundPrice;
    },
    isTotalRefund: function() {
      var isTotal = true;
      var productInfo = JSON.parse(this.productInfo);
      for (var i = 0; i < productInfo.length; i++) {
        var item = productInfo[i];
        if (item.count != item.buyCount) {
          isTotal = false;
        }
      }
      return isTotal;
    },
    /**
     * 退款邮费
     */
    applyPostage: function() {
      var postage = 0;
      if (
        this.refundInfo.calculatePostageWhenAllReturn == 1 &&
        this.isTotalRefund
      ) {
        postage = this.refundInfo.postage;
      }
      return postage;
    },
    /**
     * 总退款金额
     * 退货商品金额 + 退款邮费
     */
    totalPrice: function() {
      return this.applyRefundPrice + this.applyPostage;
    },
    /**
     * 同步退货商品信息
     */
    productInfo: function() {
      var productInfo = [];
      if (this.refundProductList.length == 1) {
        productInfo.push({
          orderProductId: this.refundProductList[0].orderProductId,
          count: this.refundCount,
          buyCount: this.productCount
        });
        productInfo = JSON.stringify(productInfo);
      } else {
        productInfo = this.paramsProductInfo;
      }
      return productInfo;
    }
  },
  // components: {
  //   VToast: ggj.toast,
  //   VSpinner: ggj.spinner,
  //   VConfirm: ggj.confirm
  // },
  beforeRouteEnter(to, from, next){
    const path = from.path === "/" ? "" : from.path
    next(vm=>{
      vm.referrer = path
    })
  },
  mounted: function() {
    this.isAppView =
      this.$route.query.isApp || this.$route.query.isAppView || 0;
    this.orderProductId = this.$route.query.orderProductId || "";
    this.paramsProductInfo = decodeURIComponent(
      this.$route.query.productInfo || ""
    );
    this.applyNumber = this.$route.query.applyNumber || "";
    this.getRefundProduct();
    tools.bridgeFun()
  },
  methods: {
    // 返回
    back: function() {
      var referrer = this.referrer;
      var isEdit = /editRefundProducts/.test(referrer);
      if (referrer) {
        if (isEdit) {
          if (this.isAppView == 1) {
            bridge.changeReceiveAddress()
            // window.WebViewJavascriptBridge.callHandler("changeReceiveAddress");
            window.location.href = "ggj://redirect";
          } else {
            this.$router.go(-2);
          }
        } else {
          this.$router.go(-1);
        }
      } else {
        bridge.changeReceiveAddress()
        // window.WebViewJavascriptBridge.callHandler("changeReceiveAddress");
        window.location.href = "ggj://redirect";
      }
    },
    accMul: function(arg1, arg2) {
      var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
      try {
        m += s1.split(".")[1].length;
      } catch (e) {}
      try {
        m += s2.split(".")[1].length;
      } catch (e) {}
      return (
        (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
        Math.pow(10, m)
      );
    },
    jumpEdit(){
      const data = {
        isAppView: this.isAppView,
        orderId: this.orderId,
        editProductInfo: encodeURIComponent(this.productInfo),
        isHide: 1
      }
      if(this.applyNumber){
        data.applyNumber = this.applyNumber
      }
      this.$router.push({
        path: "/refund/editRefundProducts",
        query: data
      })
    },
    // 获取退款商品信息
    getRefundProduct: function() {
      var postUrl = "";
      var applyNumber = this.applyNumber;
      var orderProductId = this.orderProductId;
      var paramsInfo = this.paramsProductInfo;
      var params = {};

      /**
       * 区分不同情况的请求参数
       * orderProductId 为单个商品退货申请
       * paramsInfo 为多个商品退货申请
       * applyNumber 修改退货申请则传递
       */
      if (orderProductId) {
        api.preSubmit({
          orderProductId: orderProductId
        }).then(res=>{
          this.getRefundProductCB(res)
        })
      } else if (paramsInfo) {
        api.preSubmit({
          productInfo: paramsInfo,
          applyNumber: applyNumber
        }).then(res=>{
          this.getRefundProductCB(res)
        })
      } else if (applyNumber) {
        api.getApplyInfoForUpdate({
          applyNumber: applyNumber
        }).then(res=>{
          this.getRefundProductCB(res)
        })
      }
      
    },
    // 获取退款商品信息回调
    getRefundProductCB(res){
      let applyNumber = this.applyNumber;
      var productsInfo = [];

      /**
        * 解决ios返回、focus()白屏问题
        */
      this.$nextTick(function() {
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
      });

      this.showFlex = true;
      this.showSpinner = false;
      if (res.status == 1) {
        this.refundInfo = res.data;
        this.orderId = res.data.orderId;
        this.refundProductList = res.data.productList;
        this.refundReturnType = res.data.refundReturnType
          ? res.data.refundReturnType
          : 0;
        if (this.refundProductList.length == 1) {
          var refundProduct = this.refundProductList[0];
          this.refundCount = refundProduct.count;
          this.productCount = refundProduct.buyCount;
        } else {
          for (var i = 0; i < this.refundProductList.length; i++) {
            productsInfo.push({
              orderProductId: this.refundProductList[i].orderProductId,
              count: this.refundProductList[i].count,
              buyCount: this.refundProductList[i].buyCount
            });
          }
          this.paramsProductInfo = JSON.stringify(productsInfo);
        }
        this.editRefundPrice = this.showRefundPrice;
        this.isRemindPushWarehouse = res.data.isRemindPushWarehouse;
        /**
          * 判断是否是修改退货申请
          * 该接口返回数据多了几个字段
          */
        if (applyNumber) {
          var imgList = res.data.imgList;
          this.reasonId = res.data.refundReasonId;
          this.refundType = res.data.refundType || 1;
          this.explain = res.data.explain || "";
          this.uploadImgs = imgList ? imgList.split(",") : [];
          var reasonList = this.reasonList;

          for (var i = 0; i < reasonList.length; i++) {
            if (reasonList[i].id == this.reasonId) {
              this.reasonText = reasonList[i].desc;
            }
          }
        }
      } else {
        // this.showToast = true;
        // this.toastMsg = res.message;
        tools.toast(res.message)
        if (this.isAppView != 1 && res.status == 3) {
          setTimeout(function() {
            this.$router.push({
              path: "/personal"
            })
            // window.location.href = "/ygg-hqbs/spokesPerson/getList";
          }, 1000);
        }
      }
    },
    // 显示修改退款金额
    showEditRefundPrice: function() {
      this.showEditPrice = true;
    },
    // 选择退款类型
    chooseRefundType: function(type) {
      if (this.refundType != type) {
        this.reasonId = "";
        this.reasonText = "请选择";
        this.refundType = type;
      }
    },
    // add
    add: function() {
      if (this.refundCount < this.productCount) {
        this.refundCount += 1;
      }
    },
    // minus
    minus: function() {
      if (this.refundCount > 1) {
        this.refundCount -= 1;
      }
    },
    /**
     * 验证商品数量
     * 限制商品数量为正整数
     */
    checkNum: function() {
      var reg = /^[1-9]\d*$/gi;
      if (!reg.test(this.refundCount)) {
        this.refundCount = 1;
      }
    },
    /**
     * 验证用户编辑价格
     */
    checkEditPrice: function() {
      if (this.editRefundPrice === "") {
        this.editRefundPrice = 0;
      }
    },
    /**
     * 判断商品是否已推单
     */
    applyForRefund: function() {
      /**
       * 判断退款金额是否为用户修改
       */
      if (this.editRefundPrice == this.showRefundPrice) {
        this.postRefundPrice = this.applyRefundPrice;
      } else {
        this.postRefundPrice = this.accMul(this.editRefundPrice, 100);
      }

      /**
       * 判断是否首次申请退款
       */

      if (!this.orderId) {
        tools.toast("订单id不存在")
        // this.showToast = true;
        // this.toastMsg = "订单id不存在";
        return;
      }
      if (!this.reasonId) {
        tools.toast("请选择退款原因")
        // this.showToast = true;
        // this.toastMsg = "请选择退款原因";
        return;
      }
      if (this.refundReturnType == 1) {
        if (this.accountName == "") {
          tools.toast("请填写退款姓名")
          // this.showToast = true;
          // this.toastMsg = "请填写退款姓名";
          return;
        }
        if (this.accountNumber == "") {
          tools.toast("请填写退款账号")
          // this.showToast = true;
          // this.toastMsg = "请填写退款账号";
          return;
        }
      }
      if (this.postRefundPrice <= 0) {
        tools.toast("退款金额应大于0")
        // this.showToast = true;
        // this.toastMsg = "退款金额应大于0";
        return;
      }
      if (!this.productInfo) {
        tools.toast("您的退款信息有误")
        // this.showToast = true;
        // this.toastMsg = "您的退款信息有误";
        return;
      }

      if (this.isRemindPushWarehouse == 1) {
        MessageBox({
          title: '',
          message: '当前订单正在打包中，此次退款有可能申请失败，如若商品已发货，请收货后申请退货退款',
          showCancelButton: true
        }).then(action=>{
          if(action === "confirm"){
            this.applyRefund();
          }
        })
      } else {
        this.applyRefund();
      }
    },
    /**
     * 提交退款申请
     * @param applyRefundPrice  申请退款金额
     * @param postUrl           申请接口地址
     */
    applyRefund: function() {
      /**
       * 提交退款申请
       * @param orderId           订单ID
       * @param reasonId          退款原因ID
       * @param productInfo       退款商品信息
       * @param applyRefundPrice  申请退款金额
       * @param applyPostage      申请退回邮费
       * @param imgList           退款凭证图片列表
       * @param explain           退款备注
       * @param applyNumber       申请单号（修改申请时必填）
       */
      const data = {
        orderId: this.orderId,
        reasonId: this.reasonId,
        productInfo: this.productInfo,
        applyRefundPrice: this.postRefundPrice,
        applyPostage: this.applyPostage,
        imgList: this.uploadImgs.join(),
        explain: encodeURI(this.explain),
        applyNumber: this.applyNumber || "",
        refundReturnType: this.refundReturnType,
        refundAccount: this.accountNumber,
        refundName: this.accountName
      }
      if(this.applyNumber){
        // 修改申请退款
        api.updateApply(data).then(res=>{
          this.applyRefundCB(res)
        })
      }else{
        // 初次申请退款
        api.submitApply(data).then(res=>{
          this.applyRefundCB(res)
        })
      }
    },
    // 申请退款回调
    applyRefundCB(res){
      // var url =
      //   "/ygg-hqbs/hp/refund/refundList.html?isAppView=" + this.isAppView;

      // this.showSpinner = false;
      // this.spinnerTxt = "加载中";
      if (res.status == 1) {
        window.localStorage.removeItem("isLocal");
        // window.location.href = url;
        this.$router.push({
          path: "/refund/progress",
          query: {
            isAppView: this.isAppView,
            isHide: 1
          }
        })
      } else {
        tools.toast(res.message)
      }
    },
    /**
     * 打开退款原因
     * 退款状态为‘拒绝’时，退款原因不能修改
     */
    openReason: function() {
      if (this.refundInfo.isEditRefuse == 0) {
        this.showRefundReason = true;
      }
    },
    // 关闭退款原因
    closeReason: function() {
      this.showRefundReason = false;
    },
    // 选择退款原因
    chooseReason: function(reason) {
      this.reasonId = reason.id;
      this.reasonText = reason.desc;
    },
    /**
     * 选择上传图片
     * 上传图片几个限制条件:
     * 1、只能上传单张图片
     * 2、最多能上传三张图片
     * 3、图片宽高限制为640px
     */
    uploadImg: function() {
      var self = this;
      var files = document.getElementById("file").files;
      var fileUrl = window.URL || window.webkitURL;

      if (files.length == 0) {
        tools.toast("请选择图片")
        // this.showToast = true;
        // this.toastMsg = "请选择图片";
        return;
      }
      if (files.length >= 3) {
        tools.toast("最多上传三张图片")
        // this.showToast = true;
        // this.toastMsg = "最多上传三张图片";
        return;
      }
      if (this.uploadImgs.length >= 3) {
        tools.toast("最多上传三张图片")
        // this.showToast = true;
        // this.toastMsg = "最多上传三张图片";
        return;
      }

      var objectURL = fileUrl.createObjectURL(files[0]);
      var image = new Image();
      image.src = objectURL;
      image.onload = function() {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var w = image.width;
        var h = image.height;
        var limit_w = 1280;

        if (w > limit_w) {
          h = (h * limit_w) / w;
          w = limit_w;
        }
        if (h > limit_w) {
          w = (w * limit_w) / h;
          h = limit_w;
        }
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, w, h);
        var base64 = canvas.toDataURL("image/jpeg");
        self.uploadDataBase64(base64);
        document.getElementById("file").value = "";
      };
    },
    /**
     * 调用接口上传图片
     * base64图片数组入参，接口支持批量上传
     * @param base64图片
     */
    uploadDataBase64: function(base64) {
      let imgPar = {
        imgBase64List: JSON.stringify([base64])
      }
      api.uploadImg(imgPar).then(res=>{
        this.showSpinner = false;
        if (res.status == 1) {
          this.uploadImgs.push(res.data.imgList[0]);
        } else {
          tools.toast(res.msg)
          // this.showToast = true;
          // this.toastMsg = res.msg;
        }
      })
    },
    /**
     * 删除上传图片
     * 需传入删除图片的位置index
     * @param index
     */
    deleteImg: function(index) {
      this.showConfirm = true;
      this.confirmTxt = "确定删除该图片？";
      this.deleteIndex = index;
      MessageBox({
        title: '',
        message: '确定删除该图片？',
        showCancelButton: true
      }).then(action=>{
        if(action === "confirm"){
          this.uploadImgs.splice(this.deleteIndex, 1);
        }
      })
    },
    // 关闭确认弹窗
    cancel: function() {
      this.showConfirm = false;
    },
    // 确认弹窗
    confirm: function() {
      this.uploadImgs.splice(this.deleteIndex, 1);
      this.showConfirm = false;
    },
    cancelBag: function() {
      this.showConfirmBag = false;
    },
    confirmBag: function() {
      this.showConfirmBag = false;
      this.applyRefund();
    },
    // 链接跳转
    // goLink: function(link, platType) {
    //   var params = "";
    //   if (platType) {
    //     params += "platType=" + platType;
    //   }
    //   link = params ? link + "?" + params : link;
    //   var url = appLinkStr(link);
    //   window.location.href = url;
    // },
    // // 链接跳转
    // goWebviewLink: function(link, platType) {
    //   var params = "";
    //   var protocal = location.protocol;
    //   var hostname = location.hostname;

    //   if (platType) {
    //     params += "platType=" + platType;
    //   }
    //   link = params ? link + "?" + params : link;
    //   var url = appLinkStr(link);
    //   if (this.isAppView) {
    //     url = protocal + "//" + hostname + url;
    //     var opt = {
    //       type: 25,
    //       isHide: 1,
    //       webUrl: url
    //     };
    //     url = "ggj://redirect/typeCommon/" + JSON.stringify(opt);
    //   }
    //   window.location.href = url;
    // },
    // 选择平台
    choosePlat: function(plat) {
      this.platType = plat.type;
      this.platName = localStorage.storePlatName = plat.name;
    },
    closeToast: function() {
      this.showToast = false;
    },
    // 获取地址栏参数
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }
};
</script>

<style scoped lang="less">
#applyModule{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.flexModule {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%; }

.flexHeader {
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }

.flexMain {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch; }
  .flexMain .content {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1; }

.flexFooter {
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }

.apply_btn {
  color: #fff;
  font-size: 16px;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  margin-top: 10px;
  background: #000; }

/* 退款头部 */
.header_bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  height: 45px;
  line-height: 45px;
  background: #000; }

.header_bar .bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  color: #fff;
  width: 45px;
  height: 45px; }
  .header_bar .bar.concat {
    font-size: 14px;
    width: 60px;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; }

.header_bar .bar i {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg); }

.header_bar h4 {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  text-align: center; }
/* 申请退款 */
.refund_item {
  margin-bottom: 8px;
  background: #fff; }

.pro_module {
  padding: 15px; }

.pro_single {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  .pro_single .pro_photo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
        -ms-flex: none;
            flex: none;
    width: 60px;
    height: 60px;
    margin-right: 10px; }
  .pro_single .pro_photo img {
    width: 100%;
    height: 100%; }
  .pro_single .pro_mes {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between; }
    .pro_single .pro_mes .info_top {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: flex-start; }
    .pro_single .pro_mes .info_top .pro_title {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      color: #000;
      font-size: 16px;
      line-height: 22px;
      height: 44px;
      margin-right: 8px;
      overflow: hidden; }
    .pro_single .pro_mes .info_top .pro_num {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
          -ms-flex: none;
              flex: none;
      border: 1PX solid #d9d9d9; }

.pro_num .item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 28px;
  height: 25px; }

.pro_num .item i {
  color: #979797;
  font-size: 16px;
  font-style: normal;
  line-height: 12px; }

.pro_num .num {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #000;
  font-size: 14px;
  width: 30px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border: none;
  border-radius: 0;
  border-left: 1PX solid #d9d9d9;
  border-right: 1PX solid #d9d9d9; }

.pro_mes .info_bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end; }

.info_bottom .amount {
  color: #000;
  font-size: 12px; }

.info_bottom .amount .amount_num {
  color: #f00; }

.info_bottom .amount .amount_num i {
  color: #373737;
  font-style: normal; }

.info_bottom .edit {
  color: #000;
  font-size: 12px; }
/* 退款类型 */
.refund_type {
  padding-left: 12px; }

.refund_type li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 8px 0;
  border-bottom: 1PX solid #f0f0f0; }

.refund_type li:last-child {
  border: none; }

.refund_type .checkbox {
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }

.checkbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1PX solid #d9d9d9; }

.checkbox:checked,
.checkbox.checked {
  background: #000;
  border-color: #000; }

.checkbox:checked:after,
.checkbox.checked:after {
  content: "";
  display: block;
  width: 10px;
  height: 5px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  margin-bottom: 2px; }

.refund_type .type_des {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-left: 12px;
  padding-right: 16px; }

.refund_type .type_des h4 {
  color: #000;
  font-size: 14px;
  font-weight: normal; }

.refund_type .type_des p {
  color: #858585;
  font-size: 12px;
  margin-top: 3px; }

.refund_type .type_des p strong {
  color: #000;
  font-weight: normal; }

/* 选择退款原因 */
.refund_reason {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  height: 46px;
  padding: 0 16px; }
  .refund_reason .text {
    color: #000;
    font-size: 14px; }
  .refund_reason .reason_select {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
    .refund_reason .reason_select .val {
      color: #858585;
      font-size: 14px;
      margin-right: 5px; }
    .refund_reason .reason_select .trangle {
      width: 10px;
      height: 10px;
      border-top: 1PX solid #858585;
      border-right: 1PX solid #858585;
      -webkit-transform: rotate(45deg);
              transform: rotate(45deg); }
/* 退款金额 */
.refund_amount {
  padding-left: 16px; }
  .refund_amount .amount {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    color: #000;
    font-size: 16px;
    height: 46px;
    border-bottom: 1px solid #f0f0f0; }
    .refund_amount .amount .txt {
      line-height: 1; }
    .refund_amount .amount .price_num {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      padding: 0 px 0 10px; }
      .refund_amount .amount .price_num .num {
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1;
        color: #f00;
        font-size: 16px;
        line-height: 1; }
      .refund_amount .amount .price_num .unit {
        color: #f00;
        font-size: 16px;
        margin-right: 2px;
        line-height: 1; }
  .refund_amount .des {
    color: #858585;
    font-size: 14px;
    height: 36px;
    line-height: 36px; }
    .refund_amount .des span {
      color: #858585; }

/* 退款说明 */
.refund_des {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 46px;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.refund_des .txt {
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
  color: #000;
  font-size: 14px;
  padding-left: 16px;
  margin-right: 8px;
  line-height: 1.2; }

.refund_des .des {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-size: 14px;
  line-height: 1.2;
  margin-right: 16px; }
/* 上传凭证 */
.refund_upload {
  padding-left: 16px; }
  .refund_upload .upload_header {
    padding: 14px 0 16px 0; }
    .refund_upload .upload_header h4 {
      color: #000;
      font-size: 14px;
      font-weight: normal; }
      .refund_upload .upload_header h4 span {
        color: #858585;
        font-size: 12px; }
  .refund_upload .upload_list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 14px; }
    .refund_upload .upload_list li {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      position: relative;
      width: 62px;
      height: 62px;
      margin-left: 12px; }
      .refund_upload .upload_list li:first-child {
        margin-left: 0; }
      .refund_upload .upload_list li img {
        width: 100%;
        height: 100%; }
      .refund_upload .upload_list li .close {
        position: absolute;
        top: -6px;
        right: -6px;
        display: block;
        width: 16px;
        height: 16px;
        background: url("~images/refund/close.png") no-repeat;
        background-size: 100%; }
  .refund_upload .upload_btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: url("~images/refund/upload.png") no-repeat;
    background-size: 100% 100%; }
    .refund_upload .upload_btn label {
      display: block; }
      .refund_upload .upload_btn label input {
        visibility: hidden; }
/* 比价平台弹窗 */
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99; }

.plat_module {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
  -webkit-transition: all 1s ease-in 0.1s;
  transition: all 1s ease-in 0.1s;
  z-index: 100; }

.plat_module.show {
  -webkit-transform: translateY(0);
          transform: translateY(0); }

.plat_module .title {
  height: 56px;
  line-height: 56px; }

.plat_module .title h3 {
  color: #000;
  font-size: 16px;
  font-weight: bold;
  text-align: center; }

.plat_module .plat_list {
  padding-left: 15px; }

.plat_module .plat_list li {
  position: relative;
  height: 48px;
  line-height: 48px;
  padding-right: 15px;
  border-top: 1PX solid #e0e0e0;
  overflow: hidden; }

.plat_module .plat_list .text {
  float: left;
  color: #000;
  font-size: 14px; }

.plat_module .plat_list .icon {
  position: absolute;
  top: 50%;
  right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  // border: 1px solid #e0e0e0;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%); }

.plat_module .plat_list .icon.active {
  background: url("~images/refund/choose.png") no-repeat;
  background-size: 100%; }

.plat_module .close {
  color: #fff;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: #000; }
/* 多个退款商品 */
.pro_collect {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  .pro_collect .p_list_module {
    max-width: 200px;
    height: 60px;
    overflow-x: auto;
    overflow-y: hidden;
    // overflow: auto;
    -webkit-overflow-scrolling: touch; }
  .pro_collect .edit_url {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 60px;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center; }
    .pro_collect .edit_url .edit {
      color: #000;
      font-size: 12px; }

.p_list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  .p_list .p_photo {
    -webkit-box-flex: 0;
        -ms-flex: none;
            flex: none;
    position: relative;
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border: 1PX solid #f0f0f0; }
    .p_list .p_photo:last-child {
      margin-right: 0; }
    .p_list .p_photo img {
      width: 100%;
      height: 100%; }
    .p_list .p_photo .price {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      font-size: 12px;
      width: 100%;
      height: 16px;
      line-height: 16px;
      text-align: center;
      background: rgba(0, 0, 0, 0.5); }
.refund-pay input{
  width:75%;
  margin-left:10px;
  font-size:14px;
}
.refund-pay-tip {
  color:#ff7e00;
  font-size:12px;
}
</style>
