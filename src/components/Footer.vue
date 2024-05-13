<script setup>
const inverted = ref(false);
</script>

<template>
    <footer :class="inverted && 'invert'">
        <div class="container">

            <!-- Top -->
            <button
                class="footer-top"
                @click="() => console.log('hiero')"
                @mouseenter="inverted = true"
                @mouseleave="inverted = false"
            >
                <span>Let's Start <br/>Your Project</span>
                <IconsLongarrowRightWhite/>
            </button>

            <!-- Middle -->
            <div class="footer-middle grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-12 gap-12">
                <div class="md:col-span-3 lg:col-span-1 xl:col-span-5">
                    <NuxtLink to="/" class="logo">
                        <img src="~/assets/img/logo-white.svg" alt="Logo"/>
                    </NuxtLink>
                </div>
                <div class="col-span-2 md:col-span-1 xl:col-span-3">
                    <h4>Address</h4>
                    <p>
                        Walnootgaarde 38<br/>
                        3436 JC Nieuwegein<br/>
                        Nederland<br/><br/>
                        <NuxtLink to="mailto:info@upraisemedia.nl">info@upraisemedia.nl</NuxtLink>
                        <br/>
                        <NuxtLink to="tel:0631950195">0631950195</NuxtLink>
                    </p>
                </div>
                <div class="xl:col-span-2">
                    <h4>Links</h4>
                    <ul>
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Over ons</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Ons werk</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Diensten</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Contact</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="xl:col-span-2">
                    <h4>Socials</h4>
                    <ul>
                        <li>
                            <NuxtLink to="/">Facebook</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">Instagram</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">LinkedIn</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom -->
            <div class="text-center">
                Copyright &copy; 2024 Upraise Media
            </div>

            <!-- Outline -->
            <div class="text-center outline-text" :class="inverted && 'opacity-change'">
                Upraise Media
            </div>

        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: var(--color-primary);
    padding: 7rem 0;
    color: rgba(255, 255, 255, 0.6);
    position: relative;
    overflow: hidden;
    transition: all .2s;

    @screen md {
        padding: 10rem 0;
    }

    .footer-top {
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-bottom: 5rem;
        width: 100%;

        @screen md {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10rem;
        }

        @screen xl {
            max-width: 90%;
            margin-bottom: 12rem;
        }

        span {
            color: var(--color-white);
            font-family: 'Kanit', 'sans-serif';
            font-weight: 500;
            font-size: 5rem;
            line-height: 5.5rem;
            display: block;
            text-decoration: underline 0.15em rgba(255, 255, 255, 0);
            transition: text-decoration-color 300ms;

            @screen md {
                font-size: 8rem;
                line-height: 1;
            }

            @screen lg {
                font-size: 10rem;
            }

            @screen xl {
                font-size: 12.8rem;
                line-height: 13.8rem;
            }
        }

        @media (hover:hover) {
            &:hover {
                span {
                    text-decoration-color: rgba(255, 255, 255, 1);
                }
            }
        }
    }

    .footer-middle {
        margin-bottom: 5rem;

        @screen md {
            margin-bottom: 10rem;
        }

        @screen xl {
            margin-bottom: 12rem;
        }

        .logo {
            display: inline-block;

            img {
                width: 8.5rem;
            }
        }

        h4 {
            color: var(--color-white);
            margin-bottom: 1.6rem;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }
    }

    .outline-text {
        -webkit-text-stroke: 0.1rem var(--color-white);
        -webkit-text-fill-color: transparent;
        font-weight: var(--font-weight-light);
        font-size: 18rem;
        position: absolute;
        text-align: center;
        width: 100%;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 10%;
        line-height: 1;
        opacity: 0.03;
        text-transform: uppercase;
        white-space: nowrap;
        pointer-events: none;
        transition: all .3s;

        &.opacity-change {
            opacity: 0.1;
        }

        @screen xl {
            font-size: 28rem;
        }
    }

    a {
        @media (hover:hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>