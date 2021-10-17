<template>
    <div>
        <nav>
            <div class="nav-link">
                <a href="#"><b-icon-list></b-icon-list></a>
                <ul class="dropdown shadow-lg">
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse1><b-icon icon="mobile-alt"></b-icon> Mobile, Tablet</a>
                        <b-collapse  id="collapse1">
                            <ul class="submenu right">
                                <li class="right-link"><a href="#" class="link">Mobiles</a></li>
                                <li class="right-link"><a href="#" class="link">Tablet</a></li>
                                <li class="right-link"><a href="#" class="link">Mobile And Tablet accessories</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse2><b-icon icon="laptop"></b-icon>Computers, Laptops</a>
                        <b-collapse id="collapse2">
                            <ul class="submenu right">
                                <li class="right-link"><a href="#" class="link">Laptop</a></li>
                                <li class="right-link"><a href="#" class="link">Computers And monitors</a></li>
                                <li class="right-link"><a href="#" class="link">Keyboards And Mouse</a></li>
                                <li class="right-link"><a href="#" class="link">Wireless Networks</a></li>
                                <li class="right-link"><a href="#" class="link">Drives And Storage</a></li>
                                <li class="right-link"><a href="#" class="link">Software And Applications</a></li>
                                <li class="right-link"><a href="#" class="link">All Computer Accessories</a></li>
                                <li class="right-link"><a href="#" class="link">Printers And Inks</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse3><b-icon icon="algolia"></b-icon> Home Applianses</a>
                        <b-collapse id="collapse3">
                            <ul class="submenu right">
                                <li class="right-link"><a href="#" class="link">Washing Machine</a></li>
                                <li class="right-link"><a href="#" class="link">Refrigerators</a></li>
                                <li class="right-link"><a href="#" class="link">Freezer</a></li>
                                <li class="right-link"><a href="#" class="link">Dishwashers</a></li>
                                <li class="right-link"><a href="#" class="link">Dryers</a></li>
                                <li class="right-link"><a href="#" class="link">Ovens And Stoves</a></li>
                                <li class="right-link"><a href="#" class="link">Irons</a></li>
                                <li class="right-link"><a href="#" class="link">Vacuum Cleaners</a></li>
                                <li class="right-link"><a href="#" class="link">Other Home Appliances</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse4><b-icon icon="fan"></b-icon> Air Condition Uint</a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse5><b-icon icon="tv"></b-icon> TVs, Mointors</a>
                        <b-collapse id="collapse5">
                            <ul class="submenu right">
                                <li class="right-link"><a href="#" class="link">TV's</a></li>
                                <li class="right-link"><a href="#" class="link">Home Theaters - Loudspeakers</a></li>
                                <li class="right-link"><a href="#" class="link">Projectors</a></li>
                                <li class="right-link"><a href="#" class="link">Receivers</a></li>
                                <li class="right-link"><a href="#" class="link">Cameras</a></li>
                                <li class="right-link"><a href="#" class="link">TV Accessories</a></li>
                                <li class="right-link"><a href="#" class="link">All Electronic Accessories</a></li>
                                <li class="right-link"><a href="#" class="link">Video Games</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse6><b-icon icon="blender-phone"></b-icon> Kitchen Appliances</a>
                        <b-collapse id="collapse6">
                            <ul class="submenu right">
                            <li class="right-link"><a href="#" class="link">Microwave</a></li>
                            <li class="right-link"><a href="#" class="link">Small Ovens</a></li>
                            <li class="right-link"><a href="#" class="link">Small Kitchen Appliances</a></li>
                            <li class="right-link"><a href="#" class="link">Coffee Machines</a></li>
                            <li class="right-link"><a href="#" class="link">Blenders And Juicers</a></li>
                            <li class="right-link"><a href="#" class="link">Cooking Utensils</a></li>
                            <li class="right-link"><a href="#" class="link">All kitchen and dining essentials</a></li>
                            <li class="right-link"><a href="#" class="link">Kitchen Tools</a></li>
                            <li class="right-link"><a href="#" class="link">Containers And Storage</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link"  v-b-toggle.collapse7><b-icon icon="credit-card"></b-icon> Men’s And Women Fashion</a>
                        <b-collapse id="collapse7">
                            <ul class="submenu right">
                            <li class="right-link"><a href="#" class="link">Men's Fashion</a></li>
                            <li class="right-link"><a href="#" class="link">Men's Perfumes</a></li>
                            <li class="right-link"><a href="#" class="link">Men's Shoes</a></li>
                            <li class="right-link"><a href="#" class="link">Women's Fashion</a></li>
                            <li class="right-link"><a href="#" class="link">Women's Perfumes</a></li>
                            <li class="right-link"><a href="#" class="link">Women's Shoes</a></li>
                            <li class="right-link"><a href="#" class="link">Make-up</a></li>
                            <li class="right-link"><a href="#" class="link">Sports Shoes</a></li>
                            <li class="right-link"><a href="#" class="link">Watches</a></li>
                            <li class="right-link"><a href="#" class="link">Sunglasses</a></li>
                            <li class="right-link"><a href="#" class="link">Jewelry</a></li>
                            <li class="right-link"><a href="#" class="link">Women's Bags And wallets</a></li>
                            <li class="right-link"><a href="#" class="link">Bags And Travel essentials</a></li>
                            <li class="right-link"><a href="#" class="link">Fashion Accessories</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse8><b-icon icon="credit-card"></b-icon> Sports Equipment</a>
                        <b-collapse id="collapse8">
                            <ul class="submenu right">
                            <li class="right-link"><a href="#" class="link">Sports Equipment</a></li>
                            <li class="right-link"><a href="#" class="link">Sportswear</a></li>
                            <li class="right-link"><a href="#" class="link">Camping Essentials</a></li>
                            <li class="right-link"><a href="#" class="link">Hunting Tools</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse9><b-icon icon="credit-card"></b-icon> Books</a>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse10><b-icon icon="credit-card"></b-icon> Home, Furniture And Gadgets</a>
                        <b-collapse id="collapse10">
                            <ul class="submenu right">
                            <li class="right-link"><a href="#" class="link">Electrical And Hand Tools</a></li>
                            <li class="right-link"><a href="#" class="link">Garden Supplies</a></li>
                            <li class="right-link"><a href="#" class="link">Office Furniture</a></li>
                            <li class="right-link"><a href="#" class="link">All furnishings</a></li>
                            <li class="right-link"><a href="#" class="link">Lamps And lighting</a></li>
                            <li class="right-link"><a href="#" class="link">Home And Furniture Accessories</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse11><b-icon icon="credit-card"></b-icon> Super Market - Grocery</a>
                        <b-collapse id="collapse11">
                            <ul class="submenu right">
                            <li class="right-link"><a href="#" class="link">All Grocery Products</a></li>
                            <li class="right-link"><a href="#" class="link">Cheese, Dairy And Milk</a></li>
                            <li class="right-link"><a href="#" class="link">Vegetables And Fruits</a></li>
                            <li class="right-link"><a href="#" class="link">Coffee, Tea And Drinks</a></li>
                            <li class="right-link"><a href="#" class="link">Meat And Chicken</a></li>
                            <li class="right-link"><a href="#" class="link">Waters</a></li>
                            <li class="right-link"><a href="#" class="link">Cleaning And Washing Products</a></li>
                            <li class="right-link"><a href="#" class="link">Pet Supplies</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse12><b-icon icon="credit-card"></b-icon> Health and Medicine</a>
                        <b-collapse id="collapse12">
                            <ul class="submenu right">
                            <li class="right-link"><a href="#" class="link">Body Care Products</a></li>
                            <li class="right-link"><a href="#" class="link">Oral And Dental Care Products</a></li>
                            <li class="right-link"><a href="#" class="link">Nutritional Supplements</a></li>
                            <li class="right-link"><a href="#" class="link">Medicine</a></li>
                            <li class="right-link"><a href="#" class="link">Sexual Health</a></li>
                            <li class="right-link"><a href="#" class="link">Medical Equipments</a></li>
                            <li class="right-link"><a href="#" class="link">Home Care</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse13><b-icon icon="credit-card"></b-icon> Toys And Kids</a>
                        <b-collapse id="collapse13">
                            <ul class="submenu right">
                            <li class="right-link"><a href="#" class="link">Baby Care Essentials</a></li>
                            <li class="right-link"><a href="#" class="link">Baby Carriages</a></li>
                            <li class="right-link"><a href="#" class="link">Breastfeeding And Feeding</a></li>
                            <li class="right-link"><a href="#" class="link">Children's Clothing</a></li>
                            <li class="right-link"><a href="#" class="link">Baby Toys</a></li>
                            <li class="right-link"><a href="#" class="link">Bicycles And Buggies</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="dropdown-item">
                        <a href="#" class="link" v-b-toggle.collapse14><b-icon icon="credit-card"></b-icon> Office and school supplies</a>
                        <b-collapse id="collapse14">
                            <ul class="submenu right">
                            <li class="right-link"><a href="#" class="link">Back To School</a></li>
                            <li class="right-link"><a href="#" class="link">School Books</a></li>
                            <li class="right-link"><a href="#" class="link">Banoaha stationery</a></li>
                            <li class="right-link"><a href="#" class="link">Drawing Tools</a></li>
                            <li class="right-link"><a href="#" class="link">School Bags</a></li>
                            <li class="right-link"><a href="#" class="link">Office Accessories</a></li>
                            <li class="right-link"><a href="#" class="link">Office Supplies</a></li>
                            </ul>
                        </b-collapse>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    nav{
        .nav-link{
            position: relative;
            display: inline-block;
            line-height: 40px;           
        }

        
        .dropdown{
            display: block;
            padding: 0;
            margin: 0;
            position: fixed;
            top: 40px;
            left: 20px;
            list-style: none;
            max-width: 600px;
            background-color: #fff;
            color: #000;

            .dropdown-item{
                position: relative;
                display: block;
                padding: 0;
                list-style: none;
                background-color: #fff;
            }

            .link{
                padding: 0 5px 0;
                text-decoration: none;
                display: block;
                color: black;
            }

            .right-link .link{
                padding: 0.2rem 0;
                text-decoration: underline;
                background-color: transparent !important;
                color: black !important;
            }
            .right-link .link:hover{
                color: #ff3425 !important;
            }

            .link:hover{
                background-color: red;
                color: #fff;
            }

            .right{
                list-style: none;
                display: block;
                padding-left: 51px;
            }

            
        }
    }
</style>