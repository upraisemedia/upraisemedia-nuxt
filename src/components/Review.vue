<script setup>
const props = defineProps({
    review: String,
    name: String,
    company: String,
    image: String,
});
</script>

<template>
    <div class="review">
        <div v-if="image" class="image">
            <img :src="image" :alt="`${name} | ${company}`">
        </div>
        <div class="body">
            <IconsCommaStart class="comma-start"/>
            {{ review }}
            <IconsCommaEnd class="comma-end"/>
        </div>
        <div class="author">
            <h4>{{ name }}</h4>
            <p>{{ company }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.review {
    width: 100%;
    background-color: var(--color-white);
    padding: 2.4rem;
    -webkit-box-shadow: 0 94px 94px 0 rgba(0,0,0,0.05);
    -moz-box-shadow: 0 94px 94px 0 rgba(0,0,0,0.05);
    box-shadow: 0 94px 94px 0 rgba(0,0,0,0.05);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @screen lg {
        padding: 3.2rem;
    }

    @screen xl {
        padding: 4.8rem;
    }

    .image {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 2.4rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .body {
        position: relative;
        font-size: 1.8rem;
        line-height: 2.8rem;
        font-family: var(--font-heading);
        color: var(--color-primary);
        font-weight: var(--font-weight-regular);
        text-align: center;
        margin-bottom: 3.4rem;

        @screen lg {
            padding: 0 3rem;
        }

        @screen xl {
            padding: 0 4.4rem;
        }

        svg {
            position: absolute;
            display: none;

            @screen lg {
                display: inline-block;
            }

            &.comma-start {
                top: -2.4rem;
                left: -2.4rem;
            }

            &.comma-end {
                bottom: -2.4rem;
                right: -2.4rem;
            }
        }
    }

    .author {
        display: flex;
        background-color: var(--color-lightgrey);
        border-radius: 10rem;
        padding: 0.8rem 3.4rem;
        gap: 2rem;
        align-items: center;
        line-height: 1;

        h4 {
            font-size: 2rem;
            line-height: 2.4rem;
        }

        p {
            opacity: 0.6;
        }
    }
}
</style>
