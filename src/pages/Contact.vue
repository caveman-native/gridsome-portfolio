<template>
<Layout>

    <div class="flex flex-col w-100 md:max-w-xl h-auto mx-auto mb-24">

        <div class="flex flex-row items-start ml-6 mr-6 mb-8 font-sans text-2xl text-pink-700 font-semibold"><font-awesome class="mt-1 mr-4" :icon="['fas', 'comments']"/>Comments &amp; Questions</div>

        <div class="flex flex-col items-start ml-6 mr-6 mb-3 font-sans text-xl text-green-700 font-normal">Please contact me if you have any comments or questions. Thanks! -Steve</div>
        
        <div class="my-form flex flex-col items-start ml-6 mr-6 mb-8 font-sans text-xl text-gray-900">
        <form name="stephenobrienme-contact-form" action="/success" netlify>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Full Name
                </label>
                </div>
                <div class="md:w-2/3">
                <input name="name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="name" onfocus="this.placeholder=''" onblur="this.placeholder=''" value="">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-email-address">
                    Email Address
                </label>
                </div>
                <div class="md:w-2/3">
                <input name="email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email-address" type="email" placeholder="email" onfocus="this.placeholder=''" onblur="this.placeholder=''" value="">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-message">
                    Message
                </label>
                </div>
                <div class="md:w-2/3">
                <textarea name="message" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-message" type="message" placeholder="type you message here" onfocus="this.placeholder=''" onblur="this.placeholder=''" value=""></textarea>
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
                <label class="md:w-2/3 block text-gray-500 font-bold">
                <input name="checkbox" class="mr-2 leading-tight" type="checkbox">
                <span class="text-sm">
                    Get back to me asap. It's about a job!
                </span>
                </label>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-pink-700 hover:bg-pink-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  type="submit" name="submit">
                    Send Message
                </button>
                </div>
            </div>
        </form>
        </div>

    </div>

</Layout>
</template>
<script>
export default {
    metaInfo: {
        title: 'Contact Me'
    }
}
</script>
