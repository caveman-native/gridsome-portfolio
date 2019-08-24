<template>
    <Layout>

        <div class="flex flex-col items-center">
            
            <g-image class="w-3/4 md:w-1/2 rounded" src="~/assets/images/profile-img3.jpg" alt="Stephen OBrien" />
            
            <div class="w-3/4 md:w-1/2 font-sans text-3xl text-white font-semibold leading-snug">Hi, I'm Stephen. I'm a Front End Developer, who likes VueJS.</div>
            
            <button class="bg-gray-500 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded mt-4"><g-link to="/about" class="">learn more</g-link></button>
 
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
<style>
</style>