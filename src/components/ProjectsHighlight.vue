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
                    name="Gifty"
                    subtitle="Website"
                    url="/"
                    image="https://images.pexels.com/photos/23096924/pexels-photo-23096924/free-photo-of-a-balcony-with-pots-of-plants-and-a-statue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    variant="1"
                />
                <Project
                    class="md:col-span-5 md:col-start-7 md:self-end"
                    name="Gifty"
                    subtitle="Website"
                    url="/"
                    image="https://images.pexels.com/photos/23322602/pexels-photo-23322602/free-photo-of-an-aerial-view-of-a-beach-and-a-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    variant="2"
                />
                <Project
                    class="md:col-span-8 md:col-start-3"
                    name="Gifty"
                    subtitle="Website"
                    url="/"
                    image="https://images.pexels.com/photos/23383929/pexels-photo-23383929/free-photo-of-a-man-walking-down-a-street-with-a-red-tram.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    variant="2"
                />
                <Project
                    class="md:col-span-5"
                    name="Gifty"
                    subtitle="Website"
                    url="/"
                    image="https://images.pexels.com/photos/20265011/pexels-photo-20265011/free-photo-of-a-woman-sitting-on-top-of-a-pile-of-rubble-with-a-construction-site-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    variant="2"
                />
                <Project
                    class="md:col-span-5 md:col-start-8"
                    name="Gifty"
                    subtitle="Website"
                    url="/"
                    image="https://images.pexels.com/photos/20195753/pexels-photo-20195753/free-photo-of-new-york-city-at-night-from-the-top-of-the-empire-state-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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