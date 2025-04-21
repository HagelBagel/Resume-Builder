<template>
  <div id="text-editor-container" class="w-xl" :buttons="buttons" @save-content="saveContent">
    <div ref="editor"></div>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css' // Or another theme like 'quill/dist/quill.bubble.css'
import BaseButton from '../components/base/BaseButton.vue'

export default {
  props: ['targetElementId'],
  components: {
    BaseButton,
  },
  data() {
    return {
      quill: null,
      editorContent: '',
      buttons: [{ buttonType: 'BaseButton', buttonText: 'Save', clickEvent: 'saveContent' }],
    }
  },
  computed: {
    saveFlag() {
      return this.$store.getters['resumeData/saveFlag']
    },
  },
  watch: {
    saveFlag() {
      this.saveContent();
    }
  },
  mounted() {
    this.quill = new Quill(this.$refs.editor, {
      theme: 'snow', // You can choose a different theme
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'link'], // toggled buttons

          [{ list: 'ordered' }, { list: 'bullet' }],

          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ align: [] }],

          ['clean'], // remove formatting button
        ],
      },
    })
  },
  unmounted() {
    const editorContainer = document.querySelector('#text-editor-container')
    if (editorContainer) {
      editorContainer.remove()
    }
  },
  methods: {
    saveContent() {
      // I need to trigger this from a button in a sibling component (BaseDialog), 
      // which is inserted from the common parent
      const markup = this.quill.getSemanticHTML()
      console.log('Delta is:' + markup)

      this.$store.dispatch({
        type: 'resumeData/addToCLBody',
        value: markup,
      })
      // this.$emit('handle-text-editor-data', delta, this.targetElementId);
    },
  },
  
}
</script>
