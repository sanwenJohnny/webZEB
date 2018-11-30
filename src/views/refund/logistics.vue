<template>
  <div id="logisticsModule" :class="{flexModule: showFlex}" v-cloak>
    <!-- 头部 -->
    <div class="header_bar flexHeader" v-if="isAppView == 1">
        <span class="back bar" @click="back()"><i class="icon"></i></span>
        <h4>物流详情</h4>
        <span class="bar"></span>
    </div>


    <div class="refund_logistics flexMain">
        <div class="content" v-if="logInfo">

            <!-- 物流详情-->
            <div class="log_info">
                <h4>{{logInfo.logisticsChannel}}</h4>
                <p>运单编号：{{logInfo.logisticsNumber}}</p>
                <p>物流状态：{{logInfo.status}}</p>
            </div>

            <!-- 联系快递员-->
            <div class="log_concat">
                <div class="log_phone">
                    <img class="icon" src="~images/refund/phone.png" alt=""/>
                    <span class="txt">物流电话：{{logInfo.phone}}</span>
                </div>
                <a class="call" :href="'tel:' + logInfo.phone">拨打</a>
            </div>

            <!-- 物流跟踪-->
            <div class="log_main">
                <div class="log_title">
                    <h4>物流跟踪</h4>
                </div>
                <ul class="log_list">
                    <li v-for="log in logInfo.logisticsInfoList">
                        <p class="msg" v-if="log.content">{{log.content}}</p>
                        <p class="date" v-if="log.time">{{log.time}}</p>
                    </li>
                </ul>
            </div>


        </div>
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
      toastMsg: "",
      showToast: false,
      showExpress: false,
      logInfo: "",
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
    this.applyNumber = this.$route.query.applyNumber || "";
    this.isAppView =
      this.$route.query.isApp || this.$route.query.isAppView || 0;
    this.getLogistics();
  },
  methods: {
    // 返回
    back: function() {
      var referrer = this.referrer;
      if (referrer) {
        history.back();
      } else {
        window.location.href = "ggj://redirect";
      }
    },
    // 获取地址栏参数
    getQueryString: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    closeToast: function() {
      this.showToast = false;
    },
    /**
     * 获取物流详情
     */
    getLogistics: function() {
      api.getLogisticsList({ applyNumber: this.applyNumber }).then(res=>{
        this.showFlex = true;
        if (res.status == 1) {
          this.logInfo = res.data;
        } else {
          tools.toast(res.message)
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
/* flex布局 */
.flexModule {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}

.flexHeader {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}

.flexMain {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.flexMain .content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.flexFooter {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}
/* 退款头部 */
.header_bar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #fff;
  height: 45px;
  line-height: 45px;
  background: #000;
}

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
  height: 45px;
}
.header_bar .bar.concat {
  font-size: 14px;
  width: 60px;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.header_bar .bar i {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.header_bar h4 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
}
/* 退款商品列表 */
.log_info {
  padding: 10px 16px;
  background: #4d4d4d;
}
.log_info h4 {
  color: #fff;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 5px;
}
.log_info p {
  color: #fff;
  font-size: 12px;
  line-height: 18px;
}
.log_concat {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  margin-top: 10px;
  background: #fff;
}
.log_concat .log_phone {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #858585;
  font-size: 16px;
}
.log_concat .log_phone .icon {
  width: 20px;
}
.log_concat .call {
  color: #000;
  font-size: 16px;
}

.log_main {
  margin-top: 10px;
  background: #fff;
}
.log_main .log_title {
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  border-bottom: 1PX solid #f0f0f0;
}
.log_main .log_title h4 {
  color: #000;
  font-size: 14px;
  font-weight: normal;
}
.log_list {
  padding: 12px 16px; }
  .log_list li {
    position: relative;
    padding: 0 0 12px 20px;
    border-left: 2px solid #dbdbdb; }
    .log_list li:after {
      position: absolute;
      left: -5px;
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #dbdbdb; }
    .log_list li:first-child:before {
      position: absolute;
      left: -8px;
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #a8dfbf; }
    .log_list li:first-child:after {
      left: -6px;
      top: 2px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #25ae5f; }
    .log_list li p {
      color: #858585;
      font-size: 14px;
      line-height: 1.5; }

</style>
