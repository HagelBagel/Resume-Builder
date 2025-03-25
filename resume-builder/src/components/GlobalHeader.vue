<script>
export default {
  props: ['name', 'address', 'phone', 'email', 'linkedin'],
}
</script>

<template>
  <div
    class="header-wrapper w-(--base-width) flex flex-row place-content-between gap-4 p-4 border-b-2 border-mint-500 mb-4"
  >
    <div class="contact-info p-2">
      <h3 class="font-bold text-mint-500">Contact info:</h3>
      <ul>
        <li>{{ name }}</li>
        <li>{{ address }}</li>
        <li>{{ phone }}</li>
        <li>{{ email }}</li>
        <li>{{ linkedin }}</li>
      </ul>
    </div>
    <div class="profile-pic p-2">
      <img
        class="h-40 w-40 rounded-full shadow-md"
        src="https://cataas.com/cat"
        alt="Random cat sitting"
      />
    </div>
  </div>
</template>

<style scoped></style>
