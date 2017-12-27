<template>
    <div >
        <mt-header title="问题反馈">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="remark">
        <p class="title">您好！如需帮助，请留言，我们将尽快联系并解决您的问题。</p>
            <x-input placeholder="输入您的姓名"  style="border: 1px solid #9E9E9E;margin-bottom: 15px" ></x-input>
            <x-input placeholder="输入您的手机号"  style="border: 1px solid #9E9E9E;margin-bottom: 15px" ></x-input>
            <x-input placeholder="输入您的邮箱（选填）"  style="border: 1px solid #9E9E9E;margin-bottom: 15px" ></x-input>
            <x-textarea placeholder="输入您遇到的问题" style="border: 1px solid #9E9E9E;margin-bottom: 15px"></x-textarea>
        <div class="upload ">
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
        <x-button class="submit-problem" action-type="button"  link="/problem-check">提交订单</x-button>
    </div>
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
            utils.bodyRender('#fff');//背景色
        }
    }

</script>
<style lang="scss" scoped>
    .remark{
        padding: 10px;
    }
    .title{
        font-size: 14px;
        color: #666666;
    }
    .upload{
        background-color: #fff;
        margin: 10px 0 10px 0;
        >p{
            margin: 10px 0 10px 0;
        }
        .pic{
            margin-right: 11px;
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
        margin-top: 80px;
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
