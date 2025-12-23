<template>
  <div>
    <div class="mt-4 mb-4 px-2 sm:px-4 lg:px-8 lg:border-l-4 lg:border-(--border) lg:border-dotted">
      <h2 class="font-bold underline decoration-2">
        {{ title }}
        <span
          v-if="isEditMode"
          @click="handleEditRequested"
          class="iconBtn material-symbols-outlined"
          >edit</span
        >
      </h2>
      <p class="text-sm font-semibold mt-2 mb-2">{{ company }} | {{ dates }}</p>
      <ul role="list">
        <li class="details" v-for="detail in details" :key="detail">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index', 'title', 'company', 'dates', 'details'],
  data() {
    return {
      isEditMode: true,
    }
  },
  computed: {
    resume() {
      console.log('Resume in ExperienceCard:', this.$store.getters['ResumeData/resume']);
      return this.$store.getters['ResumeData/resume']
    },
    experienceArray() {
      console.log('Experience array in ExperienceCard:', this.resume.experience || []);
      return this.resume.experience || []
    },
    currentExperience() {
      console.log('Current experience in ExperienceCard:', this.experienceArray[this.index] || {});
      return this.experienceArray[this.index] || {}
    },
    editConfig() {
      return {
        componentType: 'ExperienceEditForm',
        dialogTitle: 'Edit Experience',
        dialogWidth: '600px',
        currentData: this.currentExperience,
        index: this.index,
        fields: [
          { name: 'title', label: 'Title', type: 'text' },
          { name: 'company', label: 'Company', type: 'text' },
          { name: 'dates', label: 'Dates', type: 'text' },
          { name: 'details', label: 'Details', type: 'textarea' },
        ],
      }
    },
  },
  methods: {
    handleEditRequested() {
      if (this.currentExperience && Object.keys(this.currentExperience).length > 0) {
        this.$store.dispatch('ResumeData/openEditDialog', this.editConfig)
      } else {
        console.warn('No experience data found for index:', this.index)
      }
    },
  },
}
</script>

<style scoped>
.iconBtn:hover {
  cursor: pointer;
  color: gray;
}
</style>