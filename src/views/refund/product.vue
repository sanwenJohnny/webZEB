<template>
<div class="pro">
    <div class="pro_photo"><img :src="productData.img" alt=""/></div>
    <div class="pro_info">
        <p class="p_title">
            <span>{{productData.productName}}</span>
            <span>x{{productData.productCount}}</span>
        </p>
    </div>
</div>
</template>
<script>
export default {
  name: "product",
  data: function() {
    return {};
  },
  props: {
    productData: ""
  },
  computed: {},
  components: {},
  created() {},
  mounted: function() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.pro {
  display: flex;
  padding: 15px;
}
.pro_photo {
  flex: none;
  width: 68px;
  height: 68px;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
}
.pro_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-left: 8px;
}
.p_title {
  line-height: 18px;
  height: 36px;
  span {
    &:first-child {
      width: 90%;
      float: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      text-align: left;
      line-height: 18px;
    }
    &:last-child {
      float: right;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #333333;
      text-align: left;
    }
  }
}
</style>
