<template>
    <div class="home">
        <mt-header title="领取金币">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <tabbar>
            <tabbar-item link="/home">
                <img slot="icon"  src="../images/mine/game.png">
                <span slot="label">游戏</span>
            </tabbar-item>
            <tabbar-item selected>
                <img slot="icon" src="../images/mine/con-at.png">
                <span slot="label" style=" color:#f63a52">领取金币</span>
            </tabbar-item>
            <tabbar-item  link="/user-account">
                <img slot="icon" src="../images/home/me.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>

    </div>
</template>


<script>
    import { MessageBox } from 'mint-ui'; //引入miui messageBox
    import { Tabbar, TabbarItem, Group, Cell } from 'vux'
    import utils from '../store/utils'
    let $query = {};
    let $data = {
        selected:'游戏'
    };

    export default {

        data () {
            return $data;
        },
        methods:{
            myAccount(){
                this.$router.push('../welcome')
            },
            clickRule(){
                MessageBox('游戏规则', '1.夹夹乐分三个场景，每个专场的商品所花费金币不同，商品价值也不同\n' +
                    '2.能否夹中奖品，取决于出夹的时机选择，和中奖概率\n' +
                    '3.所有奖品为官方授权渠道提供，均为正品\n' +
                    '(1).小米手机专场：小米5手机 16GB  黑色 全网通，价值2999元\n' +
                    '(2).苹果手机专场：iPhone7 32GB 黑色 全网通 价值5288元\n' +
                    '(3).电脑专场：Mac pro 512M 黑色 价值12890元\n' +
                    '4.用户中奖后可在平台兑换与商品等额人民币，或领取后由平台方快递送到用户手中，兑换或者领取将收取1%的手续费\n' +
                    '5.用户应遵循公平公正的游戏原则，不得使用其他作弊行为参与游戏');
            }
    },
        created () {
            utils.bodyRender('#f4f6f9');//背景色
           // utils.bodyRenderColor('../images/home/outside.png')
        },
        components: {
            Tabbar,
            TabbarItem,
            Group,
            Cell
        }

    }

</script>

<style lang="scss" scoped >
    html,body{
        height: 100%;
        width: 100%;
        /*background:url(../images/home/outside.png);*/
        background-size: 100% 100%;

    }
    .home{
        .mint-header{
            background-color:#000;
        }
        .mint-tab-item.is-selected {
            color: #e63551;
        }
        .content {
            /*background:url(../images/home/outside.png) no-repeat ;*/
            /*background-size:100% 100%;*/
            .nav-left {
                background: url(../images/home/nav_light.png) no-repeat top left;
                background-size: 120px 43px;
                .left-font {
                    position: absolute;
                    text-align: center;
                    font-size: 13px;
                    margin: 20px;
                    color: #fff;
                    opacity: 0.9;
                }
            }
            .nav-middle {
                background: url(../images/home/nav_middle.png) no-repeat top left;
                background-size: 120px 43px;
                .middle-font {
                    text-align: center;
                    font-size: 17px;
                    margin: 13px;
                    color: #fff;
                    opacity: 0.9;
                }
                .middle-font-two {
                    font-size: 10px;
                    margin-top: -5px;
                    margin-left: 27px;
                    color: #fff;
                    opacity: 0.9;
                }
            }
            .nav-right {
                background: url(../images/home/nav_right.png) no-repeat top left;
                background-size: 120px 43px;
                flex: 1;
                .right-font {
                    position: absolute;
                    text-align: center;
                    font-size: 13px;
                    margin-left: 46px;
                    margin-top: 20px;
                    color: #fff;
                    opacity: 0.9;
                }
            }
            .rule {
                display: inline-block;
                padding: 0 12px;
                float: right;
                margin: 10px 35px 0 0;
                color: #000;
                background-color:#ffe670;
                height: 26px;
                border-top-left-radius:10px;
                border-bottom-left-radius:10px;
            }

        }
        }
    .mint-msgbox{
        background-color:#ffe670;
        border-radius:20px;
        width:300px;
        height:380px;
        overflow-y:scroll;
    }
    .mint-msgbox-message{
        color: #000;
    }
    .mint-msgbox-confirm {
        color: #fff;
    }
    .mint-msgbox-btn {
        line-height: 35px;
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        margin: 0;
        border: 0;
        background-color: #f63a52;
        border-radius: 50px;
        width: 150px;
        height: 40px;
    }
       
</style>