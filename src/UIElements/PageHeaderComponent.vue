<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="page-header pt-12 px-12">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
    </div>
</template>

<style lang="scss" scoped>
.page-header {
    text-align: center;
    margin-bottom: 2rem;

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1.2rem;
        color: #666;
    }
}
</style>
