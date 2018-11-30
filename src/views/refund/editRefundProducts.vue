<template>
  <div id="editModule" :class="{flexModule: showFlex}" v-cloak>
    <!-- 头部 -->
    <div class="header_bar flexHeader" v-if="isAppView == 1">
        <span class="back bar" @click="back()"><i class="icon"></i></span>
        <h4>批量编辑</h4>
        <span class="bar"></span>
    </div>


    <div class="refund_products flexMain">
        <div class="content">

            <ul class="products" v-if="products.length > 0">
                <li class="pro_item" v-for="(product, index) in products">
                    <span class="checkbox" :class="{checked: product.checked}" @click="selectItem(product, index)"></span>
                    <div class="pro_detail">
                        <div class="pro_photo"><img :src="product.imgUrl" alt=""/></div>
                        <!-- 退款商品-->
                        <div class="pro_mes">
                            <div class="info_top">
                                <!-- 商品标题-->
                                <div class="pro_title">{{product.name}}</div>
                                <div class="amount">¥{{product.singlePrice*product.count/100}}</div>
                            </div>

                            <div class="info_num">
                                <!-- 商品数量-->
                                <div class="pro_num">
                                    <span class="item minus" @click="minus(product)"><i>-</i></span>
                                    <input type="number" class="num" v-model="product.count" pattern="[0-9]*" @blur="checkNum(product)"/>
                                    <span class="item add" @click="add(product)"><i>+</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>

    <!-- 提交退款-->
    <div class="edit_footer flexFooter" v-if="products.length > 0">
        <div class="check_all" @click="selectAll()">
            <span class="checkbox" :class="{checked: select}"></span>
            <span>全选</span>
        </div>
        <div class="apply" @click="editApply()">提交</div>
    </div>


</div>
</template>

<script>
import api from '@/api/refund'
import tools from '@/utils/tools'

export default {
  name: "",
  data() {
    return {
      isAppView: 0,
      showFlex: false,
      showSpinner: false,
      showToast: false,
      toastMsg: "",
      select: false,
      orderId: "",
      editProductInfo: "",
      products: [],
      productInfoList: [],
      referrer: ""
    };
  },
  beforeRouteEnter(to, from, next){
    const path = from.path === "/" ? "" : from.path
    next(vm=>{
      vm.referrer = path
    })
  },
  mounted: function() {
    this.isAppView =
      this.$route.query.isApp || this.$route.query.isAppView || 0;
    this.orderId = this.$route.query.orderId || "";
    this.applyNumber = this.$route.query.applyNumber || "";
    this.editProductInfo =
      JSON.parse(decodeURIComponent(this.$route.query.editProductInfo)) ||
      "";
    this.getOrderProduct();
  },
  methods: {
    // 返回
    back: function() {
      var referrer = this.referrer;
      if (referrer) {
        this.$router.go(-1);
      } else {
        window.location.href = "ggj://redirect";
      }
    },
    // 获取订单商品
    getOrderProduct: function() {
      api.getProductList({
        orderId: this.orderId,
        applyNumber: this.applyNumber
      }).then(res=>{
        this.showFlex = true;
        this.showSpinner = false;
        if (res.status == 1) {
          this.products = res.data;
          for (var i = 0; i < this.products.length; i++) {
            var orderProductId = this.products[i].orderProductId;
            this.products[i].checked = false;
            this.products[i].count = this.products[i].buyCount;
            for (var j = 0; j < this.editProductInfo.length; j++) {
              var editOrderProductId = this.editProductInfo[j].orderProductId;
              var editCount = this.editProductInfo[j].count;
              if (editOrderProductId == orderProductId) {
                this.products[i].checked = true;
                this.products[i].count = editCount;
              }
            }
          }
          if(this.editProductInfo.length === this.products.length){
            this.select = true;
          }
        } else {
          tools.toast(res.message)
        }
      })
    },
    // 选择商品
    selectItem: function(product, index) {
      product.checked = !product.checked;
      if (!product.checked) {
        this.select = false;
      }
      // vue无法监测通过数组下标修改数据
      this.$set(this.products, index, product);

      // 判断是否全选
      var products = this.products;
      var selected = true;

      for (var i = 0; i < products.length; i++) {
        if (!products[i].checked) {
          selected = false;
        }
      }
      this.select = selected;
    },
    // 全选商品
    selectAll: function() {
      var products = this.products;
      this.select = !this.select;
      for (var i = 0; i < products.length; i++) {
        products[i].checked = this.select;
      }
    },
    editApply: function() {
      for (var i = 0; i < this.products.length; i++) {
        var orderProductId = this.products[i].orderProductId;
        var count = this.products[i].count;
        var checked = this.products[i].checked;
        if (checked) {
          this.productInfoList.push({
            orderProductId: orderProductId,
            count: count
          });
        }
      }
      var len = this.productInfoList.length;
      if (len == 0) {
        tools.toast("请选择您要编辑的商品")
        return false;
      } else {
        this.jumpApply()
      }
    },
    // 跳转到瑞款申请
    jumpApply: function() {
      var url = "/refund/refundApply";
      var orderId = this.orderId;
      this.$router.push({
        path: "/refund/apply",
        query: {
          isAppView: this.isAppView,
          applyNumber: this.applyNumber,
          orderId: this.orderId,
          productInfo: encodeURIComponent(JSON.stringify(this.productInfoList)),
          isHide: 1
        }
      })
    },
    // add
    add: function(product) {
      var count = product.count;
      var buyCount = product.buyCount;
      if (count < buyCount) {
        product.count += 1;
      }
    },
    // minus
    minus: function(product) {
      var count = product.count;
      if (count > 1) {
        product.count -= 1;
      }
    },
    // 验证商品数量数据类型
    checkNum: function(product) {
      var count = product.count;
      var buyCount = product.buyCount;
      var reg = /^[1-9][0-9]*$/gi;

      if (!reg.test(count) || count > buyCount) {
        product.count = 1;
      }
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
#editModule{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* flex布局 */
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
/* 批量编辑列表 */
.pro_item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 15px 12px;
  background: #fff;
  border-bottom: 1PX solid #f0f0f0; }
  .pro_item:last-child {
    border-bottom: none; }
  .pro_item .checkbox {
    -webkit-box-flex: 0;
        -ms-flex: none;
            flex: none; }
  .pro_item .pro_detail {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    margin-left: 12px; }
  .pro_item .pro_photo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
        -ms-flex: none;
            flex: none;
    width: 60px;
    height: 60px;
    margin-right: 10px; }
  .pro_item .pro_photo img {
    width: 100%;
    height: 100%; }
  .pro_item .pro_mes {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between; }
    .pro_item .pro_mes .info_top {
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
    .pro_item .pro_mes .info_top .pro_title {
      color: #000;
      font-size: 16px;
      line-height: 22px;
      height: 44px;
      margin-right: 5px;
      overflow: hidden; }
    .pro_item .pro_mes .info_num {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 0;
          -ms-flex: none;
              flex: none;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center; }
    .pro_item .pro_mes .pro_num {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      border: 1PX solid #d9d9d9; }
    .pro_item .pro_mes .info_top {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex; }
    .pro_item .pro_mes .info_top .amount {
      color: #000;
      font-size: 12px; }
/* 提交修改 */
.edit_footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 45px;
  background: #fff;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between; }
  .edit_footer .check_all {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-left: 10px; }
    .edit_footer .check_all span {
      color: #000;
      font-size: 14px;
      margin-left: 10px; }
  .edit_footer .apply {
    color: #fff;
    font-size: 16px;
    width: 110px;
    line-height: 45px;
    text-align: center;
    background: #000; }
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
  height: 25px;
  line-height: 25px;
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
</style>
