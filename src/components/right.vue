<style scoped lang="less">
.zebraIndex__right__title {
  margin: 30px 15px 0;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  line-height: 25px;
  .category-title {
    font-weight: bold;
  }
  .more {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    margin: 0 6px 0 0;
    font-size: 14px;
    color: #fff;
    i {
      width: 10px;
      height: 14px;
      background: url("~images/home/arrow.png") no-repeat;
      background-size: cover;
      padding-right: 1px;
    }
  }
}

.zebraIndex__right_imgBox {
  margin: 20px 0 30px 0;
  width: 100%;
  height: 100px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  .image:first-child {
    margin-left: 15px;
  }
  .image {
    display: inline-block;
    width: 160px;
    height: 100px;
    border-radius: 4px;
    margin-right: 10px;
    //  background-size: 100%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
<template>
<div>
  <div class="zebraIndex__right" v-for="(items,indexs) in memberRights" :key="indexs">
      <div class="zebraIndex__right__title clearfix">
        <span class="fl category-title">{{items.title}}</span>
        <span class="more fr" @click="goUrl(items)">查看更多<i></i></span>
      </div>
      <ul class="zebraIndex__right_imgBox">
       
        <!-- <li class="image" v-for="(item,index) in items.rightList" 
                          :key="index"
                          :style="{backgroundImage:'url(' + item.image + ')'}" 
                          @click="goUrl(item.url,items.type)"> -->
         <li class="image" v-for="(item,index) in items.rightList" 
                           :key="index"
                           v-lazy:background-image="item.image"
                           @click="goUrl(item)">
        </li>
      </ul>
    </div>
</div>
</template>
<script>
import { Toast } from "mint-ui";
import auth from '@/utils/auth';

export default {
  data() {
    return {};
  },
  props: ["memberRights",'isMember'],
  methods: {
    goUrl(slide) {
      const url = slide.webUrl;
      const type = slide.type;
      const appOnly = slide.appOnly;
      const desc = slide.desc ? slide.desc:"下载斑马会员App立享会员特权";
      const memberOnly = slide.memberOnly;
      const memberMsg = slide.memberMsg ? slide.memberMsg : '仅会员支持该会员权益';
     
      if (type && type == 4) {
        Toast(desc);
        return false;
      }
     
      if (appOnly) {
        Toast(desc);
        return false;
      }
      

      if(type && type == 27){
         Toast('仅限斑马会员app用户使用');
          return false;
      }
      
      if(memberOnly){
        if(!auth.isLoggedIn()){
          auth.login(this.$route.fullPath);
          return false;
        }else{
          if(this.isMember){
              window.location.href = url;
          }else{
               Toast(memberMsg);
          }
        }
      }else{
         window.location.href = url;
      }
      // if (!auth.isLoggedIn()) {
      //   auth.login(this.$route.fullPath);
      //   return false;
      // } else {
      //   if ((memberOnly && this.isMember) || !memberOnly) {
      //     window.location.href = url;
      //   } else {
      //     Toast(memberMsg);
      //   }
      // };
    }
  }
};
</script>

