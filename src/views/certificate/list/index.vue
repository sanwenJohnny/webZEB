<style lang="less" scoped>
.certificate-list-wrapper {
  padding: 10px 15px;
  .list-box {
    .list-item {
      position: relative;
      height: 76px;
      padding-top: 15px;
      padding-left: 36px;
      background: #FFF;
      margin-bottom: 10px;
      box-sizing: border-box;
      border-radius: 4px;
    }
    .isChoose {
      padding-left: 10px;
    }
    .item-name {
      height: 22px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #1A1A1A;
      letter-spacing: 0;
      margin-bottom: 10px;
      .name-content {
        vertical-align: middle;
        margin-right: 4px;
      }
      .default {
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #F1002D;
        text-align: center;
        padding: 1px 3px;
        background: rgba(241,0,45,0.15);
        border-radius: 1px;
        vertical-align: middle;
      }
    }
    .card-number {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #999999;
      letter-spacing: 0;
      text-align: center;
      line-height: 14px;
      text-align: left;
    }
    .edit-button {
      height: 100%;
      width: 48px;
      position: absolute;
      top: 0;
      right: 0;
      background: url(~images/certificate/icon-edit.png) no-repeat 15px center;
      background-size: 18px 18px;
    }
    .icon-checked {
      height: 100%;
      width: 36px;
      position: absolute;
      top: 0;
      left: 0;
      background: url(~images/certificate/icon-checked.png) no-repeat 10px center;
      background-size: 16px 12px;
    }
  }
  .bottom-box {
    height: 56px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFF;
    box-sizing: border-box;
    padding-top: 17px;
    .bottom-box-inner {
      text-align: center;
    }
    .icon-plus {
      vertical-align: top;
      width: 16px;
      height: 22px;
      background: url(~images/certificate/icon-plus.png) no-repeat center center;
      background-size: 16px 16px;
      margin-right: 4px;
    }
    .plus-content {
      vertical-align: top;
      height: 22px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #1A1A1A;
      letter-spacing: 0;
      text-align: center;
    }
  }
}
</style>
<template>
  <div class="certificate-list-wrapper">
    <ul class="list-box" v-if="certificateList.length>0">
      <li class="list-item" :class="{isChoose: pageType}" v-for="m in certificateList" :key="m.id">
        <div class="content-container" @click="toggleCheckHandler(m.id)">
          <div v-if="!pageType && m.isChecked" class="icon-checked"></div>
          <p class="item-name">
            <span class="name-content">{{m.name}}</span>
            <span class="default" v-if="m.isDefault==1">默认</span>
          </p>
          <p class="card-number">{{m.idCard}}</p>
        </div>
        <router-link class="edit-button" :to="{name:'certificateEdit',query:{idCardRequireType:idCardRequireType, certificateInfo: JSON.stringify(m)}}"></router-link>
      </li>
    </ul>

    <div class="empty" v-else>
      <img src="~images/empty/no-certificate.png" alt="">
      <div class="empty-word">您暂时没有实名认证哦</div>
    </div>
    <router-link class="bottom-box" :to="{name:'certificateAdd',query:{idCardRequireType:idCardRequireType}}">
      <p class="bottom-box-inner">
        <span class="icon-plus"></span>
        <span class="plus-content">新增实名信息</span>
      </p>
    </router-link>
  </div>
</template>
<script>
import api from '@/api/certificate'
import session from '@/utils/session-lite'
import { certificateList } from '@/mock'
export default {
  name: 'certificateList',
  data () {
    return {
      idCardRequireType:'',  // 必选
      certificateList: [],
      pageType: 1,  // 页面类型 1 管理 0 认证
    }
  },
  mounted () {
    const name = this.$route.name
    this.idCardRequireType = this.$route.query.idCardRequireType
    console.log('---idCardRequireType-----', this.idCardRequireType)

    if (name === 'certificateManage') {
      this.pageType = 1
    } else {
      this.pageType = 0
    }
    this.getCertificateList()
  },
  methods: {
    async getCertificateList () {
      const res = await api.getCertificateList()
      // const res = certificateList
      if (res) {
        const { data, status, message } = res
        if (status == 1) {
          if (data) {
            const { realNameList } = data
            // 设置勾选地址状态
            this.checkOne(realNameList)
          }
        } else {
          this.$toast(message)
        }
      } else {
        this.$toast('请求失败！')
      }
    },

    // 设置状态存储
    checkOne (list) {
      let length = list.length;
      let idCardVerifyId = session.get('idCardVerifyId')
      if (length) {
        for (let i = 0; i < length; i++) {
          // 有 取勾选，没 取默认
          if (!idCardVerifyId) {
            if (list[i].isDefault) {
              list[i].isChecked = 1       
              session.set('idCardVerifyId', list[i].id)
            } else {
              list[i].isChecked = 0                                     
            }
          } else {
            if (list[i].id == idCardVerifyId) {
              list[i].isChecked = 1       
            } else {
              list[i].isChecked = 0                                                   
            }
          }
        }
      }
      this.certificateList = list
    },

    // 选择切换后 session要更换掉
    toggleCheckHandler (id) {
      let length = this.certificateList.length;
      if (length) {
        for (let i = 0; i < length; i++) {
          if (this.certificateList[i].id === id ) {
            this.certificateList[i].isChecked = 1        
            session.set('idCardVerifyId', this.certificateList[i].id)      
          } else {
            this.certificateList[i].isChecked = 0                                      
          }
        }
      }

      // 返回上一页
      this.$router.back(-1)  
    }

  }
}
</script>
