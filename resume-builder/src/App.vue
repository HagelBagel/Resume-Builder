<script>
// import { RouterLink, RouterView } from 'vue-router'
import GlobalHeader from './components/GlobalHeader.vue'

export default {
  components: {
    GlobalHeader,
  },
  computed: {
    resume() {
      const resume = this.$store.getters['resumeData/resume']
      return resume
    },
  },
}
</script>

<template>
  <global-header
    :name="resume.contact.name"
    :address="resume.contact.address"
    :phone="resume.contact.phone"
    :email="resume.contact.email"
    :linkedin="resume.contact.linkedin"
  ></global-header>
</template>

<style scoped></style>
