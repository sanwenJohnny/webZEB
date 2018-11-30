<template>
  <div class="product-sku-info">
    <header class="sku-header clearfix" >
      <!-- <i class="sku-tu" v-lazy:background-image="skuImg"></i> -->
      <i class="sku-tu" :style="{backgroundImage:'url('+skuImg+')'}"></i>
      <div class="sku-header-info">
        <em class="sku-price">￥<i>{{skuPrice}}</i></em><br>
        <section class="clearfix">
          <i>已选：</i>
          <p class="sku-selected">
            {{sku1}}<template v-if="sku2">，</template> {{sku2}}
          </p>
        </section>
      </div>
      <i class="sku-close" @click="dialogChange(false)"></i>
    </header>
    <section class="sku-info">
      <ul v-if="skuInfo.prop1">
        <li class="sku-title" v-text="skuInfo.prop1.name"></li>
        <li class="sku-name sku-first-list">
            <i v-for="(prop,i) in skuVal1" :key="i" :class="{'sku-on':sku1 == prop.value,'non-stock':!prop.type}" v-text="prop.value" @click="sku1 = prop.value,skuChange(skuInfo)"></i>
        </li>
      </ul>
      <div class="sku-sub-list" v-if="skuVal2.length &gt; 0">
        <ul>
          <li class="sku-title" v-text="skuInfo.prop2.name"></li>
          <li class="sku-name">
            <i v-for="(prop,i) in skuVal2" :key="i" :class="{'sku-on':sku2 == prop.value,'non-stock':!prop.type}" v-text="prop.value" @click="sku2 = prop.value,skuChange(skuInfo)"></i>
          </li>
        </ul>
      </div>
    </section>

    <ul class="sku-btn-box">
        <li class="sku-cart-btn" @click="dialogChange(true)" v-if="!skuNon">下一步</li>
        <li class="sku-cart-btn non" v-else>下一步</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "product-sku-info",
  props: ["skuInfo","productId"],
  data() {
    return {
      pId: "",
      skuVal1: [],
      skuVal2: [],
      sku1: "",
      sku2: "",
      skuId: 0,
      skuPrice: 0,
      skuImg: "",
      skuNon: false
    };
  },
  computed: {},
  methods: {
    dialogChange(val) {
      this.$emit("skuCallBack", { type: val, id: this.skuId });
    },
    getSkuData: function() {
      var _this = this;
      _this.skuVal1 = [];
      _this.skuVal2 = [];
      var info = this.skuInfo;

      if (info.prop1.value.length > 0) {
        //初始化一级sku
        info.prop1.value.map(function(p1) {
          var _val = {
            value: p1,
            type: false //显示状态，灰色
          };
          _this.skuVal1.push(_val);
        });
      }

      if (info.prop2.value.length > 0) {
        //初始化二级sku
        info.prop2.value.map(function(p2) {
          var _val = {
            value: p2,
            type: false
          };
          _this.skuVal2.push(_val);
        });
      }

      info.productList.map(function(item) {
        if (item.productId == _this.productId) {
          if (_this.sku1 == "" && _this.sku2 == "") {
            //1、初始进来两值为空，赋值 2、不为空说明选择过sku，跳过赋值，保留上一次选择
            _this.sku1 = item.prop1Value;
            _this.sku2 = item.prop2Value ? item.prop2Value : "";
          }

          if (info.prop1.value.length > 0 && info.prop2.value.length > 0) {
            //从单sku切换到双sku时，重新赋值
            if (_this.sku1 == "" || _this.sku2 == "") {
              _this.sku1 = item.prop1Value;
              _this.sku2 = item.prop2Value ? item.prop2Value : "";
            }
          }

          if (_this.sku2 != "" && _this.sku1 != "") {
            //从双sku切换单sku时，重新赋值
            if (info.prop2.value.length <= 0) {
              _this.sku1 = item.prop1Value;
              _this.sku2 = "";
            }
            if (info.prop1.value.length <= 0) {
              _this.sku2 = item.prop2Value ? item.prop2Value : "";
              _this.sku1 = "";
            }
          }

          _this.skuImg = item.image;
          console.log(_this.skuImg)
          _this.skuChange(info);
        }
      });

      if (_this.skuBack) {
        _this.skuBack = false;
      } else {
        _this.skuShow = true;
      }
    },
    skuChange: function(list) {
      var _this = this,
        _infoVal = "",
        _currentVal = "";

      _this.skuVal1.map(function(item, i) {
        _this.skuVal1[i].type = false;
      });
      _this.skuVal2.map(function(item, i) {
        _this.skuVal2[i].type = false;
      });

      _this.skuNon = true;
      _currentVal = _this.sku1 + _this.sku2;

      list.productList.map(function(item) {
        var _pVal1 = item.prop1Value ? item.prop1Value : "",
          _pVal2 = item.prop2Value ? item.prop2Value : "";
        _infoVal = _pVal1 + _pVal2;

        //更新一级sku状态
        if (_infoVal.indexOf(_this.sku2) > -1 && _this.sku2 == _pVal2) {
          list.prop1.value.map(function(p1, i) {
            if (p1 == _pVal1) {
              if (item.stockCount == 0 || item.status == 4 || item.status == 2)
                return;
              _this.skuVal1[i].type = true;
            }
          });
        }

        //更新二级sku状态
        if (_infoVal.indexOf(_this.sku1) > -1 && _this.sku1 == _pVal1) {
          list.prop2.value.map(function(p2, i) {
            if (p2 == _pVal2) {
              if (item.stockCount == 0 || item.status == 4 || item.status == 2)
                return;
              _this.skuVal2[i].type = true;
            }
          });
        }

        if (_infoVal == _currentVal) {
          //更新当前sku对应的商品状态
          _this.skuImg = item.image;
          _this.skuId = item.productId;
          _this.skuPrice = item.lowPrice;
          if (item.stockCount == 0 || item.status == 4 || item.status == 2)
            return;
          if (_this.backSkuPrice) {
            _this.backSkuPrice = false;
            _this.payPrice = item.lowPrice;
          }
          _this.skuNon = false;
        }
      });
    },
    sureSku: function() {
      // var _this = this;
      // _this.pId = _this.skuId;
      // _this.payPrice = _this.skuPrice;
    }
  },
  mounted() {
    this.getSkuData();
  }
};
</script>
<style lang="less" scoped>
.product-sku-info {
  position: fixed;
  z-index: 99;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  background: #fff;
}

.sku-header {
  position: relative;
  margin-left: 15px;
  padding: 20px 36px 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.sku-tu {
  float: left;
  width: 110px;
  margin-top: -40px;
  border: 1px solid #fff;
  box-sizing: border-box;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat center #fff;
  background-size: cover;
  vertical-align: top;
}

.sku-tu:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: 100%;
}

.sku-close {
  position: absolute;
  z-index: 5;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  background: url(~images/recruit/close_line_black.png) no-repeat center;
  background-size: 14px auto;
}

.sku-header-info {
  margin-left: 124px;
}

.sku-header-info section i {
  float: left;
}

.sku-price {
  color: #f00;
  font-size: 22px;
}

.sku-info {
  margin-left: 15px;
  max-height: 310px;
  min-height: 120px;
  overflow-y: auto;
}

.sku-info ul {
  padding: 10px 0 1px;
}

.sku-sub-list {
  border-top: 1px solid #f0f0f0;
}

.sku-title {
  color: #858585;
  margin-bottom: 10px;
}

.sku-name i {
  min-width: 60px;
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 0 10px 10px 0;
  border: 1px solid #000;
  text-align: center;
  vertical-align: top;
}

.sku-name .non-stock {
  color: #d1d1d1;
  border: 1px dashed #d1d1d1;
}

.sku-name .sku-on {
  color: #fff;
  background: #000;
  border: 0;
}

.sku-on.non {
  background: #858585;
}

.non-stock.sku-on {
  color: #fff;
  background: #858585;
}

.sku-cart {
  height: 34px;
  line-height: 34px;
  padding: 15px;
}

.sku-cart-info {
  float: right;
  height: 34px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  text-align: center;
  font-size: 0;
}

.sku-cart-info i {
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  background: no-repeat center;
  background-size: 13px auto;
}

.sku-btn-box {
  padding: 10px;
  border-top: 1px solid #f0f0f0;
}

.sku-cart-btn {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background: #000;
  text-align: center;
}

.sku-cart-btn.non {
  background: #858585;
}

.sku-cart-btn img {
  vertical-align: middle;
}

.buy-sku-btn {
  display: block;
}

.sku-selected {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  vertical-align: top;
}

.sku-selected i {
  margin-left: -3px;
}
@media screen and (max-width: 320px) {
  .sku-info {
    max-height: 280px;
  }
}
</style>
