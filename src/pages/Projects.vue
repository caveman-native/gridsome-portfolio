<template>
  <Layout>
      
    <div class="flex flex-col w-100 md:max-w-xl h-auto mx-auto mb-24">
             
        <div class="flex flex-row items-start ml-6 mr-6 mb-8 font-sans text-2xl text-pink-700 font-semibold"><font-awesome class="mt-1 mr-4" :icon="['fas', 'project-diagram']"/>Projects</div>
        
        <div class="ml-6 mr-6 mb-3 font-sans text-xl text-green-700 font-normal">Git Repos - click to run or visit the repo</div>

        <p class="ml-6 mr-6 mb-6 font-sans text-base text-gray-300 font-normal">This is a collection of coding examples and small projects. You can visit the repos on my public github space.</p>
      
        <div class="repo-item flex flex-col items-center border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-t rounded-b lg:rounded-b-none lg:rounded-r p-4 m-6"> 
            <g-image src="~/assets/images/git-repo-link.png" width="500"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Gridsome App</div>
                <p class="text-gray-700 text-base">
                This App is an example portfolio site for information about myself. Gridsome is a static site generator built using VueJS GrapgQL and TailwindCSS. Lots of cool features. 
                </p>
            </div>
            <div class="repo-btn flex flex-row flex-no-wrap">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-6"><a href="https://github.com/sobrien172513/gridsome-portfolio" target="_blank">REPO</a></button>
                
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"><a href="https://www.stephenobrien.me" target="_blank">RUN</a></button>
            </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">gridsome</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">vuejs</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">graphql</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">tailwindcss</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">netlify</span>
            </div>
        </div>
        
        <div class="repo-item flex flex-col items-center border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-t rounded-b lg:rounded-b-none lg:rounded-r p-4 m-6"> 
            <g-image src="~/assets/images/git-repo-link.png" width="500"/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">ITP Deployment App</div>
                <p class="text-gray-700 text-base">
                This project was intended to help scientific research. It is a demo created to control weather testing devices at sea near the north pole.
                </p>
            </div>
            <div class="repo-btn flex flex-row flex-no-wrap">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-6"><a href="https://github.com/sobrien172513/itp-deployment-tool" target="_blank">REPO</a></button>
                
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"><a href="https://itp-deployment-tool.herokuapp.com" target="_blank">RUN</a></button>
            </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">python</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">bottle</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">tinydb</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">javascript</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">bootstrap</span>
            </div>
        </div> 

    </div>
  </Layout>
</template>

<script>
import Default from '~/layouts/Default'
export default {
    metaInfo: {
        title: 'My Projects'
    }
}
</script>