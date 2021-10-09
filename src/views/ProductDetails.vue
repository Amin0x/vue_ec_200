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
              <div class="d-flex py-2" style="hieght:80px;">
                <img class="img-fluid img-thumbnail" src="" alt="">
                <img class="img-fluid img-thumbnail" src="" alt="">
                <img class="img-fluid img-thumbnail" src="" alt="">
                <img class="img-fluid img-thumbnail" src="" alt="">
              </div>
            </div>
            <div class="col-md-8">
              <div class="d-flex justify-content-between align-items-center">
                <div><span>Add your review</span> <span>10</span></div>
                <a href="#">Mobile</a>
              </div>
              <hr />
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <del>
                    <span class="price-old">199.00 SAR</span>
                  </del><span class="ms-3">149.00 SAR</span>
                </div>
                <a
                  name=""
                  id=""
                  class="btn btn-link"
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
                  class="btn btn-primary"
                  href="#"
                  role="button"
                >Buy for best price</a>
              </div>
              <hr />
              <div class="aa-prod-details">
                <ul>
                  <li>شاشة Super Retina XDR مقاس 6.1 إنش</li>
                  <li>Ceramic Shield، أقوى من زجاج أي هاتف ذكي</li>
                  <li>5G لسرعات تنزيل فائقة وتشغيل عبر الإنترنت عالي الجودة</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
              <div><a href="#">APPLE</a></div>
              <div class="mt-2">
                <a href="#" class="me-2"><b-icon icon="facebook"></b-icon></a>
                <a href="#" class="me-2"><b-icon icon="twitter"></b-icon></a>
                <a href="#" class="me-2"><b-icon icon="instagram"></b-icon></a>
                <a href="#" class="me-2"><b-icon icon="envelope"></b-icon></a>
              </div>
              <div class="mt-2">Last updated on September 27, 2021 5:17 am</div>
            </div>
          </div>          
        </div>       
        <div class="aa-section mt-4">
          <price-list></price-list>
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
import ProdVideos from '../components/prod_details/ProdVideos.vue';
import RelatedProducts from '../components/prod_details/RelatedProducts.vue';
import Sidebar from '../components/prod_details/Sidebar.vue';
// import jQuery from 'jquery'
// import Raphael from "raphael/raphael";
// global.Raphael = Raphael;
// global.jQuery = jQuery;
// import { AreaChart } from "vue-morris";

//import { Bar } from 'vue-chartjs'

export default {
  data() {
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
    RelatedProducts
    // AreaChart,
  },
};
</script>

<style scoped lang="scss">
.main-content {
  .aa-section {
    .aa-add-to-wish .btn {
      font-size: 0.75rem;
    }

    .aa-add-to-wish .btn:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
}
.aa-prod-title {
  font-size: 1.5rem;
}
.price-old {
  text-decoration: line-through;
  font-size: 18px;
  font-weight: 400;
  color: #bbb;
}
</style>
