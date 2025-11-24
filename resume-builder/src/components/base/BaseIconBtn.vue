<template>
    <button v-if="isVisible" @click="handleClick" class="iconBtn material-symbols-outlined"
        >{{iconString}}</button
      >
</template>

<script>
export default {
    props: {
    iconString: String,
    isVisible: {
      type: Boolean,
      default: true
    }
  },
  
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
}
</script>

<style scoped>
.iconBtn:hover {
  cursor: pointer;
  color: gray;
}
</style>