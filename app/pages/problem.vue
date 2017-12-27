<template>
    <div class="my-prize">
        <mt-header title="申请售后">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="prize-list">
            <div>
                <img class=""  src="../images/iPhone.png" style="width: 110px ;height: auto;float: left">
                <p class="title-done">苹果 iPhone7plus 全网通4G手机 </p>
                <p class="sub-title-done">128GB 黑色 大屏5.5英寸 可等额兑换</p>
                <span class="prize-done">参考价：¥5988</span>
            </div>
        </div>
        <div  class="problem-check">
            <p style="margin-top: 10px">选择退换原因</p>
            <checker
                    v-model="problemCheck"
                    default-item-class="problem-check-item"
                    selected-item-class="problem-check-item-selected"
            >
                <checker-item v-for="item in problemItem" :key="item" :value="item">{{item}}</checker-item>
            </checker>
        </div>
        <div class="logistics">
            <x-input title="填写退货物流单号:" name="username" placeholder="请输入退货物流单号" is-type="china-name" placeholder-align="right"></x-input>
        </div>
        <div class="change-good">
            <p >填写退换说明:<span style="color: #3D3D3D;margin-left: 5px">(选填)</span></p>
            <x-textarea :max="200" name="detail" placeholder="填写退换说明" :show-counter="false" style="padding: 0;font-size: 16px;line-height: 21px;" ></x-textarea>
        </div>
        <div class="upload ">
            <p >上传凭证</p>
            <div class="pic"  >
                <img src="../images/problem/upload.png" class="upload-img" style=" "/>
            </div>
            <div class="pic"  >
                <img src="../images/problem/upload.png" class="upload-img" style=" "/>
            </div>
            <div class="pic"  >
                <img src="../images/problem/upload.png" class="upload-img" style=" "/>
            </div>
            <div class="pic"  >
                <img src="../images/problem/upload.png" class="upload-img" style=" "/>
            </div>
            <div class="total" >
                <p>选填</p>
                <p>0/4</p>
            </div>
        </div>
        <div class="is-agree">
            <check-icon :value.sync="isAgree">同意<a style="color:#0E0000;">《退换货须知》</a></check-icon>
        </div>
        <x-button class="submit-problem" action-type="button"  link="/sub-problem">提交订单</x-button>
    </div>
</template>
<script>
    import {XButton,CheckIcon ,XTextarea, XInput,Checker, CheckerItem } from 'vux'
    // import Uploader from 'vux-uploader'
    import utils from '../store/utils'
    let $query = {};
    let $data = {
        isAgree:false,
        problemCheck:'发错货',
        problemItem:['发错货','包装及商品损坏'],
    };

    export default {

        data() {
            return $data;
        },
        methods: {
            onItemClick (value, disabled) {
                console.log(value, disabled)
                if (!this.disabled) {
                    this.showPopup = false
                }
            }
        },
        components: {
            XButton,
            CheckIcon,
            XTextarea,
            XInput,
            Checker,
            CheckerItem,

        },
        created () {
            utils.bodyRender('#f4f6f9');//背景色
        }
    }

</script>
<style lang="scss" scoped>
    .problem-check{
        background-color: #fff;
        padding: 10px 0 10px 15px;
        margin: 10px 0 10px 0;
    }
    .problem-check-item {
        width: 130px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin-right: 15px;
    }
    .problem-check-item-selected {
        background: #ffffff url(../images/active.png) no-repeat right bottom;
        border-color: #ff4a00;
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
    .logistics{
        @extend .problem-check;
        padding-left: 0px;
    }
    .change-good{
        @extend .problem-check;
        >p{
            margin: 10px 0 10px 0;
        }
    }
    .upload{
        @extend .problem-check;
        >p{
            margin: 10px 0 10px 0;
        }
        .pic{
            margin-right: 20px;
            width: 60px;
            height: 60px;
            background: #F0F0F0;
            border-radius: 2px;
            display: inline-block;
            .upload-img{
                width: 25px;
                height: auto;
                margin-left: 18px;
                margin-top: 19px;
            }
        }

    }
    .total{
        display: inline-block;
        vertical-align: middle;
        color: #979797;
        >p{
            margin: 5px;
        }
    }
    .submit-problem{
        margin-top: 30px;
        width: 100%;
        background: #F63A52;
        bottom: 0;
        color: #fff;
    }
    .weui-input{
        color: #DBDBDB;
    }
    .weui-icon-success-circle:before{
        color: #F63A52;
    }
    .vux-check-icon{
        color: #F63A52;
    }
</style>
