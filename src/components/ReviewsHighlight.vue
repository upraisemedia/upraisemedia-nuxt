<script setup>
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

/**
 * Initialize animations when component is mounted
 */
onMounted(() => {
    ctx = gsap.context((self) => {
        const reviews = self.selector('.review');
        reviews.forEach((review, index) => {
            gsap.fromTo(review, {
                y: 30,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: 0.1 * index,
                scrollTrigger: {
                    trigger: review,
                    start: '30% bottom',
                },
            });
        });
    }, main.value);
});

/**
 * Revert all animations when component is unmounted
 */
onUnmounted(() => {
    ctx.revert();
});
</script>

<template>
    <section ref="main">
        <div class="container">
            <div class="grid items-center text-center lg:grid-cols-12">
                <div class="top lg:col-span-6 lg:col-start-4">
                    <IconsStarsOutlined/>
                    <h2 class="h3">Wat klanten zeggen over Upraise Media</h2>
                    <p>
                        Maecenas consequat leo imperdiet libero tincidunt vehicula. Vivamus mattis elit vitae varius
                        ultrices. Aenean posuere erat faucibu
                    </p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-10">
                <Review
                    class="review"
                    review="De samenwerking met Upraise Media voor onze Gifty website was een uitstekende ervaring. Jochem combineert technische expertise met creatieve oplossingen, wat resulteerde in een snelle en functionele website. Voor vragen en aanpassingen is hij goed bereikbaar en voert deze snel door. Bedankt Jochem!"
                    name="Sjon Sluys"
                    company="Gifty"
                    image="https://placehold.co/70x70"
                />
                <Review
                    class="review"
                    review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt
                    tincidunt. Nulla facilisi. Nullam nec eros nec urna tincidunt aliquam. Sed nec metus sit amet
                    massa."
                    name="Sjon Sluys"
                    company="Gifty"
                    image="https://placehold.co/70x70"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    position: relative;
    padding-top: 5rem;
    padding-bottom: 10rem;

    @screen xl {
        padding-top: 14.7rem;
        padding-bottom: 15rem;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 75%;
        background-color: var(--color-primary);
        z-index: 1;

        @screen xl {
            height: 70%;
        }
    }

    .container {
        position: relative;
        z-index: 2;
    }

    .top {
        color: var(--color-white);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5rem;

        h2 {
            color: var(--color-white);
            margin: 2.4rem 0;
        }

        p {
            opacity: 0.6;
        }

        svg {
            fill: var(--color-white);

            * {
                fill: var(--color-white);
            }
        }
    }
}
</style>