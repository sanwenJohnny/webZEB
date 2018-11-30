<style scoped>
.col-888 {
  color: #888;
}
.col-555 {
  color: #555;
}
.right {
  float: right;
}
.login-state {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #fff;
}
.city-title {
  height: 38px;
  line-height: 38px;
  padding: 0 12px;
  background: #f5f5f5;
}
.city-list li {
  margin: 0 36px 0 18px;
  padding: 14px 0;
}
.aside-shortcut {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 9;
  right: 0;
  top: 50%;
  width: 30px;
  height: 75%;
  transform: translate(0, -50%);
  font-weight: bold;
}
.aside-shortcut a {
  flex: 1;
  color: #666;
}
</style>
<template>
  <div class="login-state">
    <p class="city-title" id="anchor-hot">热门地区</p>
    <ul class="city-list">
      <li v-for="hotInfo in hostList" :key="hotInfo.addressCode" @click="stateChoose(hotInfo.addressCode)">
        {{hotInfo.addressName}}
        <i class="col-888 right">+{{hotInfo.addressCode}}</i>
      </li>
    </ul>

    <!-- 城市列表 -->
    <div v-for="(info,index) in stateArr" :key="index">
      <p class="city-title col-555" :id="'anchor'+index">{{info.letter}}</p>
      <ul class="city-list">
        <li v-for="stateInfo in info.list" :key="stateInfo.code" @click="stateChoose(stateInfo.code)">
          {{stateInfo.name}}
          <i class="col-888 right">+{{stateInfo.code}}</i>
        </li>
      </ul>
    </div>

    <p class="aside-shortcut t_c col-000 f-12 fw-b">
      <a href="#anchor-hot" data-id="anchor-hot" @click="count">热</a>
      <a :href="'#anchor'+index" v-for="(info,index) in stateArr" :key="index" :data-id="'anchor'+index" @click="count">{{info.letter}}</a>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'addr-selector',
  data () {
    return {
      pageCount: 1
    }
  },
  computed: {
    ...mapGetters('login', ['stateArr', 'hostList'])
  },
  methods: {
    ...mapActions('login', ['changeAddr']),
    stateChoose (str) {
      this.changeAddr(str)
      this.$router.go(-this.pageCount)
    },
    count () {
      this.pageCount++
    }
  },
  mounted () {}
}
</script>
