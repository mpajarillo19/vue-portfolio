<script setup>
import PageHeaderComponent from '../UIElements/PageHeaderComponent.vue'



const certifications = [
    {
        title: 'MTA: Database Fundamentals - Certified 2019',
        issuer: 'Microsoft',
        date: 'November 2019',
        image: new URL('../assets/images/certificates/mta-database.png', import.meta.url).href,
    },
    {
        title: 'DevNet Associate',
        issuer: 'Cisco',
        date: 'August 2021',
        image: new URL('../assets/images/certificates/devnet.png', import.meta.url).href,
    },
    {
        title: 'CCNA: Switching, Routing, and Wireless Essentials',
        issuer: 'Cisco',
        date: 'December 2021',
        image: new URL('../assets/images/certificates/ccna.png', import.meta.url).href,
    },
    {
        title: 'IT Specialist - JavaScript',
        issuer: 'Certiport',
        date: 'March 2022',
        image: new URL('../assets/images/certificates/javascript.png', import.meta.url).href,
    },
    {
        title: 'CyberOps Associate',
        issuer: 'Cisco',
        date: 'April 2022',
        image: new URL('../assets/images/certificates/cyberops.png', import.meta.url).href,
    },
    {
        title: 'CCNA: Enterprise Networking, Security, and Automation',
        issuer: 'Cisco',
        date: 'April 2022',
        image: new URL('../assets/images/certificates/ccna-enterprise.png', import.meta.url).href,
    }
]
</script>

<template>
    <div id="certifications" class="certification-page">
        <PageHeaderComponent title="Certifications" subtitle="Professional IT certifications and achievements" />

        <div class="certifications-grid">
            <div v-for="cert in certifications" :key="cert.credentialId" class="certification-card">
                <div class="card-image">
                    <img :src="cert.image" :alt="cert.title">
                </div>
                <div class="card-content">
                    <h3>{{ cert.title }}</h3>
                    <p class="issuer">{{ cert.issuer }}</p>
                    <p class="date">Issued: {{ cert.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.certification-page {
    min-height: 100svh;
    background-color: #E5F2FB;
    padding: 2rem;
}

.certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.certification-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    .card-image {
        height: 200px;
        background: #f8fafc;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;

        img {
            max-width: 150px;
            max-height: 150px;
            object-fit: contain;
        }
    }

    .card-content {
        padding: 1.5rem;

        h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 0.5rem;
        }

        .issuer {
            color: #3B82F6;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }

        .date {
            color: #6B7280;
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }

        .credential {
            color: #6B7280;
            font-size: 0.875rem;
            font-family: monospace;
        }
    }
}

@media (max-width: 768px) {
    .certifications-grid {
        grid-template-columns: 1fr;
    }
}
</style>
