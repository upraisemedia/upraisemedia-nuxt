<script setup>
const props = defineProps({
    image: String,
    alt: {
        type: String,
        default: ''
    },
    belowHero: Boolean,
    hidePattern: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <section :class="[belowHero && 'below-hero', hidePattern && 'hide-pattern']">
        <div class="wrapper">
            <img :src="image" :alt="alt">
            <div v-if="!hidePattern" class="pattern">
                <IconsPatternCircles/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    justify-content: center;
    overflow: hidden;

    @screen xl {
        padding-top: 9.5rem;
    }

    img {
        width: 100%;
        height: auto;
        max-width: 162rem;
        position: relative;
        z-index: 3;
        aspect-ratio: 81/35;
        object-fit: cover;
        object-position: center;
    }

    .wrapper {
        position: relative;
        padding: 0 2rem;
    }

    .pattern {
        position: absolute;
        top: -9.5rem;
        right: -5rem;
        z-index: 2;
        display: none;
        opacity: 0.3;

        @screen xl {
            display: block;
        }
    }

    &.below-hero {
        margin-top: -9.5rem;

        @screen xl {
            margin-top: -24rem;
        }
    }

    &.hide-pattern {
        padding-top: 0;
    }
}
</style>
