<template>
  <div class="flex items-center gap-2 sm:gap-3">
    <label :for="toggleId" class="text-xs sm:text-sm font-medium text-gray-700 min-w-0 flex-shrink-0">
      {{ label }}
    </label>
    <div class="relative flex-shrink-0">
      <input
        :id="toggleId"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="sr-only"
      />
      <div
        :class="[
          'block w-8 h-5 sm:w-10 sm:h-6 rounded-full transition-colors duration-200 cursor-pointer',
          modelValue ? 'bg-mint-500' : 'bg-gray-300'
        ]"
        @click="$emit('update:modelValue', !modelValue)"
      >
        <div
          :class="[
            'dot absolute top-0.5 w-3 h-3 sm:top-1 sm:w-4 sm:h-4 bg-white rounded-full transition-transform duration-200',
            modelValue ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0.5 sm:translate-x-1'
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    toggleId: {
      type: String,
      default: () => `toggle-${Math.random().toString(36).substr(2, 9)}`
    }
  },
  emits: ['update:modelValue']
}
</script>