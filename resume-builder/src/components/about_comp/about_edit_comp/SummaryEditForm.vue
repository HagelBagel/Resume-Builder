<template>
  <div class="summary-edit-form">
    <div class="form-elem-wrapper mb-4">
      <label for="cardHeading" class="block text-sm font-medium mb-2">Heading:</label>
      <input
        type="text"
        name="cardHeading"
        v-model="localData.heading"
        class="edit-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Heading goes here"
      />
    </div>
    <div class="form-elem-wrapper mb-4">
      <label for="cardTextArea" class="block text-sm font-medium mb-2">Description:</label>
      <textarea
        name="cardTextArea"
        v-model="localData.description"
        rows="4"
        class="edit-textarea w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
        placeholder="Enter description here..."
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SummaryEditForm',
  props: {
    modelValue: Object,
    initialData: Object
  },
  emits: ['update:modelValue'],
  data() {
    return {
      localData: {
        heading: this.initialData?.summaryHeading || '',
        description: this.initialData?.summary || ''
      }
    }
  },
  watch: {
    localData: {
      handler(newVal) {
        this.$emit('update:modelValue', newVal)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
