<template>
  <div>    
    <global-nav
      @toggle-resume="toggleResume"
      @toggle-cover="toggleCoverLetter"      
    ></global-nav>
    <!-- <h3 v-if="displayEdit" class="text-red-500">EDIT MODE</h3> -->
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
import ResumeView from './views/ResumeView.vue'
import CoverLetterView from './views/CoverLetterView.vue'
import GlobalNav from './components/GlobalNav.vue'
import GlobalHeader from './components/GlobalHeader.vue'

export default {
 
  data() {
    return {
      displayCoverLetter: true,
      displayResume: true,
    }
  },
  components: {
    GlobalNav,
    GlobalHeader,
    ResumeView,
    CoverLetterView,
  },
  computed: {
    resume() {
      const resume = this.$store.getters['resumeData/resume']
      return resume
    },
    coverLetter() {
      const coverLetter = this.$store.getters['resumeData/coverLetter']
      return coverLetter
    },
  },
  methods: {
    toggleCoverLetter(isDisplayCoverLetter) {
      if (isDisplayCoverLetter) {
        this.displayCoverLetter = true
      } else {
        this.displayCoverLetter = false
      }
    },
    toggleResume(isDisplayResume) {
      if (isDisplayResume) {
        this.displayResume = true
      } else {
        this.displayResume = false
      }
    },   
  },
}
</script>

<style scoped></style>
