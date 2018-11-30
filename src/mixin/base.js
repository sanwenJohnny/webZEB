import { Dlg } from '@/assets/dialog/fm.dialog.min.js'
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    mixShowDlg (content) {
      Dlg.msg({
        content: content,
        msgType: 'inverse'
      })
    }
  }
}
