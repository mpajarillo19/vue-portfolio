<script setup>
import { computed } from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    width: {
        type: String,
        default: '80'
    },
    height: {
        type: String,
        default: '80'
    }
})

const iconPath = computed(() => `/src/assets/images/icons/${props.name}.svg`)
</script>
<template>
    <img :src="iconPath" :alt="name" :width="width" :height="height" class="icon-image" />
</template>

<style lang="scss" scoped>
.icon-image {
    transition: transform 0.3s ease;
    margin: 1rem 1.5rem 1rem 0rem;

    &:hover {
        transform: scale(1.1);
    }
}
</style>
