// 自定义按钮
<template>
    <button class="btn" @click="DoSomeThing?DoSomeThing(...arguements):(f)=>f">{{text}}</button>
</template>
<script>
export default {
    props:['text','DoSomeThing','arguements'],
    methods:{
    }
}
</script>
<style scoped>
    .btn{
        width: 160px; 
        height: 50px;
        border-radius: 6px;
        outline: none;
        border:none;
        color: #fff;
        font-size: 30px;
        background: linear-gradient(to right, #fae3ab , #8b6836)
    }
</style>


