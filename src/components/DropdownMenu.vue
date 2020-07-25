<template>
  <div class="relative">
    <button
        href="#"
        class="flex items-center ml-3 w-4 text-gray-300"
        @click="toggleVisibility"
        @keydown.space.exact.prevent="toggleVisibility"
        @keydown.esc.exact="hideDropdown"
        @keydown.shift.tab="hideDropdown"
        @keydown.up.exact.prevent="startArrowKeys"
        @keydown.down.exact.prevent="startArrowKeys"
    >
    <font-awesome :icon="['fas', 'bars']"/>
    </button>
    <transition name="dropdown-fade">
      <ul v-on-clickaway="hideDropdown" v-if="isVisible" ref="dropdown" class="absolute normal-case font-normal xs:left-0 lg:right-0 bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 lg:z-20 z-20">
        <li>
            <g-link
            to="/"
            ref="home"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.up.exact.prevent=""
            @keydown.tab.exact="focusNext(false)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
            >
            <font-awesome :icon="['fas', 'home']"/>
            <span class="ml-4">home</span>
            </g-link>
        </li>
        <li>
            <g-link
            to="/about"
            ref="about"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
            >
            <font-awesome :icon="['fas', 'user-circle']"/>
            <span class="ml-4">About</span>
            </g-link>
        </li>
        <li>
            <g-link
            to="/projects"
            ref="projects"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
            >
            <font-awesome :icon="['fas', 'project-diagram']"/>
            <span class="ml-4">Projects</span>
            </g-link>
        </li>
        <li>
            <g-link
            to="/resume"
            ref="resume"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
            >
            <font-awesome :icon="['fas', 'file']"/>
            <span class="ml-4">Resume</span>
            </g-link>
        </li>
        <li>
            <g-link
            to="/contact"
            ref="contact"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
            @keydown.tab.exact="focusNext(false)"
            @keydown.shift.tab="focusPrevious(false)"
            @keydown.up.exact.prevent="focusPrevious(true)"
            @keydown.down.exact.prevent="focusNext(true)"
            @keydown.esc.exact="hideDropdown"
            >
            <font-awesome :icon="['fas', 'at']"/>
            <span class="ml-4">Contact</span>
            </g-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
    components: {
        name: 'DropdownMenu'
    },
    mixins: [ clickaway ],
    data() {
        return {
            isVisible: false,
            focusedIndex: 0,
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },
        hideDropdown() {
            this.isVisible = false
            this.focusedIndex = 0
        },
        startArrowKeys() {
            if (this.isVisible) {
            // this.$refs.account.focus()
                this.$refs.dropdown.children[0].children[0].focus()
            }
        },
        focusPrevious(isArrowKey) {
            this.focusedIndex = this.focusedIndex - 1
            if (isArrowKey) {
                this.focusItem()
            }
        },
        focusNext(isArrowKey) {
            this.focusedIndex = this.focusedIndex + 1
            if (isArrowKey) {
                this.focusItem()
            }
        },
        focusItem() {
            this.$refs.dropdown.children[this.focusedIndex].children[0].focus()
        }
    }
}
</script>

<style scoped>

.dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: all .1s ease-in-out;
}

.dropdown-fade-enter, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}

svg .svg-inline--fa .fa-bars,
svg .svg-inline--fa .fa-home,
svg .svg-inline--fa .fa-user-circle,
svg .svg-inline--fa .fa-blog,
svg .svg-inline--fa .fa-file,
svg .svg-inline--fa .fa-at {
    width: 1rem!important;
}

</style>

