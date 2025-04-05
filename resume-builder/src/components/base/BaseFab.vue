<template>
  <div class="fabs" role="group" aria-label="Floating action buttons">
    <!-- buttons will go here -->
    <button @click="btnAction" data-icon="plus" class="fab" title="Open menu" aria-label="Open menu">
      <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48">
        <circle r="4" cx="24" cy="8" fill="white"></circle>
        <circle r="4" cx="24" cy="24" fill="white"></circle>
        <circle r="4" cx="24" cy="40" fill="white"></circle>
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
  --_viewport-margin: 2.5vmin;
  --layer-1: 1;

  position: fixed;
  z-index: var(--layer-1);
  display: flex;
  flex-direction: column-reverse;
  place-items: center;
  gap: var(--_viewport-margin);

  inset-block: var(--_viewport-margin) auto;
  inset-inline: auto var(--_viewport-margin);
}

.fab {
  --_size: 2rem;
  --pink-3: rgb(255, 153, 204);
  --pink-4: rgb(255, 125, 190);
  --pink-6: rgb(251, 81, 166);
  --pink-7: rgb(254, 31, 143);
  --radius-round: 50%;

  --_light-bg: var(--pink-6);
  --_light-bg-hover: var(--pink-7);
  --_dark-bg: var(--pink-4);
  --_dark-bg-hover: var(--pink-3);
  --_bg: var(--_light-bg);

  --_light-fg: white;
  --_dark-fg: black;
  --_fg: var(--_light-fg);

  padding: calc(var(--_size) / 2);

  border-radius: var(--radius-round);
  aspect-ratio: 1;

  background: var(--_bg);
  /* color: var(--_fg); */
  color: white;
  /* box-shadow: var(--shadow-4); */
}
.fab > svg {
    --_size: 2rem;
  inline-size: var(--_size);
  block-size: var(--_size);  

  @media (--motionOK) {
    will-change: transform;
    transition: transform 0.5s var(--ease-squish-3);
  }
}


.fab:active {
  box-shadow: var(--shadow-2);

  @media (--motionOK) {
    transform: translateY(2%);
  }
}

.fab:is(:active, :hover, :focus-visible) {
  --_bg: var(--_light-bg-hover);

  /* @media (--OSdark) {
      --_bg: var(--_dark-bg-hover);      
    } */
}

/* .fab:not(:first-of-type) {
  z-index: -1;
} */

.fab[data-icon='plus']:hover > svg {
  transform: rotateZ(-0.125turn);
}
</style>
