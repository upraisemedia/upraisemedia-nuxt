<script setup>
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const props = defineProps({
    name: String,
    subtitle: String,
    url: String,
    image: String,
    variant: {
        type: String,
        default: "1",
    },
});

gsap.registerPlugin(ScrollTrigger);

const imageRef = ref(null);
let ctx;

/**
 * Initialize animations when component is mounted
 */
onMounted(() => {
    ctx = gsap.context(() => {
        gsap.fromTo(imageRef.value, {
            y: 0,
        }, {
            y: -50,
            scrollTrigger: {
                trigger: imageRef.value,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5,
            },
        });
    });
});

/**
 * Revert all animations when component is unmounted
 */
onUnmounted(() => {
    ctx.revert();
});
</script>

<template>
    <NuxtLink :to="url" ref="main" target="_blank">
        <div class="image" :class="`variant-${variant}`">
            <img ref="imageRef" :src="image" :alt="name"/>
        </div>
        <div class="body">
            <div>
                <p>{{ subtitle }}</p>
                <h3>{{ name }}</h3>
            </div>
            <div>
                <IconsLongarrowRight/>
            </div>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
a {
    .image {
        overflow: hidden;
        transition: transform .3s;

        img {
            object-fit: cover;
            object-position: center center;
            display: block;
            width: 100%;
            transition: all .3s;
            transform: scale(1.2);
        }

        &.variant-1 img {
            aspect-ratio: 21/20;
        }

        &.variant-2 img {
            aspect-ratio: 105/74;
        }

        &.variant-3 img {
            aspect-ratio: 171/100;
        }

        &.variant-4 img {
            aspect-ratio: 7/8;
        }
    }

    .body {
        display: flex;
        align-items: center;
        padding: 2.4rem 0;
        gap: 2rem;
        justify-content: space-between;

        @screen md {
            gap: 4rem;
            justify-content: flex-start;
        }

        h3 {
            margin-top: 0.4rem;
        }

        svg {
            width: 7rem;
            height: 2.4rem;
        }
    }

    @media (hover:hover) {
        &:hover {
            .image {
                transform: scale(1.03);
            }
        }
    }
}
</style>
