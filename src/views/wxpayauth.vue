<style scoped>
</style>
<template>
  <div>
  </div>
</template>

<script>
import storage from '@/utils/storage-lite'
import api from '@/api/order'
export default {
  data () {
    return {
      code: this.$route.query.code || '',
      state: this.$route.query.state || ''
    }
  },
  mounted () {
    this.baseOauth()
  },
  methods: {
    async baseOauth () {
      let data = {
        code: this.code,
        state: this.state
      }
      const res = await api.baseOauth(data)
      if (res) {
        const _redirect = storage.get('PAYREDIRECT')
        storage.remove('PAYREDIRECT')
        location.href = _redirect
        // location.replace(_redirect)
      }
    }
  }
}
</script>
