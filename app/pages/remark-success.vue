<template>
    <div class="recharge">
        <mt-header title="提交成功">
            <router-link to="/my-wallet" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <img class="pic" src="../images/charge-success.png" style=""/>
        <p class="tips">留言提交成功</p>
        <p class="tips"> 客服将尽快解决您的问题</p>
        <x-button class="button" action-type="button"  link="/home">返回首页</x-button>
    </div>
</template>
<script>
    import { XButton} from 'vux'
    import utils from '../store/utils'
    let $query = {};
    let $data = {

    };

    export default {

        data() {
            return $data;
        },
        methods: {
            recharge(){

            }

        },
        created () {
            utils.bodyRender('#fff');//背景色
        },
        components: {
            XButton

        },
    }

</script>
<style lang="scss" scoped>
    .pic{
        display: inherit;
        width: 44px;
        height:auto;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
    }
    .tips{
        text-align: center;
    }
    .button{
        height: 50px;
        width: 305px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
        margin-bottom: 30px;
        background: #F63A52;
        border-radius: 12px;
        color: #fff;
    }
</style>
