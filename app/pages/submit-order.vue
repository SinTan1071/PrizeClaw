<template>
    <div class="get-prize">
        <mt-header title="领取奖品">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="user-address" style="padding-right: 12px">
            <p style="display: inline-block;margin: 0">王二 </p>
            <p style="float: right;margin: 0">12313321233</p>
            <p style="margin: 5px 0 5px 0">上海浦东新区花木街道峨山路陆家嘴软件园1号楼7层</p>
        </div>
        <div class="prize-list">
            <div>
                <img class=""  src="../images/iPhone.png" style="width: 110px ;height: auto;float: left">
                <p class="title">苹果 iPhone7plus 全网通4G手机 </p>
                <p class="sub-title">128GB 黑色 大屏5.5英寸 可等额兑换</p>
                <span class="prize">参考价：¥5988</span>
            </div>
        </div>
        <div  class="color-check">
            <p>选择颜色</p>
            <checker
                    v-model="colorCheck"
                    default-item-class="color-check-item"
                    selected-item-class="color-check-item-selected"
            >
                <checker-item v-for="item in colorItem" :key="item" :value="item">{{item}}</checker-item>
            </checker>
        </div>
        <cell title="服务费1%" class="service-money">
            <span style="color: #f63a52;">¥59.88</span>
        </cell>
        <cell title="优惠券" class="service-money">
            <span style="color: #f63a52;">盖世5折通用券</span>
        </cell>
        <div class="footer">
            <p style="">实付款：<span style="color: #f63a52">2900.88元</span></p>
            <p style=" "> (含运费)</p>
            <x-button class="submit-order" action-type="button"  link="/demo">确认支付</x-button>
        </div>

    </div>
</template>


<script>
    import { XButton,Checker, CheckerItem,Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
    import { MessageBox } from 'mint-ui'; //引入miui messageBox
    import utils from '../store/utils'
    let $query = {};
    let $data = {
        popupVisible:false,
        colorCheck:'金色',
        colorItem:['金色','深空灰色','银色'],
        isAddress:false     //是否有用户名，地址信息
    };

    export default {

        data() {
            return $data;
        },
        methods: {
            getPrize(){
                MessageBox('提示',  '领取奖品平台将\n' +
                    '收取1%的服务费，请知晓！');
                // MessageBox({
                //     title: '提示',
                //     message: '领取奖品平台将\n' +
                //     '收取1%的服务费，请知晓！',
                //     showCancelButton: true
                // });
            }
        },
        components: {
            XButton,
            Checker,
            CheckerItem,
            Group,
            Cell,
            CellFormPreview,
            CellBox,
            Badge
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
    .prize-list{
        margin-bottom: 10px;
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
    .service-money{
        height: 20px;

    }
    .user-address{
        background-color: #fff;
        padding: 10px 0 10px 15px;
        margin-bottom: 10px;
    }
    .color-check{
        margin-bottom: 10px;
        background-color: #fff;
        padding: 10px 0 10px 15px;
    }
    .color-check-item {
        width: 100px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-right: 6px;
    }
    .color-check-item-selected {
        background: #ffffff url(../images/active.png) no-repeat right bottom;
        border-color: #ff4a00;
    }
    .submit-order{
        width: 150px;
        background: #F63A52;
        float: right;
        color: #fff;
    }
    .footer{
        padding-left: 15px;
        position: absolute;
        bottom: 0;
        display: flex;
        width: 100%;
    }
</style>
