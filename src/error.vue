<script setup>
useSeoMeta({
    title: '404 | Upraise Media',
    ogTitle: '404 | Upraise Media',
})
</script>

<template>
    <HeroDefault>
        <ul>
            <li>
                <NuxtLink to="/">
                    <Icon name="heroicons:arrow-down-right" size="20"/>
                    Home
                </NuxtLink>
            </li>
            <li>
                <span>404</span>
            </li>
        </ul>
        <h1>404</h1>
    </HeroDefault>

    <Content>
        <div class="grid lg:grid-cols-12">
            <div class="lg:col-span-8">
                <p>
                    De pagina die je probeert te bezoeken bestaat niet (meer)
                </p>
                <p>
                    <UiButton to="/" class="!mt-4" text="Terug naar home"/>
                </p>
            </div>
        </div>
    </Content>

</template>
