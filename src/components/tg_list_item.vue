// 团购列表单元
<template>
    <div class="item">
        <div>
            <div class="type_icon">{{item_data.type='十人团'}}</div>
            <img class="item_img" :alt="item_data.name" :src="item_data.img"/>
        </div>
        <div class="content">
            <div class="name">{{item_data.name}}</div>
            <div class="center"><ProgressBar class="content_bar" :num="0.2"/><CustomBut text="立即拼团"/></div>
            <div class="bottom">
                <div><span class="jiage">¥{{item_data.value}}</span><span class="buy_one">单买价格¥{{item_data.prev_value}}</span></div>
                <div class="time">{{item_data.time}}结束</div>
            </div>
        </div>
    </div>
</template>
<script>
import ProgressBar from '@/components/progress_bar.vue'
import CustomBut from '@/components/custom_button.vue'
export default {
    name:'tg_list_item',
    props:['item_data'],
    components:{ProgressBar,CustomBut}
}
</script>
<style scoped>
    .item{
        position: relative;
        padding:0 1px;
        height: 586px;
        background: #fff   
    }
    .item_img{
        display: inline-block;
        height: 406px;
        width: 100%;
    }
    .type_icon{
        position: absolute;
        top: 22px; 
        left: 0;
        height: 65px;
        line-height: 65px;
        width: 152px;
        font-size: 35px;
        font-weight: 600;
        color: #fff;
        text-align: center;
        background: linear-gradient(to left, #fae3ab , #8b6836)
    }
    .content{
        height: 158px;
        padding:0 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly
    }
    .name{
        width: 500px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 30px;
    }
    .center{ display: flex; align-items: center; justify-content: space-between}
    .bottom{ display: flex; align-items: center; justify-content: space-between}
    .content_bar{ flex-grow: 1; margin-right: 22px}
    .bottom{ font-size: 20px; }
    .jiage{ margin-right: 20px; font-size: 30px; color: #b13334; font-weight: 600}
    .buy_one{ color: #999}
    .time{ color:#957c5d}
</style>
