<script setup>
useSeoMeta({
    title: 'Maatwerk applicatie | Upraise Media',
    ogTitle: 'Maatwerk applicatie | Upraise Media',
    description: 'Op maat gemaakte softwareoplossingen die aansluiten op de specifieke behoeften van uw bedrijf. Neem contact op met Upraise Media voor meer informatie.',
    ogDescription: 'Op maat gemaakte softwareoplossingen die aansluiten op de specifieke behoeften van uw bedrijf. Neem contact op met Upraise Media voor meer informatie.',
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
                <span>Maatwerk applicatie</span>
            </li>
        </ul>
        <h1>Maatwerk</h1>
    </HeroDefault>

    <Content>
        <div class="grid lg:grid-cols-12">
            <div class="lg:col-span-8">
                <h2>Software op maat</h2>
                <p>
                    Upraise Media is gespecialiseerd in het ontwerpen en ontwikkelen van maatwerk applicaties. Deze dienst is essentieel voor bedrijven die unieke softwareoplossingen nodig hebben die nauw aansluiten op hun specifieke bedrijfsprocessen en behoeften.
                </p>
                <p>
                    Maatwerksoftware biedt verschillende voordelen en mogelijkheden die niet altijd haalbaar zijn met standaard softwarepakketten:
                </p>
                <ul>
                    <li><strong>Volledige personalisatie:</strong> De software wordt volledig aangepast aan de specifieke behoeften en voorkeuren van het bedrijf, wat resulteert in een efficiëntere en effectievere workflow.</li>
                    <li><strong>Schaalbaarheid:</strong> Maatwerkapplicaties zijn ontworpen om mee te groeien met het bedrijf. Ze kunnen worden aangepast en uitgebreid naarmate de bedrijfsbehoeften veranderen.</li>
                    <li><strong>Integratie:</strong> Maatwerksoftware kan worden geïntegreerd met bestaande systemen en software binnen het bedrijf, waardoor gegevenssilo's worden verminderd en de algehele operationele efficiëntie wordt verbeterd.</li>
                </ul>
                <h3>Voorbeelden van maatwerksoftware zijn</h3>
                <ul>
                    <li><strong>Op maat gemaakte CRM-systemen:</strong> Specifiek ontworpen om te voldoen aan de unieke verkoop- en klantbeheerprocessen van een bedrijf.</li>
                    <li><strong>Speciale rapportagetools:</strong> Tools die gegevensanalyse en rapportage bieden aangepast aan de specifieke vereisten van een organisatie.</li>
                    <li><strong>Aangepaste mobiele apps:</strong> Apps ontworpen om de specifieke diensten of producten van een bedrijf te ondersteunen, met functies die klantbetrokkenheid verhogen.</li>
                </ul>
                <h4>Benieuwd naar de mogelijkheden?</h4>
                <p>Neem dan contact op met Upraise Media.</p>
                <p>
                    <UiButton to="/contact" text="Contact"/>
                </p>
            </div>
        </div>
    </Content>
</template>
