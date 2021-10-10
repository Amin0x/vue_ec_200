<template>
  <div class="card aa-product-card">
    <router-link to="/products/1"><img class="img-fluid" v-bind:src="product.productImage" v-bind:alt="product.productImage"></router-link>
    <div class="card-body">
      <div class="aa-price-wrap">
        <div class="price">{{ product.price }}</div>
        <div class="brand"><img v-bind:src="product.brandLogo" v-bind:alt="product.brandLogo"></div>
      </div>
      <div class="aa-stores-count"><a href="#">7 stores</a></div>
      <div class="aa-title"><router-link to="/products/1">{{ product.title }}</router-link></div>
      
    </div>
    <div class="aa-buttons-wrap d-flex">
        <div class="aa-button">
          <a href="#" class="btn" role="button"><b-icon icon="heart"></b-icon></a>
        </div>
        <div class="aa-button">
          <a href="#" class="btn" role="button"><b-icon icon="zoom-in"></b-icon></a>
        </div>
        <div class="aa-button">
          <a href="#" class="btn" role="button"><b-icon icon="arrow-left-right"></b-icon></a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name : "ProdCardComponent",
    data: function() {
        return {
            product:{
                title: 'vivo Y20S ,فيفو واي 20 إس ، 4 جي ، 128 جيجا ، بيوريست بلو',
                price: '788.65 SAR',
                category: 'Mobile',
                productImage: 'https://www.owniqs.co/wp-content/uploads/2021/09/%D8%A7%D8%A8%D9%84-%D8%A7%D9%8A%D8%A8%D8%A7%D8%AF-%D8%A8%D8%B1%D9%88-2021-%D8%8C-%D9%88%D8%A7%D9%8A-%D9%81%D8%A7%D9%8A-%D8%8C-256-%D8%AC%D9%8A%D8%AC%D8%A7-%D8%8C-12.9-%D8%A7%D9%86%D8%B4-%D8%8C-%D9%81%D8%B6%D9%8A-300x300.jpg',
                brandLogo: 'https://www.owniqs.co/wp-content/uploads/ce-logos/icon_noon-com.png',
                storesHas: 6,
            }
        }
    },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

<style scoped>
.aa-buttons-wrap, .aa-price-wrap{
  display: flex;
  align-items: center;
}

.aa-price-wrap{
  justify-content: space-between;
}
.aa-button{
  width: 33.3333%;
  height: 40px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aa-button:hover {
  background-color: #f7f7f7;
}
.aa-product-card:hover{
    box-shadow: 0 0 3px 1px rgba(100, 100, 100, 0.2);
}
.aa-product-card .price{
    color: #b71c1c;
    font-size: 1rem;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
}

.aa-product-card .aa-title{
  
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: 700;
}

.aa-product-card .aa-title a{
  text-decoration: none;
  color: #111111;
}

.aa-stores-count a{
  text-decoration: none;
  color: #4b4b4b;
  font-size: .8rem;
  font-weight: 700;
}
</style>