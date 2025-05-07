<template>
  <div class="page pb-4 mb-12 border-b-4 border-(--border) border-dotted">    
    <div id="cover-letter-content" v-html="savedContent.body"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editBtn: 'Edit',
      isDisplayEdit: false,
      editorType: 'QUILL',
    }
  }, 
  methods: {
    openEdit(event) {
      this.$emit('open-edit', this.editorType, event.target);
    },
  },
  computed: {
    savedContent() {
      const coverLetterArray = this.$store.getters['resumeData/coverLetter'];      
      return coverLetterArray;
    }
  },
}
</script>


