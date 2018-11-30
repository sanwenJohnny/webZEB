export default {
  data () {
    return {
      controllEls: []
    }
  },
  mounted () {
    this.controllEls = [].concat([document.documentElement, document.body, document.querySelector('#app')])
  },
  methods: {
    scrollForbidden () {
      this.controllEls.forEach(ele => {
        ele.style.height = '100%'
        ele.style.overflow = 'hidden'
      })
    },
    scrollLift () {
      this.controllEls.forEach(ele => {
        ele.style.height = ''
        ele.style.overflow = ''
      })
    }
  }
}
