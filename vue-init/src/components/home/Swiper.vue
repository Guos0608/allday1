<template>
  <div class="swiper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(item,index) in list" :key="index"><img :src="item.img" alt=""></swiper-slide>
     
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {},
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {//swiper3
        autoplay: true,
        speed: 1000,
        loop:true
        },
      list: [
        {
          img: "@/../static/images/1.jpg"
        },
        {
          img: "@/../static/images/2.jpg"
        },
        {
          img: "@/../static/images/3.jpg"
        },
        {
          img: "@/../static/images/4.jpg"
        },
        {
          img: "@/../static/images/5.jpg"
        },
        {
          img: "@/../static/images/6.jpg"
        },
        {
          img: "@/../static/images/7.jpg"
        },
        {
          img: "@/../static/images/8.jpg"
        },
        {
          img: "@/../static/images/9.jpg"
        },
        {
          img: "@/../static/images/10.jpeg"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="stylus">
.swiper {
  width: 100%;
  height: 2.9333333rem;
  swiper-slide{
      width 100%;
      height 100%;
      img{
          width 100px;
          height 100%;
      }
  }
}
</style>