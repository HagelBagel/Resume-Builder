<template>
  <div>
    <base-dialog ref="dialogRef">
      <text-editor
        theme="snow"
        :componentToEdit="targetElementId"
        :existingContentToSet="existingContent"
        @handle-text-editor-data="handleTextEditorData"
      ></text-editor>
    </base-dialog>

    <global-nav
      @toggle-resume="toggleResume"
      @toggle-cover="toggleCoverLetter"
      
    ></global-nav>
    <!-- <h3 v-if="displayEdit" class="text-red-500">EDIT MODE</h3> -->
    <div class="flex justify-center">
      <div class="w-(--base-width)">
        <global-header
          :name="resume.contact.name"
          :address="resume.contact.address"
          :phone="resume.contact.phone"
          :email="resume.contact.email"
          :linkedin="resume.contact.linkedin"
        ></global-header>
        <cover-letter-view v-if="displayCoverLetter" @open-edit="openEdit"></cover-letter-view>
        <resume-view v-if="displayResume"></resume-view>
      </div>
    </div>
  </div>
</template>

<script>
import ResumeView from './views/ResumeView.vue'
import CoverLetterView from './views/CoverLetterView.vue'
import GlobalNav from './components/GlobalNav.vue'
import GlobalHeader from './components/GlobalHeader.vue'
import TextEditor from './components/TextEditor.vue'
import BaseDialog from './components/base/BaseDialog.vue'
import { ref } from 'vue'

export default {
  setup() {
    const dialogRef = ref(null)

    const openBaseDialog = () => {
      dialogRef.value.openDialog()
    }

    const submitForm = () => {
      console.log('Form submitted!')
      dialogRef.value.closeDialog() // Close after submission
      // You would typically handle form data here
    }

    return {
      dialogRef,
      openBaseDialog,
      submitForm,
    }
  },
  data() {
    return {
      displayCoverLetter: true,
      displayResume: true,
      displayEdit: false,
      displayQuill: false,
      textEditorData: {},
      targetElementId: '',
      existingContent: null,
    }
  },
  components: {
    GlobalNav,
    GlobalHeader,
    ResumeView,
    CoverLetterView,
    TextEditor,
    BaseDialog,
  },
  computed: {
    resume() {
      const resume = this.$store.getters['resumeData/resume']
      return resume
    },
    coverLetter() {
      const coverLetter = this.$store.getters['resumeData/coverLetter']
      return coverLetter
    },
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
    openEdit(editorType, targetElement) {
      
      if (editorType === 'QUILL') {
        
        let coverLetterDelta = this.$store.getters['resumeData/coverLetter']
        let body = coverLetterDelta.body
        let markup
        if (body.value) {
          markup = body.value
        } else {
          markup = 'Oops - no html!'
        }
        // return markup
        this.existingContent = markup
        this.openBaseDialog()
      }
    },
    handleTextEditorData(markup, targetElemId) {
      this.$store.dispatch({
        type: 'resumeData/addToCLBody',
        value: markup,
      })
    },
  },
}
</script>

<style scoped></style>
