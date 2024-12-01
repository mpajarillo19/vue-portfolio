<script setup>
import IconImageComponent from '@/UIElements/IconImageComponent.vue'

// Import all icons
import htmlIcon from '@/assets/images/icons/html.svg'
import cssIcon from '@/assets/images/icons/css.svg'
import javascriptIcon from '@/assets/images/icons/javascript.svg'
import phpIcon from '@/assets/images/icons/php.svg'
import mysqlIcon from '@/assets/images/icons/mysql.svg'
import bootstrapIcon from '@/assets/images/icons/bootstrap.svg'
import tailwindIcon from '@/assets/images/icons/tailwind.svg'
import jqueryIcon from '@/assets/images/icons/jquery.svg'
import laravelIcon from '@/assets/images/icons/laravel.svg'
import vueIcon from '@/assets/images/icons/vue.svg'
import githubIcon from '@/assets/images/icons/github.svg'
import gitlabIcon from '@/assets/images/icons/gitlab.svg'

const frontendIcons = [htmlIcon, cssIcon, javascriptIcon]
const backendIcons = [phpIcon, mysqlIcon]
const frameworkIcons = [bootstrapIcon, tailwindIcon, jqueryIcon, laravelIcon, vueIcon]
const toolIcons = [githubIcon, gitlabIcon]
</script>

<template>
    <div class="tech-stack-wrapper flex flex-col justify-center items-center">
        <h1>Tech Stacks</h1>
        <div class="frontend">
            <h6>Front-End</h6>
            <div class="flex flex-wrap">
                <IconImageComponent v-for="icon in frontendIcons" :key="icon" :src="icon" />
            </div>
            <div class="backend">
                <h6>Back-End</h6>
                <div class="flex flex-wrap">
                    <IconImageComponent v-for="icon in backendIcons" :key="icon" :src="icon" />
                </div>
            </div>
            <div class="frameworks">
                <h6>Frameworks</h6>
                <div class="flex flex-wrap">
                    <IconImageComponent v-for="icon in frameworkIcons" :key="icon" :src="icon" />
                </div>
            </div>
            <div class="tools">
                <h6>Tools</h6>
                <div class="flex flex-wrap">
                    <IconImageComponent v-for="icon in toolIcons" :key="icon" :src="icon" />
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
