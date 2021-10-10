<template>
    <div>
        <div class="am-filter-header">
            <span style="color: red;">
                <b-icon icon="list"></b-icon>
            </span>
            <strong class="ms-2">Filter Products</strong>
        </div>
        <div class="mt-2">
            <p class="d-inline-block bg-light shadow-sm p-2">
                <a href="">
                    <b-icon icon="x"></b-icon>
                </a>
                <span> Mobile and Tablet</span>
            </p>
        </div>
        <div class="search_wrap mt-2">
            <div class="search_hdr section_hdr hdr_red">
                Search Products
            </div>
            <input type="text" class="form-input mt-2">
        </div>
        <div class="category mt-2">
            <div class="search_hdr section_hdr hdr_red">
                Category
            </div>
            <div>
                <lable class="d-flex align-items-center" for="id1">
                    <input type="radio" class="me-2" name="id1" id="id1">
                    Lorem, ipsum dolor.
                </lable>
                <lable class="d-flex align-items-center" for="id2">
                    <input type="radio" class="me-2" name="id2" id="id2">
                    Lorem, ipsum dolor.
                </lable>
                <lable class="d-flex align-items-center" for="id3">
                    <input type="radio" class="me-2" name="id3" id="id3">
                    Lorem, ipsum dolor.
                </lable>
            </div>
        </div>
        <div class="brand_wrap mt-2">
            <div class="brand_hdr section_hdr hdr_red">
                Brand
            </div>
            <div class="brand">
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
                <button class="btn btn-outline-secondary">htc</button>
            </div>
        </div>
        <div class="model_wrap mt-2">
            <div class="model_hdr section_hdr hdr_red">
                Model
            </div>
            <div class="model">
                <select class="form-control mt-2" name="model" id="">
                    <option value="">Select One</option>
                    <option value="">Select One</option>
                    <option value="">Select One</option>
                    <option value="">Select One</option>
                </select>
            </div>
        </div>
        <div class="color_wrap mt-2">
            <div class="color_hdr section_hdr hdr_red">
                Color
            </div>
            <div class="colors mt-2">
                <div class="p-1 border d-inline-flex aa-button aa-active">
                    <div class="d-inline-block aa-red"  style="width:24px; height: 24px;"></div>
                </div>
               
               <div class="p-1 border d-inline-flex aa-button">
                    <div class="d-inline-block  aa-black"  style="width:24px; height: 24px;"></div>
                </div>
                <div class="p-1 border d-inline-flex aa-button">
                    <div class="d-inline-block aa-white"  style="width:24px; height: 24px;"></div>
                </div>
                <div class="p-1 border d-inline-flex aa-button">
                    <div class="d-inline-block aa-green"  style="width:24px; height: 24px;"></div>
                </div>
                <div class="p-1 border d-inline-flex aa-button">
                    <div class="d-inline-block aa-yellow"  style="width:24px; height: 24px;"></div>
                </div>
                <div class="p-1 border d-inline-flex aa-button">
                    <div class="d-inline-block aa-blue"  style="width:24px; height: 24px;"></div>
                </div>
                
            </div>
        </div>

        <div class="price_range mt-2">
            <div><input type="range" name="" id="" class="form-control"></div>            
        </div>
        <div><a href="#">show only products on sale</a></div>
        <div><a href="#">in stock only</a></div>
    </div>
</template>

<script>
    export default {
        name: "BrandFilter",
    }
</script>

<style lang="scss" scoped>
    .section_hdr{
        border-bottom: 1px solid #ccc;
    }

    .hdr_red::after{
        content: "";
        display: block;
        width: 20%;
        height: 1px;
        border-bottom: 2px solid red;
    }
    .colors{
        .aa-button:not(:last-child){
            margin-right: 5px;            
        }

        .aa-active{
            border-color: rgb(0, 162, 226) !important;
        }

        .aa-red{
            background-color: red;
        }

        .aa-black{
            background-color: black;
        }

        .aa-white{
            background-color: white;
        }

        .aa-green{
            background-color: green;
        }

        .aa-yellow{
            background-color: yellow;
        }

        .aa-blue{
            background-color: blue;
        }
    }

    .brand {
        margin: 8px 0;

        button:not(:last-child){        
            margin-right: 8px;
        }

        button{
            margin-top: 4px;
        }
    }
   
    
    

</style>