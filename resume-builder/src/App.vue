<template>
  <div>    
    <global-nav
      @toggle-resume="toggleResume"
      @toggle-cover="toggleCoverLetter"      
    ></global-nav>
    <top-bar></top-bar>

  <!-- Add loading state -->
    <div v-if="isLoading" class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-20 sm:pt-24">
      <div class="flex justify-center items-center h-64">
        <div class="text-gray-500">Loading...</div>
      </div>
    </div>

    <div id="main-content" class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-20 sm:pt-24">
      <div class="w-full">
        <global-header
          :photoUrl="resume.contact.photoUrl"
          :name="resume.contact.name"
          :address="resume.contact.address"
          :phone="resume.contact.phone"
          :email="resume.contact.email"
          :linkedin="resume.contact.linkedin"
        ></global-header>
        <resume-view v-if="displayResume"></resume-view>
        <cover-letter-view v-if="displayCoverLetter"></cover-letter-view>
      </div>
    </div>
  <base-edit-dialog 
    v-if="dialogState.isOpen"
    :dialog-title="dialogState.dialogTitle"
    :dialog-width="dialogState.dialogWidth"
    :edit-component="dialogState.componentType"
    :current-data="dialogState.currentData"
    @save="handleDialogSave"
    @cancel="handleDialogCancel"
  />
  </div>
</template>

<script>
import ResumeView from './views/ResumeView.vue'
import CoverLetterView from './views/CoverLetterView.vue'
import GlobalNav from './components/GlobalNav.vue'
import GlobalHeader from './components/GlobalHeader.vue'
import TopBar from './components/TopBar.vue'
import BaseEditDialog from './components/base/BaseEditDialog.vue'

export default {
 
  data() {
    return {
      displayResume: true,
      displayCoverLetter: false,
      isLoading: false,
    }
  },
  components: {
    GlobalNav,
    GlobalHeader,
    ResumeView,
    CoverLetterView,
    TopBar,
    BaseEditDialog,
  },
  computed: {
    resume() {
      const resume = this.$store.getters['resumeData/resume']      
      return resume || { contact: {} }; //null check
    },
    coverLetter() {
      const coverLetter = this.$store.getters['resumeData/coverLetter']
      return coverLetter || { body: '' }; //null check
    },
    dialogState() {
    return this.$store.state.resumeData.editDialog;
  }
  },
  mounted() {
    // Simulate data loading complete
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  },
  methods: {
    toggleCoverLetter(isDisplayCoverLetter) {
      if (isDisplayCoverLetter) {
        this.displayCoverLetter = true
      } else {
        this.displayCoverLetter = false
      }
    },
    toggleResume(isDisplayResume) {
      if (isDisplayResume) {
        this.displayResume = true
      } else {
        this.displayResume = false
      }
    },   
  handleDialogSave(formData) {
    // Handle save based on componentType
    const { componentType } = this.dialogState;
    if (componentType === 'SummaryEditForm') {
      this.$store.dispatch('resumeData/updateSummary', formData);
    } else if (componentType === 'LanguageEditForm') {
      this.$store.dispatch('resumeData/updateLanguages', formData);
    } else if (componentType === 'ProjectsEditForm') {
      this.$store.dispatch('resumeData/updateProjects', formData);
    } else if (componentType === 'EducationEditForm') {
      this.$store.dispatch('resumeData/updateEducations', formData);
    } else if (componentType === 'ExperienceEditForm') {
      this.$store.dispatch('resumeData/updateExperiences', formData);
    } else if (componentType === 'SkillsEditForm') {
      this.$store.dispatch('resumeData/updateSkills', formData);
    }
    // Add other component types as needed
    
    this.$store.dispatch('resumeData/closeEditDialog');
  },
  handleDialogCancel() {
    this.$store.dispatch('resumeData/closeEditDialog');
  }
  },
}
</script>

<style scoped></style>
