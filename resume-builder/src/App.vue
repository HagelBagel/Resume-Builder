<template>
  <div>
    <text-editor
      theme="snow"
      v-if="displayQuill"
      :componentToEdit="targetElementId"
      @handle-text-editor-data="handleTextEditorData"
    ></text-editor>
    <global-nav
      @toggle-resume="toggleResume"
      @toggle-cover="toggleCoverLetter"
      @toggle-edit="toggleEdit"
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
        <cover-letter-view v-if="displayCoverLetter" @toggle-edit="toggleEdit"></cover-letter-view>
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

export default {
  data() {
    return {
      displayCoverLetter: true,
      displayResume: true,
      displayEdit: false,
      displayQuill: false,
      textEditorData: {},
      targetElementId: '',
    }
  },
  components: {
    GlobalNav,
    GlobalHeader,
    ResumeView,
    CoverLetterView,
    TextEditor,
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
      // console.log('Cover letter: ' + isDisplayCoverLetter);
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
    toggleEdit(isDisplayEdit, editorType, targetElement) {
      this.targetElementId = targetElement.id
      if (!isDisplayEdit) {
        this.displayEdit = false
        this.displayQuill = false
        return
      }

      if (isDisplayEdit) {
        if (editorType === 'QUILL') {
          this.displayQuill = true
        }
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
