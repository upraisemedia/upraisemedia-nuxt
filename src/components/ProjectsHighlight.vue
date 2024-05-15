<script setup>
</script>

<template>
    <section>
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-24">
                <div class="md:col-span-4 text-right">
                    <IconsStarsOutlined class="ml-auto w-28 h-28"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare sit amet enim id pellentesque.
                </div>
                <div class="md:col-span-6 md:col-start-7">
                    <h2>Een greep uit ons werk waar wij trots op zijn</h2>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-y-48">
                <Project
                    class="md:col-span-5"
                    name="Be Pretty Models Agency"
                    subtitle="Ontwerp & realisatie website"
                    url="https://beprettymodels.nl"
                    image="images/projects/be-pretty-models-agency.webp"
                    variant="1"
                />
                <Project
                    class="md:col-span-5 md:col-start-7 md:self-end"
                    name="Onderhoudsbedrijf J. van Nelfen"
                    subtitle="Ontwerp & realisatie website"
                    url="https://jvannelfenschilderwerken.nl"
                    image="images/projects/jvannelfen-schilderwerken.webp"
                    variant="2"
                />
                <Project
                    class="md:col-span-8 md:col-start-3"
                    name="Gifty"
                    subtitle="Realisatie website"
                    url="https://gifty.nl"
                    image="images/projects/gifty.webp"
                    variant="2"
                />
                <Project
                    class="md:col-span-5"
                    name="Happydees Trimsalon"
                    subtitle="Ontwerp & realisatie website"
                    url="https://happydeestrimsalon.nl"
                    image="images/projects/happydees-trimsalon.webp"
                    variant="2"
                />
                <Project
                    class="md:col-span-5 md:col-start-8"
                    name="Tekenbureau Piso B.V."
                    subtitle="Ontwerp & realisatie website"
                    url="https://piso.nl"
                    image="images/projects/tekenbureau-piso.webp"
                    variant="4"
                />
            </div>
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
}
</style>
