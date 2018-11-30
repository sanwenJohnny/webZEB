<template>
  <div class="app" id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import api from '@/api/share'
import auth from '@/utils/auth'
import wxshare from '@/utils/brandShare'
export default {
  name: 'app',

  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  watch: {
      '$route' (to, from) {
        if (!auth.isLoggedIn()) return false
        //console.log(this.$route.meta)
        let metaType = this.$route.meta.shareType
        const _link = encodeURIComponent(location.href)
        const _name = this.$route.name
        let _id = 0
        let _type = metaType ? metaType : 9 //这个type值根据app分享定义，0（被占用，代表动态分享） h5设置9(首页分享)为默认值 
        switch (_type){
          case 1: //详情
          _id = this.$route.query.saleGoodsId
          break
          case 2: //组合
          //case 40: //红包
          case 4: //品牌
          case 11: //二级分类
          _id = this.$route.query.id
          break
          case 0:
          case 20: //发现话题
          _id = this.$route.query.did 
          case 5: //发现个人主页
          _id = this.$route.query.authorAccountId
          break
        }
        // switch (_name) {
        //   case 'index':// 首页   分享内容跟首页一样都是type=9
        //   case 'search':
        //   case 'recommend':
        //     _type = 9
        //     break
        //   case 'productDetail':// 详情
        //     _type = 1
        //     break
        //   case 'zuhe':// 组合
        //     _type = 2
        //     break
        //   case 'redPacket':// 自定义
        //   case 'redPacket-prizeRecord':// 自定义
        //   case 'redPacket-rank':// 自定义
        //   case 'redPacket-rule':// 自定义
        //     _type = 3
        //     break
        //   case 'quizzesIndex':// cms
        //   case 'quizzesMain':// cms
        //     _type = 200
        //     break
        //   case 'smBd':// 分类--品牌
        //     _type = 4
        //     break
        //   case 'smFl':// 分类
        //     _type = 10
        //     break
        //   case 'smSc':// 二级分类
        //     _type = 11
        //     break;
        // }
        let data = {
          link: _link,
          type: _type,
          id: _id ? _id : 0
        }
        api.getJssdk(data).then((data) => {
          wxshare.brandShareFun(data.data)
          // try {
          //   // 微信分享
          //   // alert(JSON.stringify(data))
          //   if (_type == 200) {
          //     var accountId = data.jsSdk ? data.jsSdk.indexUrl.split('?')[1].split('&')[0].split('=')[1] : ''
          //     brandShareFun(data.jsSdk, {
          //       sharePath: 'https://m.51bushou.com/cms/index.html?APPOS=1&gpm=0&cId=3351&caId=2875&accountid=' + accountId,
          //       cb: function () {
          //         if (_name == 'quizzesIndex') {
          //           location.reload()
          //         } else if (_name == 'quizzesMain') {
          //           location.replace('/h5/activity/quizzes/index')
          //         }
          //       }
          //     })
          //   } else {
          //     brandShareFun(data.jsSdk)
          //   }
          // } catch (err) {}
        })
      }
  }
};
</script>
<style>
#app {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
