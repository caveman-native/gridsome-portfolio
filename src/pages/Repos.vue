<template>
  <Layout>
      
    <div class="about-container flex flex-col h-auto mb-12">
             
        <div class="page-title flex flex-col items-start ml-6 mr-6 mb-8 font-sans text-3xl text-white font-semibold">Git Repositories</div>
        
        <p class="flex flex-col items-start ml-6 mr-6 mb-3 font-sans text-base text-gray-800 font-normal">Here are a few coding examples if you would like to check out some of my past and present side projects along with some study examples.</p>
        
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
        </div>

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>