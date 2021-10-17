<template>
    <div>
        <div class="container">
            <div class="row">
                <carousel :autoplay="true" :nav="false" :dots="true" :margin="20" :items="1">
                    <img class="banner-img" src="https://www.owniqs.co/wp-content/uploads/2021/09/iphone13Pro1-1536x646.png" alt="iphone13Pro1" width="1536" height="646">
                    <img class="banner-img" src="https://www.owniqs.co/wp-content/uploads/2021/09/بنر-ازياء-1536x513.png" alt="بنر ازياء" width="1536" height="513">
                    <img class="banner-img" src="https://www.owniqs.co/wp-content/uploads/2021/09/بنر111-1536x513.png" alt="بنر111" width="1536" height="513">
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },
}
</script>

<style lang="scss" scoped>
    .banner-img{
        max-height: 500px;
    }
</style>