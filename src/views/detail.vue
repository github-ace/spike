<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide>
                <img class="" src="" alt="">
            </swiper-slide>
        </swiper>
        <div class="info">
            <div class="L1"><img src="@/assets/ms_icon.png" alt=""><CountDown title="倒计时" :time="time"/></div>
            <p class="name">{{name}}</p>
            <p><span class="value">¥{{value}}</span><span class="prev_value">原价格¥{{prev_value}}</span></p>
            <p class="L3">支付立即秒杀，时间结束，秒杀失败自动退款<img src="@/assets/one_icon.png" alt=""></p>
        </div>
        <p class="detail_title">宝贝详情</p>
        <article class="rich_text" v-html="rich_text">

        </article>
        <footer class="opreate">
            <button class="invite">邀请好友</button><button class="buy">立即购买</button>
        </footer>
    </div>
</template>
<script>
import CountDown from "@/components/djs_tip.vue"
export default {
    components:{CountDown},
    data:function(){
        return{
            swiperOption:{

            },
            time:'2019-03-13 12:20:00',
            name:'纪梵希什么么么么纪梵希什么么么么纪梵希什么么么么纪梵希什么么么么',
            value:'3999',
            prev_value:'5888',
            rich_text:'<p>富文本</p>'
        }
    }
}
</script>
<style scoped>
    .swiper{ height: 407px;}
    .swiper img{ min-height: 100%; width: 100%; display: inline-block}
    .info{ background: #fff; padding: 30px 30px 0}
    .L1{display: flex; justify-content: space-between; align-items: center}
    .L1 img{ width: 114px; height: 40px;}
    .name{ margin: 15px 0; font-size: 33px; color: #232326; line-height: 60px; font-weight: 500}
    .value{
        color: #ac2b2b;
        font-size: 35px;
        font-weight: 600
    }
    .prev_value{
        margin-left: 20px;
        color: #8f8f8f;
        position: relative;
        font-size: 25px;
        display: inline-block;
        text-decoration: line-through
    } 
    .L3{ letter-spacing: 1px; height: 110px; font-size: 25px; color: #999; display: flex; justify-content: center; align-items: center}
    .L3 img{ margin-left: 15px; width: 25px; height: 25px;}
    .detail_title{ margin:0 auto; font-size: 22px; font-weight: 600; color: #999; height: 63px; width: 350px; justify-content: space-between; display: flex; align-items: center; }
    .detail_title:before{content: ''; display: inline-block; width: 120px; height: 1px; background: linear-gradient(to right, transparent , #999)}
    .detail_title:after{content: ''; display: inline-block; width: 120px; height: 1px; background: linear-gradient(to right, #999 , transparent)}
    .rich_text{ min-height: 400px; padding-bottom: 102px; background: #fff}
    .opreate{ position: fixed; bottom: 0; width: 100%; font-size: 25px; font-weight: 600; border-top: 1px solid #8c704b; height: 102px; display: flex; align-items: stretch}
    .invite{ width: 130px; background: #fff; color: #8c704b; border:none}
    .buy{ flex-grow: 1; background: #8c704b; color: #fff; border:none}
</style>
