<template>
  <ul class="like-list clearfix">
    <li class="left" v-for="(list,dataInx) in listData" :key="dataInx" :class="{'like-border':list.contentType != 2}" :style="{width:likeListW+'px'}">
        <a :href="list.url">
          <img src="https://yangege.b0.upaiyun.com/1794a971b4043.png" v-lazy="list.image">
           <p class="like-desc mb-8 like-list-tag">
              {{list.name}}
          </p>
          <p class="high-price">{{list.highPrice}}<em></em></p>
          <del class="low-price">{{list.lowPrice}}</del>
        </a>
    
    </li>
  </ul>
</template>

<script>
import tool from "@/utils/tools";

export default {
  name: "prouduct-list",
  data() {
    return {
      likeListW: (window.screen.width - 30) / 2,
      likeBoxH: 0
    };
  },
  props: ["listData"],
  methods: {
    pinterestFun: function() {
      //瀑布流计算
      var _this = this,
        _listBox = document.querySelectorAll(".like-list"),
        _list = document.querySelectorAll(".like-list li");

      //用于存储 每列中的所有块框相加的高度。
      var pinHArr = [];

      for (var index = 0, len = _list.length; index < len; index++) {
        var pinH = _list[index].offsetHeight,
          _activityW = _list[index].children[0].getAttribute("data-width"),
          _activityH = _list[index].children[0].getAttribute("data-height"),
          _currentW = _list[index].children[0].offsetWidth,
          _ratio = _activityW / _activityH;

        if (_activityH) {
          pinH = _currentW / _ratio;
        }

        if (index < 2) {
          pinHArr[index] = pinH;
        } else {
          //数组pinHArr中的最小值minH
          var minH = Math.min.apply(null, pinHArr);
          var pinIndex = pinHArr.findIndex((value, index, arr) => {
            return value > minH; //<= minH return -1, > return 索引
          });
          var minHIndex = 0;

          if (pinIndex > -1) {
            minHIndex = pinIndex > 0 ? pinIndex - 1 : pinIndex + 1;
          }

          // 将瀑布流中的元素定位在上一行中高度最小的元素下方
          _list[index].style.position = "absolute";
          _list[index].style.top = minH + 10 + "px";
          _list[index].style.left = _list[minHIndex].offsetLeft - 10 + "px";

          //更新添加了块框后的列高
          pinHArr[minHIndex] += pinH + 10;
        }
      }

      this.likeBoxH = Math.max.apply("", pinHArr);
    }
  },
  watch: {
    listChange() {
      if(this.listChange) {
        this.pinterestFun();
        this.$emit('isChange',false)
      }
    }
  },
  mounted() {
    setTimeout(()=>{
      console.log(this.listData)
    },500)
  }
};
</script>

<style lang="less" scoped>

.like-list {
  position: relative;
}
.high-price{
  color: #F1002D;
  font-weight:bold;
  line-height:16px;
  margin:0 0 4px 5px;
  em{
     width:39px;
     height:11px;
     margin:0 0 0 6px;
     background:url('~images/recruit/newmenber.png') no-repeat;
     background-size:100%;
  }
}
.low-price{
  font-size: 12px;
  color: #CCCCCC;
  margin:0 0 0 5px;
}
.like-list li {
  /*width: 46.5%;*/
  margin: 0 0 10px 10px;
  box-sizing: border-box;
  background: #fafafa;
}

.like-border {
  border: 1px solid #eee;
}

.like-tu {
  position: relative;
  display: block;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat center;
  background-size: cover;
}

.like-border .like-tu:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.like-tu:after,
.zong-dtu:after {
  content: '';
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .03)
}

.like-list-info {
  padding: 10px;
}

.like-desc {
  height: 33px;
  line-height: 1.25;
  font-size:14px;
  color:#333;
  margin:8px 5px 12px 5px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.like-list-tag i {
  height: 16px;
  line-height: 15px;
  padding: 0 2px;
  margin: 3px 3px 0 0;
  border: 1px solid #f93939;
  box-sizing: border-box;
  color: #f93939;
  font-size: 10px;
  vertical-align: top;
}

.like-list-tag .tag-red {
  background: #f93939;
  color: #fff;
}
.member-price:after {
  content: '';
  display: inline-block;
  width: 25px;
  height: 12px;
  margin-left: 3px;
  background: url(~/assets/image/vip-icon.png) no-repeat;
  background-size: contain;
  vertical-align: middle;
}

</style>
