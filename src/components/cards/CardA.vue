<template>
  <div class="card card_a">
      <div class="card-img">
          <router-link to="/products/1"><img class="img-fluid" src="https://dk3152lt3zvww.cloudfront.net/catalog/product/cache/94e6266911c855fdf4ece88e8e419e57/4/0/40567.jpg" alt=""></router-link>
      </div>
      <div class="card-body">
          <p class="brand"><router-link to="/categories/1" class="text-reset text-decoration-none">MOBILE</router-link></p>
          <router-link to="/products/1" class="text-decoration-none"><h5>Lorem ipsum dolor sit amet consectetur.</h5></router-link>
          <p class="desc" style="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, itaque aspernatur? Animi, ducimus.</p>
          <p class="brand_logo"><img class="img-fluid" src="https://www.owniqs.co/wp-content/plugins/content-egg/res/logos/amazon-sa.png" alt=""></p>
      </div>
      <div class="card-footer">
          <div class="d-flex justify-content-between align-items-center">
              <span class="d-inline-flex flex-column"><span class="price">2000 SAR</span><span class="old-price">2000 SAR</span></span>
              <span style="color: #388e3c; font-size: .8rem;">+6 Stores</span>
          </div>
      </div>

      <div class="discount_wrap">
          <span class="discount">-12%</span>
      </div>
      <div class="buttons_wrap">
          <a href="" class="btn rounded-circle aa-btn shadow-sm"><b-icon icon="heart"></b-icon></a>
          <a href="" class="btn rounded-circle aa-btn shadow-sm"><b-icon icon="zoom-in"></b-icon></a>
          <a href="" class="btn rounded-circle aa-btn shadow-sm"><b-icon icon="arrow-left-right"></b-icon></a>
      </div>
  </div>
</template>

<script>
export default {
    name: "CardA",
}
</script>

<style lang="scss">
.card_a{

    .desc{
        font-size: .8rem;
        color: #424242;
    }

    .brand{
        font-size: .8rem;
        color: #757575;
    }
    
    .discount_wrap{
        position: absolute;
        top: 5px;
        right: 5px;

        .discount{
            padding: .2rem;
            font-size: .8rem;
            background-color: #43a047;
            color: #fafafa;
            border-radius: 4px;
        }
    }

    .buttons_wrap{
        display: none;
        position: absolute;
        top: 5px;
        left: 5px;
        flex-direction: column;

        .aa-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            background-color: #ff5252;
            color: #fafafa;
        }

        .aa-btn:not(:last-child){
            margin-bottom: .5rem;
        }
    }

    &:hover .buttons_wrap{
        display: inline-flex;
    }

    .price{
        font-size: 1rem;
        font-weight: 700;
        color: #d32f2f;
    }
    .old-price{
        font-size: .8rem;
        text-decoration: line-through;
        color: #424242;
    }

    .brand_logo{
        max-width: 66px;
    }
}
</style>

