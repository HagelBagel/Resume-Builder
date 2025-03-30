<template>
  <div class="flex flex-row justify-between">
    <div class="py-4">
      <base-button @click="togglePage" :buttonText="resumeBtn"></base-button>
      <base-button @click="togglePage" :buttonText="coverBtn"></base-button>
    </div>
    <div class="py-4">
      <base-button @click="toggleEdit" :buttonText="editBtn"></base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from './base/BaseButton.vue'
export default {
  data() {
    return {
      resumeBtn: 'Resume',
      coverBtn: 'Cover letter',
      editBtn: 'Edit',
    }
  },
  components: {
    BaseButton,
  },
}
</script>
