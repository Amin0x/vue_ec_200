<template>
    <div>
        <div class="card">
            <div><img class="img-fluid" src="https://z.nooncdn.com/products/tr:n-t_400/v1592552866/N38790251A_1.jpg" alt=""></div>
            <div class="card-body">
                <p class="title">كتاب الجيب : إدارة الفرق – حلول من الخبراء لتحديات يومية – قم بتسوية الصراعات – يسّر الاتصال – شجّع الإبداع Paperback 1</p>
            </div>
                <p class="price">1999.99 SAR</p>
            <div class="action-buttons"><a href="#">Go To Store</a></div>
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
        margin: 0;
        font-size: 1rem;
        font-weight: 700;
        color: red;
        text-align: center;
        transition: all 0.5s ease-in-out;
        opacity: 1;
    }

    .price:hover{
        transform: translateY(-10px);
        opacity: 0;        
    }

    .price:hover ~ .action-buttons{
            transform: translateY(-30px);
            opacity: 1;
            visibility: visible;
    }
    .action-buttons{
        text-align: center;
        margin-bottom: 1rem;
        // transform: translateY(-10px);
        opacity: 0;
        transition: all 0.5s ease-in-out;
        visibility: hidden;
    }
    
</style>
