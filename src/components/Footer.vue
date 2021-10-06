<template>
    <div class="am-footer">
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column am-flowus-wrap">
                    <div>Follow Us</div>
                    <div><a href="#"></a><a href="#"></a><a href="#"></a></div>
                    <div>Disclaimer</div>
                    <div>OWNIQS only compares prices. All product names, trademarks, service marks, logos, models and designs on this website are the exclusive property of their respective owners and are displayed solely for the purpose of this website. Onyx operates as an independent party and is not a representative, agent, employee, sponsor, partner or other such owner. Products or brands</div>
                </div>
                <div class="d-flex flex-column am-customers-wrap">
                    <div>Customers</div>
                    <div><a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a></div>
                </div>
                <div class="d-flex flex-column am-store-wrap">
                    <div>Stores Owners</div>
                </div>
                <div class="d-flex flex-column am-news-wrap">
                    <div>The News</div>
                    <div>Subscribe to our newsletter to receive news and special offers</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .am-footer{
        color: #ccc;
        background-color: #3f3f3f !important;
        padding: 1rem;
    }

    .am-footer .am-flowus-wrap{
        width: 35%;
        padding: 1.2rem;
    }

    .am-footer .am-customers-wrap,
    .am-footer .am-store-wrap,
    .am-footer .am-news-wrap{
        width: 25%;
        padding: 1.2rem;
    }
</style>