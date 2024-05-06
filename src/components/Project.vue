<script setup>
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
</script>

<template>
    <NuxtLink :to="url">
        <div class="image" :class="`variant-${variant}`">
            <img :src="image" alt="Project"/>
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
        img {
            object-fit: cover;
            display: block;
            width: 100%;
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
}
</style>