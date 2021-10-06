<template>
  <div class="container">
    <div>
      <a href="#"
        ><button type="button" class="aa-btn-category">
          {{ (name = "tablet") }}
        </button></a
      >
    </div>
    <div class="row justify-content-center">
      <carousel :autoplay="true" :nav="false" :dots="false" :margin="20" :items="6">
        <prod-card-component
          v-for="item in products"
          v-bind:item="item"
          v-bind:key="item.id"
          v-bind:product="item"
        ></prod-card-component>
        <prod-card-component
          v-for="item in products"
          v-bind:item="item"
          v-bind:key="item.id"
          v-bind:product="item"
        ></prod-card-component>
        <prod-card-component
          v-for="item in products"
          v-bind:item="item"
          v-bind:key="item.id"
          v-bind:product="item"
        ></prod-card-component>
        <prod-card-component
          v-for="item in products"
          v-bind:item="item"
          v-bind:key="item.id"
          v-bind:product="item"
        ></prod-card-component>
        <prod-card-component
          v-for="item in products"
          v-bind:item="item"
          v-bind:key="item.id"
          v-bind:product="item"
        ></prod-card-component>
        <prod-card-component
          v-for="item in products"
          v-bind:item="item"
          v-bind:key="item.id"
          v-bind:product="item"
        ></prod-card-component>
        <prod-card-component
          v-for="item in products"
          v-bind:item="item"
          v-bind:key="item.id"
          v-bind:product="item"
        ></prod-card-component>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import ProdCardComponent from "./ProdCardComponent.vue";
export default {
  data() {
    return {
      products: [
        {
          name: "",
          price: "30 SAR",
        },
      ],
    };
  },
  components: { ProdCardComponent, carousel },
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

<style scoped>
.aa-btn-category {
  padding: 8px 24px;
  background-color: rgba(235, 5, 5, 1);
  border: 1px solid #c62828;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  transition: all 0.3 ease-in-out;
}
.aa-btn-category:hover {
  background-color: #c62828;
}
</style>
