<template>
    <div class="certificate-edit-wrapper">
      <!-- 收货人信息 -->
      <div class="panel">
        <p class="top-title">个人信息认证<span>(必填)</span></p>
        <div class="panel-item">
          <!-- <span class="c-ff0">*</span> -->
          <span class="title">姓名:</span>
          <input class="content" :class="{'is-edit':isEdit}" type="text" v-model.trim="name" placeholder="请填写真实姓名" :disabled ="isEdit">
        </div>
        <div class="panel-item">
          <!-- <span class="c-ff0">*</span> -->
          <span class="title">身份证号:</span>
          <input class="content" :class="{'is-edit':isEdit}" type="text" v-model.trim="idCard" placeholder="请填写正确身份证号(将加密保存)" :disabled ="isEdit">
        </div>
      </div>
      <!-- 身份证上传 -->
      <div class="upload-panel">
        <div class="panel rm-tit">
          <div class="upload-title">
            <span>身份证正反面照片</span>
            <span :class="isRequiredImage == 1 ? 'tip red' : 'tip'">({{isRequiredImage == 1?"必填":"选填"}})</span>
          </div>
        </div>
        <div class="card-box">
          <!-- 上传身份证 -->
          <template v-if="isNeedUpload">
            <p class="tip">温馨提示：请上传原始比例的身份证正反面，请勿裁剪涂改，保证身份信息清晰显示，否则无法通过审核</p>
            <div class="card-img_box">
              <div class="upload-item">
                <img class="upload-img" :src="frondCardImg||frond" alt="">
                <input type="file" accept="image/*" @change="uploadImg('upLoadFrond')" ref="upLoadFrond">
                <img v-if="frondCardImg" @click="deletes('upLoadFrond')" class="delete" :src="deleteImg" alt="">
              </div>
              <div class="upload-item">
                <img class="upload-img" :src="reverseCardImg||reverse" alt="">
                <input type="file" accept="image/*" @change="uploadImg('upLoadReverse')" ref="upLoadReverse">
                <img v-if="reverseCardImg" @click="deletes('upLoadReverse')" class="delete" :src="deleteImg" alt="">
              </div>
            </div>
          </template>
          <!-- 已上传身份证 -->
          <template v-else>
            <div class="pass">
              <div class="pass-title">
                <img class="pass-right" :src="passImg"/>
                <span>身份证照片已过审</span>
              </div>
              <div class="pass-info">为了保护您的隐私，无法查看已上传的照片，若要修改，请重新上传</div>
              <div class="reset" @click="isNeedUpload = true">重新上传</div>
            </div>
          </template>
          <div class="info">
            <p class="title">为什么需要上传身份信息？</p>
            <p>订单中包含海外购商品，海关要求必须提供真实姓名和身份证号进行实名认证，且实名人与支付人必须一致，错误信息可能导致无法清关。平台保证您的信息安全，绝不对外泄露！</p>
          </div>
        </div>
      </div>
      <!-- 默认实名认证 -->
      <div class="panel">
        <div class="panel-item justify-brtween">
          <template  v-if="isDefault == 0">
            <div>
              <span class="panel-explain">设置为默认实名人</span>
              <span class="explain-tip">(每次下单时默认使用)</span>
            </div>
            <mt-switch v-model="isSwitchActive" class="switch-button"></mt-switch>
          </template>
          <template v-else>
            <span class="panel-explain1">
              该实名人为当前为默认实名人              
            </span>
          </template>
        </div>
      </div>
      <div class="margin-space"></div>
      <!-- 删除实名人 -->
      <div v-if="pageType" class="delete-btn" @click="deleteUser()">删除</div>
      <!-- 保存 -->
      <div class="save-btn" :class="{ disabled: agreeSave }" @click="submit(agreeSave)">保存</div>
      <loading v-if="false"/>
    </div>
</template>
<script>
import lrz from 'lrz'
import frond from '@/assets/image/frond.png'
import reverse from '@/assets/image/reverse.png'
import deleteImg from '@/assets/image/certificate/delete.png'
import passImg from '@/assets/image/pass.png'
import tools from '@/utils/tools'
import storage from '@/utils/storage-lite'
import loading from '@/components/loading'
import session from '@/utils/session-lite'

import api from '@/api/certificate'
import { MessageBox } from 'mint-ui'

export default {
  name: 'certificateEdit',
  data () {
    return {
      id: '',
      frond,
      reverse,
      deleteImg,
      passImg,
      frondCardImg: '',
      reverseCardImg: '',
      name: '',
      idCard: '',
      isDefault: 0,
      isSwitchActive: false,
      isRequiredImage: 0,
      isNeedUpload: true,
      isEdit: false,
      isRequest: false,
      pageType: 0,  // 页面类型 0 新增 1 是修改
    }
  },
  components: {
    loading
  },
  computed: {
    // 同意保存
    agreeSave(){
      return this.name && this.idCard
    }
  },
  mounted () {
    const name = this.$route.name
    const idCardType = this.$route.query.idCardRequireType

    console.log('----this.$route.query----', this.$route.query)

    // 图片是选填还是必填
    this.isRequiredImage = idCardType > 0 ? idCardType - 1 : 0

    if (name === 'certificateAdd') {
      this.pageType = 0
    } else {
      const {id, name, idCard, isDefault, cardStatus } = JSON.parse(this.$route.query.certificateInfo) || ''
      
      this.pageType = 1
      this.isEdit = true
      
      this.id = id      
      this.name = name
      this.idCard = idCard
      this.cardStatus = cardStatus
      this.isDefault = isDefault
      this.isSwitchActive = isDefault > 0
      if (cardStatus === '2') this.isNeedUpload = false
    }
  },
  methods: {
    /**
     * 身份证上传
     */
    uploadImg (type) {
      let self = this
      const _file = this.$refs[type].files[0]
      if (!_file) return
      lrz(_file, { width: 640 })
        .then((res) => {
          // 处理成功会执行
          console.log(res)
          if (type === 'upLoadFrond') {
            self.frondCardImg = res.base64
          } else {
            self.reverseCardImg = res.base64
          }
        })
    },
    /**
     * 身份证删除
     */
    deletes (type) {
      console.log(type)
      let self = this
      this.$refs[type].value = ''
      if (type === 'upLoadFrond') {
        self.frondCardImg = ''
      } else {
        self.reverseCardImg = ''
      }
    },
    async rmHandle (type) { // type 0：新增 1：修改 2：删除
      // if (this.isRequest) return
      // this.isRequest = true

      let params = {
        type,
        id: this.id,
        name: this.name,
        idCard: this.idCard,
        positiveUrl: this.frondCardImg != '' ? this.frondCardImg.split(',')[1] : '',
        otherSideUrl: this.reverseCardImg != '' ? this.reverseCardImg.split(',')[1] : '',
        isDefault: this.isSwitchActive ? '1' : '0',
        isRequiredImage: this.isRequiredImage
      }

      const res = await api.editCertificate(params)
      if (res) {
        const { status, data, message } = res      
        if (status == 1) {
          if(type == 2) {
            this.$toast("删除成功!")
            session.set('idCardVerifyId', '')
          }else {
            this.$toast("保存成功!")
            session.set('idCardVerifyId', this.id)
          }
          setTimeout(()=> {
            this.$router.back(-1)
          },500)
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败!')
      }

    },
    /**
     * 删除改实名人
     */
    deleteUser () {
      let self = this
      MessageBox.confirm("", {
        title: "",
        message: "确定要删除实名信息吗？",
        showCancelButton: true,
        showConfirmButton: true,        
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
      .then(action => {
        if (action == "confirm") {
          self.rmHandle(2)
        }
      })
      .catch(err => {
        if (err == "cancel") {
          
        }
      });

    },
    /**
     * 保存提交表单
     */
    submit (bool) {

      if (!bool) return

      if (!this.isEdit) { // 可编辑状态前端校验
        if (!this.name) {
          this.$toast('请输入真实姓名~')
          return false
        }
        if(this.idCard == '' || (this.idCard.length != 15 && this.idCard.length != 18)) {
          this.$toast('请输入正确的身份证号')
          return false
        }
      }
      if (this.isNeedUpload && this.isRequiredImage == 1 && this.frondCardImg == '' && this.reverseCardImg == '') {
        this.$toast('请将正反两面身份证照片上传完整')
        return false
      }
      if (this.frondCardImg != '' || this.reverseCardImg != '') {
        if (this.frondCardImg == '') {
          this.$toast('请将正反两面身份证照片上传完整')
          return false
        }
        if (this.reverseCardImg == '') {
          this.$toast('请将正反两面身份证照片上传完整')
          return false
        }
      }
      const type = this.id ? 1 : 0  // 1是修改0新增
      this.rmHandle(type)
    }
  }
}
</script>
<style lang="less" scoped>
.justify-brtween{
  justify-content: space-between;
}
.clearfix:after {
  content: '';
  display: block;
  clear: both;
}
.right {
  float: right;
}
.certificate-edit-wrapper{
  padding: 15px 15px 50px 15px;
  .panel{
    padding: 0 10px;
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 4px;
    .top-title {
      height: 22px;
      line-height: 22px;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #1A1A1A;
      letter-spacing: 0;
      text-align: center;
      padding-top: 30px;
      padding-bottom: 10px;
      span {
        display: inline;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #F1002D;
        letter-spacing: 0;
      }
    }
    .panel-item{
      display: flex;
      align-items: center;
      border-bottom: 1px solid #F6F6F6;
      height: 48px;

      .panel-explain {
        font-size: 14px;
        color: #000;
        width: 116px;
      }
      .panel-explain1 {
        font-size: 14px;
        color: #000;
      }
      .explain-tip {
        font-size: 10px;
        color: #858585
      }
      &:last-child{
        border-bottom: none
      }
      .c-ff0{
        color: #ff0000;
        width: 15px;
      }
      .title{
        width: 80px;
        font-size: 16px;
        color: #1A1A1A;
      }
      .content{
        flex: 1;
        border: none;
        font-size: 16px;
      }
      .is-edit {
        color: #999;
      }
      .tip{
        font-size: 12px;
        color: #858585
      }
      .red {
        color: #F1002D;
      }
    }
    input::-webkit-input-placeholder {
      font-size: 14px;
      color: #CCC
    }
  }
  .margin-space {
    margin-top: 20px;
  }
  .upload-panel{
    margin-bottom: 10px;
    border-radius: 4px;
    .upload-title {
      height: 22px;
      line-height: 22px;
      text-align: center;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #1A1A1A;
      letter-spacing: 0;
      padding-top: 30px;
      padding-bottom: 30px;
      .tip {
        color: #858585;       
        font-family: PingFangSC-Regular;         
      }
      .red {
        font-family: PingFangSC-Regular;
        color: #F1002D;
      }
      span {
        display: inline;
      }
    }
    .card-box{
      background-color: #fff;
      padding-bottom: 15px;
      .tip{
        color: #858585;
        font-size: 12px;
        line-height: 16px;
        padding:0 10px;
      }
      .card-img_box{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        padding: 0 10px;

        .upload-item{
          position: relative;
          width: 158px;
          height: 98px;
          text-align: center;
          border-radius: 8px;
          .upload-img{
            width: 100%;
            height: 100%;
            border-radius: 8px;            
          }
          .delete{
            position: absolute;
            right: -4px;
            top: -6px;
            width: 20px;
            height: 20px;
          }
          input{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
      }
      .info{
        background: #FAFAFA;
        color: #858585;
        font-size: 12px;
        padding: 12px;
        margin: 0 10px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999;
        letter-spacing: 0;
        border-radius: 4px;
        .title{
          margin-bottom: 8px;
        }
        p{
          line-height: 17px;
        }
      }
      .pass{
        width: 240px;
        margin: 0 auto;
        text-align: center;
        height: 140px;
        box-sizing: border-box;

        .pass-title{
          .pass-right{
            width: 24px;
            height: 24px;
          }
          span{
            font-size: 18px;
             vertical-align: middle
          }
        }
        .pass-info{
          font-size: 14px;
          color: #858585;line-height: 18px;
          margin: 12px 15px;
        }
        .reset{
          display: inline-block;
          padding: 2px 8px;
          font-size: 12px;
          border: 1px solid #000;
        }
      }
    }
  }
  .rm-tit {
    margin-bottom: 0;
  }
}
</style>
