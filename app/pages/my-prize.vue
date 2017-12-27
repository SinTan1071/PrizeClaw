<template>
    <div class="my-prize">
        <mt-header title="我的钱包">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="prize-list">
            <div>
                <img class=""  src="../images/iPhone.png" style="width: 110px ;height: auto;float: left">
                <p class="title">苹果 iPhone7plus 全网通4G手机 </p>
                <p class="sub-title">128GB 黑色 大屏5.5英寸 可等额兑换</p>
                <span class="prize">参考价：¥5988</span>
                <mt-button  type="default"  class="get-button" @click="getPrize()">领取</mt-button>
            </div>
        </div>
        <div class="prize-list">
            <div>
                <img class=""  src="../images/iPhone.png" style="width: 110px ;height: auto;float: left">
                <img class="has-done"  src="../images/mine/has_done.png" >
                <p class="title-done">苹果 iPhone7plus 全网通4G手机 </p>
                <p class="sub-title-done">128GB 黑色 大屏5.5英寸 可等额兑换</p>
                <span class="prize-done">参考价：¥5988</span>
                <mt-button  type="default"  class="get-button-done" >查看</mt-button>
            </div>
        </div>
    </div>
</template>


<script>
    import { MessageBox } from 'mint-ui'; //引入miui messageBox
    import utils from '../store/utils'
    let $query = {};
    let $data = {
        popupVisible:false
    };

    export default {

        data() {
            return $data;
        },
        methods: {
            getPrize(){
                MessageBox({
                    title: '提示',
                    message: '领取奖品平台将\n' +
                    '收取1%的服务费，请知晓！',
                    showCancelButton: true
                });

            }
        },
        created () {
            utils.bodyRender('#f4f6f9');//背景色
        }
    }

</script>
<style lang="scss" >
    .mint-header{
        background-color:#000;
    }
    .mint-msgbox{
        background: #FFFFFF;
        border-radius: 12px;
        width: 270px;
        height: 170px;
    }
    .mint-msgbox-confirm{
        background-image: linear-gradient(-45deg, #F8487E 0%, #FF998B 100%);
        color: #fff;
    }
    .my-prize{

        .prize-list{
            height: 120px;
            width: 100%;
            background-color: #fff;
            padding-top: 5px;
            .title{
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #222222;
                display: inline-block;
                margin: 15px 0 7px 12px;
            }
            .title-done{
                @extend .title;
                color: #979797;
            }
            .sub-title{
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #979797;
                margin: 0 0 26px 122px;
            }
            .sub-title-done{
                @extend .sub-title;
                color: #979797;
            }
            .has-done{
                height: auto;
                z-index: 999;
                margin-left: -95px;
                margin-top: 18px;
                position: absolute;
                width: 77px
            }
            .prize{
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #F63A52;
                margin-left: 12px;
            }
            .prize-done{
                @extend .prize;
                color: #979797;
            }
            .get-button{
                width: 100px;
                height: 27px;
                background: #F63A52;
                border-radius: 4px;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                float: right;
                margin-right: 12px;
                color: #FFFFFF;
            }
            .get-button-done{
                @extend .get-button;
                background: #E5E5E5;
                color: #979797;
            }
        }
    }
</style>
