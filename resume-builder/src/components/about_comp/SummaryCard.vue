<template>
  <section>
    <base-about-card>
      <template v-slot:header>Summary</template>
      <template v-slot:body>{{summary}}</template>
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
      const summary = resume.contact.summary;
      return summary;
    },
  },
}
</script>
