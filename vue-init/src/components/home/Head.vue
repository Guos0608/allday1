<template>
    <div class="head">
        <div class="back">
            &lt;
        </div>
        <div class="search">
            输入城市/景点/游玩主题
        </div>
        <div class="city">
            北京
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="stylus">
@import '~css/vue.styl'
    .head{
        width:100%;
        height:1.46666666rem;
        background:$headBG
        line-height:1.4666666666rem;
        display flex;
        justify-content space-around
        .back{
            font-size 0.9333333rem;
            color  #fff;
            width 1.0666666rem;
            margin 0 0.3333333rem;
        }
        .search{
            height 0.933333rem;
            background #fff;
            font-size 0.43333333rem;
            flex:1;
            line-height 0.9333333rem;
            border-radius:0.13333rem;
            margin-top 0.2722222rem;
            padding 0 0.222222222rem;
            color  #fff0ed;
        }
        .city{
            font-size 0.43333333rem;
            width 1.06666666rem;
            height 100%;
            margin 0 0.333333rem;
            color #fff;
            position relative
        }
        .city:after{
            width 0.2333rem;
            height 0.23333rem;
            position absolute;
            top:0.5333333rem;
            right -0.18111rem;
            content "";
            border-left 2px solid #fff;
            border-bottom 2px solid #fff;
            transform rotate(-45deg);
            }
    }
</style>