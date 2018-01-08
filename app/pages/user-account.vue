<template>
    <div class="user-account">
        <mt-header title="我的账户">
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="user-info" @click="userInfor">
            <span>
              <img slot="icon"  src="../images/home/money.png" class="user-pic">
            </span>
            <span class="title">趣玩一把</span>
            <x-icon type="ios-arrow-right" size="30" style="margin-right: 20px;float: right;color: #fff"></x-icon>
            <p class="sub-title">这里是个人介绍</p>
        </div>
        <router-link :to="'/my-wallet'" class="mint-cell" >
        <span class="mint-cell-mask"></span>
        <div class="mint-cell-left"></div>
        <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
                <div>
                    <img class="indexicon icon-toast"  src="../images/mine/wallet.png" style="width: 20px ;height: 20px">
                    <span>我的钱包</span>
                </div>
            </div>
            <div class="mint-cell-value is-link">
                <span></span>
            </div>
            <i class="mint-cell-allow-right"></i>
        </div>
        <div class="mint-cell-right">
        </div>
    </router-link>
        <router-link :to="'/my-prize'" class="mint-cell"  style="margin-bottom: 10px" >
            <span class="mint-cell-mask"></span>
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
                <div class="mint-cell-title">
                    <div>
                        <img class="indexicon icon-toast"  src="../images/mine/wallet.png" style="width: 20px ;height: 20px">
                        <span>我的奖品</span>
                    </div>
                </div>
                <div class="mint-cell-value is-link">
                    <span></span>
                </div>
                <i class="mint-cell-allow-right"></i>
            </div>
            <div class="mint-cell-right">
            </div>
        </router-link>
        <router-link :to="'/invite-friend'" class="mint-cell" >
            <div class="mint-cell-wrapper">
                <div class="mint-cell-title">
                    <div>
                        <img class="indexicon icon-toast"  src="../images/mine/wallet.png" style="width: 20px ;height: 20px">
                        <span>邀请好友拿奖励</span>
                    </div>
                </div>
                <div class="mint-cell-value is-link">
                    <span></span>
                </div>
                <i class="mint-cell-allow-right"></i>
            </div>
            <div class="mint-cell-right">
            </div>
        </router-link>
        <router-link :to="'/remark'" class="mint-cell" >
            <div class="mint-cell-wrapper">
                <div class="mint-cell-title">
                    <div>
                        <img class="indexicon icon-toast"  src="../images/mine/wallet.png" style="width: 20px ;height: 20px">
                        <span>问题反馈</span>
                    </div>
                </div>
                <div class="mint-cell-value is-link">
                    <span></span>
                </div>
                <i class="mint-cell-allow-right"></i>
            </div>
            <div class="mint-cell-right">
            </div>
        </router-link>
        <div class="footer user-known">
            <span>趣味夹夹乐</span><a href="www.baidu.com">《用户协议》</a>
        </div>
        <tabbar>
            <tabbar-item link="/home" >
                <img slot="icon"  src="../images/mine/game.png">
                <span slot="label">游戏</span>
            </tabbar-item>
            <tabbar-item link="/get-con">
                <img slot="icon" src="../images/home/money.png">
                <span slot="label">领取金币</span>
            </tabbar-item>
            <tabbar-item selected >
                <img slot="icon" src="../images/mine/mine-at.png">
                <span slot="label"  style="color:#f63a52;">我的</span>
            </tabbar-item>
        </tabbar>
    </div>


</template>


<script>
    import utils from '../store/utils'
    import { Tabbar, TabbarItem, Group, Cell } from 'vux'
    // import Useritem from '../components/userItem'
    let $query = {};
    let $data = {

    };


    export default {

        data() {
            return $data;
        },
        methods: {
            userInfor(){
                this.$router.push('/user-information')
            }
        },
        created () {
            utils.bodyRender('#f4f6f9');//背景色
        },
        components: {
            Tabbar,
            TabbarItem,
            Group,
            Cell
        }
    }



</script>

<style lang="scss"  scoped>
    .vux-x-icon {
        fill: #fff;
        margin-top: -8px;
    }
    .user-account{
        .mint-header{
            background-color:#000;
        }
        .mint-cell-wrapper{
            background-image: none;
        }
        /*.mint-cell-wrapper{*/
            /*height: 115px;*/
        /*}*/
        .mint-cell-label{
            margin:-15px 0 0 64px;
            font-size: 14px;
        }
        /*.mint-cell-allow-right::after{*/
            /*border: solid 2px #fff*/
        /*}*/
        .user-info{
            height: 115px;
            padding-top:25px;
            font-size: 14px;
            background-color:#f63a52;
            height: 80px;
            color: #fff;
            .title{
                margin-top: -54px;
                display: inherit;
                margin-left: 94px;
            }
            .sub-title{
                margin-left: 95px;
                margin-top: 5px;
            }
        }
        .user-pic{
            border-radius: 100%;
            width: 60px;
            height: 60px;
            margin-left: 20px;
        }
        .user-known{
            text-align: center;
            margin-top: 40px;
        }
    }

</style>