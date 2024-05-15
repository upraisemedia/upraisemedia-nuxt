<template>
    <section>
        <div class="container">
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

                <Project
                    class="md:col-span-5"
                    name="Be-Pretty"
                    subtitle="Ontwerp & realisatie website"
                    url="https://be-pretty.nl"
                    image="images/projects/be-pretty.webp"
                    variant="1"
                />

                <div class="md:col-span-5 md:col-start-8 self-center">
                    <h3 class="mb-4">
                        Geïnteresseerd in een samenwerking?
                    </h3>
                    <p class="mb-8">
                        Neem contact met ons op voor een vrijblijvend gesprek.
                    </p>
                    <p>
                        <UiButton
                            text="Neem contact op"
                            to="/contact"
                        />
                    </p>
                </div>
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
<script setup lang="ts">
</script>
