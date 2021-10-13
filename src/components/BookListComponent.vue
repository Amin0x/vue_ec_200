<template>
    <div>
        <div class="row">
            <carousel :autoplay="false" :nav="false" :dots="false" :margin="20" :items="4">
                <book-card></book-card>
                <book-card></book-card>
                <book-card></book-card>
                <book-card></book-card>
                <book-card></book-card>
                <book-card></book-card>
                <book-card></book-card>
            </carousel>
        </div>
    </div>
</template>

<script>
    import carousel from "vue-owl-carousel";
    import BookCard from './cards/BookCard.vue';

    export default {
        components: { BookCard, carousel },
        name: "BookListComponent",
        data: function(){
            return {
                
            }
        },
    }
</script>

<style scoped>

</style>