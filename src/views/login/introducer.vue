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
.col-888 {
  color: #888;
}
.col-000 {
  color: #000;
}
ul {
  margin-top:32px;
  padding: 0 20px;
  text-align: center;
}
li {
  position: relative;
  width: 100%;
  height: 50px;
  margin-bottom: 12px;
  //border: 1px solid #000;
  background:#f5f5f5;
  text-align: left;
  border-radius: 4px;
}
input {
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 72px;
  padding-right: 12px;
  box-sizing: border-box;
  font-size: 15px;
  background:none;
}
.login-tel {
  padding-left: 12px;
}
.submit {
  height: 50px;
  line-height: 50px;
  margin-top: 60px;
  background: #1a1a1a;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
}
.mask-full2 {
  position: fixed;
  z-index: 98;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
.login-reminder,
.login-reminder2 {
  position: fixed;
  z-index: 9;
  left: 50%;
  top: 50%;
  width: 80%;
  -webkit-transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 6px;
  text-align:center;
}
.reminder-info,
.reminder-info2 {
  padding: 24px 12px;
  font-size: 16px;
}
.tAvatar {
  width: 60px;
  height: 60px;
  margin-right: 6px;
  border-radius: 50%;
  background: url(https://yangege.b0.upaiyun.com/1794a971b4043.png) no-repeat
    center;
  background-size: cover;
  vertical-align: middle;
}
.reminder-btn,
.reminder-btn2 {
  font-size: 0;
  border-top: 1px solid #ccc;
}
.reminder-btn i,
.reminder-btn2 i {
  width: 50%;
  height: 48px;
  line-height: 48px;
  box-sizing: border-box;
  font-size: 14px;
}
.reminder-btn2 i + i {
  border-left: 1px solid #ccc;
}
.mt-20 {
  margin-top: 24px;
}
.clear-val {
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  background: url("~images/clear.png") no-repeat center;
  background-size: 15px auto;
}
</style>
<template>
  <div class="login">
    <!-- <h2 class="title">请输入推荐人ID</h2> -->
    <ul>
      <li>
        <input type="tel" v-model.number="tAccountId" placeholder="请输入推荐人ID" class="login-tel">
        <i class="clear-val" @click="clear(1)" v-if="tAccountId.toString().length > 0"></i>
      </li>
      <p class="submit" @click="setIntroducer" v-if="tAccountId==''">绑定</p>
      <p class="submit" @click="getUser" v-else>绑定</p>
    </ul>

    <div class="mask-full2" v-if="isShow">
        <div class="login-reminder">
            <p class="reminder-info2 f-16 col-888">您的推荐人</p>
            <p>
                <i class="tAvatar" v-lazy:background-image="userInfo.headImageUrl"></i>
                {{userInfo.nickname}}
            </p>
            <p class="reminder-btn2 col-888 mt-20">
                <i class="cancle" @click="isShow = false">取消</i>
                <i class="col-000 reminder-true" @click="setIntroducer(),isShow = false">确定</i>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import storage from '@/utils/storage-lite'
import session from '@/utils/session-lite'
import api from '@/api/login'

export default {
  name: 'introducer',
  data () {
    return {
      tAccountId: session.get('accountId') || '',
      isShow: false,
      redirectUrl: this.$route.query.redirect_url
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])
  },
  mounted () {
    // console.log('params:', this.$route.query.redirect_url)
  },
  methods: {
    ...mapActions('login', ['getUserInfo']),
    setIntroducer () {
      let opts = { recommenderId: this.tAccountId }
      api.recommender(opts).then(res => {
        if (res.status === 1) {
          storage.set('authData', res.data)
          window.location.href = this.redirectUrl || '/'
        }
      })
    },
    getUser () {
      let opts = { accountId: this.tAccountId }
      this.getUserInfo(opts).then(data => {
        if (data.status == 1) {
          this.isShow = true
        }
      })
    },
    clear (type) {
      if (type === 1) {
        this.tAccountId = ''
      }
    }
  },
  watch: {
    tAccountId: function (val, oldVal) {
      let _telLen = val.toString()

      if (_telLen.length > 10) {
        this.tAccountId = _telLen.substring(0, 10)
      }
    }
  }
}
</script>
