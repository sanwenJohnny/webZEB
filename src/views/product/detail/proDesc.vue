
<style scoped>
.desc-comp {
  background: #fff;
  color: #000;
}
.desc-header {
  display: flex;
  align-items: center;
  height: 47px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  margin-left: 10px;
}
.desc-info {
  padding: 10px;
}
.desc-tip {
  display: inline-block;
  width: 75px;
  vertical-align: top;
}
.desc-tip i {
  display: inline-block;
  width: 75px;
  color: #000;
  text-align: justify;
  text-align-last: justify;
}
.desc-cont {
  display: inline-block;
  width: 215px;
  margin-left: 16px;
}
.desc-info > div {
  margin-top: 10px;
}
</style>
<template>
  <div class="desc-comp">
    <div class="desc-header">商品信息</div>
    <div class="desc-info">
      <div v-for="(item,index) in summaryList" :key="index">
        <p class="desc-tip">{{item.title}}</p>
        <p class="desc-cont">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot-pros',
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  props: ['summaryList'],
  methods: {}
}
</script>
