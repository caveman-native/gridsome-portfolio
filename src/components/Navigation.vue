<template>
  <nav class="flex flex-row flex-wrap relative block mx-auto mt-2 mb-2 ml-0 mr-0 h-20">
    
    <div class="font-sans font-bold m-4 text-gray-900 text-xl">
      <g-link class="font-sans" to="/">stephenobrien.me</g-link>
    </div>

    <Slide right noOverlay width="160" class="">
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
import { Slide } from 'vue-burger-menu'
export default {
  components: {
    name: 'Navigation',
    Slide
  }
}
</script>

<style>

.bm-burger-button {
    /*position: fixed;*/
    width: 36px;
    height: 28px;
    right: 12px!important;
    top: 16px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background-color: #333333;
  }
  .line-style {
    position: absolute;
    height: 6%;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 2px;
    cursor: pointer;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
    right: 65px!important;
  }
  .bm-menu {
    height: 55%!important; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #44337a; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list {
    color: #b8b7ad;
    margin-left: 10%;
    font-size: 20px;
  }
  .bm-item-list > * {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
  }
  .bm-item-list > * > span {
    margin-left: 10px;
    font-weight: 700;
    color: white;
  }
    
/* Keyframes for the fade-in */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.fade-in {
  opacity:0;
  opacity: 1 \9; /*just in case ie*/
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fade-in.one {
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

</style>