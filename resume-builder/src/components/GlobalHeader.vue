<script>
export default {
  props: ['name', 'address', 'phone', 'email', 'linkedin'],
}
</script>

<template>
  <div
    class="header-wrapper w-(--base-width) flex flex-row place-content-between gap-4 pr-4 mt-8 mb-8"
  >
    <div class="contact-info flex flex-col justify-center">
      <h3 class="font-bold text-3xl mb-2">{{ name }}</h3>
      <ul>
        <!-- <li>{{ name }}</li> -->
        <li>{{ address }}</li>
        <li>{{ phone }}</li>
        <li>{{ email }}</li>
        <li>{{ linkedin }}</li>
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

<style scoped>
.avatar {
  box-shadow: -2px 4px 15px 1px #949494;
}
</style>
