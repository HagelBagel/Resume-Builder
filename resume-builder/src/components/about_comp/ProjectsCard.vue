<template>
  <section>
    <base-about-card>
      <template v-slot:header>Projects</template>
      <template v-slot:body>
        <div v-for="project in projects" :key="project">
            <p class="font-bold mb-2">{{project.name}}:</p>
            <p class="mb-2">{{project.description}}</p>
        </div>        
      </template>
    </base-about-card>
  </section>
</template>

<script>
import BaseAboutCard from '../base/BaseAboutCard.vue'
export default {
  components: {
    BaseAboutCard,
  },
  computed: {
    projects() {
      const resume = this.$store.getters['resumeData/resume']
      const projects = resume.projects
      return projects
    },
  },
}
</script>
