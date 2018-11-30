
<style scoped>
.dialog-cont {
  width: 100%;
  height: 412px;
  background: #fff;
  position: fixed;
  bottom: 0;
  color: #000;
  z-index: 999;
}
.header {
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #eee;
  line-height: 54px;
}
.header span {
  margin-left: 156px;
  font-size: 16px;
}
.close {
  float: right;
  width: 54px;
  height: 54px;
  background: url("~images/product/close.png") no-repeat center;
  background-size: 25%;
}
ul {
  padding-top: 8px;
  padding-left: 10px;
}
li {
  display: flex;
  align-items: center;
  height: 38px;
  padding-left: 10px;
  position: relative;
}
.location {
  display: inline-block;
  width: 12px;
  height: 16px;
  background: url("~images/product/addrs.png") no-repeat;
  background-size: 100%;
}
ul li span {
  font-size: 16px;
  margin-left: 6px;
}
.active .check {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url("~images/product/check.png") no-repeat;
  background-size: 100%;
  position: absolute;
  right: 10px;
}
</style>
<template>
  <transition name="slide">
    <div class="dialog-cont" @click.stop v-if="ops.showAddr">
      <div class="header">
        <span>配送信息</span>
        <i class="close" @click="close"></i>
      </div>
      <ul>
        <li :class="{'active': item.selected}" v-for="(item,index) in addressList" :key="index" @click="selectAddr(item)">
          <i class="location"></i>
          <span>{{item.provinceName}}{{item.cityName}}{{item.districtName}}</span>
          <i class="check"></i>
        </li>
        <li @click="showAddrSel" :class="{'active': otherSelected}">
          <i class="location"></i>
          <span>其他区域</span>
          <i class="check"></i>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import LArea from '@/utils/LArea'
export default {
  name: 'addr-dialog',
  data () {
    return {
      area: undefined,
      addressList: this.addrs,
      otherSelected: false
    }
  },
  props: ['ops', 'addrs', 'areaInfo'],
  computed: {},
  watch: {
    addrs: {
      handler (n, o) {
        console.log('n:', n)
        this.addressList = n
        // this.addressList.push({provinceName:'其他区域',})
        for (var i = 0; i < this.addressList.length; i++) {
          if (this.addressList[i].isDefault == '1') {
            this.addressList[i].selected = true
            break
          }
        }
      }
    }
  },
  created () {
    this.area = new LArea()
    this.area.init({
      keys: {
        id: 'code',
        name: 'name'
      },
      type: 2,
      data: [
        this.areaInfo.provsData,
        this.areaInfo.citysData,
        this.areaInfo.distsData
      ],
      done: data => {
        this.otherSelected = true
        for (var i = 0; i < this.addressList.length; i++) {
          this.addressList[i].selected = false
        }
        this.ops.getAddr(data)
        this.close()
      }
    })
  },
  mounted () {},
  methods: {
    close () {
      this.ops.close()
    },
    selectAddr (item) {
      this.otherSelected = false
      for (var i = 0; i < this.addressList.length; i++) {
        this.addressList[i].selected = false
      }
      item.selected = true
      this.ops.getAddr(item)
      this.close()
    },
    showAddrSel () {
      this.close()
      this.area.showArea()
    }
  }
}
</script>
