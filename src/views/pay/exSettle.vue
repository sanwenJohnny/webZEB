<template>
  <div id="example" class="example">
    <!-- 头部 -->
    <!-- <div class="app-bar" v-if="isApp">
        <a href="javascript:;" class="pin-back" @click="back()"></a>
        <b class="f-18">商品页面截图示例</b>
        <i @click="clickTurn(shareData)" class="right share-top-tb"></i>
    </div> -->

    <div class="main" :class="{has_app_bar: isApp}">
        <p class="info">可能需要多张截图，截图须要包含：完整商品图片、商品名称、相关优惠信息。</p>
        <!-- 示例列表 -->
        <ul class="example_list">
            <li>
                <p>以天猫为例: </p>
                <div class="photo"><img src="~images/pay/order1.jpg" alt=""/></div>
            </li>
            <li>
                <p>以天猫为例: </p>
                <div class="photo"><img src="~images/pay/order2.jpg" alt=""/></div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name:"exSettle",
    data (){
        return {
            isApp: true
        }
    },
    mounted (){
        this.isApp = this.getQueryString('isApp');
    },
    methods: {
        // 返回上一页
        back (){
            if (!this.isApp) {
                history.back();
            } else {
                window.location.href = 'ggj://redirect';
            }
        },
        // 获取地址栏参数
        getQueryString (name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)return unescape(r[2]);
            return null;
        }
    }
}
</script>

<style lang="less" scoped>
.example {
    padding: 10px;
}
.example_list li{
  margin-top:12px;
}
.example_list li p {
    color: #000;
    font-size: 13px;
    line-height: 1.4;}
</style>
