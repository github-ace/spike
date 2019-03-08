//主页面
<template>
    <div class="all">
        <Header style="position:fixed; top:0; z-index:10; width:100%; max-width:600px" :itemArray="['秒杀','团购','抢购']" :index="index" :switch_tab="switch_tab"/>
        
        <div v-if="index==0">
            <timeList :time_list="time_list"/>
            <CountDown class="custom_CountDown" :time="time"/>
            <listItem class="list_juli" v-for="(item,index) in miaosha_list" :key="index" :item_data="item" >{{item.state?'马上秒杀':'已抢完'}}</listItem>
        </div>
        <div v-else-if="index==1">
            <TglistItem class="list_juli tuangou" v-for="(item,index) in tuangou_list" :key="index" :item_data="item"/>
        </div>
        <div v-else-if="index==2">
            <listItem class="list_juli" v-for="(item,index) in qianggou_list" :key="index" :item_data="item">{{item.state?'立即抢购':'已抢完'}}</listItem>
        </div>
    </div>
</template>

<script>
import listItem from "@/components/list_item.vue"
import TglistItem from "@/components/tg_list_item.vue"
import CountDown from "@/components/djs_tip.vue"
import Header from "@/components/header"
import timeList from "@/components/time_list"
import axios from 'axios'

export default {
    components:{listItem,TglistItem,CountDown,Header,timeList},
    data:function(){
        return{
            time:'2019-03-06 15:00:00',
            index:localStorage.miaosha_index?localStorage.miaosha_index:0,
            time_list:[
                {
                time:'14:00',
                state:1,
            },{
                time:'15:00',
                state:0,
            },{
                time:'16:00',
                state:0,
            },{
                time:'17:00',
                state:0,
            }],
            miaosha_list:[{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:0
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1
            }],
            tuangou_list:[{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                time:'2018/12/30 21:00:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                time:'2018/12/30 21:00:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                time:'2018/12/30 21:00:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                time:'2018/12/30 21:00:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                time:'2018/12/30 21:00:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                time:'2018/12/30 21:00:00'
            }],
            qianggou_list:[{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:0,
                start_time:'12:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                start_time:'12:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                start_time:'12:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                start_time:'12:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                start_time:'12:00'
            },{
                img:'',
                name:'名字名字名字名字名字名字名字名字名字',
                value:'3999',
                prev_value:'3999',
                num:'160',
                state:1,
                start_time:'12:00'
            }]
        }
    },
    methods:{
        switch_tab:function(e){
            if(e==this.index) return
            this.index=localStorage.miaosha_index=e
        }
    }
};
</script>
<style scoped>
.all{
    padding-top: 85px
}
    .custom_CountDown{ 
        margin-bottom: 10px;
        padding: 0 28px
    }
    .list_juli{
        margin-bottom: 22px
    }
    .tuangou{
        padding-top: 22px
    }
</style>
