<template>
<div id="applyModule" :class="{'pt-45': isAppView==1}" v-cloak>
    <!-- 头部 -->
    <TopBar title-name="投诉详情" v-if="isAppView==1">
        <div class="concat" slot="topright" @click="concat()">联系客服</div>
    </TopBar>
    <div class="refund_detail flexMain">
        <div class="content">
            <!-- 退款进度-->
            <div class="progress_module">
                <ul class="progress">
                    <li class="current">
                        <div class="status_txt">发起投诉申请</div>
                        <div class="line"></div>
                        <div class="circle"></div>
                    </li>
                    <li :class="{current: refundDetail.status > 0}">
                        <div class="status_txt">待处理</div>
                        <div class="line" :class="{active: refundDetail.status == 1}"></div>
                        <div class="circle"></div>
                    </li>
                    <li :class="{current: refundDetail.status > 1}">
                        <div class="status_txt">处理中</div>
                        <div class="line" :class="{active: refundDetail.status == 2}"></div>
                        <div class="circle"></div>
                    </li>
                    <li :class="{current: refundDetail.status > 2}">
                        <div class="status_txt">处理完成</div>
                        <div class="line"></div>
                        <div class="circle"></div>
                    </li>
                </ul>
            </div>

            <!-- 商品信息-->
            <div class="refund_info">
                <div class="title">商品信息</div>
                <!-- 投诉商品-->
                <div v-if="refundProduct && refundProduct.length>0" v-for="(data,i) in refundProduct" :key="i">
                    <Product :productData="data"></Product>
                    <!-- <div class="pro_photo"><img :src="data.img" alt=""/></div>
                    <div class="pro_info">
                        <p class="p_title">
                            <span>{{data.productName}}</span>
                            <span>x{{data.productCount}}</span>
                        </p>
                    </div> -->
                </div>
                <!-- 投诉信息-->
                <div class="r_info" v-if="refundDetail">
                    <ul class="info_list">
                        <li>投诉类型：{{refundDetail.reasonDesc}}</li>
                        <li v-if="refundDetail.description">具体描述：{{refundDetail.description}}</li>
                        <li v-if="refundDetail.imgList">上传凭证：<span class="uploadImg">
                        <img :src="imgdata" alt="" v-for="(imgdata, index) in refundDetail.imgList" :key="index">
                        </span>
                        </li>
                        <li>投诉时间：{{refundDetail.createTime}}</li>
                        <li class="r_number">订单编号：<span class="number" ref="copynum">{{refundDetail.orderNumber}}</span>
                            <div class="copy_btn" @click="copyOrderNumber(refundDetail.orderNumber)"><span class="copy">复制</span></div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

    <!-- 客服-->
    <!-- <div class="services"></div> -->
</div>
</template>
<script>
import api from '@/api/refund'
import TopBar from '@/components/topBar'
import Product from './product'
import tools from '@/utils/tools'
export default{
  name: 'complaindetail',
  data: function () {
    return {
      isAppView: 0,
      refundDetail: '',
      refundProduct: '',
      IMNum: ''
    }
  },
  computed: {
  },
  components: {
    TopBar,
    Product
  },
  created () {
    this.isAppView = tools.GetQueryString('isApp') || tools.GetQueryString('isAppView') || 0
    this.getRefundDetail()
    if (!window.WebViewJavascriptBridge) {
      tools.bridgeFun()
    }
  },
  mounted: function () {},
  methods: {
    // 联系客服
    concat () {
      window.WebViewJavascriptBridge.callHandler('pushToOtherController', { 'type': 8, 'IMServiceNum': this.IMNum, 'IMServiceName': this.IMName }, function (res) {
      })
    },
    // 获取退款详情
    getRefundDetail () {
      let data = {
        workOrderNumber: this.$route.params.id
      }
      api.complainDetail(data).then((data) => {
        if (data.status == 1) {
          this.refundDetail = data.data
          this.refundProduct = data.data.productDTOs
          this.IMNum = data.data.imserviceInfo.imNum
          this.IMName = data.data.imserviceInfo.sellerName
        } else {
          tools.toast(data.errorMsg)
        }
      })
    },
    /**
             * 复制功能
             */
    copy ($ele) {
      var range
      var self = this
      var save = function (e) {
        e.clipboardData.setData('text/plain', $ele.innerHTML)
        e.preventDefault()
      }

      if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) { // ios设备
        window.getSelection().removeAllRanges()
        range = document.createRange()
        range.selectNode($ele)
        window.getSelection().addRange(range)
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
      } else { // 安卓设备
        document.addEventListener('copy', save)
        document.execCommand('copy')
        document.removeEventListener('copy', save)
      }

      setTimeout(function () {
        tools.toast('复制成功')
      }, 200)
    },
    /**
             * 复制订单编号
             */
    copyOrderNumber () {
      let $copy = this.$refs.copynum
      try {
        this.copy($copy)
      } catch (e) {
        tools.toast('复制成功')
      }
    }
  }
}

</script>
<style lang="less" scoped>
.pt-45{
    padding-top: 45px;
}
.concat{
    float: right;
    color: #fff;
}
.progress_module {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  background: #4D4D4D;
}
.progress {
    display: flex;
    width: 85%;
    margin-left: 2%;
    li {
        position: relative;
        flex: 1;
        &:first-child{
            .status_txt{
                line-height: 16px;
            }
        }
        &:last-child {
            display: flex;
            flex: none;
            align-items: flex-end;
            .status_txt {
                position: absolute;
                width: 58px;
                /* line-height: 32px; */
                align-self: flex-start;
            }
            .line {
                display: none;
            }
        }
        &.current {
            .status_txt {
                color: #fff;
            }
            .line {
                background: #fff;
            }
            .circle {
                background: #fff;
            }
        }
        .status_txt {
            color: #858585;
            font-size: 12px;
            width: 45px;
            line-height:32px;
            height: 32px;
            margin-bottom: 16px;
            transform: translateX(-50%);
        }
        .line {
            width: 100%;
            height: 4px;
            background: #858585;
            &.active {
                background: #858585;
            }
        }
        .circle {
            width: 12px;
            height: 12px;
            background: #858585;
            border-radius: 50%;
            transform: translate(-50%, -8px);
        }
        .status_tips {
            position: absolute;
            color: #fff;
            font-size: 12px;
            width: 90px;
            transform: translateX(-50%);
        }
        .hurry {
            position: absolute;
            color: #fff;
            font-size: 10px;
            width: 40px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border: 1px solid #fff;
            transform: translateX(-50%);
        }
    }
}

.refund_status {
    margin-top: 1rem;
    background: #fff;
    &.is_top {
        margin-top: 0;
    }
    .refund_status_txt {
        padding: 16px 12px 12px 16px;
        h3 {
            color: #000;
            font-size: 16px;
            font-weight: normal;
            word-wrap: break-word;
            &.warn {
                color: #f00;
            }
        }
        p {
            color: #858585;
            font-size: 12px;
            word-wrap: break-word;
        }
        .refund_operate {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 5.5rem;
            padding: 0 16px;
            align-items: center;
            justify-content: flex-end;
            border-top: 1px solid #f0f0f0;
            .opt {
                display: flex;
                justify-content: center;
                color: #000;
                font-size: 12px;
                padding: 0 15px;
                height: 30px;
                line-height: 30px;
                margin-left: 10px;
                border: 1px solid #000;
                &.warn {
                    color: #f00;
                    border-color: #f00;
                }
            }
        }

    }
}

.refund_info {
    margin-top: 10px;
    background: #fff;
    .title {
        color: #000;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        padding-left: 16px;
        border-bottom: 1px solid #f0f0f0;
    }
     .pro {
        border-bottom: 1px solid #f0f0f0;
    }
    .r_info {
        padding: 12px 16px;
        background: #fff;
        .info_list li {
            margin-bottom: 10px;
            color: #858585;
            line-height: 20px;
            word-break: break-all;
            span {
                color: #858585;
            }
            .uploadImg{
                vertical-align: top;
                img{
                    width: 60px;
                    height: 60px;
                    margin-right: 10px;
                }
            }
            &.r_number {
                position: relative;
            }
            .copy_btn {
                position: absolute;
                top: -50%;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 30px;
            }
            .copy {
                display: block;
                color: #000;
                font-size: 12px;
                width: 48px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border: 1px solid #000;
            }
        }
    }
}
</style>
