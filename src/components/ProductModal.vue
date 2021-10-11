<template>
    <div class="container">
        <b-modal>
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <div class="position-relative">
                        <img class="img-fluid" src="" alt="">
                        <div class="position-absolute">
                            <div class="aa-featured">Featured</div>
                            <div class="aa-discount">-10%</div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="h3">Lorem ipsum dolor sit amet.</div>
                    <div class="mt-1">
                        <a href="">Lorem, ipsum dolor.</a>
                        <a href="">Lorem ipsum dolor sit.</a>
                    </div>
                    <div class="mt-2">
                        <span>1000 SAR</span> <span>1100 SAR</span>
                    </div>
                    <div class="mt-2">
                        <a href="#" class="btn btn-primary">Lorem, ipsum.</a>
                    </div>
                    <div class="mt-2">
                        <a href="#">Lorem ipsum dolor sit amet.</a>
                    </div>
                    <div class="table-responsive mt-2">
                        <table class="table">
                            <tr>
                                <td><img src="" alt=""></td>
                                <td>lorem</td>
                                <td>lorem</td>
                            </tr>
                            <tr>
                                <td><img src="" alt=""></td>
                                <td>lorem</td>
                                <td>lorem</td>
                            </tr>
                            <tr>
                                <td><img src="" alt=""></td>
                                <td>lorem</td>
                                <td>lorem</td>
                            </tr>
                            <tr>
                                <td><img src="" alt=""></td>
                                <td>lorem</td>
                                <td>lorem</td>
                            </tr>
                            <tr>
                                <td><img src="" alt=""></td>
                                <td>lorem</td>
                                <td>lorem</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name:"ProductModal",
        data: function(){
            return {
                data: {
                    title: "",
                    image: "",
                    featured: false,
                    discount: 10,
                    price: 1000,
                    oldPrice: 1100,
                    stores:[
                        {
                            image: "",
                            price: 1000,
                            url: "",
                        },
                        {
                            image: "",
                            price: 1000,
                            url: "",
                        },
                        {
                            image: "",
                            price: 1000,
                            url: "",
                        },
                        {
                            image: "",
                            price: 1000,
                            url: "",
                        },
                    ]
                }
            }
        },
        mounted() {
            console.log('Component mounted.')
        },

        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .aa-featured, .aa-discount{
        color: #fff;
        font-size: 0.8rem;
        font-weight: 400;
        padding: 0.3rem 0.5rem;
    }

    .aa-featured{
        background-color: orange;
    }

    .aa-discount{
        background-color: green;
    }
</style>