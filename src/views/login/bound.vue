<style lang="less" scoped>
input::-webkit-input-placeholder{
  color:#ccc;
}
.login {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#fff;
  color: #000;
}
.title {
  margin: 24px 0;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
ul {
  margin-top:32px;
  padding: 0 20px;
  text-align: center;
}
li {
  width: 100%;
  height: 50px;
  background:#f5f5f5;
  position: relative;
  text-align: left;
  margin-bottom: 12px;
  border-radius: 4px;
  color:#1a1a1a;
}
input {
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 72px;
  padding-right: 12px;
  box-sizing: border-box;
  font-size: 16px;
  background:none;
  color:#1a1a1a;
}
.tel-state {
  position: absolute;
  z-index: 5;
  left: 12px;
  top: 33%;
  width: 60px;
  font-size:15px;
}
.tel-state:after {
  content: "";
  display: inline-block;
  border: 3.6px solid transparent;
  border-top-color: #000;
  margin-left: 3.6px;
}
.yzm-span {
  width: 65%;
  height: 100%;
  position: relative;
}
.yzm-input {
  width: 70%;
  padding-left: 12px;
}
.yzm-i {
  width: 35%;
  box-sizing: border-box;
  border-left: 1px solid #000;
  height: 20px;
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  font-size:15px;
}
.submit {
  height: 50px;
  line-height: 50px;
  margin-top:20px;
  background: #1a1a1a;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
}
.voice {
  height: inherit;
  border: none;
  margin-bottom: 36px;
  background:none;
}
.voice-btn {
  text-decoration: underline;
}
</style>
<template>
  <div class="login">
    <h2 class="title">绑定手机号</h2>
    <ul>
      <li>
        <i class="tel-state" @click="goSelector">+{{addrNo}}</i>
        <input type="tel" name="" placeholder="请输入手机号" v-model.trim="phoneNum">
      </li>
      <li>
        <span class="yzm-span">
          <input type="" name="" placeholder="请输入验证码" class="yzm-input" v-model.trim="valiCode">
        </span>
        <i class="yzm-i" @click="getValiCode(1)" v-text="codeTxt"></i>
      </li>
      <li class="voice" v-if="showVoice">
          收不到短信，试试<i class="voice-btn" @click="getValiCode(2)">语音验证码</i>
      </li>
      <p class="submit" @click="login">确认</p>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import storage from '@/utils/storage-lite'
import session from '@/utils/session-lite'
import api from '@/api/login'
import { Toast } from 'mint-ui'

export default {
  name: 'bound',
  data () {
    return {
      isState: 0,
      phoneNum: '',
      valiCode: '',
      telNo: '86',
      codeTxt: '获取验证码',
      showVoice: false,
      voiceDisable: true,
      voiceCounter: 60,
      redirectUrl: this.$route.query.redirect_url
    }
  },
  computed: {
    ...mapState('login', ['addrNo']),
    ...mapGetters('login', ['addrList', 'isHideSea'])
  },
  mounted () {
    if (!this.addrList) {
      this.getAddress()
    }
  },
  methods: {
    ...mapActions('login', ['getAddress']),
    login () {
      if (!this.phoneNum) {
        this.showDlg('请填写手机号')
        return false
      }
      if (!this.valiCode) {
        this.showDlg('请填写验证码')
        return false
      }
      const _accountId = session.get('accountId') || 0
      let opts = {
        mobileNumber: this.phoneNum,
        code: this.valiCode,
        countryCode: this.addrNo,
        referrerId: _accountId
      }
      api.bindingMobile(opts).then(res => {
        if (res.status === 1) {
          storage.set('authData', res.data)
          window.location.href = this.redirectUrl || '/'
        } else {
          this.showDlg(res.message)
          // if (res.code === 3090320003) {
          //   storage.set('authData', res.data)
          //   // 绑定推荐人
          //   this.$router.push(
          //     {
          //       path: '/login/introducer?redirect_url=' + this.redirectUrl
          //     }
          //   )
          // }
        }
      })
    },

    getValiCode (type) {
      if (!this.phoneNum) {
        this.showDlg('请填写手机号')
        return false
      }
      // type 1 短信，2语音
      if (type == 2 && !this.voiceDisable) {
        this.showDlg('请等候' + this.voiceCounter + 's后重试')
      }
      let opts = {
        mobileNumber: this.phoneNum,
        countryCode: this.addrNo,
        channelType: type
      }
      api.sendCode(opts).then(data => {
        // if (data.status == 0 && data.msg) {
        //   this.showDlg(data.msg)
        // } else
        if (data.status == 1) {
          if (type == 2) {
            this.voiceDisable = false
            this.timeCount(
              this.voiceCounter,
              counter => {
                // 60秒内禁止发送语音
                this.voiceCounter = counter
              },
              () => {
                this.voiceDisable = true
                this.voiceCounter = 60
              }
            )
          } else {
            this.timeCount(
              60,
              counter => {
                // 发送短信倒计时
                this.codeTxt = counter + 's'
              },
              () => {
                this.codeTxt = '重发'
              }
            )

            this.timeCount(
              15,
              counter => {
                // 15秒后打开发送语音
              },
              () => {
                this.showVoice = true
              }
            )
          }
        }
      })
    },

    goSelector () {
      this.$router.push('/login/selector')
    },
    timeCount (counter, fn, done) {
      let timer = setInterval(() => {
        counter--
        if (counter == 0) {
          clearInterval(timer)
          done.call(this)
        } else {
          fn.call(this, counter)
        }
      }, 1000)
    },
    showDlg (content) {
      Toast({
        message: content,
        position: 'center',
        duration: 3000
      })
    }
  }
}
</script>
