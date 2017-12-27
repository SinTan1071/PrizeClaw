<template>
    <div>
        <mt-header title="我的钱包">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="my-money">
            <p class="title">金币余额</p>
            <mt-popup style="padding: 20px;width: 280px;height: 60px"
                    v-model="popupVisible"

            >
                100金币等同于10元人民币
                您有3333金币等同于333.3元人民币
            </mt-popup>
            <p class="sub-title">28888</p>
            <p class="tips"> 100金币等同于10元人民币</p>
        </div>
        <!--<div class="con">-->
            <!--<div class="con-left">-->
                <!--<p >10000</p>-->
                <!--<p style="text-align: center">奖励金币</p>-->
            <!--</div>-->
            <!--<div class="con-right">-->
                <!--<p >3333</p>-->
                <!--<p style="text-align: center">我的金币</p>-->
            <!--</div>-->
        <!--</div>-->
        <mt-button  type="default" class="button" style="margin-top: 45px" @click="recharge">充值</mt-button>
        <router-link to="/detail" style="text-align: center;display: inherit;margin-top: 15px;color: #666666;">明细</router-link>
    </div>
</template>


<script>
    let $query = {};
    let $data = {
        popupVisible:false
    };

    export default {
        data() {
            return $data;
        },
        methods: {
            isShow(){
                $data.popupVisible=!($data.popupVisible)
            },
            recharge(){
                this.$router.push('../recharge')
            }
        }
    }

</script>
<style lang="scss" scoped>
    html,body{
        height: 100%;
        width: 100%;
        background-color: rgb(244, 246, 249);
        background:url(../images/pic.png);
        background-size: 100% 100%;
    }
        .mint-header{
            background-color:#000;
        }
        .my-money{
            background-color: #F63A52;
            width:100%;
            height:165px;

            text-align: center;
        .title{
            margin: 0px;
            padding-top: 30px;
            display: inline-block;
            font-family:PingFangSC-Regular;
            font-size:17px;
            color:#ffffff;
            letter-spacing:0;
            text-align:center;
        }
        .money-tip-icon{
            float: right;
            margin-top: 35px;
            margin-right: 20px;
        }
        .sub-title{
            font-family:PingFangSC-Medium;
            font-size:30px;
            color:#ffffff;
            line-height: 42px;
            margin: 10px;
            text-align:center;
        }
        .tips{
            font-family:PingFangSC-Regular;
            font-size:10px;
            color:#ffffff;
            letter-spacing:0;
            text-align:center;
        }
    }
        .con{
            display: flex;
            background:#ffffff;
            box-shadow:0 0 18px 0 rgba(250,82,88,0.33);
            border-radius:4px;
            height:90px;
            margin-left: auto;
            margin-right: auto;
            width: 88%;
            margin-top: -25px;
            .con-right{
                display: inline-block;
                text-align: center;
                flex: 1;
            }
            .con-left{
                display: inline-block;
                text-align: center;
                flex: 1;
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
