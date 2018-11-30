<template>
  <div class="box">
     <ul>
         <li class="title-box" v-for="(item,index) in info" :key="index">
             <p>
                 <span class="title-dotted"></span>
                 <span class="title"> {{item.title}}</span>
             </p> 
             <p class="title-desc">{{item.content}}</p>
         </li>
         <!-- <li class="title-box">
             <p class="title">中国人寿保障</p>
             <p class="title-desc">环球捕手已投保中国人寿财产保险股份有限公司食品安全责任险</p>
         </li>
         <li class="title-box">
             <p class="title">超时赔付</p>
             <p class="title-desc">2-4天发出。如订单5天内未从仓发出，每延迟一天赔偿订单金额的10%直至赔满订单价。说明:1、5天指的下单次日（当天不算）到仓库发出时间(以快递公司揽件的时间为准)，不包括清关，配送以及到货时间2、预售、特殊商品除外，如有相关发货、物流时效以公告为准3、国家法定节假日，保税仓和海外仓周六周日不包含在内4、因顾客个人信息填写错误和自然灾害等不可抗力因素造成的延迟发货不参与赔偿</p>
         </li> -->
          <li v-if="isMb">
             <p class="title">会员一贵就赔</p>
             <p class="title-desc">如果该商品的实际支付价格减去会员返利金额后的购买价高于当天该商品在其他渠道的价格，斑马会员双倍返回该商品与其他渠道的价差（返还的为无门槛优惠券）。
             <p class="add-paramsLink" @click='paramsLink'>申请赔付</p>
             <p>说明：</p>
             <p>1、接受比价渠道：包括天猫旗舰店、京东自营、考拉自营和官方旗舰店、唯品会自营、小红书自营。</p>
             <p>2、斑马会员平台接受比价的其他售价，是指在上述平台上的正常销售价格，并不包括限量、限时、1元夺宝、团购、拼团、换季和临近保质期的折扣销售等，也不包括618、双十一等重要销售节庆期间的销售价格。</p>
             <p>3、比价在下单后7天内有效，请截屏保存（注意：需要完整的商品主图、品名、售价、促销信息、手机时间等），向我们的客服进行申请。核实后将立即返还双倍差价的无门槛优惠券。</p>
         </li> 
     </ul>
     
  </div>
</template>
<style scoped>
  .box{
      padding:16px 12px;
      background: #fff;
      position: fixed;
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
   }
   .title-box{
       margin-bottom:32px;
   }
  .title{
      position:relative;
      font-size:16px;
      line-height:16px;
      color:#000;
      font-weight: bold;
  }
  /* .title::before{
      content:"";
      display: inline-block;
      margin:0 5px 2px 2px;
      width:4px;
      height:4px;
      background:#000;
      border-radius:100%;
      
  } */
  .title-dotted{
      margin:0px 5px 4px 2px;
      width:4px;
      height:4px;
      background:#000;
      border-radius:4px;
  }
  .title-desc{
      font-size:14px;
      color:#4d4d4d;
  }
  .add-paramsLink{
      font-size:14px;
      color:#f00;
      text-decoration:underline;
      margin-bottom:30px;
  }
  p{
        font-size:14px;
      color:#4d4d4d;
  }
</style>
<script>
import storage from '@/utils/storage-lite'
import api from '@/api/pay'

export default{
    name:'serviceInfo',
    data () {
        return {
          isApp:this.GetQueryString('isApp'),
          saleGoodsId:this.$route.query.saleGoodsId,
          isMb:false,
          info:[]
        }
    },
    mounted () {
       this.getInfo();
    },
    methods:{
    // url里面拿需要的参数
    GetQueryString (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return r[2]
        return null
    },
     appLinkStr (url,type) {
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
    },
      getInfo (){
        let params = {
          saleGoodsId:this.saleGoodsId
        }
        api.getServeInfo(params).then((response)=>{
          
          if(response.status == 1){
            let data = response.data;
            this.isMb = data.isMb == 1 ? true:false;
            this.info = data.list;
          }
          console.log(response);
        })
      },
      paramsLink () {
            let link = '/compList';
			var protocal = location.protocol;
			var hostname = location.hostname;

			var url = this.appLinkStr(link);
			if(this.isApp){
				url = protocal + '//' + hostname + url;
				var opt = {
					type: 25,
					isHide: 1,
					webUrl: url
				};
				url = 'ggj://redirect/typeCommon/' + JSON.stringify(opt);
			}
			window.location.href = url;
		

      }
    }
}
</script>


