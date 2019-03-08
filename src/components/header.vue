// 活动页面头部
<template>
    <div class="nav">
        <span :class="index==key?'active':''" v-for="(item,key) in itemArray" :key="key" @click="switch_tab(key)">{{item}}</span>
    </div>
</template>
<script>
export default {
    props:['index','itemArray','switch_tab'],
    methods:{
        // switch_tab:function(e){
        //     console.log(e)
        // }
    }
}
</script>
<style scoped>
.nav{ width: 100%; display: flex; text-align: center; line-height: 85px;color:#f0e0ae; font-size: 27px; background: #8c704b}
.nav span{ flex-grow: 1; position: relative;}
    .active:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f0e0ae;
        height: 10px;
    }
</style>
