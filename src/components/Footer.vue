<template>
  <div class="flex flex-row items-end w-100 h-10 ml-2 mr-2 mb-4 p-1">
    <ul class="flex flex-1 justify-center p-1 text-xs text-gray-700">
        <li>Stack &nbsp;<a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome<span class="ml-1 mr-1 ">|</span></a></li>
        <li><a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">Tailwind CSS<span class="ml-1 mr-1 text-pink-500">|</span></a></li>
        <li><a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">VueJS 2.0</a></li>
        <li>&nbsp; Hosting<span class="ml-1 mr-1 text-pink-500">|</span><a href="https://www.netlify.com" target="_blank" rel="noopener">Netlify</a></li>
    </ul>
  </div>
</template>
<script>
export default {
    components: {
        name: 'Footer'
    }
}
</script>
<style scoped>

a {
    color:darkgreen;
}

a:hover {
    color:azure;  
}

</style>