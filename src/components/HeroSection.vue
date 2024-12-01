<script setup>
import { ref, onMounted } from 'vue'
import ContainerComponent from '../UIElements/ContainerComponent.vue'

const displayText = ref('')
const texts = [
    'Building modern web applications',
    'Creating responsive user interfaces',
    'Crafting seamless user experiences',
    'Transforming designs into code',
    'Optimizing web performance',
    'Building interactive web solutions',
    'Bringing ideas to life through code'
]
let index = 0

const typeEffect = async () => {
    while (true) {
        let currentText = texts[index]

        // Type text
        for (let i = 0; i <= currentText.length; i++) {
            displayText.value = currentText.substring(0, i)
            await new Promise(r => setTimeout(r, 100))
        }
        await new Promise(r => setTimeout(r, 1500))

        // Erase text
        for (let i = currentText.length; i >= 0; i--) {
            displayText.value = currentText.substring(0, i)
            await new Promise(r => setTimeout(r, 50))
        }

        index = (index + 1) % texts.length
    }
}

onMounted(typeEffect)
</script>

<template>
    <div id="home" class="container mx-auto lg:px-52 flex flex-col justify-center">
        <div class="hero-page">
            <div class="flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div class="hero-text text-center md:text-start mb-20 md:mb-0">
                    <h1>Hello, I'm Migs</h1>
                    <p>{{ displayText }}<span class="cursor">|</span></p>
                </div>
                <div class="hero-image">
                    <div class="blob"></div>
                    <img src="/src/assets/images/hero-image-bg.png" alt="Hero Image">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    min-height: 100svh;

    .hero-image {
        width: 250px;
        height: 250px;
        position: relative;

        img {
            position: relative;
            z-index: 2;
            border-radius: 50% 50% 100% 100%;
        }

        .blob {
            position: absolute;
            top: -25%;
            left: -20%;
            width: 350px;
            height: 350px;
            background: #E18247;
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            overflow: hidden;
            animation: blobAnimation 20s ease-in-out infinite;
            transition: all 1s ease-in-out;
            z-index: 1;
            opacity: 0.7;
        }
    }

    .hero-text {
        h1 {
            font-size: 60px;
            font-weight: bold;
        }

        p {
            font-size: 30px;
            min-height: 36px;
        }
    }
}

.cursor {
    display: inline-block;
    width: 2px;
    animation: blink 0.7s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@keyframes blobAnimation {
    0% {
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    }

    25% {
        border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%;
    }

    50% {
        border-radius: 50% 50% 30% 70% / 60% 40% 70% 30%;
    }

    75% {
        border-radius: 30% 70% 60% 40% / 50% 30% 50% 60%;
    }

    100% {
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    }
}
</style>
