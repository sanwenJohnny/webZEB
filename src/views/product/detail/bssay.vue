
<style scoped>
.bssay-comp {
  background: #fff;
  color: #000;
  padding-bottom: 10px;
}
.bssay-title {
  display: flex;
  align-items: center;
  height: 46px;
  border-bottom: 1px solid #eee;
  font-size: 15px;
  position: relative;
  margin-left: 10px;
}
.bssay-title i {
  width: 8px;
  height: 12px;
  background: url("~images/product/right.png") no-repeat;
  background-size: 100%;
  position: absolute;
  right: 10px;
}
.pros ul {
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
}
.pros ul li {
  display: inline-block;
  width: 140px;
  height: 252px;
  border: 1px solid #e0e0e0;
  margin-top: 10px;
  margin-left: 10px;
  padding-bottom: 10px;
}
.pros ul li:last-child {
  margin-right: 10px;
}
.img-div {
  height: 140px;
  overflow: hidden;
  background: url(/static/image/square_img.png) no-repeat center;
  background-size: cover;
}
.img-div img {
  width: 100%;
}
.float-msg {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  right: 0;
  bottom: 0;
  z-index: 9;
  padding: 0 8px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 12px;
}
.bssay-info {
  padding: 10px;
  box-sizing: border-box;
}
.info-name {
  height: 78px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 5px;
  font-size: 14px;
}
.info-name span {
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  white-space: initial;
}
.bs-icon {
  width: 16px;
  height: 16px;
  background: no-repeat center;
  background-size: cover;
  border-radius: 50%;
  background-image: url(https://img.gegejia.com/3403f5b0578d9.jpg);
}
.bs-p {
  margin-left: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bssay-more {
  background: #f5f5f5;
  text-align: center;
}
.inner {
  height: 100%;
  width: 100%;
  float: left;
}
.bssay-more span {
  font-size: 14px;
  color: #c2c2c2;
}
.bor-b {
  border-bottom: 2px solid #c2c2c2;
}
.bssay-c {
  margin-top: 110px;
  padding-bottom: 5px;
}
.bssay-e {
  margin-top: 5px;
}
</style>
<template>
  <div class="bssay-comp" v-if="bsData&&bsData.count>0">
    <div class="bssay-title" @click="goBsSay(null)">
      <span>斑马说({{bsData.count}})</span>
      <i></i>
    </div>
    <div class="pros">
      <ul>
        <li v-for="data in bsData.list" :key="data.id">
          <div class="inner" @click="goBsSay(data.id)">
            <div class="img-div rela" v-lazy:background-image="data.bsSayImage">
              <!-- <img class="animated fadeIn" v-lazy="{src:data.bsSayImage,error:'../../../static/image/square_img.png',loading:'../../../static/image/square_img.png'}"> -->
              <!-- <i class="float-msg abs"> -->
                <template v-if="data.isVideo == 1"><i class="float-msg abs">视频</i></template>
                <template v-else-if="data.imageCount > 1">
                  <i class="float-msg abs">{{data.imageCount}}图</i>
                </template>
              <!-- </i> -->
            </div>
            <div class="bssay-info">
              <p class="info-name">
                <span>{{data.desc}}</span>
              </p>
              <div>
                <i class="fl bs-icon" :style="{backgroundImage:`url(${data.image})`}"></i>
                <p class="bs-p">{{data.nickname}}</p>
              </div>
            </div>
          </div>
        </li>

        <li class="bssay-more" v-if="bsData.isMore=='1'" @click="goBsSay(null)">
          <div class="inner">
            <span class="bor-b bssay-c">更多斑马说</span><br/>
            <span class="bssay-e">See more</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bssay',
  data () {
    return {}
  },
  props: ['bsData', 'saleGoodsId'],
  computed: {},
  created () {},
  mounted () {},
  methods: {
    goBsSay(id, ev){
      console.log('id:',id)
      const query = id ? `?productId=${this.saleGoodsId}&id=${id}` : `?productId=${this.saleGoodsId}`
      this.$router.push({path:`/fx/say${query}`})
    }
  }
}
</script>
