<template>
  <div class="page pb-4 mb-12 border-b-4 border-(--border) border-dotted">
    <base-button
      id="edit-cover-letter"
      @click="openEdit($event)"
      :buttonText="editBtn"
    ></base-button>
    <div id="cover-letter-content" v-html="savedContent"></div>
  </div>
</template>

<script>
import BaseButton from '../components/base/BaseButton.vue'
export default {
  data() {
    return {
      editBtn: 'Edit',
      isDisplayEdit: false,
      editorType: 'QUILL',
    }
  },
  components: {
    BaseButton,
  },
  methods: {
    openEdit(event) {
      this.$emit('open-edit', this.editorType, event.target);
    },
  },
  computed: {
    savedContent() {
      let coverLetterDelta = this.$store.getters['resumeData/coverLetter'];
      let body = coverLetterDelta.body;
      let markup;
      if (body.value) {
        markup = body.value;
      } else {
        markup = 'Oops - no html!';
      }
      return markup;
    },
  },
}
</script>


