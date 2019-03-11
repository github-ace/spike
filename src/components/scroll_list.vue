<template>
 <!-- :style="{height:'calc(100% - '+outH+'px)',top:outH+'px'}" -->
    <div class="scroll_H">
        <slot></slot>
    </div>
</template>
<script>
window.scroll=function(){
    console.log(1)
}
export default {
    name:'scroll_list',
    props:['outH','markId'],
    data:function(){
        return{
        }
    },
    methods:{
        begin_scroll:function(e){
            console.log(e.target.clientHeight,e.target.scrollHeight,e.target.scrollTop)
            window.sessionStorage[encodeURIComponent(location.href)+this.markId]=e.target.scrollTop
            if(e.target.clientHeight+e.target.scrollTop==e.target.scrollHeight){
                console.log('loading……')
            }
        }
    },
    updated:function(){
        document.documentElement.scrollTop=document.body.scrollTop=window.sessionStorage[encodeURIComponent(location.href)+this.markId]
    },
    mounted:function(){
        document.addEventListener('scroll',(e)=>{
            window.sessionStorage[encodeURIComponent(location.href)+this.markId]=window.scrollY
            if(window.scrollY+window.innerHeight==document.body.scrollHeight){
                console.log('loading……')
            }
        })
    },
    beforeDestroy:function(){
        document.removeEventListener('scroll')
    }
}
</script>
<style scoped>
.scroll_H{
    /* position: fixed; 
    width: 100%;
    overflow-y: scroll */
}
</style>
