<template>
    <button class="text-white bg-mint-500 rounded-lg px-4 py-2">{{ buttonText }}</button>
</template>

<script>
export default {
    props: ['buttonText']
}
</script>

<style scoped>
button {
    cursor: pointer;
}
</style>