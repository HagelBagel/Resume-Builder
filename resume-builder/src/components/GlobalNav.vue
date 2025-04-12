<template>
  <div class="relative no-print">
    <base-fab @btn-action="showMenu"></base-fab>    
    <div v-if="isDisplayMenu" class="fixed right-10 top-30 p-4 bg-pink-200 rounded-xl shadow-(--shadow)">
      <div class="flex flex-col justify-center gap-4 p-2">
        <base-button @click="toggleResume" :buttonText="resumeBtn"></base-button>
        <base-button @click="toggleCover" :buttonText="coverBtn"></base-button>
        <!-- <base-button @click="toggleEdit" :buttonText="editBtn"></base-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './base/BaseButton.vue'
import BaseFab from './base/BaseFab.vue'
export default {
  data() {
    return {
      resumeBtn: 'Resume',
      coverBtn: 'Cover letter',
      // editBtn: 'Edit',
      isDisplayMenu: false,
      isDisplayResume: true,
      isDisplayCoverLetter: false,
      // isDisplayEdit: false
    }
  },
  components: {
    BaseButton,
    BaseFab,
  },
  methods: {
    showMenu(isButtonOn) {
      // console.log('you clicked!' + isButtonOn)
      if (isButtonOn) {
        this.isDisplayMenu = true;
      } else {
        this.isDisplayMenu = false;
      }
    },
    toggleCover() {
      this.isDisplayCoverLetter = !this.isDisplayCoverLetter;
      this.$emit('toggle-cover', this.isDisplayCoverLetter);
      console.log('You toggled the cover letter')
    },
    toggleResume() {
      this.isDisplayResume = !this.isDisplayResume;
      this.$emit('toggle-resume', this.isDisplayResume);
      console.log('You toggled the resume')
    },
    // toggleEdit() {
    //   this.isDisplayEdit = !this.isDisplayEdit;
    //   this.$emit('toggle-edit', this.isDisplayEdit);
    //   console.log('You toggled edit') 
    // }
  }
}
</script>
