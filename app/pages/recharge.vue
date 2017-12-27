<template>
    <div class="recharge">
        <mt-header title="金币充值">
            <router-link to="/my-wallet" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="recharge-content" style="padding: 40px 20px 0 20px">
            <div  >
                <div class="charge-choose" >
                    <div class="choose-left">
                        <p style="padding-top: 10px" >200RMB</p>
                        <p>200金币</p>
                    </div>
                    <div class="choose-not" style="float: right">
                        <p style="padding-top: 10px" >200RMB</p>
                        <p>200金币</p>
                    </div>
                </div>
            </div>
            <div style="padding: 40px 0px 0 0px;" >
                <div class="charge-choose" >
                    <div class="choose-not">
                        <p style="padding-top: 10px" >200RMB</p>
                        <p>200金币</p>
                    </div>
                    <div class="choose-not" style="float: right">
                        <p style="padding-top: 10px" >200RMB</p>
                        <p>200金币</p>
                    </div>
                </div>
            </div>
            <input class="other-choose" placeholder="请输入金额">
        </div>
        <!--<div class="recharge-tip">多冲多送，赢大奖</div>-->
        <mt-button  type="default" class="button" style="margin-top: 45px" @click="recharge">充值</mt-button>
        <div class="pay-tips">目前仅支持微信支付哦！</div>
    </div>
</template>


<script>
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
                this.$router.push('/recharge-success')
            }

        },
        created () {
            // utils.bodyRender('#f4f6f9');//背景色
            utils.bodyRenderColor('../images/home/outside.png')
        },
    }

</script>
<style lang="scss" scoped >
    .recharge{
        .charge-choose{
            .choose-left{
                display: inline-block;
                background:#f63a52;
                border-radius:12px;
                margin: 0;
                width:140px;
                height:56px;
                >p{
                    margin: 0;
                    text-align: center;
                    color: #fff
                }

            }
            .choose-not{
                @extend .choose-left;
                >p{
                    margin: 0;
                    text-align: center;
                    color: #000
                }
                background: #fff;
                border:2px solid #979797;
                border-radius:12px;
                width:140px;
                height:54px;
                color: #000;

            }
        }
        .charge-not-choose{
            border:2px solid #979797;
            border-radius:12px;
            width:140px;
            height:54px;
        }
        .other-choose{
            width: 100%;
            border:2px solid #979797;
            border-radius:12px;
            height:54px;
            margin: 40px 0px 0 0px;
            font-family:PingFangSC-Regular;
            font-size:16px;
            color:#979797;
            padding-left: 12px;
        }
        .recharge-tip{
            font-family:PingFangSC-Regular;
            font-size:12px;
            color:#222222;
            padding-left: 20px;
            margin-top: 10px;
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
        .pay-tips{
            font-family:PingFangSC-Regular;
            font-size:12px;
            color:#666666;
            margin-top: 10px;
            text-align:center;
        }
}

</style>
