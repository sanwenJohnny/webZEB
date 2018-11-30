
<style scoped>
.picker {
  display: flex;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  text-align: center;
  font-size: 0;
  height: 34px;
}
.picker i {
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 20px;
}
.picker i.disabled {
  color: #858585;
}
input {
  width: 40px;
  height: 32px;
  background: #fff;
  color: #000;
  border: none;
  text-align: center;
  font-size:14px;
}
.minus {
  border-right: 1px solid #d9d9d9;
}
.plus {
  border-left: 1px solid #d9d9d9;
}
</style>
<template>
  <div class="picker">
    <i :class="minusDisabled ? 'minus disabled' : 'minus'" @click="minusHandler">-</i>
    <input type="number" disabled v-model.trim="count">
    <i :class="plusDisabled ? 'plus disabled' : 'plus'" @click="plusHandler">+</i>
  </div>
</template>

<script>
// import { Dlg } from '@/assets/dialog/fm.dialog.min.js'
export default {
  name: 'num-picker',
  data () {
    return {
      minusDisabled: false,
      plusDisabled: false,
      count: 1
    }
  },
  props: ['vl', 'upLimit', 'downLimit', 'callback', 'restriction'],
  mounted () {
    this.count = this.vl
    this.reset()
  },
  methods: {
    minusHandler () {
      if (!this.minusDisabled) {
        this.count--
        this.reset()
      }
    },
    plusHandler () {
      if (!this.plusDisabled) {
        if (this.restriction && this.count >= this.restriction) {
          this.showDlg(`本商品每单限购${this.restriction}件`)
        } else {
          this.count++
          this.reset()
        }
      }
    },
    reset () {
      this.callback(this.count)
      this.minusDisabled = this.count <= this.downLimit
      this.plusDisabled = this.count >= this.upLimit
    },
    showDlg (content) {
      // Dlg.msg({
      //   content: content,
      //   msgType: 'inverse'
      // })
    }
  },
  watch: {
    upLimit: {
      handler (newV, oldV) {
        this.count = this.count > newV ? newV : this.count
        this.reset()
      }
    },
    downLimit: {
      handler (newV, oldV) {
        this.count = this.count < newV ? newV : this.count
        this.reset()
      }
    },
    vl: {
      handler (newV, oldV) {
        this.count = newV
        this.reset()
      }
    }
  }
}
</script>
