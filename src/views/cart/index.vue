<style lang="less" scoped>
.cart-wrapper {
  padding-bottom: 88px;
  .cart-list-container {
    padding: 10px 15px;
    .cart-list-block {
      padding: 15px 10px 0 10px;
      background: #FFFFFF;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    .block-title {
      overflow: hidden;
      padding-bottom: 15px;
      .activity-type {
        float: left;
        padding: 1px 3px;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 12px;
        background: #F1002D;
        border-radius: 2px;
        margin-right: 4px;
      }
      .activity-desc {
        float: left;
        width: 232px;
        font-family: PingFangSC-Medium;
        font-size: 12px;
        color: #1A1A1A;
        letter-spacing: 0;
        line-height: 16px;
      }
      .to-collect {
        float: right;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        letter-spacing: 0;
        line-height: 17px;
      }
      .special-collect {
        color: #1A1A1A;        
      }
      .has-collect {
        color: #F1002D;        
      }
    }
    .cart-list-item {
      padding-bottom: 15px;
      overflow: hidden;
      .radio-button {
        float: left;
        border-radius: 11px;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        margin-top: 34px;
        border: 1px solid #666666;
        box-sizing: border-box;
      }
      .checked {
        background: url(~images/cart/icon-checked.png) no-repeat center center;
        background-size: cover;
        border: none;
      }
      .radio-un {
        background: url(~images/cart/icon-un-checked.png) no-repeat center center;
        background-size: cover;
        border: none;
      }
      .img-container {
        width: 88px;
        display: inline-block;
        .product-img-container {
          width: 88px;
          height: 88px;
          float: left;
          text-align: center;
          overflow: hidden;
          img {
            width: 100%;
            display: inline-block;
            vertical-align: top;
          }
        }
        .stock-count {
          width: 88px;
          text-align: center;
          padding-top: 0.213333rem;
          font-family: PingFangSC-Regular;
          font-size: 0.32rem;
          color: #F1002D;
          letter-spacing: 0;
          line-height: 0.32rem;
        }
      }
      
      .right-part {
        float: right;
        width: 195px;
        .right-top-container {
          overflow: hidden;
          min-height: 64px;
          .product-title-part {
            float: left;
            width: 165px;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #333333;
            letter-spacing: 0;
            line-height: 17px;
            span {
              display: inline;
            }
            .tag {
              display: inline-block;
              background: #F1002D;
              border-radius: 1px;
              font-family: PingFangSC-Regular;
              font-size: 10px;
              color: #FFFFFF;
              letter-spacing: 0;
              line-height: 10px;
              padding: 2px 4px;
              margin-right: 4px;
              vertical-align: top;
            }
            .sku-desc {
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #B2B2B2;
              letter-spacing: 0;
              line-height: 14px;
              padding: 5px 0;
            }
            .other-desc {
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #F1002D;
              letter-spacing: 0;
              line-height: 12px;
              padding-bottom: 6px;
            }
          }
          .product-delete-button {
            float: right;
            width: 20px;
            height: 20px;
            background: url(~images/cart/icon-delete.png) no-repeat center center;
            background-size: 18px 20px;
            padding-top: 10px;
          }
        }
        .right-bottom-container {
          overflow: hidden;
          .product-price-part {
            float: left;
            line-height: 24px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #F1002D;
            letter-spacing: 0;
            .active-price {
              line-height: 14px;
            }
            .origin-price {
              font-family: PingFangSC-Regular;
              font-size: 8px;
              color: #666666;
              letter-spacing: 0;
              line-height: 10px;
              text-decoration: line-through;
            }
          }
          .product-edit-buttons {
            float: right;
            height: 24px;
            min-width: 84px;
            border: 1px solid #CCC;
            border-radius: 2px;
            .minus {
              float: left;
              width: 28px;
              height: 24px;
              box-sizing: border-box;
              border-right: 1px solid #CCC;
              text-align: center;
              padding-top: 12px;
            }
            .minus-line {
              width: 10px;
              height: 1px;
              background: #666666;
              display: inline-block;
              vertical-align: top;
            }
            .count {
              float: left;
              width: 28px;
              height: 24px;
              box-sizing: border-box;
              border-right: 1px solid #CCC;
              line-height: 24px;
              text-align: center;
              font-family: PingFangSC-Regular;
              font-size: 13px;
              color: #666666;
              letter-spacing: 0;
            }
            .plus {
              float: left;
              position: relative;
              width: 28px;
              height: 24px;
              text-align: center;
              padding-top: 12px;
            }
            .border-horizontal, .border-vertical {
              width: 10px;
              height: 1px;
              background: #666666;
              display: inline-block;
              vertical-align: top;
            }
            .border-vertical {
              position: absolute;
              top: 12px;
              left: 0;
              right: 0;
              margin: auto;
              transform: rotate(90deg)
            }
          }
        }
        .stock-count {
          padding-top: 8px;
          padding-right: 20px;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #F1002D;
          letter-spacing: 0;
          line-height: 12px;
          text-align: right;
        }
      }
    }
    .invalid-list-container {
      .invalid-block {
        padding: 10px 10px 10px 6px;
        background: #F5F5F5;
        border-radius: 4px 4px 0 0;
        overflow: hidden;
        .invalid-tag {
          float: left;
          background: #D8D8D8;
          border-radius: 2px;
          width: 28px;
          height: 14px;
          margin-right: 6px;
          margin-top: 34px;
          text-align: center;
          font-family: PingFangSC-Regular;
          font-size: 10px;
          color: #FFFFFF;
          letter-spacing: 0;
          line-height: 14px;
        }
        .product-img-container {
          width: 88px;
          height: 88px;
          position: relative;
          float: left;
          text-align: center;
          border-radius: 4px;
          overflow: hidden;
          img {
            width: 100%;
            display: inline-block;
            vertical-align: top;
          }
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.02);
          }
        }
        .right-part {
          float: right;
          width: 195px;
          .right-top-container {
            overflow: hidden;
            min-height: 64px;
            .product-title-part {
              float: left;
              width: 165px;
              font-family: PingFangSC-Regular;
              font-size: 13px;
              color: #B2B2B2;
              letter-spacing: 0;
              line-height: 17px;
              span {
                display: inline;
              }
              .tag {
                display: inline-block;
                background: #F1002D;
                border-radius: 1px;
                font-family: PingFangSC-Regular;
                font-size: 10px;
                color: #FFFFFF;
                letter-spacing: 0;
                line-height: 10px;
                padding: 2px 4px;
                margin-right: 4px;
                vertical-align: top;
              }
              .sku-desc {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #B2B2B2;
                letter-spacing: 0;
                line-height: 14px;
                padding: 5px 0;
              }
              .other-desc {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #F1002D;
                letter-spacing: 0;
                line-height: 12px;
                padding-bottom: 6px;
              }
            }
            .product-delete-button {
              float: right;
              width: 20px;
              height: 20px;
              background: url(~images/cart/icon-delete.png) no-repeat center center;
              background-size: 18px 20px;
              padding-top: 10px;
            }
          }
          .right-bottom-container {
            overflow: hidden;
            .similar-button {
              float: right;
              height: 20px;
              width: 48px;
              border: 1px solid #666;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #666666;
              letter-spacing: 0;
              line-height: 20px;
              text-align: center;
            }
          }
        }
      }
      .invalid-bottom {
        height: 40px;
        background: #FFF;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        letter-spacing: 0;
        line-height: 40px;
        text-align: center;
      }
    }
  }
  .no-cart-list {
    height: 60px;
    padding: 30px;
    text-align: center;
    margin: auto;
  }
  .member-tips-box {
    position: fixed;
    bottom: 54px;
    left: 0;
    right: 0;
    display: block;
    overflow: hidden;
    padding: 8px 10px 8px 8px;
    background-image: linear-gradient(-90deg, #E4D2AF 0%, #D5BD95 95%);
    border-radius: 2px;
    z-index: 999;
    .icon-member {
      float: left;
      width: 19px;
      height: 19px;
      margin-right: 7px;
    }
    .member-content {
      float: left;
      height: 19px;
      line-height: 19px;
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #1A1A1A;
      letter-spacing: 0;
    }
    .member-link-button {
      float: right;
      height: 19px;
      line-height: 19px;
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #1A1A1A;
      letter-spacing: 0;
      text-align: center;
    }
  }
  .cart-bottom-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 15px;
    background: #FFF;
    overflow: hidden;
    z-index: 999;
    .left-part {
      float: left;
      height: 40px;
      box-sizing: border-box;
      padding-top: 10px;
      .radio-button {
        float: left;
        border-radius: 11px;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        border: 1px solid #666666;
        box-sizing: border-box;
      }
      .checked {
        background: url(~images/cart/icon-checked.png) no-repeat center center;
        background-size: cover;
        border: none;
      }
      .radio-label {
        float: left;
        height: 222px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        line-height: 22px;
      }
    }
    .right-part {
      float: right;
      .pay-button {
        float: right;
        height: 40px;
        width: 100px;
        background: #F1002D;
        border-radius: 4px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
      }
      .price-container {
        float: right;
        height: 40px;
        box-sizing: border-box;
        margin-right: 9px;
        text-align: right;
        .price-label {
          font-family: PingFangSC-Medium;
          height: 23px;
          font-size: 12px;
          color: #1A1A1A;
          letter-spacing: 0;
          text-align: center;
          line-height: 23px;
        }
        .price {
          height: 23px;
          line-height: 23px;
          font-family: DINPro-Bold;
          font-size: 14px;
          color: #F1002D;
          letter-spacing: 0;
          text-align: center;
        }
        .bottom-price {
          font-family: PingFangSC-Medium;
          font-size: 12px;
          color: #333333;
          letter-spacing: 0;
          text-align: center;
          line-height: 12px;
        }
      }
    }
  }
  .recommend-box {
    .recommend-look-block {
      padding-left: 5px;
      .recommend-look-title {
        overflow: hidden;
        padding-left: 10px;
        .recommend-image {
          float: left;
          width: 36px;
          height: 36px;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        .recommend-desc {
          float: left;
          height: 36px;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          letter-spacing: 0;
          line-height: 36px;
        }
      }
      .look-list-ul {
        position:relative;
        overflow: hidden;
        li {
          float: left;
          position: relative;
          width: 167px;
          height: 285px;
          margin: 0 0 10px 10px;
          border-radius: 3px;
          padding-bottom: 5px;
          background: #fff;
          overflow: hidden;
        }
      }
      .look-list-mesg {
        background: #fff;
        font-size: 14px;
        //color: #F1002D;
        .look-imglazyload {
          padding-top: 100%;
          background: no-repeat center;
          background-size: cover;
          min-height: inherit;
          border-radius: 3px 3px 0 0;
          position: relative;
          .mask {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0;
            left: 0;
          }
          span {
            position: absolute;
            bottom: 0px;
            width: 100%;
            text-align: center;
            height: 20px;
            line-height: 20px;
            color: #fff;
            font-size: 11px;
            background: rgba(0, 0, 0, 0.6);
          }
          .bg-red{
            background:rgba(241,0,45,0.6);
          }
          &:after {
            content: "";
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.03);
          }
        }
      }

      .look-desc {
        padding:10px 10px 0 10px;
        //line-height:16px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        i{
          background: #F1002D;
          border-radius: 1px;
          color:#fff;
        }
        span {
          display: inline;
        }
      }
      .sale-tag{
        margin: 0 10px;
        i{
          margin: 0 3px 0 0;
          color: #f93939;
        }
      }
      .empty-block {
        height: 15px;
      }
      .look-list-tag i {
        display:inline;
        //height: 16px;
        line-height: 15px;
        padding: 0 2px;
        margin: 3px 3px 0 0;
        border: 1px solid #f93939;
        box-sizing: border-box;
        font-size: 10px;
        vertical-align: top;
      }

      .look-list-tag .tag-red {
        background: #f93939;
      }

      .price{
        padding-left:10px;
        margin-top:2px;
        font-size: 16px;
        color:  #F1002D;
        b{
          display:flex;
          align-items: center;
        }
        img{
          width:22px;
          height:13px;
          margin-left:3px;
        }
        em{
          font-size:13px;
          color:#b2b2b2;
        }
        i{
          font-size:12px;
        }
      }
    }
    .recommend-like-block {
      .recommend-like-title {
        height: 24px;
        line-height: 24px;
        font-family: PingFangSC-Medium;
        font-size: 17px;
        color: #1A1A1A;
        letter-spacing: 0;
        text-align: center;
        margin: 20px 0;
      }
      .left-point {
        width: 3px;
        height: 6px;
        background: #1A1A1A;
        transform: skew(-12deg,0deg);
        margin-right: 9px;
        vertical-align: middle;
      }
      .content {
        vertical-align: middle;
      }
      .right-point {
        width: 3px;
        height: 6px;
        background: #1A1A1A;
        transform: skew(-12deg,0deg);
        margin-left: 9px;
        vertical-align: middle;
      }
    }
  }
}
</style>
<template>
  <div class="cart-wrapper">
    <!-- 有效列表 -->
    <div class="cart-list-container" v-if="cartList.length>0">
      <div class="cart-list-block" v-for="m in cartList" :key="m.id">
        <div class="block-title" v-if="m.activityName">
          <p class="activity-type">{{activityType[m.activityType]}}</p>
          <p class="activity-desc">{{m.desc}}</p>
          <router-link :to="{name:'compose', query:{id: m.id}}" class="to-collect">
            <span v-if="m.couDan != 1" class="has-collect">去凑单</span>
            <span v-if="m.activityType != 8 && m.activityType != 9" class="special-collect" :class="{'has-collect':m.couDan != 1}">&nbsp;></span>
          </router-link>
        </div>
        <div class="cart-list-item" v-for="k in m.productList" :key="k.saleUnitId">
          <!-- 限时购预热不能够选 -->
          <div class="radio-button radio-un" v-if="m.activityType == 5 && k.startTime"></div>
          <div v-else :class="k.isChecked ? 'radio-button checked' : 'radio-button'" @click.stop.prevent="toggleCheckHandler(k.saleUnitId, !k.isChecked)"></div>
          <div @click.stop.prevent="goProduct(k.saleGoodsId)">
            <div class="img-container">
              <div class="product-img-container">
                <img :src="k.image" alt="">
              </div>
              <span class="stock-count" v-if="k.stockCount && k.stockCount<=5">仅剩{{k.stockCount}}件</span>              
            </div>
            
            <div class="right-part">
              <div class="right-top-container">
                <div class="product-title-part">
                  <span class="tag" v-if="(k.tagList instanceof Array)&&k.tagList.length" v-for="(item, index) in k.tagList" :key="index">{{item}}</span><span>{{k.shortName}}</span>
                  <p class="sku-desc">{{k.skuDesc}}</p>
                  <p class="other-desc">{{k.reductionPriceTip}}</p>
                  <p class="other-desc">{{k.warmUpDesc}}</p>
                </div>
                <div class="product-delete-button" @click.stop.prevent="confirmDelete(k.saleUnitId,1)"></div>
              </div>
              <div class="right-bottom-container">
                <div class="product-price-part">
                  <p class="active-price" :style="k.originalPrice ? {} : {lineHeight: '24px'}">{{`¥${k.salesPrice/100}`}}</p>
                  <p class="origin-price" v-if="k.originalPrice">{{`¥${k.originalPrice/100}`}}</p>
                </div>

                <!-- 加减器 限时购预热商品不显示-->
                <div v-if="!(m.activityType == 5 && k.startTime)" class="product-edit-buttons">
                  <div class="minus" @click.stop.prevent="editProductHandler(k.saleUnitId,k.count,0)">
                    <span class="minus-line"></span>
                  </div>
                  <p class="count">{{k.count}}</p>
                  <div class="plus" @click.stop.prevent="editProductHandler(k.saleUnitId,k.count,1)">
                    <span class="border-horizontal"></span>
                    <span class="border-vertical"></span>
                  </div>
                </div>

              </div>
              <p class="stock-count" v-if="k.restriction && k.restriction<10">限购{{k.restriction}}件</p>
            </div>

          </div>          
        </div>
      </div>
      <!-- 失效商品列表 -->
      <div class="invalid-list-container" v-if="invalidList">
        <div class="invalid-block" v-for="k in invalidList" :key="k.saleUnitId">
          <div class="invalid-tag">失效</div>
          <div class="product-img-container">
            <img :src="k.image" alt="">
            <div class="cover"></div>
          </div>
          <div class="right-part">
            <div class="right-top-container">
              <div class="product-title-part">
                 <span>{{k.shortName}}</span>
                 <p class="sku-desc">{{k.skuDesc}}</p>
              </div>
              <div class="product-delete-button" @click.stop.prevent="confirmDelete(k.saleUnitId,0)"></div>
            </div>
            <div class="right-bottom-container">
              <router-link :to="{name:'similar', query:{saleGoodsId: k.saleGoodsId}}" class="similar-button" v-if="showSimilar">找相似</router-link>
            </div>
          </div>
        </div>
        <div v-if="invalidList.length>0" class="invalid-bottom" @click.stop.prevent="clearInvalidHandler">清空失效商品</div>
      </div>
    </div>
    <div class="empty" v-else>
      <img src="~images/empty/no-cart.png" alt="">
      <div class="empty-word">您的购物车为空哦</div>
    </div>
    <a class="member-tips-box" :href="memberTip.clickUrl" v-if="!isMember&&cartList&&cartList.length">
      <img :src="memberTip.imgUrl" alt="" class="icon-member">
      <p class="member-content">{{showMemberPrice ? `开通斑马会员本单可省${memberInvitePrice}元` : memberTip.tipMsg}}</p>
      <p class="member-link-button">{{`${memberTip.tipRight}`}}</p>
    </a>
    <div class="cart-bottom-box">
      <div class="left-part">
        <div :class="allChecked ? 'radio-button checked' : 'radio-button'" @click.stop.prevent="toggleAllCheckHandler()"></div>
        <p class="radio-label">全选 </p>
      </div>
      <div class="right-part">
        <mt-button type="danger" class="pay-button" @click.stop.prevent="submitCartHandler">去付款</mt-button>
        <div class="price-container">
          <p>
            <span class="price-label">总计:</span>
            <span class="price">¥{{totalP}}</span>
          </p>
          <p class="bottom-price">
            <span class="total-price-label">总额:¥</span>
            <span class="total-price">{{allPrice}}&nbsp;&nbsp;</span>
            <span class="coupon-price-label">立减:¥</span>
            <span class="coupon-price">{{couponPrice}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="recommend-box">
      <div class="recommend-look-block" v-for="(m, i) in recommendList" :key="i"  v-if="m.image">
        <div class="recommend-look-title">
          <div class="recommend-image">
            <img :src="m.image" alt="">
          </div>
          <p class="recommend-desc">{{m.reason}}</p>
        </div>
        <ul class="look-list-container look-list-ul">
          <li v-for="(data,index) in m.activitiesProduct" :key="index">
            <div class="look-list-mesg">
            <div class="look-imglazyload" v-lazy:background-image="data.image" @click.stop.prevent="goProduct(data.saleGoodsId)">
              <span v-if="data.type==2" class="bg-red">还有机会</span>
              <span v-if="data.type==3">即将开抢</span>
              <span v-if="data.type==4">还有机会</span>
            </div>
            <p class="look-list-tag look-desc" v-if="data.activityTagList&&data.activityTagList.length > 0">
              <i v-for="(tagList,i) in data.activityTagList" :key="i" v-text="tagList.tag" :class="{'tag-red':tagList.type == 2}"></i>
              <span v-html="data.name"></span>
            </p>
            <p class="look-desc" v-else v-html="data.name"></p>
            <p class="look-list-tag sale-tag" v-if="data.activityTagList&&data.activityTagList.length > 0">
              <i v-for="tag in data.saleGoodsTagList" :key="tag.type" v-if="tag.type">{{tag.tag}}</i>
            </p>
            <p class="empty-block" v-else></p>
            <p class="price">
              <b><i>¥</i>{{data.lowPrice}}<img src="~images/vip-redicon.png" /></b>
              <em>¥{{data.highPrice}}</em>
            </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="recommend-like-block" v-if="likeProducts.activitiesProduct&&likeProducts.activitiesProduct.length">
        <p class="recommend-like-title">
          <span class="left-point"></span>
          <span class="content">{{likeProducts.reason}}</span>
          <span class="right-point"></span>
        </p>
        <Recommend :listData="likeProducts.activitiesProduct" />
      </div>
    </div>
  </div>
</template>
<script>
// import { activitiesList, recommendList } from '@/mock'
import api from '@/api/cart'
// import auth from '@/utils/auth'
// import storage from '@/utils/storage-lite'
import session from '@/utils/session-lite'
import arrayAddon from '@/utils/array-addon'
import Recommend from '@/components/recommend'
import { MessageBox } from 'mint-ui'

export default {
  name: 'cart',
  components: {
    Recommend
  },
  data () {
    return {
      cartList: [],     // 有效商品
      invalidList: [],  // 失效商品
      allChecked: false,
      showSimilar: false,
      recommendList: [],
      likeProducts: {},
      maxLength: 0,
      // 活动类型 1-没有活动 2-满减 3-任选 5-限时购 6-满件减 7-满件折 8-单品满件减 9-单品满件折 ,
      activityType: ['','','满减','N元任选','','限时购','满件减','满件折','满件减','满件折'], 
      totalP: 0, //总计
      allPrice: 0, // 未优惠的总额
      couponPrice: 0,
      isMember: false,
      memberTip: {},
      showMemberPrice: false,
      memberInvitePrice: 0
    }
  },
  created () {
    const productIds = session.get('productIds')
    if (!productIds) {
      session.set('productIds', [])
    }
  },
  mounted () {
    this.getCartList()
    this.getRecommend()
  },
  activated () {
    console.log(111)
  },
  methods: {
    // 去商品详情
    goProduct(saleGoodsId) {
      this.$router.push({
        path: '/product/detail',
        query: { saleGoodsId: saleGoodsId }
      })
    },
    async getCartList () {
      let params = {
        type: 1
      }
      const res = await api.getCartList(params)
      // const res = await activitiesList
      if (res) {
        const { status, data, message } = res
        if (status == 1) {
          if (data) {
            const { invalidList, activitiesProductList, showSimilar, isMember, memberTip } = data
            this.isMember = isMember
            this.memberTip = memberTip
            const productIds = session.get('productIds')
            
            this.maxLength = 0
            
            activitiesProductList.forEach(m => {
              m.productList.forEach(k => {
                // 统计有效列表长度
                this.maxLength++
                const flag = productIds.includes(k.saleUnitId+'')
                k.isChecked = flag
              })
            })
            this.cartList = activitiesProductList
            this.invalidList = invalidList
            this.showSimilar = showSimilar

            if (productIds.length && (productIds.length == this.maxLength)) {
              this.allChecked = true
            } else {
              this.allChecked = false        
            }

            // 计算总计
            this.countCartFun()

          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },
    async getRecommend () {
      const res = await api.getRecommend()
      // const res = recommendList
      if (res) {
        const { data, status, message } = res
        if (status == 1) {
          if (data) {
            const { resultList } = data
            this.recommendList = resultList
            this.likeProducts = resultList.find((m) => {
              return m.image == null || m.reason == '猜你喜欢'
            })
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },

    // 单选
    toggleCheckHandler (id, bool) {
      let productIds = session.get('productIds')
      if (bool) {
        productIds.push(id+'')
      } else {
        // 从数组中剔除
        arrayAddon.remove(productIds, id)
      }
      
      // 够不够全选
      if (productIds.length && (productIds.length == this.maxLength)) {
        this.allChecked = true
      } else {
        this.allChecked = false        
      }

      session.set('productIds', productIds)
      const list = this.cartList.slice()
      list.forEach(m => {
        m.productList.forEach(k => {
          if (k.saleUnitId == id) {
            k.isChecked = bool
          }
        })
      })
      this.cartList = list

      // 计算总计
      this.countCartFun()
    },

    // 全选
    toggleAllCheckHandler () {
      this.allChecked = !this.allChecked

      const list = this.cartList.slice()
      let productIds = []

      list.forEach(m => {
        m.productList.forEach(k => {
          if (this.allChecked) {
            k.isChecked = true              
            productIds.push(k.saleUnitId+'')              
          } else {
            k.isChecked = false         
          }
        })
      })
      this.cartList = list

      if (this.allChecked) {
        session.set('productIds', productIds)

        // 全选以后要计算总计       
        this.countCartFun()                 
      } else {
        // productIds为空
        session.set('productIds', productIds)

        // 全不选重置为0
        this.countCartFun()
      }
    },

    // 二次确认删除
    confirmDelete(id,type){
      let self = this
      MessageBox.confirm("", {
        title: "",
        message: "是否确认删除该商品？",
        showCancelButton: true,
        showConfirmButton: true,        
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
      .then(action => {
        if (action == "confirm") {
          self.deleteProductHandler(id,type)
        }
      })
      .catch(err => {
        if (err == "cancel") {
          
        }
      });

    },

    // 单个删除商品
    async deleteProductHandler (id,type) {
      const productIds = []
      productIds.push(id)
      let params = {
        productIds: JSON.stringify(productIds)
      }
      const res = await api.deleteCart(params)

      if (res) {
        const { status, data, message } = res
        if (status == 1) {
          // type 1 有效商品 0 失效商品 
          
          if (type) {
            // 本地缓存存储的勾选有效id也删除
            let producIds = session.get('productIds')
            // 从数组中删除
            arrayAddon.remove(producIds, id)
            session.set('productIds', producIds)
            if (producIds.length) {
              this.maxLength--
              if (productIds.length && (productIds.length == this.maxLength)) {
                this.allChecked = true
              } else {
                this.allChecked = false        
              }

            } else {
              this.allChecked = false 
            }

            // 删除初始化列表 
            this.getCartList()

            // 列表变化以后要计算总计
            // this.countCartFun()                 

          } else {          
            // 重新变化无效列表
            let _list = this.invalidList.slice();
            _list.forEach((item,i) => {
              if(id == item.saleUnitId) {
                _list.splice(i,1)
              }
            })
            this.invalidList = _list             
          }
          
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },
    // 增减以后去改变原数组cartList数据
    editedCartList (id, count) {
      let list = this.cartList.slice()
      list.forEach(m => {
        m.productList.forEach(k => {
          if (k.saleUnitId == id) {
            k.count = count
          }
        })
      })
      this.cartList = list
      // 计算总计
      this.countCartFun() 
    },

    // 单个增减编辑
    async editProductHandler (id,count,type) {
      // type 1增加 0 删除
      if (type) {
        count = count + 1      
      } else {              
        if (count < 2) {
          this.$toast('不允许数量为0')
          return
        }
        count = count - 1        
      }

      let params = {
        productId: id + '',
        count: count + '',
      }
      const res = await api.editCart(params)
      if (res) {
        const { status, data, message } = res
        if (status == 1) {
          if(data.errorTip) {
            this.$toast(data.errorTip)       
            return       
          }
          // 重新变化列表
          this.editedCartList(id,count)
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },

    // 清空失效商品
    async clearInvalidHandler () {
      const res = await api.removeInvalid()
      if (res) {
        const { status, data, message } = res
        if (status == 1) {
          if (status) {
            this.invalidList = []
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },

    // 提交购物车
    async submitCartHandler () {
      let productIds = session.get('productIds')
      let params = {
        type: 1,
        productIds: JSON.stringify(productIds)
      }
      console.log('productIds',productIds)
      if (productIds.length === 0) {
        this.$toast('请选择要去付款的商品!')      
        return false
      }

      const res = await api.submitCart(params)
      if (res) {
        const { status, data, message } = res
        if (status == 1) {
          if (data) {
            // 提交订单以后要去判断一下返回来的描述 lack lock unlock
            console.log('提交购物车后的data', data)
            this.$router.push({
              path: '/order/submit',
              query: { type: 1 }
            })

            // 重新选择商品进入订单确认页面时要重置缓存
            session.set('couponAccountId', -1)
            session.set('addressId', '')
            session.set('idCardVerifyId', '')
            session.set('isUseCoin', -1)
            session.set('activitiesIsOpen', -1)
            location.href = '/order/submit?type=1'
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },
    // 计算购物车总计
    countCartFun: function() {
      // 活动类型 1-没有活动 2-满减 3-任选 5-限时购 6-满件减 7-满件折 8-单品满件减 9-单品满件折 ,
      const _list = this.cartList;
      let _allPrice = 0; //总额
      let _totalPrice = 0; //总计
      let _couponPrice = 0; //总优惠
      let _memberInvitePrice = 0 // 会员优惠总差价

      _list.forEach(item => {

        let _pPrice = 0; //商品总价（原价格相加，不算优惠）
        let _subCoupon = 0; //达到标准后的优惠金额
        let _pSum = 0; //任选数量
        let _cSum = 0; //满件减、满件折件数

        // 获得优惠前所有商品总额及当前列表商品的总价
        item.productList.forEach(info => {
          // 1.未选此择商品 2. 限时购预热（startTime为 null表示已开始，否则未开始）
          if ((!info.isChecked) || (item.activityType == 5 && info.startTime)) return false;
          let _price = Number(info.salesPrice) * info.count;
          _allPrice = (Number(_allPrice) + _price)
          _pPrice += Number(info.salesPrice) * info.count;

          // n元任选件数计算的处理
          if (item.activityType == 3) {
            _pSum += Number(info.count);
          }
          // 满件减（折）件数计算的处理
          if (item.activityType >= 6) {
            _cSum += Number(info.count)
          }
          
        });

        this.allPrice = (_allPrice/100).toFixed(2)

        // 满减数据更新 （只涉及当前活动订单文案数字的动态展示，不涉及总计金额等展示，下同）
        if (item.activityType == 2) {
          // console.log('--满减--', item.activityType )
          let _mDesc = '';
          item.manjianDetail.forEach(mInfo => {
            if (_pPrice >= Number(mInfo.thresholdPrice)) {
              _subCoupon = Number(mInfo.couponPrice);
            } 
            _mDesc += '，满'+mInfo.thresholdPrice/100+'减'+mInfo.couponPrice/100;
          });
          const _name = item.activityName ? item.activityName : '';
          if(_subCoupon > 0) {
            // 已减
            item.couDan = 1;
            item.desc = _name + _mDesc + '，已减' + Number(_subCoupon/100).toFixed(2) +'元';
          } else {
            // 未减
            item.couDan = 0;
            item.desc = _name + _mDesc + '，再买' + ((item.manjianDetail[0].thresholdPrice-_pPrice) / 100).toFixed(2) +'元即享';
          }
        }

        // 任选数据更新
        if (item.activityType == 3) {
          // console.log('--任选--', item.activityType )
          let _nDesc = '';
          if (_pSum >= Number(item.optionalPartDetail.count)) {//任选商品总价-满足条件价格=优惠价格
            _subCoupon = (_pPrice - Number(item.optionalPartDetail.price) / Number(item.optionalPartDetail.count) * _pSum )
            _nDesc = '已购'+_pSum+'件，已享【';
            item.couDan = 1;
          } else {
            _nDesc = '再购'+(Number(item.optionalPartDetail.count) - _pSum)+'件，即享【';
            item.couDan = 0;
          }
          item.desc = _nDesc + item.optionalPartDetail.price/100 + '元任选' + item.optionalPartDetail.count +'件】'
        }

        // 满件数据更新
        if (item.activityType >= 6) {
          let _mDesc = '';
          // 6-满件减 8-单品满件减
          if(item.activityType == 6 || item.activityType == 8) {
            item.manjianDetail.forEach(mInfo => {
              if (_cSum >= Number(mInfo.thresholdPrice)) {
                _subCoupon = Number(mInfo.couponPrice);
              } 
              _mDesc += '，满'+mInfo.thresholdPrice+'件减'+mInfo.couponPrice/100+'元';
            });
          } else {
            item.manjianDetail.forEach(mInfo => {
              if (_cSum >= Number(mInfo.thresholdPrice)) {
                _subCoupon = (_pPrice - _pPrice * Number(mInfo.couponPrice) / 100)
              } 
              _mDesc += '，满'+mInfo.thresholdPrice+'件打'+mInfo.couponPrice/10+'折';
            });
          }

          const _name = item.activityName ? item.activityName : ''
          if(_subCoupon > 0) {
            item.couDan = 1;
            item.desc = _name + _mDesc + '，已减' + Number(_subCoupon/100).toFixed(2) +'元';
          } else {
            if(item.activityType >= 8) {
              item.couDan = 1;
            }else {
              item.couDan = 0;
            }
            item.desc = _name + _mDesc + '，还差' + (item.manjianDetail[0].thresholdPrice - _cSum) +'件';
          }
          
        }
        
        // 得到优惠价格及处理优惠后的商品总价
        item.productList.forEach(info => {//算商品优惠金额的时候保留两位小数、算会员优惠的时候保留两位小数
          if ((!info.isChecked) || (item.activityType == 5 && info.startTime)) return false;
          let _priceCoupon = Number(info.salesPrice) * info.count;//商品售价
          let _memberPrice = 0; //会员优惠的价格
          if (item.activityType == 2 || item.activityType == 3 || item.activityType >= 6) {
            _priceCoupon = (
              _priceCoupon - _priceCoupon / _pPrice * _subCoupon
            ).toFixed(2);
          }
          // 是否享受会员价
          if (this.isMember) {
            // 原价-会员价=优惠差价
            _memberPrice = (_priceCoupon * info.seniorAgentRate)
          }
          // 计算会员优惠总差价
          _memberInvitePrice += (_priceCoupon * info.seniorAgentRate)

          // 优惠后总计
          _totalPrice = (
            Number(_totalPrice) +
            (_priceCoupon - _memberPrice)
          ).toFixed(2);
          _couponPrice = Number(_couponPrice) + Number(_memberPrice);
        });
        // 总优惠
        _couponPrice = (Number(_couponPrice) + Number(_subCoupon));
        this.couponPrice = (_couponPrice / 100).toFixed(2)
      });
      console.log('---last-带分-', _totalPrice)
      this.totalP = (Number(_totalPrice/100)).toFixed(2);
      // 会员优惠总差价
      this.memberInvitePrice = Number(_memberInvitePrice / 100).toFixed(2)

      // 会员入口提示文案切换
      const productIds = session.get('productIds')
      this.showMemberPrice = productIds.length > 0
    }
  }
}
</script>
