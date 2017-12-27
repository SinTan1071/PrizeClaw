<template>
    <div class="home">
        <mt-header title="首页">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!--<x-button class="button" action-type="button"  @click="stop" style="position: fixed">开始</x-button>-->
        <button  @click="stop" style="width: 100px ">暂停</button>
        <button  @click="start" style="width: 100px;display: block;margin-top: 10px ">开始</button>
        <!--<div style="padding: 300px 27px 0 27px">-->
            <!--<img src="../images/iPhone.png"  style="width:auto;height:120px"  class="iphone" />-->
        <!--</div>-->
        <!--<div style="padding: 0px 27px 0 27px;margin-top: 20px">-->
            <!--<img src="../images/iPhone.png"  style="width:auro;height:120px" />-->
        <!--</div>-->
        <div class="catch"  ref="box1">
            <img src="../images/catch.png" style="width:100px;position:relative;margin-top:-200px;margin-left:138px;" ref="box1"/>
        </div>


        <tabbar>
            <tabbar-item selected>
                <img slot="icon"  src="../images/mine/game-at.png">
                <span slot="label" style="  color:#f63a52">游戏</span>
            </tabbar-item>
            <tabbar-item link="/get-con">
                <img slot="icon" src="../images/home/money.png">
                <span slot="label">领取金币</span>
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
    import { XButton,Tabbar, TabbarItem, Group, Cell } from 'vux'
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
           start(){
                console.log(this.$refs.box1)
               this.$refs.box1.style['animationPlayState'] = 'running';
               // this.$refs.box1.style.background="black";
           },
            stop(){
                console.log(this.$refs.box1)
                this.$refs.box1.style['animationPlayState'] = 'paused';
                // this.$refs.box1.style.background="black";
            }
        },
        created () {
            // utils.bodyRender('#f4f6f9');//背景色
            utils.bodyRenderColor('../images/home/outside.png')
        },
        components: {
            XButton,
            Tabbar,
            TabbarItem,
            Group,
            Cell
        }

    }

</script>

<style lang="scss" scoped >
    /*.iphone {*/
        /*position: absolute;*/
        /*top: 0px;*/
        /*left: 0px;*/
        /*width: 455px;*/
        /*height: 455px;*/
        /*visibility: visible;*/
    /*}*/
    .iphone{
        -webkit-animation:iphone 5s infinite;
    }
    @keyframes iphone {
        0% {
            width: 100px;
            height: 100px;
            left: 500px;
            top: 510px;
            animation-timing-function: linear;
        }
        60% {
            width: 100px;
            height: 100px;
            left: 500px;
            top: 510px;
            animation-timing-function: linear;
        }
        100% {
            width: 100px;
            height: 100px;
            left: 500px;
            top: 260px;
            animation-timing-function: linear;
        }
    }

    @keyframes catch {
        0% {
            margin-top: -200px;
            animation-timing-function: linear;
        }
        50% {
            margin-top: -100px;
            animation-timing-function: linear;
        }
        100% {
            margin-top: 100px;
            animation-timing-function: linear;
        }
    }
    .catch{
        -webkit-animation:catch 5s infinite;
    }
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