<template>
    <div class="main-container flex flex-col relative min-h-screen mx-auto mt-0 ml-0 mr-0">
        <!-- flex flex-col min-h-screen mx-auto mt-2 ml-4 mr-4 -->
        <Navigation />
        <slot/>
        <Footer class="absolute inset-x-0 bottom-0" />
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
        background-image: url('~@/assets/images/rodion-kutsaev-IJ25m7fXqtk-unsplash.jpg');
    }
</style>