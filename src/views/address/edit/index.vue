<style lang="less" scoped>
.address-edit-wrapper {
  .field-wrapper {
    background: #FFF;
  }
  .switch-container {
    background: #FFF;
    padding: 10px 15px;
    margin-top: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    .switch-left {
      float: left;
      height: 32px;
      line-height: 32px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #1A1A1A;
      letter-spacing: 0;
      span {
        display: inline;
      }
      .desc {
        font-size: 10px;
        color: #999999;
      }
    }
    .switch-button {
      float: right;
      height: 32px;
    }
  }
}
</style>
<style lang="less">
.address-edit-wrapper {
  .mint-switch-input:checked + .mint-switch-core {
    border-color: #000;
    background: #000;
  }
  .mint-cell-title {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #1A1A1A;
    letter-spacing: 0;
  }
  .mint-cell-wrapper {
    background-image: none;
    padding: 0;
    margin: 0 15px;
    border-bottom: 1px solid #F6F6F6;
  }
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #CCCCCC;
    letter-spacing: 0;
  }
  input {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #1A1A1A;
    letter-spacing: 0;
  }
  textarea {
    resize:none;
    box-sizing: border-box;
    padding-top: 10px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #1A1A1A;
    letter-spacing: 0;
  }
  .address-detail {
    .mint-cell-text {
      margin-top: -15px;
    }
  }
  .address-info {
    input {
      display: none;
    }
    .mint-field-other {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #1A1A1A;
      letter-spacing: 0;
      line-height: 20px;
    }
  }
}
</style>
<template>
  <div class="address-edit-wrapper">
    <div class="field-wrapper">
      <mt-field label="收货人:" placeholder="请使用真实姓名" v-model="receiver"></mt-field>
      <mt-field label="手机号码:" type="number" v-model="phone" placeholder="请输入手机号"></mt-field>
      <div class="address-info" @click="showAddrSel">
        <mt-field label="所在地区:">{{addressInfo}}</mt-field>
      </div>
      <mt-field label="详细地址:" type="textarea" v-model="addressDetail" placeholder="请输入详细地址" class="address-detail"></mt-field>
    </div>
    <div class="switch-container" v-if="!setDefault">
      <p class="switch-left"><span class="content">设置为默认地址</span><span class="desc">（每次下单时默认使用）</span></p>
      <mt-switch v-model="isDefault" @change="setDefaultHandler" class="switch-button"></mt-switch>
    </div>
    <div class="switch-container" v-else>
      <p class="switch-left">该地址为当前默认地址</p>
    </div>
    <div class="delete-btn" @click="confirmDelete" v-if="pageType">删除</div>
    <div class="save-btn" :class="{ disabled: agreeSave }" @click="saveHandler(agreeSave)">保存</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import api from '@/api/address'
import session from '@/utils/session-lite'
import LArea from '@/utils/LArea'
import { MessageBox } from 'mint-ui'


export default {
  name: 'addressEdit',
  data () {
    return {
      id:'', // 地址id
      area: undefined,
      receiver: '',
      phone: '',
      addressInfo: '--请选择--',
      addressDetail: '',
      isDefault: false,
      setDefault: false,
      city: '',
      district: '',
      province: '',
      pageType: 0,  // 页面类型 0 新增 1 是修改
    }
  },
  computed: {
    ...mapState('product', ['areaInfo']),

    // 同意保存
    agreeSave(){
      return this.city && this.receiver && this.phone && this.addressDetail
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
        this.city = data.city
        this.provice = data.provice
        this.district = data.district
        this.addressInfo = data.provinceName + data.cityName + data.districtName
      }
    })
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    // 获取修改信息 区分是新增还是修改
    getInfo(){
      const name = this.$route.name
      if (name === 'addressAdd') {
        this.pageType = 0
      } else {
        const {
          id, city, province, district, fullName, mobileNumber, provinceName, cityName, districtName, detailAddress, isDefault
        } = JSON.parse(this.$route.query.addressInfo) || ''

        this.id = id
        this.city = city
        this.provice = province
        this.district = district
        this.receiver = fullName
        this.phone = mobileNumber
        this.addressInfo = provinceName + cityName + districtName
        this.addressDetail = detailAddress
        this.isDefault = isDefault?true:false
        this.setDefault = isDefault?true:false

        this.pageType = 1
      }
    },
    showAddrSel () {
      // this.close()
      this.area.showArea()
    },

    // 确定删除
    confirmDelete() {
      let self = this
      MessageBox.confirm("", {
        title: "",
        message: "确定删除该地址？",
        showCancelButton: true,
        showConfirmButton: true,        
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
      .then(action => {
        if (action == "confirm") {
          self.deleteHandler()
        }
      })
      .catch(err => {
        if (err == "cancel") {
          
        }
      });

    },

    // 删除地址
    async deleteHandler () {
      let params = {
        addressId: this.id,
      }
      const res = await api.removeAddress(params)        

      if (res) {
        const { status, data, message } = res
        if (status == 1) {
          if (data) {
            this.$toast("删除成功!")
            session.set('addressId', '')            
            // 返回上一页
            setTimeout(()=> {
              this.$router.back(-1)
            },500)
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },

    // 保存地址
    async saveHandler (bool) {
      let params = {
        fullName: this.receiver,
        mobileNumber: this.phone,
        detailAddress: this.addressDetail,
        province: this.provice,
        city: this.city,
        district: this.district,        
        isDefault: this.isDefault?1:0,
        id: this.pageType?this.id:0
      }

      if(!bool) return

      const res = await api.editAddress(params)
      if (res) {
        const { status, data, message } = res
        if (status == 1) {
          if (data) {
            if (data.id) {
              session.set('addressId', data.id)
              this.$toast('保存成功!')              
            }

            // 返回上一页
            setTimeout(()=> {
              this.$router.back(-1)
            },500)
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }
    },

    // 设置默认
    setDefaultHandler () {
      console.log('选项为', this.isDefault)
    }
  }
}
</script>

