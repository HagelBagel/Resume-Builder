<template>
  <div>
    <h1 class="text-3xl mb-4">Professional Experience:</h1>
    <div class="grid grid-cols-4 gap-4">
    <summary-card></summary-card>
    <projects-card></projects-card>
    <education-card></education-card>
    <skills-card></skills-card>

    </div>
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
import ExperienceCard from '../components/ExperienceCard.vue';
import SummaryCard from '../components/about_comp/SummaryCard.vue';
import ProjectsCard from '../components/about_comp/ProjectsCard.vue';
import EducationCard from '../components/about_comp/EducationCard.vue';
import SkillsCard from '../components/about_comp/SkillsCard.vue';


export default {
  components: {
    ExperienceCard,
    SummaryCard,
    ProjectsCard,
    EducationCard,
    SkillsCard,
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
