<style lang="less" scoped>
</style>
<template>
  <div class="index-wrapper">
    <Header v-if="false" :customerTitle="customerTitle" />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/header'
import tools from '@/utils/tools'
import { mapState } from 'vuex'

export default {
  name: 'index',
  components: {
    Header
  },
  data () {
    return {
      isWx: tools.isWx
    }
  },
  computed: {
    ...mapState(['customerTitle'])
  }
}
</script>
