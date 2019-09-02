<template>
<Layout>
    
<div class="about-container flex flex-col h-auto mb-12">
    <div class="page-title flex flex-col items-start ml-6 mr-6 mb-8 font-sans text-3xl text-white font-semibold">Contact me</div>
    <div class="my-form flex flex-col items-start ml-6 mr-6 mb-8 font-sans text-xl text-gray-900">
        
        <form name="stephenobrienme-contact-form" action="/success/" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
            <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div class="sender-info">
                <div>
                    <label for="name" class="label block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4 rounded">Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label for="email" class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4 rounded">Email</label>
                    <input type="email" name="email" />
                </div>
            </div>
            <div class="message-wrapper">
                <label for="message" class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4 rounded">Short Message</label>
                <textarea name="message"></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div class="submit-btn">
                <button class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4" type="submit" name="submit">Submit</button>
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
<style>

</style>