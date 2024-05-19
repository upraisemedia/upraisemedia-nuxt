<script setup>
useSeoMeta({
    title: 'Website met CMS | Upraise Media',
    ogTitle: 'Website met CMS | Upraise Media',
    description: 'Een website met een Content Management Systeem (CMS) biedt je de mogelijkheid om eenvoudig en zonder technische voorkennis de inhoud van je website te beheren en bij te werken. Neem contact op met Upraise Media voor meer informatie.',
    ogDescription: 'Een website met een Content Management Systeem (CMS) biedt je de mogelijkheid om eenvoudig en zonder technische voorkennis de inhoud van je website te beheren en bij te werken. Neem contact op met Upraise Media voor meer informatie.',
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
                <NuxtLink to="/diensten">
                    Diensten
                </NuxtLink>
            </li>
            <li>
                <span>Website met CMS</span>
            </li>
        </ul>
        <h1>Website met CMS</h1>
    </HeroDefault>

    <Content>
        <div class="grid lg:grid-cols-12">
            <div class="lg:col-span-8">
                <h2>Content Management Systeem</h2>
                <p>
                    Een website met een Content Management Systeem (CMS) biedt je de mogelijkheid om eenvoudig en zonder technische voorkennis de inhoud van je website te beheren en bij te werken. Een CMS zoals WordPress of Statamic biedt een gebruiksvriendelijke interface waarin je teksten kunt bewerken, afbeeldingen kunt plaatsen, pagina’s kunt toevoegen of verwijderen, en de structuur van je site kunt aanpassen. Dit maakt het voor jou mogelijk om je online inhoud actueel en relevant te houden zonder dat je diepgaande kennis van programmeren nodig hebt.
                </p>
                <p>
                    Het gebruik van een CMS is wenselijk vanwege de flexibiliteit en onafhankelijkheid die het biedt. Je bent niet meer afhankelijk van een webontwikkelaar voor kleine updates of snelle aanpassingen, wat tijd en kosten bespaart. Daarnaast zijn moderne CMS-systemen ontworpen om goed samen te werken met zoekmachines, wat helpt bij de SEO (Search Engine Optimization) van je website en dus bij het aantrekken van meer bezoekers.
                </p>
                <p>
                    Het laten ontwikkeling van een CMS-gebaseerde website door Upraise Media kan vele voordelen hebben. Upraise Media heeft de expertise om een complexe, volledig aangepaste site te bouwen die specifiek is afgestemd op jouw zakelijke behoeften en doelgroep. Wij zorgen ervoor dat de site niet alleen visueel aantrekkelijk is, maar ook technisch geoptimaliseerd voor snelheid en beveiliging. Bovendien kan Upraise Media ondersteuning bieden bij het opzetten van een strategie voor contentbeheer, het trainen van je team om het CMS effectief te gebruiken, en het bieden van voortdurende technische ondersteuning en onderhoud. Dit zorgt voor een soepele en professionele online aanwezigheid die kan meegroeien met je bedrijf.
                </p>
                <h4>Benieuwd naar de mogelijkheden?</h4>
                <p>Neem dan contact op met Upraise Media.</p>
                <p>
                    <UiButton to="/contact" text="Contact"/>
                </p>
            </div>
        </div>
    </Content>
</template>
