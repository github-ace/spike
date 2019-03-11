// 倒计时提示
<template>
    <div class="djs_area">
        <p class="djs_area_title">{{title}}</p>
        <div class="time_view">
            <span>{{hour<10?'0'+hour:hour}}</span>时<span>{{min<10?'0'+min:min}}</span>分<span>{{second<10?'0'+second:second}}</span>秒
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import { setInterval } from 'timers';
export default {
    name:'djs_tip',
    props:['time','title'],
    data:function(){
        return{
            hour:'--',
            min:'--',
            second:'--',
        }
    },
    methods:{
        clearTime:function(){
            if (this.timer) {
                window.clearInterval(this.timer);
            }
        }
    },
    computed:{
    },
    mounted:function(){
        //console.log(moment.duration(moment(this.time)-moment(),'ms'))
        this.timer=window.setInterval(()=>{
            if(moment(this.time)<moment()){
                this.clearTime()
                return
            }
            
            this.hour=moment.duration(moment(this.time)-moment(),'ms').get('hours')+moment.duration(moment(this.time)-moment(),'ms').get('days')*24
        
            this.min= moment.duration(moment(this.time)-moment(),'ms').get('minutes')
        
            this.second=moment.duration(moment(this.time)-moment(),'ms').get('seconds')
       
        },1000)
    },
    beforeDestroy() {
       this.clearTime(); // 在Vue实例销毁前，清除我们的定时器
    }
}
</script>
<style scoped>
.djs_area{
    font-size: 27px;
    color: #a92222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff
}
.djs_area_title{
    font-weight: 600
}
.time_view span{
    background: #000;
    border-radius: 10px;
    color: #fff;
    font-size: 30px;
    display: inline-block;
    height: 42px;
    width: 42px;
    line-height: 42px;
    text-align: center;
    margin:0 10px
}
</style>
