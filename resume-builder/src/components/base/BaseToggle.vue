<template>
  <div class="flex items-center gap-3">
    <label :for="toggleId" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="relative">
      <input
        :id="toggleId"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="sr-only"
      />
      <div
        :class="[
          'block w-10 h-6 rounded-full transition-colors duration-200 cursor-pointer',
          modelValue ? 'bg-mint-500' : 'bg-gray-300'
        ]"
        @click="$emit('update:modelValue', !modelValue)"
      >
        <div
          :class="[
            'dot absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200',
            modelValue ? 'translate-x-5' : 'translate-x-1'
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