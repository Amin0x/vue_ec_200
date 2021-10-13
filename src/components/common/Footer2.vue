<template>
    <div>
        <div id="am-footer" class="am-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xl-3">
                        <div class="h3 am-owndiq"><span style="color:#EF8560;">O</span>WNiQS</div>
                        <div><b-icon icon="telephone"></b-icon> +1-123456789</div>
                        <div><b-icon icon="geo-alt"></b-icon> Saudia Arabia, Alr, 123</div>
                        <div><b-icon icon="envelope"></b-icon> email@example.com</div>
                        
                        <div class="text-light am-social">
                            <a href="#" class="text-light"><b-icon icon="facebook"></b-icon></a>
                            <a href="#" class="text-light"><b-icon icon="instagram"></b-icon></a>
                            <a href="#" class="text-light"><b-icon icon="twitter"></b-icon></a>                        
                        </div>
                        <p class="mt-3 mb-2" style="font-weight:700;">Disclaimer</p>
                        <div>OWNIQS only compares prices. All product names, trademarks, service marks, logos, models and designs on this website are the exclusive property of their respective owners and are displayed solely for the purpose of this website. Onyx operates as an independent party and is not a representative, agent, employee, sponsor, partner or other such owner. Products or brands</div>
                    </div>
                    <div class="col-md-6 col-xl-3 mt-md-0 mt-4">
                        <div class="d-flex flex-column am-customers-wrap">
                            <div class="mb-2"><strong>Customers</strong></div>
                            <div>
                                <p class="m-0"><a class="text-light text-decoration-none" href="#">All Cateogries</a></p>
                                <p class="m-0"><a class="text-light text-decoration-none" href="#">Daily Deals</a></p>
                                <p class="m-0"><a class="text-light text-decoration-none" href="#">Super Market</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <div class="h4">
                                Subscribe To Get More
                            </div>
                            <div class="subscribe">
                                <input type="text" placeholder="Email">
                            </div>
                            <div>
                                <button type="submit" class="btn aa-btn-sub">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <hr>
                <div class="text-light text-center"><small>Copyright &COPY OWNIQS 2021</small></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.am-footer{
    padding-top: 2rem;
    background-color: #000;
    color: #fff;

    .am-owndiq{
        font-weight: 700;
    }

    .am-follow{
        margin-top: 1.2rem;
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: 700;
    }

    .am-social a{
        text-decoration: none;
        font-size: 2rem;
    }
    .am-social a:not(:last-child){
        margin-right: .5rem;
    }

    .am-social a:hover{
        color: coral !important;
    }

    .subscribe input {
        outline: 0;
        border: 1px solid orange;
        padding: .5rem;
        display: block;
        width: 100%;
        margin-top: 1rem;
        background-color: #eff5f7;
    }

    .aa-btn-sub{
        background-color: orange;
        width: 100%;
        padding: 0.8rem;
        margin-top: 1rem;
    }
}
</style>