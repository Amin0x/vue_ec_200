
<template>
    <div class="aa-navbar-top">
        <div class="container">
           <div class="d-flex align-items-center">
                <router-link to="/"><img src="../assets/Logo-1.png" alt="logo"></router-link>
                <div class="ms-auto"><button class="aa-login-btn">Login / Register</button></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       name:'HeaderComponent',
    }
</script>

<style scoped>
.aa-navbar-top{
    align-items: center;
    padding: 1rem;
    background-color: #000;
}

.aa-navbar-top .aa-login-btn{
    padding: 8px 16px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    outline: none;
    text-decoration: none;
    transition: all 0.4s ease 0s;
    font-weight: 700;
    line-height: .8em;
    white-space: normal;
    position: relative;
    font-size: 15px;
    font-style: normal;
    border: 1px solid transparent;
    background-color: #f6f6f6;
    color: #111;
    line-height: 15px;
    font-size: 15px;
    text-shadow: none;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 1px 2px rgba(0,0,0,.08);
}

.aa-navbar-top .aa-login-btn:hover{
    background-color: #b1b1b1;
}
</style>
