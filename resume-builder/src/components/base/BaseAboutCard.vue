<template>
  <div class="w-full lg:w-50 mt-2 mb-6">
    <h2 class="font-semibold underline decoration-2 mt-2 mb-2" v-if="$slots.header">
      <slot name="header"></slot>
      <span @click="handleEditClick" v-if="isEditMode" class="iconBtn material-symbols-outlined"
        >edit</span
      >
    </h2>
    <slot name="body" class="text-wrap"></slot>
  </div>
</template>

<script>
export default {
  props: ['editConfig'],
  data() {
    return {
      isEditMode: true,
    }
  },
  methods: {
    handleEditClick() {
      this.$emit('edit-requested', this.editConfig)
      console.log('Toggling edit dialog from BaseAboutCard')
    },
  },
}
</script>

<style scoped>
.iconBtn:hover {
  cursor: pointer;
  color: gray;
}
</style>
