<script setup>
useSeoMeta({
    title: 'Een (digitaal) kopje koffie drinken of gewoon even babbelen? | Upraise Media',
    ogTitle: 'Een (digitaal) kopje koffie drinken of gewoon even babbelen? | Upraise Media',
    description: 'Neem contact op met Upraise Media voor een vrijblijvend gesprek over jouw project of idee. Wij helpen je graag verder.',
    ogDescription: 'Neem contact op met Upraise Media voor een vrijblijvend gesprek over jouw project of idee. Wij helpen je graag verder.',
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
                <span>Contact</span>
            </li>
        </ul>
        <h1>Contact</h1>
    </HeroDefault>

    <ContactDetails/>

    <Logos class="!pt-0"/>

</template>
