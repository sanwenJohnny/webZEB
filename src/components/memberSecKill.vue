<style lang="less" scoped>
.hot-title{
	 margin:0 0 20px 15px;
   font-size:18px;
   color:#fff;
   font-weight:bold;
}
.fixed{
	position:fixed;
}
.info-list {
  
	color:#000;
  li{
    background: #fff;
		padding:10px;
		margin:0 10px 10px 10px;
		display:flex;
		font-size:12px;
    border-bottom:1px solid #f3f3f3;
    border-radius: 4px;
  }
  .info-tu {
		width:125px;
		height:125px;
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
    font-size: 14px;
	}
	.progess-bar{
		span{
			display:inline-block;
			width:100px;
			height:4px;
			position:relative;
			background:#ebebeb;
			border-radius: 3px;
			b{
				display:block;
				position:absolute;
				top:0;
				left:0;
				width:10%;
				height:4px;
				border-radius: 3px;
				background:#000;
			}
		}
		em{
			font-size:10px;
			color:#666666;
			margin-left:10px;
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
    font-size: 16px;
    color: #000000;
    letter-spacing: 0;
    line-height: 16px;
		em{
			font-size:12px;
		}
		span{
			display:block;
			font-size: 13px;
      color: #B2B2B2;
		}
		img{
			width:22px;
			height:13px;
			vertical-align: middle;
		}
		del{
      color:#c2c2c2;
      font-size: 13px;
      color: #B2B2B2;
      letter-spacing: 0;
      line-height: 13px;
      text-decoration: none;
    }
  
		a{
			position:absolute;
			right:6px;
			bottom:0;
			display:block;
			width:60px;
			height:24px;
			line-height:24px;
			text-align:center;
			font-size:12px;
			border-radius: 1PX;
      color:#fff;
      border-radius: 4px;
		}
		.red-btn{
			background:#000;
		}
		.black-btn{
			
			background:#000;
		}
		.gray-btn{
			background:#ccc;
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
    <ul class="info-list clearfix" v-if="listData.productList" ref="proList">
		<!-- <ul class="info-list clearfix" v-if="listData.data" ref="proList" :style="{paddingTop:paddingTop+'px'}"> -->
      <li v-for="(list,idx) in listData.productList" :key="idx" @click="clickTurn(list.saleGoodsId,list.type)">
        <p class="info-tu" v-lazy:background-image="list.image"></p>
        <!-- <p class="info-tu"  v-bind:style="{backgroundImage:'url(' + list.image + ')'}"></p> -->
				<div class="info-right">
					<p class="info-desc f-14" v-text="list.name"></p>
					<p class="sale-tip">
            <!-- <img src="~/images/home/red-right.png" alt="" v-if="list.tag"> -->
            <span>{{list.tag}}</span>
          </p>
					<p class="pro-tip" v-if="list.status==3">{{list.tip}}</p>
					<p class="progess-bar" v-else>
						<span><b :style="{width:list.volumePercent+'%'}"></b></span>
						<em>{{list.tip}}</em>
					</p>
					<p class="price">
						<!-- <template v-if="isMember">
              <p>
                <em>¥</em>{{list.salePrice}}
                <img src="~/images/home/vip.png" alt="">
              </p>
							<p>
                <span>¥{{list.marketPrice}}</span>
              </p>	
						</template>
						<template v-else>
              <p>
                <del>¥{{list.marketPrice}}</del>
              </p>
							<p>
                <em>¥</em>{{list.salePrice}}
                
              </p>
						</template> -->
						<template>
							<p>
                <span>¥{{list.salePrice}}</span>
              </p>
              <p>
                <em>¥</em>{{list.memberPrice}}
                <img src="~/images/home/vip.png" alt="">
              </p>	
						</template>
            <a href="javascript:;" class="gray-btn" v-if="list.status==4">抢光了</a>
						<a href="javascript:;" class="red-btn" v-else>马上抢</a>
					</p>
				</div>
      </li>
    </ul>
	</div>
</template>

<script>

import api from '@/api/home'
import {Toast} from 'mint-ui'

export default {
  data () {
    return {
    }
  },
  props: {
    listData:{},
    isMember:false
  },
 
  computed: {
    
  },
  watch: {
   
  },
  methods: {
    clickTurn (saleGoodsId,type) {
			if(type && type == 4){
				Toast('请下载app')
			}
      this.$router.push({name: 'productInfo', query: {saleGoodsId: saleGoodsId}})
    },

    
  },
  mounted () {
  },
  created () {
   
  }
}
</script>
