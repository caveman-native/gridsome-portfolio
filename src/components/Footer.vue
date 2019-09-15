<template>
<div>
    <div class="flex flex-row items-end w-100 h-8 ml-2 mr-2 mb-0 p-1 pb-0">
        <ul class="flex flex-1 justify-center p-0 m-0 text-xs text-gray-700">     
            <li><g-link to="/">home<span class="ml-1 mr-1 text-pink-500">|</span></g-link></li>
            <li><g-link to="/about">about<span class="ml-1 mr-1 text-pink-500">|</span></g-link></li>
            <li><g-link to="/repos">repos<span class="ml-1 mr-1 text-pink-500">|</span></g-link></li>
            <li><g-link to="/resume">resume<span class="ml-1 mr-1 text-pink-500">|</span></g-link></li>
            <li><g-link to="/contact">contact me</g-link></li>    
        </ul>
    </div>
    <div class="flex flex-row items-end w-100 h-8 ml-2 mr-2 mb-4 p-1 pt-0">
        <ul class="flex flex-1 justify-center p-1 pt-0 text-xs text-gray-700">
            <li>Stack &nbsp;<a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome<span class="ml-1 mr-1 text-pink-500">|</span></a></li>
            <li><a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">Tailwind CSS<span class="ml-1 mr-1 text-pink-500">|</span></a></li>
            <li><a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">VueJS 2.0</a></li>
            <li>&nbsp; Hosting<span class="ml-1 mr-1 text-pink-500">|</span><a href="https://www.netlify.com" target="_blank" rel="noopener">Netlify</a></li>
        </ul>
    </div>
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

.btn-blue {
    @apply bg-blue-200 p-1 m-1 rounded;
}

.btn-blue:hover {
    @apply bg-blue-300 text-gray-100;
}

a {
    color:darkgreen;
}

a:hover {
    color:azure;  
}

</style>