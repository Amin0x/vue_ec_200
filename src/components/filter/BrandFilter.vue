<template>
    <div>
        <div class="am-filter-header">
            <span style="color: red;">
                <b-icon icon="list"></b-icon>
            </span>
            <strong class="ms-2">Filter Products</strong>
        </div>
        <div>
            <p class="d-inline-block bg-light shadow-sm p-2">
                <a href="">
                    <b-icon icon="x"></b-icon>
                </a>
                <span> Mobile and Tablet</span>
            </p>
        </div>
        <div class="search_wrap">
            <div class="search_hdr section_hdr hdr_red">
                Search Products
            </div>
            <input type="text" class="form-input mt-2">
        </div>
        <div>
            <div>
                <input type="checkbox" name="" id="">
            </div>
        </div>
        <div class="brand_wrap">
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
        <div class="model_wrap">
            <div class="model_hdr section_hdr hdr_red">
                Model
            </div>
            <div class="model">
                <select class="form-input" name="" id="" disabled="disabled">
                    <option value=""></option>
                </select>
            </div>
        </div>
        <div class="color_wrap">
            <div class="color_hdr section_hdr hdr_red">
                Color
            </div>
            <div class="colors">
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
                <button class="bg-dark" style="width:24px; height: 24px; padding: 4px;"></button>
            </div>
        </div>

        <div class="price_range">
            <div><input type="range" name="" id="" class="form-control"></div>
            <div><a href="#">show only products on sale</a></div>
            <div><a href="#">in stock only</a></div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
        button{
            margin: 5px;
        }
    }
    .brand {
        margin: 8px 0;
    }
    .brand button:not(:last-child){        
        margin-right: 8px;
    }

    .brand button{
        margin-top: 4px;
    }

</style>