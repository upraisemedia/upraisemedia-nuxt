<script setup>
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

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

        const split = new SplitText("h2", {type: "words"});
        gsap.from(split.words, {
            duration: 0.2,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: "h2",
                start: "bottom 90%",
            }
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
                        Wij zijn trots op de samenwerkingen met onze klanten<br class="hidden xl:block"/>
                        en de mooie resultaten die wij hebben behaald.
                    </p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-10">
                <Review
                    class="review"
                    review="De samenwerking met Upraise Media voor onze Gifty website was een uitstekende ervaring. Jochem combineert technische expertise met creatieve oplossingen, wat resulteerde in een snelle en functionele website. Voor vragen en aanpassingen is hij goed bereikbaar en voert deze snel door. Bedankt Jochem!"
                    name="Sjon Sluys"
                    company="Gifty"
                />
                <Review
                    class="review"
                    review="Upraise Media heeft voor mij, niet 1, maar 2 prachtige websites gemaakt dit jaar! Jochem heeft geholpen met het ontwerpen, na aanlevering van mijn ideeën en zet deze geheel naar wens in elkaar. Jochem altijd een snelle levertijd, voor zowel de website, als aanpassingen die we willen doorvoeren. Geen vraag is teveel! Ik ben onwijs tevreden over Upraise Media en beveel hun zeker aan!!"
                    name="Alisha van den Berg"
                    company="Be-Pretty & BePrettyModels"
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
