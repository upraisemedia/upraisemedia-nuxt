<script setup>
useSeoMeta({
    title: 'Diensten | Upraise Media',
    ogTitle: 'Diensten | Upraise Media',
    description: 'De diensten van Upraise Media bestaan uit webdesign, webontwikkeling en digitale marketing. Wij helpen bedrijven met het realiseren van hun online doelen.',
    ogDescription: 'De diensten van Upraise Media bestaan uit webdesign, webontwikkeling en digitale marketing. Wij helpen bedrijven met het realiseren van hun online doelen.',
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
                <span>Diensten</span>
            </li>
        </ul>
        <h1>Diensten</h1>
    </HeroDefault>

    <Services/>

</template>