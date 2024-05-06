<script setup>
const props = defineProps({
    text: String,
    to: String,
});
</script>

<template>
    <NuxtLink :to="to" class="button">
        {{ text }}
    </NuxtLink>
</template>

<style lang="scss" scoped>
.button {
    display: inline-flex;
    height: 4.6rem;
    line-height: 4.6rem;
    border: 0.1rem solid var(--color-primary);
    padding: 0 3.2rem;

    font-family: var(--font-heading);
    font-weight: var(--font-weight-medium);
    align-items: center;
    gap: 0.8rem;

    &:before {
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        background-color: var(--color-primary);
        content: '';
        display: inline-block;
    }
}
</style>