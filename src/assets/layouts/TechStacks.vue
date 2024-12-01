<script setup>
import IconImageComponent from '@/UIElements/IconImageComponent.vue'

const frontendIcons = ['html', 'css', 'javascript']
const backendIcons = ['php', 'mysql']
const frameworkIcons = ['bootstrap', 'tailwind', 'jquery', 'laravel', 'vue']
const toolIcons = ['github', 'gitlab']
</script>

<template>
    <div class="tech-stack-wrapper flex flex-col justify-center items-center">
        <h1>Tech Stacks</h1>
        <div class="frontend">
            <h6>Front-End</h6>
            <div class="flex flex-wrap">
                <IconImageComponent v-for="icon in frontendIcons" :key="icon" :name="icon" />
            </div>
            <div class="backend">
                <h6>Back-End</h6>
                <div class="flex flex-wrap">
                    <IconImageComponent v-for="icon in backendIcons" :key="icon" :name="icon" />
                </div>
            </div>
            <div class="frameworks">
                <h6>Frameworks</h6>
                <div class="flex flex-wrap">
                    <IconImageComponent v-for="icon in frameworkIcons" :key="icon" :name="icon" />
                </div>
            </div>
            <div class="tools">
                <h6>Tools</h6>
                <div class="flex flex-wrap">
                    <IconImageComponent v-for="icon in toolIcons" :key="icon" :name="icon" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tech-stack-wrapper {
    width: 50%;
    padding: 30px;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0px;
    }

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
</style>
