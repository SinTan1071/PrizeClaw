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
        <div>
            <img src="../images/catch.png" class="catch catch-animation" ref="box1">
            <img src="../images/iPhone.png" class="iphone iphone-animation" ref="box2">
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
               this.$refs.box2.style['animationPlayState'] = 'running';
               // this.$refs.box1.style.background="black";
           },
            stop(){
                console.log(this.$refs.box1)
                this.$refs.box1.style['animationPlayState'] = 'paused';
                this.$refs.box2.style['animationPlayState'] = 'paused';
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
    .catch {
        position: absolute;
        width: 100px;
        height: 403.78px;
        left: 138px;
        top: -200px;
    }
    @keyframes catch-animation_gwd-keyframes {
        0% {
            top: -200px;
            left: 138px;
            animation-timing-function: linear;
        }
        60% {
            top: 150px;
            left: 138px;
            animation-timing-function: linear;
        }
        100% {
            top: -100px;
            left: 138px;
            animation-timing-function: linear;
        }
    }
    .catch-animation {
        animation: catch-animation_gwd-keyframes 2.5s linear 0s infinite  normal forwards;
    }
    .iphone {
        position: absolute;
        visibility: visible;
        width: 100px;
        height: 100px;
        left: 138px;
        top: 510px;
    }
    @keyframes iphone-animation_gwd-keyframes {
        0% {
            width: 100px;
            height: 100px;
            left: 138px;
            top: 510px;
            animation-timing-function: linear;
        }
        60% {
            width: 100px;
            height: 100px;
            left: 138px;
            top: 510px;
            animation-timing-function: linear;
        }
        100% {
            width: 100px;
            height: 100px;
            left: 138px;
            top: 260px;
            animation-timing-function: linear;
        }
    }
    .iphone-animation {
        animation: iphone-animation_gwd-keyframes 2.5s linear 0s  infinite normal forwards;
    }
</style>