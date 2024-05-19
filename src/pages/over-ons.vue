<script setup>
useSeoMeta({
    title: 'Over ons | Upraise Media',
    ogTitle: 'Over ons | Upraise Media',
    description: 'Upraise Media is een ervaren digitaal bureau met meer dan negen jaar expertise in de branche. Ons doel is om bedrijven te ondersteunen door het ontwikkelen van hoogwaardige websites, webshops en op maat gemaakte systemen.',
    ogDescription: 'Upraise Media is een ervaren digitaal bureau met meer dan negen jaar expertise in de branche. Ons doel is om bedrijven te ondersteunen door het ontwikkelen van hoogwaardige websites, webshops en op maat gemaakte systemen.',
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
                <span>Over ons</span>
            </li>
        </ul>
        <h1>Over ons</h1>
    </HeroDefault>

    <Content>
        <div class="grid lg:grid-cols-12">
            <div class="lg:col-span-8">
                <h2 class="!mb-0">Upraise Media</h2>
                <h3>Partner voor digitale oplossingen</h3>
                <p>
                    Upraise Media is een ervaren digitaal bureau met meer dan negen jaar expertise in de branche. Ons doel is om bedrijven te ondersteunen door het ontwikkelen van hoogwaardige websites, webshops en op maat gemaakte systemen. Daarnaast zijn we gespecialiseerd in zoekmachineoptimalisatie, wat essentieel is voor het vergroten van de online zichtbaarheid van je bedrijf.
                </p>
                <p>
                    Bij Upraise Media begrijpen we dat ondernemen veel vraagt en daarom nemen we graag de technische zorgen uit handen. Of je nu installaties aanlegt, goederen transporteert of ruimtes verhuurt, wij zorgen ervoor dat je digitale aanwezigheid optimaal is. Zo kan je concentreren op wat echt belangrijk is: ondernemen!
                </p>
                <p>
                    Vertrouw op Upraise Media om je digitale partner te zijn in deze snel evoluerende digitale wereld, waarbij we niet alleen reageren op de huidige trends, maar ook proactief nieuwe mogelijkheden verkennen om je bedrijf voorop te stellen.
                </p>
            </div>
        </div>
    </Content>

    <Logos class="!pt-0"/>

    <CallToAction class="!pt-0" />
</template>
