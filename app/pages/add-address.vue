<template>
    <div class="add-address">
        <mt-header title="添加地址">
            <router-link to="/submit-order" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div style="background-color: #FFFBDE">
            <img src="../images/message.png" style="width: 15px;height: auto;margin-left: 5px" />
            <p style="margin: 0;padding: 5px;color: #5E3602;display: inline-block">请确保输入信息真实有效，以免快递无法送达。</p>
        </div>
        <div class="list">
            <x-input title="收件人" name="username" placeholder="输入收件人姓名" is-type="china-name" placeholder-align="right"></x-input>
            <x-input title="联系电话" name="mobile" placeholder="输入收件人电话" keyboard="number" is-type="china-mobile" placeholder-align="right"></x-input>
            <x-address title="所在省市区" v-model="value" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
            <x-input title="详细地址"  placeholder="填写街道详细地址" keyboard="number" is-type="china-mobile" placeholder-align="right"></x-input>
        </div>
        <div>
            <x-switch title="设为默认地址" :value-map="['0', '1']" v-model="stringValue" style="margin-top: 10px;background-color: #fff"></x-switch>
        </div>
        <x-button class="button" action-type="button"  link="/submit-order">提交</x-button>

    </div>
</template>


<script>
    import {  XAddress,ChinaAddressV4Data,XInput, Group, XButton, Cell,XSwitch } from 'vux'
    import utils from '../store/utils'
    let $query = {};
    let $data = {
        addressData: ChinaAddressV4Data,
        showAddress: false,
        stringValue: '0'
    };

    export default {

        data() {
            return $data;
        },
        methods: {

        },
        components: {
            XAddress,
            ChinaAddressV4Data,
            XInput,
            XButton,
            Group,
            Cell,
            XSwitch
        },
        created () {
            utils.bodyRender('#f4f6f9');//背景色
        }
    }

</script>
<style lang="scss" scoped>
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
    .weui-input{
        margin-left: 0px;
    }
    .add-address{
        .list{
            background-color: #fff;
        }
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
    .button{
        display: inherit;
        background:#f63a52;
        border-radius:12px;
        width:260px;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        color: #fff;
        height:50px;
    }
</style>
