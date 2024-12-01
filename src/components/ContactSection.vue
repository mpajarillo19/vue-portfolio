<script setup>
import PageHeaderComponent from '../UIElements/PageHeaderComponent.vue'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import linkedinIcon from '@/assets/images/icons/linkedin.svg'
import githubIcon from '@/assets/images/icons/github.svg'

const contactInfo = {
    email: 'migspajarillo19@gmail.com',
    phone: '+63 948 068 1185',
    location: 'Manila, Philippines'
}

const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/mpajarillo19',
        icon: linkedinIcon
    },
    {
        name: 'GitHub',
        url: 'https://github.com/mpajarillo19',
        icon: githubIcon
    }
]
</script>

<template>
    <div id="contact" class="contact-page">
        <PageHeaderComponent title="Contact Me" subtitle="Let's connect and create something amazing together" />

        <div class="contact-container">
            <div class="contact-card">
                <div class="contact-info">
                    <div class="info-item">
                        <EnvelopeIcon class="w-6 h-6" />
                        <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
                    </div>
                    <div class="info-item">
                        <PhoneIcon class="w-6 h-6" />
                        <a :href="`tel:${contactInfo.phone}`">{{ contactInfo.phone }}</a>
                    </div>
                    <div class="info-item">
                        <MapPinIcon class="w-6 h-6" />
                        <span>{{ contactInfo.location }}</span>
                    </div>
                </div>

                <div class="social-links">
                    <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                        rel="noopener noreferrer" class="social-button">
                        <img :src="social.icon" :alt="social.name">
                        <span>{{ social.name }}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact-page {
    min-height: 100svh;
    background-color: #CAE6F6;
    padding: 2rem;
}

.contact-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.contact-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info {
    margin-bottom: 2rem;

    .info-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        margin-bottom: 1rem;
        background: #f8fafc;
        border-radius: 8px;
        transition: transform 0.2s ease;

        &:hover {
            transform: translateX(10px);
        }

        svg {
            color: #3B82F6;
        }

        a,
        span {
            color: #1F2937;
            text-decoration: none;
            font-size: 1.1rem;

            &:hover {
                color: #3B82F6;
            }
        }
    }
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;

    .social-button {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        background: #ffffff;
        color: #1F2937;
        border: 2px solid #E5E7EB;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;

        img {
            width: 24px;
            height: 24px;
        }

        span {
            font-size: 1rem;
        }

        &:hover {
            border-color: #3B82F6;
            color: #3B82F6;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
        }
    }
}

@media (max-width: 640px) {
    .social-links {
        flex-direction: column;
    }

    .contact-card {
        padding: 1.5rem;
    }
}
</style>
