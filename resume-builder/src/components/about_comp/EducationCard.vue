<template>
  <section>
    <base-about-card>
      <template v-slot:header>Education</template>
      <template v-slot:body>
        <div>
          <p>{{ education.degree }}</p>
          <p>{{ education.institution }}</p>
          <p>{{ education.dates }}</p>
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
    education() {
      const resume = this.$store.getters['resumeData/resume']
      const education = resume.education
      return education
    },
  },
}
</script>
