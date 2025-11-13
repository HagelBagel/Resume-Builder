<template>
    <button class="border-2 border-(--border) rounded-lg px-2 py-1">{{ buttonText }}</button>
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