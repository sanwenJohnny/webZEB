<template>
    <div class="box">
       <swiper :options="swiperOption" ref="mySwiper" style="height:100%">
           <swiper-slide v-for="(slide,index) in image" :key="index" style="height:100%">
                 <!-- <img :src="slide" class="content"> -->
                 <div class="slide-img" :style="{backgroundImage:'url(' + slide + ')'}"></div>
                 
                 <!-- <div  class="slide-img" v-lazy="{backgroundImage:'url(' + slide + ')'}"></div> -->
           </swiper-slide>
       </swiper>
       <div class="open-btn" @click="open"></div>
       <div class="text" v-show="showArrow">
            <p>向下翻，了解更多会员权益</p>
             <span>
                <img  class="arrow" src="https://img.gegejia.com/img/fe2bc744d456c3dbc6887a963b8b6a81.png">
            </span> 
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import ('swiper/dist/css/swiper.css')
import auth from "@/utils/auth"

export default {
    name:"recruitIndex",
    data (){
        return {
            swiperOption: {
                loop: false,
                notNextTick: false,
                speed:2000,
                //autoplay:true,
                    // autoplay: {
                    //     stopOnLastSlide:true
                    //     // delay: 4000,
                    //     // disableOnInteraction: false,
                    //     // waitForTransition:true
                    // },
                direction: "vertical",
                observer: true,
                observeParents: true,
                on:{
                    slideChangeTransitionStart () {
                      if(this.activeIndex>3){
                        $(".text").hide()
                      }else{
                        $(".text").show()
                      }    
                    }
                }
            },
            image:[
                'https://img.gegejia.com/img/90850e29f8713cb6b646c2d1986fafc7.png',
                'https://img.gegejia.com/img/8d71eef6ac43e9f4dbe6ec39657e7496.png',
                'https://img.gegejia.com/img/84d5d7a748ecafc5b06c78b77ce88d67.png',
                'https://img.gegejia.com/img/c6c2a546fd4a6e1fb63f4bc1c3eab8b2.png',
                'https://img.gegejia.com/img/62b02c08ce285a288a65f26ccb1da91f.png'
                // 'https://img.gegejia.com/img/eefd065108b2f775fd36efb468df871d.png'
            ],
            showArrow:true
        }
    },
    computed: {
        swiper() {
          return this.$refs.mySwiper.swiper;
        }
        
    },
    mounted () {
     
    },
    components:{
        swiper,
        swiperSlide
    },
    methods:{
        open (){
          this.$router.push({
              name:'recruitList'
          })
        }
    }
}
</script>

<style lang="less" scoped>
.open-btn{
    z-index:100;
    position: absolute;
    bottom:70px;
    left:50%;
    width:60%;
    height:80px;
    //background:red;
    margin-left:-30%;
}
.slide-img{
    height: 100%;
    width: 100%;
    background-size: 100% 95%;
    background-repeat: no-repeat
}
.box{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:url('https://img.gegejia.com/img/9cd7c6968672d14de50b1c07a89c1bbc.jpg') no-repeat;
    background-size:100% 100%;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    .content{
        width:100%;
        height:600px;
        margin:22px 0 0 0 ;
    }
    .text{
        font-size:12px;
        color: #C5A980;
        line-height:12px;
        text-align:center;
        position: fixed;
        bottom: 10px;
        width: 100%;
    }
    .text span{
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
       
    }
    .arrow{
        width:20px;
        height:20px;
        position: absolute;
        animation:identifier 2s infinite linear;
        -moz-animation:identifier 2s infinite linear;
        -webkit-animation:identifier 2s infinite linear;
        -o-animation:identifier 2s infinite linear;
    }
    @keyframes identifier {
        0% {top:5px;}
        50% {top:8px;}
        100% {top:5px;}
    }
     @-moz-keyframes identifier {
        0% {top:5px;}
        50% {top:8px;}
        100% {top:5px;}
    }
     @-webkit-keyframes identifier {
        0% {top:5px;}
        50% {top:8px;}
        100% {top:5px;}
    }
     @-o-keyframes identifier {
        0% {top:5px;}
        50% {top:8px;}
        100% {top:5px;}
    }
}
</style>


