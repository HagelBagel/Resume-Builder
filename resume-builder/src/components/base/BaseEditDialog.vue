<template>
  <div v-if="openDialog">
    <!-- Semi-transparent overlay -->
    <div class="fixed inset-0 bg-black opacity-30 z-50"></div>
    
    <!-- Dialog content -->
    <div class="dialog-wrapper fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-xl mx-auto z-[1000] max-h-[90vh]" :style="dialogWidthStyle" :class="!dialogWidth ? 'w-7/8 max-w-80' : ''">
      <div class="heading-content px-2 py-1 bg-mint-200 flex justify-between items-center">
        <div class="dialog-header">{{ dialogTitle }}</div>
        <div @click="cancel" class="icon-btn-wrapper">
          <span class="iconBtn material-symbols-outlined"> close </span>
        </div>
      </div>
    <form class="dialog-form-wrapper flex flex-col gap-4 p-2 overflow-y-auto max-h-[70vh]">    
        <component
          :is="editComponent"
          v-model="formData"
          :initial-data="currentData"
          @update:modelValue="handleFormUpdate"
        />
      </form>
      <div class="dialog-buttons flex justify-end flex-col sm:flex-row gap-4 p-2">
        <base-button @click="cancel" :buttonText="'Cancel'" class="cancel-btn"></base-button>
        <base-button @click="save" :buttonText="'Save'" class="save-btn"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
import ExperienceEditForm from '../ExperienceEditForm.vue'

export default {
  props: {
    dialogTitle: String,
    dialogWidth: String,
    currentData: Object,
    editComponent: String,
  },
  data() {
    return {
      openDialog: true,
      formData: {},
    }
  },
  computed: {
    dialogWidthStyle() {
      return this.dialogWidth ? { width: this.dialogWidth } : {}
    }
  },
  components: {
    BaseButton,
    ExperienceEditForm,
  },
  methods: {
    handleFormUpdate(newData) {
      this.formData = newData
    },
    save() {      
      this.$emit('save', {
      formData: this.formData,
      index: this.$store.getters['ResumeData/editDialog'].index
    })
      this.openDialog = false
    },
    cancel() {
      this.$emit('cancel')
      this.openDialog = false
    },
  },
}
</script>

<style scoped>
.heading-content {
  border-bottom: 2px solid var(--border);
}

.dialog-header {
  font-size: 0.9rem;
}

.save-btn {
  background-color: var(--color-mint-200);
}

.save-btn:hover {
  background-color: var(--color-mint-500);
}

.cancel-btn:hover {
  background-color: var(--color-gray-400);
}

.icon-btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.icon-btn-wrapper:hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--color-gray-300);
}

.iconBtn:hover {
  cursor: pointer;
}
</style>
