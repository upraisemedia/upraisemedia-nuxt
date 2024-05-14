<script setup>
const props = defineProps({});
</script>

<template>
    <section>
        <div class="container">
            <slot/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 6rem 0;
    position: relative;
    overflow: hidden;

    @screen lg {
        padding: 8rem 0;
    }

    @screen xl {
        padding: 11rem 0;
    }

    ::v-deep(h2),
    ::v-deep(h3) {
        margin-bottom: 2rem;
    }

    ::v-deep(h4),
    ::v-deep(h5),
    ::v-deep(h6) {
        margin-bottom: 0.8rem;
    }

    ::v-deep(p) {
        margin-bottom: 2rem;
    }

    ::v-deep(ul) {
        margin-bottom: 2rem;
        list-style-type: disc;
        padding-left: 2.8rem;
    }
}
</style>