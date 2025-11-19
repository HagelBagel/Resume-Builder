<template>
  <section>
    <base-about-card :edit-config="editConfig" @edit-requested="handleEditRequested">
    <projects-edit-form v-if="false" />
      <template v-slot:header>{{projectsHeading}}</template>
      <template v-slot:body>
        <div v-for="project in projects" :key="project" class="mb-8">
            <p class="font-bold mb-2">{{project.name}}:</p>
            <p class="mb-2">{{project.description}}</p>
            <a href="url" target="_blank" v-if="project.url" class="buttonized-link flex flex-row gap-2 mb-2">
              <b>LIVE DEMO</b>
              <base-icon-btn type="button" :iconString="'link'"></base-icon-btn>
            </a>
        </div>        
      </template>
    </base-about-card>
  </section>
</template>

<script>
import BaseAboutCard from '../base/BaseAboutCard.vue'
import BaseIconBtn from '../base/BaseIconBtn.vue'
export default {
  components: {
    BaseAboutCard,
    BaseIconBtn,
  },
  computed: {
    projectsHeading() {
      const resume = this.$store.getters['resumeData/resume']
      const heading = resume.projectsHeading
      return heading ? heading : 'Projects'
    },
    projects() {
      const resume = this.$store.getters['resumeData/resume']
      const projects = resume.projects
      return Array.isArray(projects) ? projects : [];
    },
    editConfig() {
      return {
        componentType: 'ProjectsEditForm',
        dialogTitle: 'Edit Projects',
        currentData: { projects: this.projects, projectsHeading: this.projectsHeading },
        fields: [
          { name: 'projectsHeading', label: 'Heading', type: 'text' },
          { name: 'projects', label: 'Projects', type: 'textarea' },
          { name: 'url', label: 'Project URL', type: 'text' },
        ],
      }
    },
  },
  methods: {
    handleEditRequested() {
      this.$store.dispatch('resumeData/openEditDialog', this.editConfig)
    },
  },
}
</script>
