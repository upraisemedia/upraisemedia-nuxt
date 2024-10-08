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
        const services = self.selector('.service');
        services.forEach((service, index) => {
            gsap.fromTo(service, {
                y: 30,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: 0.1 * index,
                scrollTrigger: {
                    trigger: service,
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
            <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-16">
                <div class="service">
                    <div class="icon">
                        <IconsStarsOutlined/>
                    </div>
                    <div class="body">
                        <h4>Websites</h4>
                        <p>
                            Jouw visitekaartje op het internet. Een website is een must voor iedere ondernemer.
                        </p>
                        <ul>
                            <li>
                                <NuxtLink to="/diensten/website-op-maat">Websites op maat</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/diensten/website-met-cms">Websites met CMS</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="service">
                    <div class="icon">
                        <IconsBox/>
                    </div>
                    <div class="body">
                        <h4>Webshops</h4>
                        <p>
                            Verkoop jouw producten online met een professionele webshop. Wij helpen je graag verder.
                        </p>
                        <ul>
                            <li>
                                <NuxtLink to="/diensten/webshop-op-maat">Webshop op maat</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="service">
                    <div class="icon">
                        <IconsStripes/>
                    </div>
                    <div class="body">
                        <h4>SEO</h4>
                        <p>
                            Zorg dat jouw website goed gevonden wordt in zoekmachines zoals Google.
                        </p>
                        <ul>
                            <li>
                                <NuxtLink to="/diensten/zoekmachineoptimalisatie">Zoekmachineoptimalisatie</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="service">
                    <div class="icon">
                        <IconsDrawing/>
                    </div>
                    <div class="body">
                        <h4>Maatwerk</h4>
                        <p>
                            Heb je specifieke wensen? Wij maken graag een website of applicatie op maat voor je.
                        </p>
                        <ul>
                            <li>
                                <NuxtLink to="/diensten/applicatie-op-maat">Applicatie op maat</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 6rem 0;

    @screen lg {
        padding: 8rem 0;
    }

    @screen xl {
        padding: 11rem 0;
    }

    .service {
        border-bottom: 0.1rem solid rgba(#191919, 0.1);
        padding-bottom: 3rem;

        @screen xl {
            border-bottom: none;
            padding-bottom: 0;
            border-right: 0.1rem solid rgba(#191919, 0.1);
            padding-right: 3rem;
        }

        &:nth-child(3) {
            @screen md {
                border-bottom: none;
            }
        }

        &:nth-child(4) {
            border: none;
        }

        .icon {
            width: 7rem;
            height: 7rem;
            margin-bottom: 3.2rem;

            svg {
                width: 100%;
                height: 100%;
            }
        }

        .body {
            p {
                margin: 1.6rem 0;
                display: block;
            }

            ul {
                list-style-type: disc;
                padding-left: 1.6rem;

                a {
                    @media (hover: hover) {
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
}
</style>
