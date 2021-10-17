<template>
  <div>
    <div id="aaSearch">
      <div class="aa-search">
        <div class="search-title">Search and Compare</div>
        <div class="aa-search-wrap">
          <input class="aa-search-input" type="text">
          <button class="aa-search-btn">Search</button>
        </div>
      </div>
    </div>

    <div class="container">
      <banner></banner>
      <prod-card-list-component></prod-card-list-component>
      <prod-card-list-component class="mt-4"></prod-card-list-component>
      <prod-card-list-component class="mt-4"></prod-card-list-component>
      <prod-card-list-component class="mt-4"></prod-card-list-component>
      <prod-card-list-component class="mt-4"></prod-card-list-component>
      <prod-card-list-component class="mt-4"></prod-card-list-component>
      <prod-card-list-component class="mt-4"></prod-card-list-component>
      <book-list-component class="mt-4"></book-list-component>    
    </div>
    <div>
      <brand-list></brand-list>
    </div>
    <div>
      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Banner from '../components/banner/Banner.vue';
import BookListComponent from '../components/BookListComponent.vue';
import ProdCardListComponent from "../components/ProdCardListComponent.vue";

export default {
  name: "Index",
  components: {
    ProdCardListComponent,
    Banner,
    BookListComponent,
  },

  computed: {},

  mounted() {},

  data: function() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss">

.aa-search{
  padding: 7.5rem 1rem;
  background-image: url("../assets/Homepage33.png");

  .search-title{
    text-align: center;
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;

  }

  .aa-search-wrap{  
    display: flex;    
    align-items: center;
    position: relative;
    max-width: 600px;
    margin: 30px auto;

    .aa-search-input{
      height: 52px;
      width: 100%;
      border-width: 1px;
      padding: 0 130px 0 20px;
      transition: all 0.5s ease-out;
      background: #f6f6f6;
      border: 3px solid #ececec;
      outline: none;
    }


    .aa-search-btn{
      height: 52px;
      width: 150px;
      padding: 0 35px;
      font-size: 100% !important;
      color: #fff !important;
      background-color: #ff4136;
      border: 1px solid #ff4136;
      transition: all 0.25s ease-in-out;

      &:hover{
        background-color: #e64a19;
      }
    }


    @media screen and (max-width:800px){ 
        
      &{
        display: block;
      }


      .aa-search-input{
        width: 100%;
      }

        

      .aa-search-btn{
        width: 100%;
        margin-top: 1rem;
      }
    }


  }
}
</style>
