<script setup>
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {DrawSVGPlugin} from 'gsap/DrawSVGPlugin';

const props = defineProps({
    animate: {
        type: Boolean,
        default: false
    },
})

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const svgRef = ref(null);
let ctx;

/**
 * Initialize animations when component is mounted
 */
onMounted(() => {
    ctx = gsap.context(() => {
        if (!props.animate) return;

        gsap.from('.draw-me', {
            duration: 1,
            drawSVG: 0,
            scrollTrigger: {
                trigger: svgRef.value,
                start: 'top center',
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
    <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg" ref="svgRef">
        <path class="draw-me" d="M31.0364 1C22.7783 6.08529 5.40451 17.3047 1.97422 21.5001C-1.45607 25.6954 4.9916 25.7908 8.64422 25.314L48.1878 15.7791C52.6345 14.8256 59.5268 14.6349 51.5228 21.5001L19.6021 42.4769C16.2671 45.3373 14.0755 50.0094 31.9893 45.8141L55.3343 41.5234C61.0514 40.411 71.3423 39.7117 66.7686 45.8141L49.1407 62.5002C46.9174 64.725 46.6633 68.9839 63.4336 68.2211" stroke="#191919" stroke-width="2"/>
    </svg>
</template>