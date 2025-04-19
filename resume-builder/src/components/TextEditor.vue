<template>
  <div id="text-editor-container" class="w-xl">
    <div ref="editor"></div>
    <base-button class="mt-4" @click="saveContent" :buttonText="saveBtn"></base-button>
    
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css' // Or another theme like 'quill/dist/quill.bubble.css'
import BaseButton from '../components/base/BaseButton.vue';

export default {
  props: ['targetElementId'],
  components: {
    BaseButton,
  },
  data() {
    return {
      quill: null,
      editorContent: '',
      saveBtn: 'Save'
    }
  },
  computed: {
    savedText() {}
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
      // let editorResult = document.querySelector('#editorResult');
      const delta = this.quill.getSemanticHTML();
      // console.log('Delta is:' + delta);
      
      this.$emit('handle-text-editor-data', delta, this.targetElementId);
    },
  },
}
</script>


