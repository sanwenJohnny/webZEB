
<style lang="less" scoped>
.cont {
  width: 100%;
  max-width: 750px;
  background: #fff;
  position: fixed;
  bottom: 0;
  color: #000;
  z-index: 999;
}
.header {
  width: 100%;
  height: 92px;
  border-bottom: 1px solid #eee;
  line-height: 54px;
  border-bottom: 1px solid #d9d9d9;
  margin-left: 15px;
}
.header img {
  width: 97px;
  height: 97px;
  position: absolute;
  top: -19px;
  left: 15px;
  border:2px solid #f0f0f0;
}
.desc {
  margin-left: 110px;
  line-height: 1;
}
.desc span {
  font-size: 24px;
  color: #ff0000;
  font-weight:bold;
  margin-top: 25px;
  b{
    font-size:14px;
    font-weight:bold;
  }
}
.desc em {
  width: 180px;
  font-size: 14px;
  color: #33383b;
  margin-top: 5px;
}
.close {
  display: inline-block;
  width: 54px;
  height: 54px;
  background: url("~images/product/close.png") no-repeat center;
  background-size: 24%;
  top: 0;
  right: 0;
}
.selection {
  max-height: 300px;
  margin-top:4px;
  overflow-y: auto;
}
ul li {
  margin-left: 15px;
  //border-bottom: 1px solid #d9d9d9;
}
.prop-name {
  font-size: 12px;
  color: #B2B2B2;
  margin: 6px 0;
}
.number {
  display: flex;
  align-items: center;
  height: 65px;
}
.number .title {
  margin-left: 15px;
  color: #B2B2B2;
  font-size: 12px;
}
.num-picker {
  right: 15px;
  top:15px;
}
.submit {
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d9d9d9;
}
.submit p {
  width: 335px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background: #000;
  border-radius: 4px;
}
.submit p i {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("~images/product/chance.png") no-repeat;
  background-size: 100%;
  vertical-align: middle;
  margin-right: 5px;
}
.graybg {
  background: #b2b2b2 !important;
}
</style>
<template>
  <transition name="slide">
    <div class="cont" v-if="showSku&&skuInfo">
      <div class="header">
        <img :src="product.image">
        <div class="desc">
          <span><b>￥</b>{{product.lowPrice}}</span><br>
          <em>已选：{{product.propValueList.join('，')}}</em>
        </div>
        <i class="close abs" @click="close"></i>
      </div>
      <div class="selection">
        <ul v-if="props.length>0">
          <li v-for="(prop, index) in props" :key="index">
            <p class="prop-name">{{prop.name}}</p>
            <div class="props">
              <ElButton :disabled="item.disabled" :selected="item.selected" :callback="btnHandler" :sku-prop="item" v-for="(item, i) in prop.value" :key="i" >{{item.value}}</ElButton>
            </div>
          </li>
        </ul>

        <div class="number rela">
          <span class="title">数量</span>
          <div class="num-picker abs">
            <NumPicker :vl="product.stockCount>0?1:0" :up-limit="product.stockCount" :down-limit="1" :callback="numPickerCallback" :restriction="product.restriction"></NumPicker>
          </div>
        </div>
      </div>
      <div class="submit">
        <p v-if="isLimit&&product.status==1&&type==2" @click="submitClick(5)">确定</p>
        <p v-else-if="product.status==1" @click="submitClick(1)">加入购物车</p>
        <p v-else-if="product.status==2" @click="submitClick(2)"><i></i>还有机会</p>
        <p v-else-if="product.status==3" @click="submitClick(3)">{{collectType=='1'?'取消收藏':'抢先收藏'}}</p>
        <!-- <p v-else-if="product.status==4" @click="submitClick(4)" class="graybg">到货提醒</p> -->
        <p v-else-if="product.status==4" class="graybg">已抢完</p>
      </div>
    </div>
  </transition>
</template>

<script>
import ElButton from './elButton'
import NumPicker from './numPicker'
import { SKUPROPKEY } from '@/utils/constants'
export default {
  name: 'sku-selector',
  data () {
    return {
      buyCount: 1,
      skuCount: 5,
      selectedProps: [],
      props: [],
      selectedKey: '',
      product: undefined
    }
  },
  props: {
    skuInfo: {
      type: Object
    },
    skuMap: {
      type: Map
    },
    showSku: {
      type: Boolean
    },
    cb: {
      type: Object
    },
    collectType: {
      type: String
    },
    isLimit: {
      type: Boolean,
      default: false
    },
    type: {
      type: Number,
      default: 1
    }
  },
  computed: {},
  created () {},
  beforeUpdate () {},
  mounted () {
    this.init()
  },
  watch: {
    skuInfo: {
      handler (newV, oldV) {
        this.props = []
        this.init()
      }
    }
  },
  methods: {
    close () {
      this.cb.closeSku(this.product.saleUnitId)
    },
    submitClick (type) {
      this.cb.submitHandler(type, this.product.saleUnitId, this.buyCount)
    },
    btnHandler (pRank, rank) {
      let prop = this.props[pRank].value[rank]
      this.props[pRank].value.map((item, index) => {
        if (index != rank) {
          item.selected = false
        }
      })

      prop.selected = true
      this.selectedProps[pRank] = prop.value
      if (!this.selectedProps.hasEmpty()) {
        this.selectedKey = this.selectedProps.join(SKUPROPKEY)
        this.reset()
      }
      this.props.forEach(p => {
        p.value.forEach(pv => {
          if (pv.selected) {
            if (this.product && this.product.stockCount > 0) {
              pv.disabled = false
            } else {
              pv.disabled = true
            }
          }
        })
      })
    },
    numPickerCallback (data) {
      this.buyCount = data
    },
    reset () {
      this.product = this.skuMap.get(this.selectedKey)
      // console.log(this.product, 222)
    },
    init () {
      if (this.skuInfo) {
        this.selectedProps = new Array(this.skuInfo.propList.length)
        const pList = this.skuInfo.productList
        this.skuInfo.propList.map((propArr, pIndex) => {
          let arrItem = { name: propArr.name, value: [] }
          propArr.value.map((item, index) => {
            let nItem = {}
            nItem.id = `id_${pIndex}_${index}`
            nItem.value = item
            nItem.disabled = true
            nItem.selected = false
            nItem.rank = index
            nItem.propRank = pIndex
            nItem.relaList = []
            for (var i = 0; i < pList.length; i++) {
              let pItem = pList[i]
              if (
                pItem.stockCount > 0 &&
                pItem.propValueList.indexOf(item) >= 0
              ) {
                nItem.disabled = false
                for (var j = 0; j < pItem.propValueList.length; j++) {
                  if (j != pIndex) {
                    const prank = this.skuInfo.propList[j].value.indexOf(
                      pItem.propValueList[j]
                    )
                    const propRela = { propRank: j, rank: prank }
                    nItem.relaList.push(propRela)
                  }
                  pItem.propValueList[j]
                }
              }
            }
            arrItem.value.push(nItem)
          })
          this.props.push(arrItem)
        })
        for (var k = 0; k < pList.length; k++) {
          if (pList[k].saleUnitId == this.skuInfo.defaultId) {
            pList[k].propValueList.map((item, prank) => {
              const r = this.skuInfo.propList[prank].value.indexOf(item)
              this.btnHandler(prank, r)
            })
          }
        }
        console.log('this.props:', this.props)
      }
    }
  },
  components: {
    ElButton,
    NumPicker
  }
}
</script>
