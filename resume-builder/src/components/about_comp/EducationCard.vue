<template>
  <section>
    <base-about-card>
      <template v-slot:header>Education</template>
      <template v-slot:body>
        <div>
          <p><b>What: </b>{{ education.degree }}</p>
          <p><b>Where: </b>{{ education.institution }}</p>
          <p><b>When: </b>{{ education.dates }}</p>
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
      return education ? education : { degree: '', institution: '', dates: '' };
    },
  },
}
</script>
