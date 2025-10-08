<template>
  <div class="page pb-2 sm:pb-4 mb-6 sm:mb-12 border-b-4 border-(--border) border-dotted">    
    <div id="cover-letter-content" class="text-sm sm:text-base" v-html="savedContent.body"></div>
  </div>
</template>

<script>
export default {
  computed: {
    savedContent() {
      const coverLetterArray = this.$store.getters['resumeData/coverLetter'];      
      return coverLetterArray;
    }
  },
}
</script>


