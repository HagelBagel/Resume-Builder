<template>
  <section>
    <base-about-card :edit-config="editConfig" @edit-requested="handleEditRequested">
      <template v-slot:header>{{ summaryHeading }}</template>
      <template v-slot:body>{{ summary }}</template>
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
    summary() {
      const resume = this.$store.getters['resumeData/resume']
      const summary = resume.contact.summary
      return summary ? summary : 'No summary provided.'
    },
    summaryHeading() {
      const resume = this.$store.getters['resumeData/resume']
      const heading = resume.contact.summaryHeading
      return heading ? heading : 'Summary'
    },
    editConfig() {
      return {
        componentType: 'summary',
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
      // console.log('Edit requested in SummaryCard', this.editConfig);
      this.$store.dispatch('resumeData/openEditDialog', this.editConfig)
    },
  },
}
</script>
