<template>
    <div class="user">
        <mt-header title="个人资料">
            <router-link to="/user-account" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <mt-cell title="趣玩一把"  label="这里是个人介绍"  value="带 icon" class="user-info" style="height: 115px;padding-top:40px;font-size: 14px">
            <span>
                <img src="../images/edit.png" width="15" height="15" >
            </span>
            <img slot="icon"  src="../images/home/money.png" width="60" height="60" class="user-pic">
        </mt-cell>
        <div class="user-binding">
            <mt-field label="绑定手机号" placeholder="输入您的手机号" v-model="userPhone"></mt-field>
            <mt-field label="绑定微信号" placeholder="输入您的微信号"  v-model="userWeixin"></mt-field>
        </div>
    </div>

</template>


<script>
    let $query = {};
    let $data = {

    };

    export default {

        data() {
            return $data;
        },
        methods: {}
    }

</script>

<style lang="scss" >
    html,body{
        height: 100%;
        width: 100%;
    }
    .mint-cell-wrapper{
       background-image: none;
    }
    .user{
        .mint-header{
            background-color:#000;
        }

        /*.mint-cell-wrapper{*/
            /*height: 115px;*/
        /*}*/
        .mint-cell-label{
            margin:-15px 0 0 64px;
            font-size: 14px;
        }
        .user-pic{
            border-radius: 100%;
        }
        .user-binding{
            margin-top: 20px;
        }
    }

</style>