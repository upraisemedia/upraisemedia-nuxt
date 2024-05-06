<template>
    <section>
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-24">
                <div class="md:col-span-4 text-right">
                    <IconsStarsOutlined class="ml-auto w-28 h-28"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare sit amet enim id pellentesque.
                </div>
                <div class="md:col-span-6 md:col-start-7">
                    <h2>Interessante artikelen vind je in onze blog</h2>
                </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-10">
                <BlogItem
                    name="Lorem ipsum dolor sit amet"
                    author="John Doe"
                    dateNumber="12"
                    dateMonth="Aug"
                />
                <BlogItem
                    name="Lorem ipsum dolor sit amet"
                    author="John Doe"
                    dateNumber="12"
                    dateMonth="Aug"
                />
                <BlogItem
                    name="Lorem ipsum dolor sit amet"
                    author="John Doe"
                    dateNumber="12"
                    dateMonth="Aug"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding-bottom: 6rem;

    @screen lg {
        padding-bottom: 8rem;
    }

    @screen xl {
        padding-bottom: 11rem;
    }
}
</style>