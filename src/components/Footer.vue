<template>
    <div>
      <div class="aa-img-section">
      </div>
        <div class="am-footer py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="d-flex flex-column px-2">
              <div><strong class="text-white">Follow Us</strong></div>
              <div class="text-light am-social">
                <a href="#" class="text-light"><b-icon icon="facebook"></b-icon></a>
                <a href="#" class="text-light"><b-icon icon="instagram"></b-icon></a>
                <a href="#" class="text-light"><b-icon icon="twitter"></b-icon></a>
              </div>
              <div class="mt-2">
                <strong class="text-white">Disclaimer</strong>
              </div>
              <div>
                OWNIQS only compares prices. All product names, trademarks,
                service marks, logos, models and designs on this website are the
                exclusive property of their respective owners and are displayed
                solely for the purpose of this website. Onyx operates as an
                independent party and is not a representative, agent, employee,
                sponsor, partner or other such owner. Products or brands
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex flex-column px-2">
              <div><strong class="text-white">Customers</strong></div>
              <div>
                <p class="m-0">
                  <a class="text-light text-decoration-none" href="#">All Cateogries</a>
                </p>
                <p class="m-0">
                  <a class="text-light text-decoration-none" href="#"
                    >Daily Deals</a
                  >
                </p>
                <p class="m-0">
                  <a class="text-light text-decoration-none" href="#"
                    >Super Market</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex flex-column px-2">
              <div><strong class="text-white">Stores Owners</strong></div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex flex-column px-2">
              <div><strong class="text-white">The News</strong></div>
              <div>
                Subscribe to our newsletter to receive news and special offers
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.aa-img-section{
  background-color: #0c0c0c;
  background-image: url("https://recompare.wpsoul.net/wp-content/uploads/2017/08/ripover.png");
  background-position: top center;
  background-repeat: no-repeat;
  padding-top: 130px;
}

.am-footer {
  color: #ccc;
  background-color: #3f3f3f !important;
  background-image: url("https://recompare.wpsoul.net/wp-content/uploads/2017/09/footerbg.jpg");
  background-position: center bottom;
  background-repeat: no-repeat;
}

.am-social a {
  text-decoration: none;
  font-size: 2rem;
}
.am-social a:not(:last-child) {
  margin-right: 0.5rem;
}

.am-social a:hover {
  color: coral !important;
}

</style>