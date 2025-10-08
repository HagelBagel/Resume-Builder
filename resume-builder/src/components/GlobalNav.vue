<template>
  <div class="relative no-print">
    <div v-if="isDisplayMenu" class="fixed right-10 top-30 p-4 bg-pink-200 rounded-xl shadow-(--shadow)">
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
    <base-fab @btn-action="showMenu"></base-fab>    
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