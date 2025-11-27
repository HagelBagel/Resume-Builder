<template>
  <div class="skills-edit-form width-xl">
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
      <div class="skills-list max-h-80 overflow-y-auto">          
        <div class="skill-wrapper flex flex-col">
          <!-- Languages -->
          <div
            class="skill-item-wrapper flex flex-col gap-1 border-l-4 pl-3 mt-4"
            :class="selectedSkill === skillType ? 'border-mint-500' : 'border-mint-200'"
             v-for="skillType in skillsConfigArray" :key="skillType"
          >
            <div class="item-header flex flex-row gap-1 items-center">
              <span class="skill-item font-medium" @click="toggleSkill(skillType)"
                >{{titleCase(skillType)}}:</span
              >
            </div>
            <div class="skill-display flex flex-wrap" v-if="selectedSkill === skillType">
              <div class="add-languages flex flex-row gap-2 mb-4">
                <input
                  type="text"
                  v-model="newTagInput"
                  class="edit-input flex-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Skills, comma-separated"
                />
                <base-button
                  type="button"
                  @click="addTag(selectedSkill)"
                  :buttonText="'Add tag'"
                  class="focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></base-button>
              </div>
              <div
                class="skill-chip flex flex-row align-middle"
                :class="skillType + '-chip'"
                v-for="skill in skillArray(skillType)"
                :key="skill"
              >
                <span>{{ skill }}</span>
                <base-icon-btn
                  type="button"
                  @click="removeTag(skill, skillType, $event)"
                  :iconString="'close_small'"
                ></base-icon-btn>
              </div>
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
  name: 'SkillsEditForm',
  props: {
    modelValue: Object,
    initialData: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      localData: {
        heading: this.initialData?.skillsHeading || '',
        languageArray: [...(this.initialData?.skills.languages || [])],
        frameworkArray: [...(this.initialData?.skills.frameworks || [])],
        toolsArray: [...(this.initialData?.skills.tools || [])],
      },
      selectedSkill: null,
      newTagInput: '',
      skillsConfigArray: ['languages', 'frameworks', 'tools'],
    }
  },
  computed: {
    titleCase() {
      return (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
  },
  methods: {
    toggleSkill(skillType) {
      if (skillType === 'languages') {
        this.selectedSkill = this.selectedSkill === 'languages' ? null : 'languages'
      } else if (skillType === 'frameworks') {
        this.selectedSkill = this.selectedSkill === 'frameworks' ? null : 'frameworks'
      } else if (skillType === 'tools') {
        this.selectedSkill = this.selectedSkill === 'tools' ? null : 'tools'
      }
    },
    addTag(selectedSkill) {
      if (!this.newTagInput) return
      const tags = this.newTagInput
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)
        // only add tags to the selected skill array
      if (selectedSkill === 'languages') {
        this.localData.languageArray = [
          ...this.localData.languageArray,
          ...tags.filter((tag) => !this.localData.languageArray.includes(tag)),
        ]
      } else if (selectedSkill === 'frameworks') {
        this.localData.frameworkArray = [
          ...this.localData.frameworkArray,
          ...tags.filter((tag) => !this.localData.frameworkArray.includes(tag)),
        ]
      } else if (selectedSkill === 'tools') {
        this.localData.toolsArray = [
          ...this.localData.toolsArray,
          ...tags.filter((tag) => !this.localData.toolsArray.includes(tag)),
        ]
      }
      this.newTagInput = '' // Clear input
    },    
    removeTag(skill, parentArray, event) {
      event.stopPropagation()
      let array = this.localData[parentArray]
      if (array.includes(skill)) {
        const index = array.indexOf(skill)
        if (index > -1) {
          array.splice(index, 1)
        }
      } 
    },
    skillArray(skillType) {
      if (skillType === 'languages') {
        return this.localData.languageArray
      } else if (skillType === 'frameworks') {
        return this.localData.frameworkArray
      } else if (skillType === 'tools') {
        return this.localData.toolsArray
      }
      return []
    },
  },
  watch: {
    initialData: {
    handler(newVal) {
      this.localData = {
        heading: newVal.heading || '',
        languageArray: [...(newVal.skills?.languages || [])],
        frameworkArray: [...(newVal.skills?.frameworks || [])],
        toolsArray: [...(newVal.skills?.tools || [])],
      };
    },
    deep: true,
    immediate: true,
  },
    localData: {
    handler(newVal) {
      this.$emit('update:modelValue', {
        heading: newVal.heading,
        skills: {
          languages: newVal.languageArray,
          frameworks: newVal.frameworkArray,
          tools: newVal.toolsArray,
        },
      });
    },
    deep: true,
    immediate: true,
  },
  },
}
</script>

<style scoped>
.skill-chip {
  padding: 2px 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.languages-chip {
  background-color: rgb(152, 230, 204);
  border-left: 4px solid rgb(103, 168, 146);
}

.frameworks-chip {
  background-color: rgb(230, 225, 152);
  border-left: 4px solid rgb(184, 179, 116);
}

.tools-chip {
  background-color: rgb(152, 201, 230);
  border-left: 4px solid rgb(114, 151, 172);
}
</style>
