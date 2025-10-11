<template>
  <div class="header-wrapper w-full flex flex-col sm:flex-row sm:place-content-between gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-8 mb-4 sm:py-4 sm:mb-6 lg:mb-8 border-b-4 border-(--border) border-dotted">
    <div class="contact-info flex flex-col justify-center order-2 sm:order-1">
      <h3 class="text-2xl sm:text-3xl lg:text-4xl mb-2 text-center sm:text-left">{{ name }}</h3>
      <ul class="no-list-style space-y-1 sm:space-y-2 text-center sm:text-left pb-2">
        <li><span class="w-full sm:w-40 lg:w-150 text-sm sm:text-base py-1">{{ address }}</span></li>
        <li><span class="w-full sm:w-40 lg:w-150 text-sm sm:text-base py-1">{{ phone }}</span></li>
        <li><span class="w-full sm:w-40 lg:w-150 text-sm sm:text-base py-1">{{ email }}</span></li>
        <li><a :href="`${linkedin.linkUrl}`" class="text-blue-600 hover:text-blue-800 text-sm sm:text-base">{{ linkedin.linkText }}</a></li>
      </ul>
    </div>
    <div class="profile-pic flex justify-center sm:justify-end p-2 order-1 sm:order-2">
      <img
        class="avatar object-cover h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full"
        :src="photo"
        alt="Photo of applicant"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['photoUrl', 'name', 'address', 'phone', 'email', 'linkedin'],
  computed: {
    photo() {
      return this.photoUrl ? this.photoUrl : 'https://via.placeholder.com/150';
    }
  },
}
</script>

<style scoped>
.avatar {
  box-shadow: var(--shadow);
}
</style>