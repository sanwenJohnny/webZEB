<style lang="less" scoped>
.hot-title {
  display: flex;
  align-items: center;
  padding: 20px 0 20px 15px;
  font-size: 18px;
  font-weight:bold;
}
.hot-title img {
  width: 3px;
  height: 25px;
  margin-right: 10px;
}
.fixed {
  position: fixed;
}
.fix-bg{
  background: #FFFFFF;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.05);
}
.info-list {
  color: #000;
  li {
    // width:109px;
    // height:190px;
    padding: 10px 15px 10px 10px;
    margin: 10px 15px 0 15px;
    display: flex;
    font-size: 12px;
    background:#fff;
    border-radius: 4px;
  }
  .info-tu {
    width: 120px;
    height: 120px;
    margin-bottom: 2px;
    background-size: cover;
  }
  .info-right {
    position: relative;
    width: 60%;
    height: 120px;
    flex: 1;
    margin-left: 10px;
    color:#333;
  }
  .info-desc {
    min-height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 2px;
    font-size:14px;
  }
  .progess-bar {
    span {
      display: inline-block;
      width: 80px;
      height: 4px;
      position: relative;
      background: #ebebeb;
      border-radius: 3px;
      b {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 10%;
        height: 4px;
        border-radius: 3px;
        background: #f1002d;
      }
    }
    em {
      margin-left:10px;
      font-size: 10px;
      color: #666;
    }
  }
  .sale-tip {
    margin: 2px 0;
    display: flex;
    height: 22px;
    align-items: center;
    img {
      width: 16px;
    }
    span {
      width: 80%;
      margin-left: 2px;
      font-size: 15px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .price {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-top: 10px;
    line-height: 1;
    color: #f1002d;
    font-size: 16px;
    em {
      font-size: 12px;
    }
    span {
      display: block;
      margin-bottom:1px;
      font-size: 13px;
      color: #b2b2b2;
    }
    img {
      width: 22px;
      margin:3px 0 0 5px;
    }
    del {
      margin-left: 5px;
      font-size: 14px;
      color: #c2c2c2;
    }
    a {
      position: absolute;
      right: 0;
      bottom: 0;
      display: block;
      width: 60px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-size: 12px;
      border-radius: 4px;
      color: #fff;
    }
    .red-btn {
      background: #f1002d;
    }
    .black-btn {
      //width: 68px;
      background: #1a1a1a;
    }
    .gray-btn {
      background: #ccc;
    }
  }
  // .member-price {
  //   &::before {
  //     content: "";
  //     display: inline-block;
  //     width: 25px;
  //     height: 12px;
  //     margin-right: 3px;
  //     background: url(~images/vip-redicon.png) no-repeat;
  //     background-size: contain;
  //     vertical-align: middle;
  //   }
  // }
  .pro-tip {
    color: #858585;
  }
}
</style>

<template>
	<div>
    <h1 class="f-18 fw-n t-c hot-title" ref="hotTlt"><img src="~images/shop/tlt-line.png">爆品秒杀</h1>
		<secKillNav :nav-data="topData" :show-mod="showMod" :class="{'fixed':isFixed,'fix-bg':isFixed}" :style="{top:fixedTop+'px'}" ref="seckill" @navindex="getNavIndex"></secKillNav>
		<ul class="info-list clearfix" v-if="listData.productList" ref="proList" :style="{paddingTop:paddingTop+'px'}">
      <li v-for="(list,idx) in listData.productList" :key="idx" @click="clickTurn(list.saleGoodsId)">
        <p class="info-tu" v-lazy:background-image="list.image" :key="list.image"></p>
				<div class="info-right">
					<p class="info-desc" v-text="list.name"></p>
					<p class="sale-tip"><img src="~images/red-right.png" alt="" v-if="list.tag"><span>{{list.tag}}</span></p>
					<p class="pro-tip" v-if="list.status==3">{{list.tip}}</p>
					<p class="progess-bar" v-else>
						<span><b :style="{width:list.volumePercent+'%'}"></b></span>
						<em>{{list.tip}}</em>
					</p>
					<p class="price">
            <span>¥{{list.salePrice}}</span>
            <em>¥</em>{{list.memberPrice}}<img src="~images/vip-redicon.png" alt="">
						<a href="javascript:;" class="black-btn" v-if="list.status==3">即将开抢</a>
						<a href="javascript:;" class="gray-btn" v-else-if="list.status==4">抢光了</a>
						<a href="javascript:;" class="red-btn" v-else>马上抢</a>
					</p>
				</div>
      </li>
    </ul>
	</div>
</template>

<script>
import secKillNav from './secKillNav'
import api from '@/api/shop-home'
export default {
  data () {
    return {
      topData: '',
      listData: '',
      currentInfo: '',
      isMember: 0,
      fixedTop: 0,
      endSeconds: 0,
      showIndex: 0
    }
  },
  props: {
    isScroll: '',
    seckilldata: '',
    isFixed: ''
  },
  components: {
    secKillNav
  },
  computed: {
    showMod () {
      let n = 0
      this.topData.playList.findIndex((value, index, arr) => {
        if (value.id == this.topData.nowId) {
          n = index
        }
      })
      return n
    },
    paddingTop () {
      let top = 0
      if (this.isFixed) {
        top = this.$refs.seckill.$refs.seckillSwiper.clientHeight
      }
      return top
    },
    listArr () {
      let arr = []
      this.topData.playList.forEach((element, i) => {
        arr.push('')
      })
      return arr
    }
  },
  watch: {
    endSeconds () {
      this.coundDown(this.endSeconds)
    }
  },
  methods: {
    getServiceData () {
      api.getHot().then(data => {
        this.topData = data.data
        this.endSeconds = this.topData.second
        this.getListData()
      })
    },
    getNavIndex (index) {
      this.barFun(index)
    },
    getListData () {
      let data = {
        id: this.currentInfo.id,
        startTime: this.currentInfo.startTime
      }
      api.getHotList(data).then(data => {
        if (data.status == 1) {
          this.isMember = data.data.isMember
          this.listData = data.data
          this.listArr[this.showIndex] = data.data
        }
      })
    },
    clickTurn (id) {
      this.$router.push({ path:`/product/detail?saleGoodsId=${id}` })
    },
    barFun (index) {
      this.showIndex = index
      this.currentInfo = this.topData.playList[index]
      if (!this.listArr[index]) {
        this.getListData()
      } else {
        this.listData = this.listArr[index]
      }
      if (this.isFixed) {
        let top = this.$refs.proList.offsetTop - this.fixedTop
        window.scrollTo(0, top)
      }
    },
    coundDown (s) {
      if(!s) return false
      let _timer = setInterval(() => {
        s--
        if (s <= 0) {
          clearInterval(_timer)
          this.getServiceData()
        }
      }, 1000)
    }
  },
  mounted () {
    this.currentInfo = this.topData.playList[this.showMod]
    this.getListData()
    const _nav = document.querySelector('.home-nav')
    const _navBoxH = _nav ? _nav.offsetHeight : 0
    const _top = this.$parent.$refs.topBox.clientHeight
    this.fixedTop = _navBoxH
  },
  created () {
    this.topData = this.seckilldata
    this.endSeconds = this.topData.second
    //this.endSeconds = 10
  }
}
</script>
