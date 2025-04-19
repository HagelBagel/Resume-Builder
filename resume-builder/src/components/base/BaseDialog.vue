<template>
  <div v-if="isVisible" class="dialog-overlay">
    <div class="dialog-content">
      <slot></slot> <button @click="closeDialog">Cancel</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BaseDialog',
  setup() {
    const isVisible = ref(false);

    const openDialog = () => {
      isVisible.value = true;
    };

    const closeDialog = () => {
      isVisible.value = false;
      // Optionally, emit an event to the parent if needed
    //   this.$emit('close');
    };

    return {
      isVisible,
      openDialog,
      closeDialog,
    };
  },
};
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's on top of other elements */
}

.dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 15px;
  padding: 8px 15px;
  cursor: pointer;
}
</style>