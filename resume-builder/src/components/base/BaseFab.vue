<template>
  <div class="fabs no-print" role="group" aria-label="Floating action buttons">
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

  inset-block: auto var(--_viewport-margin);
  inset-inline: auto var(--_viewport-margin);
}

.fab {
  --_size: 2rem;
  --gray-3: rgb(119, 119, 119);
  --gray-4: rgb(88, 88, 88);
  --gray-6: rgb(78, 78, 78);
  --gray-7: rgb(51, 51, 51);
  --radius-round: 50%;

  --_light-bg: var(--gray-6);
  --_light-bg-hover: var(--gray-7);
  --_dark-bg: var(--gray-4);
  --_dark-bg-hover: var(--gray-3);
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
