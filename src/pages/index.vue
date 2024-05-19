<script setup>
useSeoMeta({
    title: 'Partner voor digitale oplossingen | Upraise Media',
    ogTitle: 'Partner voor digitale oplossingen | Upraise Media',
    description: 'Upraise Media is een creatief digitaal bureau dat gespecialiseerd is in webdesign, webontwikkeling en digitale marketing. Wij helpen bedrijven met het realiseren van hun online doelen.',
    ogDescription: 'Upraise Media is een creatief digitaal bureau dat gespecialiseerd is in webdesign, webontwikkeling en digitale marketing. Wij helpen bedrijven met het realiseren van hun online doelen.',
})
</script>

<template>
    <HeroHome/>

    <ImageWide
        image="images/business.webp"
        alt="Upraise Media Creative Digital Agency"
        below-hero
    />

    <Services/>

    <Divider/>

    <AboutInline class="xl:!pb-8" />

    <ImageWide
        image="images/wireframes.webp"
        alt="Upraise Media Web Development"
    />

    <ProjectsHighlight/>

    <ReviewsHighlight/>

    <CallToAction class="!pt-0" />
</template>
