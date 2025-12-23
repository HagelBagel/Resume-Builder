<template>
  <section>
    <base-about-card :edit-config="editConfig" @edit-requested="handleEditRequested">
    <summary-edit-form v-if="false" />
      <template v-slot:header>{{ summaryHeading }}</template>
      <template v-slot:body>{{ summary }}</template>
    </base-about-card>
  </section>
</template>

<script>
import BaseAboutCard from '../base/BaseAboutCard.vue'
// import SummaryEditForm from '../about_comp/about_edit_comp/SummaryEditForm.vue'

export default {
  components: {
    BaseAboutCard,
    // SummaryEditForm,
  },
  computed: {
    summary() {
      const resume = this.$store.getters['ResumeData/resume']
      const summary = resume.contact.summary
      return summary ? summary : 'No summary provided.'
    },
    summaryHeading() {
      const resume = this.$store.getters['ResumeData/resume']
      const heading = resume.contact.summaryHeading
      return heading ? heading : 'Summary'
    },
    editConfig() {
      return {
        componentType: 'SummaryEditForm',
        dialogTitle: 'Edit Summary',
        currentData: { summary: this.summary, summaryHeading: this.summaryHeading },
        fields: [
          { name: 'summaryHeading', label: 'Heading', type: 'text' },
          { name: 'summary', label: 'Summary', type: 'textarea' },
        ],
      }
    },
  },
  methods: {
    handleEditRequested() {
      this.$store.dispatch('ResumeData/openEditDialog', this.editConfig)
    },
  },
}
</script>
