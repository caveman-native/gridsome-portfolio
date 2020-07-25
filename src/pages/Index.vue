<template>
    <Layout>

        <div class="flex-col w-100 md:max-w-xl h-auto mx-auto mb-24 z-10">
            <!--    
            <div class="col1 flex flex-col items-center border border-red-500">
                <g-image class="w-3/4 md:w-1/4 lg:w-48 max-w-xs" src="~/assets/images/profile-img3.jpg" alt="Stephen OBrien" />
            </div>
            
            <div class="col2 flex flex-col items-center border border-red-500">
                <div class="w-3/4 md:w-1/4 lg:w-48 max-w-xs mt-1 font-sans text-2xl text-white font-semibold leading-snug">Hi, I'm Stephen. I'm a Front End Developer, who likes VueJS.</div>
                <div class="learn-more-btn">
                    <button class="bg-pink-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded mt-6"><g-link to="/about" class="">learn more</g-link></button>
                </div>
            </div>
            -->
                
            <div class="md:flex bg-gray-200 rounded p-6">
                <g-image class="w-64 rounded mx-auto mt-4 mb-4" src="~/assets/images/profile-img-4.png" />
                <div class="text-center md:self-center md:ml-8 md:mr-6 font-sans text-2xl font-semibold leading-snug">
                    <h2 class="">Hi, I'm Stephen.</h2>
                    <div class="text-lg">I'm a Front End Developer,<br> who likes VueJS.</div>
                    <div class="text-lg mt-2">
                        <a href="https://www.linkedin.com/in/stevetobrien/" target="_blank">@linkedin</a>        
                    </div>
                    <button class="bg-pink-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded text-lg mt-6">
                        <g-link to="/projects">my projects</g-link>
                    </button>
                </div>
            </div>

        </div>

    </Layout>
</template>
<script>
export default {
    metaInfo: {
        title: 'Welcome'
    }
}
</script>
