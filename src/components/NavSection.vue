<script setup>
import { HomeIcon, UserIcon, DocumentIcon, ChatBubbleLeftRightIcon, AcademicCapIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <nav class="floating-navigation">
        <ul>
            <li>
                <a href="#home">
                    <HomeIcon class="w-6 h-6" />
                </a>
            </li>
            <li>
                <a href="#about">
                    <UserIcon class="w-6 h-6" />
                </a>
            </li>
            <li>
                <a href="#certifications">
                    <AcademicCapIcon class="w-6 h-6" />
                </a>
            </li>
            <!-- <li>
                <a href="#projects">
                    <DocumentIcon class="w-6 h-6" />
                </a>
            </li> -->
            <li>
                <a href="#contact">
                    <ChatBubbleLeftRightIcon class="w-6 h-6" />
                </a>
            </li>
        </ul>
    </nav>
</template>




<style lang="scss">
html {
    scroll-behavior: smooth;
}

.floating-navigation {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    border-radius: 50px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    li {
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease;

            &:hover {
                transform: translateY(-3px);
            }
        }
    }
}
</style>
