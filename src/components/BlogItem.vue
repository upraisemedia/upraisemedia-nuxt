<script setup>
const props = defineProps({
    name: String,
    author: String,
    dateNumber: String,
    dateMonth: String
});
</script>

<template>
    <NuxtLink to="/" class="item">
        <div class="image">
            <img src="https://placehold.co/420x380" alt="Blog item image">
        </div>
        <div class="author">
            <Icon name="heroicons:user" size="20"/>
            <p>{{ author }}</p>
        </div>
        <div class="title">
            <h3 class="h4">{{ name }}</h3>
        </div>
        <div class="footer">
            <div class="date">
                <span>
                    {{ dateNumber }} /<br/> {{ dateMonth }}
                </span>
            </div>
            <IconsLongarrowRight/>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.item {
    .image {
        margin-bottom: 2.4rem;

        img {
            width: 100%;
            object-fit: cover;
            aspect-ratio: 21/19;
        }
    }

    .author {
        display: flex;
        gap: 0.8rem;
        align-items: center;
        margin-bottom: 0.8rem;
    }

    .title {
        margin-bottom: 2.4rem;
    }

    .footer {
        display: flex;
        align-items: center;
        gap: 4rem;
        justify-content: space-between;

        @screen md {
            justify-content: flex-start;
        }

        .date {
            width: 6.6rem;
            height: 6.6rem;
            border-radius: 50%;
            background-color: var(--color-lightgrey);
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-heading);
            font-weight: var(--font-weight-medium);
            line-height: 1;
        }

        svg {
            width: 7rem;
            height: 2.4rem;
        }
    }
}
</style>