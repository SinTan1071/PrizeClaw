<template>
    <div class="change-address">
        <mt-header title="选择地址">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="user-address" style="padding-right: 12px;margin-bottom: 10px">
            <p style="display: inline-block;margin: 0">王二 </p>
            <p style="float: right;margin: 0">12313321233</p>
            <p style="margin: 5px 0 5px 0">上海浦东新区花木街道峨山路陆家嘴软件园1号楼7层</p>
            <check-icon :value.sync="isAddess" style="margin-top: 15px;display: inline-block">选择地址</check-icon>
            <p style="display: inline-block;float: right">
                <img src="../images/edit.png" style="width: 12px;height: auto"/>
                <span style="margin-right: 20px">编辑</span>
                <span style="width: 40px;height: 20px;padding:5px 8px 5px 8px ;border: 1px solid #979797;border-radius: 8px;">删除</span>
            </p>
        </div>
        <div class="user-address" style="padding-right: 12px;margin-bottom: 10px">
            <p style="display: inline-block;margin: 0">王二 </p>
            <p style="float: right;margin: 0">12313321233</p>
            <p style="margin: 5px 0 5px 0">上海浦东新区花木街道峨山路陆家嘴软件园1号楼7层</p>
            <check-icon :value.sync="isAgree" style="margin-top: 15px;display: inline-block">选择地址</check-icon>
            <p style="display: inline-block;float: right">
                <img src="../images/edit.png" style="width: 12px;height: auto"/>
                <span style="margin-right: 20px">编辑</span>
                <span style="width: 40px;height: 20px;padding:5px 8px 5px 8px ;border: 1px solid #979797;border-radius: 8px;">删除</span>
            </p>
        </div>
        <x-button class="button" action-type="button"  link="/submit-order" style="margin-top: 100px">下一步</x-button>
        <x-button class="button" action-type="button"  link="/add-address">添加地址</x-button>
        <p class="tips">提交后7天内顺丰快递发货</p>
    </div>
</template>


<script>
    import { XButton,CheckIcon ,Cell ,Checker, CheckerItem} from 'vux'
    import { MessageBox } from 'mint-ui'; //引入miui messageBox
    import utils from '../store/utils'
    let $query = {};
    let $data = {
        popupVisible:false,
        colorCheck:'金色',
        colorItem:['金色','深空灰色','银色'],
        isAgree:false,
        isAddess:false
    };

    export default {

        data() {
            return $data;
        },
        methods: {
        },
        components: {
            CheckIcon,
            XButton,
            Cell,
            Checker,
            CheckerItem
        },
        created () {
            utils.bodyRender('#f4f6f9');//背景色
        }
    }

</script>
<style lang="scss" scoped>
    .weui-cell{
        background-color: #fff;
    }
    .weui-icon-success{
        color: #f63a52;
    }
    .user-address{
        background-color: #fff;
        padding: 10px 0 10px 15px;
        margin-bottom: 10px;
    }
    .button{
            height: 50px;
            width: 305px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 30px;
            background: #F63A52;
            border-radius: 12px;
            color: #fff;
    }
    .tips{
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #979797;
        text-align: center;
    }
</style>
