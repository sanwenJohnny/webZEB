<style lang='less' scoped>
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .intor-bg{
    background-color: #2B1756;
  }
  .intro img{
    margin: 0;
    padding: 0;
    width: 100%;
    border:0 none;
  }
  .pt-45{
    //padding-top:45px;
  }
</style>
<template>
    <div class="pt-45">
        <!-- <topBar :title-name="'工商资质'" ></topBar> -->
        <div>
            <div class="intro intor-bg">
                <img :src="data" v-for="data in imageList" />
            </div>
        </div>
    </div>
</template>
<script>
// import topBar from '@/components/topBar'
import api from '@/api/product'
export default {
  name: 'zizhi',
  data () {
    return {
      imageList: []
    }
  },
  computed: {
  },
  created () {

  },
  mounted () {
    let urlParam = this.$route.query.sellerId
    let data = { sellerId: urlParam }
    api.zizhi(data).then((res) => {
      if (res.status == 1) {
        this.imageList = res.data.imageList
      }
    })
  },
  methods: {
  },
  components: {
    // topBar
  }
}
</script>
