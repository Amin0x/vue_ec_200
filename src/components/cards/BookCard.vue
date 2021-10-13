<template>
    <div>
        <div class="card">
            <div><img class="img-fluid" src="https://z.nooncdn.com/products/tr:n-t_400/v1592552866/N38790251A_1.jpg" alt=""></div>
            <div class="card-body">
                <p class="title">كتاب الجيب : إدارة الفرق – حلول من الخبراء لتحديات يومية – قم بتسوية الصراعات – يسّر الاتصال – شجّع الإبداع Paperback 1</p>
            </div>
            <div class="action-buttons">
                <p class="price">1999.99 SAR</p>
                <a href="#" class="btn btn-danger aa-btn">Go To Store</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookCard",
    data: function(){
        return{

        }
    },
    mounted(){},
    methods(){},   
}
</script>

<style lang="scss" scoped>
    .card:hover{
        box-shadow: 0 0 3px 3px #cccccc4b;
    }
    .title{
        font-size: 1rem;
        font-weight: 700;
    }

    .price{
        height: 40px;
        margin: 0;
        font-size: 1rem;
        font-weight: 700;
        color: red;
        text-align: center;
        transition: all 0.2s ease-in-out;
        opacity: 1;
    }

    .card:hover .price{        
        opacity: 0;        
    }
        
    .action-buttons {
        margin-bottom: .5rem;
        position: relative;
    }
    .aa-btn{
        display: block;
        width: 90%;
        position: absolute;
        left: 5%;
        top: 0;
        margin: 0 auto;
        transform: translateY(50px);
        transition: all 0.350s ease-in-out;
    }

    .card:hover .aa-btn{
        transform: translateY(0px);
    }
    
</style>
