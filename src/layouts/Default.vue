<template>
    <div class="main-container flex flex-col relative min-h-screen mx-auto mt-0 ml-0 mr-0">
        <Navigation />
        <slot/>
        <Footer class="footer-container absolute inset-x-0 bottom-0" />
    </div>
</template>
<script>
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
export default {
    components: {
        Navigation,
        Footer
    }
}
</script>
<style>
    .main-container { 
        background-color: #003864;
    }
    .main-container::before {    
        content: "";
        background-image: url('~@/assets/images/vasanth-0LBtvDcRWtc-unsplash.jpg');
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.15;
        z-index: 0;
    }
    .footer-container { 
        bottom: 6.5%!important;
    }
</style>