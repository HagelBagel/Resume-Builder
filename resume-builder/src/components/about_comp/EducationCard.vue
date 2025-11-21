<template>
  <section>
    <base-about-card :edit-config="editConfig" @edit-requested="handleEditRequested">
    <education-edit-form v-if="false" />
      <template v-slot:header>{{educationHeading}}</template>
      <template v-slot:body>
        <div v-for="education in educations" :key="education.institution">
          <p><b> {{ education.degree }} </b></p>
          <p class="mb-4">{{ education.institution }} | {{ education.dates }}</p>          
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
    educations() {
      const resume = this.$store.getters['resumeData/resume']
      const educations = resume.educations
      return educations ? educations : [];
    },
    educationHeading() {
      const resume = this.$store.getters['resumeData/resume']
      const heading = resume.educationHeading
      return heading ? heading : '';
    },
    editConfig() {
      return {
        componentType: 'EducationEditForm',
        dialogTitle: 'Edit Education',
        currentData: { educations: this.educations, educationHeading: this.educationHeading },
        fields: [
          { name: 'educationHeading', label: 'Heading', type: 'text' },
          { name: 'educations', label: 'Education', type: 'text' },
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
