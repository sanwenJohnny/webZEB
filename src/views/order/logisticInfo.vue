<template>
  <!-- <div class="logistic">
    <ul class="odetailc">
      <li>
        <p>申通快递</p>
        <p>运单编号：1231231231231231</p>
        <p>物流状态：已发货</p>
      </li>
    </ul>
    <div class="logistic-list">
      <h2>物流跟踪</h2>
      <ul>
        <li>
          <p>快到了，别着急</p>
          <p>2018.10.30 12:09:00</p>
        </li>
      </ul>
    </div>
  </div> -->
  <div class="logistic">
		<ul class="odetailc">
			<li>
				<p>{{infoData.packageInfo.channel}}</p>
				<p>运单编号：{{infoData.packageInfo.number}}</p>
				<!-- <p>物流状态：{{infoData.packageInfo.status}}</p> -->
			</li>
		</ul>
		<!-- <div class="coninfo_phone clearfix"><b></b>物流电话：<i>{{infoData.phone}}</i><a :href="'tel:'+infoData.phone">拨打</a></div> -->
		<div class="logistic-list">
			<h2>物流跟踪</h2>
			<ul>
				<li v-for="(data,index) in infoData.logisticsDetailList" :key="index">
					<p>{{data.content}}</p>
					<p>{{data.operateTime}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
//import config from '@/service/config'
//import request from '@/service/request'
import api from '@/api/order'
export default{
  name:'logistic',
  data(){
    return{
      infoData:''
    }
  },
  methods:{
    async getLogisticsInfo(){
      let params = {
        shipmentId:this.$route.query.shipmentId
      }
      let res = await api.getLogisticsInfo(params)
      console.log(res, "======");
      const { status, message, data } = res
      if (status !== 1) {
        this.$toast(message)
      }
      this.infoData = data
    }
  },
  mounted(){},
  created(){
    this.getLogisticsInfo();
  }
}
</script>
<style lang="less" scoped>
.odetailc {
    background: #4d4d4d;
    color: #ffffff;
    padding: 10px 16px;
    p {
      font-size: 12px;
      line-height: 18px;
      word-break: break-all;
  }
    p:first-child {
      font-size: 15px;
      height: 25px;
      line-height: 25px;
      padding-bottom: 4px;
  }
}
.coninfo_phone {
    color: #5d626b;
    font-size: 15px;
    padding: 10px 10px 8px 10px;
    margin-top: 10px;
    border-bottom: 1px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;
    background: #fff;
    b {
      float: left;
      background: url(~images/order/phone.png) no-repeat center center;
      background-size: 100%;
      width: 20px;
      height: 20px;
      margin-top: 2px;
  }
  i {
      color: #31363a;
      font-family: 'Arial';
  }
  a {
      text-decoration: underline;
      float: right;
      margin-right: 5px;
  }
}
.logistic-list{
  margin: 10px 0;
    background: #ffffff;
    h2{
      height: 40px;
      line-height: 40px;
      padding: 0 16px;
      font-size:14px;
      font-weight:normal;
      color: #000;
      border-bottom: 1px solid #f0f0f0;
    }
    ul{
      padding: 12px 16px;     
    li{
      /*margin-left: 23px;*/
        border-left: 2px solid #dbdbdb;
        position: relative;
        padding: 12px 0 0 10px;
        color: #999999;
        p{
          margin-bottom:4px;
        }
    }
    li:after {
        content: '';
        width: 8px;
        height: 8px;
        background: #dbdbdb;
        position: absolute;
        left: 0;
        top: 14px;
        margin-left: -5px;
        border-radius: 50%;
    }
    li:first-child {
        color: #009d42;
          padding-top: 0;
    };
    li:first-child:before {
        content: '';
        width: 14px;
        height: 14px;
        background: #a8dfbf;
        position: absolute;
        left: 0;
        top: -2px;
        margin-left: -8px;
        border-radius: 50%;
    }
    li:first-child:after {
        content: '';
        width: 10px;
        height: 10px;
        background: #25ae5f;
        position: absolute;
        left: 0;
        top: 0;
        margin-left: -6px;
        border-radius: 50%;
    }
    p{
        line-height: 150%;
    }
    }
}
</style>
