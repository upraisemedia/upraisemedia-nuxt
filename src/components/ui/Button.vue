<script setup>
const props = defineProps({
    text: String,
    to: String,
});
</script>

<template>
    <NuxtLink :to="to" class="button">
        <span>{{ text }}</span>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.button {
    display: inline-flex;
    height: 4.6rem;
    line-height: 4.6rem;
    border: 0.1rem solid var(--color-primary);
    padding: 0 3.2rem 0 5rem;
    font-family: var(--font-heading);
    font-weight: var(--font-weight-medium);
    align-items: center;
    transition: all .3s;
    position: relative;
    overflow: hidden;

    &:before,
    &:after {
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        background-color: var(--color-primary);
        content: '';
        display: inline-block;
        transition: all .3s;
        position: absolute;
        left: 3.2rem;
    }

    &:after {
        background-color: var(--color-secondary);
        opacity: 0;
        z-index: 3;
    }

    span {
        position: relative;
        z-index: 2;
    }

    &:active {
        transform: scale(0.95);
    }

    @media (hover:hover) {
        &:hover {
            color: var(--color-white);

            &:before {
                width: 150%;
                height: 150%;
                left: 0;
                right: 0;
                border-radius: 0;
                z-index: 1;
            }

            &:after {
                opacity: 1;
            }
        }
    }
}
</style>