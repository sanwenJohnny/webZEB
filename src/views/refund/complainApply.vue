<template>
    <div class="complain-apply" :class="{'pt-45': isAppView==1}">
        <TopBar title-name="投诉申请" v-if="isAppView==1"></TopBar>
        <div class="tlt">
            <h4><i></i>投诉类型<span>（必填）</span></h4>
        </div>
        <div class="complain-type" v-if="reasonData.length>0">
                <span :class="{'cur':reasonType==index}" v-for="(data,index) in reasonData" :key="index" @click="chooseType(index,data.id)">{{data.desc}}</span>
        </div>
        <div class="tlt">
            <h4><i></i>具体描述<span>（必填）</span></h4>
        </div>
        <div class="textarea">
            <textarea name="" id="" cols="30" rows="10" maxlength="150" placeholder="请仔细描述您的问题，环球捕手将竭诚为您服务！" v-model="reasonDesc"></textarea>
        </div>
        <!-- 上传凭证-->
        <div class="refund_item refund_upload">
            <div class="tlt">
                <h4>上传凭证<span>（最多选择3张）</span></h4>
            </div>
            <ul class="upload_list">
                <li v-for="(image, index) in uploadImgs" :key="index">
                    <span class="close" @click="deleteImg(index)"></span>
                    <img class="preview" :src="image" alt=""/>
                </li>
                <li class="upload_btn" v-if="uploadImgs.length < 3">
                    <label><input id="file" type="file" accept="image/*" @change="uploadImg()" /></label>
                </li>
            </ul>
            <a href="javascript:;" class="complain-btn" :class="{'bg-000':reasonDesc&&reasonId}" @click="submit">提交投诉</a>
        </div>
    </div>
</template>
<script>
import api from '@/api/refund'
//import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
//import { Dlg } from '@/assets/dialog/fm.dialog.min.js'
import tools from '@/utils/tools'
import TopBar from '@/components/topBar'
import { MessageBox } from 'mint-ui'
export default {
    name: 'complainapply',
    data () {
        return{
            isAppView:0,
            uploadImgs:[],
            deleteIndex:0,
            reasonData:[],
            reasonType:-1,
            reasonId:'',
            reasonDesc:''
        }
    },
    computed:{
    },
    components:{
        TopBar
    },
    methods:{
        chooseType(index,id){
            this.reasonType =  index;
            this.reasonId = id
        },
        /**
         * 选择上传图片
         * 上传图片几个限制条件:
         * 1、只能上传单张图片
         * 2、最多能上传三张图片
         * 3、图片宽高限制为640px
         */
        uploadImg(){
            var self = this;
            var files = document.getElementById('file').files;
            var fileUrl = window.URL || window.webkitURL;

            if(files.length == 0){
                tools.toast('请选择图片');
                return;
            }
            if(files.length >= 3){
                tools.toast('最多上传三张图片');
                return;
            }
            if(this.uploadImgs.length >= 3 ){
                tools.toast('最多上传三张图片');
                return;
            }
            var objectURL = fileUrl.createObjectURL(files[0]);
            var image = new Image();
            image.src = objectURL;
            image.onload = function(){
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var w = image.width;
                var h = image.height;
                var limit_w = 1280;

                if(w > limit_w){
                    h = h*limit_w/w;
                    w = limit_w;
                }
                if(h > limit_w){
                    w = w*limit_w/h;
                    h = limit_w;
                }
                canvas.width = w;
                canvas.height = h;
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, w, h);
                var base64 = canvas.toDataURL('image/jpeg');
                self.uploadDataBase64(base64);
                document.getElementById('file').value = '';
            }
        },
        /**
         * 调用接口上传图片
         * base64图片数组入参，接口支持批量上传
         * @param base64图片
         */
        uploadDataBase64: function(base64){
            let imgPar = {
                imgBase64List: JSON.stringify([base64])
            }
            let  appParam1 = JSON.parse(this.appParam);
            let data = {...imgPar,...appParam1}
            console.log(imgPar.imgBase64List)

            api.uploadImg(imgPar).then((data)=>{
                if(data.status == 1){
                    this.uploadImgs.push(data.data.imgList[0]);
                }else{
                    tools.toast(data.msg)
                }
            })
        },
        /**
         * 删除上传图片
         * 需传入删除图片的位置index
         * @param index
         */
        deleteImg: function(index){
            let _this =this;
            MessageBox.confirm('',{
                title: '',
                message: '确定删除该图片？',
                showCancelButton: true,
            }).then(action => {
                console.log(action,'13123123')
                _this.deleteIndex = index;
                _this.uploadImgs.splice(index,1)
            })
            // let _this =this;
            // var buttons = [{
            //     name: '取消',
            //     css: 'color: #999999;',
            //     callback: function() {
            //       Dlg.close("iconfirm");
            //     }
            //   }, {
            //     name: '确定',
            //     css: 'color: #DF5658;',
            //     callback: function() {
            //       Dlg.close("iconfirm");
            //       _this.deleteIndex = index;
            //       _this.uploadImgs.splice(index,1)
            //     }
            // }]
            // Dlg.confirm({
            //     id: "iconfirm",
            //     content: '确定删除该图片？',
            //     buttonDirection: 'horizontal',//'vertical'
            //     button: buttons,
            //     showTitle: false
            // });
            
        },
        getReasonList(){
            api.getReason({}).then((data)=>{
                //console.log(data)
                if(data.status == 1){
                    this.reasonData = data.data
                    //this.reasonId = data.data[0].id
                }else{
                    tools.toast(data.errorMsg)
                }
            })
        },
        submit(){
            if(this.reasonDesc && this.reasonId){
                let data = {
                    orderId: this.orderId,
                    orderProductId: this.orderProductId,
                    reasonId: this.reasonId,
                    imgs: this.uploadImgs.join(','),
                    description: this.reasonDesc
                }
                console.log(data,'提交信息')
                api.complainSubmit(data).then((data)=>{
                    console.log(data)
                    if(data.status == 1){
                        tools.toast('申请成功');
                        setTimeout(()=>{
                            if(this.$route.query.isApp){
                                window.location.href='ggj://redirect';
                            }else{
                                history.back();
                            }
                        },2000)
                    }else{
                        tools.toast(data.errorMsg)
                    }
                })
            }
        }
    },
    mounted (){  
    },
    created (){ 
        this.appParam = window.localStorage.getItem('appParam') ? window.localStorage.getItem('appParam') : '{}';
        this.isAppView = tools.GetQueryString('isApp') || tools.GetQueryString('isAppView') || 0;
        this.orderId = tools.GetQueryString('orderId');
        this.orderProductId = tools.GetQueryString('orderProductId') ? tools.GetQueryString('orderProductId') : '';
        this.getReasonList() 
    }
}
</script>
<style lang="less">
.complain-apply{
    padding: 0 0 30px 10px;  
    background: #fff;
    font-size: 14px;
    .tlt {
        padding: 20px 0; 
        h4 {
            color: #000;
            font-size: 14px;
            font-weight: normal; 
            i{
                width: 2px;
                height: 14px;
                margin-right: 5px;
                vertical-align: middle;
                background: #000;
            }
            span {
                color: #858585;
                font-size: 12px; 
            }
        }
    }  
}
.pt-45{
    padding-top: 45px;
}
.complain-type{
    overflow: hidden;
    text-align: center;
    span{
        /* flex: 1; */
        float: left;
        width: 111px;
        margin: 0 10px 10px 0;
        padding: 9px 0;
        background: #f0f0f0;
    }
    .cur{
        background: #000;
        color: #fff;
    }
}
.textarea{
    padding-right: 10px;
    textarea{
        width: 100%;
        box-sizing: border-box;
        padding: 10px 0 0 8px;
        resize: none;
        outline: none;
        background: #f0f0f0;
        border: none;
        border-radius: 2px;

    }
}
/* 上传凭证 */
.refund_upload {
    padding-right: 10px;
    .upload_list {
        display: flex;
        padding-bottom: 40px; 
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 60px;
            height: 60px;
            margin-left: 12px;
            &:first-child {
                margin-left: 0; 
            }
            img {
                width: 100%;
                height: 100%; 
            }
            .close {
                    position: absolute;
                    top: -6px;
                    right: -6px;
                    display: block;
                    width: 16px;
                    height: 16px;
                    background: url('~images/refund/close1.png') no-repeat;
                    background-size: 100%;
            }
        }
        .upload_btn {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background: url("~images/refund/upload.png") no-repeat;
            background-size: 100%;
            overflow: hidden;
            label {
                display: block;
                input {
                    visibility: hidden; 
                }  
            }
        }
    }
    .complain-btn{
        width: 100%;
        padding: 10px 0;
        text-align: center;
        background: #858585;
        color: #fff;
        font-size: 18px;
    }
    .bg-000{
        background: #000;
    }
}
</style>