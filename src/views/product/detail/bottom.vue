
<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 56px;
  padding:0 15px;
  box-sizing:border-box;
  background: #fff;
  z-index: 999;
  border-top: 1px solid #d9d9d9;
  //padding-bottom: constant(safe-area-inset-bottom);
  //padding-bottom: env(safe-area-inset-bottom);
}
.part {
  display: flex;
  //width: 50%;
  padding:8px 0;
  /* height: 100%; */
  float: left;
  box-sizing: border-box;
  text-align: center;
}
.left {
  width:35%;
  height: 49px;
  padding-top: 8px;
  padding-bottom: 5px;
}
.right{
  width:65%;
}
.left > div {
  display: inline-block;
  // width: 33%;
  font-size: 0;
  margin-left:18px;
  &:first-child{
    margin-left:0;
  }
}
.icon {
  width: 24px;
  height: 24px;
  background: url("~images/product/home.png") no-repeat;
  background-size: 100%;
}
.cart {
  background: url("~images/product/cart.png") no-repeat;
  background-size: 100%;
}
.kefu {
  background: url("~images/product/kefu.png") no-repeat;
  background-size: 100%;
}
.desc {
  font-size: 10px;
  margin-top: 3px;
  color:#000;
}
.cart-num {
  display: block;
  width: 14px;
  height: 14px;
  line-height: 14px;
  font-size: 10px;
  background: #ff1919;
  color: #fff;
  border-radius: 50%;
  top: -2px;
  left:55%;
  //transform: translate(-40%,0);
}

.right p {
  width:110px;
  height: 40px;
  line-height: 40px;
  flex-grow: 1;
  background: #000;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  //&:last-child{
  margin-left:8px;
  //}
}
// .right p i {
//   display: inline-block;
//   width: 18px;
//   height: 18px;
//   background: url("~images/product/chance.png") no-repeat;
//   background-size: 100%;
//   vertical-align: middle;
//   margin-right: 5px;
// }
.graybg {
  background: #858585 !important;
}
.redbg {
  background: #d50000 !important;
}
.f-14 {
  font-size: 14px !important;
}
</style>
<style>
/* .mint-msgbox-cancel{
  box-sizing:border-box;
  border-right:1px solid #ddd;
} */
</style>
<template>
  <div class="bottom clearfix">
    <div class="part left">
      <div @click="goHome">
        <i class="icon"></i><br>
        <span class="desc">首页</span>
      </div>
      <div class="rela" @click="goCart">
        <i class="icon cart"></i><br>
        <span class="desc">购物车</span>
        <em class="cart-num abs" v-if="count.count>0">{{count.count}}</em>
      </div>
      <div >
        <a href="javascript:;" @click="goKefu()">
          <i class="icon kefu"></i><br>
          <span class="desc">客服</span>
        </a>
      </div>
    </div>
    <div class="part right">
      <template v-if="product.status == 3">
        <p v-if="product.collectNow" @click="submit(3)">抢先收藏</p>
        <p v-if="product.collectCancel" @click="submit(3)">取消收藏</p>
      </template>
      <template v-else>
        <p v-if="product.seeMoreProps" @click="submit">
          <!-- 查看更多规格 -->
          选择规格
        </p>
        <p v-if="product.selectProps" @click="submit" :class="{'redbg':product.memberProductType == 3}">
          <template v-if="product.memberProductType == 3">
            立即购买
          </template>
          <template v-else>
            选择规格
          </template>
        </p>

        <p v-if="product.addCart" @click="submit(1)" :class="{'f-14':product.buyNo,'redbg':product.memberProductType == 3}">
          <template v-if="product.memberProductType == 3">
            立即购买
          </template>
          <template v-else>
            加入购物车
          </template>
        </p>
        <p  @click="submit(5)" v-if="product.addCart && product.memberProductType != 3" class="redbg f-14">立即抢购</p>
        <p v-if="product.hasChance" @click="submit(2)">还有机会</p>
        <p v-if="product.subscriptionTip" class="graybg" @click="submit(4)">到货提醒</p>

      </template>

    </div>
  </div>
</template>

<script>
import auth from '@/utils/auth'
import { Toast, MessageBox } from 'mint-ui'

// import { Dlg } from '@/assets/dialog/fm.dialog.min.js'
export default {
  name: 'bottom',
  data () {
    return {
      window: window
    }
  },
  computed: {},
  created () {},
  mounted () {
    // this.newMemberDlg()
  },
  props: ['product', 'callback', 'count', 'goKefu', 'promotion'],
  methods: {
    submit (type) {
      if (auth.isLoggedIn()) {
        if (this.product.memberProductType == 3) {
          if (this.product.isMb == 1) {
            if (this.product.isNewMember == 1) {
              this.newMemberDlg()
            } else {
              this.showDlg('仅限未购物的新会员购买')
            }
          } else {
            this.showDlg('您还不是斑马会员，无法购买')
          }

          return false
        }
        this.callback(type, this.product.productId, 1)
      } else {
        auth.login(window.location.href)
      }
    },
    buy () {
      this.callback(this.product.selectType, this.product.productId, 1, 2)
    },
    goHome () {
      //this.$router.push('/home')
      window.location.href = '/home'
    },
    goCart () {
      if (auth.isLoggedIn()) {
        window.location.href = '/cart'
      } else {
        auth.login(window.location.href)
      }
    },
    showDlg (msg) {
      Toast({
        message: msg,
        position: 'center',
        duration: 3000
      })
    },
    newMemberDlg () {
      MessageBox({
        title: '',
        message: '此商品为app专享，请打开app进行购买',
        showCancelButton: true,
        showConfirmButton: true
      }).then((value) => {
        if (value == 'confirm') {
          window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.globalscanner'
        }
      })
      // const buttons = [
      //   {
      //     name: '取消',
      //     css: 'color: #999999;font-size:14px;',
      //     callback: function () {
      //       Dlg.close('iconfirm')
      //     }
      //   },
      //   {
      //     name: '确定',
      //     css: 'color: #000000;font-size:14px;',
      //     callback: function () {
      //       window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.globalscanner'
      //     }
      //   }
      // ]
      // Dlg.confirm({
      //   id: 'iconfirm',
      //   contentCss: 'font-size:14px;',
      //   content: '此商品为app专享，请打开app进行购买',
      //   buttonDirection: 'horizontal', // 'vertical'
      //   button: buttons,
      //   showTitle: false
      // })
    }
  }
}
</script>
