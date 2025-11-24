<template>
  <section>
    <base-about-card :edit-config="editConfig" @edit-requested="handleEditRequested">
      <skills-edit-form v-if="false" />
      <template v-slot:header>{{ heading }}</template>
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
import SkillsEditForm from './about_edit_comp/SkillsEditForm.vue'
export default {
  components: {
    BaseAboutCard,
    SkillsEditForm,
  },
  computed: {
    heading() {
      const resume = this.$store.getters['resumeData/resume']
      const heading = resume.skillsHeading      
      return heading ? heading : ''
    },
    skills() {
      const resume = this.$store.getters['resumeData/resume']
      const skills = resume.skills
      return skills ? skills : { languages: [], frameworks: [], tools: [] }
    },
    editConfig() {
      return {
        componentType: 'SkillsEditForm',
        dialogTitle: 'Edit Skills',
        currentData: { skills: this.skills, heading: this.heading },
        fields: [
          { name: 'heading', label: 'Heading', type: 'text' },
          { name: 'skills.languages', label: 'Languages', type: 'array' },
          { name: 'skills.frameworks', label: 'Frameworks', type: 'array' },
          { name: 'skills.tools', label: 'Tools', type: 'array' },
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

<style scoped>
.skill-chip {
  padding: 2px 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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
