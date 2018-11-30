
<style scoped>
button {
  min-width: 60px;
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 0 10px 10px 0;
  border: 1px solid #1a1a1a;
  text-align: center;
  background: #fff;
  color: #1a1a1a;
  font-size: 14px;
}
.disabled {
  border-style: dashed;
  color:#666;
}
.selected {
  height: 32px;
  line-height: 32px;
  background: #F1002D;;
  color: #fff;
  border: 0;
}
.dis-selected {
  background: #b2b2b2;
}
</style>
<template>
  <button :class="{'disabled': disabled, 'selected': selected, 'dis-selected': disabled&&selected}" @click="clickHandler(skuProp.propRank,skuProp.rank)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'el-button',
  data () {
    return {
      status: 1
    }
  },
  props: ['disabled', 'selected', 'skuProp', 'callback'],
  computed: {},
  created () {},
  mounted () {},
  methods: {
    clickHandler (pRank, rank) {
      this.callback(pRank, rank)
    }
  }
}
</script>
