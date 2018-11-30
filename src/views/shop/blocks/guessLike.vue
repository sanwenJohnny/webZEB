<template>
  <ul class="like-list clearfix" :style="{height:likeBoxH+'px'}">
    <li class="left" v-for="(list,dataInx) in listData" :key="dataInx" :style="{width:likeListW+'px'}">

      <template v-if="list.contentType && list.contentType == 2">
        <a :href="list.activity.webUrl?list.activity.webUrl:'javascript:;'" class="like-tu" :data-width ="list.activity.width" :data-height ="list.activity.height">
          <img src="https://yangege.b0.upaiyun.com/1794a971b4043.png" v-lazy="list.activity.image">
        </a>
      </template>
      <template v-else>
        <!-- <a :href="list.product.displayURL?list.product.displayURL:'javascript:;'" v-lazy:background-image="list.product.image" class="like-tu">
        </a> -->
        <router-link :to="{name:'productInfo',query:{saleGoodsId:list.product.saleGoodsId}}" v-lazy:background-image="list.product.image" class="like-tu">
          <span v-if="list.product.type==2" class="bg-red">还有机会</span>
	        <span v-if="list.product.type==3">即将开抢</span>
		      <span v-if="list.product.type==4">已抢完</span>
        </router-link>
        <div class="like-list-info">
          <!-- <p class="like-desc mb-8 like-list-tag" v-if="list.product.saleGoodsTagList.length>0">
            <template v-for="data in list.product.saleGoodsTagList">
              <i style="margin: 0 3px 2px 0;background: #FFF0F0;" :key="data.tag" v-if="data.type">{{data.tag}}</i>
            </template>{{list.product.name}}
          </p> -->
          <p class="like-list-tag like-desc" v-if="list.product.saleGoodsTagList.length > 0">
            <i v-for="(tagList,i) in list.product.saleGoodsTagList" :key="i" v-text="tagList.tag" :class="{'tag-red':tagList.type == 2}"></i>{{list.product.name}}
          </p>
          <p class="like-desc" v-else>{{list.product.name}}</p>
          <p class="like-list-tag sale-tag" v-if="list.product.activityTagList.length>0">
            <i v-for="data in list.product.activityTagList" :key="data.type" v-if="data.type" :class="{'popur':data.type==2}">{{data.tag}}</i>
          </p>
          <p class="price">
            <b><i>¥</i>{{list.product.lowPrice}}<img src="~images/vip-redicon.png" /></b>
            <em>¥{{list.product.highPrice}}</em>
          </p>
        </div>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'prouduct-list',
  data () {
    return {
      likeListW: (window.screen.width - 30) / 2,
      likeBoxH: 0
    }
  },
  props: ['listData'],
  methods: {
    pinterestFun: function () {
      // 瀑布流计算
      // _listBox = document.querySelectorAll('.like-list'),
      let _list = document.querySelectorAll('.like-list li')

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
          var minH = Math.min.apply(null, pinHArr)
          var pinIndex = pinHArr.findIndex((value, index, arr) => {
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
    }
  },
  watch: {
    // listChange () {
    //   if (this.listChange) {
    //     this.pinterestFun()
    //     this.$emit('isChange', false)
    //   }
    // },
    listData: {
      handler (newVal, oldVal) {
        // console.log(newVal)
        this.$nextTick(() => {
          this.pinterestFun()
        })
      },
      deep: true
    }
  },
  updated () {},
  mounted () {
    this.pinterestFun()
  }
}
</script>

<style lang="less" scoped>
.like-list {
  position: relative;
}
.left{
  float:left;
}
.like-list li {
  /*width: 46.5%;*/
  margin: 0 0 10px 10px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
}

.like-tu {
  position: relative;
  display: block;
  border-radius: 4px 4px 0 0;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat
    center;
  background-size: cover;
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
  .bg-red {
    background: rgba(241, 0, 45, 0.6);
  }
}

.like-tu:before {
  content: "";
  display: block;
  padding-top: 100%;
}

// .like-tu:after,
// .zong-dtu:after {
//   content: "";
//   position: absolute;
//   z-index: 2;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.03);
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
    //line-height:13px;
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
