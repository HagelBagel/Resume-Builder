<template>
  <div>
    <h1 class="text-3xl">Professional Experience:</h1>
    <div class="grid grid-cols-1 gap-4">
      <experience-card
      v-for="exp in experience"
      :key="exp"
      :title="exp.title"
      :company="exp.company"
      :dates="exp.dates"
      :details="exp.details"
      ></experience-card>
    </div>
  </div>
</template>

<script>
import ExperienceCard from '../components/ExperienceCard.vue'

export default {
  components: {
    ExperienceCard,
  },
  computed: {
    experience() {
      const resume = this.$store.getters['resumeData/resume']
      const experience = resume.experience
      return experience
    },
  },
}
</script>
