<template>
  <div class="aa-header-bottom">
    <ul class="aa-nav">
      <li class="menu-item">
        <a href="#">All Category</a>
        <ul class="submenu dropdown shadow-lg">
          <li>
            <a href="#"><b-icon icon="credit-card"></b-icon> Mobile & Tablet</a>
                <ul class="submenu right">
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
                  <li>Lorem, ipsum dolor.</li>
              </ul> 
          </li>
          <li>
              <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
              <ul class="submenu right">
                  <li>Lorem, ipsum dolor.</li>
                  <li>Nesciunt, deleniti unde?</li>
                  <li>Dignissimos, distinctio molestiae!</li>
              </ul>
          </li>
          <li>
              <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
              <ul class="submenu right">
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Minus soluta amet delectus?</li>
                  <li>Sunt perferendis temporibus rem.</li>
                  <li>Repudiandae eum officia voluptas?</li>
                  <li>Quos distinctio qui sed!</li>
                  <li>Ratione exercitationem expedita libero.</li>
              </ul>
          </li>
          <li>
            <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
          </li>
          <li>
            <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
          </li>
          <li>
            <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
          </li>
          <li>
            <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
          </li>
          <li>
            <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
          </li>
          <li>
            <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
          </li>
          <li>
            <a href="#"><b-icon icon="credit-card"></b-icon> Lorem ipsum dolor sit.</a>
          </li>
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

<style scoped lang="scss">
.aa-header-bottom {
  max-height: 70px;
  background: #353535;
  color: #d1d1d1;

  .aa-nav {
    margin: 0;
    display: inline-block;
    list-style: none;

    .menu-item {
      list-style: none;
      position: relative;
      display: inline-block;
      padding: 0;

      &:hover {
        background-color: rgb(241, 28, 28);
        color: #fff;

        .submenu.dropdown {
          display: block;
        }
      }

      a {
        padding: 0 1rem;
        line-height: 40px;
        text-decoration: none;
        color: #fff;
        display: block;
      }

      .submenu.dropdown {
        z-index: 9999;
        list-style: none;
        display: none;
        width: 290px;
        padding: 0;
        position: absolute;
        top: 40px;
        left: 0;
        background-color: #f9f9f9;
        color: #000;

        li .submenu.right{
          display: none;
          background-color: #fff;
          width: 230px;
          list-style: none;
          position: absolute;
          left: 290px;
          top: 0px;
        }

        li:hover > .submenu.right{
          display: block;
        }

        li a {
          display: block;
          text-decoration: none;
          color: #000 !important;
        }

        li {
          display: block;
          list-style: none;
          position: relative;
        }

        li a:hover {
          background-color: rgb(241, 28, 28);
          color: #fff !important;
        }

        
      }
    }
  }
}

</style>