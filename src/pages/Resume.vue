<template>
    <Layout>
        <div class="flex flex-col w-100 md:max-w-xl h-auto mx-auto mb-12">
            
            <div class="flex flex-row items-start ml-6 mr-6 mb-8 font-sans text-2xl text-pink-700 font-semibold"><font-awesome class="mt-1 mr-4" :icon="['fas', 'file']"/>My Resume (pdf)</div>
            
            <p class="flex flex-col items-start ml-6 mr-6 mb-20 font-sans text-base text-gray-300 font-normal">Please find my resume which can be viewed in the browser as a pdf or just download my latest version.<br><br>Thanks you for your interest.<br><i>- Steve</i></p>
            
            <button class="max-w-1/3 m-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-5">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <a href="https://drive.google.com/file/d/1X700Gp5U3l2JNyZi3LmpLWTc1_A5aAc7/view?usp=sharing" target="_parent">open pdf</a>
            </button> 
            
            <button class="max-w-1/3 m-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-5 mt-5">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <a href="https://www.stephenobrien.me/assets/pdf/Steve.OBrien.latest.pdf" download="Steve.OBrien.latest.pdf">download pdf</a>
            </button>
            
        </div>
    </Layout>
</template>
<script>

export default {
    metaInfo: {
        title: 'Resume'
    }
}
</script>
<style>

</style>