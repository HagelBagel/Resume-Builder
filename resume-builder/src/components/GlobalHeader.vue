<template>
  <div
    class="header-wrapper w-(--base-width) flex flex-row place-content-between gap-4 pr-4 mt-8 mb-8"
  >
    <div class="contact-info flex flex-col justify-center">
      <h3 class="text-3xl mb-2">{{ name }}</h3>
      <ul class="no-list-style">
        <!-- <li>{{ name }}</li> -->
        <li><input class="w-150" type="text" :value="address"></li>
        <li><input class="w-150" type="text" :value="phone"></li>
        <li><input class="w-150" type="text" :value="email"></li>
        <li><a :href="`${linkedin.linkUrl}`">{{ linkedin.linkText }}</a></li>
      </ul>
    </div>
    <div class="profile-pic p-2">
      <img
        class="avatar h-40 w-40 rounded-full"
        src="https://cataas.com/cat"
        alt="Random cat sitting"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'address', 'phone', 'email', 'linkedin'],
}
</script>

<style scoped>
.avatar {
  box-shadow: var(--shadow);
}
</style>
