<style lang="less" scoped>
.hot-title{
	 margin:0 0 20px 15px;
   font-size:18px;
   color:#1A1A1A;
   font-weight:bold;
}
.fixed{
	position:fixed;
}
.info-list {
	color:#000;
  li{
    // width:109px;
		// height:190px;
		padding:16px 0;
		margin:0 10px;
		display:flex;
		font-size:12px;
		border-bottom:1px solid #f3f3f3;
  }
  .info-tu {
		width:120px;
		height:120px;
    margin-bottom:2px;
    background-size:cover;
	}
	.info-right{
		position:relative;
		width:60%;
		height:120px;
		flex:1;
		margin-left:10px;
	}
  .info-desc {
		min-height: 40px;
		overflow: hidden;
		display:-webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
    margin-bottom:2px;
	}
	.progess-bar{
		span{
			display:inline-block;
			width:80px;
			height:6px;
			position:relative;
			background:#ebebeb;
			border-radius: 3px;
			b{
				display:block;
				position:absolute;
				top:0;
				left:0;
				width:10%;
				height:6px;
				border-radius: 3px;
				background:#f1002d;
			}
		}
		em{
			font-size:12px;
			color:#858585;
		}
	}
	.sale-tip{
		margin:2px 0;
		display:flex;
		height:22px;
		align-items: center;
		img{
			width:16px;
		}
		span{
			width:80%;
			margin-left:2px;
			font-size:15px;
			font-weight:bold;
			overflow:hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
	}
	.price{
		position:absolute;
		bottom:0;
		width:100%;
		margin-top:10px;
		line-height:1;
		color:#f1002d;
		font-size:18px;
		em{
			font-size:12px;
		}
		span{
			display:block;
			font-size:12px;
			color:#000;
		}
		img{
			width:32px;
		}
		del{
			margin-left:5px;
			font-size:14px;
			color:#c2c2c2;
		}
		a{
			position:absolute;
			right:6px;
			bottom:0;
			display:block;
			width:48px;
			height:22px;
			line-height:22px;
			text-align:center;
			font-size:12px;
			border-radius: 1PX;
			color:#fff;
		}
		.red-btn{
			background:#f1002d;
		}
		.black-btn{
			width:68px;
			background:#000;
		}
		.gray-btn{
			background:#909090;
		}
	}
  .member-price {
    &::before {
      content: '';
      display: inline-block;
      width: 25px;
      height: 12px;
      margin-right: 3px;
      background: url("~/images/home/vip-icon.png") no-repeat;
      background-size: contain;
      vertical-align: middle;
    }
	}
	.pro-tip{
		color:#858585;
	}
}
</style>

<template>
	<div class="bg-fff">
		<h1 class="hot-title" ref="hotTlt">爆品秒杀</h1>
    <!--秒杀头部导航-->
		<secKillNav :nav-data="topData" 
                :show-mod="showMod" 
                :class="{'fixed':isFixed}" 
                :style="{top:fixedTop+'px'}" 
                ref="seckill" 
                @navindex="getNavIndex">
    </secKillNav>
		<ul class="info-list clearfix" v-if="listData.productList" ref="proList" :style="{paddingTop:paddingTop+'px'}">
      <li v-for="(list,idx) in listData.productList" :key="idx" @click="clickTurn(list.productId)">
        <!-- <p class="info-tu" v-lazy:background-image="list.image"></p> -->
        <p class="info-tu"  v-bind:style="{backgroundImage:'url(' + list.image + ')'}"></p>
				<div class="info-right">
					<p class="info-desc f-14" v-text="list.name"></p>
					<p class="sale-tip"><img src="~/images/home/red-right.png" alt="" v-if="list.tag"><span>{{list.tag}}</span></p>
					<p class="pro-tip" v-if="list.status==3">{{list.tip}}</p>
					<p class="progess-bar" v-else>
						<span><b :style="{width:list.volumePercent+'%'}"></b></span>
						<em>{{list.tip}}</em>
					</p>
					<p class="price">
						<template v-if="isMember == 1">
							<span>¥{{list.marketPrice}}</span>
							<em>¥</em>{{list.salePrice}}<img src="~/images/home/vip-redicon.png" alt="">
						</template>
						<template v-else>
							<em>¥</em>{{list.salePrice}}<del>¥{{list.marketPrice}}</del>
						</template>
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
import api from '@/api/home'
// import config from '@/service/config'
// import request from '@/service/request'
// import service from '@/service/service-home'
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
      api.getHotNav({}).then((data) => {
        this.topData = data
        this.endSeconds = this.topData.second
        this.getListData()
      })
    },
    getNavIndex (index) {
      this.barFun(index)
    },
    getListData () {
      // let conf = new config()
      // conf.url = '/ygg-hqbs/hot/list'
      // conf.data = {
      //   id: this.currentInfo.id,
      //   startTime: this.currentInfo.startTime
      // }
      // new request(conf).POST().then((data) => {
      //   if (data.status == 1) {
      //     this.isMember = data.isMember
      //     this.listData = data
      //     this.listArr[this.showIndex] = data
      //   }
      // })
      let data = {
        id: this.currentInfo.id,
        startTime: this.currentInfo.startTime
      }

      api.getHotList(data).then((res) => {
        
        if (res.status == 1) {
          this.isMember = res.isMember
          this.listData = res
          this.listArr[this.showIndex] = res
        
        }
      })
    },
    clickTurn (id) {
      this.$router.push({name: 'productDetail', params: {id: id}})
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
    const _nav = document.querySelector('.home-nav') ? document.querySelector('.home-nav') :null;
    const _navBoxH = _nav ? _nav.offsetHeight : 0
    if(_nav){
     const _topH = this.$parent.$refs.homeSearch.offsetHeight + _navBoxH - 1
     const _top = this.$parent.$refs.topBox.clientHeight
     this.fixedTop = _topH
    }
  },
  created () {
    this.topData = this.seckilldata
    this.endSeconds = this.topData.second
    // this.endSeconds = 10
  }
}
</script>
