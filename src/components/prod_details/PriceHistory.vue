<template>
  <div>
    <div class="aa-section-pricehistory card">
      <div class="header d-flex bg-light p-2">
            <div>
                <b-icon icon="list" style="color: #e65100;"></b-icon>
              <strong class="ms-2">Price History</strong>
            </div>
            <div class="ms-auto"><a href="" class="text-decoration-none text-reset">
                <b-icon icon="chevron-down"></b-icon>
            </a></div>
          </div>
      <div class="body px-3 py-2">        
        <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default {
  name: "PriceHistory",
  data: function() {
    return {
      series: [{ name: "Price", data: [100, 200, 220, 210, 280, 274, 154, 150, 122, 189 ] }],
      chartOptions: {
            chart: { type: 'area', height: 350, zoom: { enabled: false } },
            dataLabels: { enabled: false },
            stroke: { curve: 'straight' },            
            title: { text: 'Price Movements', align: 'left' },
            subtitle: { text: 'Apple iPhone 12, 5G, 64GB, Black', align: 'left' },
            labels: ['2 Sep 20', '3 Oct 20', '23 Des 20', '1 Jan 21', '5 Jan 21', '13 Jun 21', '15 Jun 21', '1 Aug 21', '13 Aug 21', '30 Aug 21'],
            //xaxis: { type: 'datetime', },
            yaxis: { opposite: true },
            legend: { horizontalAlign: 'left' }
      },         
          
    }
  
  },
  mounted () {
      
  },
  methods: {
      
  },
  components:{
      VueApexCharts,
  }
};
</script>

<style scoped>

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