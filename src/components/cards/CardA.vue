<template>
  <div class="card card_a">
      <div class="card-img">
          <img src="https://dk3152lt3zvww.cloudfront.net/catalog/product/cache/94e6266911c855fdf4ece88e8e419e57/4/0/40567.jpg" alt="">
      </div>
      <div class="card-body">
          <p class="brand">MOBILE</p>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p class="desc" style="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, itaque aspernatur? Animi, ducimus.</p>
          <p><img src="https://www.owniqs.co/wp-content/plugins/content-egg/res/logos/amazon-sa.png" alt=""></p>
      </div>
      <div class="card-footer">
          <div class="d-flex justify-content-between align-items-center">
              <span class="d-inline-flex flex-column"><span>2000 SAR</span><span>2000 SAR</span></span>
              <span style="color: #388e3c; font-size: .8rem;">+6 Stores</span>
          </div>
      </div>

      <div class="discount_wrap">
          <span class="discount">-12%</span>
      </div>
      <div class="buttons_wrap">
          <a href=""></a><a href=""></a><a href=""></a>
      </div>
  </div>
</template>

<script>
export default {

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
        position: absolute;
        top: 5;
        left: 5;
        display: inline-flex;
        flex-direction: column;
    }
}
</style>

