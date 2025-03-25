<script>
export default {
  props: ['name', 'address', 'phone', 'email', 'linkedin'],
}
</script>

<template>
  <div class="header-wrapper w-(--base-width) flex flex-row place-content-between gap-4 p-4">
    <div class="contact-info bg-mint-500 p-4">
      <h3 class="green">Contact info</h3>
      <ul>
        <li>{{ name }}</li>
        <li>{{ address }}</li>
        <li>{{ phone }}</li>
        <li>{{ email }}</li>
        <li>{{ linkedin }}</li>
      </ul>
    </div>
    <div class="profile-pic p-4">
      <img class="h-50 w-50" src="https://cataas.com/cat" alt="Random cat sitting">
    </div>
  </div>
</template>

<style scoped>

</style>
