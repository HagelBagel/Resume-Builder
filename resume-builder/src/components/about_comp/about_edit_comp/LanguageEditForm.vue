<template>
  <div class="languages-edit-form">
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
      <label class="block text-sm font-medium mb-2">Languages ({{ localData.languages?.length || 0 }}):</label>
      
      <!-- Show message if no languages -->
      <div v-if="!localData.languages || localData.languages.length === 0" class="text-gray-500 mb-2">
        No languages added yet. Click "Add Language" to get started.
      </div>
      
      <!-- Languages list -->
      <div v-for="(language, index) in localData.languages" :key="`lang-${index}`" class="flex items-center mb-2">
        <input
          type="text"
          :value="language"
          @input="updateLanguage(index, $event.target.value)"
          class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Language name"
        />
        <button 
          type="button"
          @click="removeLanguage(index)"
          class="ml-2 px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Remove
        </button>
      </div>
      <button 
        type="button"
        @click="addLanguage"
        class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Language
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageEditForm',
  props: {
    modelValue: Object,
    initialData: Object
  },
  emits: ['update:modelValue'],
  data() {
    return {
      localData: {
        heading: this.initialData?.languagesHeading || '',
        languages: [...(this.initialData?.languages || [])]
      }
    }
  },
  methods: {
    updateLanguage(index, value) {
      // Create a new array to ensure reactivity
      const newLanguages = [...this.localData.languages]
      newLanguages[index] = value
      this.localData = {
        ...this.localData,
        languages: newLanguages
      }
    },
    addLanguage() {
      // Create a new array to ensure reactivity
      this.localData = {
        ...this.localData,
        languages: [...this.localData.languages, '']
      }
    },
    removeLanguage(index) {
      // Create a new array to ensure reactivity
      const newLanguages = [...this.localData.languages]
      newLanguages.splice(index, 1)
      this.localData = {
        ...this.localData,
        languages: newLanguages
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