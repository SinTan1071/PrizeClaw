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
            <x-dialog v-model="gameRule" hide-on-blur :dialog-style="{'max-width': '100%','padding-right':'30px','height':'50%','padding-left':'30px','background-color': 'transparent'}">
                <tab>
                    <tab-item selected >游戏规则</tab-item>
                    <tab-item >奖品介绍</tab-item>
                </tab>
                <div style="background-color:#fff;color:#fff;text-align:center;padding:0 30px" @click="gameRule = false" >
                    <span style="" class="dialog-content">1.苹果专场内产品由京东自营、官方等渠道进货以确保为正品<br>
                    2.专场内产品为：苹果8 64GB 奖品以5折优惠券发放，中奖后用户可在奖品中心领取，支付尾款后顺丰快递到用户手中<br>
                        3.此专场游戏需80金币夹一次，中奖后可自行选择颜色
                        1.苹果专场内产品由京东自营、官方等渠道进货以确保为正品<br>
                    2.专场内产品为：苹果8 64GB 奖品以5折优惠券发放，中奖后用户可在奖品中心领取，支付尾款后顺丰快递到用户手中<br>
                        3.此专场游戏需80金币夹一次，中奖后可自行选择颜色
                        1.苹果专场内产品由京东自营、官方等渠道进货以确保为正品<br>
                    2.专场内产品为：苹果8 64GB 奖品以5折优惠券发放，中奖后用户可在奖品中心领取，支付尾款后顺丰快递到用户手中<br>
                        3.此专场游戏需80金币夹一次，中奖后可自行选择颜色
                    </span>
                    
                    <br>
                    <br>
                    <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
                </div>
                <mt-button type="primary" @click="gameRule = false" class="rule">继续游戏</mt-button>
            </x-dialog>
            <div>
                <div style="text-align: center">
                    <img src="../images/catch.png" id="catch_box1" class="catch catch-animation" ref="box1" style="z-index: 2;margin: 80px auto" >
                </div>
                <!--<div class="iphone-coincide "  >-->

                <!--</div>-->
                <img src="../images/huawei.png" id="gwd-image_1" class="huaweiphone1 huaweiphone1-animation">
                <img  src="../images/huawei.png" id="gwd-image_2" class="huaweiphone2 huaweiphone2-animation">
                <img  src="../images/huawei.png" id="gwd-image_3" class="huaweiphone3 huaweiphone3-animation">
                <img src="../images/huawei.png" id="gwd-image_4" class="huaweiphone4 huaweiphone4-animation">
                <img  src="../images/huawei.png" id="gwd-image_5" class="huaweiphone5 huaweiphone5-animation">
                <img  src="../images/huawei.png" id="gwd-image_6" class="huaweiphone6 huaweiphone6-animation">
                <img  src="../images/huawei.png" id="gwd-image_7" class="huaweiphone7 huaweiphone7-animation">
                <img  src="../images/huawei.png" id="gwd-image_8" class="huaweiphone8 huaweiphone8-animation">

            </div>
            <!-- <div style="padding: 276px 27px 0 27px" ref="stairs"> -->
                 <div ref="stairs" class="stairs-one">
                <img src="../images/home/Conveyor.png"  style="width:100%;height:43px" />
            </div>
            <div style="padding: 0px 27px 0 27px;margin-top: 50px" class="stairs-two">
                <img src="../images/home/Conveyor.png"  style="width:100%;height:43px" />
            </div>
            <div class="button-qurey">
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
    import {ButtonTab,ButtonTabItem,Divider,XDialog, Tabbar, TabbarItem, Group, Cell,Tab, TabItem } from 'vux'
    import {mapState} from 'vuex'
    import utils from '../store/utils'
    import $ from 'jquery'
    let $query = {};
    let $data = {
        selected:'游戏',
        gameRule:false,
        demo01: 0,
        gameRuleDetail:false
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
            gameRules(){
                this.gameRuleDetail=true
            },
            prizeIntroduction(){

            },
            myAccount(){
                this.$router.push('../welcome')
            },
            clickRule(){
                // MessageBox('游戏规则', '1.夹夹乐分三个场景，每个专场的商品所花费金币不同，商品价值也不同\n' +
                //     '2.能否夹中奖品，取决于出夹的时机选择，和中奖概率\n' +
                //     '3.所有奖品为官方授权渠道提供，均为正品\n' +
                //     '(1).小米手机专场：小米5手机 16GB  黑色 全网通，价值2999元\n' +
                //     '(2).苹果手机专场：iPhone7 32GB 黑色 全网通 价值5288元\n' +
                //     '(3).电脑专场：Mac pro 512M 黑色 价值12890元\n' +
                //     '4.用户中奖后可在平台兑换与商品等额人民币，或领取后由平台方快递送到用户手中，兑换或者领取将收取1%的手续费\n' +
                //     '5.用户应遵循公平公正的游戏原则，不得使用其他作弊行为参与游戏');
                this.gameRule=true
            },
            start(){
//                $('.catch-animation').animate({
//                    left:300
//                }, {
//                    duration: 500,
//                    step: function() {
//                        var that = this;
//                            if(parseInt(that.style.left) >= parseInt(o.style.left)) {
//                                console.log('经过障碍'+count++);
//                                obstacle.shift();
//                            }
//                        ;
//
//                })
                console.log('document.documentElement.clientWidth',document.documentElement.clientWidth)
                console.log('document.documentElement.clientHeight',document.documentElement.clientHeight)
                console.log('window.onresize',window.onresize)
                console.log('$ offeset',$(".catch-animation")[0].offsetLeft);
                console.log('$',$(".catch-animation"));
                console.log(' $("#gwd-image_2)', $("#gwd-image_2")[0].offsetLeft)
//                console.log('reversedMessage',reversedMessage)
                console.log('memberId',this.imageLeft)



                // this.$refs.box1.css =("catch-animation","catch-animation_gwd-keyframes 2.5s linear 0s 1  normal forwards");
//                var catch_box1 = document.getElementById('catch_box1');
//                catch_box1.addEventListener('webkitAnimationEnd', endHandler);
                console.log("llalallla")
//                function endHandler() {
//                    console.log("llalalllasdadadaas")
//                    catch_box1.removeEventListener('webkitAnimationEnd', endHandler);
//                    catch_box1.className = '';
//                    setTimeout(function () {
//                        catch_box1.className = 'catch-animation';
//                    }, 0);
//                }
                this.$refs.box1.style['animationPlayState'] = 'running';
                console.log(' 当前状态', this.$refs.box1.style['animationPlayState'])
//                var t = setTimeout(function (){
//                    this.$refs.box1.style['animationPlayState'] = 'paused';
//                    console.log('执行了');
//                }, 2500);
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
           utils.bodyRenderColor('  url(../images/home/outsidenew.png) no-repeat fixed top')
           console.log('document.documentElement.clientWidth',document.documentElement.clientWidth)
           console.log('document.documentElement.clientHeight',document.documentElement.clientHeight)
           console.log('this.$refs',this.$refs)
        },
        computed:{
            // imageLeft: function () {
            //     // `this` 指向 vm 实例
            //     if($("#gwd-image_2")[0].offsetLeft==-100){
            //         return   this.$refs.box1.style['animationPlayState'] = 'running';
            //     }else{
            //         return   this.$refs.box1.style['animationPlayState'] = 'paused';
            //     }

            // }

        },
        components: {
            Divider,
            ButtonTabItem,
            ButtonTab,
            XDialog,
            Tabbar,
            TabbarItem,
            Group,
            Cell,
            Tab, 
            TabItem
        },
        mounted(){

            console.log(' $("#gwd-image_2)', $("#gwd-image_2")[0].offsetLeft)
        }

    }

</script>

<style lang="scss" >
    html,body{
        height: 100%;
        width: 100%;
        background:url(../images/home/outsidenew2.png);
        background-size: 100% 100%;
    }
    .weui-dialog{
        width: 80%;
    }

    .vux-button-group > a{
        text-underline: none;
    }
    .vux-button-group > a.vux-button-group-current{
        background-color: #FF6074 ;
    }
    .vux-button-group > a.vux-button-tab-item-first{
        /*border: 0px;*/
        /*border-top-left-radius: 3px;*/
         /*border-bottom-left-radius: 0px;*/
    }
    .vux-button-group > a.vux-button-tab-item-last:after {
         border-right: 1px solid #fff;
         border-top: 1px solid #fff;
         border-bottom: 1px solid #fff;
    }
    .vux-button-group > a.vux-button-tab-item-first:after {
        border-right: 1px solid #fff;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }
    .home{
        .dialog-content{
            font-size: 12px;
            color: #212121;
            letter-spacing: 0;
            line-height: 24px;
        }
        .button-qurey{
            display: flex;
            justify-content: space-evenly;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            position: absolute;
            z-index: 500;
            bottom: 53px;
            width: 100%;
        }
        .stairs-one{
           padding-top: 200px;
           padding-left: 27px;
           padding-right: 27px;
            // position: absolute;
            // z-index: 500;
            // bottom: 200px;
            // width: 100%;

        }
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
            top: -200px;
            animation-timing-function: linear;
        }
        100% {
            top: -140px;
            animation-timing-function: linear;
        }
    }
    .catch-animation {
        animation: catch-animation_gwd-keyframes 2s linear 0s 1  normal forwards;
    }
    @keyframes catch-animation_gwd-keyframes-back {
    0% {
        top: -140px;
        animation-timing-function: linear;
    }
    60% {
        top: -200px;
        animation-timing-function: linear;
    }
    100% {
        top: -300px;
        animation-timing-function: linear;
     }
    }
    .catch-animation-back{
         animation: catch-animation_gwd-keyframes-back 2s linear 0s 1  normal forwards;
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
        left: 135px;
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
        width: 50px;
        height: 50px;
        left: 240px;
        top: 330px;
    }
    .gwd-div-1u6p {
        height: 450px;
        width: 337.5px;
    }
    .gwd-div-102k {
        height: 450px;
        width: 337.5px;
    }
    .huaweiphone1 {
        position: absolute;
        height: 75px;
        width: 75px;
        top: 324px;
        left: -100px;
    }
    .huaweiphone2 {
        position: absolute;
        top: 324px;
        width: 75px;
        height: 75px;
        left: 20px;
    }
    .huaweiphone3 {
        position: absolute;
        width: 75px;
        height: 75px;
        top: 324px;
        left: 140px;
    }
    .huaweiphone4 {
        position: absolute;
        width: 75px;
        height: 75px;
        top: 324px;
        left: 260px;
    }
    .huaweiphone5 {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 0px;
        top: 254px;
    }
    .huaweiphone6 {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 120px;
        top: 254px;
    }
    .huaweiphone7 {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 240px;
        top: 254px;
    }
    .huaweiphone8 {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 360px;
        top: 254px;
    }
    @keyframes huaweiphone4-animation_gwd-keyframes {
        0% {
            left: 260px;
            animation-timing-function: linear;
        }
        100% {
            left: 380px;
            animation-timing-function: linear;
        }
    }
    .huaweiphone4-animation {
        animation: huaweiphone4-animation_gwd-keyframes 2s linear 0s infinite normal forwards;
    }
    @keyframes huaweiphone3-animation_gwd-keyframes {
        0% {
            left: 140px;
            animation-timing-function: linear;
        }
        100% {
            left: 260px;
            animation-timing-function: linear;
        }
    }
    .huaweiphone3-animation {
        animation: huaweiphone3-animation_gwd-keyframes 2s linear 0s infinite normal forwards;
    }
    @keyframes huaweiphone2-animation_gwd-keyframes {
        0% {
            left: 20px;
            animation-timing-function: linear;
        }
        100% {
            left: 140px;
            animation-timing-function: linear;
        }
    }
    .huaweiphone2-animation {
        animation: huaweiphone2-animation_gwd-keyframes 2s linear 0s infinite normal forwards;
    }
    @keyframes huaweiphone1-animation_gwd-keyframes {
        0% {
            left: -100px;
            animation-timing-function: linear;
        }
        100% {
            left: 20px;
            animation-timing-function: linear;
        }
    }
    .huaweiphone1-animation {
        animation: huaweiphone1-animation_gwd-keyframes 2s linear 0s infinite normal forwards;
    }
    @keyframes huaweiphone5-animation_gwd-keyframes {
        0% {
            left: 0px;
            animation-timing-function: linear;
        }
        100% {
            left: -120px;
            animation-timing-function: linear;
        }
    }
    .huaweiphone5-animation {
        animation: huaweiphone5-animation_gwd-keyframes 2s linear 0s infinite normal forwards;
    }
    @keyframes huaweiphone6-animation_gwd-keyframes {
        0% {
            left: 120px;
            animation-timing-function: linear;
        }
        100% {
            left: 0px;
            animation-timing-function: linear;
        }
    }
    .huaweiphone6-animation {
        animation: huaweiphone6-animation_gwd-keyframes 2s linear 0s infinite normal forwards;
    }
    @keyframes huaweiphone7-animation_gwd-keyframes {
        0% {
            left: 240px;
            animation-timing-function: linear;
        }
        100% {
            left: 120px;
            animation-timing-function: linear;
        }
    }
    .huaweiphone7-animation {
        animation: huaweiphone7-animation_gwd-keyframes 2s linear 0s infinite normal forwards;
    }
    @keyframes huaweiphone8-animation_gwd-keyframes {
        0% {
            left: 360px;
            animation-timing-function: linear;
        }
        100% {
            left: 240px;
            animation-timing-function: linear;
        }
    }
    .huaweiphone8-animation {
        animation: huaweiphone8-animation_gwd-keyframes 2s linear 0s infinite normal forwards;
    }


</style>