<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-4">
                <brand-filter></brand-filter>
            </div>
            <div class="col-xl-8">
                <div class="h1">Mobile & Tablet Accessories</div>
                <div class="row">
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-4 mt-2">
                        <card-a></card-a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardA from '../components/cards/CardA.vue'
import BrandFilter from '../components/filter/BrandFilter.vue'
export default {
  components: { BrandFilter, CardA },
    
}
</script>

<style lang="scss" scoped>

</style>