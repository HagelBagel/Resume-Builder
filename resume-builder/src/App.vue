<template>
  <div>
    <text-editor theme="snow" v-if="displayEdit"></text-editor>
    <global-nav @toggle-resume="toggleResume" @toggle-cover="toggleCoverLetter" @toggle-edit="toggleEdit"></global-nav>
    <!-- <div class="flex justify-center bg-pink-300">
      <global-nav class="w-(--base-width)"></global-nav>
    </div> -->
    <h3 v-if="displayEdit" class="text-red-500">EDIT MODE</h3>
    <div class="flex justify-center">
      <div class="w-(--base-width)">
        <global-header
          :name="resume.contact.name"
          :address="resume.contact.address"
          :phone="resume.contact.phone"
          :email="resume.contact.email"
          :linkedin="resume.contact.linkedin"
        ></global-header>
        <cover-letter-view v-if="displayCoverLetter"></cover-letter-view>
        <resume-view v-if="displayResume"></resume-view>
      </div>
    </div>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
import ResumeView from './views/ResumeView.vue'
import CoverLetterView from './views/CoverLetterView.vue'
import GlobalNav from './components/GlobalNav.vue'
import GlobalHeader from './components/GlobalHeader.vue'
import TextEditor from './components/TextEditor.vue'

export default {
  data() {
    return {
      displayCoverLetter: true,
      displayResume: true,
      displayEdit: false
    }
  },
  components: {
    GlobalNav,
    GlobalHeader,
    ResumeView,
    CoverLetterView,
    TextEditor
  },
  computed: {
    resume() {
      const resume = this.$store.getters['resumeData/resume']
      return resume
    },
  },
  methods: {
    toggleCoverLetter(isDisplayCoverLetter) {
      console.log('Cover letter: ' + isDisplayCoverLetter)
      if (isDisplayCoverLetter) {
        this.displayCoverLetter = true;
      } else {
        this.displayCoverLetter = false;
      }
    },
    toggleResume(isDisplayResume) {
      console.log('Resume: ' + isDisplayResume)
      if (isDisplayResume) {
        this.displayResume = true;
      } else {
        this.displayResume = false;
      }
    },
    toggleEdit(isDisplayEdit) {
      console.log('Edit mode: ' + isDisplayEdit)
      if (isDisplayEdit) {
        this.displayEdit = true;
      } else {
        this.displayEdit = false;
      }
    } 
  }
}
</script>

<style scoped></style>
