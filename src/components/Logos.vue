<template>
    <section>
        <div class="container">
            <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-4 gap-y-16">
                <div class="logo"><img src="~/assets/img/logos/gifty.svg" alt="Gifty" title="Gifty"/></div>
                <div class="logo"><img src="~/assets/img/logos/be-pretty.png" alt="Be-Pretty webshop" title="Be-Pretty webshop"/></div>
                <div class="logo"><img src="~/assets/img/logos/happydees.png" alt="Happydees Trimsalon" title="Happydees Trimsalon"/></div>
                <div class="logo"><img src="~/assets/img/logos/jvannelfen.jpg" alt="J. van Nelfen Schilderwerken" title="J. van Nelfen Schilderwerken"/></div>
                <div class="logo"><img src="~/assets/img/logos/be-pretty-models.svg" alt="Be-Pretty Models Agency" title="Be-Pretty Models Agency"/></div>
                <div class="logo"><img src="~/assets/img/logos/piso.png" alt="Piso Bouwkundig Tekenbureau B.V." title="Piso Bouwkundig Tekenbureau B.V."/></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 6rem 0;

    @screen lg {
        padding: 8rem;
    }

    @screen xl {
        padding: 12rem 0;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 11rem;
            max-height: 7rem;
            filter: grayscale(100%);
        }
    }
}
</style>