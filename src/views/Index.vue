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
    <prod-card-list-component></prod-card-list-component>
    <prod-card-list-component></prod-card-list-component>
    <prod-card-list-component></prod-card-list-component>
    <prod-card-list-component></prod-card-list-component>
    <prod-card-list-component></prod-card-list-component>
    <prod-card-list-component></prod-card-list-component>
    <prod-card-list-component></prod-card-list-component>
    <prod-card-list-component></prod-card-list-component>
    <prod-card-list-component></prod-card-list-component>
  </div>
</template>

<script>
import ProdCardListComponent from "../components/ProdCardListComponent.vue";

export default {
  name: "Index",
  components: {
    ProdCardListComponent,
  },

  computed: {},

  mounted() {},

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "sass">

.aa-search
  padding: 7.5rem 1rem
  background-image: url("../assets/Homepage33.png")

  .search-title
    text-align: center
    color: #ffffff
    font-size: 40px
    font-weight: 700

  .aa-search-wrap
    display: flex
    justify-content: center
    align-items: center
    position: relative
    max-width: 600px
    margin: 30px auto

    .aa-search-input
      border-width: 1px
      height: 52px
      padding: 0 130px 0 20px
      transition: all 0.5s ease-out
      background: #f6f6f6
      border: 3px solid #ececec
      width: 100%
      outline: none

    .aa-search-btn
      width: 150px
      padding: 0 35px
      font-size: 100% !important
      color: #fff !important
      background-color: #ff4136
      border: 1px solid #ff4136    
      transition: all 0.25s ease-in-out

      &:hover
        background-color: #e64a19

    @media screen and (max-width:800px)
      .aa-search-wrap
        display: block

      .aa-search-input
        width: 100%
        

      .aa-search-btn
        width: 100%
        margin-top: 1rem
</style>
