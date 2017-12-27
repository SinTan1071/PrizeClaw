<template>
    <div class=" user-item">
        <router-link to="url" class="mint-cell">
            <span class="mint-cell-mask"></span>
            <div class="mint-cell-left"></div>
            <div class="mint-cell-wrapper">
                <div class="mint-cell-title">
                    <div>
                        <img class="indexicon icon-toast"  src="img_src" >
                        <span>{{title}}</span>
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
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'Useritem',
        data () {
            return {

            }
        },
        props:['url','title','img_src']
    }
</script>

<style scoped rel="stylesheet/scss" type="text/css" lang="scss">
    .user-item {
        .indexicon{
            width: 20px ;
            height: 20px
        }
    }
</style>
