<style scoped>
</style>
<template>
  <div>
  </div>
</template>

<script>
import auth from '@/utils/auth'
export default {
  data () {
    return {
      code: this.$route.query.code || ''
    }
  },
  mounted () {
    auth.loginByCode(this.code)
  },
  methods: {}
}
</script>
