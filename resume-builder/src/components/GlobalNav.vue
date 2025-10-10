<template>
  <div class="relative no-print">
    <!-- BaseFab is always visible -->
    <base-fab @btn-action="showMenu"></base-fab>
    
    <!-- Toggle menu with slide animation from the right -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="transform translate-x-full opacity-0"
      enter-to-class="transform translate-x-0 opacity-100"
      leave-from-class="transform translate-x-0 opacity-100"
      leave-to-class="transform translate-x-full opacity-0"
    >
      <div v-if="isDisplayMenu" class="fixed right-2 bottom-20 sm:right-4 sm:bottom-24 md:right-8 px-4 py-2 md:py-4 bg-(--body-bg) rounded-lg shadow-(--shadow) max-w-xs sm:max-w-sm">
        <div class="flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 p-1 sm:p-2">
          <base-toggle 
            v-model="isDisplayResume" 
            label="Resume" 
            @update:modelValue="toggleResume"
          />
          <base-toggle 
            v-model="isDisplayCoverLetter" 
            label="Cover Letter" 
            @update:modelValue="toggleCover"
          />      
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BaseToggle from './base/BaseToggle.vue'
import BaseFab from './base/BaseFab.vue'
export default {
  data() {
    return {
      isDisplayMenu: false,
      isDisplayResume: true,
      isDisplayCoverLetter: false
    }
  },
  components: {
    BaseToggle,
    BaseFab,
  },
  methods: {
    showMenu(isButtonOn) {
      this.isDisplayMenu = isButtonOn;
    },
    toggleCover(value) {
      this.$emit('toggle-cover', value);
      console.log('You toggled the cover letter:', value)
    },
    toggleResume(value) {
      this.$emit('toggle-resume', value);
      console.log('You toggled the resume:', value)
    }
  }
}
</script>