<template>
  <div>
    <div class="mt-4 mb-4 px-8 border-l-4 border-(--border) border-dotted">
      <h3 class="text-2xl font-bold underline decoration-2 ">{{ title }}</h3>
      <p class="text-sm font-semibold mt-2 mb-2">{{ company }} | {{ dates }}</p>
      <ul class="" role="list">
        <li class="details" v-for="detail in details" :key="detail">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'company', 'dates', 'details'],
}
</script>
