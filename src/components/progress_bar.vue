// 团购进度条
<template>
    <div class="bar_all">
        <div class="bar" ref="bar">
            <div class="speed" :style="{width:speed_width+'px'}"></div>
        </div><span>{{big(num).times(100)+'%'}}</span>
    </div>
</template>

<script>
import Big from 'big.js'
export default {
    props:{num:{type:Number,default:3}},
    data:function(){
        return{
           speed_width:0,
        }
    },
    methods:{
        big:(e)=>new Big(e)
    },
    mounted:function(){
        //console.log(new Big(this.$refs.bar.offsetWidth).times(this.num))
        this.speed_width=new Big(this.$refs.bar.offsetWidth).times(this.num).toString()
    },
    computed:{
    }
}
</script>
<style scoped>
    .bar_all{
        font-size: 23px;
        display: flex;
        align-items: center; 
        justify-content: space-between;
        color: #8c7049
    }
    .bar{ 
        margin-right: 26px;
        flex-grow: 1;
        height: 15px; 
        border:1px solid #999; 
        background:url(../assets/img/progress_bar_bg.png) repeat-x left center/ auto 100%;
        animation: duration 5s linear infinite
    }
    .speed{ position: relative; height: 100%; background: #8c7049}
    .speed:after{
        content:'';
        top: -18px;
        right: -7.5px;
        display: inline-block;
        position: absolute;
        width: 0;
        height: 0;
        border-left: 7.5px solid transparent;
        border-right: 7.5px solid transparent;
        border-top: 15px solid #8c7049;
        border-bottom: 0
    }
    @keyframes duration {
        from{
            background-position:left
        }
        to{
            background-position:right
        }
    }
</style>
