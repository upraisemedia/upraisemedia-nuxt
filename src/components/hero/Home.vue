<script setup>
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText';
import {Draggable} from "gsap/Draggable";
import {InertiaPlugin} from "gsap/InertiaPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin);

const main = ref(null);
let ctx;

/**
 * Initialize animations when component is mounted
 */
onMounted(() => {
    ctx = gsap.context(() => {
        // Stars 1
        gsap.to(".stars1", {
            x: 100,
            y: 50,
            rotate: -25,
            scrollTrigger: {
                trigger: ".stars1",
                start: "top center",
                scrub: 0.5,
            }
        });

        // Stars 2 (scale)
        gsap.to(".stars2", {
            scale: 1.2,
            rotate: 10,
            scrollTrigger: {
                trigger: ".stars2",
                start: "top center",
                scrub: 0.5
            }
        });

        // Rectangle
        gsap.to(".rectangle", {
            y: 100,
            scrollTrigger: {
                trigger: ".rectangle",
                start: "top center",
                scrub: 0.5
            }
        });

        // Heading span
        const split = new SplitText("h1 span", {type: "chars"});
        gsap.from(split.chars, {
            duration: 0.2,
            y: 100,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: "h1",
                start: "top center",
            }
        });

        // Make the square draggable
        Draggable.create(".square", {
            bounds: main.value,
            type: "x,y",

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
    <section ref="main" class="hero">
        <div class="container">
            <div class="grid md:grid-cols-12">
                <div class="md:col-span-10">
                    <p>Partner voor digitale oplossingen</p>
                    <h1>
                        Wij zijn jouw Creative <span>Digital</span> Agency
                        <IconsPiercedCirclesWhite/>
                    </h1>
                </div>
            </div>
        </div>

        <!-- Floating elements -->
        <div class="floating-element stars1">
            <IconsStarsFilledWhite/>
        </div>
        <div class="floating-element stars2">
            <IconsStarsFilledWhite/>
        </div>
        <div class="floating-element square"/>
        <div class="floating-element rectangle"/>
        <!-- Floating elements end -->

    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 10rem 0 5rem 0;
    position: relative;
    display: flex;
    align-items: center;
    min-height: 70vh;
    overflow: hidden;

    @screen lg {
        min-height: 85vh;
    }

    @screen xl {
        min-height: auto;
        height: 200vh;
        max-height: 100rem;
    }

    p {
        color: var(--color-tertiary);
    }

    h1 {
        color: var(--color-white);
        font-weight: var(--font-weight-bold);

        @screen md {
            font-size: 8rem;
            line-height: 9rem;
        }

        @screen xl {
            font-size: 12.8rem;
            line-height: 13.8rem;
        }

        span {
            -webkit-text-stroke: 0.1rem var(--color-white);
            -webkit-text-fill-color: transparent;
            font-weight: var(--font-weight-regular);
        }

        svg {
            display: inline-block;
            width: 10rem;
            height: 2.6rem;

            @screen xl {
                width: 13rem;
                height: 3rem;
                margin-top: 2rem;
            }
        }
    }

    // Floating elements
    .floating-element {
        position: absolute;
        //pointer-events: none;
        z-index: 1;

        svg {
            width: 100%;
            height: 100%;
        }

        &.stars1 {
            left: -10%;
            top: 8%;
            transition: all .3s;

            @screen md {
                left: 5%;
                top: 10%;
            }
        }

        &.stars2 {
            right: 0;
            bottom: -10%;
            width: 24rem;
            height: 24rem;
            transition: all .3s;

            @screen md {
                right: 10%;
                bottom: 2%;
            }

            @screen xl {
                width: 52rem;
                height: 52rem;
                bottom: 5%;
                right: 25%;
            }
        }

        &.square {
            width: 6rem;
            height: 6rem;
            background-color: var(--color-midgrey);
            right: 15%;
            top: 12%;
            transform: rotate(45deg);
            transition: all .3s;

            @screen xl {
                width: 14rem;
                height: 14rem;
                top: 17%;
                right: 10%;
            }
        }

        &.rectangle {
            width: 20rem;
            height: 32rem;
            background-color: var(--color-midgrey);
            right: 15%;
            top: 15%;
            bottom: 0;
            margin: auto 0;
            border-radius: 15rem;
            display: none;
            transition: all .3s;

            @screen xl {
                display: block;
            }
        }
    }
}
</style>