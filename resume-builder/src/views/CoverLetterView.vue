<template>
  <div class="page pb-2 sm:pb-4 mb-6 sm:mb-12 border-b-4 border-(--border) border-dotted">   
    <h1 class="text-xl sm:text-2xl lg:text-3xl mb-4">Cover Letter:</h1> 
    <div id="cover-letter-content" class="text-sm sm:text-base" v-html="savedContent.body"></div>
  </div>
</template>

<script>
export default {
  computed: {
    savedContent() {
      const coverLetterData = this.$store.getters['ResumeData/coverLetter'];
      return coverLetterData || { body: '' };
    }
  },
}
</script>


