<template>
    <div class="w-50">
        <header class="text-2xl font-semibold mt-2 mb-2 text-(--color-mint-500)" v-if="$slots.header">
            <slot name="header"></slot>
        </header>
        <slot name="body"></slot>
    </div>
</template>

