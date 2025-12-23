<template>
  <div>
    <div class="mt-4 mb-4 px-2 sm:px-4 lg:px-8 ">
      <label for="experienceTitle" class="block text-sm font-medium mb-2">Heading:</label>
      <input
        type="text"
        name="experienceTitle"
        v-model="localData.title"
        class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Experience Title"
      />
      
      <label for="experienceCompany" class="block text-sm font-medium mb-2">Company:</label>
      <input
        type="text"
        name="experienceCompany"
        v-model="localData.company"
        class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 overflow-y-auto"
        placeholder="Company"
      />
      
      <label for="experienceDates" class="block text-sm font-medium mb-2">Dates:</label>
      <input
        type="text"
        name="experienceDates"
        v-model="localData.dates"
        class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Dates"
      />
      
      <label for="experienceDetails" class="block text-sm font-medium mb-2">Achievements:</label>
      <textarea
        v-for="(detail, index) in localData.details || []"
        :key="index"
        v-model="localData.details[index]"
        class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        placeholder="Achievements"
        cols="30"
        rows="3"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceEditForm',
  props: {
    modelValue: Object,
    initialData: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      localData: {
        title: this.initialData?.title || '',
        company: this.initialData?.company || '',
        dates: this.initialData?.dates || '',
        details: [...(this.initialData?.details || [])],
      },
    }
  },
  watch: {
    initialData: {
      handler(newVal) {
        this.localData = {
          title: newVal?.title || '',
          company: newVal?.company || '',
          dates: newVal?.dates || '',
          details: [...(newVal?.details || [])],
        };
      },
      deep: true,
      immediate: true,
    },
    localData: {
      handler(newVal) {
        this.$emit('update:modelValue', newVal)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
