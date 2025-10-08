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
      <div v-if="isDisplayMenu" class="fixed right-8 bottom-30 py-4 border-b-4 border-(--border) border-dotted">
        <div class="flex flex-col justify-center gap-4 p-2">
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