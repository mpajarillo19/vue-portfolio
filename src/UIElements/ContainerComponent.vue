<script setup>
defineProps({
    maxWidth: {
        type: String,
        default: 'lg'
    },
    padding: {
        type: String,
        default: '52'
    }
})
</script>

<template>
    <div :class="`container mx-auto ${maxWidth}:px-${padding}`">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
}
</style>
