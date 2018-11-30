<template>
  <ul class="list-ul clearfix" :style="{height:likeBoxH+'px'}">
    <li v-for="(data,index) in listData" :key="index" :style="{width:likeListW+'px'}">
	  <div class="list-mesg">
		<div class="imglazyload" v-lazy:background-image="data.image" @click="goUrl(data.saleGoodsId)">
		  <!-- <div class="mask" v-if="data.type==2 || data.type==3 || data.type==4"></div> -->
		    <span v-if="data.type==2" class="bg-red">还有机会</span>
		    <span v-if="data.type==3">即将开抢</span>
		    <span v-if="data.type==4">已抢完</span>
		  </div>
    <!-- <p class="product-name" @click="goUrl(data.productId)">
		  <i v-for="(tags,index) in data.saleGoodsTagList" :key="index" :class="{'bg-FFF0F0':tags.type==2,'col-f93':tags.type==1}">{{tags.tag}}</i>
		  <span v-html="data.name"></span>
		</p> -->
    <div class="like-list-info">
      <p class="like-list-tag like-desc" v-if="data.saleGoodsTagList.length > 0">
        <i v-for="(tagList,i) in data.saleGoodsTagList" :key="i" v-text="tagList.tag" :class="{'tag-red':tagList.type == 2}"></i>
        <span v-html="data.name"></span>
      </p>
      <p class="like-desc" v-else v-html="data.name"></p>
      <!-- v-if="data.saleGoodsTagList.length>0" -->
      <p class="like-list-tag sale-tag" v-if="data.activityTagList.length > 0"> 
        <i v-for="tag in data.activityTagList" :key="tag.type" v-if="tag.type" :class="{'popur':tag.type==2}">{{tag.tag}}</i>
      </p>
      <p class="price">
        <b><i>¥</i>{{data.lowPrice}}<img src="~images/vip-redicon.png" /></b>
        <em>¥{{data.highPrice}}</em>
      </p>
    </div>
	  </div>
	</li>
  </ul>
</template>
<script>
export default {
  name: 'list',
  data () {
    return {
      likeListW: (window.screen.width - 30) / 2,
      likeBoxH: 0
    }
  },
  props: {
    listData:''
  },
  methods: {
    pinterestFun: function () {
      // 瀑布流计算
      // _listBox = document.querySelectorAll('.like-list'),
      let _list = document.querySelectorAll('.list-ul li')

      // 用于存储 每列中的所有块框相加的高度。
      var pinHArr = []

      for (var index = 0, len = _list.length; index < len; index++) {
        let pinH = _list[index].offsetHeight
        let _activityW = _list[index].children[0].getAttribute('data-width')
        let _activityH = _list[index].children[0].getAttribute('data-height')
        let _currentW = _list[index].children[0].offsetWidth
        let _ratio = _activityW / _activityH

        if (_activityH) {
          pinH = _currentW / _ratio
        }
        if (index < 2) {
          pinHArr[index] = pinH
        } else {
          // 数组pinHArr中的最小值minH
          let minH = Math.min.apply(null, pinHArr)
          let pinIndex = pinHArr.findIndex((value, index, arr) => {
            return value > minH // <= minH return -1, > return 索引
          })
          var minHIndex = 0

          if (pinIndex > -1) {
            minHIndex = pinIndex > 0 ? pinIndex - 1 : pinIndex + 1
          }

          // 将瀑布流中的元素定位在上一行中高度最小的元素下方
          _list[index].style.position = 'absolute'
          _list[index].style.top = minH + 10 + 'px'
          _list[index].style.left = _list[minHIndex].offsetLeft - 10 + 'px'

          // 更新添加了块框后的列高
          pinHArr[minHIndex] += pinH + 10
        }
      }
      this.likeBoxH = Math.max.apply('', pinHArr)
    },
    goUrl (productId) {
      this.$router.push({ name: 'productInfo', query: { saleGoodsId: productId } })
    }
  },
  watch: {
    // listChange () {
    //   if (this.listChange) {
    //     this.pinterestFun()
    //     this.$emit('isChange', false)
    //   }
    // },
    listData:{
      handler (newVal, oldVal) {
        //console.log(newVal)
        this.$nextTick(()=>{
          this.pinterestFun()
        })
        
      },
      deep: true
    }
  },
  updated(){
  },
  mounted () {
    this.pinterestFun()
  }
}
</script>
<style lang="less" scoped>
.list-ul {
  position:relative;
  li {
    float: left;
    position: relative;
    //width: 47%;
    margin: 0 0 10px 10px;
    border-radius: 4px;
    padding-bottom: 5px;
    background: #fff;
  }
}
.list-mesg {
  background: #fff;
  font-size: 14px;
  border-radius: 4px 4px 0 0;
  //color: #F1002D;
  .imglazyload {
    padding-top: 100%;
    background: no-repeat center;
    background-size: cover;
    min-height: inherit;
    position: relative;
    border-radius: 4px 4px 0 0;
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
    // &:after {
    //   content: "";
    //   position: absolute;
    //   z-index: 2;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: rgba(0, 0, 0, 0.03);
    // }
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
.like-list-info {
  padding: 10px;
}

.like-desc {
  //height: 33px;
  //display:flex;
  //align-items: center;
  //span {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 18px;
  font-size:13px;
  i {
    display:inline;
    background: #f1002d;
    border-radius: 1px;
    color: #fff;
  }
  span{
    display:inline;
    line-height:20px;
    vertical-align: middle;
  }
  //}
}
.price {
  margin-top: 10px;
  font-size: 16px;
  color: #f1002d;
  b {
    display: flex;
    align-items: center;
    font-weight:bold;
    line-height:1;
  }
  img {
    width: 22px;
    height: 13px;
    margin-left: 3px;
  }
  em {
    display:block;
    font-size: 13px;
    color: #b2b2b2;
  }
  i {
    margin-top:3px;
    font-size: 12px;
  }
}
.sale-tag {
  margin-top: 10px;
  i {
    margin: 0 3px 2px 0;
    color: #f1002d;
  }
  .popur{
    border:1px solid #C35FBA;
    color: #C35FBA
  }
}
.like-list-tag i {
  //height: 16px;
  line-height: 14px;
  padding: 0 2px;
  margin: 3px 3px 0 0;
  border: 1px solid #f1002d;
  box-sizing: border-box;
  font-size: 10px;
  //vertical-align: top;
}

.like-list-tag .tag-red {
  background: #f1002d;
}

</style>
