<template>
    <div class="aa-sidebar">            
        <div class="section p-4 border">
            <div>
                <div class="title">Lorem ipsum dolor sit.</div>
                <hr>
            </div>
            <div class="body">
                <carousel :autoplay="true" :nav="false" :dots="false" :margin="20" :items="1">
                    <div v-for="item in this.slides" v-bind:key="item.id">
                        <div class="img"><a><img v-bind:src="item.img" v-bind:alt="item.img"></a></div>
                        <div class="name">Lorem ipsum dolor sit.</div>
                        <div class="desc">{{item.desc}}</div>
                        <div class="price"><span class="price-old">{{item.priceOld}} SAR</span> <span class="price-now">{{item.price}} SAR</span></div>
                    </div>
                </carousel>
            </div>
        </div>
           

         <div class="section p-4 border mt-3">
            <div class="title">Lorem, ipsum dolor sit a</div>
            <hr>
            <div class="body">
                <div class="row">
                    <img class="col-4 img-fluid" src="https://z.nooncdn.com/products/tr:n-t_400/v1582721363/N35149800A_1.jpg" alt="">
                    <div class="col-8">
                        <div class="d-flex flex-grow-1 flex-column">
                            <div><a href="#" class="d-block text-reset">Lorem ipsum dolor sit amet.</a></div>
                            <div class="price"><span class="price-old">150 SAR</span><span class="price-now">136 SAR</span></div>
                            <small>noon.com</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name:"Sidebar",
    data: function(){
        return {
            slides:null,
        }
    },
    components:{carousel},
    methods: {},
    mounted(){},
    created(){
        this.slides = [
                {
                    id:1,
                    name: "Lorem ipsum dolor sit.",
                    img: "https://z.nooncdn.com/products/tr:n-t_400/v1586180585/N36002660A_1.jpg",
                    desc: "Lorem ipsum dolor sit amet consectetur.",
                    price: 1000,
                    priceOld: 930,
                },
                {
                    id:2,
                    name: "Lorem ipsum dolor sit.",
                    img: "https://z.nooncdn.com/products/tr:n-t_400/v1586180585/N36002660A_1.jpg",
                    desc: "Lorem ipsum dolor sit amet consectetur.",
                    price: 1000,
                    priceOld: 930,
                },
                {
                    id:3,
                    name: "Lorem ipsum dolor sit.",
                    img: "https://z.nooncdn.com/products/tr:n-t_400/v1586180585/N36002660A_1.jpg",
                    desc: "Lorem ipsum dolor sit amet consectetur.",
                    price: 1000,
                    priceOld: 930,
                },
            ];
    },
}
</script>

<style lang="scss" scoped>
.aa-sidebar{
   
   .section{
        // padding: .5rem;
        // border: 1px solid #ccc;
   }

    .title{
        margin-top: -15px;
        margin-bottom: -5px;
        font-size: 1rem;
        font-weight: 700;
        color: #424242;
    }

    .price-old{
        font-size: 0.9rem;
        text-decoration: line-through;
        color: #424242;
    }

    .price-now{
        margin-left: 0.3rem;
        font-size: 1rem;
        font-weight: 700;
        color: #ff2020;
    }
}

</style>