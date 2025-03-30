<template>
    <div class="w-50 mt-2 mb-6">
        <header class="text-2xl font-semibold underline decoration-2 mt-2 mb-2" v-if="$slots.header">
            <slot name="header"></slot>
        </header>
        <slot name="body" class="text-wrap"></slot>
    </div>
</template>

