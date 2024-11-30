<script setup>
import PageHeaderComponent from '../UIElements/PageHeaderComponent.vue'
</script>
<template>
    <div id="about" class="about-page">
        <PageHeaderComponent title="About"
            subtitle="I am a front-end developer with a passion for creating beautiful and functional websites." />

        <div class="tech-stack-wrapper flex flex-col justify-center items-center">
            <h1>Tech Stacks</h1>
            <div class="frontend">
                <h6>Front-End</h6>
            </div>
            <div class="backend">
                <h6>Back-End</h6>
            </div>
            <div class="frameworks">
                <h6>Frameworks</h6>
            </div>
            <div class="tools">
                <h6>Tools</h6>
            </div>
        </div>

    </div>
</template>
<style lang="scss">
.about-page {
    min-height: 100svh;
    background-color: #CAE6F6;

    .tech-stack-wrapper {
        h1 {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        h6 {
            font-size: 16px;
            font-weight: bold;
            margin: 0;
        }
    }
}
</style>