<script setup>
import PageHeaderComponent from '../UIElements/PageHeaderComponent.vue'
import TechStacks from '@/assets/layouts/TechStacks.vue'
import ExperienceRoadMap from '@/assets/layouts/ExperienceRoadMap.vue';
</script>

<template>
    <div id="about" class="about-page" data-aos="fade-up">
        <PageHeaderComponent title="About Me"
            subtitle="I am a front-end developer with a passion for creating beautiful and functional websites." />
        <div class="flex flex-col lg:flex-row container mx-auto">
            <TechStacks />
            <ExperienceRoadMap />
        </div>
    </div>
</template>

<style lang="scss">
.about-page {
    padding: 2rem;
    min-height: 100svh;
    background-color: #CAE6F6;

    @media (max-width:1024px) {
        padding: 1rem;
    }
}
</style>
