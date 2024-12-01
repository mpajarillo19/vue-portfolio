<script setup>
const experiences = [
    {
        company: 'Payreto Services, Inc.',
        role: 'Front-end Developer - Intern',
        period: '2022 - 2023',
        description: 'Lorem Ipsum'
    },
    {
        company: 'Payreto Services, Inc.',
        role: 'Front-end Developer - Associate',
        period: '2023 - 2024',
        description: 'Lorem Ipsum'
    },
    {
        company: 'ThinkBIT Solutions, Inc.',
        role: 'Front-end Developer',
        period: '2023 - Current',
        description: 'Lorem Ipsum'
    }
]
</script>

<template>
    <div class="roadmap-container">
        <div class="timeline-wrapper">
            <div v-for="(exp, index) in experiences" :key="index" class="experience-item"
                :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }">
                <div class="content-box">
                    <h3 class="company">{{ exp.company }}</h3>
                    <h4 class="role">{{ exp.role }}</h4>
                    <span class="period">{{ exp.period }}</span>
                    <p class="description">{{ exp.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.roadmap-container {
    width: 50%;
    position: relative;

    @media (max-width: 1024px) {
        width: 100%;
    }

    .timeline-wrapper {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            width: 6px;
            background-color: #93C5FD;
            top: 0;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 10px;
        }
    }

    .experience-item {
        padding: 10px 40px;
        position: relative;
        width: 50%;

        &::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #CAE6F6;
            border: 4px solid #93C5FD;
            border-radius: 50%;
            top: 20px;
            z-index: 1;
        }

        .content-box {
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;

            &:hover {
                transform: translateY(-5px);
            }
        }

        &.left {
            left: 0;

            &::after {
                right: -10px;
            }
        }

        &.right {
            left: 50%;

            &::after {
                left: -10px;
            }
        }

        .company {
            font-size: 24px;
            font-weight: bold;
            color: #3B82F6;
            margin-bottom: 8px;
        }

        .role {
            font-size: 18px;
            font-weight: 600;
            color: #1F2937;
            margin-bottom: 4px;
        }

        .period {
            display: block;
            font-size: 14px;
            color: #6B7280;
            margin-bottom: 12px;
        }

        .description {
            font-size: 16px;
            line-height: 1.5;
            color: #4B5563;
        }
    }
}

@media (max-width: 768px) {
    .roadmap-container {
        .timeline-wrapper::after {
            left: 31px;
        }

        .experience-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;

            &.left,
            &.right {
                left: 0;
            }

            &.left::after,
            &.right::after {
                left: 21px;
            }
        }
    }
}
</style>
