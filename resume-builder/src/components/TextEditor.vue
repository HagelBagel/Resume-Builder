<template>
  <div id="text-editor-container" class="w-xl">
    <div ref="editor"></div>
    <button @click="saveContent" class="bg-slate-300 border-2 p-2">Save</button>
    <div id="editorResult" class="bg-green-300 mt-6"></div>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css' // Or another theme like 'quill/dist/quill.bubble.css'

export default {
  props: ['targetElementId'],
  data() {
    return {
      quill: null,
      editorContent: '',
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
      const delta = this.quill.getContents();
      // console.log('Delta is:' + delta);
      
      this.$emit('handle-text-editor-data', delta, this.targetElementId);
    },
  },
}
</script>


