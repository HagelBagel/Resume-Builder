<template>
  <div>
    <div class="mt-4 mb-4 px-2 sm:px-4 lg:px-8 lg:border-l-4 lg:border-(--border) lg:border-dotted">
      <h2 class="font-bold underline decoration-2">{{ title }}</h2>
      <p class="text-sm font-semibold mt-2 mb-2">{{ company }} | {{ dates }}</p>
      <ul role="list">
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
