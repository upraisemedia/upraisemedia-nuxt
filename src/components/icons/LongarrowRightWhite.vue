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
            duration: 5,
            stagger: 0.1,
            drawSVG: 0,
            scrollTrigger: {
                trigger: svgRef.value,
                start: 'bottom bottom',
                end: 'bottom center',
                scrub: 1,
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
    <svg width="259" height="92" viewBox="0 0 259 92" fill="none" xmlns="http://www.w3.org/2000/svg" ref="svgRef">
        <path class="draw-me" d="M177.5 1C185 12.6667 211.6 37.9 258 45.5" stroke="#FFFFFF" stroke-width="3"/>
        <path class="draw-me" d="M177.5 90.5C185 78.8333 211.6 53.6 258 46" stroke="#FFFFFF" stroke-width="3"/>
        <path class="draw-me" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="3" d="M0.75 45.25h256.5v0H0.75Z" />
    </svg>
</template>