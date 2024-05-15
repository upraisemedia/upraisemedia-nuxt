<script setup>
</script>

<template>
    <section>
            <IconsSquares/>
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-12 md:items-center gap-16">
                <div class="flex justify-center md:col-span-4 lg:col-start-2">
                    <img src="/images/jochem.webp" alt="Jochem van Krieken | Upraise Media"/>
                </div>
                <div class="md:col-span-8 lg:col-span-6">
                    <h2>Weten wat wij voor jou kunnen betekenen?</h2>
                    <p class="mb-8">
                        Jochem helpt je graag verder met jouw online succes! <br class="hidden xl:block"/>Neem contact met ons op voor een vrijblijvend gesprek.
                    </p>
                    <UiButton to="/contact" text="Neem contact op"/>
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

    h2 {
        margin-bottom: 0.8rem;
    }

    h3 {
        margin-bottom: 2.4rem;
    }

    img {
        border-radius: 50%;
        max-width: 29.5rem;
        width: 100%;
    }

    svg {
        display: none;

        @screen xl {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 1;
            margin: auto 0;
        }
    }
}
</style>
