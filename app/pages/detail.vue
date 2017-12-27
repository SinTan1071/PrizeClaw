<template>
    <div>
        <mt-header title="明细">
            <router-link to="/my-wallet" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="list">
            <p class="title"> 明细</p>
            <div class="invite-list">
                <cell title="微信充值"  inline-desc='2017-10-16'>
                    <span style="color:#F63A52">+123</span>
                </cell>
                <cell title="微信充值" value="＋3.2"  inline-desc='2017-10-16'>
                    <span style="color:#F63A52">+111</span>
                </cell>
                <cell title="微信充值"  inline-desc='2017-10-16'>
                    <span style="color:#F63A52">+821</span>
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