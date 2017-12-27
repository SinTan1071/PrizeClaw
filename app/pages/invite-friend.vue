<template>
    <div>
        <mt-header title="活动邀请">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div>
            <img class="invite-pic" src="../images/invite/invite.png" style=""/>
        </div>
        <x-button class="submit-problem" action-type="button"  link="/has-invite">立即进入</x-button>
        <div class="rule">
            <hr style="border: 1px solid #979797;width: 50px;display:inline-block;margin-left: 42px" />
            <div class="rule-title">活动规则</div>
            <hr style="border: 1px solid #979797;width: 50px;display:inline-block" />
            <div class="rule-subtitle">
                1. 活动期间，每成功邀请一个新用户，即可获
                得50金币</br>
                2. 被邀请人须为首次注册的用户，邀请用户
                所获得的奖励金币仅可用于游戏</br>
                3.奖励将于新用户成功登录并消费后激活，邀
                请人奖励以随机红包形式发放，请及时查收</br>
            </div>
        </div>
        <div class="copy-right">本活动最终解释权本公司所有</div>
    </div>
</template>


<script>
    import {XButton } from 'vux'
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
            utils.bodyRender('#F63A52 ');//背景色
        },
        components: {
            XButton

        },
    }

</script>

<style lang="scss" scoped >
    html,body{
        background-color: rgb(244, 246, 249);
        background-size: 100% 100%;
    }
    .mint-header{
        background-color:#000;
    }
    .invite-pic{
        display: inherit;
        height: 300px;
        margin-top: 22px;
        margin-left: auto;
        margin-right: auto;

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
    .rule{
        padding: 20px;
        width: 265px;
        height: auto;
        background-color: #fff;
        margin-right: auto;
        margin-left: auto;
        .rule-title{
            margin-bottom: 18px;
            text-align: center;
            display: inline-block;
        }
        .rule-subtitle{
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #4A4A4A;
            line-height: 23px;
        }

    }
    .copy-right{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        text-align: center;
        color: #FFFFFF;
        margin: 15px 0px 20px 0;
        bottom: 0;
    }

</style>