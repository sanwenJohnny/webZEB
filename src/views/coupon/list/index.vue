<style lang="less" scoped>
  .coupons-wrapper{
    height: 100%;
  }
  .no-use {
    margin: 10px 15px;
    height: 52px;
    line-height: 52px;
    box-sizing: border-box;
    background: #FFF;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    color: #1A1A1A;
    border-radius: 4px;
    text-align: center;
  }
  .ticket-list {
    padding: 0px 15px;
  }
  .all {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    padding: 10px 0;
  }
</style>
<template>
  <div class="coupons-wrapper">
    <!--  不使用 -->
    <div class="no-use" v-if="availableCouponList.length || unavailableCouponList.length" @click="noUseCoupon">不使用优惠券</div>
    <div class="ticket-list">

      <!-- 有效优惠券-->
      <Ticket v-for="(item, index) in availableCouponList" :key="item.id" :coupon="item" @choose="changeChoose"></Ticket>
      <!-- 无效优惠券-->
      <Ticket v-for="(item, index) in unavailableCouponList" :key="item.id" :coupon="item"></Ticket>

      <div class="empty" v-if="!availableCouponList.length && !unavailableCouponList.length">
        <img src="~images/personal/no-discount.png" alt="">
        <div class="empty-word">您暂时没有优惠券哦</div>
      </div>
      <div class="all" v-else>已显示全部内容</div>

    </div>
  </div>
</template>

<script>
import api from '@/api/order'
import Ticket from '../item'
import session from '@/utils/session-lite'

export default {
  name:'chooseCoupon',
  data () {
    return {
      empty: false,
      availableCouponList: [], // 有效优惠券
      unavailableCouponList: [], // 无效优惠券
      confirmId: '',    // 订单编号 路由带过来
      activitiesIsOpen: '',  // 是否参加满减 1参加 0不参加 路由带过来
      couponAccountId:-2,  // 选中ID
    }
  },
  components: {
    Ticket
  },
  mounted () {
    this.confirmId = this.$route.query.confirmId || ''
    this.activitiesIsOpen = this.$route.query.activitiesIsOpen?1:0
    this.couponAccountId = session.get('couponAccountId')
    
    this.getList()
  },
  methods: {
    // 不使用优惠券
    noUseCoupon() {
      // 要去改变参数告诉提交订单不使用优惠券
      session.set('couponAccountId', -2)
      this.$router.back()
    },

    // 获取优惠券列表
    async getList () {
      let params = {
        confirmId: this.confirmId,           
        activitiesIsOpen: this.activitiesIsOpen  
      }
      const res = await api.getCouponList(params)
      if (res) {
        const { data, status, message } = res
        if (status == 1) {
          if (data) {
            const { availableCouponDetails, unavailableCouponDetails } = data

            // 勾选选中的
            this.checkOne(availableCouponDetails)

            this.unavailableCouponList = unavailableCouponDetails || ''
            
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败！')
      }
    },

    // 勾选选中的
    checkOne (list) {
      let length = list.length;
      if (length) {
        for (let i = 0; i < length; i++) {
          if (list[i].couponId == this.couponAccountId) {
            list[i].selected = 1       
          } else {
            list[i].selected = 0                                                   
          }
        }
      }
      this.availableCouponList = list
    },

    // 选择优惠券
    changeChoose(chooseId) {
      let length = this.availableCouponList.length;
      if(length){
        for (let i = 0; i < length; i++) {
          if (this.availableCouponList[i].couponId === chooseId ) {
            if (this.availableCouponList[i].selected) {
              this.availableCouponList[i].selected = 0                          
            } else {
              this.availableCouponList[i].selected = 1       
              
              // 将选中的id要保存给提交订单
              session.set('couponAccountId', this.availableCouponList[i].couponId)
            }
          } else {
            this.availableCouponList[i].selected = 0                                      
          }
        }
      }
      
      this.$router.back()
    }

  },
}
</script>
