<script setup>
useSeoMeta({
    title: 'Wat wij doen | Upraise Media',
    ogTitle: 'Wat wij doen | Upraise Media',
    description: 'Bekijk hier een selectie van onze projecten en ontdek wat wij voor jou kunnen betekenen.',
    ogDescription: 'Bekijk hier een selectie van onze projecten en ontdek wat wij voor jou kunnen betekenen.',
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
                <span>Ons werk</span>
            </li>
        </ul>
        <h1>Ons werk</h1>
    </HeroDefault>

    <ProjectsOverview/>

</template>
