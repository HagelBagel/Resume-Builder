<template>
  <div 
    id="top-bar" 
    :class="[
      'fixed top-0 left-0 right-0 z-50 bg-mint-200 transition-all duration-300 ease-in-out',
      isScrolled ? 'py-1' : 'py-4'
    ]"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <h2 
        :class="[
          'font-bold text-gray-800 transition-all duration-300 ease-in-out',
          isScrolled ? 'text-sm' : 'text-xl sm:text-2xl'
        ]"
      >
        Resume Builder
      </h2>
      
      <button
        @click="toggleHelp"
        :class="[
          'bg-white hover:bg-gray-100 text-gray-700 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center border-2 transition-colors',
          showHelpText ? 'border-mint-500 bg-mint-50' : 'border-gray-300 hover:border-gray-400',
          isScrolled ? 'w-6 h-6 text-xs' : 'w-10 h-10 text-base'
        ]"
        aria-label="Help"
        :title="showHelpText ? 'Hide help' : 'Get help'"
      >
        {{ showHelpText ? '×' : '?' }}
      </button>
    </div>
    
    <!-- Help text panel that slides down -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <div v-if="showHelpText" class="px-4 py-4">
        <div class="container mx-auto max-w-4xl">
          <h3 class="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Welcome to Resume Builder!</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">
            This application displays your professional resume and cover letter in a clean, organized format. 
            Use the floating menu button (bottom-right) to toggle between viewing your resume and cover letter sections. 
            The layout is responsive and works well on desktop, tablet, and mobile devices.
          </p>          
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      showHelpText: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    },
    toggleHelp() {
      this.showHelpText = !this.showHelpText
      this.$emit('toggle-help', this.showHelpText)
      console.log('Help toggled:', this.showHelpText)
    }
  }
}
</script>