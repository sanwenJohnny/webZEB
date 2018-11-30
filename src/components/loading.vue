<template>
<div class="loading">
  <img :src="loadImg" class="loadingImg">
</div>
</template>

<script>
export default {
  data: function () {
    return {
      loadImg: require('@/assets/image/loading.png')
    }
  },
  methods: {
  }
}
</script>
<style>
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<style lang="less" scoped>
.loading {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    .loadingImg {
        display: inline-block;
        width: 36px;
        height: 36px;
        margin: auto;
        -webkit-animation: rotation 1s infinite linear;
        animation: rotation 1s infinite linear;
    }
}
</style>
