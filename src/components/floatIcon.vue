<style lang="less" scoped>
.back-top {
  position: fixed;
  z-index: 100;
  right: 15px;
  bottom: 95px;
  width: 100%;
  width: 36px;
  height: 36px;
  //background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  box-sizing: border-box;
}
.cart-icon{
  position:fixed;
  bottom:95px;
  left:15px;
  z-index:90;
  height:40px;
  display:flex;
  align-items: center;
  padding:0 10px;
  background:rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  p{
    position:relative;
    width:20px;
    height:20px;
  }
  span{
    position:absolute;
    top:-8px;
    right:-8px;
    background:#f1002d;
    width:18px;
    height:18px;
    line-height:18px;
    border-radius: 50%;
    //padding:0 2px;
    color:#fff;
    font-size:12px;
    text-align:center;
  }
}
</style>
<template>
  <div class="float-box">
    <div class="cart-icon" @click="goCart" v-if="showCart">
      <p>
        <img src="~images/shop/cart.png" alt="">
        <span v-if="count>0">{{count}}</span>
      </p>
    </div>
    <div class="back-top" v-if="backTop" @click="backTopFun"><img src="~images/shop/arr-top.png" alt=""></div>
  </div>
</template>
<script>
import api from '@/api/cart'
import auth from '@/utils/auth'
export default {
  name: 'floaticon',
  data () {
    return {
      backTop: false,
      count:0
    }
  },
  props:{
    showCart:{
      type: [Boolean,String],
      default :true
    }
  },
  methods:{
    backTopFun: function () {
      window.scrollTo(0, 0)
    },
    getCartCount(){
      api.cartCount().then(res=>{
        if(res.status==1){
          this.count = res.data.count
        }
      })
    },
    goCart(){
      this.$router.push({path:'/cart'})
    }
  },
  mounted(){
    window.onscroll = () => {
      let _scrollH = window.scrollY
      if (_scrollH > 500) {
        this.backTop = true
      } else {
        this.backTop = false
      }
    }
    if(auth.isLoggedIn() && this.showCart){
      this.getCartCount()
    }
  }
}
</script>
