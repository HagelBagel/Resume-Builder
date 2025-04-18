<template>
  <section>
    <base-about-card>
      <template v-slot:header>Skills</template>
      <template v-slot:body>
        <p class="font-bold mb-2">Languages:</p>
        <div class="flex flex-wrap">
          <span class="skill-chip language-chip" v-for="skill in skills.languages" :key="skill">{{
            skill
          }}</span>
        </div>

        <p class="font-bold mb-2">Frameworks:</p>
        <div class="flex flex-wrap">
          <span
            class="skill-chip frameworks-chip"
            v-for="skill in skills.frameworks"
            :key="skill"
            >{{ skill }}</span
          >
        </div>

        <p class="font-bold mb-2">Tools:</p>
        <div class="flex flex-wrap">
          <span class="skill-chip tools-chip" v-for="skill in skills.tools" :key="skill">{{
            skill
          }}</span>
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
    skills() {
      const resume = this.$store.getters['resumeData/resume']
      const skills = resume.skills
      // console.log(skills)
      return skills
    },
  },
}
</script>

<style scoped>
.skill-chip {
  padding: 2px 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: .9rem;
}

.language-chip {
  background-color: rgb(152, 230, 204);
  border-left: 4px solid rgb(103, 168, 146);
}

.frameworks-chip {
  background-color: rgb(230, 225, 152);
  border-left: 4px solid rgb(184, 179, 116);
}

.tools-chip {
  background-color: rgb(152, 201, 230);
  border-left: 4px solid rgb(114, 151, 172);
}
</style>
