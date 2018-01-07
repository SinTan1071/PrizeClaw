<template>
    <div class="home">
        <mt-header title="首页">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="content">
            <!--            <img class="img_outside" style="width:100%;height:auto" src="../images/home/outside.png" /> -->
            <div class="nav" style="display:flex;justify-content: space-between">
                <div class="nav-left" style="display:inline-block">
                    <span class="left-font">小米专场</span>
                    <!--   <img src="../images/home/nav_light.png" style="width:120px;height:43px" /> -->
                </div>
                <div class="nav-middle"  style="display:inline-block;z-index:10">
                    <span class="middle-font" >苹果7P 专场  </span>
                    <p style="font-size:10px;margin-top: 1px" class="middle-font-two">150金币／次</p>
                    <!-- <img src="../images/home/nav_middle.png"  style="width:120px;height:43px" /> -->
                </div>
                <div class="nav-right"  style="display:inline-block">
                    <span class="right-font">Mac专场</span>
                    <!-- <img src="../images/home/nav_right.png"  style="width:120px;height:43px" /> -->
                </div>
            </div>
            <div>
                <mt-button type="primary" @click="clickRule()" class="rule">规则</mt-button>
            </div>
            <div>
                <div style="text-align: center">
                    <img src="../images/catch.png" id="catch_box1"class="catch catch-animation" ref="box1" style="z-index: 2;margin: 0 auto">
                </div>
                <div class="iphone-coincide " >

                </div>
                <div >
                    <img src="../images/huawei.png" class="iphone iphone-animation" ref="box2" style="z-index: 1">
                </div>
                <img  src="../images/huawei.png" id="img01" class="iPhone1 iPhone1-animation">
                <img  src="../images/huawei.png" id="img02" class="iPhone2 iPhone2-animation">
                <div >
                    <img src="../images/huawei.png" id="img03" class="iPhone3 iPhone3-animation" >
                </div>
                <img src="../images/huawei.png" id="img06" class="iPhone4 iPhone4-animation">
                <img src="../images/huawei.png" id="img05" class="iPhone5 iPhone5-animation">
                <img src="../images/huawei.png" id="img04" class="iPhone6 iPhone6-animation">
            </div>
            <div style="padding: 276px 27px 0 27px">
                <img src="../images/home/Conveyor.png"  style="width:100%;height:43px" />
            </div>
            <div style="padding: 0px 27px 0 27px;margin-top: 50px">
                <img src="../images/home/Conveyor.png"  style="width:100%;height:43px" />
            </div>
            <div class="nav" style="display:flex;justify-content:space-evenly">
                <router-link  :to="'/recharge'" >
                    <img src="../images/charge.png"  style="height:auto;height:50px" />
                </router-link>
                <div @click="start">
                    <img src="../images/begin.png"  style="width:auto;height:50px" />
                </div>
            </div>

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
    import { Tabbar, TabbarItem, Group, Cell } from 'vux'
    import {mapState} from 'vuex'
    import utils from '../store/utils'
    let $query = {};
    let $data = {
        selected:'游戏'
    };

    export default {

        data () {
            return $data;
        },
        computed: {
            //网页可见区域宽和网页可见区域宽
            screenWidth: function (state) {
                if(state.screen.screenWidth){
                    return state.screen.screenWidth;
                }else{
                    utils.onResize(this);
                    return state.screen.screenWidth;
                }
            }


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
            },
            start(){
                console.log(this.$refs.box1)
                // $(".btn").click(function(){
                //     $(".b").css("-webkit-animation","anim 2s");
                // })

                // this.$refs.box1.css =("catch-animation","catch-animation_gwd-keyframes 2.5s linear 0s 1  normal forwards");
                var catch_box1 = document.getElementById('catch_box1');
                catch_box1.addEventListener('webkitAnimationEnd', endHandler);
                console.log("llalallla")
                function endHandler() {
                    console.log("llalalllasdadadaas")
                    catch_box1.removeEventListener('webkitAnimationEnd', endHandler);
                    catch_box1.className = '';
                    setTimeout(function () {
                        catch_box1.className = 'catch-animation';
                    }, 0);
                }
                // this.$refs.box1.style['animationPlayState'] = 'running';
                // window.setTimeout(function(){
                //     this.$refs.box1.style['animationPlayState'] = 'paused';
                // },2500)
            },
            stop(){
                console.log(this.$refs.box1)
                this.$refs.box1.style['animationPlayState'] = 'paused';
                this.$refs.box2.style['animationPlayState'] = 'paused';
                // this.$refs.box1.style.background="black";
            }
        },
        created () {
            window.onresize=function () {
                setTimeout(function () {
                    utils.onResize(this);
                }, 100);
            }
            // utils.bodyRender('#f4f6f9');//背景色
            utils.bodyRenderColor('  url(../images/pic.png) no-repeat fixed top')
        },
        components: {
            Tabbar,
            TabbarItem,
            Group,
            Cell
        }

    }

</script>

<style lang="scss" >
    html,body{
        height: 100%;
        width: 100%;
        background:url(../images/home/outside.png);
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
                width: 120px;
                height: 43px;
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
                width: 120px;
                height: 43px;
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
                width: 120px;
                height: 43px;
                background: url(../images/home/nav_right.png) no-repeat top left;
                background-size: 120px 43px;
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
    .mint-header{
        z-index: 100;
    }


    .catch {
        position: absolute;
        width: 100px;
        height: 403.78px;
        top: -300px;
    }
    @keyframes catch-animation_gwd-keyframes {
        0% {
            top: -300px;
            animation-timing-function: linear;
        }
        60% {
            top: 40px;
            animation-timing-function: linear;
        }
        100% {
            top: -160px;
            animation-timing-function: linear;
        }
    }
    .catch-animation {
        animation: catch-animation_gwd-keyframes 2.5s linear 0s 1  normal forwards;
    }
    .iphone-coincide {
        position: absolute;
        visibility: visible;
        width: 100px;
        height: 100px;
        /*left: 500px;*/
        top: 400px;
        left:50%;
        margin-left: -50px;
        background-color: #abcdef;
    }
    .iphone {
        position: absolute;
        visibility: visible;
        width: 100px;
        height: 100px;
        /*left: 500px;*/
        top: 400px;
        left:50%;
        margin-left: -50px;
    }
    @keyframes iphone-animation_gwd-keyframes {
        0% {
            width: 100px;
            height: 100px;
            /*left: 138px;*/
            left:50%;
            margin-left: -50px;
            top: 400px;
            animation-timing-function: linear;
        }
        60% {
            width: 100px;
            height: 100px;
            /*left: 138px;*/
            top: 400px;
            animation-timing-function: linear;
        }
        100% {
            width: 100px;
            height: 100px;

            /*left: 138px;*/
            top: 200px;
            animation-timing-function: linear;
        }
    }
    .iphone-animation {
        animation: iphone-animation_gwd-keyframes 2.5s linear 0s  infinite normal forwards;
    }


    .iPhone1 {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 35px;
        top: 400px;
    }
    .iPhone2 {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 400px;
        /*left: 210px;*/
        left:50%;
        margin-left: -50px;
    }
    .iPhone3 {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 400px;
        left: 240px;
    }
    .iPhone4 {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 40px;
        top: 330px;
    }
    .iPhone5 {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 140px;
        top: 330px;
    }
    .iPhone6 {
        position: absolute;
        left: 240px;
        top: 330px;
        width: 50px;
        height: 50px;
    }
    @keyframes iPhone3-animation_gwd-keyframes {
        0% {
            left: 240px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        20% {
            left: 240px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        40% {
            left: 140px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        60% {
            left: 40px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        80% {
            left: 35px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        100% {
            left:50%;
            margin-left: -50px;
            /*left: 210px;*/
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
    }
    .iPhone3-animation {
        animation: iPhone3-animation_gwd-keyframes 5s linear 0s infinite normal forwards;
    }
    @keyframes iPhone2-animation_gwd-keyframes {
        0% {
            left:50%;
            margin-left: -50px;
            width: 100px;
            height: 100px;
            top: 400px;
            animation-timing-function: linear;
        }
        20% {
            left: 240px;
            width: 100px;
            height: 100px;
            top: 400px;
            animation-timing-function: linear;
        }
        40% {
            left: 240px;
            width: 50px;
            height: 50px;
            top: 330px;
            animation-timing-function: linear;
        }
        60% {
            left: 140px;
            width: 50px;
            height: 50px;
            top: 330px;
            animation-timing-function: linear;
        }
        80% {
            left: 40px;
            width: 50px;
            height: 50px;
            top: 330px;
            animation-timing-function: linear;
        }
        100% {
            left: 35px;
            width: 100px;
            height: 100px;
            top: 400px;
            animation-timing-function: linear;
        }
    }
    .iPhone2-animation {
        animation: iPhone2-animation_gwd-keyframes 5s linear 0s infinite normal forwards;
    }
    @keyframes iPhone1-animation_gwd-keyframes {
        0% {
            left: 35px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        20% {
            left:50%;
            margin-left: -50px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        40% {
            left: 240px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        60% {
            left: 240px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        80% {
            left: 140px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        100% {
            left: 40px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
    }
    .iPhone1-animation {
        animation: iPhone1-animation_gwd-keyframes 5s linear 0s infinite normal forwards;
    }
    @keyframes iPhone4-animation_gwd-keyframes {
        0% {
            left: 40px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        20% {
            left: 35px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        40% {
            left:50%;
            margin-left: -50px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        60% {
            left: 240px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        80% {
            left: 240px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        100% {
            left: 140px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
    }
    .iPhone4-animation {
        animation: iPhone4-animation_gwd-keyframes 5s linear 0s infinite normal forwards;
    }
    @keyframes iPhone5-animation_gwd-keyframes {
        0% {
            left: 140px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        20% {
            left: 40px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        40% {
            left: 35px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        60% {
            left:50%;
            margin-left: -50px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        80% {
            left: 240px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        100% {
            left: 240px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
    }
    .iPhone5-animation {
        animation: iPhone5-animation_gwd-keyframes 5s linear 0s infinite normal forwards;
    }
    @keyframes iPhone6-animation_gwd-keyframes {
        0% {
            left: 240px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        20% {
            left: 140px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        40% {
            left: 40px;
            top: 330px;
            width: 50px;
            height: 50px;
            animation-timing-function: linear;
        }
        60% {
            left: 35px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        80% {
            left:50%;
            margin-left: -50px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
        100% {
            left: 240px;
            top: 400px;
            width: 100px;
            height: 100px;
            animation-timing-function: linear;
        }
    }
    .iPhone6-animation {
        animation: iPhone6-animation_gwd-keyframes 5s linear 0s infinite normal forwards;
    }

</style>