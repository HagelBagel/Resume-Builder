<template>
  <section>
    <base-about-card>
      <template v-slot:header>Languages</template>
      <template v-slot:body>
        <div v-for="language in languages" :key="language">
            <p class="mb-2">{{language}}</p>            
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
    languages() {
      const resume = this.$store.getters['resumeData/resume']
      const languages = resume.languages
      return languages
    },
  },
}
</script>