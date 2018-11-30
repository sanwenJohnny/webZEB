<template>
  <ul class="list-ul clearfix">
    <li v-for="(data,index) in listData" :key="index">
	  <div class="list-mesg">
		<div class="imglazyload" v-lazy:background-image="data.image" @click="goUrl(data.saleGoodsId)">
		  <!-- <div class="mask" v-if="data.type==2 || data.type==3 || data.type==4"></div> -->
		    <span v-if="data.type==2" class="bg-red">还有机会</span>
		    <span v-if="data.type==3">即将开抢</span>
		    <span v-if="data.type==4">还有机会</span>
		  </div>
    <p class="like-list-tag like-desc" v-if="data.activityTagList.length > 0">
      <i v-for="(tagList,i) in data.activityTagList" :key="i" v-text="tagList.tag" :class="{'tag-red':tagList.type == 2}"></i>
      {{data.name}}
    </p>
    <p class="like-desc" v-else>{{data.name}}</p>
    <!-- v-if="data.saleGoodsTagList.length>0" -->
    <p class="like-list-tag sale-tag"> 
      <i v-for="tag in data.saleGoodsTagList" :key="tag.type" v-if="tag.type">{{tag.tag}}</i>
    </p>
    <p class="price">
      <b><i>¥</i>{{data.lowPrice}}<img src="~images/vip-redicon.png" /></b>
      <em>¥{{data.highPrice}}</em>
    </p>
	  </div>
	</li>
  </ul>
</template>
<script>
export default {
  name: 'list',
  data () {
    return {}
  },
  props: {
    listData: {},
    isMember: ''
  },
  computed: {},
  methods: {
    goUrl (productId) {
      this.$router.push({ name: 'productInfo', query: { saleGoodsId: productId } })
    }
  },
  mounted () {},
  created () {}
}
</script>
<style lang="less" scoped>
.list-ul {
  padding-top: 8px;
  li {
    float: left;
    position: relative;
    width: 47%;
    margin: 0 0% 2% 2%;
    border-radius: 3px;
    padding-bottom: 5px;
    background: #fff;
  }
}
.list-mesg {
  background: #fff;
  font-size: 14px;
  //color: #F1002D;
  .imglazyload {
    padding-top: 100%;
    background: no-repeat center;
    background-size: cover;
    min-height: inherit;
    border-radius: 3px 3px 0 0;
    position: relative;
    .mask {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      left: 0;
    }
    span {
      position: absolute;
      bottom: 0px;
      width: 100%;
      text-align: center;
      height: 20px;
      line-height: 20px;
      color: #fff;
      font-size: 11px;
      background: rgba(0, 0, 0, 0.6);
    }
    .bg-red{
      background:rgba(241,0,45,0.6);
    }
    &:after {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.03);
    }
  }
  // p:nth-of-type(1) {
  //   line-height: 1.6;
  //   font-size: 14px;
  //   color: #000;
  //   width: 95%;
  //   padding-left: 4%;
  //   padding-top: 5px;
  //   margin-bottom: 5px;
  //   height: 46px;
  //   display: -webkit-box;
  //   -webkit-box-orient: vertical;
  //   overflow: hidden;
  //   i {
  //     .activity-tag;
  //   }
  // }
}
// .activity-tag {
//   display: inline-block;
//   min-width: 28px;
//   height: 14px;
//   line-height: 14px;
//   padding: 0 2px;
//   border: 1px solid #f93939;
//   vertical-align: middle;
//   box-sizing: border-box;
//   font-size: 10px;
// }
// .activity-tags {
//   display: block;
//   height: 22px;
//   margin-left: 8px;
//   span {
//     .activity-tag;
//     margin-left: 3px;
//   }
// }

.like-desc {
  padding:10px 10px 0 10px;
  height:38px;
  line-height:19px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  i{
    background: #F1002D;
    border-radius: 1px;
    color:#fff;
  }
}
.sale-tag{
  margin:10px 0 0 10px;
  height:18px;
  i{
    margin: 0 3px 2px 0;
    color: #f93939;
  }
}
.like-list-tag i {
  height: 16px;
  line-height: 15px;
  padding: 0 2px;
  margin: 3px 3px 0 0;
  border: 1px solid #f93939;
  box-sizing: border-box;
  font-size: 10px;
  vertical-align: top;
}

.like-list-tag .tag-red {
  background: #f93939;
}

.price{
  padding-left:10px;
  margin-top:10px;
  font-size: 16px;
  color:  #F1002D;
  b{
    display:flex;
    align-items: center;
  }
  img{
    width:22px;
    height:13px;
    margin-left:3px;
  }
  em{
    font-size:13px;
    color:#b2b2b2;
  }
  i{
    font-size:12px;
  }
}
</style>
