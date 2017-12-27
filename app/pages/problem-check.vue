<template>
    <div class="problem">
        <mt-header title="问题反馈">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <p class="title"> 问题描述</p>
        <div class="disc" v-show="is_show">
            <span>我有一个奖品在收到快件后发现有破损的情况，影响了正常的使用感受，能否给我换一个新的产品，我有一个奖品在收到快件后发现有破损的情况，影响了正常的使用感受，能否给我换一个新的产品，</span>
            <hr style="border: 0.5px solid #e5e5e5;margin: 15px 0 15px 0"/>
            <p class="detail">姓名：贝武</p>
            <p class="detail">手机号：15878563351</p>
            <p class="detail">邮箱：523811554@qq.com</p>
            <div class="upload ">
                <div class="pic"  >
                    <img src="../images/iPhone.png" class="upload-img" style=" "/>
                </div>
                <div class="pic"  >
                    <img src="../images/iPhone.png" class="upload-img" style=" "/>
                </div>
                <div class="pic"  >
                    <img src="../images/iPhone.png" class="upload-img" style=" "/>
                </div>
                <div class="pic"  >
                    <img src="../images/iPhone.png" class="upload-img" style=" "/>
                </div>
                <hr style="border: 0.5px solid #e5e5e5;margin: 15px 0 15px 0"/>
            </div>
        </div>
        <div class="disc" v-show="!(is_show)">
            <span>我有一个奖品在收到快件后发现有破损的情况，影响了正常的使用感受，能否给我换一个新的产品，我有一个奖品在收到快件后发现有破损的情况，影响了正常的使用感受，能否给我换一个新的产品，</span>
            <hr style="border: 0.5px solid #e5e5e5;margin: 15px 0 15px 0"/>
        </div>
        <div style="text-align: center;color: #0B78EF;background-color: #fff;padding-bottom: 10px;" @click="isShow" v-show="is_show">
            <span>收起</span>
            <x-icon type="ios-arrow-up" size="20"></x-icon>
        </div>
        <div style="text-align: center;color: #0B78EF;background-color: #fff;padding-bottom: 10px;" @click="isShow" v-show="!(is_show)">
            <span>更多</span>
            <x-icon type="ios-arrow-down" size="20"></x-icon>
        </div>
        <p class="title"> 客服回答</p>
        <div class="disc "  style="min-height: 100px;margin-bottom: 60px">
            <span>您好！客服繁忙，稍等片刻！</span>
        </div>
            <x-button class="submit-problem" action-type="button"  link="/sub-problem">知道了</x-button>
    </div>
</template>
<script>
    import {XButton,CheckIcon ,XTextarea, XInput,Checker, CheckerItem } from 'vux'
    // import Uploader from 'vux-uploader'
    import utils from '../store/utils'
    let $query = {};
    let $data = {
        is_show:true
    };

    export default {

        data() {
            return $data;
        },
        methods: {
            isShow(){
                this.is_show=!( this.is_show)
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
    .problem{
        .detail{
            margin: 5px 0 5px 0;
        }
        .title{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            margin: 15px 0 15px 12px;
            padding: 0;
            color: #979797;
        }
        .disc{
            padding: 15px;
            background-color: #fff;
        }
        .upload{
            background-color: #fff;
            margin: 10px 0 10px 0;
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
                    width: 60px;
                    height: 60px;
                }
            }

        }
        .vux-x-icon {
            fill: #0B78EF;
        }
        .submit-problem{
            height: 50px;
            width: 305px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 30px;
            background: #F63A52 ;
            bottom: 0;
            color: #fff;
        }
    }

</style>
