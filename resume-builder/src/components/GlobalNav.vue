<template>
<div class="relative">
  <div class="fixed right-10 top-10 p-2 bg-pink-200 w-16 h-16 text-3xl text-center align-middle rounded-full shadow-(--shadow)">+</div>
  <div class="fixed right-10 top-30 p-4 bg-pink-200 rounded-xl shadow-(--shadow)">
    <div class="flex flex-col justify-center gap-4 p-2">
  <p>Read this to make a nice FAB: https://web.dev/articles/building/a-fab-component</p>
      <base-button @click="togglePage" :buttonText="resumeBtn"></base-button>
      <base-button @click="togglePage" :buttonText="coverBtn"></base-button>
      <base-button @click="toggleEdit" :buttonText="editBtn"></base-button>
    </div>
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
