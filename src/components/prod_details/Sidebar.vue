<template>
    <div>
        <div class="aa-sidebar">
            <div>
                <div class="title">Lorem ipsum dolor sit.</div>
                <hr>
            </div>
            <div class="body">
                <b-carousel>
                    <div v-for="item in slides" v-bind:key="item.id">
                        <div class="name">Lorem ipsum dolor sit.</div>
                        <div class="img"><img :src="item.img" alt="item.img"></div>
                        <div class="desc">{{item.desc}}</div>
                        <div class="price">{{item.price}} SAR</div>
                        <div class="action"><a class="btn btn-danger">Lorem, ipsum.</a></div>
                    </div>
                </b-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slides:[
                {
                    name: "Lorem ipsum dolor sit.",
                    img: "",
                    desc: "Lorem ipsum dolor sit amet consectetur.",
                    price: 1000,
                },
                {
                    name: "Lorem ipsum dolor sit.",
                    img: "",
                    desc: "Lorem ipsum dolor sit amet consectetur.",
                    price: 1000,
                },
                {
                    name: "Lorem ipsum dolor sit.",
                    img: "",
                    desc: "Lorem ipsum dolor sit amet consectetur.",
                    price: 1000,
                },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.aa-sidebar{
    padding: .5rem;
    border: 1px solid #ccc;

    .title{
        font-size: 1rem;
        font-weight: 700;
        color: #424242;
    }
}

</style>