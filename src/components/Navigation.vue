<template>
    <nav class="flex flex-row flex-wrap relative block mx-auto mt-2 mb-2 ml-0 mr-0 h-20">
        <DropdownMenu class="ml-2 mt-6" />
    <div class="font-sans font-bold ml-12 m-4 text-gray-300 text-xl">
            <g-link class="font-sans" to="/">{{ siteDomainName }}</g-link>
        </div>
    </nav>
</template>
<script>
import DropdownMenu from '~/components/DropdownMenu'
export default {
    components: {
        name: 'Navigation',
        DropdownMenu
    },
    data() {
        return {
            siteDomainName: "s.o.me"
        }
    }
}
</script>