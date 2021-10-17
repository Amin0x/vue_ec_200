<template>
  <div class="container mt-2">
    <div class="row main-content">
      <div class="col-md-8">
        <div class="aa-section">
          <div class="d-md-flex justify-content-between align-items-center">
            <h1 class="aa-prod-title me-2">
              آبل أيفون 12 ، 5 جي ، 64 جيجا ، أسود
            </h1>
            <div class="aa-add-to-wish mt-md-2">
              <a name="" id="" class="btn btn-outline-danger me-2" href="#" role="button">
                Added to wishlist <b-icon icon="heart"></b-icon>
              </a>
              <a class="btn btn-outline-danger" href="#" role="button">Add to compare <b-icon icon="arrows-angle-contract"></b-icon></a>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-4 aa-prod-img-wrap">
              <img class="img-fluid" src="https://backend.eddy.com.sa/media/catalog/product/cache/94e6266911c855fdf4ece88e8e419e57/4/0/40367.jpg" alt="">
              <div class="row aa-list-imgs py-2" style="hieght:80px;">
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div class="col-3 px-1"><img class="image img-fluid img-thumbnail" @click="index = 1" src="https://m.media-amazon.com/images/I/415ucnGB51L._AC_SR38.jpg" alt=""></div>
                <div class="col-3 px-1"><img class="image img-fluid img-thumbnail" @click="index = 2" src="https://m.media-amazon.com/images/I/415ucnGB51L._AC_SR38.jpg" alt=""></div>
                <div class="col-3 px-1"><img class="image img-fluid img-thumbnail" @click="index = 3" src="https://m.media-amazon.com/images/I/415ucnGB51L._AC_SR38.jpg" alt=""></div>
                <div class="col-3 px-1"><img class="image img-fluid img-thumbnail" @click="index = 4" src="https://m.media-amazon.com/images/I/415ucnGB51L._AC_SR38.jpg" alt=""></div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="d-flex justify-content-between align-items-center">
                <div class="aa-add-review"><span>Add your review</span> <span>10</span></div>
                <a href="#" class="aa-category">Mobile</a>
              </div>
              <hr />
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <del>
                    <small class="price-old">199.00 SAR</small>
                  </del><span class="price ms-3">149.00 SAR</span>
                </div>
                <a
                  name=""
                  id=""
                  class="aa-btn-low-price"
                  href="#"
                  role="button"
                ><b-icon icon="heart"></b-icon> Set Lowest Price Alert</a>
              </div>
              <div class="mt-2">
                This Product Compare on Several Stores Best deal at:
                <img src="https://www.owniqs.co/wp-content/uploads/ce-logos/icon_amazon-sa.png" alt="amazon.sa" width="16" height="16">
                <img src="https://www.owniqs.co/wp-content/uploads/ce-logos/icon_amazon-sa.png" alt="amazon.sa" width="16" height="16">
              </div>
              <div class="mt-3">
                <a
                  name=""
                  id=""
                  class="btn btn-primary aa-btn-buy"
                  href="#"
                  role="button"
                >Buy for best price</a>
              </div>
              <hr />
              <div class="aa-prod-details">
                <ul class="p-2">
                  <li>شاشة Super Retina XDR مقاس 6.1 إنش</li>
                  <li>Ceramic Shield، أقوى من زجاج أي هاتف ذكي</li>
                  <li>5G لسرعات تنزيل فائقة وتشغيل عبر الإنترنت عالي الجودة</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
              <div><a href="#" class="text-muted">APPLE</a></div>
              <div class="mt-2">
                <a href="#" class="me-2 text-muted"><b-icon icon="facebook"></b-icon></a>
                <a href="#" class="me-2 text-muted"><b-icon icon="twitter"></b-icon></a>
                <a href="#" class="me-2 text-muted"><b-icon icon="instagram"></b-icon></a>
                <a href="#" class="me-2 text-muted"><b-icon icon="envelope"></b-icon></a>
              </div>
              <div class="mt-2 text-muted text-uppercase"><small style="font-size:.7rem;">Last updated on September 27, 2021 5:17 am</small></div>
            </div>
          </div>          
        </div>       
        <div class="aa-section mt-4">
          <product-description></product-description>
          <price-list class="mt-4"></price-list>
          <price-history class="mt-4"></price-history>
          <additional-info class="mt-4"></additional-info>
          <prod-news class="mt-4"></prod-news>
          <prod-reviews class="mt-4"></prod-reviews>
          <prod-videos class="mt-4"></prod-videos>
          <related-products class="mt-4"></related-products>
        </div>   
        
      </div>
      <div class="col-md-4">
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import AdditionalInfo from '../components/prod_details/AdditionalInfo.vue';
import PriceHistory from '../components/prod_details/PriceHistory.vue';
import PriceList from '../components/prod_details/PriceList.vue';
import ProdNews from '../components/prod_details/ProdNews.vue';
import ProdReviews from '../components/prod_details/ProdReviews.vue';
import ProductDescription from '../components/prod_details/ProductDescription.vue';
import ProdVideos from '../components/prod_details/ProdVideos.vue';
import RelatedProducts from '../components/prod_details/RelatedProducts.vue';
import Sidebar from '../components/prod_details/Sidebar.vue';
import VueGallery from 'vue-gallery';
// import jQuery from 'jquery'
// import Raphael from "raphael/raphael";
// global.Raphael = Raphael;
// global.jQuery = jQuery;
// import { AreaChart } from "vue-morris";

//import { Bar } from 'vue-chartjs'

export default {
  data: function() {
    return {
      donutData: [
        { label: "Red", value: 300 },
        { label: "Blue", value: 50 },
        { label: "Yellow", value: 100 },
        { label: "Yellow", value: 100 },
        { label: "Yellow", value: 100 },
        { label: "Yellow", value: 100 },
        { label: "Yellow", value: 100 },
      ],

      images: [
          'https://blackbox.com.sa/media/catalog/product/cache/0a223e35cc64ce5778706694387874ed/l/t/lt19hbhwln_-_blackbox.jpeg',
          'https://www.lg.com/sa_en/images/refrigerators/md06055636/gallery/Desktop_05.jpg',
          'https://www.lg.com/sa_en/images/refrigerators/md06055636/gallery/Desktop_02.jpg',
          'https://blackbox.com.sa/media/catalog/product/cache/0a223e35cc64ce5778706694387874ed/l/t/lt19hbhwln_-_blackbox.jpeg',
        ],
        index: null,
    };
  },
  name: "ProductDetails",
  components: {
    Sidebar,
    PriceList,
    PriceHistory,
    AdditionalInfo,
    ProdNews,
    ProdReviews,
    ProdVideos,
    RelatedProducts,
    ProductDescription,
    'gallery': VueGallery,
  },
};
</script>

<style scoped lang="scss">
.main-content {
  .aa-section {
    .aa-add-to-wish .btn {
      font-size: 0.75rem;
    }

    .aa-list-imgs img{
      min-width: 33%;
    }
    

    .aa-add-to-wish .btn:not(:last-child) {
      margin-right: 0.5rem;
    }

    .aa-prod-title {
      font-size: 1.5rem;
    }

    .aa-category{
      font-size: 0.875rem;
      text-decoration: none;
      text-transform: uppercase;
      color:#a3a3a3;

      &:hover{
        color: #696969;
        text-decoration: underline;
      }
    }

    .aa-add-review{
      font-size: 0.875rem;
    }

    .aa-btn-low-price{
      font-size: .8rem;
      text-decoration: none;
      color:#a3a3a3;

      &:hover{
        color: #696969;
      }
    }
    .price-old {
      text-decoration: line-through;
      font-size: .8rem;
      font-weight: 400;
      color: #bbb;
    }

    .price{
      font-size: 1rem;
      font-weight: 700;
      color: #d32f2f;
    }

    .aa-btn-buy{
      background-color: #e53935;
      border-color: #e53935;
      border-radius: 0;
      padding: 0.575rem 1.35rem;

      &:hover{
        background-color: #d32f2f;
        border-color: #d32f2f;
      }

      &:focus{
        box-shadow: 0 0 0 0.25rem rgba(235, 149, 148, 0.5);
      }
    }
  }
}

</style>
