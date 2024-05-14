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
        // TODO: animations
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
                    <slot/>
                    <IconsPiercedCircles/>
                </div>
            </div>

            <!-- Lines -->
            <div class="lines">
                <div></div>
                <div></div>
            </div>
        </div>

        <!-- Floating elements -->
        <div class="floating-element stars">
            <IconsStarsFilled/>
        </div>
        <div class="floating-element drawing">
            <IconsDrawing animate/>
        </div>
        <!-- Floating elements end -->

    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: var(--color-white);
    color: var(--color-white);
    padding: 25rem 0 5rem 0;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;

    ::v-deep(ul) {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        position: relative;
        z-index: 2;

        li {
            a,
            span {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                color: var(--color-primary);

                &:after {
                    content: '/'
                }
            }

            span {
                color: var(--color-tertiary);
            }

            &:last-child {
                a,
                span {
                    &:after {
                        content: '';
                    }
                }
            }
        }
    }

    ::v-deep(p) {
        color: var(--color-tertiary);
    }

    ::v-deep(h1) {
        color: var(--color-primary);
        font-weight: var(--font-weight-bold);

        @screen md {
            font-size: 8rem;
            line-height: 9rem;
        }

        @screen xl {
            font-size: 12.8rem;
            line-height: 13.8rem;
        }
    }

    // Floating elements
    .floating-element {
        position: absolute;
        z-index: 1;

        svg {
            width: 100%;
            height: 100%;
        }

        &.stars {
            left: -12%;
            top: 11%;
            transition: all .3s;

            @screen md {
                left: 1%;
                top: 10%;
            }
        }

        &.drawing {
            width: 6.7rem;
            height: 6.7rem;
            right: 10%;
            top: 22%;
            transition: all .3s;

            @screen xl {
                top: 30%;
                right: 22%;
            }
        }
    }

    .container {
        position: relative;
    }

    // Lines
    .lines {
        pointer-events: none;

        div {
            border: 0.1rem solid var(--color-tertiary);
            opacity: 0.1;
            width: 170rem;
            height: 80rem;
            position: absolute;

            &:nth-child(1) {
                bottom: 5rem;
                left: 15rem;

                @screen lg {
                    left: 25rem;
                }

                @screen xl {
                    left: 40rem;
                }
            }

            &:nth-child(2) {
                bottom: -5rem;
                left: 5rem;

                @screen lg {
                    left: 15rem;
                }

                @screen xl {
                    left: 25rem;
                }
            }
        }
    }
}
</style>