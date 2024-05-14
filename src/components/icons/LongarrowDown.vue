<script setup>
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {DrawSVGPlugin} from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const svgRef = ref(null);
let ctx;

/**
 * Initialize animations when component is mounted
 */
onMounted(() => {
    ctx = gsap.context(() => {
        gsap.from('.draw-me', {
            duration: 1,
            stagger: 0.1,
            drawSVG: 0,
            scrollTrigger: {
                trigger: svgRef.value,
                start: 'top 90%',
                end: 'top 70%',
            }
        });
    }, svgRef.value);
});

/**
 * Revert all animations when component is unmounted
 */
onUnmounted(() => {
    ctx.revert();
});
</script>

<template>
    <svg width="92" height="259" viewBox="0 0 92 259" fill="none" xmlns="http://www.w3.org/2000/svg" ref="svgRef">
        <path class="draw-me" d="M90.75 177.75C79.0833 185.25 53.85 211.85 46.25 258.25" stroke="#191919" stroke-width="3" />
        <path class="draw-me" d="M1.25 177.75C12.9167 185.25 38.15 211.85 45.75 258.25" stroke="#191919" stroke-width="3" />
        <path class="draw-me" transform="rotate(90 46.5 1)" fill="#191919" stroke="#191919" stroke-width="3" d="M46.5 1h256.5v0H46.5Z" />
    </svg>
</template>