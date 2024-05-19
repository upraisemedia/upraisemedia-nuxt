<script setup>
</script>

<template>
    <section>
            <IconsSquares/>
        <div class="container">
            <div class="grid md:grid-cols-2 md:items-center gap-16">

                <div>
                    <img src="~/assets/img/u.svg" alt="Upraise Media"/>
                </div>
                <div>
                    <h2>Partner voor digitale oplossingen</h2>
                    <h3>Let's get in touch</h3>
                    <p class="pb-8">
                        Wij zijn een digitaal bureau met focus op het ontwikkelen van digitale oplossingen die jouw bedrijf naar een hoger niveau tillen. Wij helpen je met het ontwikkelen van een website, webshop of webapplicatie die aansluit bij jouw wensen en doelen. Wij zijn jouw partner voor digitale oplossingen.
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
