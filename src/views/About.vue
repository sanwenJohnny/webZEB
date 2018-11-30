<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 @click="getUserInfo">{{userInfo.name}}</h2>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
// import api from '@/api/test'
const { mapGetters, mapActions } = createNamespacedHelpers('test')

export default {
  name: 'about',
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted () {
    // this.test()
  },
  methods: {
    ...mapActions(['getUserInfo'])
    // async test () {
    //   const res = await api.testRequest()
    // }
  }
}
</script>
