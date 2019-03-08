// 秒杀和抢购列表单元
<script>
export default {
    name:'list-item',
    props:['item_data'],
    data:function(){
        return{

        }
    },
    methods:{
        miaosha:function(id){
            console.log(id)
        }
    },
    render(){
        console.log(this.$slots)
        return(
        <div class="list_item">
            <img class="img" src={this.item_data.name} alt={this.item_data.name}/>
            <div class="content">
                <p class="name">{this.item_data.name}</p>
                <button class={`opreate ${!this.item_data.state?'no':'do'}`} onClick={!this.item_data.state?(f)=>f:()=>this.miaosha(this.item_data.id)}>{this.$slots.default[0].text}</button>
                <div class="content_bottom">
                    <div>
                        <p class="value">¥{this.item_data.value}</p>
                        <p class="prev_value">¥{this.item_data.prev_value}</p>
                    </div>
                    <div class="shengyu_num">
                        <p v-show={this.item_data.start_time}>开始时间：{this.item_data.start_time}</p>
                        <p>剩余数量：{this.item_data.num}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
</script>
<style scoped>
    .list_item{
        width: 100%;
        padding:21px 32px;
        height: 230px;
        display: flex;
        justify-content: space-between;
        background: #fff;
        font-size: 30px
    }
    .img{
        width: 250px;
        height: 186px;
        flex-shrink: 0;
        border-radius: 6px
    }
    .content{ 
        width: 415px;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }
    .name{
        width: 100%;
        font-size: 24px;
        color: #1f1f22;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
    .opreate{
        align-self: flex-end;
        width: 167px; 
        height: 53px;
        border-radius: 6px;
        outline: none;
        border:none;
        color: #fff;
        font-size: 30px
    }
    .no{
        background: linear-gradient(to right, #d2d2d2 , #606060)
    }
    .do{
        background: linear-gradient(to right, #fae3ab , #8b6836)
    }
    .value{
        color: #ac2b2b;
        font-size: 30px;
    }
    .prev_value{
        color: #8f8f8f;
        position: relative;
        font-size: 21px;
        display: inline-block
    } 
    .prev_value:after{
        content: "";
        position: absolute;
        margin:auto;
        top: 0; bottom: 0;
        left: 0;
        right: 0;
        background: #ab4b4b;
        width: 100%;
        height: 1px;
        display: inline-block;
        transform: rotate(-10deg)
    }
    .content_bottom{
        display: flex;
        justify-content: space-between;
        align-items: flex-end
    }
    .shengyu_num{
        color: #917756;
        font-size: 25px
    }
</style>
