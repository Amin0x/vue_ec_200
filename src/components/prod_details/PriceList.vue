<template>
    <div class="aa-section-pricelist card">
          <div class="header d-flex bg-light p-2">
            <div>
                <b-icon icon="list" style="color: #e65100;"></b-icon>
                <strong class="ms-2">Price List</strong>
            </div>
            <div class="ms-auto"><a href="" class="text-decoration-none text-reset">
                <b-icon icon="chevron-down"></b-icon>
            </a></div>
          </div>
          <div class="d-flex align-items-center" style="height: 80px">
            <img
              class="img-fluid"
              src="https://www.owniqs.co/wp-content/plugins/content-egg/res/logos/amazon-sa.png"
              alt=""
            />
            <div class="ms-2 flex-grow-1"><a href="">ابل ايفون 12</a></div>
            <div class="d-flex flex-column ms-2 me-3">
              <span class="price">2,446.40 SAR</span><span class="strike">4,140.00 SAR</span>
            </div>
            <div class="mx-2">
              <button class="btn btn-danger aa-btn-goto">اذهب الى المتجر</button>
            </div>
          </div>
          <div class="d-flex align-items-center" style="height: 80px">
            <img
              src="https://www.owniqs.co/wp-content/plugins/content-egg/res/logos/amazon-sa.png"
              alt=""
            />
            <div class="ms-2 flex-grow-1"><a href="">ابل ايفون 12</a></div>
            <div class="d-flex flex-column ms-2 me-3">
              <span class="price">2,446.40 SAR</span><span class="strike">4,140.00 SAR</span>
            </div>
            <div class="mx-2">
              <button class="btn btn-danger">اذهب الى المتجر</button>
            </div>
          </div>
          <div class="d-flex align-items-center" style="height: 80px">
            <img
              src="https://www.owniqs.co/wp-content/plugins/content-egg/res/logos/amazon-sa.png"
              alt=""
            />
            <div class="ms-2 flex-grow-1"><a href="">ابل ايفون 12</a></div>
            <div class="d-flex flex-column ms-2 me-3">
              <span class="price">2,446.40 SAR</span><span class="strike">4,140.00 SAR</span>
            </div>
            <div class="mx-2">
              <button class="btn btn-danger">اذهب الى المتجر</button>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    data: function() {
      return {};
    },


}
</script>

<style scoped lang="scss">
    .strike{
      font-size: 0.9rem;
      text-decoration: line-through;
      color: #5a5a5a;
    }

    .price{
      font-size: 1rem;
      font-weight: 700;
      color: #1b5e20;
    }

    .aa-btn-goto{
      background-color: #edf8fd !important;
      color: #482d2d !important;
      border: 1px solid #edf8fd !important;

      &:hover{
        background-color: #b7e8ff !important;
        color: #482d2d !important;
        border: 1px solid #2dc2fd !important;
      }
    }
</style>