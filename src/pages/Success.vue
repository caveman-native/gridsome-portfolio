<template>
    <Layout>

        <div class="flex flex-col w-100 md:max-w-xl h-auto mx-auto mb-24">

            <div class="flex flex-row items-start ml-6 mr-6 mb-8 font-sans text-2xl text-pink-700 font-semibold"><font-awesome class="mt-1 mr-4" :icon="['fas', 'check-square']"/>Submission Success!</div>
            
            <div class="success-message flex flex-col items-center m-auto mt-10">
                
                <p class="flex flex-col items-start ml-6 mr-6 mb-3 font-sans text-base text-gray-300 font-normal">Thank you for contacting me! I will get back to you very soon. -Steve</p>
                
                <div class="home-btn mt-2">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-100"><g-link to="/">home</g-link></button>
                </div>
                
            </div>
            
        </div>
    </Layout>
</template>
<script>
export default {
    metaInfo: {
        title: 'Submission Success'
    }   
}
</script>
