<template>
<div class="box person-box" :class="{'pt-45':isApp,'pt-55':isShowBar}">
    <!-- <div class="app-bar bg-000 col-fff" v-show="isApp">
        <a href="javascript:;" class="pin-back col-fff"></a>
        <b>个人主页</b>
        <i @click="isLogin(),goUrl(shareData)" class="right share-top-tb"></i>
    </div> -->
    <div class="person-mesg" v-if="msgData">
        <span v-lazy:background-image="msgData.image"></span>
        <!-- <img v-lazy="msgData.image" src="../hp/images/imgplace01.png" alt=""> -->
        <p class="nickname">{{msgData.nickname}}</p>
        <p :class="['sign',{'padd-r-40':msgData.isSelf==1}]"><span>{{msgData.desc? msgData.desc : '暂无'}}</span><b @click="showEditWindow()" v-if="msgData.isSelf">编辑</b></p>
        <ul class="person-mesg-list display-flex">
            <li><b>{{msgData.fansNum}}</b><span>被关注</span></li>
            <li><b>{{msgData.likeNum}}</b><span>被赞</span></li>
            <li><b>{{msgData.dynamicNum}}</b><span>动态</span></li>
        </ul>
    <!-- </div>  -->
    </div>
    <fxList :list-data="personList" v-if="personList.length" v-infinite-scroll="scrollFun" infinite-scroll-disabled="isLoad" infinite-scroll-distance="10"></fxList>
    <div class="nodata" v-if="choiceList.eidtList.length==0 && page == 1 && !isLoad">
        <p class="nodata-img"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAC0CAMAAACdQlHaAAABFFBMVEUAAAAAAAAAAACpqakAAAAAAAAAAABkZGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs7OwAAAAQEBCxsbEeHh4AAAAAAAAAAAAAAAD29vbd3d0HBwfKysqTk5M1NTVRUVEAAAAAAAAAAAAAAAAAAAAAAACWlpa0tLR8fHxzc3NxcXFQUFAAAAD///8AAADg4OD7+/u6urrm5ubs7Oz9/f3u7u709PQLCwv29vbo6Ojj4+NFRUUyMjLp6en19fWAgIB0dHQ/Pz+Li4vFxcVlZWU3NzeHh4eCgoJLS0s7Ozv4+Pjw8PChoaEXFxe5ublqampdXV0jIyMGBgYCMRFJAAAANnRSTlMAuszMvwuLv4DF++Tx6fbd1UMV+u3DdTEB7l3Sz8m5JA0F9uTc2sbBv7GjmmtUH+XQwsHAv6RU1xVFAAADJElEQVR42u3a6VIaQRSG4QOiUXBFXLOZfd8TDhhGxahJ3EhQjMv930empYABWYaWLnr6fO9f4MdTzNTXUzWEEEIIIdtiCxujRgADHHVwAmCABwDOWtIdgAEGGGCAAQY4bAADDDDAAAMMMMCDARe+m+3ENvBezmxFgAH2AxhggAEGGGCA/dwH5w3n2QbWKspPSyECGGCAAQYYYIABBlgL7OkUZbDO01IBYIABBhhggAEGGGCAb1b40X8bUQZrBTDAAAMMMMAAAwwwwHY0VHBxcxD1B/7Leo3a89qSBzDAAAPsLviAeZ/5dzZ8WwADDDDAQsGnhUEUIfCAAhhgyeAS8zHz+XbXCg6B/1yDj3Jd2wYYYIABtiSAXQeXqgePfNc8h8DiTloAAwwwwAC3A4+0byXbuY8jIftQUlXWw3TEXGY+3+ja5u3A3RrpyF25z4Yqa5y0zIPvpbhn9oLj7ct0BOdfJtXPQpZi1dluyI6H9g/HO4Gf3GXmTJwNZR34+aT6cIp7Zic41r5MJ/DjF8ycTKhrOhEL1QyrLndCtl8ul7TB+sU6gJ89ZebULDNPzVG4xln1Kxuygk+yB/x5mpkn1DX9IE1mwCc/e1U0Dw6O7/QCM88vLpMG2EAGwdXxnVW35MwSkfPg6vgm5pn52xq5D74e3yk1vpOrRO6DG+Mbf0jugwPjO/aI3Ac3j6/74C/B8TUDLvbTiUmwxvhqgL1coKGetFrH13lw/mt9fF+vkfvgT03jKwCcDIyvCLAaX66OrxBwfXyFgDXGV2+HN/rp1BS47fg6fNJK1MZXCpir4ysJrMZXEtgfX1Fgf3wlgdX4SgIvpkkWmAhggAHuBr5Y1+rQawGetnzhylawbjt7zeBDbsk1MJ/9EwZWbxMLA/NuThiYtypRAq/GtEska6KLzSbwZKw5q8C3aS5VE18eBsET5GrpVzXx1YEnAUz0dro+ydsiwLQ025hkEWAafROYZAlgoneZ+iRXRIDp/QLXkgGm5fGkLLCaZGFgf5KFgdUkCwP7kywM7E+yMLCaZGFgf5KFgdUkywKrSRYGpvQiIYQQQpHqP8KIlWbKrTC7AAAAAElFTkSuQmCC" alt=""></p>
        <p>暂无内容</p>
    </div>
    <p class="load" v-show="isLoad">正在加载中...</p>
    <p class="showall" v-if="!ismore && choiceList.eidtList.length !=0">已显示全部内容</p>
    <div class="mask" v-show="isMask"></div>
    <ul class="dialog-box dialog-box-edit" v-if="isEdit">
        <li class="dialog-info">
            <p>请输入内容</p>
            <p><input type="text"  v-model="editValue"><span class="clean-tx" v-show="editValue" @click="cleanVal()"></span></p>
        </li>
        <li class="dialog-btn">
            <i class="col-888 dialog-cancel" @click="cancle()">取消</i>
            <i class="dialog-turn" @click="saveEdit(editValue)">保存</i>
        </li>
    </ul>
    <div class="bottom-bar" v-show="isShowBar" @click="getConcern(0,authorAccountId)" v-if="msgData&&msgData.subscribe==0">
        <b></b>关注
    </div>
</div>
</div>
</template>
<script>
import { Toast, InfiniteScroll } from 'mint-ui'
import api from '@/api/fx'
import auth from '@/utils/auth'
import '@/assets/css/fx.css'
import fxList from './blocks/fxList'
export default {
  name: 'box',
  data () {
    return {
      choiceList: {
        accountId: '',
        isSelf: false,
        eidtList: []
      },
      page: 1,
      isLoad: true,
      ismore: 1,
      isMask: false,
      isShowTip: false,
      dynamicId: 0,
      isEdit: false,
      msgData: '',
      editValue: '',
      isApp: false,
      shareData: '',
      authorAccountId: this.$route.query.authorAccountId,
      isShowBar: true
    }
  },
  components: {
    fxList
  },
  methods: {
    // 替换json中\n
    replaceBr (str) {
      var jsonStr = JSON.stringify(str).replace(/\\n/gi, '<br>')
      jsonStr = JSON.parse(jsonStr)
      return jsonStr
    },
    goUrl: function (url) {
      window.location.href = url
    },
    isLogin: function () {
      if (!auth.isLoggedIn()) {
        auth.login(this.$route.fullpath)
        return false
      }
    },
    cancle: function () {
      this.isMask = false
      if (this.isEdit) {
        this.isEdit = false
        // $(document).unbind("touchmove");
        window.scrollTo(0, 0)
      }
    },
    cleanVal: function () {
      this.editValue = ''
    },
    showEditWindow: function () {
      this.isEdit = true
      this.isMask = true
      // $(document).bind("touchmove", function(e) {
      //   e.preventDefault();
      // });
    },
    getConcern (index, id) {
      // 去关注
      if (!auth.isLoggedIn()) {
        auth.login(this.$route.fullpath)
        return false
      }
      let _list = this.listData
      let data = { beAccountId: id, type: 1 }
      api.sb(data).then(res => {
        if (res.status == 1) {
          this.showTip('关注成功')
          this.isShowBar = false
          this.msgData.subscribe=1;
        } else {
          this.showTip('关注失败')
        }
      })
    },
    showTip (msg) {
      Toast({
        message: msg,
        position: 'center',
        duration: 3000
      })
    },
    saveEdit (val) {
      // 编辑
      if (!val) {
        this.showTip('请输入内容')
        return false
      } else if (val.length > 40) {
        this.showTip('字数不能超过40字')
        return false
      }
      let data = {
        desc: val
      }
      api.updateUserDesc(data).then(res => {
        this.isEdit = false
        this.isMask = false
        this.isShowTip = true
        window.scrollTo(0, 0)
        // $(document).unbind("touchmove");
        // $(window).scrollTop(0);
        if (res.status == 1) {
          this.msgData.desc = val
          this.showTip('编辑成功')
        } else {
          this.showTip('编辑失败')
        }
      })
    },
    scrollFun: function () {
      if (this.ismore == 1) {
        this.page++
        this.isLoad = true
        setTimeout(() => {
          this.getChoiceData()
        }, 500)
      }
      // 滚动加载分页数据
      // var _this = this;
      // $(window).scroll(function() {
      //   var scrollH = $(window).scrollTop() + $(window).height(),
      //     listH = $(".sun-list").height(),
      //     sTop = $(window).scrollTop();
      //   $("#turntop").val(sTop);
      //   if (scrollH >= listH && _this.ismore == 0 && !_this.isLoad) {
      //     _this.page += 1;
      //     _this.isLoad = true;
      //     $("#turnpage").val(_this.page);
      //     setTimeout(function() {
      //       _this.getChoiceData(_this.choiceList.navType);
      //     }, 500);
      //   }
      // });
    },
    gettopData () {
      let data = {
        authorAccountId: this.authorAccountId
      }
      api.userInfo(data).then(res => {
        let data = res.data
        this.msgData = data.userInfo
        this.shareData = data.shareData
        this.selfIsLogin = data.selfIsLogin
        // if (!this.isApp) {
        //   brandShareFun(data.shareData);
        // }
      })
    },
    getChoiceData () {
      let data = {
        authorAccountId: this.authorAccountId,
        page: this.page,
        pageCount: 10
      }
      api.userDynamic(data).then(res => {
        let data = res.data
        this.isLoad = false
        // this.choiceList.accountId = data.accountId;
        if (data.dynamicList && data.dynamicList.length) {
          this.choiceList.eidtList = this.choiceList.eidtList.concat(
            this.replaceBr(data.dynamicList)
          )
          // this.getRestData;
          // this.getlikenum;
        }
        var totalPgae = Math.ceil(data.totalCount / 10)
        if (this.page >= totalPgae) {
          this.ismore = 0
        } else {
          this.ismore = 1
        }
      })
    },
    getCompare (num, str, index, name) {
      var result
      if (num >= 10000) {
        result =
          num % 1000 < 100
            ? parseInt(num / 1000) + 'k'
            : (num / 1000).toFixed(1) + 'k'
      } else {
        result = num == 0 ? str : num
      }
      this.$set(this.choiceList.eidtList[index], name, result)
    }
  },
  mounted () {
    var _this = this
    // this.scrollFun();
    if (window.location.href.indexOf('isApp') > 0) {
      this.isApp = true
    }
    let startY, endY, swipeY
    let self = this
    document.addEventListener('touchstart', function (e) {
      startY = e.touches[0].pageY
      swipeY = true
    })
    document.addEventListener('touchmove', function (e) {
      //let oBottomBar = document.querySelector('.bottom-bar')
      endY = e.touches[0].pageY
      if (!swipeY || _this.msgData.subscribe == 1) return false
      // 下滑
      if (endY - startY < 0) {
        self.isShowBar = false
        //oBottomBar.style.display = 'none'
      }
      if (endY - startY > 0) {
        self.isShowBar = true
        //oBottomBar.style.display = 'block'
      }
      swipeY = false
    })
  },
  updated: function () {

  },
  created: function () {
    this.gettopData()
    this.getChoiceData()
  },
  computed: {
    personList () {
      // let list = this.choiceList.eidtList
      this.choiceList.eidtList.forEach((el, index) => {
        if (index >= (this.page - 1) * 10 && index < this.page * 10) {
          el.hotTopicList.forEach((em, index) => {
            var url = 'ggj://redirect/typeCommon/{"type":"26","id":' + em.id + '}'
            if (el.desc.indexOf(em.title) > -1) {
              if (this.isApp) {
                el.desc = el.desc.replaceAll(
                  em.title,
                  `<a href="${url}">${em.title}</a>`
                )
              } else {
                el.desc = el.desc.replaceAll(em.title, `<a href="/fx/topic?id=${em.id}">${em.title}</a>`)
              }
            }
          })
        }
        let nCommentnum = el.commentNum
        let nLikenum = el.likeNum
        let nSharenum = el.shareNum
        this.getCompare(nCommentnum, '评论', index, 'commentNumThs')
        this.getCompare(nSharenum, '分享', index, 'shareNumThs')
        this.getCompare(nLikenum, '点赞', index, 'likeNumThs')
      })
      return this.choiceList.eidtList
    }
  }
}
</script>
