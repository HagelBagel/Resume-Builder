<template>
  <div class="educations-edit-form width-xl">
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

    <base-button
      type="button"
      @click="addEducation"
      :buttonText="'Add education'"
      class="mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></base-button>
    <div class="form-elem-wrapper mb-4">
      <label class="block text-sm font-medium mb-2"
        >Entries ({{ localData.educations?.length || 0 }}):</label
      >

      <!-- Show message if no languages -->
      <div v-if="!localData.educations || localData.educations.length === 0" class="text-gray-500 mb-2">
        No educations added yet. Click "Add education" to get started.
      </div>

      <!-- educations list -->
      <div class="educations-list max-h-80 overflow-y-auto">
        <div
          v-for="(education, index) in localData.educations"
          :key="`lang-${index}`"
          class="flex flex-col mb-2 max-h-80 overflow-auto"
        >
          <div class="education-wrapper flex flex-col">
            <div>
              <ul class="education-item-list max-h-64 mt-4">
                <li class="education-item-wrapper flex flex-col border-l-4 pl-3" :class="selectedEducationIndex === index ? 'border-mint-500' : 'border-mint-200'">
                  <div class="education-item flex flex-row gap-1 items-center cursor-pointer" @click="toggleEducation(index)">
                    <base-icon-btn
                      type="button"
                      @click.stop="removeEducation(index)"
                      :iconString="'delete'"
                    ></base-icon-btn>
                    <span class="education-name ml-2 font-medium">{{ education.degree || 'Untitled Education' }}</span>
                  </div>
                  <div
                    class="education-item-editor flex flex-col gap-2 mb-2"
                    v-if="selectedEducationIndex === index"
                  >
                    <input
                      type="text"
                      :value="education.degree"
                      @input="updateEducationDegree(index, $event.target.value)"
                      class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Education name"
                    />
                    <input
                      :value="education.institution"
                      @input="updateEducationInstitution(index, $event.target.value)"
                      class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Education institution"
                    />
                    <input
                      :value="education.dates"
                      type="text"
                      @input="updateEducationDates(index, $event.target.value)"
                      class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Education dates"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../base/BaseButton.vue'
import BaseIconBtn from '../../base/BaseIconBtn.vue'

export default {
  components: {
    BaseButton,
    BaseIconBtn,
  },
  name: 'EducationEditForm',
  props: {
    modelValue: Object,
    initialData: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      localData: {
        heading: this.initialData?.educationHeading || '',
        educations: [...(this.initialData?.educations || [])],
      },
      selectedEducationIndex: null,
    }
  },
  methods: {
    toggleEducation(index) {
      this.selectedEducationIndex = this.selectedEducationIndex === index ? null : index
    },
    updateEducationDegree(index, value) {
      // Create a new array to ensure reactivity
      const newEducations = [...this.localData.educations]
      newEducations[index] = {
        ...newEducations[index],
        degree: value,
      }
      this.localData = {
        ...this.localData,
        educations: newEducations,
      }
    },
    updateEducationInstitution(index, value) {
      // Create a new array to ensure reactivity
      const newEducations = [...this.localData.educations]
      newEducations[index] = {
        ...newEducations[index],
        institution: value,
      }
      this.localData = {
        ...this.localData,
        educations: newEducations,
      }
    },    
    updateEducationDates(index, value) {
      // Create a new array to ensure reactivity
      const newEducations = [...this.localData.educations]
      newEducations[index] = {
        ...newEducations[index],
        dates: value,
      }
      this.localData = {
        ...this.localData,
        educations: newEducations,
      }
    },    
    addEducation() {
      // Create a new array to ensure reactivity
      const newEducations = [...this.localData.educations]
      newEducations.unshift({ degree: '', institution: '', dates: '' })
      this.localData = {
        ...this.localData,
        educations: newEducations,
      }

      // Automatically select the newly added education
      this.selectedEducationIndex = 0
    },
    removeEducation(index) {
      // Create a new array to ensure reactivity
      const newEducations = [...this.localData.educations]
      newEducations.splice(index, 1)
      this.localData = {
        ...this.localData,
        educations: newEducations,
      }

      // Reset selection if the removed education was selected
      if (this.selectedEducationIndex === index) {
        this.selectedEducationIndex = null
      } else if (this.selectedEducationIndex > index) {
        // Adjust selection index if a education before the selected one was removed
        this.selectedEducationIndex--
      }
    },
  },
  watch: {
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
