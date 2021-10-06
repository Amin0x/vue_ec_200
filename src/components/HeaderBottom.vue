<template>
  <div class="aa-header-bottom">
    <ul class="aa-nav">
      <li class="menu-item">
        <a href="#">All Category</a>
        <ul class="submenu dropdown">
          <li>
            <a href="#">Lorem ipsum dolor sit.</a>
            <!-- <ul class="submenu right">
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
              </ul> -->
          </li>
          <li>
            <a href="#">Lorem ipsum dolor sit.</a>
            <!-- <ul class="submenu right">
                  <li>Lorem, ipsum dolor.</li>
                  <li>Nesciunt, deleniti unde?</li>
                  <li>Dignissimos, distinctio molestiae!</li>
              </ul> -->
          </li>
          <li>
            <a href="#">Lorem ipsum dolor sit.</a>
            <!-- <ul class="submenu right">
                <li>Lorem ipsum dolor sit.</li>
                <li>Minus soluta amet delectus?</li>
                <li>Sunt perferendis temporibus rem.</li>
                <li>Repudiandae eum officia voluptas?</li>
                <li>Quos distinctio qui sed!</li>
                <li>Ratione exercitationem expedita libero.</li>
            </ul> -->
          </li>
          <li><a href="#">Lorem ipsum dolor sit.</a></li>
          <li><a href="#">Lorem ipsum dolor sit.</a></li>
          <li><a href="#">Lorem ipsum dolor sit.</a></li>
          <li><a href="#">Lorem ipsum dolor sit.</a></li>
          <li><a href="#">Lorem ipsum dolor sit.</a></li>
          <li><a href="#">Lorem ipsum dolor sit.</a></li>
          <li><a href="#">Lorem ipsum dolor sit.</a></li>
        </ul>
      </li>
      <li class="menu-item"><a href="#">Daily Deals</a></li>
      <li class="menu-item"><a href="#">Supper Market</a></li>
      <li class="menu-item"><a href="#">English</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped>
.aa-header-bottom {
  max-height: 70px;
  background: #353535;
  color: #d1d1d1;
}

.aa-header-bottom .aa-nav {
  margin: 0;
  display: inline-block;
  list-style: none;
}
.aa-header-bottom .aa-nav,
.aa-header-bottom .aa-nav li {
  list-style: none;
}

.aa-header-bottom .aa-nav .menu-item {
  position: relative;
  display: inline-block;
  padding: 0;
}

.aa-header-bottom .aa-nav li a {
  padding: 0 1rem;
  line-height: 40px;
  text-decoration: none;
  color: #ddd;
  display: block;
}

.aa-header-bottom .aa-nav li a:hover {
  background-color: rgb(241, 28, 28);
  color: #fff;
}

.menu-item:hover .submenu.dropdown {
  display: block;
}

.menu-item .submenu.dropdown {
  list-style: none;
  display: none;
  width: 230px;
  padding: 0;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #f9f9f9;
  color: #000;
}

.aa-nav .submenu li {
  list-style: none;
  position: relative;
}

.aa-nav .submenu li .submenu {
  list-style: none;
  position: absolute;
  left: 230px;
}
</style>