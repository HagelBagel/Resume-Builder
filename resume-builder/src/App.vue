<template>
  <div class="flex flex-col">
    <div class="flex justify-center bg-pink-300">
      <global-nav class="w-(--base-width)"></global-nav>
    </div>
    <div class="flex justify-center">
      <div class="w-(--base-width)">
        <global-header
          :name="resume.contact.name"
          :address="resume.contact.address"
          :phone="resume.contact.phone"
          :email="resume.contact.email"
          :linkedin="resume.contact.linkedin"
        ></global-header>
        <resume-view></resume-view>
        <cover-letter-view></cover-letter-view>
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

export default {
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
  },
}
</script>

<style scoped></style>
