<template>
  <div>
    <div class="mt-4 mb-4 p-4 shadow-md">
      <h3 class="text-2xl">{{ title }}</h3>
      <p class="text-sm font-semibold mt-2 mb-2 text-(--color-mint-500)">{{ company }} | {{ dates }}</p>
      <ul class="list-inside list-disc" role="list">
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
