
<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <HeaderBottom></HeaderBottom>
    <router-view/>
    <Footer class="mt-5"></Footer>
    <footer-2></footer-2>
  </div>
</template>

<script>
import HeaderBottom from './components/HeaderBottom.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import Footer from './components/Footer.vue'
import Footer2 from './components/footer/Footer2.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeaderBottom,
    Footer,
    Footer2
  }
}
</script>

<style>
#app {
  font-family: Roboto,"Helvetica Neue",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Oxygen-Sans,sans-serif,Arial, Helvetica, sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
