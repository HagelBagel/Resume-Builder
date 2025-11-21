<template>
  <div class="projects-edit-form width-xl">
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
      @click="addProject"
      :buttonText="'Add project'"
      class="mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></base-button>
    <div class="form-elem-wrapper mb-4">
      <label class="block text-sm font-medium mb-2"
        >Projects ({{ localData.projects?.length || 0 }}):</label
      >

      <!-- Show message if no languages -->
      <div v-if="!localData.projects || localData.projects.length === 0" class="text-gray-500 mb-2">
        No projects added yet. Click "Add project" to get started.
      </div>

      <!-- Projects list -->
      <div class="projects-list max-h-80 overflow-y-auto">
        <div
          v-for="(project, index) in localData.projects"
          :key="`lang-${index}`"
          class="flex flex-col mb-2 max-h-80 overflow-auto"
        >
          <div class="project-wrapper flex flex-col">
            <div>
              <ul class="project-item-list max-h-64 mt-4">
                <li class="project-item-wrapper flex flex-col border-l-4 pl-3" :class="selectedProjectIndex === index ? 'border-mint-500' : 'border-mint-200'">
                  <div class="project-item flex flex-row gap-1 items-center cursor-pointer" @click="toggleProject(index)">
                    <base-icon-btn
                      type="button"
                      @click.stop="removeProject(index)"
                      :iconString="'delete'"
                    ></base-icon-btn>
                    <span class="project-name ml-2 font-medium">{{ project.name || 'Untitled Project' }}</span>
                  </div>
                  <div
                    class="project-item-editor flex flex-col gap-2 mb-2"
                    v-if="selectedProjectIndex === index"
                  >
                    <input
                      type="text"
                      :value="project.name"
                      @input="updateProjectName(index, $event.target.value)"
                      class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Project name"
                    />
                    <textarea
                      :value="project.description"
                      @input="updateProjectDescription(index, $event.target.value)"
                      class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Project description"
                      cols="30"
                      rows="3"
                    ></textarea>
                    <input
                      :value="project.url"
                      type="text"
                      @input="updateProjectUrl(index, $event.target.value)"
                      class="edit-input flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Project URL"
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
  name: 'ProjectsEditForm',
  props: {
    modelValue: Object,
    initialData: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      localData: {
        heading: this.initialData?.projectsHeading || '',
        projects: [...(this.initialData?.projects || [])],
      },
      selectedProjectIndex: null,
    }
  },
  methods: {
    toggleProject(index) {
      this.selectedProjectIndex = this.selectedProjectIndex === index ? null : index
    },
    updateProjectName(index, value) {
      // Create a new array to ensure reactivity
      const newProjects = [...this.localData.projects]
      newProjects[index] = {
        ...newProjects[index],
        name: value,
      }
      this.localData = {
        ...this.localData,
        projects: newProjects,
      }
    },
    updateProjectDescription(index, value) {
      // Create a new array to ensure reactivity
      const newProjects = [...this.localData.projects]
      newProjects[index] = {
        ...newProjects[index],
        description: value,
      }
      this.localData = {
        ...this.localData,
        projects: newProjects,
      }
    },
    updateProjectUrl(index, value) {
      // Create a new array to ensure reactivity
      const newProjects = [...this.localData.projects]
      newProjects[index] = {
        ...newProjects[index],
        url: value,
      }
      this.localData = {
        ...this.localData,
        projects: newProjects,
      }
    },
    addProject() {
      // Create a new array to ensure reactivity
      const newProjects = [...this.localData.projects]
      newProjects.unshift({ name: '', description: '', url: '' })
      this.localData = {
        ...this.localData,
        projects: newProjects,
      }

      // Automatically select the newly added project
      this.selectedProjectIndex = 0
    },
    removeProject(index) {
      // Create a new array to ensure reactivity
      const newProjects = [...this.localData.projects]
      newProjects.splice(index, 1)
      this.localData = {
        ...this.localData,
        projects: newProjects,
      }

      // Reset selection if the removed project was selected
      if (this.selectedProjectIndex === index) {
        this.selectedProjectIndex = null
      } else if (this.selectedProjectIndex > index) {
        // Adjust selection index if a project before the selected one was removed
        this.selectedProjectIndex--
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
