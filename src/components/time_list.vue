// 秒杀场次时间列表组
<template>
    <swiper :options="swiperOption">
        <swiper-slide class="time_item" :class="item.state?'active':''" v-for="item in time_list" :key="item.id">
            <p class="time_value">{{item.time}}</p>
            <p class="state">{{item.state?'秒杀中':'即将开场'}}</p>
        </swiper-slide>
    </swiper>
</template>
<script>
export default {
    props:['time_list'],
    components: {
        // swiper,
        // swiperSlide
    },
    data:function(){
        return{
            swiperOption: {
            slidesPerView: 3,
            spaceBetween: 0,
            freeMode: true
            }
        }
    }
}
</script>
<style scoped>
    .time_item{ padding: 10px 0; height: 95px; text-align: center;color: #616161;display: flex; justify-content: space-evenly; flex-direction: column}
    .time_item.active{ color: #876a44}
    .time_value{ font-size: 30px; font-weight: bold}
    .state{ font-size: 22px}
</style>