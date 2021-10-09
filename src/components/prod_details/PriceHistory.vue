<template>
  <div>
    <div class="aa-section-pricehistory">
      <div class="header d-flex bg-light p-2">
            <div>
                <b-icon icon="list" style="color: #e65100;"></b-icon>
              <strong class="ms-2">
                  Lorem ipsum dolor
                  sit amet consectetur adipisicing.
              </strong>
            </div>
            <div class="ms-auto"><a href="" class="text-decoration-none text-reset">
                <b-icon icon="chevron-down"></b-icon>
            </a></div>
          </div>
      <div>
        <area-chart
          id="area"
          :data="donutData"
          xkey="lable"
          ykey="value"
          grid="true"
          grig-text-wight="bold"
          resize="true"
          line-colors="[#00ffff]"
        ></area-chart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.a-section-pricehistory {
}
</style>

<style lang="scss" scoped>
.sd {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .do {
    margin: 0;
  }
}
</style>