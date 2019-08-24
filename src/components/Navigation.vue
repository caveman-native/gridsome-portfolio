<template>
  <nav class="flex flex-row flex-wrap relative block mx-auto mt-2 mb-2 ml-0 mr-0 h-20">
    
    <div class="font-sans font-bold m-4 text-gray-900 text-xl">
      <g-link class="font-sans" to="/">stephenobrien.me</g-link>
    </div>

    <!-- <Slide right noOverlay width="160" class=""> -->
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">  
      <div class="text-sm lg:flex-grow"> <!-- links to the left side --> </div>
 
        <div class="nav-links">
            <g-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-white-400 hover:text-white mr-4">home</g-link>     
            <g-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-white-400 hover:text-white mr-4">about me</g-link>     
            <g-link to="/blog" class="block mt-4 lg:inline-block lg:mt-0 text-white-400 hover:text-white mr-4">dev blog</g-link>     
            <g-link to="/resume" class="block mt-4 lg:inline-block lg:mt-0 text-white-400 hover:text-white mr-4">my resume</g-link>
            <g-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-white-400 hover:text-white mr-4">contact me</g-link>
        </div>

    </div>
    </Slide>

  </nav>
</template>
<script>
// import { Slide } from 'vue-burger-menu'
export default {
  components: {
    name: 'Navigation'
    //Slide
  }
}
</script>

<style>


</style>