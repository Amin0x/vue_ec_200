
// markets page
<template>
    <div class="container">
        <section>
            <banner></banner>
        </section>
        <section>
            <div class="section-hdr">
                <h3>Special Offers</h3>
            </div>
            
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
            </div>
            
        </section>

        <section>
            <div class="section-hdr">
                <h3>Special Offers</h3>
            </div>
            
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
                <div class="col-6 col-md-4 col-lg-3 mt-3">
                    <card-a></card-a>
                </div>
            </div>
            
        </section>

    </div>
</template>

<script>
import Banner from '../components/banner/Banner.vue'
import CardA from '../components/cards/CardA.vue'
export default {
  components: { CardA, Banner },
    name: "Deals",
    data: function(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .section-hdr{
        position: relative;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
        margin-top: 2rem;
    }

    .section-hdr h3{
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    .section-hdr::after {
        content: "";
        display: block;
        height: 4px;
        position: absolute;
        border: 4px solid #ff8300;
        width: 50%;
        bottom: -4px;
    }
</style>