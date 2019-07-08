<template>
    <div>
        <Head></Head>
        <Swiper :data="list"></Swiper>
        <IconList :data="list"></IconList>
    </div>
</template>
<script>
import Head from '@/components/home/Head'
import Swiper from '@/components/home/Swiper'
import IconList from '@/components/home/IconList'
export default {
    props:{

    },
    components:{
        Head,
        Swiper,
        IconList
    },
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    methods:{
        postList(){
            this.axios.get("/api/dataHome.json").then((res)=>{   
            this.list = res.data.data[0]
            console.log(this.list)
            })
        }
    },
    created(){

    },
    mounted(){
        this.postList()
        
    }
}
</script>
<style scoped lang="">

</style>