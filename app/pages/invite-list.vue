<template>
    <div>
        <mt-header title="邀请好友">
            <router-link to="/has-invite" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="my-invite">
            <div style="display: flex;">
                <div style="flex: 1; text-align: center;">
                    <p class="num">15人</p>
                    <p class="tips">已推荐</p>
                </div>
                <div  style="flex: 1; text-align: center;" >
                    <p class="num">15.6元</p>
                    <p class="tips" style="font-weight: normal">奖励红包</p>
                </div>
            </div>
        </div>
        <div class="list">
           <p class="title"> 红包记录</p>
            <div class="invite-list">
                <cell title="田XX泽" value="＋3.2"  inline-desc='2017-10-16'>
                    <span style="color:#F63A52">+121</span>
                </cell>
                <cell title="田XX泽" value="＋3.2"  inline-desc='2017-10-16'>
                    <span style="color:#F63A52">+121</span>
                </cell>
                <cell title="田XX泽" value="＋3.2"  inline-desc='2017-10-16'>
                    <span style="color:#F63A52">+121</span>
                </cell>
            </div>
        </div>

    </div>
</template>


<script>
    import {XButton,Cell } from 'vux'
    import utils from '../store/utils'
    let $query = {};
    let $data = {

    };

    export default {

        data() {
            return $data;
        },
        methods: {},
        created() {
            utils.bodyRender('#f4f6f9 ');//背景色
        },
        components: {
            Cell,
            XButton

        },
    }

</script>

<style lang="scss" scoped >
    .mint-header{
        background-color:#000;
    }
    .submit-problem{
        height: 50px;
        width: 305px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        background: #FED300;
        bottom: 0;
        color: #fff;
    }
    .weui-cell{
        background-color: #fff;
    }
    .weui-cell__ft{
        color: #F63A52;
    }
    .my-invite{
        height: 100px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        /*background: #FED300;*/
        background: #fff;
        bottom: 0;
        color: #fff;
        .num{
            margin: 12px 0px 0px 0px;
            font-size: 35px;
            /*padding: 24px 50px 10px 45px;*/
            color: #4A4A4A;
        }
        .tips{
            @extend .num;
            font-family: PingFangSC-Semibold;
            font-size: 15px;
            margin: 0;
            padding: 0;
            font-weight: bold;
            color: #4A4A4A;
        }
    }
    .list{
        .title{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            margin: 15px 0 15px 12px;
            padding: 0;
            color: #979797;
        }
    }

</style>