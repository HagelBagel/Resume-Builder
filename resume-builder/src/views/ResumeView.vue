<template>
  <div class="flex flex-row">
    <div>
      <h1>About Me:</h1>
      <div class="mt-6 mr-6">
        <summary-card></summary-card>
        <projects-card></projects-card>
        <div>
          <education-card></education-card>
          <language-card></language-card>
        </div>
        <skills-card></skills-card>
      </div>
    </div>
    <div>
      <h1 class="ml-8">Resume:</h1>
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
  </div>
</template>

<script>
import ExperienceCard from '../components/ExperienceCard.vue'
import SummaryCard from '../components/about_comp/SummaryCard.vue'
import ProjectsCard from '../components/about_comp/ProjectsCard.vue'
import EducationCard from '../components/about_comp/EducationCard.vue'
import SkillsCard from '../components/about_comp/SkillsCard.vue'
import LanguageCard from '../components/about_comp/LanguageCard.vue'

export default {
  components: {
    ExperienceCard,
    SummaryCard,
    ProjectsCard,
    EducationCard,
    SkillsCard,
    LanguageCard,
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
