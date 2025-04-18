<template>
    <div class="w-50 mt-2 mb-6">
        <h2 class="font-semibold underline decoration-2 mt-2 mb-2" v-if="$slots.header">
            <slot name="header"></slot>
        </h2>
        <slot name="body" class="text-wrap"></slot>
    </div>
</template>

