<template>
  <section class="relative">
    <div
      v-if="openDialog"
      class="dialog-wrapper fixed top-20 left-20 bg-white border-2 border-(--border) shadow-xl max-w-md mx-auto"
    >
      <div class="heading-content px-2 py-1 bg-mint-200 flex justify-between items-center">
        <div class="dialog-header">{{ dialogTitle }}</div>
        <div @click="cancel" class="icon-btn-wrapper">
          <span class="iconBtn material-symbols-outlined"> close </span>
        </div>
      </div>
      <form class="dialog-form-wrapper flex flex-col gap-4 p-2">
        <div v-if="hasHeading" class="form-elem-wrapper">
          <label for="cardHeading">Heading:</label>
          <input
            type="text"
            name="cardHeading"
            v-model="formData.summaryHeading"
            class="edit-input px-2"
            placeholder="Heading goes here"
          />
        </div>
        <div v-if="hasTextArea" class="form-elem-wrapper">
          <label for="cardTextArea">Description:</label>
          <textarea
            name="cardTextArea"
            v-model="formData.summary"
            rows="4"
            cols="30"
            class="edit-textarea"
          ></textarea>
        </div>
      </form>
      <div class="dialog-buttons flex justify-end flex-col sm:flex-row gap-4 p-2">
        <base-button @click="cancel" :buttonText="'Cancel'" class="cancel-btn"></base-button>
        <base-button @click="save" :buttonText="'Save'" class="save-btn"></base-button>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  props: ['dialogTitle', 'currentData'],
  data() {
    return {
      openDialog: true,
      hasHeading: true,
      hasTextArea: true,
      formData: {
        summaryHeading: this.currentData.summaryHeading || '',
        summary: this.currentData.summary || '',
      },
    }
  },
  components: {
    BaseButton,
  },
  methods: {
    save() {
      this.$emit('save', this.formData)
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
