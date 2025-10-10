<template>
  <div class="fabs no-print" role="group" aria-label="Floating action buttons">
    <!-- buttons will go here -->
    <button @click="btnAction" data-icon="plus" class="fab bg-(--color-mint-200) border-2 border-gray-300 hover:border-gray-400 rounded-full" title="Open menu" aria-label="Open menu">
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48">
        <circle r="4" cx="24" cy="8" fill="black"></circle>
        <circle r="4" cx="24" cy="24" fill="black"></circle>
        <circle r="4" cx="24" cy="40" fill="black"></circle>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isButtonOn: false
        }
    }, 
    methods: {
        btnAction() {            
            this.isButtonOn = !this.isButtonOn;
            this.$emit('btn-action', this.isButtonOn);
        }
    }
}
</script>

<style scoped>

.fabs {
  --_viewport-margin-mobile: 1rem;
  --_viewport-margin-desktop: 1.5rem;
  --layer-1: 999;

  position: fixed;
  z-index: var(--layer-1);
  display: flex;
  flex-direction: column-reverse;
  place-items: center;

  inset-block: auto var(--_viewport-margin-mobile);
  inset-inline: auto var(--_viewport-margin-mobile);
}

@media (min-width: 640px) {
  .fabs {
    inset-block: auto var(--_viewport-margin-desktop);
    inset-inline: auto var(--_viewport-margin-desktop);
  }
}

.fab {
  --_size-mobile: 2.5rem;
  --_size-desktop: 3rem;
  --mint-6: var(--color-mint-200);
  --mint-7: rgb(103, 168, 146);
  --radius-round: 50%;

  --_light-bg: var(--mint-6);
  --_light-bg-hover: var(--mint-7);
  
  --_bg: var(--_light-bg);

  inline-size: var(--_size-mobile);
  block-size: var(--_size-mobile);
  /* border: 2px solid;
  border-color: gray;
  background: var(--_bg);
  border-radius: var(--radius-round); */
  color: white;
  
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  /* Add flex centering */
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 640px) {
  .fab {
    inline-size: var(--_size-desktop);
    block-size: var(--_size-desktop);
  }
}
.fab > svg {
  inline-size: 1.25rem;
  block-size: 1.25rem;
  fill: currentColor;
  transition: transform 0.2s ease;
}

@media (min-width: 640px) {
  .fab > svg {
    inline-size: 1.5rem;
    block-size: 1.5rem;
  }
}


.fab:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  --_bg: var(--_light-bg-hover);
}

.fab:active {
  transform: scale(0.95);
}

</style>
