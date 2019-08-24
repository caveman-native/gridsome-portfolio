<template>
<Layout>
    <div class="flex flex-col w-1/2 mx-auto">
    
        <p class="flex flex-row items-left page-title mb-10 font-semibold">Resume (pdf)</p>
    
        <p class="resume-copy mb-10">Please find my resume which can be viewed in the browser as a pdf or just download my latest version.<br><br>Thanks you for your interest. - <i>Steve</i></p>
        
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-5">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <a href="//stephenobrien.me/assets/pdf/Steve.OBrien.latest.pdf" target="_blank" rel="noopener">open pdf</a>
        </button> 
        
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <a href="//stephenobrien.me/assets/pdf/Steve.OBrien.latest.pdf" download="Steve.OBrien.latest.pdf">download pdf</a>
        </button>
            
    </div>
</Layout>
</template>
<script>
export default {
    
}
</script>
<style>

</style>